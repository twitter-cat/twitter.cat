import { SQL } from "bun";
import { Elysia } from "elysia";

const postgres = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`
);

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

export default new Elysia()
  .post("/query", async ({ body }) => {
    const { type, q, limit = DEFAULT_LIMIT, offset = 0 } = body;

    if (type !== "accounts")
      return {
        error: "only accounts are supported yet",
      };

    if (!q)
      return {
        error: "missing query",
      };

    const validatedLimit = Math.min(
      Math.max(parseInt(limit) || DEFAULT_LIMIT, 1),
      MAX_LIMIT
    );
    const validatedOffset = Math.max(parseInt(offset) || 0, 0);

    const rows = await postgres`
SELECT *, 
  ts_rank_cd(
  search_tsv, 
    plainto_tsquery('simple', ${q})
  ) + (
    log(
      greatest(followers, 1)
    ) * 0.5
  ) AS rank 
FROM profiles 
WHERE 
  search_tsv @@ plainto_tsquery('simple', ${q}) 
ORDER BY rank DESC 
LIMIT ${validatedLimit}
OFFSET ${validatedOffset};`;

    const countResult = await postgres`
SELECT COUNT(*) as total 
FROM profiles 
WHERE 
  search_tsv @@ plainto_tsquery('simple', ${q});`;

    const total = parseInt(countResult[0]?.total || 0);
    const hasMore = validatedOffset + validatedLimit < total;

    return {
      rows: rows.map((row) => {
        delete row.search_tsv;
        return Object.values(row);
      }),
      map: Object.keys(rows[0] || {}),
      pagination: {
        limit: validatedLimit,
        offset: validatedOffset,
        total,
        hasMore,
      },
    };
  })
  .get("/:u/avfetch.jpg", async ({ params }) => {
    const { u } = params;
    if (!u) return "NOT_FOUND";

    const userExists = await postgres`
SELECT EXISTS(
  SELECT * FROM profiles WHERE username = ${u}
);`;

    if (!userExists[0]?.exists)
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );

    const username = u;

    const userAgents = [
      "Slackbot 1.0 (+https://api.slack.com/robots)",
      "Slackbot-LinkExpanding (+https://api.slack.com/robots)",
      "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
    ];

    const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

    const html = await (
      await fetch(`https://x.com/${username}`, {
        headers: {
          "User-Agent": userAgent,
        },
      })
    ).text();

    const arr = html.split('<meta content="').slice(4, -6);

    const bio = arr
      .find((a) => {
        return a.trim().endsWith(`" property="og:description" />`);
      })
      .replace(`" property="og:description" />`, "")
      .trim();
    const pfp =
      arr
        .find((a) => {
          return a.trim().endsWith(`" property="og:image" />`);
        })
        .replace(`" property="og:image" />`, "")
        .trim() ||
      `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`;
    const name = arr
      .find((a) => {
        return a.trim().endsWith(`" property="og:title" />`);
      })
      .replace(`" property="og:title" />`, "")
      .trim()
      .replace(` (@${username}) on X`, "");

    if (!name && !bio && !pfp)
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );

    postgres`
UPDATE profiles SET
  bio = ${bio},
  avatar = ${pfp},
  name = ${name}
WHERE username = ${username};
`;

    return Response.redirect(pfp);
  });
