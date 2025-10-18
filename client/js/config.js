export const API_URL =
  location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://twittercat.tiagorangel.com";

export const KNOWN_MAPPINGS =
  "id,avatar,square_avatar,banner,bio,can_media_tag,created_at,location,name,parody_commentary_fan_label,professional_type,professional_category,profile_interstitial,protected,rawId,sensitive,followers,following,fast_followers,likes,media_count,listed_count,tweets,url,username,verified,withheld,added_at";

export const KNOWN_MAPPINGS_HASH = [...KNOWN_MAPPINGS].reduce(
  (a, c) => (a << 5) - a + c.charCodeAt(),
  0
);
