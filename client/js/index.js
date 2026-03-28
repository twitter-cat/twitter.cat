import { API_URL } from "./config.js";
import {
  ensureSession,
  getSessionToken,
  incrementSearchCount,
  invalidateSession,
  startSessionCreation,
} from "./session.js";

startSessionCreation(API_URL);

const buttons = {
  tweets: {
    toggled: false,
  },
  accounts: {
    toggled: false,
  },
  media: {
    toggled: false,
  },
  lists: {
    toggled: false,
  },
  ads: {
    color: "#ff7a00",
    toggled: false,
  },
};

const buttonElements = document.querySelectorAll(".toggle");

let searchQuery;
let currentCursor = null;
let isLoading = false;
let hasMore = true;
let currentFilterString = "";
let currentSearchType = "tweets";
let currentSort = "relevance";
let lastRequestMeta = null;
const renderedMediaUrls = new Set();
let activeObserver = null;

const filtersPanel = document.querySelector("#filters-panel");
const filterToggle = document.querySelector("#filter-toggle");
const sortToggle = document.querySelector("#sort-toggle");
const sortMenu = document.querySelector("#sort-menu");

const FILTER_FIELDS = {
  tweets: [
    { value: "like_count", label: "likes" },
    { value: "reply_count", label: "replies" },
    { value: "retweet_count", label: "retweets" },
    { value: "views_count", label: "views" },
    { value: "bookmarks_count", label: "bookmarks" },
    { value: "has_media", label: "has media", boolOnly: true },
    { value: "lang", label: "lang", textOnly: true },
    { value: "author_id", label: "author id", textOnly: true },
  ],
  accounts: [
    { value: "followers", label: "followers" },
    { value: "following", label: "following" },
    { value: "likes", label: "likes" },
    { value: "tweets", label: "tweets" },
    { value: "listed_count", label: "listed" },
    { value: "verified", label: "verified", boolOnly: true },
  ],
};
FILTER_FIELDS.media = FILTER_FIELDS.tweets;

// --- Tab indicator ---
const tabIndicator = document.createElement("div");
tabIndicator.className = "tab-indicator";
document.querySelector(".buttons").appendChild(tabIndicator);

const updateTabIndicator = () => {
  const activeTab = document.querySelector(".toggle.pressed");
  if (!activeTab) {
    tabIndicator.style.opacity = "0";
    return;
  }
  const buttonsRect = document.querySelector(".buttons").getBoundingClientRect();
  const tabRect = activeTab.getBoundingClientRect();
  tabIndicator.style.opacity = "1";
  tabIndicator.style.width = `${tabRect.width}px`;
  tabIndicator.style.transform = `translateX(${tabRect.left - buttonsRect.left}px)`;
  tabIndicator.style.backgroundColor = getComputedStyle(activeTab).color;
};

const renderedProfileIds = new Set();

const updateUrlParams = () => {
  if (!searchQuery) return;

  const params = new URLSearchParams();
  params.set("q", searchQuery);
  params.set("type", currentSearchType);

  if (currentFilterString.trim()) {
    params.set("filter", currentFilterString.trim());
  }

  if (currentSort !== "relevance") {
    params.set("sort", currentSort);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.replaceState({}, "", newUrl);
};

const restoreFromUrlParams = () => {
  const params = new URLSearchParams(window.location.search);

  const type = params.get("type");
  if (type && ["accounts", "tweets", "media", "lists", "ads"].includes(type)) {
    currentSearchType = type;

    const btn = document.querySelector(`.toggle[data-toggle="${type}"]`);
    if (btn && !btn.classList.contains("pressed")) {
      btn.click();
    }
  }

  const filterParam = params.get("filter");
  if (filterParam) {
    currentFilterString = filterParam;
    updateFilterIndicator();
  }

  const sortParam = params.get("sort");
  if (sortParam && ["relevance", "likes", "newest", "oldest"].includes(sortParam)) {
    currentSort = sortParam;
    updateSortUI();
  }
};

const formatDate = (dateStr) => {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = now.getFullYear() - date.getFullYear();

  if (seconds === -1) return "now";
  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  if (weeks < 4) return `${weeks}w`;

  if (years === 0) {
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  } else {
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
};

const createMediaElement = (obj, tweetId) => {
  const isThumbnail = obj.url.includes("video_thumb");

  const videoThumb = document.createElement("div");
  videoThumb.className = "quoted-video-thumb";

  videoThumb.innerHTML = `<svg viewBox="0 0 24 24" width="32" height="32"><g><path d="M21 12L4 2v20z" fill="white"></path></g></svg>`;

  if (obj.width && obj.height) {
    videoThumb.style.aspectRatio = `${Number(obj.width)}/${Number(obj.height)}`;
  }

  videoThumb.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!document.querySelector(".twitter-platform-widget-script")) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.classList.add("twitter-platform-widget-script");
      document.body.appendChild(script);
    }

    const tweetWrapper = document.createElement("div");
    tweetWrapper.style.position = "absolute";
    tweetWrapper.style.top = "0px";
    tweetWrapper.style.left = "0px";
    tweetWrapper.style.width = "100%";
    tweetWrapper.style.height = "100%";
    tweetWrapper.style.zIndex = "1000";
    tweetWrapper.style.display = "flex";
    tweetWrapper.style.alignItems = "center";
    tweetWrapper.style.justifyContent = "center";
    tweetWrapper.style.backgroundColor = "rgba(0, 0, 0, .6)";
    tweetWrapper.style.cursor = "pointer";
    document.body.appendChild(tweetWrapper);

    tweetWrapper.addEventListener("click", (e) => {
      if (e.target === tweetWrapper) {
        tweetWrapper.remove();
      }
    });

    const tweet = document.createElement("blockquote");
    tweet.classList.add("twitter-tweet");
    tweet.setAttribute("data-dnt", "true");
    tweet.setAttribute("data-media-max-width", "560");
    tweet.setAttribute("data-theme", "dark");

    tweet.innerHTML = `<a href="https://twitter.com/i/status/${tweetId}?ref_src=twsrc%5Etfw"></a>`;

    tweetWrapper.appendChild(tweet);
  });

  if (isThumbnail) {
    const thumbnailEl = document.createElement("img");
    thumbnailEl.src = obj.url;
    thumbnailEl.loading = "lazy";
    thumbnailEl.alt = "Video thumbnail";
    thumbnailEl.className = "preview";
    videoThumb.appendChild(thumbnailEl);
  } else {
    const videoEl = document.createElement("video");
    videoEl.src = obj.url;
    videoEl.controls = false;
    videoEl.autoplay = true;
    videoEl.muted = true;
    videoEl.loading = "lazy";
    videoEl.className = "preview";
    videoThumb.appendChild(videoEl);
  }

  return videoThumb;
};

