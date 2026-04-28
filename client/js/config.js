const isLocalDev =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

export const API_URL = isLocalDev
  ? `http://${location.hostname}:3001`
  : "https://api-prod-twittercat.tiago.zip";

window.API_URL = API_URL;
