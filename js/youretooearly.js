// im too lazy to fix the warnings
// edit: ended up fixing them because they haunt me at night

(() => {
  if (location.hostname === "localhost") {
    document.querySelector(".wipoverlay").remove(); // BYE
    return;
  }

  const jackmouth = document.querySelector(".jackmouth");
  const wipcaption = document.querySelector(".wipcaption");
  let jackclicked = false;

  function say(cls) {
    document.querySelector(`.${cls}`).classList.remove("hiddenword");
  }
  function hidewords() {
    ["your", "too", "early"].forEach((cls) => {
      const el = document.querySelector(`.${cls}`);
      el.classList.add("hiddenword");
      Array.from(el.children).forEach((span) => {
        span.classList.remove("shake");
      });
    });
  }
  function shakeWords(classes) {
    classes.forEach((cls) => {
      const word = document.querySelector(`.${cls}`);
      Array.from(word.children).forEach((span, i) => {
        span.classList.remove("shake");
        setTimeout(() => {
          span.classList.add("shake");
        }, i * 30);
      });
    });
  }

  document.querySelector(".jackenstein").addEventListener("click", () => {
    if (jackclicked) return;
    jackclicked = true;
    setTimeout(() => {
      jackmouth.classList.remove("sad");
      void jackmouth.offsetWidth;
      jackmouth.classList.add("sad");
    }, 100);

    wipcaption.style.opacity = 1;
    hidewords();

    const t1 = 800; // YOUR
    const t2 = 1300; // TOO
    const t3 = 1300; // shake
    const t4 = 1500; // EARLY!!!!
    const t5 = 2250;

    setTimeout(() => {
      say("your");
      document.querySelector(".earlysound").play();
    }, t1);
    setTimeout(() => {
      say("too");
    }, t2);
    setTimeout(() => {
      shakeWords(["your", "too"]);
    }, t3);
    setTimeout(() => {
      say("early");
      shakeWords(["your", "too", "early"]);
    }, t4);

    setTimeout(() => {
      wipcaption.style.opacity = 0;
      document.querySelector(".jackmouth").style.display = "none";
      document.querySelector(".jackface").style.display = "none";
      document.querySelector(".jackcry").style.display = "flex";

      document.querySelector(".mamasound").load();
      const mamasound = document.querySelector(".mamasound");
      mamasound.play();
      const jack = document.querySelector(".jackenstein");

      const erect = jack.getBoundingClientRect();
      let x = erect.left;
      let y = erect.top;

      let dx = 2 + Math.random() * 2;
      let dy = 2 + Math.random() * 2;
      let speed = 4;
      jack.style.position = "fixed";
      jack.style.left = `${x}px`;
      jack.style.top = `${y}px`;
      jack.style.zIndex = 10000;

      function bounce() {
        x += dx * speed;
        y += dy * speed;
        if (x <= 0 || x + jack.offsetWidth >= window.innerWidth) {
          dx = -dx;
          x = Math.max(0, Math.min(x, window.innerWidth - jack.offsetWidth));
        }
        if (y <= 0 || y + jack.offsetHeight >= window.innerHeight) {
          dy = -dy;
          y = Math.max(0, Math.min(y, window.innerHeight - jack.offsetHeight));
        }
        jack.style.left = `${x}px`;
        jack.style.top = `${y}px`;
        speed += 0.25;
        requestAnimationFrame(bounce);
      }
      bounce();

      setTimeout(() => {
        speed = 0;
        dx = 0;
        dy = 0;
        const mamasound = document.querySelector(".mamasound");
        mamasound.playbackRate = 0.4;
        ["preservesPitch", "mozPreservesPitch", "webkitPreservesPitch"].forEach(
          (p) => {
            if (p in mamasound) {
              mamasound[p] = false;
            }
          },
        );
        document.querySelector(".revivalsound").load();
        document.querySelector(".revivalsound").play();
        document.querySelector(".white").style.opacity = "1";

        document.querySelector(".jackenstein").classList.add("animated");

        setTimeout(() => {
          function exitpage() {
            try {
              window.close();
            } catch {}

            try {
              window.open("", "_self", "");
              window.close();
            } catch {}

            try {
              history.back();
            } catch {}

            try {
              history.go(-1);
            } catch {}

            if (window.parent !== window) {
              try {
                window.parent.postMessage("close", "*");
              } catch {}
            }

            try {
              window.open("about:blank", "_self");
            } catch {}

            try {
              window.location.href = "about:blank";
            } catch {}

            try {
              window.location.replace("about:blank");
            } catch {}
          }

          exitpage();
        }, 4000);
      }, 3950);
    }, t5);
  });
})();