let filterDebounceTimer = null;
let filterEditor = null;

async function ensureFilterEditor() {
  if (filterEditor) return filterEditor;
  const { createFilterEditor } = await import("./filter-editor.js");
  filterEditor = createFilterEditor(document.getElementById("filter-editor"), {
    onChange(value) {
      currentFilterString = value;
      updateFilterIndicator();
      updateUrlParams();
      triggerFilterSearch();
    },
    onSubmit() {
      if (searchQuery) query(searchQuery);
    },
    fields: FILTER_FIELDS,
    getSearchType() {
      return currentSearchType;
    },
  });
  if (currentFilterString) {
    filterEditor.setValue(currentFilterString);
  }
  return filterEditor;
}

setTimeout(() => import("./filter-editor.js"), 5_000);

const triggerFilterSearch = () => {
  if (searchQuery) {
    clearTimeout(filterDebounceTimer);
    filterDebounceTimer = setTimeout(() => {
      query(searchQuery);
    }, 500);
  }
};

filterToggle.addEventListener("click", async () => {
  const isExpanded = filtersPanel.classList.contains("expanded");

  if (isExpanded) {
    filtersPanel.classList.remove("expanded");
    filterToggle.classList.remove("pressed");
  } else {
    filtersPanel.classList.add("expanded");
    filterToggle.classList.add("pressed");
    const editor = await ensureFilterEditor();
    editor.focus();
  }
});

function updateSortUI() {
  const label = sortToggle?.querySelector(".sort-label");
  if (label) {
    label.textContent = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
  }

  document.querySelectorAll(".sort-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.sort === currentSort);
  });
}

sortToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  sortToggle.classList.toggle("active");
  sortMenu?.classList.toggle("open");
});

document.querySelectorAll(".sort-option").forEach((option) => {
  option.addEventListener("click", () => {
    const newSort = option.dataset.sort;
    if (newSort !== currentSort) {
      currentSort = newSort;
      updateSortUI();
      updateUrlParams();

      if (searchQuery) {
        query(searchQuery);
      }
    }

    sortToggle?.classList.remove("active");
    sortMenu?.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".sort-dropdown")) {
    sortToggle?.classList.remove("active");
    sortMenu?.classList.remove("open");
  }
});

function updateFilterIndicator() {
  const hasFilters = currentFilterString.trim().length > 0;
  filterToggle?.classList.toggle("has-filters", hasFilters);
}

const formatNumber = (num) => {
  if (!num || num < 0) return "";

  if (num < 1000) return String(num);
  if (num < 10_000) return num.toLocaleString();
  if (num < 100_000) return `${Math.floor(num / 100) / 10}k`;
  if (num < 1_000_000) return `${Math.floor(num / 1000)}k`;
  if (num < 10_000_000) return `${Math.floor(num / 100_000) / 10}M`;
  if (num < 100_000_000) return `${Math.floor(num / 1_000_000)}M`;
  return `${Math.floor(num / 1_000_000_000)}B`;
};
const linkifyTweetBody = (text) => {
  // #vibecoded
  if (!text) return "";
  // biome-ignore lint/suspicious/noControlCharactersInRegex: idgaf
  const stripMarkers = (s) => s.replace(/\x00\d+\x00/g, "");

  const emTags = [];
  text = text.replace(/<\/?em>/gi, (tag) => {
    emTags.push(tag);
    return `\x00${emTags.length - 1}\x00`;
  });

  text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  text = text.replace(/\s*https:\/\/t\.co\/\S+$/i, "");

  const urls = [];
  text = text.replace(/https?:\/\/\S+/g, (url) => {
    urls.push(url);
    return `\x01${urls.length - 1}\x01`;
  });

  const word = "(?:\\w|\\x00\\d+\\x00)+";

  text = text.replace(
    new RegExp(`@(${word})`, "g"),
    (_, name) => `<a class="tweet-mention" href="https://x.com/${stripMarkers(name)}">@${name}</a>`,
  );

  text = text.replace(
    new RegExp(`#(${word})`, "g"),
    (_, tag) => `<a href="https://x.com/hashtag/${stripMarkers(tag)}">#${tag}</a>`,
  );

  text = text.replace(
    // biome-ignore lint/suspicious/noControlCharactersInRegex: idgaf
    /\x01(\d+)\x01/g,
    (_, i) => `<a href="${stripMarkers(urls[i])}">${urls[i]}</a>`,
  );

  // biome-ignore lint/suspicious/noControlCharactersInRegex: idgaf
  text = text.replace(/\x00(\d+)\x00/g, (_, i) => emTags[i]);

  return text;
};

