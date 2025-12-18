import { SQL } from "bun";
import { Elysia } from "elysia";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`
);

let statsCache = null;
let statsCacheTime = 0;
const STATS_CACHE_TTL = 30_000;

export default new Elysia().get("/stats", async () => {
  const now = Date.now();

  if (statsCache && now - statsCacheTime < STATS_CACHE_TTL) {
    return statsCache;
  }

  const [row] = await postgresReadOnly`
  SELECT
    MAX(reltuples::bigint) FILTER (WHERE relname = 'profiles') AS profiles,
    MAX(reltuples::bigint) FILTER (WHERE relname = 'tweets') AS tweets
  FROM pg_class
  WHERE relname IN ('profiles', 'tweets');
`;

  statsCache = [
    Number(row?.profiles || 0),
    Number(row?.tweets || 0),
  ];
  statsCacheTime = now;

  return statsCache;
}).get("/live/lh", async () => {
  const [lastHour] = await postgresReadOnly`
  SELECT COUNT(*) AS count
FROM tweets
WHERE added_at > NOW() - INTERVAL '1 hour';`;

  return {
    lastHour: lastHour?.count || 0,
  };
}).get("/live/tweets", async ({ query }) => {
  const { hash, cursor } = query;

  // If cursor is provided, return older tweets (pagination)
  if (cursor) {
    // Check if cursor is too old (>48 hours)
    if (Date.now() - new Date(cursor).getTime() > 172800000) {
      return { tweets: [] };
    }

    const tweets = await postgresReadOnly`SELECT
      t.author_id, t.body, t.id, t.added_at, t.media,
      p.name, p.username, p.avatar
    FROM tweets t
    LEFT JOIN profiles p
    ON p.id = t.author_id
    WHERE t.added_at < ${cursor}
    ORDER BY t.added_at DESC
    LIMIT 60`;

    return { tweets };
  }

  // No cursor - return latest tweets
  const tweets = await postgresReadOnly`SELECT
    t.author_id, t.body, t.id, t.added_at, t.media,
    p.name, p.username, p.avatar
  FROM tweets t
  LEFT JOIN profiles p
  ON p.id = t.author_id
  ORDER BY t.added_at DESC
  LIMIT 60`;

  // Calculate hash for change detection
  const str = JSON.stringify(tweets);
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  const hhash = h >>> 0;

  // If client's hash matches, no new tweets
  if (hash && parseInt(hash) === hhash) {
    return { hash: hhash };
  }

  return {
    tweets,
    hash: hhash
  };
});
