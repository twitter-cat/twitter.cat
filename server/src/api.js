import crypto from "node:crypto";
import { SQL } from "bun";
import { Elysia } from "elysia";

const postgres = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`
);

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

export default new Elysia()
  .post("/query", async ({ body }) => {
    const { type, q, cursor } = body;

    if (type !== "accounts")
      return {
        error: "only accounts are supported yet",
      };

    if (!q)
      return {
        error: "missing query",
      };

    let lastRank = null;
    let lastUsername = null;

    const base64urlEncode = (input) => {
      let binary = "";

      if (typeof input === "string") {
        for (let i = 0; i < input.length; i++) {
          binary += String.fromCharCode(input.charCodeAt(i) & 0xff);
        }
      } else if (input instanceof Uint8Array) {
        for (let i = 0; i < input.length; i++) {
          binary += String.fromCharCode(input[i]);
        }
      }

      return btoa(binary)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    };

    const base64urlDecodeToBuffer = (b64url) => {
      let b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
      while (b64.length % 4) b64 += "=";

      return atob(b64);
    };

    const signPayload = (payloadB64, key) =>
      crypto.createHmac("sha256", key).update(payloadB64).digest();

    if (cursor && typeof cursor === "string") {
      const key = process.env.CURSOR_SIGNING_KEY;

      const parts = cursor.split(".");
      if (parts.length !== 2) throw new Error("invalid cursor format");
      const [payloadB64url, sigB64url] = parts;

      const sigBuf = Buffer.from(base64urlDecodeToBuffer(sigB64url), "latin1");
      const expectedSigBuf = signPayload(payloadB64url, key);

      if (
        sigBuf.length !== expectedSigBuf.length ||
        !crypto.timingSafeEqual(sigBuf, expectedSigBuf)
      ) {
        throw new Error("invalid cursor signature");
      }

      const decoded = JSON.parse(
        Buffer.from(base64urlDecodeToBuffer(payloadB64url), "latin1").toString()
      );

      lastRank = decoded[0];
      lastUsername = decoded[1];
    }

    let rows;
    if (lastRank !== null && lastUsername) {
      rows = await postgres`
SELECT * FROM (
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
) t
WHERE (t.rank < ${lastRank} OR (t.rank = ${lastRank} AND t.username < ${lastUsername}))
ORDER BY t.rank DESC, t.username DESC
LIMIT ${DEFAULT_LIMIT + 1};`;
    } else {
      rows = await postgres`
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
ORDER BY rank DESC, username DESC
LIMIT ${DEFAULT_LIMIT + 1};`;
    }

    let hasMore = false;
    if (rows.length > DEFAULT_LIMIT) {
      hasMore = true;
      rows.pop();
    }
    let nextCursor = null;
    if (hasMore && rows.length > 0) {
      const lastRow = rows[rows.length - 1];
      const payload = JSON.stringify([lastRow.rank, lastRow.username]);

      const payloadB64url = base64urlEncode(payload);
      const sig = signPayload(payloadB64url, process.env.CURSOR_SIGNING_KEY);

      const sigB64url = base64urlEncode(sig);
      nextCursor = `${payloadB64url}.${sigB64url}`;
    }

    return {
      rows: rows.map((row) => {
        delete row.search_tsv;
        delete row.rank;
        delete row.last_roi_discovery;
        row.avatar = row.avatar
          ?.replace("_normal.", ";")
          ?.replace("https://pbs.twimg.com/profile_images/", "");
        row.banner = row.banner?.replace(
          "https://pbs.twimg.com/profile_banners/",
          ""
        );
        return Object.values(row);
      }),
      map: Object.keys(rows[0] || {}).join(","),
      cursor: hasMore ? nextCursor : null,
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

    return Response.redirect(pfp.replace("_normal", "_bigger"));
  });
