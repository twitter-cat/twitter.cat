import { API_URL } from "./config.js";

const DEBOUNCE_DELAY = 80;
const MIN_QUERY_LENGTH = 1;
const MAX_SUGGESTIONS = 8;

let debounceTimer = null;
let currentRequest = null;
let selectedIndex = -1;
let suggestions = [];
const typeaheadContainer = document.createElement("div");

const searchInput = document.querySelector(".searchbar");
let isTypeaheadVisible = false;

typeaheadContainer.className = "typeahead-container";
typeaheadContainer.innerHTML = '<div class="typeahead-dropdown"></div>';
searchInput.parentElement.appendChild(typeaheadContainer);

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  if (currentRequest) {
    currentRequest.abort();
    currentRequest = null;
  }

  if (query.length < MIN_QUERY_LENGTH) {
    hideTypeahead();
    return;
  }

  debounceTimer = setTimeout(async () => {
    const controller = new AbortController();
    currentRequest = controller;

    try {
      isTypeaheadVisible = true;

      const response = await fetch(
        `${API_URL}/typeahead?q=${encodeURIComponent(query)}`,
        {
          signal: controller.signal,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }

      const data = await response.json();
      suggestions = data.slice(0, MAX_SUGGESTIONS);

      if (suggestions.length > 0) {
        renderSuggestions(query);
      } else {
        hideTypeahead();
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("[typeahead] error", err);
        hideTypeahead();
      }
    } finally {
      if (currentRequest === controller) {
        currentRequest = null;
      }
    }
  }, DEBOUNCE_DELAY);
});

searchInput.addEventListener("keydown", (e) => {
  if (!isTypeaheadVisible || suggestions.length === 0) {
    return;
  }

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      selectedIndex =
        selectedIndex < suggestions.length - 1 ? selectedIndex + 1 : 0;
      break;

    case "ArrowUp":
      e.preventDefault();
      selectedIndex =
        selectedIndex > 0 ? selectedIndex - 1 : suggestions.length - 1;
      break;

    case "Enter":
      if (selectedIndex >= 0) {
        e.preventDefault();
        selectSuggestion(selectedIndex);
      } else {
        hideTypeahead();
      }
      break;

    case "Escape":
      e.preventDefault();
      hideTypeahead();
      break;

    case "Tab":
      hideTypeahead();
      break;
  }
}, true);
searchInput.addEventListener("focus", () => {
  const query = searchInput.value.trim();

  if (query.length >= MIN_QUERY_LENGTH && suggestions.length > 0) {
    renderSuggestions(query);
  }
});
searchInput.addEventListener("blur", () => {
  hideTypeahead();
});

document.addEventListener("click", (e) => {
  if (
    !searchInput.contains(e.target) &&
    !typeaheadContainer.contains(e.target)
  ) {
    hideTypeahead();
  }
});

function renderSuggestions(query) {
  if (document.activeElement !== searchInput) return;

  const dropdown = typeaheadContainer.querySelector(".typeahead-dropdown");
  selectedIndex = -1;

  const html = suggestions
    .map((suggestion, index) => {
      const highlightedText = highlightMatch(suggestion, query);

      return `
      <div class="typeahead-item" data-index="${index}">
        <span class="typeahead-icon">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#71767B"><path d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25"/></svg>
        </span>
        <span class="typeahead-text">${highlightedText}</span>
      </div>
    `;
    })
    .join("");

  dropdown.innerHTML = html;
  isTypeaheadVisible = true;

  dropdown.querySelectorAll(".typeahead-item").forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const index = parseInt(item.dataset.index, 10);
      selectSuggestion(index);
    });

    item.addEventListener("mouseenter", () => {
      const index = parseInt(item.dataset.index, 10);
      selectedIndex = index;
    });
  });
}

function highlightMatch(suggestion, query) {
  const escapeHtml = (text) => {
    return text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  };

  const lowerSuggestion = suggestion.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerSuggestion.indexOf(lowerQuery);

  if (index === -1) {
    return escapeHtml(suggestion);
  }

  const before = suggestion.slice(0, index);
  const match = suggestion.slice(index, index + query.length);
  const after = suggestion.slice(index + query.length);

  return `${escapeHtml(before)}${escapeHtml(match)}<em>${escapeHtml(after)}</em>`;
}

function hideTypeahead() {
  const dropdown = typeaheadContainer.querySelector(".typeahead-dropdown");

  dropdown.innerHTML = "";
  isTypeaheadVisible = false;
  selectedIndex = -1;
  suggestions = [];
}

function selectSuggestion(index) {
  const suggestion = suggestions[index];
  if (!suggestion) return;

  searchInput.value = suggestion;

  const dropdown = typeaheadContainer.querySelector(".typeahead-dropdown");
  dropdown.innerHTML = "";
  isTypeaheadVisible = false;
  selectedIndex = -1;
  suggestions = [];

  setTimeout(() => {
    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      which: 13,
      bubbles: true,
    });
    searchInput.dispatchEvent(enterEvent);
  }, 0);
}
