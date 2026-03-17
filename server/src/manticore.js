const MANTICORE = process.env.MANTICORE_URL || "http://localhost:9308";

// Parse meilisearch-style filter string into Manticore JSON filter
function parseFilter(filterStr) {
  if (!filterStr) return null;

  // Field name mapping (meilisearch field -> manticore field)
  const fieldMap = {
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
  };

  const allowedFields = new Set(Object.keys(fieldMap));
  const numericFields = new Set([
    "like_count", "reply_count", "retweet_count", "views_count",
    "bookmarks_count", "has_media", "created_at", "added_at",
  ]);

  const conditions = [];

  // Split by AND (case insensitive)
  const parts = filterStr.split(/\s+AND\s+/i);

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    // Match: field op value
    const match = trimmed.match(/^(\w+)\s*(>=|<=|!=|=|>|<)\s*(.+)$/);
    if (!match) continue;

    const [, field, op, rawValue] = match;
    if (!allowedFields.has(field)) continue;

    const manticoreField = fieldMap[field];
    let value = rawValue.trim().replace(/^["']|["']$/g, "");

    // Convert booleans
    if (value === "true") value = 1;
    else if (value === "false") value = 0;
    else if (numericFields.has(field)) value = Number(value);

    if (op === "=") {
      conditions.push({ equals: { [manticoreField]: value } });
    } else if (op === ">=") {
      conditions.push({ range: { [manticoreField]: { gte: value } } });
    } else if (op === "<=") {
      conditions.push({ range: { [manticoreField]: { lte: value } } });
    } else if (op === ">") {
      conditions.push({ range: { [manticoreField]: { gt: value } } });
    } else if (op === "<") {
      conditions.push({ range: { [manticoreField]: { lt: value } } });
    } else if (op === "!=") {
      conditions.push({ not: { equals: { [manticoreField]: value } } });
    }
  }

  return conditions.length > 0 ? conditions : null;
}

function buildMatchQuery(q) {
  if (!q || !q.trim()) return null;
  // Manticore handles quoted phrases natively in match queries
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

  // If no query and no filter, return empty
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
