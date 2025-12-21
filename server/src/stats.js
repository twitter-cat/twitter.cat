import { SQL } from "bun";
import { Elysia } from "elysia";
import * as jose from "jose";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`
);

const CURSOR_SECRET = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);

async function signCursor(timestamp, depth = 0) {
  return await new jose.SignJWT({ ts: timestamp, depth })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2d")
    .sign(CURSOR_SECRET);
}

async function verifyCursor(token) {
  try {
    const { payload } = await jose.jwtVerify(token, CURSOR_SECRET);
    if (payload.depth >= 20) {
      return null;
    }
    return { timestamp: payload.ts, depth: payload.depth };
  } catch {
    return null;
  }
}

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

  if (cursor) {
    const verified = await verifyCursor(cursor);
    if (!verified) {
      return { tweets: [], error: "g" };
    }

    const tweets = await postgresReadOnly`SELECT
      t.author_id, t.body, t.id, t.added_at, t.media,
      p.name, p.username, p.avatar
    FROM tweets t
    LEFT JOIN profiles p
    ON p.id = t.author_id
    WHERE t.added_at < ${verified.timestamp}
    ORDER BY t.added_at DESC
    LIMIT 60`;

    let nextCursor = null;
    if (tweets.length > 0) {
      const oldestTimestamp = tweets[tweets.length - 1].added_at;
      nextCursor = await signCursor(oldestTimestamp, verified.depth + 1);
    }

    return { tweets, cursor: nextCursor };
  }

  const tweets = await postgresReadOnly`SELECT
    t.author_id, t.body, t.id, t.added_at, t.media,
    p.name, p.username, p.avatar
  FROM tweets t
  LEFT JOIN profiles p
  ON p.id = t.author_id
  ORDER BY t.added_at DESC
  LIMIT 60`;

  const str = JSON.stringify(tweets);
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  const hhash = h >>> 0;

  if (hash && parseInt(hash, 10) === hhash) {
    return { hash: hhash };
  }

  let initialCursor = null;
  if (tweets.length > 0) {
    const oldestTimestamp = tweets[tweets.length - 1].added_at;
    initialCursor = await signCursor(oldestTimestamp, 0);
  }

  return {
    tweets,
    hash: hhash,
    cursor: initialCursor
  };
});
