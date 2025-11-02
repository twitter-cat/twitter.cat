const FIELD_TYPES = {
  verified: "boolean",
  protected: "boolean",
  square_avatar: "boolean",
  can_media_tag: "boolean",
  sensitive: "boolean",
  fast_followers: "boolean",

  followers: "integer",
  following: "integer",
  likes: "integer",
  media_count: "integer",
  listed_count: "integer",
  tweets: "integer",

  name: "text",
  bio: "text",
  location: "text",
  url: "text",
  professional_type: "text",
  professional_category: "text",

  created_at: "timestamp",

  avatar: "text",
};

const TWEET_FIELD_TYPES = {
  like_count: "integer",
  retweet_count: "integer",
  reply_count: "integer",
  quote_count: "integer",
  views_count: "integer",
  bookmarks_count: "integer",

  body: "text",
  lang: "text",
  source: "text",

  created_at: "timestamp",

  has_media: "boolean",
  media_type: "text",
  is_reply: "boolean",
  is_quote: "boolean",
  has_poll: "boolean",
  has_embed: "boolean",
};

const ALLOWED_BOOLEAN_FIELDS = new Set(
  Object.keys(FIELD_TYPES).filter((key) => FIELD_TYPES[key] === "boolean")
);

const ALLOWED_NUMERIC_FIELDS = new Set(
  Object.keys(FIELD_TYPES).filter((key) => FIELD_TYPES[key] === "integer")
);

const ALLOWED_TEXT_FIELDS = new Set(
  Object.keys(FIELD_TYPES).filter(
    (key) => FIELD_TYPES[key] === "text" && !["avatar"].includes(key)
  )
);

const ALLOWED_TWEET_NUMERIC_FIELDS = new Set(
  Object.keys(TWEET_FIELD_TYPES).filter(
    (key) => TWEET_FIELD_TYPES[key] === "integer"
  )
);

const ALLOWED_TWEET_TEXT_FIELDS = new Set(
  Object.keys(TWEET_FIELD_TYPES).filter(
    (key) => TWEET_FIELD_TYPES[key] === "text"
  )
);

const ALLOWED_TWEET_BOOLEAN_FIELDS = new Set(
  Object.keys(TWEET_FIELD_TYPES).filter(
    (key) => TWEET_FIELD_TYPES[key] === "boolean"
  )
);

const ALLOWED_TEXT_MODES = new Set([
  "contains",
  "exact",
  "starts_with",
  "exclude",
]);
const ALLOWED_BOOLEAN_MODES = new Set(["matches_only", "exclude"]);

const sanitizeNumeric = (value) => {
  const num = Number(value);
  if (Number.isFinite(num) && num >= 0) {
    return Math.floor(num);
  }
  return null;
};

const sanitizeDate = (dateString) => {
  if (!dateString || typeof dateString !== "string") return null;
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? null : date;
};

const validateField = (field, expectedType) => {
  return FIELD_TYPES[field] === expectedType;
};

const validateTweetField = (field, expectedType) => {
  return TWEET_FIELD_TYPES[field] === expectedType;
};

