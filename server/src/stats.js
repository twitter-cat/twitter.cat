import { SQL } from "bun";
import { Elysia } from "elysia";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`
);

let statsCache = null;
let statsCacheTime = 0;
const STATS_CACHE_TTL = 60000;

export default new Elysia().get("/stats", async () => {
  const now = Date.now();

  if (statsCache && now - statsCacheTime < STATS_CACHE_TTL) {
    return statsCache;
  }

  statsCache = (
    await Promise.all([
      postgresReadOnly`
    SELECT reltuples::bigint AS estimate FROM pg_class WHERE relname = 'profiles';
  `,
      postgresReadOnly`
   SELECT reltuples::bigint AS estimate FROM pg_class WHERE relname = 'tweets';
  `,
    ])
  ).map((res) => Number(res?.[0]?.estimate || 0));

  statsCacheTime = now;

  return statsCache;
});
