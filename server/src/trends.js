import duckdb from "duckdb";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { validateSession } from "./cap.js";

const DB_PATH = new URL("../../sample.duckdb", import.meta.url).pathname;
const POOL_SIZE = 5;
const db = new duckdb.Database(DB_PATH);
const pool = Array.from({ length: POOL_SIZE }, () => db.connect());

const queryOn = (conn, sql, ...params) =>
  new Promise((res, rej) => {
    conn.all(sql, ...params, (err, rows) => (err ? rej(err) : res(rows)));
  });

const runOn = (conn, sql) =>
  new Promise((res, rej) => {
    conn.run(sql, (err) => (err ? rej(err) : res()));
  });

const query = (sql, ...params) => queryOn(pool[0], sql, ...params);

for (const conn of pool) {
  await runOn(conn, "INSTALL fts");
  await runOn(conn, "LOAD fts");
}

function getGranularity(fromDate, toDate) {
  const days = (new Date(toDate) - new Date(fromDate)) / 86400000;
  if (days <= 90) return "day";
  if (days <= 730) return "week";
  return "month";
}

function granularityInterval(g) {
  return g === "day" ? "1 day" : g === "week" ? "1 week" : "1 month";
}

async function validateRequest(sessionToken) {
  if (!sessionToken) return { success: false };
  return await validateSession(sessionToken, "search");
}

