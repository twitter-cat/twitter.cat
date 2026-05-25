import { SQL } from "bun";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

const PAGE_SIZE = 18;
const TWEETS_PER_PAGE = 5;
const SPARK_POINTS = 12;
const HOUR = 3_600_000;

// freshest data timestamps, refreshed periodically; windows anchor to these.
let storyAnchorMs = Date.now();
let tweetAnchorMs = Date.now();

async function refreshAnchors() {
  try {
    const [sRows, tRows] = await Promise.all([
      postgresReadOnly`SELECT max(timestamp) AS ts FROM stories`,
      postgresReadOnly`SELECT max(added_at) AS ta FROM tweets`,
    ]);
    if (sRows[0]?.ts) storyAnchorMs = new Date(sRows[0].ts).getTime();
    if (tRows[0]?.ta) tweetAnchorMs = new Date(tRows[0].ta).getTime();
  } catch (e) {
    console.warn("[home] anchors", e?.message || e);
  }
}

const iso = (ms) => new Date(ms).toISOString();

const TWEET_COLUMNS = `
  t.id, t.body, t.created_at, t.added_at, t.like_count, t.reply_count,
  t.retweet_count, t.quote_count, t.views_count, t.bookmarks_count, t.media,
  t.quoting_id, t.reply_to_status_id,
  p.username AS author_username, p.name AS author_name, p.avatar AS author_avatar,
  p.verified AS author_verified, p.protected AS author_protected`;

const cleanPfps = (pfps) => {
  if (!Array.isArray(pfps)) return [];
  return pfps
    .map((p) => {
      try {
        return JSON.parse(p);
      } catch {
        return String(p).replace(/^"|"$/g, "");
      }
    })
    .filter(Boolean);
};

