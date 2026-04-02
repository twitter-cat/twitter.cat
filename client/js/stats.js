window.addEventListener("load", () => {
  setTimeout(async () => {
    try {
      const API_URL =
        window.API_URL ||
        (await import("./config.js").then(({ API_URL }) => API_URL));

      window.API_URL = API_URL;

      const [accounts, tweets] = await (await fetch(`${API_URL}/stats`)).json();

      document.querySelector(".counter .count.accounts p").innerText =
        Number(accounts).toLocaleString();
      document.querySelector(".counter .count.tweets p").innerText =
        Number(tweets).toLocaleString();

      document.querySelector(".counter").style.opacity = 1;

      setInterval(async () => {
        const [addAccountsMax, addTweetsMax] = [10, 40];

        document.querySelector(".counter .count.accounts p").innerText = Number(
          parseInt(
            document
              .querySelector(".counter .count.accounts p")
              .innerText.replaceAll(",", ""),
            10,
          ) + Math.floor(Math.random() * addAccountsMax),
        ).toLocaleString();
        document.querySelector(".counter .count.tweets p").innerText = Number(
          parseInt(
            document
              .querySelector(".counter .count.tweets p")
              .innerText.replaceAll(",", ""),
            10,
          ) + Math.floor(Math.random() * addTweetsMax),
        ).toLocaleString();
      }, 3000);
    } catch (e) {
      console.warn(e);
    }
  }, 15);

  setTimeout(async () => {
    const API_URL =
      window.API_URL ||
      (await import("./config.js").then(({ API_URL }) => API_URL));
    const [trending] = await (await fetch(`${API_URL}/stats/trending`)).json();
    const trendingEl = document.querySelector(".trending .trend-text");

    trending.forEach((trend, i) => {
      const el = document.createElement("a");
      el.innerText = trend;
      trendingEl.appendChild(el);
      el.addEventListener("click", () => {
        if (!el.classList.contains("active")) return;
        console.log("searching", trend)
        if (window.__tcatQuery) window.__tcatQuery(trend);
        document.querySelector(".searchbar").value = trend;
      })
      if (i === 0) el.classList.add("active");
    });

    const items = [...trendingEl.querySelectorAll("a")];
    trendingEl.style.width = `${items[0].offsetWidth}px`;

    let current = 0;
    document.querySelector(".trending").style.opacity = "1";

    setInterval(() => {
      trendingEl.style.transition = "width 0.4s cubic-bezier(0.25, 1, 0.5, 1)"

      const prev = items[current];
      current = (current + 1) % items.length;
      const next = items[current];

      trendingEl.style.width = `${next.offsetWidth || 150}px`;

      prev.classList.remove("active");
      prev.classList.add("exit");
      prev.addEventListener("transitionend", () => prev.classList.remove("exit"), { once: true });

      next.classList.add("active");
    }, 6700);
  }, 20);
});
