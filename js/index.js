const defaultColor = "#71767b";
const buttons = {
  accounts: {
    color: "#1da1f2",
    toggled: true,
  },
  tweets: {
    color: "#00ba7c",
    toggled: true,
  },
  lists: {
    color: "#7856ff",
    toggled: true,
  },
  ads: {
    color: "#ff7a00",
    toggled: true,
  },
};

const buttonElements = document.querySelectorAll(".toggle");
const svgfill = (btn, color) => {
  btn.querySelector(".buttonicon").fill = color;
};

buttonElements.forEach((btn) => {
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

    buttonElements.forEach((b) => {
      b.classList.remove("pressed");

      svgfill(b, defaultColor);
    });

    if (!selected) {
      btn.classList.add("pressed");
      buttons[type].toggled = true;

      svgfill(btn, buttons[type].color);
    }

    btn.blur();
  });
});