const parseMedia = (m) => {
  if (Array.isArray(m)) return m;
  if (typeof m === "string") {
    try {
      const parsed = JSON.parse(m);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

const mapTweet = (r) => ({
  id: r.id,
  body: r.body,
  created_at: r.created_at,
  added_at: r.added_at,
  like_count: Number(r.like_count || 0),
  reply_count: Number(r.reply_count || 0),
  retweet_count: Number(r.retweet_count || 0),
  quote_count: Number(r.quote_count || 0),
  views_count: Number(r.views_count || 0),
  bookmarks_count: Number(r.bookmarks_count || 0),
  media: parseMedia(r.media),
  quoting_id: r.quoting_id || null,
  reply_to_status_id: r.reply_to_status_id || null,
  author_username: r.author_username,
  author_name: r.author_name,
  author_avatar: r.author_avatar,
  author_verified: r.author_verified,
  author_protected: r.author_protected,
});

const mapStory = (r) => ({
  id: r.id,
  title: r.title,
  summary: r.summary,
  tweetCount: Number(r.tweet_count || 0),
  category: r.category,
  region: r.region,
  created: r.created,
  updatedAt: r.last_updated_at,
  pfps: cleanPfps(r.pfps),
  indexedPosts:
    Number(r.top_tweet_ids?.length || 0) + Number(r.latest_tweet_ids?.length || 0),
});

const sampleSpark = (counts) => {
  if (counts.length <= SPARK_POINTS) return counts;
  const step = (counts.length - 1) / (SPARK_POINTS - 1);
  const out = [];
  for (let i = 0; i < SPARK_POINTS; i++) out.push(counts[Math.round(i * step)]);
  return out;
};

async function attachMomentum(stories) {
  const ids = stories.map((s) => s.id);
  if (!ids.length) return;

  const series = await postgresReadOnly`
    SELECT id, tweet_count, timestamp
    FROM stories
    WHERE id = ANY(${postgresReadOnly.array(ids, "text")})
      AND timestamp > ${new Date(storyAnchorMs - 24 * HOUR).toISOString()}
    ORDER BY id, timestamp
  `;

  const byId = new Map();
  for (const row of series) {
    if (!byId.has(row.id)) byId.set(row.id, []);
    byId.get(row.id).push(Number(row.tweet_count || 0));
  }

  for (const s of stories) {
    const counts = byId.get(s.id) || [];
    if (counts.length >= 2) {
      const first = counts[0];
      const last = counts[counts.length - 1];
      s.spark = sampleSpark(counts);
      s.momentum = first > 0 ? Math.round(((last - first) / first) * 100) : null;
    } else {
      s.spark = null;
      s.momentum = null;
    }
  }
}

async function attachQuotes(tweets) {
  const qids = [...new Set(tweets.filter((t) => t.quoting_id).map((t) => t.quoting_id))];
  if (!qids.length) return;

  const rows = await postgresReadOnly`
    SELECT t.id, t.body, t.media,
      p.username AS author_username, p.name AS author_name,
      p.avatar AS author_avatar, p.verified AS author_verified
    FROM tweets t
    JOIN profiles p ON p.id = t.author_id
    WHERE t.id = ANY(${postgresReadOnly.array(qids, "text")})
  `;

  const qmap = new Map(
    rows.map((r) => [
      r.id,
      {
        id: r.id,
        body: r.body,
        media: parseMedia(r.media),
        author_username: r.author_username,
        author_name: r.author_name,
        author_avatar: r.author_avatar,
        author_verified: r.author_verified,
      },
    ]),
  );

  for (const t of tweets) {
    if (t.quoting_id && qmap.has(t.quoting_id)) t.quoted = qmap.get(t.quoting_id);
  }
}

// time windows are anchored to the freshest data ($3/$4), not wall-clock now(),
// so the feed works whether the crawler is live or briefly stalled.
const HOT_SQL = `WITH recent AS (
  SELECT id, title, summary, tweet_count, category, region, created,
    last_updated_at, pfps, top_tweet_ids, latest_tweet_ids,
    first_value(tweet_count) OVER w_asc AS first_c,
    first_value(timestamp) OVER w_asc AS first_t,
    max(timestamp) OVER (PARTITION BY id) AS last_t,
    row_number() OVER (PARTITION BY id ORDER BY timestamp DESC) AS rn
  FROM stories
  WHERE timestamp > $3 AND title IS NOT NULL
  WINDOW w_asc AS (PARTITION BY id ORDER BY timestamp ASC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
)
SELECT id, title, summary, tweet_count, category, region, created,
  last_updated_at, pfps, top_tweet_ids, latest_tweet_ids
FROM recent
WHERE rn = 1
ORDER BY (tweet_count - first_c)
  / GREATEST(EXTRACT(EPOCH FROM (last_t - first_t)) / 3600.0, 0.25) DESC NULLS LAST
LIMIT $1 OFFSET $2`;

const LATEST_SQL = `WITH latest AS (
  SELECT DISTINCT ON (id)
    id, title, summary, tweet_count, category, region, created,
    last_updated_at, pfps, top_tweet_ids, latest_tweet_ids
  FROM stories
  WHERE last_updated_at > $3 AND title IS NOT NULL
  ORDER BY id, timestamp DESC
)
SELECT id, title, summary, tweet_count, category, region, created,
  last_updated_at, pfps, top_tweet_ids, latest_tweet_ids
FROM latest
ORDER BY ln(greatest(tweet_count, 1))
  - extract(epoch from ($4::timestamptz - last_updated_at)) / 3600.0 * 0.12 DESC
LIMIT $1 OFFSET $2`;

const POPULAR_TWEETS_SQL = `SELECT ${TWEET_COLUMNS}
  FROM tweets t JOIN profiles p ON p.id = t.author_id
  WHERE t.added_at > $3
    AND t.created_at > $4
    AND t.reply_to_status_id IS NULL
    AND t.like_count > 1000
  ORDER BY t.like_count DESC NULLS LAST
  LIMIT $1 OFFSET $2`;

let feedCache = new Map();
const FEED_CACHE_TTL = 30_000;

async function buildFeed(tab, offset) {
  const page = Math.floor(offset / PAGE_SIZE);
  const cacheKey = `${tab}|${offset}`;
  const cached = feedCache.get(cacheKey);
  if (cached && Date.now() - cached.t < FEED_CACHE_TTL) return cached.v;

  const storyPromise =
    tab === "hot"
      ? postgresReadOnly.unsafe(HOT_SQL, [
          PAGE_SIZE + 1,
          offset,
          iso(storyAnchorMs - 24 * HOUR),
        ])
      : postgresReadOnly.unsafe(LATEST_SQL, [
          PAGE_SIZE + 1,
          offset,
          iso(storyAnchorMs - 36 * HOUR),
          iso(storyAnchorMs),
        ]);

  const tweetPromise =
    tab === "foryou"
      ? postgresReadOnly.unsafe(POPULAR_TWEETS_SQL, [
          TWEETS_PER_PAGE,
          page * TWEETS_PER_PAGE,
          iso(tweetAnchorMs - 12 * HOUR),
          iso(tweetAnchorMs - 24 * HOUR),
        ])
      : Promise.resolve([]);

  const [storyRows, tweetRows] = await Promise.all([storyPromise, tweetPromise]);

  const hasMore = storyRows.length > PAGE_SIZE;
  if (hasMore) storyRows.pop();

  const stories = storyRows.map(mapStory);
  const tweets = tweetRows.map(mapTweet);
  await Promise.all([attachMomentum(stories), attachQuotes(tweets)]);

  const items = [];
  let ti = 0;
  stories.forEach((s, i) => {
    items.push({ type: "story", story: s });
    if (tab === "foryou" && ti < tweets.length && (i === 1 || (i > 1 && (i - 1) % 3 === 0))) {
      items.push({ type: "tweet", tweet: tweets[ti++] });
    }
  });
  while (tab === "foryou" && ti < tweets.length) {
    items.push({ type: "tweet", tweet: tweets[ti++] });
  }

  const next = offset + PAGE_SIZE;
  const result = { items, nextOffset: hasMore && next <= 360 ? next : null };
  feedCache.set(cacheKey, { t: Date.now(), v: result });
  if (feedCache.size > 200) feedCache = new Map();
  return result;
}

// keep the first page of both tabs warm so initial load + tab switches are instant
async function warm() {
  await refreshAnchors();
  try {
    await Promise.all([buildFeed("foryou", 0), buildFeed("hot", 0)]);
  } catch (e) {
    console.warn("[home] warm", e?.message || e);
  }
}
warm();
setInterval(warm, 20_000);

export default new Elysia({ prefix: "/home" })
  .use(
    rateLimit({
      duration: 15_000,
      max: 60,
      generator: (c) => c.headers.get("CF-Connecting-IP"),
      skip: (r) => r.method === "OPTIONS",
    }),
  )
  .get(
    "/",
    async ({ query }) => {
      const tab = query.tab === "hot" ? "hot" : "foryou";
      const offset = Math.max(0, Math.min(Number(query.offset) || 0, 360));
      return buildFeed(tab, offset);
    },
    {
      query: t.Object({
        tab: t.Optional(t.String()),
        offset: t.Optional(t.String()),
      }),
    },
  )
  .get(
    "/story/:id",
    async ({ params }) => {
      const id = params.id;
      if (!/^\d{1,25}$/.test(id)) return { error: "invalid id" };

      const [story] = await postgresReadOnly`
        SELECT id, title, summary, tweet_count, category, region, created,
          last_updated_at, pfps, top_tweet_ids, latest_tweet_ids, relevant_user_ids
        FROM stories
        WHERE id = ${id}
        ORDER BY timestamp DESC
        LIMIT 1
      `;
      if (!story) return { error: "not found" };

      const top = (story.top_tweet_ids || []).map(String);
      const latest = (story.latest_tweet_ids || []).map(String);
      const ids = Array.from(new Set([...top, ...latest]));
      const userIds = (story.relevant_user_ids || []).map(String);

      let relevantUsers = [];
      if (userIds.length > 0) {
        const users = await postgresReadOnly`
          SELECT id, username, name, avatar, verified, followers
          FROM profiles
          WHERE id = ANY(${postgresReadOnly.array(userIds, "text")})
        `;
        const umap = new Map(users.map((u) => [u.id, u]));
        relevantUsers = userIds
          .map((uid) => umap.get(uid))
          .filter(Boolean)
          .map((u) => ({
            username: u.username,
            name: u.name,
            avatar: u.avatar,
            verified: u.verified,
            followers: Number(u.followers || 0),
          }));
      }

      let tweetMap = new Map();
      if (ids.length > 0) {
        const tweets = await postgresReadOnly`
          SELECT
            t.id, t.body, t.created_at, t.added_at, t.like_count, t.reply_count,
            t.retweet_count, t.quote_count, t.views_count, t.bookmarks_count, t.media,
            t.quoting_id, t.reply_to_status_id,
            p.username AS author_username, p.name AS author_name, p.avatar AS author_avatar,
            p.verified AS author_verified, p.protected AS author_protected
          FROM tweets t
          JOIN profiles p ON p.id = t.author_id
          WHERE t.id = ANY(${postgresReadOnly.array(ids, "text")})
        `;
        for (const tw of tweets) tweetMap.set(tw.id, mapTweet(tw));
      }

      const orderUnique = (list) => {
        const seen = new Set();
        const out = [];
        for (const tid of list) {
          if (seen.has(tid) || !tweetMap.has(tid)) continue;
          seen.add(tid);
          out.push(tweetMap.get(tid));
        }
        return out;
      };

      const mapped = mapStory(story);
      await attachMomentum([mapped]);

      const topTweets = orderUnique(top);
      const latestTweets = orderUnique(latest);
      await attachQuotes([...topTweets, ...latestTweets]);

      return {
        story: mapped,
        relevantUsers,
        top: topTweets,
        latest: latestTweets,
      };
    },
    { params: t.Object({ id: t.String() }) },
  );
