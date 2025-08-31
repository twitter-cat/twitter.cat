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

const query = async (text) => {
  if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
  }
  if (!text) return;

  document.querySelector(".searchbar").blur();

  searchQuery = text;

  const resultsEl = document.createElement("div");
  resultsEl.className = "results";
  resultsEl.innerHTML = `<div style="text-align:center;margin-top:.5em"><svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .5s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" fill="#1EA1F1"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" fill="#1EA1F1" class="spinner_ajPY"/></svg></div>`;

  document.querySelector(".center").appendChild(resultsEl);

  history.pushState({}, "", `?q=${encodeURIComponent(text)}`);

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
        }),
      })
    ).json();

    if (_results.error) throw new Error(_results.error);

    const results = _results.rows.map((row) =>
      Object.fromEntries(row.map((val, i) => [_results.map[i], val])),
    );

    if (results.length === 0) {
      resultsEl.innerHTML = `<div class="error-zone">
    <img src="/assets/svgs/woozy.svg">
    <p>no results found</p>
    <small>try different keywords or check your spelling</small></div>`;
      return;
    }

    resultsEl.innerText = "";

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
        avatar.src =
          result.avatar?.replaceAll("_normal.jpg", "_bigger.jpg") ||
          "assets/svgs/default-avatar.png";
        avatar.onerror = function () {
          this.onerror = null;
          this.src = "assets/svgs/default-avatar.png";
        };

        const info = document.createElement("div");
        info.className = "info";

        const nameDiv = document.createElement("div");
        nameDiv.className = "name";
        nameDiv.textContent = result.name || result.username;

        if (result.verified) {
          const verifiedSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          verifiedSvg.setAttribute("viewBox", "0 0 22 22");
          verifiedSvg.setAttribute("aria-label", "Verified account");
          verifiedSvg.setAttribute("role", "img");
          verifiedSvg.setAttribute("width", "20px");
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          path.setAttribute(
            "d",
            "M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23z",
          );
          path.setAttribute("fill", "#1da1f2");
          g.appendChild(path);
          verifiedSvg.appendChild(g);
          nameDiv.appendChild(verifiedSvg);
        }

        const usernameDiv = document.createElement("div");
        usernameDiv.className = "username";
        usernameDiv.textContent = `@${result.username}`;

        const bioDiv = document.createElement("div");
        bioDiv.className = "bio";
        bioDiv.textContent = result.bio || "";

        info.appendChild(nameDiv);
        info.appendChild(usernameDiv);
        info.appendChild(bioDiv);

        el.appendChild(avatar);
        el.appendChild(info);

        resultsEl.appendChild(el);
      }
    });
  } catch (e) {
    console.error(e);
    resultsEl.innerHTML = `<div class="error-zone">
    <img src="assets/svgs/woozy.svg">
    <p>${e.message}</p>
    <small>an error occurred. please try again later</small></div>`;
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
      btn.classList.contains("pressed") ? buttons[type].color : defaultColor,
    );
  });

  btn.addEventListener("focus", () => {
    svgfill(btn, buttons[type].color);
  });

  btn.addEventListener("blur", () => {
    svgfill(
      btn,
      btn.classList.contains("pressed") ? buttons[type].color : defaultColor,
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
  }
});

setInterval(() => {
  document.title = `${searchQuery ? `${searchQuery} -` : `(${Math.floor(Math.random() * 900) + 100}) /`} twitter.cat`;
}, 100);
