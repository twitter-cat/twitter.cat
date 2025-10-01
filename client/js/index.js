import { API_URL } from "./config.js";

const defaultColor = "#71767b";
const buttons = {
  accounts: {
    color: "#1da1f2",
    toggled: false,
  },
  tweets: {
    color: "#00ba7c",
    toggled: false,
  },
  lists: {
    color: "#7856ff",
    toggled: false,
  },
  ads: {
    color: "#ff7a00",
    toggled: false,
  },
};

const buttonElements = document.querySelectorAll(".toggle");
const svgfill = (btn, color) => {
  btn.querySelector(".buttonicon").fill = color;
};

let searchQuery;
let currentOffset = 0;
let isLoading = false;
let hasMore = true;

function formatNumber(num) {
  if (!num) return "0";
  if (num < 1000) return String(num);
  if (num < 1_000_000) return `${Math.floor(num / 1000)}k`;
  if (num < 1_000_000_000) return `${Math.floor(num / 1_000_000)}M`;
  return `${Math.floor(num / 1_000_000_000)}B`;
}

const query = async (text, loadMore = false) => {
  if (isLoading) return;

  if (!loadMore) {
    if (document.querySelector(".results")) {
      document.querySelector(".results").remove();
    }
    currentOffset = 0;
    hasMore = true;
  }

  if (!text) return;

  isLoading = true;

  if (!loadMore) {
    document.querySelector(".searchbar").blur();
    searchQuery = text;
  }

  let resultsEl = document.querySelector(".results");
  if (!resultsEl) {
    resultsEl = document.createElement("div");
    resultsEl.className = "results";
    document.querySelector(".center").appendChild(resultsEl);
  }

  const loadingEl = document.createElement("div");
  loadingEl.className = "loading-indicator";
  loadingEl.innerHTML = `<div style="text-align:center;margin-top:.5em"><svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .5s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" fill="#1EA1F1"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" fill="#1EA1F1" class="spinner_ajPY"/></svg></div>`;

  if (loadMore) {
    const existingLoadMore = document.querySelector(".load-more");
    if (existingLoadMore) existingLoadMore.remove();

    resultsEl.appendChild(loadingEl);
  } else {
    resultsEl.innerHTML = "";
    resultsEl.appendChild(loadingEl);
    history.pushState({}, "", `?q=${encodeURIComponent(text)}`);
  }

  try {
    const _results = await (
      await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          type:
            Object.entries(buttons).find(([_, b]) => b.toggled)?.[0] ||
            "accounts",
          limit: 20,
          offset: currentOffset,
        }),
      })
    ).json();

    if (_results.error) throw new Error(_results.error);

    const results = _results.rows.map((row) =>
      Object.fromEntries(row.map((val, i) => [_results.map[i], val]))
    );

    loadingEl.remove();

    if (!loadMore && results.length === 0) {
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="/assets/svgs/woozy.svg">
    <p>no results found</p>
    <small>try different keywords or check your spelling</small></div>`;
      isLoading = false;
      return;
    }

    hasMore = _results.pagination?.hasMore || false;
    currentOffset += results.length;

    results.forEach((result) => {
      if (result.username) {
        const el = document.createElement("a");
        el.className = "result account";
        el.href = `https://twitter.com/${result.username}`;
        el.target = "_blank";
        el.rel = "noopener";

        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.loading = "lazy";
        avatar.width = 40;
        avatar.height = 40;
        avatar.src =
          result.avatar?.replaceAll("_normal.jpg", "_bigger.jpg") ||
          "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
        if (result.square_avatar) {
          avatar.style.borderRadius = "2px";
        }
        avatar.onerror = function () {
          this.onerror = null;
          this.src =
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png";
        };

        const info = document.createElement("div");
        info.className = "info";

        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = result.name || result.username;

        console.log(result);

        if (result.square_avatar) {
          avatar.style.borderRadius = "2px";
        }

        if (result.verified) {
          const verifiedSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          verifiedSvg.setAttribute("viewBox", "0 0 22 22");
          verifiedSvg.setAttribute("aria-label", "Verified account");
          verifiedSvg.setAttribute("role", "img");
          verifiedSvg.setAttribute("width", "20px");
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          path.setAttribute(
            "d",
            "M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23z"
          );
          path.setAttribute("fill", "#1da1f2");
          g.appendChild(path);
          verifiedSvg.appendChild(g);
          nameDiv.appendChild(verifiedSvg);

          if (result.square_avatar) {
            verifiedSvg.innerHTML = `<svg viewBox="0 0 22 22" aria-label="Verified account" role="img" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-f9ja8p r-og9te1" data-testid="icon-verified"><g><linearGradient gradientUnits="userSpaceOnUse" id="1-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="1-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#1-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g></svg>`;
          }
        }

        if (result.protected) {
          const protectedSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
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
        <div class="stat-number">${formatNumber(result.followers)}</div>
        <div class="stat-label">followers</div>
      </div>
      <div class="stat">
        <div class="stat-number">${formatNumber(result.following)}</div>
        <div class="stat-label">following</div>
      </div>
      <div class="stat">
        <div class="stat-number">${formatNumber(result.tweets)}</div>
        <div class="stat-label">tweets</div>
      </div>
      ${
        result.location
          ? `<div class="stat">
        <div class="stat-label"><svg viewBox="0 0 24 24" aria-hidden="true" width="18px"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" fill="currentColor"></path></g></svg> ${result.location
          ?.split("")
          ?.join("")
          ?.replaceAll("<", "&lt;")
          ?.replaceAll(">", "&gt;")}</div>
      </div>`
          : ""
      }
      <div class="stat time-stat">
        <div class="stat-label"><svg viewBox="0 0 24 24" aria-hidden="true" width="18px"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" fill="currentColor"></path></g></svg></svg> ${new Date(
          result.created_at
        ).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</div>
      </div>
      `;

        if (result.bio) info.appendChild(bioDiv);

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

          timeCard.style.left = `${
            el.querySelector(".time-stat").getBoundingClientRect().left
          }px`;
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
          if (el.querySelector(".time-card"))
            el.querySelector(".time-card").remove();
        });
      }
    });

    if (hasMore) {
      const loadMoreBtn = document.createElement("button");
      loadMoreBtn.className = "load-more";
      loadMoreBtn.innerHTML = `<span>more results</span>`;
      loadMoreBtn.addEventListener("click", () => {
        query(searchQuery, true);
      });
      resultsEl.appendChild(loadMoreBtn);
    }

    isLoading = false;
  } catch (e) {
    console.error(e);
    loadingEl.remove();
    if (!loadMore) {
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="assets/svgs/woozy.svg">
    <p>${e.message}</p>
    <small>an error occurred. please try again later</small></div>`;
    }
    isLoading = false;
  }
};

