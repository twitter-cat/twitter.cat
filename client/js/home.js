import { API_URL } from "./config.js";
import { createTweetEl } from "./index.js";

const TABS = [
  { key: "foryou", label: "for you" },
  { key: "hot", label: "hot" },
];

const fmtCount = (n) => Number(n || 0).toLocaleString();

const fmtAgo = (date) => {
  const s = Math.max(0, (Date.now() - new Date(date).getTime()) / 1000);
  if (s < 60) return "now";
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}d`;
};

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const tabler = (paths, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const VERIFIED_SVG = `<svg class="verified-badge" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.68.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91c-1.31.66-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.34c-.46 1.39-.2 2.91.81 3.91s2.52 1.26 3.91.81c.66 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.19 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></svg>`;
const FLAME_SVG = tabler(
  '<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />',
);
const TREND_UP_SVG = tabler('<path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" />', "delta-icon");
const TREND_DOWN_SVG = tabler('<path d="M3 7l6 6l4 -4l8 8" /><path d="M14 17l7 0l0 -7" />', "delta-icon");
const BACK_SVG = tabler('<path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" />', "back-icon");
const SPINNER_SVG = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/></svg>`;

const state = { tab: "foryou", offset: 0, loading: false, done: false };

const feedEl = document.getElementById("home-feed");
const controlsEl = document.getElementById("home-controls");

document.body.classList.add("has-home");

function buildControls() {
  controlsEl.innerHTML = "";
  for (const tab of TABS) {
    const b = document.createElement("button");
    b.className = `home-tab${tab.key === state.tab ? " active" : ""}`;
    b.textContent = tab.label;
    b.dataset.tab = tab.key;
    b.addEventListener("click", () => {
      if (state.tab === tab.key) return;
      state.tab = tab.key;
      reload();
    });
    controlsEl.appendChild(b);
  }
  const indicator = document.createElement("span");
  indicator.className = "home-tab-indicator";
  controlsEl.appendChild(indicator);
  requestAnimationFrame(updateTabIndicator);
}

function updateTabIndicator() {
  const indicator = controlsEl.querySelector(".home-tab-indicator");
  const active = controlsEl.querySelector(".home-tab.active");
  if (!indicator || !active) return;
  indicator.style.width = `${active.offsetWidth}px`;
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
}

function syncControls() {
  for (const b of controlsEl.querySelectorAll(".home-tab"))
    b.classList.toggle("active", b.dataset.tab === state.tab);
  updateTabIndicator();
}

window.addEventListener("resize", updateTabIndicator);

