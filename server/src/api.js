import { SQL } from "bun";
import { Elysia } from "elysia";

const postgres = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

/* db schema:
CREATE TABLE IF NOT EXISTS profiles (id TEXT PRIMARY KEY, avatar TEXT, square_avatar INTEGER, banner TEXT, bio TEXT, can_media_tag INTEGER, created_at timestamptz, location TEXT, name TEXT, parody_commentary_fan_label TEXT, professional_type TEXT, professional_category TEXT, profile_interstitial TEXT, protected INTEGER, rawId TEXT, sensitive INTEGER, followers INTEGER, following INTEGER, fast_followers INTEGER, likes INTEGER, media_count INTEGER, listed_count INTEGER, tweets INTEGER, url TEXT, username TEXT, verified INTEGER, withheld TEXT) */

export default new Elysia().post("/query", async ({ body }) => {
  const { type, q } = body;

  if (type !== "accounts")
    return {
      error: "only accounts are supported yet",
    };

  if (!q)
    return {
      error: "missing query",
    };

  const rows = await postgres`
SELECT *, 
  ts_rank_cd(
  search_tsv, 
    plainto_tsquery('simple', ${q})
  ) + (
    log(
      greatest(followers, 1)
    ) * 0.05
  ) AS rank 
FROM profiles 
WHERE 
  search_tsv @@ plainto_tsquery('simple', ${q}) 
ORDER BY rank DESC 
LIMIT 50;`;

  return {
    rows: rows.map((row) => {
      delete row.search_tsv;

      return Object.values(row);
    }),
    map: Object.keys(rows[0] || {}),
  };
});
