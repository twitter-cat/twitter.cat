import { SQL } from "bun";
import { Elysia } from "elysia";
import * as jose from "jose";

const db = new SQL("sqlite:../.cap.db");

(async () => {
await db`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    expires INTEGER NOT NULL,
    search_count INTEGER NOT NULL DEFAULT 0
  );
`;
})();

const SESSION_SECRET = new TextEncoder().encode(process.env.CURSOR_SIGNING_KEY);
const SESSION_DURATION_MS = 60 * 60 * 1000;

const MAX_SEARCHES = 25;

const CAP_SECRET = process.env.CAP_SECRET_KEY;
const CAP_INSTANCE = process.env.CAP_INSTANCE;
const CAP_SITE_KEY = process.env.CAP_SITE_KEY;

async function verifyCapToken(token) {
  const res = await fetch(`${CAP_INSTANCE}/${CAP_SITE_KEY}/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: CAP_SECRET, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

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
  .post("/cap/session", async ({ body, set }) => {
    const { capToken } = body;
    if (!capToken) {
      set.status = 400;
      return { success: false, error: "missing cap token" };
    }

    const valid = await verifyCapToken(capToken);
    if (!valid) {
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
