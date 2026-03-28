async function sha256(message) {
  const data = new TextEncoder().encode(message);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function signRequest(q, type, cursor, filter, sort) {
  const nonce = await sha256(crypto.randomUUID() + Date.now());
  const ts = Date.now();

  const hash = await sha256(
    `${q}\x00${type}\x00${cursor}\x00${filter}\x00${sort}\x00${nonce}\x00${ts}\x00${navigator.userAgent}`,
  );

  const chain = await sha256(JSON.stringify([nonce, ts, hash]));

  return [nonce, ts, hash, chain];
}
