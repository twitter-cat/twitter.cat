const ALLOWED_BOOLEAN_FIELDS = new Set([
  "verified",
  "protected",
  "square_avatar",
  "can_media_tag",
  "sensitive",
  "fast_followers",
]);

const ALLOWED_NUMERIC_FIELDS = new Set([
  "followers",
  "following",
  "likes",
  "media_count",
  "listed_count",
  "tweets",
]);

const ALLOWED_TEXT_FIELDS = new Set([
  "name",
  "bio",
  "location",
  "url",
  "professional_type",
  "professional_category",
]);

const ALLOWED_TEXT_MODES = new Set([
  "contains",
  "exact",
  "starts_with",
  "exclude",
]);
const ALLOWED_BOOLEAN_MODES = new Set(["matches_only", "exclude"]);

const sanitizeNumeric = (value) => {
  const num = Number(value);
  return Number.isFinite(num) && num >= 0 ? num : null;
};

const sanitizeDate = (dateString) => {
  if (!dateString || typeof dateString !== "string") return null;
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? null : date;
};

const buildFilterConditions = (filters) => {
  const conditions = [];
  const params = [];

  for (const field of ALLOWED_BOOLEAN_FIELDS) {
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
    if (filters[field]) {
      const filter = filters[field];
      const minVal = sanitizeNumeric(filter.min);
      const maxVal = sanitizeNumeric(filter.max);

      if (minVal !== null) {
        conditions.push(`${field} >= $${params.length + 1}`);
        params.push(minVal);
      }
      if (maxVal !== null) {
        conditions.push(`${field} <= $${params.length + 1}`);
        params.push(maxVal);
      }
    }
  }

  if (filters.created_after) {
    const date = sanitizeDate(filters.created_after);
    if (date) {
      conditions.push(`created_at >= $${params.length + 1}`);
      params.push(date);
    }
  }
  if (filters.created_before) {
    const date = sanitizeDate(filters.created_before);
    if (date) {
      conditions.push(`created_at <= $${params.length + 1}`);
      params.push(date);
    }
  }

  for (const field of ALLOWED_TEXT_FIELDS) {
    if (filters[field]?.value?.trim?.()) {
      const value = filters[field].value.trim();
      const mode = filters[field].mode || "contains";

      if (!ALLOWED_TEXT_MODES.has(mode)) continue;

      if (mode === "contains") {
        conditions.push(`${field} ILIKE $${params.length + 1}`);
        params.push(`%${value}%`);
      } else if (mode === "exact") {
        conditions.push(`${field} ILIKE $${params.length + 1}`);
        params.push(value);
      } else if (mode === "starts_with") {
        conditions.push(`${field} ILIKE $${params.length + 1}`);
        params.push(`${value}%`);
      } else if (mode === "exclude") {
        conditions.push(
          `(${field} IS NULL OR ${field} NOT ILIKE $${params.length + 1})`
        );
        params.push(`%${value}%`);
      }
    }
  }

  if (filters.avatar_url?.trim?.()) {
    const avatarUrl = filters.avatar_url.trim();
    conditions.push(`avatar ILIKE $${params.length + 1}`);
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
    if (filters[field]?.priority === "up") {
      priorityUp.push(`${field} DESC`);
    } else if (filters[field]?.priority === "down") {
      priorityDown.push(`${field} ASC`);
    }
  }

  for (const field of ALLOWED_NUMERIC_FIELDS) {
    if (filters[field]?.priority === "up") {
      priorityUp.push(`${field} DESC`);
    } else if (filters[field]?.priority === "down") {
      priorityDown.push(`${field} ASC`);
    }
  }

  return [...priorityUp, ...priorityDown];
};

export { buildFilterConditions, buildPriorityOrder };
