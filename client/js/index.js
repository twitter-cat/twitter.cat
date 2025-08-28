import { API_URL } from "./config.js";
import { getSession } from "./session.js";

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

  const results = await (
    await fetch(`${API_URL}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: await getSession(),
      },
      body: JSON.stringify({
        q: text,
        type:
          Object.entries(buttons).find(([_, b]) => b.toggled)?.[0] ||
          "accounts",
      }),
    })
  ).json();

  resultsEl.innerText = JSON.stringify(results);
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