const createTweetEl = (result) => {
  const el = document.createElement("a");
  el.className = "result tweet";
  el.href = `https://x.com/i/status/${result.id}`;
  el.target = "_blank";
  el.rel = "noopener";
  el.draggable = false;

  const contextMenu = document.createElement("button");
  contextMenu.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>`;
  contextMenu.className = "context-menu";
  contextMenu.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.querySelectorAll(".context-popup").forEach((e) => {
      e.remove();
    });

    const popup = document.createElement("div");
    popup.className = "context-popup";
    popup.style.top = `${e.currentTarget.getBoundingClientRect().bottom + 4}px`;
    popup.style.left = `${e.currentTarget.getBoundingClientRect().left - 100 + e.currentTarget.offsetWidth}px`;
    popup.innerHTML = `<button data-action="copy-link"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg> copy link</button><button data-action="copy-permalink"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg> <span>copy permalink</span></button><button data-action="share"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg> share</button>`;
    document.body.appendChild(popup);

    popup.querySelectorAll("button").forEach((e) => {
      e.addEventListener("click", async (evt) => {
        const action = evt.currentTarget.dataset.action;

        if (action === "copy-link") {
          navigator.clipboard.writeText(`https://x.com/i/status/${result.id}`);
        } else if (action === "copy-permalink") {
          e.style.opacity = ".4";
          e.querySelector("span").innerText = "copying…";

          const { jwt } = await (
            await fetch(`${API_URL}/permalink/sign?id=${result.id}`, {
              method: "POST",
              headers: {
                "X-Client": "WebPermalinks",
              },
            })
          ).json();

          const permalink = `${location.origin}/?pt=${jwt}`;
          navigator.clipboard.writeText(permalink);

          e.style.opacity = "1";
          e.querySelector("span").innerText = "copied!";

          setTimeout(() => {
            e.querySelector("span").innerText = "copy permalink";
          }, 1800);
          return;
        } else if (action === "share") {
          navigator.share({
            url: el.href,
          });
        }

        document.body.click();
      });
    });

    document.body.addEventListener("click", (e) => {
      if (!e.target.closest(".context-popup") && e.target !== contextMenu) {
        popup.classList.remove("open");

        setTimeout(() => {
          popup.remove();
        }, 300);
      }
    });

    setTimeout(() => {
      popup.classList.add("open");
    }, 20);
  });
  contextMenu.setAttribute("aria-label", "Options");
  el.appendChild(contextMenu);

  const authorSection = document.createElement("div");
  authorSection.className = "tweet-author";

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.loading = "lazy";
  avatar.width = 40;
  avatar.height = 40;

  const avatarUrl = result.author_avatar?.replaceAll?.(";", "_bigger.");
  if (avatarUrl && !avatarUrl.startsWith("javascript:") && !avatarUrl.startsWith("data:")) {
    avatar.src = avatarUrl.replace("_normal", "_bigger");
  } else {
    avatar.src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
  }

  avatar.onerror = async function () {
    this.onerror = async () => {
      this.onerror = null;
      this.src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
    };

    const safeUsername = result.author_username?.replace?.(/[^a-zA-Z0-9_]/g, "");
    if (safeUsername) {
      const token = getSessionToken();
      this.src = `${API_URL}/${safeUsername}/avfetch.jpg${token ? `?session=${encodeURIComponent(token)}` : ""}`;
    } else {
      this.src = "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
    }
  };

  if (result.author_square_avatar) {
    avatar.style.borderRadius = "2px";
  }

  const authorInfo = document.createElement("div");
  authorInfo.className = "author-info";

  const nameDiv = document.createElement("div");
  nameDiv.className = "name";
  nameDiv.textContent = result.author_name || result.author_username;

  if (result.author_verified || result.author_square_avatar) {
    const verifiedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    verifiedSvg.setAttribute("viewBox", "0 0 22 22");
    verifiedSvg.setAttribute("aria-label", "Verified account");
    verifiedSvg.setAttribute("role", "img");
    verifiedSvg.setAttribute("width", "18px");
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z",
    );
    path.setAttribute("fill", "#1da1f2");
    g.appendChild(path);
    verifiedSvg.appendChild(g);
    nameDiv.appendChild(verifiedSvg);

    if (result.author_square_avatar) {
      verifiedSvg.innerHTML = `<g><linearGradient gradientUnits="userSpaceOnUse" id="1-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="1-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g>`;
    }
  }

  if (result.author_protected) {
    const protectedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    protectedSvg.setAttribute("viewBox", "0 0 22 22");
    protectedSvg.setAttribute("aria-label", "Protected account");
    protectedSvg.setAttribute("role", "img");
    protectedSvg.setAttribute("width", "18px");
    protectedSvg.innerHTML = `<g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g>`;
    protectedSvg.querySelector("path").setAttribute("fill", "white");
    nameDiv.appendChild(protectedSvg);
  }

  const usernameDiv = document.createElement("div");
  usernameDiv.className = "username";
  usernameDiv.innerHTML = `@${result.author_username?.replaceAll ? result.author_username.replaceAll("<", "").replaceAll(">", "") : result.author} · <time>${formatDate(
    result.created_at,
  )}</time>`;

  usernameDiv.querySelector("time").addEventListener("mouseenter", () => {
    const timeCard = document.createElement("div");
    timeCard.className = "time-card";
    timeCard.style.position = "absolute";
    timeCard.style.top = `${usernameDiv.querySelector("time").getBoundingClientRect().top + 8}px`;

    timeCard.style.left = `${usernameDiv.querySelector("time").getBoundingClientRect().left}px`;
    timeCard.style.transform = "translateY(calc(-100% - 18px))";
    timeCard.style.zIndex = "1000";
    timeCard.innerHTML = `
    <small>tweeted</small>
    <p>${new Date(result.created_at).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })}</p>
    <small>indexed</small>
    <p>${new Date(result.added_at).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })}</p>
    `;

    document.body.appendChild(timeCard);
  });

  usernameDiv.querySelector("time").addEventListener("mouseleave", () => {
    if (document.body.querySelector(".time-card"))
      document.body.querySelector(".time-card").remove();
  });

  authorInfo.appendChild(nameDiv);
  authorInfo.appendChild(usernameDiv);

  authorSection.appendChild(avatar);
  authorSection.appendChild(authorInfo);

  const bodyDiv = document.createElement("div");
  bodyDiv.className = "tweet-body";
  bodyDiv.innerHTML = linkifyTweetBody(result.body);

  if (result.reply_to_status_id) {
    bodyDiv.querySelector("a.tweet-mention")?.remove();
    bodyDiv.innerHTML = bodyDiv.innerHTML.trim();

    const startMention = result.body.split(" ")[0].replace("<em>", "").replace("</em>", "");

    const replyToDiv = document.createElement("div");
    replyToDiv.className = "reply-to";
    replyToDiv.innerHTML = `Replying to <a target="_blank" class="mention-container"></a>`;

    replyToDiv.querySelector(".mention-container").innerText = startMention
      .replace("<em>", "")
      .replace("</em>", "");
    replyToDiv.querySelector(".mention-container").href = `https://x.com/${startMention.slice(1)}`;
    bodyDiv.prepend(replyToDiv);
  }

  bodyDiv.querySelectorAll("a.tweet-link").forEach(async (el) => {
    const url = el.getAttribute("href");

    if (url?.startsWith("https://t.co/")) {
      el.style.opacity = ".5";

      try {
        const html = await (await fetch(url)).text();
        const s = String(html).replace(/\\\//g, "/");
        const m = s.match(/https?:\/\/[^\s"'<>]+/);
        const finalUrl = m ? m[0] : null;

        if (finalUrl) {
          el.setAttribute("href", finalUrl);
          el.textContent = finalUrl;
        }
      } catch {
      } finally {
        el.style.opacity = "1";
      }
    }
  });

  bodyDiv.querySelectorAll(".tweet-hashtag").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.querySelector(".searchbar").value = el.textContent;
      query(el.textContent);
    });
  });

  let mediaSection = null;
  if (result.media && Array.isArray(result.media) && result.media.length > 0) {
    el.classList.add("has-media");
    mediaSection = document.createElement("div");
    mediaSection.className = "tweet-media";

    const mediaToDisplay = result.media.slice(0, 2);
    const isMultiple = mediaToDisplay.length > 1;

    if (isMultiple) {
      mediaSection.classList.add("tweet-media-grid");
    }

    mediaToDisplay.forEach((media, mediaIndex) => {
      if (media.type === "photo" || media.type === "gif") {
        const img = document.createElement("img");
        let imgUrl;
        if (media.url.startsWith(`{"display_url":`)) {
          const parsed = JSON.parse(media.url);
          imgUrl = parsed.media_url_https;
        } else {
          imgUrl = media.url;
        }

        if (imgUrl && (imgUrl.startsWith("https://") || imgUrl.startsWith("http://"))) {
          img.src = imgUrl;
        } else {
          return;
        }

        img.loading = "lazy";
        img.alt = "Tweet image";
        mediaSection.appendChild(img);
      } else if (media.type === "video" && mediaIndex === 0) {
        mediaSection.appendChild(createMediaElement(media, result.id));
      }
    });

    if (result.media.length > 2) {
      const badge = document.createElement("div");
      badge.className = "media-count-badge";
      badge.textContent = `+${result.media.length - 2}`;
      mediaSection.appendChild(badge);
    }
  }

  el.appendChild(authorSection);
  el.appendChild(bodyDiv);
  if (mediaSection) el.appendChild(mediaSection);

  if (result.quoting_id) {
    const quotingDiv = document.createElement("div");
    quotingDiv.className = "quoting-tweet";
    quotingDiv.innerHTML = '<div class="quoted-loading">Loading quoted tweet...</div>';
    el.appendChild(quotingDiv);

    (async () => {
      try {
        const response = await fetch(`${API_URL}/proxy?id=${result.quoting_id}&q=quoted`, {
          headers: { "Authorization": `Bearer ${getSessionToken()}` },
        });
        const data = await response.json();

        if (data.error || !data.tweet) {
          quotingDiv.innerHTML = '<div class="quoted-error">Quoted tweet unavailable</div>';
          return;
        }

        const quotedTweet = data.tweet;
        quotingDiv.innerHTML = "";
        quotingDiv.classList.add("quoted-tweet-loaded");

        const quotedHeader = document.createElement("div");
        quotedHeader.className = "quoted-header";

        const quotedAvatar = document.createElement("img");
        quotedAvatar.className = "quoted-avatar";
        quotedAvatar.width = 20;
        quotedAvatar.height = 20;

        const avatarUrl = quotedTweet.author_avatar?.replaceAll(";", "_bigger.");
        if (avatarUrl && !avatarUrl.startsWith("javascript:") && !avatarUrl.startsWith("data:")) {
          quotedAvatar.src = avatarUrl;
        } else {
          quotedAvatar.src =
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
        }

        if (quotedTweet.author_square_avatar) {
          quotedAvatar.style.borderRadius = "2px";
        }

        const quotedAuthorInfo = document.createElement("div");
        quotedAuthorInfo.className = "quoted-author-info";

        const quotedName = document.createElement("span");
        quotedName.className = "quoted-name";
        quotedName.textContent = quotedTweet.author_name || quotedTweet.author_username;

        if (quotedTweet.author_verified || quotedTweet.author_square_avatar) {
          const verifiedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          verifiedSvg.setAttribute("viewBox", "0 0 22 22");
          verifiedSvg.setAttribute("width", "16px");
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute(
            "d",
            "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z",
          );
          path.setAttribute("fill", "#1da1f2");
          verifiedSvg.appendChild(path);
          quotedName.appendChild(verifiedSvg);

          if (quotedTweet.author_square_avatar) {
            verifiedSvg.innerHTML = `<g><linearGradient gradientUnits="userSpaceOnUse" id="q-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="q-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#q-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#q-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g>`;
          }
        }

        const quotedUsername = document.createElement("span");
        quotedUsername.className = "quoted-username";
        quotedUsername.textContent = `@${quotedTweet.author_username}`;

        quotedAuthorInfo.appendChild(quotedName);
        quotedAuthorInfo.appendChild(document.createTextNode(" "));
        quotedAuthorInfo.appendChild(quotedUsername);

        quotedHeader.appendChild(quotedAvatar);
        quotedHeader.appendChild(quotedAuthorInfo);

        const quotedBody = document.createElement("div");
        quotedBody.className = "quoted-body";
        quotedBody.innerHTML = linkifyTweetBody(quotedTweet.body);

        quotingDiv.appendChild(quotedHeader);
        quotingDiv.appendChild(quotedBody);

        if (quotedTweet.media && quotedTweet.media.length > 0) {
          const quotedMedia = document.createElement("div");
          quotedMedia.className = "quoted-media";

          const firstMedia = quotedTweet.media[0];
          if (firstMedia.type === "photo" || firstMedia.type === "gif") {
            const img = document.createElement("img");
            const imgUrl = firstMedia.url;

            if (imgUrl && (imgUrl.startsWith("https://") || imgUrl.startsWith("http://"))) {
              img.src = imgUrl;
              img.loading = "lazy";
              img.alt = "Quoted tweet image";
              quotedMedia.appendChild(img);
              quotingDiv.appendChild(quotedMedia);

              img.addEventListener("error", () => {
                img.remove();
              });
            }
          } else if (firstMedia.type === "video") {
            quotedMedia.appendChild(createMediaElement(firstMedia, quotedTweet.id));
            quotingDiv.appendChild(quotedMedia);
          }
        }
      } catch (error) {
        console.error("Failed to load quoted tweet:", error);
        quotingDiv.innerHTML = '<div class="quoted-error">Failed to load quoted tweet</div>';
      }
    })();
  }

  const stats = document.createElement("div");
  stats.className = "tweet-stats";
  stats.innerHTML = `
    <div class="stat">
      <svg viewBox="0 0 24 24" width="16" height="16"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
      <span>${formatNumber(result.reply_count)}</span>
    </div>
    <div class="stat" title="${formatNumber(
      result.retweet_count,
    )} retweets, ${formatNumber(result.quote_count)} quotes">
      <svg viewBox="0 0 24 24" width="16" height="16"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
      <span>${formatNumber(result.retweet_count + result.quote_count)}</span>
    </div>
    <div class="stat">
      <svg viewBox="0 0 24 24" width="16" height="16"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
      <span>${formatNumber(result.like_count)}</span>
    </div>
    <div class="stat">
      <svg viewBox="0 0 24 24" width="16" height="16"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
      <span>${formatNumber(result.views_count)}</span>
    </div>
    <div class="stat">
      <svg viewBox="0 0 24 24" width="16" height="16"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
      <span>${formatNumber(result.bookmarks_count)}</span>
    </div>
  `;

  el.appendChild(stats);

  return el;
};

