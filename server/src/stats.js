import { SQL } from "bun";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import * as jose from "jose";
import { validateSession } from "./cap.js";

const sseClients = new Set();

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

const CURSOR_SECRET = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);

async function signCursor(timestamp, depth = 0) {
  return await new jose.SignJWT({ ts: timestamp, depth })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("4h")
    .sign(CURSOR_SECRET);
}

async function verifyCursor(token) {
  try {
    const { payload } = await jose.jwtVerify(token, CURSOR_SECRET);
    if (payload.depth >= 10) {
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

let lastHourCache = null;
let lastHourCacheTime = 0;
const LAST_HOUR_CACHE_TTL = 60_000;

let lastTweetsHash = null;

async function checkForNewTweets() {
  if (!sseClients.size) return;
  if (sseClients.size >= 1_000) set.clear();

  const tweets = await postgresReadOnly`SELECT
    t.author_id, t.body, t.id, t.added_at, t.media,
    p.name, p.username, p.avatar
  FROM tweets t
  LEFT JOIN profiles p
  ON p.id = t.author_id
  ORDER BY t.added_at DESC
  LIMIT 20`;

  const str = JSON.stringify(tweets);
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const hhash = h >>> 0;

  if (lastTweetsHash !== null && hhash !== lastTweetsHash) {
    const data = JSON.stringify({ tweets, hash: hhash });

    const compressedData = Buffer.from(
      Bun.gzipSync(Buffer.from(data)),
    ).toString("base64");

    for (const client of sseClients) {
      try {
        client.controller.enqueue(`data: ${compressedData}\n\n`);
      } catch {
        sseClients.delete(client);
      }
    }
  }

  lastTweetsHash = hhash;
}

setInterval(checkForNewTweets, 1500);

export default new Elysia({
  prefix: "/stats",
})
  .use(
    rateLimit({
      duration: 15_000,
      max: 60,
      skip: (r) => r.method === "OPTIONS",
      generator: (c) => c.headers.get("CF-Connecting-IP"),
    }),
  )
  .get("/", async () => {
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

    statsCache = [Number(row?.profiles || 0), Number(row?.tweets || 0)];
    statsCacheTime = now;

    return statsCache;
  })
  .get("/hourly", async () => {
    const now = Date.now();

    if (lastHourCache && now - lastHourCacheTime < LAST_HOUR_CACHE_TTL) {
      return lastHourCache;
    }

    const [lastHour] = await postgresReadOnly`
      SELECT COUNT(*) AS count
      FROM tweets
      WHERE added_at > NOW() - INTERVAL '1 hour';
    `;

    lastHourCache = { lastHour: lastHour?.count || 0 };
    lastHourCacheTime = now;

    return lastHourCache;
  })
  .get(
    "/tweets",
    async ({ query, headers }) => {
      const { hash, cursor } = query;
      if (!headers["x-twittercat-client"]?.includes("31bd")) {
        return {
          tweets: [],
          hash: Math.floor(Math.random() * 9999999999),
          cursor: "",
        };
      }

      if (cursor) {
        if (!query.session) {
          return { error: "missing session" };
        }

        const sessionResult = await validateSession(query.session);
        if (!sessionResult.success) {
          return { error: "invalid session" };
        }

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
    LIMIT 20`;

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
  LIMIT 40`;

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
        cursor: initialCursor,
      };
    },
    {
      query: t.Object({
        hash: t.Optional(t.String()),
        cursor: t.Optional(t.String()),
        session: t.Optional(t.String()),
      }),
    },
  )
  .get(
    "/tweets/stream",
    async ({ request, query }) => {
      if (!query.c?.includes("31bd")) {
        return new Response("Unauthorized", { status: 401 });
      }

      if (!query.s) {
        return new Response("Unauthorized: missing session", { status: 401 });
      }

      const sessionResult = await validateSession(query.s);
      if (!sessionResult.success) {
        return new Response("Unauthorized: invalid session", { status: 401 });
      }

      const stream = new ReadableStream({
        start(controller) {
          const client = { controller, id: Math.random() };
          sseClients.add(client);

          controller.enqueue(": connected\n\n");

          request.signal.addEventListener("abort", () => {
            sseClients.delete(client);
          });
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    },
    {
      query: t.Object({
        c: t.String(),
        s: t.String(),
      }),
    },
  );
