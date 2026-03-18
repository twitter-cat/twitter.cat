const MANTICORE = process.env.MANTICORE_URL || "http://localhost:9308";

const FIELD_MAP = {
  // tweet fields
  author_id: "author_id",
  like_count: "like_count",
  reply_count: "reply_count",
  retweet_count: "retweet_count",
  views_count: "views_count",
  bookmarks_count: "bookmarks_count",
  has_media: "has_media",
  lang: "lang",
  created_at: "created_at_ts",
  added_at: "added_at_ts",
  // profile fields
  followers: "followers",
  following: "following",
  likes: "likes",
  tweets: "tweet_count",
  listed_count: "listed_count",
  verified: "verified",
};

const ALLOWED_FIELDS = new Set(Object.keys(FIELD_MAP));
const NUMERIC_FIELDS = new Set([
  "like_count", "reply_count", "retweet_count", "views_count",
  "bookmarks_count", "has_media", "created_at", "added_at",
  "followers", "following", "likes", "tweets", "listed_count", "verified",
]);
const ALLOWED_OPS = new Set(["=", "!=", ">", ">=", "<", "<="]);

function filterToCondition(field, op, rawValue) {
  if (!ALLOWED_FIELDS.has(field) || !ALLOWED_OPS.has(op)) return null;

  const manticoreField = FIELD_MAP[field];
  let value = typeof rawValue === "string" ? rawValue.trim().replace(/^["']|["']$/g, "") : rawValue;

  if (value === "true" || value === true) value = 1;
  else if (value === "false" || value === false) value = 0;
  else if (NUMERIC_FIELDS.has(field)) value = Number(value);

  if (op === "=") return { equals: { [manticoreField]: value } };
  if (op === "!=") return { not: { equals: { [manticoreField]: value } } };
  if (op === ">=") return { range: { [manticoreField]: { gte: value } } };
  if (op === "<=") return { range: { [manticoreField]: { lte: value } } };
  if (op === ">") return { range: { [manticoreField]: { gt: value } } };
  if (op === "<") return { range: { [manticoreField]: { lt: value } } };
  return null;
}

// Tokenizer for filter expressions
function tokenize(str) {
  const tokens = [];
  let i = 0;
  while (i < str.length) {
    if (/\s/.test(str[i])) { i++; continue; }
    if (str[i] === "(") { tokens.push({ type: "LPAREN" }); i++; continue; }
    if (str[i] === ")") { tokens.push({ type: "RPAREN" }); i++; continue; }

    // AND / OR keywords
    const upper = str.slice(i).toUpperCase();
    if (upper.startsWith("AND") && (i + 3 >= str.length || /[\s(]/.test(str[i + 3]))) {
      tokens.push({ type: "AND" }); i += 3; continue;
    }
    if (upper.startsWith("OR") && (i + 2 >= str.length || /[\s(]/.test(str[i + 2]))) {
      tokens.push({ type: "OR" }); i += 2; continue;
    }

    // condition: field op value
    const condMatch = str.slice(i).match(/^(\w+)\s*(>=|<=|!=|=|>|<)\s*("[^"]*"|'[^']*'|\S+)/);
    if (condMatch) {
      tokens.push({ type: "COND", field: condMatch[1], op: condMatch[2], value: condMatch[3] });
      i += condMatch[0].length;
      continue;
    }

    // skip unknown char
    i++;
  }
  return tokens;
}

// Recursive descent parser: expr = andExpr ( OR andExpr )*
// andExpr = atom ( AND atom )*
// atom = COND | LPAREN expr RPAREN
function parseExpr(tokens, pos) {
  let [left, nextPos] = parseAndExpr(tokens, pos);
  if (!left) return [null, nextPos];

  const orParts = [left];
  while (nextPos < tokens.length && tokens[nextPos].type === "OR") {
    const [right, np] = parseAndExpr(tokens, nextPos + 1);
    if (right) orParts.push(right);
    nextPos = np;
  }

  if (orParts.length === 1) return [orParts[0], nextPos];
  return [{ bool: { should: orParts } }, nextPos];
}

function parseAndExpr(tokens, pos) {
  let [left, nextPos] = parseAtom(tokens, pos);
  if (!left) return [null, nextPos];

  const andParts = [left];
  while (nextPos < tokens.length && (tokens[nextPos].type === "AND" || tokens[nextPos].type === "COND" || tokens[nextPos].type === "LPAREN")) {
    if (tokens[nextPos].type === "AND") nextPos++;
    const [right, np] = parseAtom(tokens, nextPos);
    if (!right) break;
    andParts.push(right);
    nextPos = np;
  }

  if (andParts.length === 1) return [andParts[0], nextPos];
  return [{ bool: { must: andParts } }, nextPos];
}

function parseAtom(tokens, pos) {
  if (pos >= tokens.length) return [null, pos];

  if (tokens[pos].type === "LPAREN") {
    const [expr, nextPos] = parseExpr(tokens, pos + 1);
    const closePos = nextPos < tokens.length && tokens[nextPos].type === "RPAREN" ? nextPos + 1 : nextPos;
    return [expr, closePos];
  }

  if (tokens[pos].type === "COND") {
    const { field, op, value } = tokens[pos];
    const cond = filterToCondition(field, op, value);
    return [cond, pos + 1];
  }

  return [null, pos + 1];
}

function parseFilterString(str) {
  const tokens = tokenize(str);
  if (tokens.length === 0) return null;

  // Fast path: all conditions, no OR/parens (common case) -> flat array for bool.filter
  const hasGrouping = tokens.some(t => t.type === "OR" || t.type === "LPAREN");
  if (!hasGrouping) {
    const conditions = [];
    for (const t of tokens) {
      if (t.type === "COND") {
        const cond = filterToCondition(t.field, t.op, t.value);
        if (cond) conditions.push(cond);
      }
    }
    return conditions.length > 0 ? conditions : null;
  }

  // Full parse for OR / grouping
  const [result] = parseExpr(tokens, 0);
  return result ? [result] : null;
}

function parseFilter(filter) {
  if (!filter) return null;

  // Structured format: array of { field, op, value }
  if (Array.isArray(filter)) {
    const conditions = [];
    for (const f of filter) {
      if (!f || !f.field || !f.op || f.value === undefined || f.value === "") continue;
      const cond = filterToCondition(f.field, f.op, f.value);
      if (cond) conditions.push(cond);
    }
    return conditions.length > 0 ? conditions : null;
  }

  if (typeof filter === "string") {
    return parseFilterString(filter);
  }

  return null;
}

function buildMatchQuery(q) {
  if (!q || !q.trim()) return null;

  return q.trim();
}

export async function searchTweets(q, { filter, sort, limit, offset }) {
  const query = { bool: {} };

  const matchStr = buildMatchQuery(q);
  if (matchStr) {
    query.bool.must = [{ query_string: matchStr }];
  }

  const filterConditions = parseFilter(filter);
  if (filterConditions) {
    query.bool.filter = filterConditions;
  }

  if (!matchStr && !filterConditions) {
    return { hits: [], processingTimeMs: 0, estimatedTotalHits: 0 };
  }

  let sortArr;
  if (sort === "likes") {
    sortArr = [{ like_count: "desc" }];
  } else if (sort === "newest") {
    sortArr = [{ created_at_ts: "desc" }];
  } else if (sort === "oldest") {
    sortArr = [{ created_at_ts: "asc" }];
  }

  const body = {
    index: "tweets",
    query: matchStr || filterConditions ? query : { match_all: {} },
    limit: limit || 13,
    offset: offset || 0,
    options: {
      fuzzy: 1,
      layouts: "us,ru",
    },
  };

  if (sortArr) body.sort = sortArr;

  if (matchStr) {
    body.highlight = {
      fields: { body: { limit: 0 } },
      pre_tags: "<em>",
      post_tags: "</em>",
    };
  }

  const startTime = Date.now();
  const res = await fetch(MANTICORE + "/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await res.json();
  const processingTimeMs = Date.now() - startTime;

  if (result.error) {
    console.error("Manticore search error:", result.error);
    return { hits: [], processingTimeMs, estimatedTotalHits: 0 };
  }

  const hits = (result.hits?.hits || []).map(hit => {
    const doc = hit._source;
    return {
      id: doc.tweet_id,
      body: hit.highlight?.body?.[0] || doc.body,
      author_id: doc.author_id,
      lang: doc.lang,
      source: doc.source,
      conversation_id: doc.conversation_id,
      reply_to_status_id: doc.reply_to_status_id,
      reply_to_user_id: doc.reply_to_user_id,
      quoting_id: doc.quoting_id,
      like_count: doc.like_count,
      reply_count: doc.reply_count,
      retweet_count: doc.retweet_count,
      quote_count: doc.quote_count,
      views_count: doc.views_count,
      bookmarks_count: doc.bookmarks_count,
      created_at: doc.created_at_ts ? new Date(doc.created_at_ts * 1000).toISOString() : null,
      added_at: doc.added_at_ts ? new Date(doc.added_at_ts * 1000).toISOString() : null,
      has_media: doc.has_media === 1,
      media: doc.media_json || null,
      poll: doc.poll_json || null,
      embed: doc.embed_json || null,
    };
  });

  return {
    hits,
    processingTimeMs,
    estimatedTotalHits: result.hits?.total || 0,
  };
}

export async function searchProfiles(q, { filter, limit, offset }) {
  const query = { bool: {} };

  const matchStr = buildMatchQuery(q);
  if (matchStr) {
    query.bool.must = [{ query_string: matchStr }];
  }

  const filterConditions = parseFilter(filter);
  if (filterConditions) {
    query.bool.filter = filterConditions;
  }

  const body = {
    index: "profiles",
    query: matchStr || filterConditions ? query : { match_all: {} },
    limit: limit || 13,
    offset: offset || 0,
    options: {
      fuzzy: 1,
      layouts: "us,ru",
    },
  };

  if (matchStr) {
    body.highlight = {
      fields: { username: { limit: 0 }, name: { limit: 0 }, bio: { limit: 0 } },
      pre_tags: "<em>",
      post_tags: "</em>",
    };
  }

  const startTime = Date.now();
  const res = await fetch(MANTICORE + "/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await res.json();
  const processingTimeMs = Date.now() - startTime;

  if (result.error) {
    console.error("Manticore search error:", result.error);
    return { hits: [], processingTimeMs, estimatedTotalHits: 0 };
  }

  const hits = (result.hits?.hits || []).map(hit => {
    const doc = hit._source;
    return {
      id: doc.profile_id,
      username: doc.username,
      name: doc.name,
      bio: doc.bio,
      avatar: doc.avatar,
      banner: doc.banner,
      location: doc.location,
      url: doc.url,
      professional_type: doc.professional_type,
      professional_category: doc.professional_category,
      followers: doc.followers,
      following: doc.following,
      likes: doc.likes,
      tweets: doc.tweet_count,
      listed_count: doc.listed_count,
      media_count: doc.media_count,
      created_at: doc.created_at_ts ? new Date(doc.created_at_ts * 1000).toISOString() : null,
      added_at: doc.added_at_ts ? new Date(doc.added_at_ts * 1000).toISOString() : null,
      verified: doc.verified === 1,
      protected: doc.protected_flag === 1,
    };
  });

  return {
    hits,
    processingTimeMs,
    estimatedTotalHits: result.hits?.total || 0,
  };
}