const query = async (text, loadMore = false) => {
  if (isLoading) return;

  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = null;
  }

  if (!loadMore) {
    document.querySelector(".results")?.remove();
    document.querySelector(".results-meta")?.remove();
    currentCursor = null;
    hasMore = true;
    renderedMediaUrls.clear();
    renderedProfileIds.clear();
  }

  if (!text) return;

  isLoading = true;

  if (!loadMore) {
    document.querySelector(".searchbar").blur();
    searchQuery = text;
    updateUrlParams();
  }

  let resultsEl = document.querySelector(".results");
  if (!resultsEl) {
    resultsEl = document.createElement("div");
    resultsEl.className = "results";
    if (currentSearchType === "media") {
      resultsEl.classList.add("media-gallery");
    }
    document.querySelector(".center").appendChild(resultsEl);
    requestAnimationFrame(updateTabIndicator);
  } else {
    if (currentSearchType === "media") {
      resultsEl.classList.add("media-gallery");
    } else {
      resultsEl.classList.remove("media-gallery");
    }
  }

  if (!loadMore) {
    document.querySelector(".results-meta")?.remove();
  }

  const createSkeletons = (count = 5) => {
    const skeletons = [];

    const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    if (currentSearchType === "media") {
      for (let i = 0; i < count; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "media-item skeleton";
        skeletons.push(skeleton);
      }
    } else if (currentSearchType === "tweets") {
      for (let i = 0; i < count; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "result tweet skeleton";
        skeleton.innerHTML = `
          <div class="tweet-author">
            <div class="avatar skeleton-box"></div>
            <div class="author-info">
               <div class="skeleton-text skeleton-name" style="width:${randomIntBetween(40, 200)}px"></div>
              <div class="skeleton-text skeleton-username" style="width:${randomIntBetween(130, 200)}px"></div>
            </div>
          </div>
          <div class="tweet-body">
            ${`<div class="skeleton-text skeleton-line"></div>`.repeat(randomIntBetween(0, 3))}
            <div class="skeleton-text skeleton-line-short" style="width:${randomIntBetween(50, 80)}%"></div>
          </div>
          <div class="tweet-stats">
            <div class="skeleton-text skeleton-stat"></div>
            <div class="skeleton-text skeleton-stat"></div>
            <div class="skeleton-text skeleton-stat"></div>
            <div class="skeleton-text skeleton-stat"></div>
            <div class="skeleton-text skeleton-stat"></div>
          </div>
        `;
        skeletons.push(skeleton);
      }
    } else {
      for (let i = 0; i < count; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "result account skeleton";
        skeleton.innerHTML = `
          <div class="avatar skeleton-box"></div>
          <div class="info">
            <div class="skeleton-text skeleton-name" style="width:${randomIntBetween(100, 200)}px"></div>
            <div class="skeleton-text skeleton-username" style="width:${randomIntBetween(130, 240)}px"></div>
            ${`<div class="skeleton-text skeleton-bio-line"></div>`.repeat(randomIntBetween(0, 2))}
            <div class="skeleton-text skeleton-bio-line-short"></div>
            <div class="stats">
              <div class="skeleton-text skeleton-stat"></div>
              <div class="skeleton-text skeleton-stat"></div>
              <div class="skeleton-text skeleton-stat"></div>
            </div>
          </div>
        `;
        skeletons.push(skeleton);
      }
    }

    return skeletons;
  };

  let skeletonMeta, skeletonMetaI;

  if (loadMore) {
    const existingLoadMore = document.querySelector(".load-more");
    if (existingLoadMore) existingLoadMore.remove();

    const skeletonCount = currentSearchType === "media" ? 6 : 3;
    createSkeletons(skeletonCount).forEach((e) => {
      resultsEl.appendChild(e);
    });
  } else {
    resultsEl.innerHTML = "";
    const skeletonCount = currentSearchType === "media" ? 12 : 8;
    createSkeletons(skeletonCount).forEach((e) => {
      resultsEl.appendChild(e);
    });
    
    resultsEl.querySelector(".results-meta")?.remove?.();

    const start = performance.now();

    skeletonMeta = document.createElement("div");
    skeletonMeta.className = "results-meta";
    skeletonMeta.innerHTML = `<span class="searching">Searching index…</span> <span class="wallTime">— 0.00s</span>`;

    resultsEl.parentNode.insertBefore(skeletonMeta, resultsEl);

    skeletonMetaI = setInterval(() => {
      const elapsed = (performance.now() - start) / 1000;

      skeletonMeta.querySelector(".wallTime").innerText = `— ${elapsed.toFixed(2)}s`;
    }, 100);
  }

  let sessionToken = await ensureSession(API_URL);

  async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }

  const nonce = await sha256(crypto.randomUUID());

  const pots = [
    nonce,
    await sha256(
      `${sessionToken}${currentCursor}${currentFilterString}${currentSort}${text}${nonce}${navigator.userAgent}`,
    ),
  ];
  pots.push(await sha256(JSON.stringify(pots)));

  try {
    let _results = await (
      await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          q: text,
          type: Object.entries(buttons).find(([_, b]) => b.toggled)?.[0] || "accounts",
          cursor: currentCursor,
          filter: currentFilterString || null,
          sort: currentSort,
          pots,
        }),
      })
    ).json();

    clearInterval(skeletonMetaI);
    skeletonMeta.remove();

    if (_results.error === "session_exhausted") {
      skeletonMeta.style.display = "none";
      const metaEl = document.createElement("div");
      metaEl.className = "results-meta";
      metaEl.innerHTML = `<span class="searching">Making sure you're human…</span>`;

      resultsEl.parentNode.insertBefore(metaEl, resultsEl);
      
      invalidateSession();
      sessionToken = await ensureSession(API_URL);
      skeletonMeta.style.display = "block";
      metaEl.remove();
      _results = await (
        await fetch(`${API_URL}/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionToken}`,
          },
          body: JSON.stringify({
            q: text,
            type: Object.entries(buttons).find(([_, b]) => b.toggled)?.[0] || "accounts",
            cursor: currentCursor,
            filter: currentFilterString || null,
            sort: currentSort,
            pots,
          }),
        })
      ).json();
    }

    if (_results.error) throw new Error(_results.error);

    incrementSearchCount();

    if (!loadMore) {
      lastRequestMeta = {
        count: _results.hits || _results.rows?.length || 0,
        time: _results.ms,
        uid: _results.req,
      };
    }

    const results = _results.rows.map((row) =>
      Object.fromEntries(row.map((val, i) => [_results.map.split(",")[i], val])),
    );

    document.querySelectorAll(".skeleton").forEach((e) => {
      e.remove();
    });

    if (!loadMore && results.length === 0) {
      const metaEl = document.createElement("div");
      metaEl.className = "results-meta";
      metaEl.innerHTML = `No results found <span class="wallTime">— ${(lastRequestMeta.time / 1000).toFixed(2)}s</span>`;

      resultsEl.parentNode.insertBefore(metaEl, resultsEl);
      
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="/assets/svgs/woozy.svg">
    <p>no results found</p>
    <small>try different keywords or check your spelling. some accounts may also not be indexed yet.</small></div>`;
      isLoading = false;
      return;
    }

    if (!loadMore && lastRequestMeta) {
      const metaEl = document.createElement("div");
      metaEl.className = "results-meta";
      metaEl.innerHTML = `Found <span>${lastRequestMeta.count.toLocaleString()}</span> results <span class="wallTime">— ${(lastRequestMeta.time / 1000).toFixed(2)}s</span>`;

      resultsEl.parentNode.insertBefore(metaEl, resultsEl);
    }

    hasMore = !!_results.cursor || false;
    currentCursor = _results.cursor || null;

    let mediaItemsRendered = 0;
    const hadMediaItemsBefore = resultsEl.querySelectorAll(".media-item:not(.skeleton)").length > 0;

    results.forEach((result) => {
      if (currentSearchType === "tweets") {
        resultsEl.appendChild(createTweetEl(result));
      } else if (currentSearchType === "media") {
        if (result.media && Array.isArray(result.media) && result.media.length > 0) {
          result.media.forEach((media) => {
            if (media.type === "photo" || media.type === "gif" || media.type === "animated_gif") {
              const mediaItem = document.createElement("a");
              mediaItem.className = "media-item";
              mediaItem.draggable = false;

              const username = result.author_username || result.username;
              mediaItem.href = `https://x.com/${username}/status/${result.id}`;
              mediaItem.target = "_blank";
              mediaItem.rel = "noopener";

              const img = document.createElement("img");
              let imgUrl;

              try {
                if (typeof media.url === "string" && media.url.startsWith("{")) {
                  const parsed = JSON.parse(media.url);
                  imgUrl = parsed.media_url_https || parsed.url;
                } else {
                  imgUrl = media.url || media.media_url_https;
                }
              } catch {
                imgUrl = media.url || media.media_url_https;
              }

              // Skip invalid URLs (including literal "null" strings)
              if (
                imgUrl &&
                typeof imgUrl === "string" &&
                imgUrl !== "null" &&
                (imgUrl.startsWith("https://") || imgUrl.startsWith("http://"))
              ) {
                // Skip duplicate images using tweet ID + media URL as key
                const mediaKey = `${result.id}:${imgUrl}`;
                if (renderedMediaUrls.has(mediaKey)) {
                  return;
                }
                renderedMediaUrls.add(mediaKey);
                img.src = imgUrl;
              } else {
                return;
              }

              mediaItemsRendered++;

              img.loading = "lazy";
              img.alt = "Tweet image";
              img.draggable = false;
              img.onerror = () => {
                mediaItem.remove();
              };

              const overlay = document.createElement("div");
              overlay.className = "media-overlay";

              const authorInfo = document.createElement("div");
              authorInfo.className = "media-author";

              const avatar = document.createElement("img");
              avatar.className = "media-avatar";
              avatar.setAttribute("loading", "lazy");
              const avatarUrl = result.author_avatar?.replaceAll(";", "_bigger.");
              if (
                avatarUrl &&
                !avatarUrl.startsWith("javascript:") &&
                !avatarUrl.startsWith("data:")
              ) {
                avatar.src = avatarUrl;
              } else {
                avatar.src =
                  "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
              }

              const authorText = document.createElement("div");
              authorText.className = "media-author-text";

              const authorName = document.createElement("span");
              authorName.className = "media-author-name";
              authorName.textContent = result.author_name || username;

              const authorUsername = document.createElement("span");
              authorUsername.className = "media-author-username";
              authorUsername.textContent = `@${username}`;

              authorText.appendChild(authorName);
              authorText.appendChild(authorUsername);

              authorInfo.appendChild(avatar);
              authorInfo.appendChild(authorText);

              overlay.appendChild(authorInfo);

              mediaItem.appendChild(img);
              mediaItem.appendChild(overlay);

              resultsEl.appendChild(mediaItem);
              mediaItemsRendered++;
            }
          });
        }
      } else if (result.username) {
        if (result.id && renderedProfileIds.has(result.id)) return;
        if (result.id) renderedProfileIds.add(result.id);

        const el = document.createElement("a");
        el.className = "result account";
        el.href = result.id
          ? `https://x.com/i/user/${result.id}`
          : `https://x.com/${result.username}`;
        el.target = "_blank";
        el.rel = "noopener";

        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.loading = "lazy";
        avatar.width = 40;
        avatar.height = 40;

        const avatarPath = result.avatar?.replaceAll(";", "_bigger.");
        if (avatarPath && /^[a-zA-Z0-9_\-/.]+$/.test(avatarPath)) {
          avatar.src = `https://pbs.twimg.com/profile_images/${avatarPath}`;
        } else {
          avatar.src =
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
        }

        if (result.square_avatar) {
          avatar.style.borderRadius = "2px";
        }

        avatar.onerror = async function () {
          this.onerror = async () => {
            this.src =
              "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
            this.onerror = null;
          };

          const safeUsername = result.username?.replace(/[^a-zA-Z0-9_]/g, "");
          if (safeUsername) {
            const token = getSessionToken();
            this.src = `${API_URL}/${safeUsername}/avfetch.jpg${token ? `?session=${encodeURIComponent(token)}` : ""}`;
          } else {
            this.src =
              "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
          }
        };

        const info = document.createElement("div");
        info.className = "info";

        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = result.name || result.username;

        if (result.square_avatar) {
          avatar.style.borderRadius = "2px";
        }

        if (result.verified || result.square_avatar) {
          const verifiedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          verifiedSvg.setAttribute("viewBox", "0 0 22 22");
          verifiedSvg.setAttribute("aria-label", "Verified account");
          verifiedSvg.setAttribute("role", "img");
          verifiedSvg.setAttribute("width", "20px");
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute(
            "d",
            "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z",
          );
          path.setAttribute("fill", "#1da1f2");
          g.appendChild(path);
          verifiedSvg.appendChild(g);
          nameDiv.appendChild(verifiedSvg);

          if (result.square_avatar) {
            verifiedSvg.innerHTML = `<g><linearGradient gradientUnits="userSpaceOnUse" id="1-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="1-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g>`;
          }
        }

        if (result.protected) {
          const protectedSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          protectedSvg.setAttribute("viewBox", "0 0 22 22");
          protectedSvg.setAttribute("aria-label", "Protected account");
          protectedSvg.setAttribute("role", "img");
          protectedSvg.setAttribute("width", "20px");
          protectedSvg.innerHTML = `<g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g>`;
          protectedSvg.querySelector("path").setAttribute("fill", "white");
          nameDiv.appendChild(protectedSvg);
        }

        const usernameDiv = document.createElement("div");
        usernameDiv.className = "username";
        usernameDiv.textContent = `@${result.username}`;

        const bioDiv = document.createElement("div");
        bioDiv.className = "bio";
        bioDiv.textContent = result.bio || "";

        info.appendChild(nameDiv);
        info.appendChild(usernameDiv);

        const stats = document.createElement("div");
        stats.className = "stats";
        stats.innerHTML = `
      <div class="stat">
        <div class="stat-number">${formatNumber(result.followers) || "0"}</div>
        <div class="stat-label">followers</div>
      </div>
      <div class="stat">
        <div class="stat-number">${formatNumber(result.following) || "0"}</div>
        <div class="stat-label">following</div>
      </div>
      <div class="stat">
        <div class="stat-number">${formatNumber(result.tweets) || "0"}</div>
        <div class="stat-label">tweets</div>
      </div>
      `;

        if (result.location) {
          const locationDiv = document.createElement("div");
          locationDiv.className = "stat";
          const locationLabel = document.createElement("div");
          locationLabel.className = "stat-label";
          locationLabel.innerHTML =
            '<svg viewBox="0 0 24 24" aria-hidden="true" width="18px"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" fill="currentColor"></path></g></svg> ';
          const locationText = document.createTextNode(result.location);
          locationLabel.appendChild(locationText);
          locationDiv.appendChild(locationLabel);
          stats.appendChild(locationDiv);
        }

        stats.innerHTML += `
      <div class="stat time-stat">
        <div class="stat-label"><svg viewBox="0 0 24 24" aria-hidden="true" width="18px"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" fill="currentColor"></path></g></svg></svg> ${new Date(
          result.created_at,
        ).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</div>
      </div>
      `;

        if (result.bio) info.appendChild(bioDiv);

        if (result.profile_interstitial) {
          const interstitialWarning = document.createElement("div");
          interstitialWarning.className = "interstitial-warning";

          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          svg.setAttribute("width", "24");
          svg.setAttribute("height", "24");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.innerHTML =
            '<g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"/></g>';

          const messageText = document.createTextNode(` ${result.profile_interstitial}`);

          interstitialWarning.appendChild(svg);
          interstitialWarning.appendChild(messageText);
          stats.appendChild(interstitialWarning);
        }

        info.appendChild(stats);
        el.appendChild(avatar);
        el.appendChild(info);

        resultsEl.appendChild(el);

        el.querySelector(".time-stat").addEventListener("mouseenter", () => {
          const timeCard = document.createElement("div");
          timeCard.className = "time-card";
          timeCard.style.position = "absolute";
          timeCard.style.top = `${
            el.querySelector(".time-stat").getBoundingClientRect().top + 8
          }px`;

          timeCard.style.left = `${el.querySelector(".time-stat").getBoundingClientRect().left}px`;
          timeCard.style.transform = "translateY(calc(-100% - 18px))";
          timeCard.style.zIndex = "1000";
          timeCard.innerHTML = `
          <small>joined</small>
          <p>${new Date(result.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}</p>
          <small>indexed</small>
          <p>${new Date(result.added_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}</p>
          `;

          el.querySelector(".time-stat").appendChild(timeCard);
        });

        el.querySelector(".time-stat").addEventListener("mouseleave", () => {
          if (el.querySelector(".time-card")) el.querySelector(".time-card").remove();
        });
      }
    });

    if (
      currentSearchType === "media" &&
      mediaItemsRendered === 0 &&
      !hadMediaItemsBefore &&
      !hasMore
    ) {
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="/assets/svgs/woozy.svg">
    <p>no media found</p>
    <small>try a different search query. tweets without images are not shown in media view.</small></div>`;
      isLoading = false;
      return;
    }

    if (hasMore) {
      const loadMoreDiv = document.createElement("div");
      loadMoreDiv.className = "load-more";

      if (currentSearchType === "media") {
        loadMoreDiv.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          const skeleton = document.createElement("div");
          skeleton.className = "media-item skeleton";
          loadMoreDiv.appendChild(skeleton);
        }
      } else {
        loadMoreDiv.innerHTML = "";
        const skeletonCount = currentSearchType === "tweets" ? 2 : 2;
        for (let i = 0; i < skeletonCount; i++) {
          const skeleton = document.createElement("div");
          skeleton.className =
            currentSearchType === "tweets" ? "result tweet skeleton" : "result account skeleton";
          if (currentSearchType === "tweets") {
            skeleton.innerHTML = `
              <div class="tweet-author">
                <div class="avatar skeleton-box"></div>
                <div class="author-info">
                  <div class="skeleton-text skeleton-name" style="width:120px"></div>
                  <div class="skeleton-text skeleton-username" style="width:150px"></div>
                </div>
              </div>
              <div class="tweet-body">
                <div class="skeleton-text skeleton-line"></div>
                <div class="skeleton-text skeleton-line-short" style="width:60%"></div>
              </div>
              <div class="tweet-stats">
                <div class="skeleton-text skeleton-stat"></div>
                <div class="skeleton-text skeleton-stat"></div>
                <div class="skeleton-text skeleton-stat"></div>
              </div>
            `;
          } else {
            skeleton.innerHTML = `
              <div class="avatar skeleton-box"></div>
              <div class="info">
                <div class="skeleton-text skeleton-name" style="width:140px"></div>
                <div class="skeleton-text skeleton-username" style="width:170px"></div>
                <div class="skeleton-text skeleton-bio-line"></div>
                <div class="skeleton-text skeleton-bio-line-short"></div>
                <div class="stats">
                  <div class="skeleton-text skeleton-stat"></div>
                  <div class="skeleton-text skeleton-stat"></div>
                </div>
              </div>
            `;
          }
          loadMoreDiv.appendChild(skeleton);
        }
      }
      resultsEl.appendChild(loadMoreDiv);

      let hasTriggered = false;
      activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggered && !isLoading) {
              hasTriggered = true;
              if (activeObserver) {
                activeObserver.disconnect();
                activeObserver = null;
              }
              query(searchQuery, true);
            }
          });
        },
        { threshold: 0.1, rootMargin: "200px" },
      );

      setTimeout(() => {
        if (loadMoreDiv.isConnected && activeObserver) {
          activeObserver.observe(loadMoreDiv);
        }
      }, 100);
    }

    isLoading = false;
  } catch (e) {
    console.error(e);
    isLoading = false;
    document.querySelectorAll(".skeleton").forEach((e) => {
      e.remove();
    });
    if (!loadMore) {
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="assets/svgs/woozy.svg">
    <p>${
      e.message.includes("rate-limit reached")
        ? "rate limit reached. please wait a few seconds and try again"
        : e.message.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\n", "<br>")
    }</p>
    <small>${e.message.includes("filter") ? "check your filter values and try again" : "an error occurred. please try again later"}</small></div>`;
      clearInterval(skeletonMetaI);
      skeletonMeta.remove();

      if (resultsEl.querySelector(".error-zone p").innerText.length > 230) {
        resultsEl.querySelector(".error-zone p").style.fontSize = "16px";
        resultsEl.querySelector(".error-zone p").style.fontWeight = "400";
      }
    }
  }
};

