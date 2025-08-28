import crypto from "node:crypto";
import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.SECRET_KEY);

function encrypt(text) {
  const key = crypto.createHash("sha256").update(secret).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

function decrypt(data) {
  const key = crypto.createHash("sha256").update(secret).digest();
  const [ivHex, encryptedHex] = data.split(":");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    Buffer.from(ivHex, "hex"),
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedHex, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

function xorEncrypt(str, key) {
  const keyCodes = Array.from(key).map((c) => c.charCodeAt(0));
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(
      str.charCodeAt(i) ^ keyCodes[i % keyCodes.length],
    );
  }
  return Buffer.from(res, "binary").toString("base64");
}

export const checkSession = async (ctx) => {
  try {
    const { authorization } = ctx.headers;
    if (!authorization || !authorization.includes(".")) return false;

    const decrypted = (await jwtVerify(authorization, secret)).payload;
    if (!decrypted || !decrypted.f) return false;

    if (
      decrypt(decrypted.s).replaceAll("=", "") !== "undefined" &&
      ctx.headers["CF-Connecting-IP"] !==
        decrypt(decrypted.s).replaceAll("=", "")
    )
      return false;

    const decryptedF = JSON.parse(decrypt(decrypted.f));

    if (decryptedF.ua !== ctx.headers["user-agent"]) return false;
    if (decryptedF.en !== ctx.headers["accept-encoding"]) return false;
    if (decryptedF.la !== ctx.headers["accept-language"]) return false;

    return true;
  } catch {
    return false;
  }
};

export const sessionApi = new Elysia()
  .use(
    rateLimit({
      duration: 8_000,
      max: 10,
      scoping: "scoped",
      generator: (c) => c.headers["CF-Connecting-IP"],
    }),
  )
  .post("/createSession", async ({ headers }) => {
    const max = 500_000;
    const key = Math.floor(Math.random() * (max + 1));

    const session = await new SignJWT({
      s: encrypt(
        headers["CF-Connecting-IP"] + "=".repeat(Math.ceil(Math.random() * 50)),
      ),
      f: encrypt(
        JSON.stringify({
          ua: headers["user-agent"],
          en: headers["accept-encoding"],
          la: headers["accept-language"],
        }),
      ),
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    return { _session: xorEncrypt(session, key.toString()) };
  });