buttonElements.forEach((btn, i) => {
  const type = btn.getAttribute("data-toggle");

  svgfill(btn, defaultColor);

  btn.addEventListener("mousedown", (e) => e.preventDefault());
  btn.addEventListener("mouseenter", () => {
    svgfill(btn, buttons[type].color);
  });

  btn.addEventListener("mouseleave", () => {
    svgfill(
      btn,
      btn.classList.contains("pressed") ? buttons[type].color : defaultColor
    );
  });

  btn.addEventListener("focus", () => {
    svgfill(btn, buttons[type].color);
  });

  btn.addEventListener("blur", () => {
    svgfill(
      btn,
      btn.classList.contains("pressed") ? buttons[type].color : defaultColor
    );
  });

  btn.addEventListener("click", () => {
    const selected = btn.classList.contains("pressed");

    if (selected) return;

    buttonElements.forEach((b) => {
      b.classList.remove("pressed");
      buttons[b.getAttribute("data-toggle")].toggled = false;

      svgfill(b, defaultColor);
      b.style.color = defaultColor;
    });

    if (!selected) {
      btn.classList.add("pressed");
      buttons[type].toggled = true;

      btn.style.color = buttons[type].color;
      svgfill(btn, buttons[type].color);

      if (document.querySelector(".results")) {
        query(document.querySelector(".searchbar").value.trim());
      }
    }
  });

  if (i === 0) btn.click();
});

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
    query(q);
  } else if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
    searchQuery = null;
    currentOffset = 0;
    hasMore = true;
  }
});

if (location.search.startsWith("?q=")) {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";
  document.querySelector(".searchbar").value = q;

  if (q.length > 0) {
    query(q);
  }
}

document.querySelector(".logo").addEventListener("click", () => {
  history.pushState({}, "", "/");
  document.querySelector(".searchbar").value = "";
  if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
    searchQuery = null;
    currentOffset = 0;
    hasMore = true;
  }
});

setInterval(() => {
  document.title = `${
    searchQuery
      ? `${searchQuery} -`
      : `(${Math.floor(Math.random() * 900) + 100}) /`
  } twitter.cat`;
}, 100);