buttonElements.forEach((btn, i) => {
  const type = btn.getAttribute("data-toggle");

  btn.addEventListener("click", () => {
    const selected = btn.classList.contains("pressed");

    if (selected) return;

    buttonElements.forEach((b) => {
      b.classList.remove("pressed");
      buttons[b.getAttribute("data-toggle")].toggled = false;
    });

    if (!selected) {
      btn.classList.add("pressed");
      buttons[type].toggled = true;

      currentSearchType = type;
      if (filterEditor) filterEditor.refresh();

      requestAnimationFrame(updateTabIndicator);

      if (document.querySelector(".results")) {
        query(document.querySelector(".searchbar").value.trim());
      }
    }
  });

  if (i === 0) btn.click();
});

// init tab indicator after first tab is clicked
requestAnimationFrame(updateTabIndicator);
window.addEventListener("resize", updateTabIndicator);

document.querySelector(".searchbar").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();

  const queryText = e.target.value.trim();

  if (queryText.length === 0) return;
  query(queryText);
});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";
  document.querySelector(".searchbar").value = q;

  if (q.length > 0) {
    restoreFromUrlParams();
    query(q);
    return;
  }

  if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
    document.querySelector(".results-meta")?.remove();
    filtersPanel.classList.remove("expanded");
    filterToggle.classList.remove("pressed");
    currentSort = "relevance";
    updateSortUI();
    lastRequestMeta = null;
    searchQuery = null;
    currentCursor = null;
    hasMore = true;
    requestAnimationFrame(updateTabIndicator);
  }
});

