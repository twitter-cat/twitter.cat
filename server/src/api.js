import { SQL } from "bun";
import { Elysia, t } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import * as jose from "jose";
import { MeiliSearch } from "meilisearch";
import { validateSession } from "./cap.js";

const meilisearch = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_MASTER_KEY,
});

const postgresReadOnly = new SQL(
  `postgres://${process.env.POSTGRES_USER_READONLY}:${process.env.POSTGRES_PASSWORD_READONLY}@${process.env.POSTGRES_HOST}:5432/twitter`,
);
const postgresReadWrite = new SQL(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/twitter`,
);

const DEFAULT_LIMIT = 12;
const profilesIndex = meilisearch.index("profiles");
const tweetsIndex = meilisearch.index("tweets");

const secret = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);

const decodeCursor = async (cursor) => {
  if (!cursor || typeof cursor !== "string") {
    return { offset: 0 };
  }

  try {
    const { payload } = await jose.jwtVerify(cursor, secret, {
      algorithms: ["HS256"],
    });
    return { offset: payload.offset || 0 };
  } catch {
    throw new Error("invalid cursor");
  }
};

const createCursor = async (offset) => {
  const jwt = await new jose.SignJWT({ offset })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret);
  return jwt;
};

const executeTweetSearchQuery = async (q, filterString, offset, sortOption) => {
  let sort;
  if (sortOption === "likes") {
    sort = ["like_count:desc"];
  } else if (sortOption === "newest") {
    sort = ["created_at:desc"];
  } else if (sortOption === "oldest") {
    sort = ["created_at:asc"];
  }

  const result = await tweetsIndex.search(q, {
    filter: filterString || undefined,
    sort,
    limit: DEFAULT_LIMIT + 1,
    offset,
    attributesToHighlight: ["body"],
  });

  const authorIds = Array.from(
    new Set(result.hits.map((t) => t.author_id).filter(Boolean)),
  );
  const authors = await postgresReadOnly`
    SELECT id, username, name, avatar, verified, protected, square_avatar
    FROM profiles
    WHERE id = ANY(${postgresReadOnly.array(authorIds, "text")})
  `;

  const authorMap = new Map();
  authors.forEach((author) => {
    authorMap.set(author.id, author);
  });

  result.hits = result.hits.map((e) => {
    e.body = e._formatted.body;
    delete e._formatted;
    return e;
  });

  return {
    rows: result.hits.map((tweet) => {
      const author = authorMap.get(tweet.author_id);
      if (author) {
        return {
          ...tweet,
          author_username: author.username,
          author_name: author.name,
          author_avatar: author.avatar,
          author_verified: author.verified,
          author_protected: author.protected,
          author_square_avatar: author.square_avatar,
        };
      }

      return tweet;
    }),
    processingTimeMs: result.processingTimeMs,
    estimatedTotalHits: result.estimatedTotalHits,
    requestUid: result.requestUid,
  };
};

export default new Elysia()
  .use(
    rateLimit({
      duration: 15_000,
      max: 30,
      generator: (c) => c.headers.get("CF-Connecting-IP"),
      skip: (r) => r.method === "OPTIONS",
    }),
  )
  .post(
    "/query",
    async ({ body }) => {
      try {
        const { type, q, cursor, filter, sort, session: sessionToken } = body;

        if (type === "dummy") {
          return "OK";
        }
        if (!["accounts", "tweets", "media"].includes(type)) {
          return { error: "only accounts, tweets, and media are supported" };
        }
        if (!q || q.length > 500) {
          return { error: "missing or invalid query" };
        }
        if (cursor?.length > 1000) {
          return { error: "invalid cursor" };
        }
        const filterString = filter?.trim() || "";
        if (filterString.length > 600) {
          return { error: "filter string too long (max 600 characters)" };
        }
        if (q.length > 1_000) {
          return { error: "search query too long (max 1000 characters)" };
        }

        if (!sessionToken) {
          return { error: "missing session" };
        }

        const sessionResult = await validateSession(sessionToken, "search");
        if (!sessionResult.success) {
          if (sessionResult.reason === "search_limit_exceeded") {
            return { error: "session_exhausted" };
          }
          return { error: "invalid session" };
        }

        const validSorts = ["relevance", "likes", "newest", "oldest"];
        const sortOption = validSorts.includes(sort) ? sort : "relevance";

        const { offset } = await decodeCursor(cursor);

        if (type === "tweets" || type === "media") {
          const { rows, processingTimeMs, estimatedTotalHits, requestUid } =
            await executeTweetSearchQuery(q, filterString, offset, sortOption);

          let hasMore = false;
          if (rows.length > DEFAULT_LIMIT) {
            hasMore = true;
            rows.pop();
          }

          let nextCursor = null;
          if (hasMore && rows.length > 0) {
            nextCursor = await createCursor(offset + DEFAULT_LIMIT);
          }

          return {
            rows: rows.map((row) => {
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
            }),
            map: rows.length > 0 ? Object.keys(rows[0]).join(",") : "",
            cursor: hasMore ? nextCursor : null,
            ms: processingTimeMs,
            hits: estimatedTotalHits,
            req: requestUid,
          };
        }

        const result = await profilesIndex.search(q || "", {
          filter: filterString || undefined,
          limit: DEFAULT_LIMIT + 1,
          offset: offset,
        });
        const rows = result.hits;

        let hasMore = false;
        if (rows.length > DEFAULT_LIMIT) {
          hasMore = true;
          rows.pop();
        }

        let nextCursor = null;
        if (hasMore && rows.length > 0) {
          nextCursor = await createCursor(offset + DEFAULT_LIMIT);
        }

        const map = rows.length > 0 ? Object.keys(rows[0]).join(",") : "";

        return {
          rows: rows.map((row) => {
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
          }),
          map,
          cursor: hasMore ? nextCursor : null,
          ms: result.processingTimeMs,
          hits: result.estimatedTotalHits,
          req: result.requestUid,
        };
      } catch (err) {
        return {
          error: String(err?.message || err),
        };
      }
    },
    {
      body: t.Object({
        type: t.String(),
        session: t.String(),
        q: t.String(),
        cursor: t.Optional(t.Union([t.String(), t.Null()])),
        filter: t.Optional(t.Union([t.String(), t.Null()])),
        sort: t.Optional(t.Union([t.String(), t.Null()])),
      }),
    },
  )
  .get("/:u/avfetch.jpg", async ({ params, redirect }) => {
    const { u } = params;

    if (!u || typeof u !== "string") {
      return "NOT_FOUND";
    }

    if (!/^[a-zA-Z0-9_]{1,15}$/.test(u)) {
      return redirect(
        `https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png`,
      );
    }

    const userExists = await postgresReadOnly`
      SELECT EXISTS(
        SELECT 1 FROM profiles WHERE username = ${u}
      );
    `;

    if (!userExists[0]?.exists) {
      return redirect(
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
      return redirect(
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
      return redirect(
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

    return redirect(pfp.replace("_normal", "_bigger"));
  });
