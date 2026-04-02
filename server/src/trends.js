import { Database } from "bun:sqlite";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { validateSession } from "./cap.js";

const DB_PATH = new URL("../../sample.sqlite", import.meta.url).pathname;
const db = new Database(DB_PATH, { readonly: true });
db.exec("PRAGMA cache_size = -64000");
db.exec("PRAGMA mmap_size = 4294967296");

function getGranularity(fromDate, toDate) {
  const days = (new Date(toDate) - new Date(fromDate)) / 86400000;
  if (days <= 90) return "day";
  if (days <= 730) return "week";
  return "month";
}

function dateTrunc(granularity) {
  if (granularity === "day") return "created_at";
  if (granularity === "week") return "date(created_at, 'weekday 0', '-6 days')";
  return "strftime('%Y-%m-01', created_at)";
}

function periodsSQL(from, to, granularity) {
  if (granularity === "day") {
    return `WITH RECURSIVE periods(d) AS (
      VALUES(date(?))
      UNION ALL
      SELECT date(d, '+1 day') FROM periods WHERE d < date(?)
    ) SELECT d as period FROM periods`;
  }
  if (granularity === "week") {
    return `WITH RECURSIVE periods(d) AS (
      VALUES(date(?, 'weekday 0', '-6 days'))
      UNION ALL
      SELECT date(d, '+7 days') FROM periods WHERE d < date(?)
    ) SELECT d as period FROM periods`;
  }
  return `WITH RECURSIVE periods(d) AS (
    VALUES(date(?, 'start of month'))
    UNION ALL
    SELECT date(d, '+1 month') FROM periods WHERE d < date(?)
  ) SELECT d as period FROM periods`;
}

async function validateRequest(sessionToken) {
  if (!sessionToken) return { success: false };
  return await validateSession(sessionToken, "search");
}

function escapeMatch(term) {
  return '"' + term.replace(/"/g, '""') + '"';
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
      const langClause = lang ? `AND t.lang = '${lang.replace(/'/g, "''")}'` : "";
      const trunc = dateTrunc(granularity);

      const stream = new ReadableStream({
        start(controller) {
          const send = (event, data) => {
            controller.enqueue(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
          };

          try {
            const periods = db.prepare(periodsSQL(from, to, granularity)).all(from, to).map(r => r.period);

            send("init", { labels: periods, granularity, terms });

            const allResults = new Array(terms.length);

            for (let ti = 0; ti < terms.length; ti++) {
              const term = terms[ti];
              const matchExpr = escapeMatch(term);

              const rows = db.prepare(`
                SELECT ${trunc} as period, count(*) as cnt
                FROM tweets t
                WHERE t.id IN (SELECT rowid FROM tweets_fts WHERE tweets_fts MATCH ?)
                  AND t.created_at >= ? AND t.created_at < ?
                  ${langClause}
                GROUP BY 1 ORDER BY 1
              `).all(matchExpr, from, to);

              const countMap = Object.fromEntries(rows.map((r) => [r.period, r.cnt]));
              allResults[ti] = periods.map((p) => countMap[p] ?? 0);
              send("term", { index: ti, term });
            }

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

      return terms.map((term) => {
        const matchExpr = escapeMatch(term);

        const rows = db.prepare(`
          SELECT t.lang, count(*) as cnt
          FROM tweets t
          WHERE t.id IN (SELECT rowid FROM tweets_fts WHERE tweets_fts MATCH ?)
            AND t.created_at >= ? AND t.created_at < ?
            AND t.lang IS NOT NULL AND t.lang != '' AND t.lang != 'und' AND t.lang != 'zxx' AND t.lang != 'qme'
          GROUP BY 1 ORDER BY 2 DESC LIMIT 10
        `).all(matchExpr, from, to);

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

      return db.prepare(
        `SELECT lang, count(*) as cnt FROM tweets WHERE lang IS NOT NULL GROUP BY 1 ORDER BY 2 DESC LIMIT 50`,
      ).all();
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

      const { cnt } = db.prepare("SELECT count(*) as cnt FROM tweets").get();
      const { min_d, max_d } = db.prepare(
        "SELECT min(created_at) as min_d, max(created_at) as max_d FROM tweets",
      ).get();
      return { totalTweets: cnt, from: min_d, to: max_d };
    },
    {
      query: t.Object({
        s: t.Optional(t.String()),
      }),
    },
  );
