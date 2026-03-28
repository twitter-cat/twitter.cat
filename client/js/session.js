const SESSION_STORAGE_KEY = "twittercat_session";
const SESSION_REFRESH_BUFFER_MS = 5 * 60 * 1000;

const MAX_SEARCHES = 20;

let sessionPromise = null;
let currentSession = null;

export function getStoredSession() {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!stored) return null;

    const session = JSON.parse(stored);
    if (!session.token || !session.expires) return null;

    if (Date.now() >= session.expires - SESSION_REFRESH_BUFFER_MS) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    if (typeof session.searchCount !== "number") session.searchCount = 0;

    if (session.searchCount >= MAX_SEARCHES) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    return session;
  } catch {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

function storeSession(session) {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  currentSession = session;
}

export function incrementSearchCount() {
  if (currentSession) {
    currentSession.searchCount = (currentSession.searchCount || 0) + 1;
    storeSession(currentSession);
  }
}

function showInterstitial() {
  let interstitial = document.querySelector(".cap-loading-indicator");
  if (interstitial) return interstitial;

  interstitial = document.createElement("div");
  interstitial.className = "cap-loading-indicator";

  const container = document.createElement("div");
  container.innerHTML = `<style>@keyframes spin {to{transform:rotate(360deg)}}</style>
    <svg style="animation:spin .7s linear infinite" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>
    <span style="font-weight:500">making sure you're not a bot!</span>
    <span class="desc">this might take a few seconds</span>
  `;

  interstitial.appendChild(container);
  document.body.appendChild(interstitial);

  return interstitial;
}

function hideInterstitial() {
  const interstitial = document.querySelector(".cap-loading-indicator");
  if (interstitial) {
    interstitial.remove();
  }
}

async function createNewSession(apiUrl, showUI = true) {
  if (showUI) {
    showInterstitial();
  }

  try {
    const cap = new window.Cap({
      apiEndpoint: "https://cap.tiago.zip/c18a824a18/",
    });

    const { token: capToken } = await cap.solve();

    const response = await fetch(`${apiUrl}/cap/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        "x-twittercat-client":
          (() => {
            const c = document.createElement("canvas");
            c.width = 100;
            c.height = 100;

            const ctx = c.getContext("2d");
            const id = crypto.randomUUID();
            let h = 0;
            for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
            for (let y = 0; y < 100; y += 4) {
              ctx.fillStyle = `rgb(${(h + y * 3) % 255}, ${(h >> 2) % 255}, ${(h + y) % 255})`;
              ctx.fillRect(0, y, 100, 4);
            }
            ctx.font = "9px monospace";
            ctx.fillStyle = "#000";
            ctx.fillText(id.slice(0, 10), 2, 18);

            ctx.font = "7px Arial";
            ctx.fillStyle = "#222";
            ctx.fillText(id.slice(10, 20), 2, 32);
            ctx.save();
            ctx.translate(50, 60);
            ctx.rotate((h % 100) / 5000);
            ctx.scale(1, 1 + ((h >> 3) % 5) / 50);
            ctx.fillStyle = "#111";
            ctx.fillText(id.slice(20), -40, 0);
            ctx.restore();
            for (let i = 0; i < 40; i++) {
              const x = (h * (i + 3)) % 100;
              const y = (h * (i + 7)) % 100;
              ctx.fillStyle = `rgb(${(h >> i) & 255}, ${(h >> (i + 3)) & 255}, ${(h >> (i + 6)) & 255})`;
              ctx.fillRect(x, y, 1, 1);
            }
            ctx.beginPath();
            ctx.arc(75, 75, 4 + (h % 3), 0, Math.PI * (1.5 + (h % 10) / 20));
            ctx.strokeStyle = "#000";
            ctx.stroke();
            return c
              .toDataURL("image/jpeg", 0.6)
              .replace("data:image/jpeg;base64,/9j/", "")
              .replaceAll("=", "");
          })() +
          "?" +
          parseInt(
            `${new Date().getTime() * 12}${location.hostname.length + navigator.userAgent.length}`,
          ).toString(36) +
          new Date().getTime().toString(36) +
          Math.imul(0x123456, Date.now()).toString(36) +
          "?" +
          (navigator.hardwareConcurrency || 0) +
          "." +
          (navigator.deviceMemory || 0) +
          "." +
          navigator.userAgent.length.toString(36) +
          "." +
          btoa(navigator.languages.join("")).replaceAll("=", "") +
          "." +
          btoa(navigator.language || "").replaceAll("=", "") +
          "." +
          [
            screen.width.toString(36),
            screen.height.toString(36),
            screen.colorDepth.toString(36),
            window.innerWidth.toString(36),
            window.innerHeight.toString(36),
            ((window.devicePixelRatio * 1000) | 0).toString(36),
            document.body.getElementsByTagName("*").length.toString(36),
            (performance.timeOrigin + performance.now()).toString(36),
            ((Date.now() - performance.now()) | 0).toString(36),
            (() => {}).toString().length.toString(36),
            Math.max.toString().length.toString(36),
            btoa(
              Intl.DateTimeFormat().resolvedOptions().timeZone +
                "-" +
                new Intl.NumberFormat().format(12345.67).length,
            ).replaceAll("=", ""),
          ].join("§") +
          `?${crypto.randomUUID().split("-")[4]}31bd${crypto.randomUUID().split("-")[4]}`,
      },
      body: JSON.stringify({
        capToken,
        hash: btoa(
          await (() => {
            const h32 = (s) => {
              let h = 0x811c9dc5;
              for (let i = 0; i < s.length; i++)
                h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
              return h.toString(36);
            };
            const b64 = (s) => {
              try {
                return btoa(String(s)).replaceAll("=", "");
              } catch {
                return "0";
              }
            };

            const canvasEnt = () => {
              const c = document.createElement("canvas");
              c.width = 240;
              c.height = 60;
              const ctx = c.getContext("2d");
              ctx.fillStyle = "#f0f";
              ctx.fillRect(0, 0, 240, 60);
              ctx.fillStyle = "rgba(10,200,150,0.7)";
              ctx.fillRect(10, 5, 120, 40);
              ctx.font = "11px Arial";
              ctx.fillStyle = "#000";
              ctx.fillText("Cwm fjordbank \u265E", 4, 18);
              ctx.font = "10px monospace";
              ctx.fillStyle = "#fff";
              ctx.fillText("\u00C0\u00E9\u03A9\u4E2D", 4, 35);
              ctx.shadowColor = "red";
              ctx.shadowBlur = 4;
              ctx.fillStyle = "#ff0";
              ctx.fillRect(140, 10, 60, 30);
              ctx.beginPath();
              ctx.arc(200, 30, 20, 0, Math.PI * 2);
              ctx.strokeStyle = "#0ff";
              ctx.lineWidth = 2;
              ctx.stroke();
              const d = ctx.getImageData(0, 0, 240, 60).data;
              let acc = 0;
              for (let i = 0; i < d.length; i += 4) acc = Math.imul(acc ^ d[i], 0x9e3779b9) >>> 0;
              return (
                c.toDataURL("image/jpeg", 0.5).slice(-800).replaceAll("=", "") + acc.toString(36)
              );
            };

            const webglEnt = () => {
              try {
                const c = document.createElement("canvas");
                const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
                if (!gl) return "0";
                const ext = gl.getExtension("WEBGL_debug_renderer_info");
                const vendor = ext
                  ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)
                  : gl.getParameter(gl.VENDOR);
                const renderer = ext
                  ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)
                  : gl.getParameter(gl.RENDERER);
                const params = [
                  gl.MAX_TEXTURE_SIZE,
                  gl.MAX_VERTEX_ATTRIBS,
                  gl.MAX_RENDERBUFFER_SIZE,
                  gl.ALIASED_LINE_WIDTH_RANGE,
                  gl.ALIASED_POINT_SIZE_RANGE,
                ]
                  .map((p) => gl.getParameter(p))
                  .join("|");
                return (
                  b64(vendor + renderer) + "." + h32(params + gl.getSupportedExtensions().length)
                );
              } catch {
                return "0";
              }
            };

            const audioEnt = async () => {
              try {
                const ctx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
                  1,
                  4096,
                  44100,
                );
                const osc = ctx.createOscillator(),
                  comp = ctx.createDynamicsCompressor();
                comp.threshold.value = -50;
                comp.knee.value = 40;
                comp.ratio.value = 12;
                comp.attack.value = 0;
                comp.release.value = 0.25;
                osc.type = "triangle";
                osc.frequency.value = 10000;
                osc.connect(comp);
                comp.connect(ctx.destination);
                osc.start(0);
                const buf = await ctx.startRendering(),
                  data = buf.getChannelData(0);
                let sum = 0;
                for (let i = 0; i < data.length; i++) sum += Math.abs(data[i]);
                return ((sum * 1e9) | 0).toString(36);
              } catch {
                return "0";
              }
            };

            const fontEnt = () => {
              const fonts = [
                "Arial",
                "Georgia",
                "Helvetica Neue",
                "Courier New",
                "Verdana",
                "Trebuchet MS",
                "Comic Sans MS",
                "Impact",
                "Palatino",
                "Garamond",
                "Tahoma",
                "Futura",
                "Gill Sans",
                "Optima",
              ];
              const c = document.createElement("canvas");
              c.width = 400;
              c.height = 32;
              const ctx = c.getContext("2d"),
                test = "mmmmwwwwiiiirrrrffffllll";
              ctx.font = "14px monospace";
              const base = ctx.measureText(test).width;
              return parseInt(
                fonts
                  .map((f) => {
                    ctx.font = `14px "${f}",monospace`;
                    return ctx.measureText(test).width !== base ? "1" : "0";
                  })
                  .join(""),
                2,
              ).toString(36);
            };

            const timingEnt = () => {
              const t = performance.now();
              let x = 0;
              for (let i = 0; i < 1e5; i++) x ^= i * 0x9e3779b9;
              return [(((performance.now() - t) * 1000) | 0).toString(36), x.toString(36)].join(
                "_",
              );
            };

            const cssEnt = () =>
              [
                "(prefers-color-scheme:dark)",
                "(prefers-reduced-motion:reduce)",
                "(pointer:fine)",
                "(hover:hover)",
                "(display-mode:standalone)",
                "(-webkit-min-device-pixel-ratio:2)",
                "(forced-colors:active)",
                "(orientation:portrait)",
                "(inverted-colors:inverted)",
              ]
                .map((q) => (window.matchMedia(q).matches ? "1" : "0"))
                .join("");

            const permEnt = async () => {
              const r = await Promise.all(
                ["geolocation", "notifications", "camera", "microphone"].map((p) =>
                  navigator.permissions
                    .query({ name: p })
                    .then((r) => r.state[0])
                    .catch(() => "x"),
                ),
              );
              return r.join("");
            };

            const engineEnt = () => {
              let sl = 0;
              try {
                null.x;
              } catch (e) {
                sl = (e.stack || "").length;
              }
              return [
                sl.toString(36),
                (() => {}).toString().length.toString(36),
                (+!!window.chrome).toString(),
                (+!!window.safari).toString(),
              ].join(".");
            };

            const screen_ = () =>
              [
                screen.width,
                screen.height,
                screen.availWidth,
                screen.availHeight,
                screen.colorDepth,
                screen.pixelDepth,
                innerWidth,
                innerHeight,
                (devicePixelRatio * 1000) | 0,
                "ontouchstart" in window ? navigator.maxTouchPoints : 0,
              ]
                .map((v) => v.toString(36))
                .join(".");

            const mem_ = () => {
              const m = performance.memory;
              return m
                ? [
                    ((m.jsHeapSizeLimit / 1048576) | 0).toString(36),
                    ((m.totalJSHeapSize / 1048576) | 0).toString(36),
                  ].join(".")
                : "0";
            };
            const conn_ = () => {
              const c =
                navigator.connection || navigator.mozConnection || navigator.webkitConnection;
              return c
                ? [
                    c.effectiveType || "",
                    (c.downlink || 0).toString(36),
                    (c.rtt || 0).toString(36),
                    c.saveData ? "1" : "0",
                  ].join(".")
                : "0";
            };
            const locale_ = () =>
              b64(
                [
                  Intl.DateTimeFormat().resolvedOptions().timeZone,
                  Intl.DateTimeFormat().resolvedOptions().locale,
                  new Intl.NumberFormat().format(1234567.89).length,
                  new Intl.DateTimeFormat([], { hour: "numeric" }).format(new Date()).includes("AM")
                    ? "h12"
                    : "h24",
                ].join("|"),
              );
            const plugins_ = () => {
              try {
                return h32(
                  Array.from(navigator.plugins)
                    .map((p) => p.name)
                    .join("|") +
                    "|" +
                    Array.from(navigator.mimeTypes)
                      .map((m) => m.type)
                      .join("|"),
                );
              } catch {
                return "0";
              }
            };

            return (async () => {
              const [audio, perm] = await Promise.all([audioEnt(), permEnt()]);
              const canvas = canvasEnt(),
                webgl = webglEnt(),
                fonts = fontEnt();
              const timing = timingEnt(),
                css = cssEnt(),
                engine = engineEnt();
              const scr = screen_(),
                mem = mem_(),
                conn = conn_(),
                locale = locale_(),
                plug = plugins_();
              const ua = navigator.userAgent;
              const hw = [
                navigator.hardwareConcurrency || 0,
                navigator.deviceMemory || 0,
                ua.length,
                b64(navigator.platform || ""),
              ].join(".");
              const nav = [
                b64(navigator.languages?.join(",") || ""),
                b64(navigator.language || ""),
                b64(ua.slice(0, 40)),
                navigator.doNotTrack || "u",
                +navigator.javaEnabled?.(),
                (document.body?.getElementsByTagName("*").length || 0).toString(36),
              ].join(".");
              const time = [
                performance.timeOrigin.toString(36),
                (performance.now() | 0).toString(36),
                ((Date.now() - performance.now()) | 0).toString(36),
                new Date().getTimezoneOffset().toString(36),
              ].join(".");
              const rand =
                crypto.randomUUID().replaceAll("-", "") +
                ((performance.now() * 1e6) | 0).toString(36) +
                Math.imul(0xdeadbeef, Date.now()).toString(36);
              const everything = [
                canvas,
                webgl,
                audio,
                fonts,
                timing,
                css,
                perm,
                plug,
                conn,
                locale,
                engine,
                scr,
                mem,
                hw,
                nav,
                time,
              ].join("");
              return [
                canvas,
                webgl,
                audio + "." + fonts + "." + timing,
                css + perm,
                plug + "." + conn + "." + mem,
                locale + "." + engine,
                hw + "." + nav,
                scr,
                time,
                rand,
                h32(everything),
              ].join("~");
            })();
          })(),
        ),
      }),
    });

    const result = await response.json();

    if (!result.success || !result.sessionToken) {
      throw new Error(result.error || "Failed to create session");
    }

    const session = {
      token: result.sessionToken,
      expires: result.expires,
      searchCount: 0,
    };

    storeSession(session);

    return session;
  } finally {
    if (showUI) {
      hideInterstitial();
    }
  }
}

export async function ensureSession(apiUrl) {
  if (currentSession && Date.now() < currentSession.expires - SESSION_REFRESH_BUFFER_MS) {
    if ((currentSession.searchCount || 0) >= MAX_SEARCHES) {
      invalidateSession();
    } else {
      return currentSession.token;
    }
  }

  const stored = getStoredSession();
  if (stored) {
    currentSession = stored;
    return stored.token;
  }

  if (sessionPromise) {
    showInterstitial();
    try {
      const session = await sessionPromise;
      if (session) {
        return session.token;
      }
    } finally {
      hideInterstitial();
    }
  }

  sessionPromise = createNewSession(apiUrl, true);
  try {
    const session = await sessionPromise;
    return session.token;
  } finally {
    sessionPromise = null;
  }
}

export function startSessionCreation(apiUrl) {
  const stored = getStoredSession();
  if (stored) {
    currentSession = stored;
    return;
  }

  if (!sessionPromise) {
    sessionPromise = createNewSession(apiUrl, false)
      .catch(() => {
        return null;
      })
      .finally(() => {
        sessionPromise = null;
      });
  }
}

export function isCreatingSession() {
  return sessionPromise !== null;
}

export function getSessionToken() {
  if (currentSession && Date.now() < currentSession.expires - SESSION_REFRESH_BUFFER_MS) {
    return currentSession.token;
  }

  const stored = getStoredSession();
  if (stored) {
    currentSession = stored;
    return stored.token;
  }

  return null;
}

export function invalidateSession() {
  currentSession = null;
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

export async function waitForPendingSession() {
  if (sessionPromise) {
    await sessionPromise;
  }
}