if (location.search.startsWith("?q=")) {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";
  document.querySelector(".searchbar").value = q;

  if (q.length > 0) {
    restoreFromUrlParams();
    query(q);
  }
} else {
  setTimeout(() => {
    document.querySelector(".searchbar").focus();
  });
}

if (location.search.startsWith("?pt=")) {
  (async () => {
    const params = new URLSearchParams(window.location.search);
    const jwt = params.get("pt") || "";

    const isValid = await (
      await fetch(`${API_URL}/permalink/verify?jwt=${jwt}`, {
        headers: {
          "X-Client": "WebPermalinks",
        },
      })
    ).json();

    if (isValid.tweet) {
      const tweet = createTweetEl(isValid.tweet);
      const permalinkOverlay = document.createElement("div");
      permalinkOverlay.className = "permalink-overlay";

      const iat = JSON.parse(atob(jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).iat;

      permalinkOverlay.innerHTML = `
      <div class="permalink-card">
        <button class="close-permalink" aria-label="Close permalink"><svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(239, 243, 244)" width="20" height="20"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg></button>

        <div class="tweet-container"></div>

        <div class="valid-container">
         <svg viewBox="0 0 24 24" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" fill="#00ba7c"></path></g></svg> <p>signature verified</p>
        </div>

        <p class="bio"><b>this is a permalink proving the validity of the above tweet.</b> twitter.cat can confirm that this tweet was present on our archive ${new Date(
          iat * 1000,
        ).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}</p>

        <p class="crypto">signature ${jwt.split(".")[2]}</p>
      </div>
      `;

      permalinkOverlay.querySelector(".close-permalink").addEventListener("click", () => {
        permalinkOverlay.remove();
        history.pushState({}, "", "/");
      });

      permalinkOverlay.querySelector(".tweet-container").appendChild(tweet);
      permalinkOverlay.querySelector(".tweet-container .tweet-body").style.fontSize = "20px";

      document.body.appendChild(permalinkOverlay);
    }
  })();
}

document.querySelector(".logo").addEventListener("click", () => {
  history.pushState({}, "", "/");
  document.querySelector(".searchbar").value = "";
  if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
    document.querySelector(".results-meta")?.remove();
    filtersPanel.classList.remove("expanded");
    filterToggle.classList.remove("pressed");
    currentSort = "relevance";
    updateSortUI();
    lastRequestMeta = null;
    searchQuery = null;
    currentCursor = null;
    hasMore = true;
    requestAnimationFrame(updateTabIndicator);
  }
});

