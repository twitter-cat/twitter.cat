export const API_URL =
  location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://api-prod-twittercat.tiago.zip";

window.API_URL = API_URL;