export default new Elysia({ prefix: "/trends" })
  .use(
    rateLimit({
      duration: 15_000,
      max: 30,
      generator: (c) => c.headers.get("CF-Connecting-IP"),
      skip: (r) => r.method === "OPTIONS",
    }),
  )
  .get(
    "/stream",
    async ({ query: q, request }) => {
      const sessionToken =
        q.s ||
        request.headers.get("authorization")?.replace?.("Bearer ", "");

      const session = await validateRequest(sessionToken);
      if (!session.success) {
        return new Response(
          JSON.stringify({
            error: session.reason === "search_limit_exceeded" ? "session_exhausted" : "unauthorized",
          }),
          { status: 401, headers: { "Content-Type": "application/json" } },
        );
      }

      const termsParam = q.terms;
      if (!termsParam) {
        return new Response(JSON.stringify({ error: "terms required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const terms = termsParam.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 5);
      if (!terms.length) {
        return new Response(JSON.stringify({ error: "terms required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const now = new Date().toISOString().slice(0, 10);
      const twoYearsAgo = new Date(Date.now() - 2 * 365.25 * 86400000).toISOString().slice(0, 10);
      const from = q.from || twoYearsAgo;
      const to = q.to || now;
      const lang = q.lang || "";
      const granularity = getGranularity(from, to);
      const langClause = lang ? `AND ts.lang = '${lang.replace(/'/g, "''")}'` : "";

      const stream = new ReadableStream({
        async start(controller) {
          const send = (event, data) => {
            controller.enqueue(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
          };

          try {
            const allPeriods = await query(
              `SELECT unnest(generate_series(
                date_trunc('${granularity}', ?::timestamp),
                date_trunc('${granularity}', ?::timestamp),
                interval '${granularityInterval(granularity)}'
              ))::DATE::VARCHAR as period`,
              from, to,
            );
            const periods = allPeriods.map((r) => r.period);

            send("init", { labels: periods.map((p) => p.slice(0, 10)), granularity, terms });

            const allResults = new Array(terms.length);

            const termPromises = terms.map((term, ti) =>
              queryOn(
                pool[ti % POOL_SIZE],
                `SELECT date_trunc('${granularity}', ts.created_at)::DATE::VARCHAR as period, count(*)::INT as cnt
                 FROM tweet_sample ts
                 JOIN (SELECT *, fts_main_tweet_sample.match_bm25(id, ?) AS score FROM tweet_sample) fts
                   ON ts.id = fts.id
                 WHERE fts.score IS NOT NULL
                   AND ts.created_at >= ?::timestamp AND ts.created_at < ?::timestamp
                   ${langClause}
                 GROUP BY 1 ORDER BY 1`,
                term, from, to,
              ).then((rows) => {
                const countMap = Object.fromEntries(rows.map((r) => [r.period, r.cnt]));
                allResults[ti] = periods.map((p) => countMap[p] ?? 0);
                send("term", { index: ti, term });
              }),
            );

            await Promise.all(termPromises);

            const globalMax = Math.max(1, ...allResults.flat());
            const normalized = allResults.map((raw) =>
              raw.map((v) => Math.round((v / globalMax) * 10000) / 100),
            );

            send("done", { normalized });
          } catch (e) {
            send("error", { message: e.message });
          }

          controller.close();
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
        terms: t.String(),
        from: t.Optional(t.String()),
        to: t.Optional(t.String()),
        lang: t.Optional(t.String()),
        s: t.Optional(t.String()),
      }),
    },
  )
  .get(
    "/languages",
    async ({ query: q, request }) => {
      const sessionToken =
        q.s ||
        request.headers.get("authorization")?.replace?.("Bearer ", "");

      const session = await validateRequest(sessionToken);
      if (!session.success) {
        return new Response(JSON.stringify({ error: "unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      const termsParam = q.terms;
      if (!termsParam) return { error: "terms required" };
      const terms = termsParam.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 5);
      const now = new Date().toISOString().slice(0, 10);
      const twoYearsAgo = new Date(Date.now() - 2 * 365.25 * 86400000).toISOString().slice(0, 10);
      const from = q.from || twoYearsAgo;
      const to = q.to || now;

      const results = await Promise.all(
        terms.map((term, ti) =>
          queryOn(
            pool[ti % POOL_SIZE],
            `SELECT ts.lang, count(*)::INT as cnt
             FROM tweet_sample ts
             JOIN (SELECT *, fts_main_tweet_sample.match_bm25(id, ?) AS score FROM tweet_sample) fts
               ON ts.id = fts.id
             WHERE fts.score IS NOT NULL
               AND ts.created_at >= ?::timestamp AND ts.created_at < ?::timestamp
               AND ts.lang IS NOT NULL AND ts.lang != '' AND ts.lang != 'und' AND ts.lang != 'zxx' AND ts.lang != 'qme'
             GROUP BY 1 ORDER BY 2 DESC LIMIT 10`,
            term, from, to,
          ),
        ),
      );

      return terms.map((term, ti) => {
        const rows = results[ti];
        const total = rows.reduce((s, r) => s + r.cnt, 0);
        return {
          term,
          languages: rows.map((r) => ({
            lang: r.lang,
            pct: Math.round((r.cnt / total) * 10000) / 100,
          })),
        };
      });
    },
    {
      query: t.Object({
        terms: t.String(),
        from: t.Optional(t.String()),
        to: t.Optional(t.String()),
        s: t.Optional(t.String()),
      }),
    },
  )
  .get(
    "/languages/all",
    async ({ query: q, request }) => {
      const sessionToken =
        q.s ||
        request.headers.get("authorization")?.replace?.("Bearer ", "");

      const session = await validateRequest(sessionToken);
      if (!session.success) {
        return new Response(JSON.stringify({ error: "unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      return await query(
        `SELECT lang, count(*)::INT as cnt FROM tweet_sample WHERE lang IS NOT NULL GROUP BY 1 ORDER BY 2 DESC LIMIT 50`,
      );
    },
    {
      query: t.Object({
        s: t.Optional(t.String()),
      }),
    },
  )
  .get(
    "/stats",
    async ({ query: q, request }) => {
      const sessionToken =
        q.s ||
        request.headers.get("authorization")?.replace?.("Bearer ", "");

      const session = await validateRequest(sessionToken);
      if (!session.success) {
        return new Response(JSON.stringify({ error: "unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      const [{ cnt }] = await query("SELECT count(*)::INT as cnt FROM tweet_sample");
      const [{ min_d, max_d }] = await query(
        "SELECT min(created_at)::VARCHAR as min_d, max(created_at)::VARCHAR as max_d FROM tweet_sample",
      );
      return { totalTweets: cnt, from: min_d, to: max_d };
    },
    {
      query: t.Object({
        s: t.Optional(t.String()),
      }),
    },
  );
