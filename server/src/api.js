import crypto from "node:crypto";
import { SQL } from "bun";
import { Elysia } from "elysia";
import {
  buildFilterConditions,
  buildPriorityOrder,
  buildTweetFilterConditions,
  buildTweetPriorityOrder,
} from "./filters.js";

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

const postgresReadWrite = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`,
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
    return { lastRank: null, lastUsername: null, lastTweetId: null };
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
    Buffer.from(base64urlDecodeToBuffer(payloadB64url), "latin1").toString(),
  );

  if (decoded.length === 2) {
    if (typeof decoded[1] === "string" && !decoded[1].match(/^\d+$/)) {
      return {
        lastRank: decoded[0],
        lastUsername: decoded[1],
        lastTweetId: null,
      };
    } else {
      return {
        lastRank: decoded[0],
        lastUsername: null,
        lastTweetId: decoded[1],
      };
    }
  }

  return { lastRank: null, lastUsername: null, lastTweetId: null };
};

const createCursor = (rank, identifier) => {
  const payload = JSON.stringify([rank, identifier]);
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
  lastUsername,
) => {
  const { conditions, params } = filterData;

  const rankFormula = `(
    GREATEST(
      similarity(username, $1),
      similarity(name, $1)
    ) * 10.0 +
    log(greatest(followers, 1)) * 0.8 +
    log(greatest(following, 1)) * 0.1 +
    log(greatest(tweets, 1)) * 0.2 +
    CASE WHEN verified = 1 THEN 2.0 ELSE 0.0 END +
    CASE WHEN square_avatar = 1 THEN 0.5 ELSE 0.0 END +
    CASE WHEN protected = 1 THEN -1.0 ELSE 0.0 END
  )`;

  const baseParams = [q, ...params];

  const whereConditions = [`(username % $1 OR name % $1)`];
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
    SELECT 
      id, username, name, bio, location, url, avatar, banner,
      verified, protected, square_avatar, can_media_tag, sensitive,
      fast_followers, followers, following, likes, media_count,
      listed_count, tweets, professional_type, professional_category,
      created_at, rank
    FROM (
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

const executeTweetSearchQuery = async (
  q,
  filterData,
  priorityOrder,
  lastRank,
  lastTweetId,
) => {
  const { conditions, params } = filterData;

  const rankFormula = `(
    similarity(tweets.body, $1) * 10.0 +
    log(greatest(tweets.like_count, 1)) * 1.5 +
    log(greatest(tweets.retweet_count, 1)) * 1.8 +
    log(greatest(tweets.reply_count, 1)) * 0.8 +
    log(greatest(tweets.quote_count, 1)) * 1.2 +
    log(greatest(tweets.views_count, 1)) * 0.3 +
    log(greatest(tweets.bookmarks_count, 1)) * 1.0 +
    log(greatest(author.followers, 1)) * 0.4 +
    CASE 
      WHEN tweets.created_at > NOW() - INTERVAL '24 hours' THEN 3.0
      WHEN tweets.created_at > NOW() - INTERVAL '7 days' THEN 2.0
      WHEN tweets.created_at > NOW() - INTERVAL '30 days' THEN 1.0
      WHEN tweets.created_at > NOW() - INTERVAL '90 days' THEN 0.5
      ELSE 0.0
    END +
    CASE WHEN author.verified = 1 THEN 0.5 ELSE 0.0 END +
    CASE WHEN tweets.media IS NOT NULL AND tweets.media != '[]' AND tweets.media != 'null' THEN 0.3 ELSE 0.0 END
  )`;

  const baseParams = [];
  const whereConditions = [];

  if (q?.trim()) {
    whereConditions.push(`tweets.body % $1`);
    baseParams.push(q.trim());
  }

  whereConditions.push(...conditions);
  baseParams.push(...params);

  const orderParts =
    priorityOrder.length > 0
      ? [...priorityOrder, `${rankFormula} DESC`, "tweets.id DESC"]
      : [`${rankFormula} DESC`, "tweets.id DESC"];
  const orderClause = orderParts.join(", ");

  let cursorFilter = "";
  let cursorParams = [];

  if (lastRank !== null && lastTweetId) {
    const rankParamIdx = baseParams.length + 1;
    const idParamIdx = baseParams.length + 2;
    cursorFilter = `AND (${rankFormula} < $${rankParamIdx} OR (${rankFormula} = $${rankParamIdx} AND tweets.id < $${idParamIdx}))`;
    cursorParams = [lastRank, lastTweetId];
  }

  const whereClause =
    whereConditions.length > 0 ? whereConditions.join(" AND ") : "1=1";

  const query = `
    SELECT 
      tweets.id,
      tweets.body,
      tweets.created_at,
      tweets.like_count,
      tweets.retweet_count,
      tweets.reply_count,
      tweets.quote_count,
      tweets.views_count,
      tweets.bookmarks_count,
      tweets.media,
      tweets.reply_to_status_id,
      tweets.quoting_id,
      ${rankFormula} AS rank,
      author.username AS author_username,
      author.name AS author_name,
      author.avatar AS author_avatar,
      author.verified AS author_verified,
      author.protected AS author_protected,
      author.square_avatar AS author_square_avatar
    FROM tweets
    INNER JOIN profiles AS author ON tweets.author_id = author.id
    WHERE ${whereClause} ${cursorFilter}
    ORDER BY ${orderClause}
    LIMIT $${baseParams.length + cursorParams.length + 1}
  `;

  const allParams = [...baseParams, ...cursorParams, DEFAULT_LIMIT + 1];

  const result = await postgresReadOnly.unsafe(query, allParams);
  return result.map((row) => {
    row.media = JSON.stringify(
      JSON.parse(row.media || "[]")?.filter((media) => {
        return media.url && media.url !== "null";
      }),
    );

    return row;
  });
};

const formatTweetRows = (rows) => {
  return rows.map((row) => {
    delete row.rank;

    if (row.media && typeof row.media === "string") {
      try {
        row.media = JSON.parse(row.media);
      } catch {}
    }

    if (row.poll && typeof row.poll === "string") {
      try {
        row.poll = JSON.parse(row.poll);
      } catch {}
    }

    if (row.embed && typeof row.embed === "string") {
      try {
        row.embed = JSON.parse(row.embed);
      } catch {}
    }

    return Object.values(row);
  });
};

const formatRows = (rows) => {
  return rows.map((row) => {
    delete row.search_tsv;
    delete row.rank;
    delete row.last_roi_discovery;

    if (
      row.avatar &&
      typeof row.avatar === "string" &&
      row.avatar.startsWith("https://pbs.twimg.com/profile_images/")
    ) {
      row.avatar = row.avatar
        .replace("_normal.", ";")
        .replace("https://pbs.twimg.com/profile_images/", "");
    } else if (row.avatar) {
      row.avatar = null;
    }

    if (
      row.banner &&
      typeof row.banner === "string" &&
      row.banner.startsWith("https://pbs.twimg.com/profile_banners/")
    ) {
      row.banner = row.banner.replace(
        "https://pbs.twimg.com/profile_banners/",
        "",
      );
    } else if (row.banner) {
      row.banner = null;
    }

    return Object.values(row);
  });
};

export default new Elysia()
  .post("/query", async ({ body }) => {
    try {
      const { type, q, cursor, filters = {}, m: mappingsHash } = body;

      if (type === "dummy") {
        return "OK";
      }

      if (process.env.SEARCH_DISABLED === "true") {
        return {
          error: `search has been temporarily disabled so we can focus on scraping without having to deal with api abuse and db load. sorry for the inconvenience!\n\nfor more updates, follow <a target="_blank" href="https://x.com/twittdotcat">@twittdotcat</a> on x.`,
        };
      }

      if (!["accounts", "tweets"].includes(type)) {
        return { error: "only accounts and tweets are supported" };
      }

      if (!q || typeof q !== "string" || q.length > 500) {
        return { error: "missing or invalid query" };
      }

      if (cursor && (typeof cursor !== "string" || cursor.length > 1000)) {
        return { error: "invalid cursor" };
      }

      const { lastRank, lastUsername, lastTweetId } = decodeCursor(cursor);

      if (type === "tweets") {
        const authorFilterKeys = [
          "verified",
          "protected",
          "square_avatar",
          "can_media_tag",
          "sensitive",
          "fast_followers",
          "followers",
          "following",
          "likes",
          "media_count",
          "listed_count",
          "tweets",
          "name",
          "bio",
          "location",
          "url",
          "professional_type",
          "professional_category",
          "created_after",
          "created_before",
          "avatar_url",
          "has_location",
          "has_bio",
          "has_url",
        ];

        const authorFilters = {};
        const tweetFilters = {};

        for (const key in filters) {
          if (authorFilterKeys.includes(key)) {
            authorFilters[key] = filters[key];
          } else {
            tweetFilters[key] = filters[key];
          }
        }

        const filterData = buildTweetFilterConditions(
          tweetFilters,
          authorFilters,
        );
        const priorityOrder = buildTweetPriorityOrder(tweetFilters);

        const rows = await executeTweetSearchQuery(
          q,
          filterData,
          priorityOrder,
          lastRank,
          lastTweetId,
        );

        let hasMore = false;
        if (rows.length > DEFAULT_LIMIT) {
          hasMore = true;
          rows.pop();
        }

        let nextCursor = null;
        if (hasMore && rows.length > 0) {
          const lastRow = rows[rows.length - 1];
          nextCursor = createCursor(lastRow.rank, lastRow.id);
        }

        const formattedRows = formatTweetRows(rows);
        const map = rows.length > 0 ? Object.keys(rows[0]).join(",") : "";

        const result = {
          rows: formattedRows,
          map:
            [...map].reduce((a, c) => (a << 5) - a + c.charCodeAt(), 0) ===
            mappingsHash
              ? undefined
              : map,
          cursor: hasMore ? nextCursor : null,
        };

        return result;
      }

      const filterData = buildFilterConditions(filters);
      const priorityOrder = buildPriorityOrder(filters);

      const rows = await executeSearchQuery(
        q,
        filterData,
        priorityOrder,
        lastRank,
        lastUsername,
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

      const result = {
        rows: formattedRows,
        map:
          [...map].reduce((a, c) => (a << 5) - a + c.charCodeAt(), 0) ===
          mappingsHash
            ? undefined
            : map,
        cursor: hasMore ? nextCursor : null,
      };

      return result;
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

    if (!/^[a-zA-Z0-9_]{1,15}$/.test(u)) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`,
      );
    }

    const userExists = await postgresReadOnly`
      SELECT EXISTS(
        SELECT 1 FROM profiles WHERE username = ${u}
      );
    `;

    if (!userExists[0]?.exists) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`,
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
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`,
      );
    }

    const arr = html.split('<meta content="').slice(4, -6);

    const bioMatch = arr.find((a) =>
      a?.trim()?.endsWith(`" property="og:description" />`),
    );
    const bio =
      bioMatch?.replace(`" property="og:description" />`, "")?.trim() || "";

    const pfpMatch = arr.find((a) =>
      a?.trim()?.endsWith(`" property="og:image" />`),
    );
    const pfp =
      pfpMatch
        ?.replace(`" property="og:image" />`, "")
        ?.trim()
        ?.replaceAll(":large", "") ||
      `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`;

    const nameMatch = arr.find((a) =>
      a?.trim()?.endsWith(`" property="og:title" />`),
    );
    const name =
      nameMatch
        ?.replace(`" property="og:title" />`, "")
        ?.trim()
        ?.replace(` (@${username}) on X`, "") || "";

    if (!name && !bio && !pfp) {
      return Response.redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`,
      );
    }

    await postgresReadWrite`
      UPDATE profiles SET
        bio = ${bio},
        avatar = ${pfp},
        name = ${name}
      WHERE username = ${username};
    `;

    return Response.redirect(pfp.replace("_normal", "_bigger"));
  })
  .get("/profile/:username", async ({ params }) => {
    const { username } = params;

    if (
      !username ||
      typeof username !== "string" ||
      !/^[a-zA-Z0-9_]{1,15}$/.test(username)
    ) {
      return { error: "invalid username" };
    }

    try {
      const profile = await postgresReadOnly`
        SELECT *
        FROM profiles 
        WHERE username = ${username.toLowerCase()}
        LIMIT 1
      `;

      if (profile.length === 0) {
        return { error: "profile not found" };
      }

      return profile[0];
    } catch {
      return { error: "failed to fetch profile" };
    }
  });