setInterval(() => {
  document.title = `${
    searchQuery ? `${searchQuery} -` : `(${Math.floor(Math.random() * 900) + 100}) /`
  } twitter.cat`;
}, 100);

fetch("https://soggy.cat/static/ssoggycat/main/images/soggycat.webp")
  .then(resp => resp.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onload = () => {
      const webpBase64 = reader.result.split(",")[1];
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        const MAX = 400;
        if (width > MAX || height > MAX) {
          const ratio = Math.min(MAX / width, MAX / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const svgHeight = Math.round(height * 1.25);
        const yOffset = svgHeight - height;
        const jump = Math.round(height * 0.18);
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${svgHeight}">
            <style>
              @keyframes soggyhop {
                0%   { transform: translateY(0) scaleY(1) scaleX(1); }
                30%  { transform: translateY(0) scaleY(0.82) scaleX(1.12); }
                50%  { transform: translateY(-${jump}px) scaleY(1.08) scaleX(0.95); }
                65%  { transform: translateY(0) scaleY(0.85) scaleX(1.1); }
                80%  { transform: translateY(0) scaleY(1.03) scaleX(0.98); }
                100% { transform: translateY(0) scaleY(1) scaleX(1); }
              }
              image {
                animation: soggyhop 1.8s infinite ease-in-out;
                transform-origin: center bottom;
              }
            </style>
            <image href="data:image/webp;base64,${webpBase64}" width="${width}" height="${height}" y="${yOffset}"/>
          </svg>
        `;
        const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
        console.log('%c ', `
          background-image: url(${svgDataUrl});
          padding-top: ${svgHeight}px;
          padding-left: ${width}px;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        `);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(blob);
  });