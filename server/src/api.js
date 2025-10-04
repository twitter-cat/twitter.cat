import crypto from "node:crypto";
import { SQL } from "bun";
import { Elysia } from "elysia";
import { buildFilterConditions, buildPriorityOrder } from "./filters.js";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`
);

const postgresReadWrite = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`
);

const DEFAULT_LIMIT = 20;

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

const decodeCursor = (cursor) => {
  if (!cursor || typeof cursor !== "string") {
    return { lastRank: null, lastUsername: null };
  }

  const key = process.env.CURSOR_SIGNING_KEY;
  const parts = cursor.split(".");

  if (parts.length !== 2) {
    throw new Error("invalid cursor format");
  }

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

  return { lastRank: decoded[0], lastUsername: decoded[1] };
};

const createCursor = (rank, username) => {
  const payload = JSON.stringify([rank, username]);
  const payloadB64url = base64urlEncode(payload);
  const sig = signPayload(payloadB64url, process.env.CURSOR_SIGNING_KEY);
  const sigB64url = base64urlEncode(sig);
  return `${payloadB64url}.${sigB64url}`;
};

const executeSearchQuery = async (
  q,
  filterData,
  priorityOrder,
  lastRank,
  lastUsername
) => {
  const { conditions, params } = filterData;

  const rankFormula = `
    ts_rank_cd(
      search_tsv, 
      plainto_tsquery('simple', $1)
    ) + (
      log(greatest(followers, 1)) * 0.5
    )
  `;

  const baseParams = [q, ...params];

  const whereConditions = [`search_tsv @@ plainto_tsquery('simple', $1)`];
  whereConditions.push(...conditions);

  const orderParts =
    priorityOrder.length > 0
      ? [...priorityOrder, "rank DESC", "username DESC"]
      : ["rank DESC", "username DESC"];
  const orderClause = orderParts.join(", ");

  let cursorFilter = "";
  let cursorParams = [];

  if (lastRank !== null && lastUsername) {
    const rankParamIdx = baseParams.length + 1;
    const usernameParamIdx = baseParams.length + 2;
    cursorFilter = `AND (rank < $${rankParamIdx} OR (rank = $${rankParamIdx} AND username < $${usernameParamIdx}))`;
    cursorParams = [lastRank, lastUsername];
  }

  const whereClause = whereConditions.join(" AND ");

  const query = `
    SELECT * FROM (
      SELECT *, 
        ${rankFormula} AS rank 
      FROM profiles 
      WHERE ${whereClause}
    ) t
    WHERE 1=1 ${cursorFilter}
    ORDER BY ${orderClause}
    LIMIT $${baseParams.length + cursorParams.length + 1}
  `;

  const allParams = [...baseParams, ...cursorParams, DEFAULT_LIMIT + 1];

  const result = await postgresReadOnly.unsafe(query, allParams);
  return result;
};

const formatRows = (rows) => {
  return rows.map((row) => {
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
  });
};

export default new Elysia()
  .post("/query", async ({ body }) => {
    try {
      const { type, q, cursor, filters = {} } = body;

      if (type !== "accounts") {
        return { error: "only accounts are supported yet" };
      }

      if (!q || typeof q !== "string") {
        return { error: "missing query" };
      }

      const { lastRank, lastUsername } = decodeCursor(cursor);

      const filterData = buildFilterConditions(filters);
      const priorityOrder = buildPriorityOrder(filters);

      const rows = await executeSearchQuery(
        q,
        filterData,
        priorityOrder,
        lastRank,
        lastUsername
      );

      let hasMore = false;
      if (rows.length > DEFAULT_LIMIT) {
        hasMore = true;
        rows.pop();
      }

      let nextCursor = null;
      if (hasMore && rows.length > 0) {
        const lastRow = rows[rows.length - 1];
        nextCursor = createCursor(lastRow.rank, lastRow.username);
      }

      const formattedRows = formatRows(rows);
      const map = rows.length > 0 ? Object.keys(rows[0]).join(",") : "";

      return {
        rows: formattedRows,
        map,
        cursor: hasMore ? nextCursor : null,
      };
    } catch (err) {
      return {
        error: String(err?.message || err),
      };
    }
  })
  .get("/:u/avfetch.jpg", async ({ params }) => {
    const { u } = params;

    if (!u || typeof u !== "string") {
      return "NOT_FOUND";
    }

    if (!/^[a-zA-Z0-9_]+$/.test(u)) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );
    }

    const userExists = await postgresReadOnly`
      SELECT EXISTS(
        SELECT 1 FROM profiles WHERE username = ${u}
      );
    `;

    if (!userExists[0]?.exists) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );
    }

    const username = u;

    const userAgents = [
      "Slackbot 1.0 (+https://api.slack.com/robots)",
      "Slackbot-LinkExpanding (+https://api.slack.com/robots)",
      "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
    ];

    const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

    let html;
    try {
      html = await (
        await fetch(`https://x.com/${username}`, {
          headers: {
            "User-Agent": userAgent,
          },
        })
      ).text();
    } catch {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );
    }

    const arr = html.split('<meta content="').slice(4, -6);

    const bioMatch = arr.find((a) =>
      a.trim().endsWith(`" property="og:description" />`)
    );
    const bio =
      bioMatch?.replace(`" property="og:description" />`, "").trim() || "";

    const pfpMatch = arr.find((a) =>
      a.trim().endsWith(`" property="og:image" />`)
    );
    const pfp =
      pfpMatch?.replace(`" property="og:image" />`, "").trim() ||
      `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`;

    const nameMatch = arr.find((a) =>
      a.trim().endsWith(`" property="og:title" />`)
    );
    const name =
      nameMatch
        ?.replace(`" property="og:title" />`, "")
        .trim()
        .replace(` (@${username}) on X`, "") || "";

    if (!name && !bio && !pfp) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`
      );
    }

    postgresReadWrite`
      UPDATE profiles SET
        bio = ${bio},
        avatar = ${pfp},
        name = ${name}
      WHERE username = ${username};
    `;

    return Response.redirect(pfp.replace("_normal", "_bigger"));
  });
