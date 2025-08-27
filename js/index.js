const defaultcolor = "#71767b";
const colormap = {
  accounts: "#1da1f2",
  tweets: "#00ba7c",
  lists: "#7856ff",
  ads: "#ff7a00",
};

function settogglestate(name, value) {
  window[name] = value;
}

function svgfill(btn, color) {
  const svg = btn.querySelector(".buttonicon");
  if (svg && svg.tagName === "svg") {
    svg.setAttribute("fill", color);
  }
}

// horror

const btns = document.querySelectorAll(".toggle");

btns.forEach((btn) => {
  const which = btn.getAttribute("data-toggle");
  svgfill(btn, defaultcolor);

  btn.addEventListener("mousedown", (e) => e.preventDefault());
  btn.addEventListener("mouseenter", () => {
    svgfill(btn, colormap[which]);
  });

  btn.addEventListener("mouseleave", () => {
    if (btn.classList.contains("pressed")) {
      svgfill(btn, colormap[which]);
    } else {
      svgfill(btn, defaultcolor);
    }
  });

  btn.addEventListener("focus", () => {
    svgfill(btn, colormap[which]);
  });
  btn.addEventListener("blur", () => {
    if (btn.classList.contains("pressed")) {
      svgfill(btn, colormap[which]);
    } else {
      svgfill(btn, defaultcolor);
    }
  });
  btn.addEventListener("click", () => {
    const selected = btn.classList.contains("pressed");
    btns.forEach((b) => {
      b.classList.remove("pressed");
      svgfill(b, defaultcolor);
    });

    if (!selected) {
      btn.classList.add("pressed");
      settogglestate(which, true);
      svgfill(btn, colormap[which]);
    }
    btn.blur();
  });
});
