import Cap from "@cap.js/server";
import { SQL } from "bun";
import { Elysia } from "elysia";
import * as jose from "jose";

const db = new SQL("sqlite:../.cap.db");
const difficulty = 80;

db`
  CREATE TABLE IF NOT EXISTS challenges (
    token TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    expires INTEGER NOT NULL
  );
`;

db`
  CREATE TABLE IF NOT EXISTS tokens (
    key TEXT PRIMARY KEY,
    expires INTEGER NOT NULL
  );
`;

db`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    expires INTEGER NOT NULL,
    search_count INTEGER NOT NULL DEFAULT 0
  );
`;

const SESSION_SECRET = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);
const SESSION_DURATION_MS = 60 * 60 * 1000;

const MAX_SEARCHES = 25;

export const cap = new Cap({
  storage: {
    challenges: {
      store: async (token, challengeData) => {
        await db`
          INSERT INTO challenges (token, data, expires)
          VALUES (${token}, ${JSON.stringify(challengeData)}, ${challengeData.expires})
          ON CONFLICT(token) DO UPDATE SET
            data = excluded.data,
            expires = excluded.expires
        `;
      },

      read: async (token) => {
        const [row] = await db`
          SELECT data, expires
          FROM challenges
          WHERE token = ${token} AND expires > ${Date.now()}
          LIMIT 1
        `;
        return row
          ? { challenge: JSON.parse(row.data), expires: Number(row.expires) }
          : null;
      },

      delete: async (token) => {
        await db`DELETE FROM challenges WHERE token = ${token}`;
      },

      deleteExpired: async () => {
        await db`DELETE FROM challenges WHERE expires <= ${Date.now()}`;
      },
    },

    tokens: {
      store: async (tokenKey, expires) => {
        await db`
          INSERT INTO tokens (key, expires)
          VALUES (${tokenKey}, ${expires})
          ON CONFLICT(key) DO UPDATE SET
            expires = excluded.expires
        `;
      },

      get: async (tokenKey) => {
        const [row] = await db`
          SELECT expires
          FROM tokens
          WHERE key = ${tokenKey} AND expires > ${Date.now()}
          LIMIT 1
        `;
        return row ? Number(row.expires) : null;
      },

      delete: async (tokenKey) => {
        await db`DELETE FROM tokens WHERE key = ${tokenKey}`;
      },

      deleteExpired: async () => {
        await db`DELETE FROM tokens WHERE expires <= ${Date.now()}`;
      },
    },
  },
});

async function createSession() {
  const sessionId = crypto.randomUUID();
  const expires = Date.now() + SESSION_DURATION_MS;

  await db`
    INSERT INTO sessions (id, expires, search_count)
    VALUES (${sessionId}, ${expires}, 0)
  `;

  const token = await new jose.SignJWT({ sid: sessionId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Math.floor(expires / 1000))
    .sign(SESSION_SECRET);

  return { token, expires };
}

export async function validateSession(sessionToken, usageType = null) {
  if (!sessionToken || typeof sessionToken !== "string") {
    return { success: false };
  }

  try {
    const { payload } = await jose.jwtVerify(sessionToken, SESSION_SECRET, {
      algorithms: ["HS256"],
    });

    const sessionId = payload.sid;
    if (!sessionId) {
      return { success: false };
    }

    const [row] = await db`
      SELECT expires, search_count
      FROM sessions
      WHERE id = ${sessionId} AND expires > ${Date.now()}
      LIMIT 1
    `;

    if (!row) {
      return { success: false };
    }

    const searchCount = Number(row.search_count) || 0;

    if (usageType === "search") {
      if (searchCount >= MAX_SEARCHES) {
        await db`DELETE FROM sessions WHERE id = ${sessionId}`;
        return { success: false, reason: "search_limit_exceeded" };
      }
      await db`UPDATE sessions SET search_count = search_count + 1 WHERE id = ${sessionId}`;
    }

    return {
      success: true,
      sessionId,
      expires: Number(row.expires),
      searchCount: usageType === "search" ? searchCount + 1 : searchCount,
    };
  } catch {
    return { success: false };
  }
}

setInterval(
  async () => {
    try {
      await db`DELETE FROM sessions WHERE expires <= ${Date.now()}`;
    } catch (e) {
      console.error("Failed to cleanup expired sessions:", e);
    }
  },
  5 * 60 * 1000,
);

export default new Elysia()
  .post("/cap/challenge", async () => {
    return await cap.createChallenge({
      challengeCount: difficulty,
    });
  })
  .post("/cap/redeem", async ({ body, set }) => {
    const { token, solutions } = body;
    if (!token || !solutions) {
      set.status = 400;
      return { success: false };
    }
    return await cap.redeemChallenge({ token, solutions });
  })
  .post("/cap/session", async ({ body, set }) => {
    const { capToken } = body;
    if (!capToken) {
      set.status = 400;
      return { success: false, error: "missing cap token" };
    }

    const validation = await cap.validateToken(capToken);
    if (!validation.success) {
      set.status = 400;
      return { success: false, error: "invalid cap token" };
    }

    const session = await createSession();
    return {
      success: true,
      sessionToken: session.token,
      expires: session.expires,
    };
  });
