export const API_URL =
  location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://twittercat.tiagorangel.com";

window.API_URL = API_URL;