function sparkSvg(counts, up) {
  const w = 56;
  const h = 18;
  const n = counts.length;
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const range = max - min || 1;
  const pts = counts
    .map((c, i) => {
      const x = (i / (n - 1)) * (w - 2) + 1;
      const y = h - ((c - min) / range) * (h - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const color = up ? "#00ba7c" : "#f4212e";
  return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function insightHtml(story) {
  if (story.momentum == null || !story.spark) return "";
  const up = story.momentum >= 0;
  const badge =
    story.momentum === 0
      ? `<span class="delta flat">0%</span>`
      : `<span class="delta ${up ? "up" : "down"}">${up ? TREND_UP_SVG : TREND_DOWN_SVG}${Math.abs(story.momentum)}%</span>`;
  return `<span class="insight">${sparkSvg(story.spark, up)}${badge}</span>`;
}

function headLine(story) {
  return `
    <div class="s-head">
      <span class="s-cat"><b>${esc(story.category || "other")}</b> · ${fmtAgo(story.updatedAt)}</span>
      ${insightHtml(story)}
    </div>`;
}

function renderStoryCard(story) {
  const row = document.createElement("article");
  row.className = "story-row";
  row.dataset.id = story.id;

  const pfps = (story.pfps || [])
    .slice(0, 3)
    .map((u) => `<img src="${esc(u)}" loading="lazy" onerror="this.remove()" alt="" />`)
    .join("");

  row.innerHTML = `
    ${headLine(story)}
    <h2 class="s-title">${esc(story.title)}</h2>
    <p class="s-summary">${esc(story.summary || "")}</p>
    <div class="s-foot">
      <span class="s-count"><b>${fmtCount(story.tweetCount)}</b> posts</span>
      <div class="pfp-stack">${pfps}</div>
    </div>`;

  row.addEventListener("click", () => showStory(story));
  return row;
}

function renderQuoted(q) {
  const div = document.createElement("div");
  div.className = "quoting-tweet quoted-tweet-loaded";

  const avatar =
    q.author_avatar && /^https?:\/\//.test(q.author_avatar)
      ? esc(q.author_avatar)
      : "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";

  const first = (q.media || [])[0];
  let mediaHtml = "";
  if (first?.url && /^https?:\/\//.test(first.url)) {
    mediaHtml = `<div class="quoted-media"><img src="${esc(first.url)}" loading="lazy" onerror="this.closest('.quoted-media').remove()" alt="" /></div>`;
  }

  div.innerHTML = `
    <div class="quoted-header">
      <img class="quoted-avatar" width="20" height="20" src="${avatar}" onerror="this.style.visibility='hidden'" alt="" />
      <div class="quoted-author-info">
        <span class="quoted-name">${esc(q.author_name || q.author_username || "")}${q.author_verified ? VERIFIED_SVG : ""}</span>
        <span class="quoted-username">@${esc(q.author_username || "")}</span>
      </div>
    </div>
    <div class="quoted-body">${esc(q.body || "")}</div>
    ${mediaHtml}`;
  return div;
}

function buildTweet(tweet) {
  const el = createTweetEl({ ...tweet, quoting_id: null });
  if (tweet.quoted) {
    const stats = el.querySelector(".tweet-stats");
    const quoted = renderQuoted(tweet.quoted);
    if (stats) el.insertBefore(quoted, stats);
    else el.appendChild(quoted);
  }
  return el;
}

function renderFeedTweet(tweet) {
  const wrap = document.createElement("div");
  wrap.className = "feed-tweet";
  wrap.innerHTML = `<div class="feed-tweet-label">${FLAME_SVG} popular right now</div>`;
  try {
    wrap.appendChild(buildTweet(tweet));
  } catch (e) {
    console.warn("[home] tweet render", e);
    return null;
  }
  return wrap;
}

async function fetchFeed() {
  if (state.loading || state.done) return;
  state.loading = true;

  const params = new URLSearchParams({ tab: state.tab, offset: String(state.offset) });

  try {
    const res = await fetch(`${API_URL}/home?${params}`);
    const data = await res.json();
    feedEl.querySelector(".home-skeletons")?.remove();

    const items = data.items || [];
    if (!items.length && state.offset === 0) {
      feedEl.innerHTML = `<div class="home-feed-end">nothing here right now</div>`;
      state.done = true;
      return;
    }

    for (const item of items) {
      if (item.type === "story") feedEl.appendChild(renderStoryCard(item.story));
      else if (item.type === "tweet") {
        const el = renderFeedTweet(item.tweet);
        if (el) feedEl.appendChild(el);
      }
    }

    if (data.nextOffset == null) {
      state.done = true;
      const end = document.createElement("div");
      end.className = "feed-end";
      end.innerHTML = `<div class="feed-end-msg">you're all caught up</div>`;
      feedEl.appendChild(end);
    } else {
      state.offset = data.nextOffset;
    }
  } catch (e) {
    console.warn("[home] feed error", e);
    feedEl.querySelector(".home-skeletons")?.remove();
    if (state.offset === 0) feedEl.innerHTML = `<div class="home-feed-end">couldn't load feed</div>`;
  } finally {
    state.loading = false;
  }
}

function showSkeletons() {
  const row = `<div class="sk-row">
      <div class="sk-line sk-cat"></div>
      <div class="sk-line sk-title"></div>
      <div class="sk-line sk-title2"></div>
      <div class="sk-line sk-meta"></div>
    </div>`;
  feedEl.innerHTML = `<div class="home-skeletons">${row.repeat(7)}</div>`;
}

function reload() {
  state.offset = 0;
  state.done = false;
  state.loading = false;
  syncControls();
  showSkeletons();
  fetchFeed();
}

/* ---- dedicated story page ---- */
const storyPageEl = document.getElementById("story-page");
let currentStoryId = null;

function storyHeadHtml(story) {
  return `
    ${headLine(story)}
    <h1 class="sp-title">${esc(story.title)}</h1>
    <p class="sp-summary">${esc(story.summary || "")}</p>`;
}

function renderStoryDetail(data, story, container) {
  container.innerHTML = "";

  if (data.relevantUsers?.length) {
    const wrap = document.createElement("div");
    wrap.className = "relevant-users";
    wrap.innerHTML = `<div class="section-label">accounts driving this</div>
      <div class="ru-row">${data.relevantUsers
        .slice(0, 8)
        .map(
          (u) => `<a class="ru-chip" href="https://x.com/${esc(u.username)}" target="_blank" rel="noopener">
            <img src="${esc(u.avatar)}" loading="lazy" onerror="this.style.visibility='hidden'" alt="" />
            <span class="ru-name">${esc(u.name || u.username)}${u.verified ? VERIFIED_SVG : ""}</span>
          </a>`,
        )
        .join("")}</div>`;
    container.appendChild(wrap);
  }

  const hasTop = data.top?.length > 0;
  const hasLatest = data.latest?.length > 0;

  if (hasTop || hasLatest) {
    const section = document.createElement("div");
    section.className = "story-tweets";
    section.innerHTML = `<div class="tweets-tabs">
        ${hasTop ? `<button class="tweet-tab active" data-tab="top">top posts</button>` : ""}
        ${hasLatest ? `<button class="tweet-tab${hasTop ? "" : " active"}" data-tab="latest">latest</button>` : ""}
      </div>
      <div class="tweets-list"></div>`;
    container.appendChild(section);

    const listEl = section.querySelector(".tweets-list");
    const renderTab = (tab) => {
      listEl.innerHTML = "";
      const tweets = tab === "latest" ? data.latest : data.top;
      for (const tw of tweets) {
        try {
          listEl.appendChild(buildTweet(tw));
        } catch (e) {
          console.warn("[home] story tweet", e);
        }
      }
    };
    renderTab(hasTop ? "top" : "latest");

    for (const tab of section.querySelectorAll(".tweet-tab")) {
      tab.addEventListener("click", () => {
        section.querySelectorAll(".tweet-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderTab(tab.dataset.tab);
      });
    }
  } else {
    const empty = document.createElement("div");
    empty.className = "story-empty";
    empty.innerHTML = `posts for this story aren't in the index yet.<br />
      <button>search "${esc((story.title || "").slice(0, 36))}${(story.title || "").length > 36 ? "…" : ""}"</button>`;
    empty.querySelector("button").addEventListener("click", () => {
      document.querySelector(".searchbar").value = story.title;
      showFeedView();
      window.__tcatQuery?.(story.title);
    });
    container.appendChild(empty);
  }
}

function showFeedView() {
  document.body.classList.remove("story-view");
  currentStoryId = null;
  storyPageEl.innerHTML = "";
}

async function showStory(preview, push = true) {
  currentStoryId = String(preview.id);
  document.body.classList.add("story-view");
  if (push) history.pushState({ story: currentStoryId }, "", `?story=${currentStoryId}`);
  document.querySelector(".center-wrapper")?.scrollTo({ top: 0 });

  storyPageEl.innerHTML = `
    <div class="story-page-inner">
      <button class="story-back">${BACK_SVG}<span>back</span></button>
      <div class="sp-head">${preview.title ? storyHeadHtml(preview) : ""}</div>
      <div class="story-detail"><div class="story-spinner">${SPINNER_SVG}</div></div>
    </div>`;
  storyPageEl.querySelector(".story-back").addEventListener("click", () => history.back());

  try {
    const res = await fetch(`${API_URL}/home/story/${preview.id}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    if (currentStoryId !== String(preview.id)) return;
    if (!preview.title && data.story) {
      storyPageEl.querySelector(".sp-head").innerHTML = storyHeadHtml(data.story);
    }
    renderStoryDetail(data, preview.title ? preview : data.story || preview, storyPageEl.querySelector(".story-detail"));
  } catch (e) {
    console.warn("[home] story error", e);
    const d = storyPageEl.querySelector(".story-detail");
    if (d) d.innerHTML = `<div class="story-empty">couldn't load this story.</div>`;
  }
}

function syncRoute() {
  const sid = new URLSearchParams(location.search).get("story");
  if (sid) {
    if (sid !== currentStoryId) showStory({ id: sid }, false);
  } else {
    showFeedView();
  }
}

window.addEventListener("popstate", syncRoute);
document.querySelector(".logo")?.addEventListener("click", showFeedView);

/* ---- live counts in the status bar ---- */
async function initStatus() {
  const tEl = document.querySelector('.hs-num[data-count="tweets"]');
  const aEl = document.querySelector('.hs-num[data-count="accounts"]');
  if (!tEl || !aEl) return;
  try {
    const arr = await (await fetch(`${API_URL}/stats`)).json();
    let accounts = Number(arr[0] || 0);
    let tweets = Number(arr[1] || 0);
    const paint = () => {
      tEl.textContent = Math.floor(tweets).toLocaleString();
      aEl.textContent = Math.floor(accounts).toLocaleString();
    };
    paint();
    document.getElementById("home-status")?.classList.add("ready");

    // update once per second; add that second's worth (~500k tweets/hr,
    // ~50k accounts/hr) with light jitter and a fractional carry so the
    // long-run average stays exact.
    const TWEETS_PER_SEC = 500_000 / 3600;
    const ACCOUNTS_PER_SEC = 50_000 / 3600;
    let tCarry = 0;
    let aCarry = 0;
    setInterval(() => {
      tCarry += TWEETS_PER_SEC * (0.85 + Math.random() * 0.3);
      aCarry += ACCOUNTS_PER_SEC * (0.85 + Math.random() * 0.3);
      const ti = Math.floor(tCarry);
      const ai = Math.floor(aCarry);
      tCarry -= ti;
      aCarry -= ai;
      tweets += ti;
      accounts += ai;
      paint();
    }, 1000);
  } catch (e) {
    console.warn("[home] stats", e);
  }
}

const sentinel = document.createElement("div");
feedEl.after(sentinel);
new IntersectionObserver(
  (entries) => {
    if (
      entries[0].isIntersecting &&
      !document.querySelector(".results") &&
      !document.body.classList.contains("story-view")
    )
      fetchFeed();
  },
  { rootMargin: "700px" },
).observe(sentinel);

buildControls();
reload();
initStatus();
if (new URLSearchParams(location.search).get("story")) syncRoute();
