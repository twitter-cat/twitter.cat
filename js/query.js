const query = (text) => {
  if (document.querySelector(".results")) {
    document.querySelector(".results").remove();
  }

  const resultsEl = document.createElement("div");
  resultsEl.className = "results";
  resultsEl.innerText = `results for "${text}" (not really)`;
  document.querySelector(".center").appendChild(resultsEl);

  history.pushState({}, "", `?q=${encodeURIComponent(text)}`);
};

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