const buildFilterConditions = (filters) => {
  const conditions = [];
  const params = [];

  const getParamIndex = () => params.length + 2;

  for (const field of ALLOWED_BOOLEAN_FIELDS) {
    if (!validateField(field, "boolean")) continue;

    if (filters[field]) {
      const filter = filters[field];
      if (
        filter.mode === "matches_only" &&
        ALLOWED_BOOLEAN_MODES.has(filter.mode)
      ) {
        conditions.push(`${field} = 1`);
      } else if (
        filter.mode === "exclude" &&
        ALLOWED_BOOLEAN_MODES.has(filter.mode)
      ) {
        conditions.push(`${field} = 0`);
      }
    }
  }

  for (const field of ALLOWED_NUMERIC_FIELDS) {
    if (!validateField(field, "integer")) continue;

    if (filters[field]) {
      const filter = filters[field];
      const minVal = sanitizeNumeric(filter.min);
      const maxVal = sanitizeNumeric(filter.max);

      if (minVal !== null) {
        conditions.push(`${field} >= $${getParamIndex()}::INTEGER`);
        params.push(minVal);
      }
      if (maxVal !== null) {
        conditions.push(`${field} <= $${getParamIndex()}::INTEGER`);
        params.push(maxVal);
      }
    }
  }

  if (filters.created_after) {
    const date = sanitizeDate(filters.created_after);
    if (date) {
      conditions.push(`created_at >= $${getParamIndex()}`);
      params.push(date);
    }
  }
  if (filters.created_before) {
    const date = sanitizeDate(filters.created_before);
    if (date) {
      conditions.push(`created_at <= $${getParamIndex()}`);
      params.push(date);
    }
  }

  for (const field of ALLOWED_TEXT_FIELDS) {
    if (!validateField(field, "text")) continue;

    if (filters[field]?.value?.trim?.()) {
      const value = filters[field].value.trim();
      const mode = filters[field].mode || "contains";

      if (!ALLOWED_TEXT_MODES.has(mode)) continue;

      if (mode === "contains") {
        conditions.push(`${field} ILIKE $${getParamIndex()}`);
        params.push(`%${value}%`);
      } else if (mode === "exact") {
        conditions.push(`${field} ILIKE $${getParamIndex()}`);
        params.push(value);
      } else if (mode === "starts_with") {
        conditions.push(`${field} ILIKE $${getParamIndex()}`);
        params.push(`${value}%`);
      } else if (mode === "exclude") {
        conditions.push(
          `(${field} IS NULL OR ${field} NOT ILIKE $${getParamIndex()})`
        );
        params.push(`%${value}%`);
      }
    }
  }

  if (filters.avatar_url?.trim?.()) {
    const avatarUrl = filters.avatar_url.trim();
    conditions.push(`avatar ILIKE $${getParamIndex()}`);
    params.push(`%${avatarUrl}%`);
  }

  if (filters.has_location !== undefined) {
    if (filters.has_location) {
      conditions.push(`location IS NOT NULL AND location != ''`);
    } else {
      conditions.push(`(location IS NULL OR location = '')`);
    }
  }

  if (filters.has_bio !== undefined) {
    if (filters.has_bio) {
      conditions.push(`bio IS NOT NULL AND bio != ''`);
    } else {
      conditions.push(`(bio IS NULL OR bio = '')`);
    }
  }

  if (filters.has_url !== undefined) {
    if (filters.has_url) {
      conditions.push(`url IS NOT NULL AND url != ''`);
    } else {
      conditions.push(`(url IS NULL OR url = '')`);
    }
  }

  return { conditions, params };
};

const buildPriorityOrder = (filters) => {
  const priorityUp = [];
  const priorityDown = [];

  for (const field of ALLOWED_BOOLEAN_FIELDS) {
    if (!validateField(field, "boolean")) continue;

    if (filters[field]?.priority === "up") {
      priorityUp.push(`${field} DESC`);
    } else if (filters[field]?.priority === "down") {
      priorityDown.push(`${field} ASC`);
    }
  }

  for (const field of ALLOWED_NUMERIC_FIELDS) {
    if (!validateField(field, "integer")) continue;

    if (filters[field]?.priority === "up") {
      priorityUp.push(`${field} DESC`);
    } else if (filters[field]?.priority === "down") {
      priorityDown.push(`${field} ASC`);
    }
  }

  return [...priorityUp, ...priorityDown];
};

