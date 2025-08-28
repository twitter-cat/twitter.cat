import { API_URL } from "./config.js";

const currentSession = localStorage.getItem("session")
  ? {
      token: localStorage.getItem("session").split("|…")[0],
      expires: new Date(localStorage.getItem("session").split("|…")[1]),
    }
  : {
      token: null,
      expires: null,
    };

export const getSession = async () => {
  if (
    currentSession.token &&
    (!currentSession.token.expires ||
      new Date() < new Date(currentSession.token.expires))
  ) {
    return currentSession.token;
  }

  const { _session } = await (
    await fetch(`${API_URL}/createSession`, { method: "POST" })
  ).json();

  if (!_session) throw new Error("no session");

  console.time("create session");

  const workerCode = `
    let _session;

    onmessage = ({ data }) => {
      if (data._session) _session = data._session;

      const { start, count } = data;

      function xorDecrypt(enc, keyStr) {
        const keyCodes = Array.from(keyStr).map(c => c.charCodeAt(0));
        const str = atob(enc);
        let res = "";
        for (let i = 0; i < str.length; i++) {
          res += String.fromCharCode(str.charCodeAt(i) ^ keyCodes[i % keyCodes.length]);
        }
        return res;
      }

      function getPayload(jwtStr) {
        const parts = jwtStr.split(".");
        if (parts.length !== 3) return null;
        try { return JSON.parse(atob(parts[1])); } catch { return null; }
      }

      for (let i = start; i < start + count; i++) {
        const dec = xorDecrypt(_session, i.toString());
        if (getPayload(dec)) {
          postMessage({ found: dec });
          return;
        }
      }
      postMessage({ found: null });
    };
  `;

  const blob = new Blob([workerCode], { type: "application/javascript" });
  const workerURL = URL.createObjectURL(blob);

  const WORKERS = navigator.hardwareConcurrency || 4;
  const CHUNK = 1000;
  let i = 0;

  const workers = Array.from({ length: WORKERS }, () => new Worker(workerURL));
  workers.forEach((w) => w.postMessage({ _session }));

  while (true) {
    const promises = workers.map((worker, idx) => {
      return new Promise((resolve) => {
        worker.onmessage = (e) => resolve(e.data.found);
        worker.postMessage({ start: i + idx * CHUNK, count: CHUNK });
      });
    });

    const results = await Promise.all(promises);
    const found = results.find(Boolean);

    if (found) {
      console.timeEnd("create session");

      currentSession.token = found;
      currentSession.expires = new Date(Date.now() + 55 * 60 * 1000);

      localStorage.setItem(
        "session",
        `${found}|…${currentSession.expires.toISOString()}`,
      );

      workers.forEach((w) => w.terminate());
      return found;
    }

    i += CHUNK * WORKERS;
  }
};

getSession();
