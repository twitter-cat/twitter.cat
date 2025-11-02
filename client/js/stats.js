window.addEventListener("load", () => {
  setTimeout(async () => {
    try {
      const API_URL =
        window.API_URL ||
        (await import("./config.js").then(({ API_URL }) => API_URL));

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
              .innerText.replaceAll(",", "")
          ) + Math.floor(Math.random() * addAccountsMax)
        ).toLocaleString();
        document.querySelector(".counter .count.tweets p").innerText = Number(
          parseInt(
            document
              .querySelector(".counter .count.tweets p")
              .innerText.replaceAll(",", "")
          ) + Math.floor(Math.random() * addTweetsMax)
        ).toLocaleString();
      }, 3000);
    } catch (e) {
      console.warn(e);
    }
  }, 15);
});