const buildTweetFilterConditions = (filters, authorFilters = {}) => {
  const conditions = [];
  const params = [];

  const getParamIndex = () => params.length + 2;

  if (authorFilters && Object.keys(authorFilters).length > 0) {
    const authorConditions = [];

    for (const field of ALLOWED_BOOLEAN_FIELDS) {
      if (!validateField(field, "boolean")) continue;

      if (authorFilters[field]) {
        const filter = authorFilters[field];
        if (
          filter.mode === "matches_only" &&
          ALLOWED_BOOLEAN_MODES.has(filter.mode)
        ) {
          authorConditions.push(`author.${field} = 1`);
        } else if (
          filter.mode === "exclude" &&
          ALLOWED_BOOLEAN_MODES.has(filter.mode)
        ) {
          authorConditions.push(`author.${field} = 0`);
        }
      }
    }

    for (const field of ALLOWED_NUMERIC_FIELDS) {
      if (!validateField(field, "integer")) continue;

      if (authorFilters[field]) {
        const filter = authorFilters[field];
        const minVal = sanitizeNumeric(filter.min);
        const maxVal = sanitizeNumeric(filter.max);

        if (minVal !== null) {
          authorConditions.push(
            `author.${field} >= $${getParamIndex()}::INTEGER`
          );
          params.push(minVal);
        }
        if (maxVal !== null) {
          authorConditions.push(
            `author.${field} <= $${getParamIndex()}::INTEGER`
          );
          params.push(maxVal);
        }
      }
    }

    if (authorFilters.created_after) {
      const date = sanitizeDate(authorFilters.created_after);
      if (date) {
        authorConditions.push(`author.created_at >= $${getParamIndex()}`);
        params.push(date);
      }
    }
    if (authorFilters.created_before) {
      const date = sanitizeDate(authorFilters.created_before);
      if (date) {
        authorConditions.push(`author.created_at <= $${getParamIndex()}`);
        params.push(date);
      }
    }

    for (const field of ALLOWED_TEXT_FIELDS) {
      if (!validateField(field, "text")) continue;

      if (authorFilters[field]?.value?.trim?.()) {
        const value = authorFilters[field].value.trim();
        const mode = authorFilters[field].mode || "contains";

        if (!ALLOWED_TEXT_MODES.has(mode)) continue;

        if (mode === "contains") {
          authorConditions.push(`author.${field} ILIKE $${getParamIndex()}`);
          params.push(`%${value}%`);
        } else if (mode === "exact") {
          authorConditions.push(`author.${field} ILIKE $${getParamIndex()}`);
          params.push(value);
        } else if (mode === "starts_with") {
          authorConditions.push(`author.${field} ILIKE $${getParamIndex()}`);
          params.push(`${value}%`);
        } else if (mode === "exclude") {
          authorConditions.push(
            `(author.${field} IS NULL OR author.${field} NOT ILIKE $${getParamIndex()})`
          );
          params.push(`%${value}%`);
        }
      }
    }

    if (authorFilters.avatar_url?.trim?.()) {
      const avatarUrl = authorFilters.avatar_url.trim();
      authorConditions.push(`author.avatar ILIKE $${getParamIndex()}`);
      params.push(`%${avatarUrl}%`);
    }

    if (authorFilters.has_location !== undefined) {
      if (authorFilters.has_location) {
        authorConditions.push(
          `author.location IS NOT NULL AND author.location != ''`
        );
      } else {
        authorConditions.push(
          `(author.location IS NULL OR author.location = '')`
        );
      }
    }

    if (authorFilters.has_bio !== undefined) {
      if (authorFilters.has_bio) {
        authorConditions.push(`author.bio IS NOT NULL AND author.bio != ''`);
      } else {
        authorConditions.push(`(author.bio IS NULL OR author.bio = '')`);
      }
    }

    if (authorFilters.has_url !== undefined) {
      if (authorFilters.has_url) {
        authorConditions.push(`author.url IS NOT NULL AND author.url != ''`);
      } else {
        authorConditions.push(`(author.url IS NULL OR author.url = '')`);
      }
    }

    if (authorConditions.length > 0) {
      conditions.push(...authorConditions);
    }
  }

  for (const field of ALLOWED_TWEET_TEXT_FIELDS) {
    if (!validateTweetField(field, "text")) continue;

    if (filters[field]?.value?.trim?.()) {
      const value = filters[field].value.trim();
      const mode = filters[field].mode || "contains";

      if (!ALLOWED_TEXT_MODES.has(mode)) continue;

      if (mode === "contains") {
        conditions.push(`tweets.${field} ILIKE $${getParamIndex()}`);
        params.push(`%${value}%`);
      } else if (mode === "exact") {
        conditions.push(`tweets.${field} ILIKE $${getParamIndex()}`);
        params.push(value);
      } else if (mode === "starts_with") {
        conditions.push(`tweets.${field} ILIKE $${getParamIndex()}`);
        params.push(`${value}%`);
      } else if (mode === "exclude") {
        conditions.push(`tweets.${field} NOT ILIKE $${getParamIndex()}`);
        params.push(`%${value}%`);
      }
    }
  }

  if (filters.author_username?.value?.trim?.()) {
    const value = filters.author_username.value.trim();
    const mode = filters.author_username.mode || "exact";

    if (/^[a-zA-Z0-9_]{1,15}$/.test(value)) {
      if (mode === "exact") {
        conditions.push(`author.username = $${getParamIndex()}`);
        params.push(value.toLowerCase());
      } else if (mode === "contains") {
        conditions.push(`author.username ILIKE $${getParamIndex()}`);
        params.push(`%${value.toLowerCase()}%`);
      }
    }
  }

  if (filters.tweet_created_after) {
    const date = sanitizeDate(filters.tweet_created_after);
    if (date) {
      conditions.push(`tweets.created_at >= $${getParamIndex()}`);
      params.push(date);
    }
  }
  if (filters.tweet_created_before) {
    const date = sanitizeDate(filters.tweet_created_before);
    if (date) {
      conditions.push(`tweets.created_at <= $${getParamIndex()}`);
      params.push(date);
    }
  }

  for (const field of ALLOWED_TWEET_NUMERIC_FIELDS) {
    if (!validateTweetField(field, "integer")) continue;

    if (filters[field]) {
      const filter = filters[field];
      const minVal = sanitizeNumeric(filter.min);
      const maxVal = sanitizeNumeric(filter.max);

      if (minVal !== null) {
        conditions.push(`tweets.${field} >= $${getParamIndex()}::INTEGER`);
        params.push(minVal);
      }
      if (maxVal !== null) {
        conditions.push(`tweets.${field} <= $${getParamIndex()}::INTEGER`);
        params.push(maxVal);
      }
    }
  }

  for (const field of ALLOWED_TWEET_BOOLEAN_FIELDS) {
    if (!validateTweetField(field, "boolean")) continue;

    if (filters[field] !== undefined) {
      if (field === "has_media") {
        if (filters[field]) {
          conditions.push(
            `tweets.media IS NOT NULL AND tweets.media != '[]' AND tweets.media != 'null'`
          );
        } else {
          conditions.push(
            `(tweets.media IS NULL OR tweets.media = '[]' OR tweets.media = 'null')`
          );
        }
      } else if (field === "is_reply") {
        if (filters[field]) {
          conditions.push(`tweets.reply_to_status_id IS NOT NULL`);
        } else {
          conditions.push(`tweets.reply_to_status_id IS NULL`);
        }
      } else if (field === "is_quote") {
        if (filters[field]) {
          conditions.push(`tweets.quoting_id IS NOT NULL`);
        } else {
          conditions.push(`tweets.quoting_id IS NULL`);
        }
      } else if (field === "has_poll") {
        if (filters[field]) {
          conditions.push(`tweets.poll IS NOT NULL`);
        } else {
          conditions.push(`tweets.poll IS NULL`);
        }
      } else if (field === "has_embed") {
        if (filters[field]) {
          conditions.push(`tweets.embed IS NOT NULL`);
        } else {
          conditions.push(`tweets.embed IS NULL`);
        }
      }
    }
  }

  if (filters.is_original !== undefined && filters.is_original) {
    conditions.push(
      `tweets.reply_to_status_id IS NULL AND tweets.quoting_id IS NULL`
    );
  }

  if (filters.media_type?.trim?.()) {
    if (validateTweetField("media_type", "text")) {
      const mediaType = filters.media_type.trim();
      if (["photo", "video", "gif", "animated_gif"].includes(mediaType)) {
        conditions.push(`(
        tweets.media IS NOT NULL AND 
        tweets.media::text ILIKE $${getParamIndex()}
      )`);
        params.push(`%"type":"${mediaType}"%`);
      }
    }
  }

  return { conditions, params };
};

const buildTweetPriorityOrder = (filters) => {
  const priorityUp = [];
  const priorityDown = [];

  for (const field of ALLOWED_TWEET_NUMERIC_FIELDS) {
    if (filters[field]?.priority === "up") {
      priorityUp.push(`tweets.${field} DESC`);
    } else if (filters[field]?.priority === "down") {
      priorityDown.push(`tweets.${field} ASC`);
    }
  }

  return [...priorityUp, ...priorityDown];
};

export {
  buildFilterConditions,
  buildPriorityOrder,
  buildTweetFilterConditions,
  buildTweetPriorityOrder,
};
