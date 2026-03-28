import { SQL } from "bun";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import * as jose from "jose";
import { validateSession } from "./cap.js";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

const postgresReadWrite = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`,
);
const secret = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);

const SYNDICATION_URL = "https://cdn.syndication.twimg.com";
const TWEET_ID = /^[0-9]+$/;

function getToken(id) {
  return ((Number(id) / 1e15) * Math.PI).toString(6 ** 2).replace(/(0+|\.)/g, "");
}

async function fetchTweet(id) {
  if (id.length > 40 || !TWEET_ID.test(id)) {
    throw new Error(`Invalid tweet id: ${id}`);
  }

  const url = new URL(`${SYNDICATION_URL}/tweet-result`);

  url.searchParams.set("id", id);
  url.searchParams.set("lang", "en");
  url.searchParams.set(
    "features",
    [
      "tfw_timeline_list:",
      "tfw_follower_count_sunset:true",
      "tfw_tweet_edit_backend:on",
      "tfw_refsrc_session:on",
      "tfw_fosnr_soft_interventions_enabled:on",
      "tfw_show_birdwatch_pivots_enabled:on",
      "tfw_show_business_verified_badge:on",
      "tfw_duplicate_scribes_to_settings:on",
      "tfw_use_profile_image_shape_enabled:on",
      "tfw_show_blue_verified_badge:on",
      "tfw_legacy_timeline_sunset:true",
      "tfw_show_gov_verified_badge:on",
      "tfw_show_business_affiliate_badge:on",
      "tfw_tweet_edit_frontend:on",
    ].join(";"),
  );
  url.searchParams.set("token", getToken(id));

  const res = await fetch(url.toString());
  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : undefined;

  if (res.ok) {
    if (data?.__typename === "TweetTombstone") {
      return { tombstone: true };
    }
    if (data && Object.keys(data).length === 0) {
      return { notFound: true };
    }
    return { data };
  }
  if (res.status === 404) {
    return { notFound: true };
  }

  return {
    message:
      typeof data.error === "string"
        ? data.error
        : `Failed to fetch tweet at "${url}" with "${res.status}".`,
    status: res.status,
    data,
  };
}

async function parseTweetData(data) {
  if (!data) return null;

  const user = data.user;
  const media =
    data.mediaDetails?.map((m) => ({
      type: m.type,
      url: m.media_url_https || m.display_url,
      width: m.original_info?.width,
      height: m.original_info?.height,
    })) || [];

  return {
    id: data.id_str,
    body: data.text || "",
    created_at: new Date(data.created_at),
    like_count: data.favorite_count || 0,
    retweet_count: data.retweet_count || 0,
    reply_count: data.reply_count || 0,
    quote_count: data.quote_count || 0,
    views_count: data.views?.count || 0,
    bookmarks_count: data.bookmark_count || 0,
    media: JSON.stringify(media),
    reply_to_status_id: data.in_reply_to_status_id_str,
    quoting_id: data.quoted_tweet?.id_str,
    lang: data.lang,
    author: {
      id: user?.id_str,
      username: user?.screen_name,
      name: user?.name,
      avatar: user?.profile_image_url_https,
      verified: user?.verified || false,
      protected: user?.protected || false,
      square_avatar: user?.verified_type === "Business" || false,
    },
  };
}

async function insertTweetToDatabase(tweetData) {
  if (!tweetData || !tweetData.author) return false;

  try {
    const existingAuthor = await postgresReadOnly`
      SELECT id FROM profiles WHERE id = ${tweetData.author.id}
    `;

    if (existingAuthor.length === 0) {
      await postgresReadWrite`
        INSERT INTO profiles (id, username, name, avatar, verified, protected, square_avatar)
        VALUES (
          ${tweetData.author.id},
          ${tweetData.author.username},
          ${tweetData.author.name},
          ${tweetData.author.avatar},
          ${tweetData.author.verified ? 1 : 0},
          ${tweetData.author.protected ? 1 : 0},
          ${tweetData.author.square_avatar ? 1 : 0}
        )
        ON CONFLICT (id) DO NOTHING
      `;
    }

    await postgresReadWrite`
      INSERT INTO tweets (
        id, author_id, body, created_at, like_count, retweet_count, reply_count,
        quote_count, views_count, bookmarks_count, media, reply_to_status_id,
        quoting_id, lang
      )
      VALUES (
        ${tweetData.id},
        ${tweetData.author.id},
        ${tweetData.body},
        ${tweetData.created_at},
        ${tweetData.like_count},
        ${tweetData.retweet_count},
        ${tweetData.reply_count},
        ${tweetData.quote_count},
        ${tweetData.views_count},
        ${tweetData.bookmarks_count},
        ${tweetData.media},
        ${tweetData.reply_to_status_id},
        ${tweetData.quoting_id},
        ${tweetData.lang}
      )
      ON CONFLICT (id) DO NOTHING
    `;

    return true;
  } catch (error) {
    console.error("Failed to insert tweet to database:", error);
    return false;
  }
}

export default new Elysia()
  .use(
    rateLimit({
      duration: 15_000,
      max: 100,
      skip: (r) => r.method === "OPTIONS",
      generator: (c) => c.headers.get("CF-Connecting-IP"),
    }),
  )
  .get(
    "/proxy",
    async ({ query, request }) => {
      const sessionToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || null;
      const sessionResult = await validateSession(sessionToken);
      if (!sessionResult.success) {
        return { error: "invalid session" };
      }

      const { id, q } = query;

      if (!id) {
        return { error: "missing id" };
      }
      if (!["quoted"].includes(q)) {
        return { error: "invalid query" };
      }

      try {
        const dbTweet = await postgresReadOnly`
        SELECT
          tweets.id,
          tweets.body,
          tweets.created_at,
          tweets.like_count,
          tweets.retweet_count,
          tweets.reply_count,
          tweets.quote_count,
          tweets.views_count,
          tweets.bookmarks_count,
          tweets.media,
          author.username AS author_username,
          author.name AS author_name,
          author.avatar AS author_avatar,
          author.verified AS author_verified,
          author.protected AS author_protected,
          author.square_avatar AS author_square_avatar
        FROM tweets
        INNER JOIN profiles AS author ON tweets.author_id = author.id
        WHERE tweets.id = ${id}
      `;

        if (dbTweet.length > 0) {
          const tweet = dbTweet[0];
          tweet.media = JSON.parse(tweet.media || "[]");
          return { tweet };
        }
      } catch {}

      const fetchedTweet = await fetchTweet(id);

      if (fetchedTweet.notFound || fetchedTweet.tombstone) {
        return { error: "not found" };
      }

      const parsedTweet = await parseTweetData(fetchedTweet.data);

      if (parsedTweet) {
        insertTweetToDatabase(parsedTweet);

        return {
          tweet: {
            id: parsedTweet.id,
            body: parsedTweet.body,
            created_at: parsedTweet.created_at,
            like_count: parsedTweet.like_count,
            retweet_count: parsedTweet.retweet_count,
            reply_count: parsedTweet.reply_count,
            quote_count: parsedTweet.quote_count,
            views_count: parsedTweet.views_count,
            bookmarks_count: parsedTweet.bookmarks_count,
            media: JSON.parse(parsedTweet.media),
            author_username: parsedTweet.author.username,
            author_name: parsedTweet.author.name,
            author_avatar: parsedTweet.author.avatar,
            author_verified: parsedTweet.author.verified,
            author_protected: parsedTweet.author.protected,
            author_square_avatar: parsedTweet.author.square_avatar,
          },
        };
      }

      return { error: "failed to parse tweet" };
    },
    {
      query: t.Object({
        id: t.String(),
        q: t.String(),
      }),
    },
  )
  .post(
    "/permalink/sign",
    async ({ query, headers }) => {
      const { id } = query;

      if (
        headers["x-twittercat-client"] !==
        "igSshZ52A4QCk2UN7Ur36p56oRMVTFHXFw9KqMSRxzLjxkELRyHsgLyp7FxLazoW"
      ) {
        return {};
      }

      const entry = await postgresReadOnly`
        SELECT
          t.*,
          p.id AS author_id,
          p.username AS author_username,
          p.name AS author_name,
          p.avatar AS author_avatar,
          p.verified AS author_verified,
          p.protected AS author_protected,
          p.square_avatar AS author_square_avatar
        FROM tweets t
        JOIN profiles p ON p.id = t.author_id
        WHERE t.id = ${id}
        LIMIT 1
      `;

      if (entry.length === 0) {
        return { error: "not found" };
      }

      const jwt = await new jose.SignJWT({
        type: "permalink",
        entry: entry[0],
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(secret);

      return { jwt };
    },
    {
      query: t.Object({
        id: t.String(),
      }),
    },
  )
  .get(
    "/permalink/verify",
    async ({ query, headers }) => {
      const { jwt } = query;

      if (
        headers["x-twittercat-client"] !==
        "wtCji76iWhcEZMsA5awatQsGBJVgXsGncadhyUcWKoKVjSkH8Z3skvru7iVLU6k2"
      ) {
        return {};
      }

      try {
        const { payload } = await jose.jwtVerify(jwt, secret, {
          algorithms: ["HS256"],
        });

        if (payload.type !== "permalink" || !payload.entry) {
          return {};
        }

        const { entry } = payload;

        if (
          entry.avatar &&
          typeof entry.avatar === "string" &&
          entry.avatar.startsWith("https://pbs.twimg.com/profile_images/")
        ) {
          entry.avatar = entry.avatar
            .replace("_normal.", ";")
            .replace("https://pbs.twimg.com/profile_images/", "");
        } else if (entry.avatar) {
          entry.avatar = null;
        }

        if (
          entry.banner &&
          typeof entry.banner === "string" &&
          entry.banner.startsWith("https://pbs.twimg.com/profile_banners/")
        ) {
          entry.banner = entry.banner.replace("https://pbs.twimg.com/profile_banners/", "");
        } else if (entry.banner) {
          entry.banner = null;
        }

        return { tweet: entry };
      } catch {
        return {};
      }
    },
    {
      query: t.Object({
        jwt: t.String(),
      }),
    },
  )
  .get(
    "/typeahead",
    async ({ query, headers }) => {
      if (
        headers["X-Twittercat-Client"] !==
        "CzZS9RQdBqSfHQ2T4oZkXZBEbeszwPm53YtTHgWHz2cVzGavKq9mR2SoojD7CB7Y"
      ) {
        return [];
      }

      return (
        await (
          await fetch(
            `https://grok.com/_worker/typeahead?q=${encodeURIComponent(query.q)}&lang=en-US&platform=android`,
            {
              headers: {
                "user-agent": "Mozilla/5.0 (compatible; twittercat/0.0.1; +https://twitter.cat)",
              },
            },
          )
        ).json()
      ).items;
    },
    {
      query: t.Object({
        q: t.String({
          maxLength: 500,
          minLength: 1,
        }),
      }),
    },
  );
