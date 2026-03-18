const SESSION_STORAGE_KEY = "twittercat_session";
const SESSION_REFRESH_BUFFER_MS = 5 * 60 * 1000;

const MAX_SEARCHES = 20;

let sessionPromise = null;
let currentSession = null;

export function getStoredSession() {
	try {
		const stored = localStorage.getItem(SESSION_STORAGE_KEY);
		if (!stored) return null;

		const session = JSON.parse(stored);
		if (!session.token || !session.expires) return null;

		if (Date.now() >= session.expires - SESSION_REFRESH_BUFFER_MS) {
			localStorage.removeItem(SESSION_STORAGE_KEY);
			return null;
		}

		if (typeof session.searchCount !== "number") session.searchCount = 0;

		if (session.searchCount >= MAX_SEARCHES) {
			localStorage.removeItem(SESSION_STORAGE_KEY);
			return null;
		}

		return session;
	} catch {
		localStorage.removeItem(SESSION_STORAGE_KEY);
		return null;
	}
}

function storeSession(session) {
	localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
	currentSession = session;
}

export function incrementSearchCount() {
	if (currentSession) {
		currentSession.searchCount = (currentSession.searchCount || 0) + 1;
		storeSession(currentSession);
	}
}

function showInterstitial() {
	let interstitial = document.querySelector(".cap-loading-indicator");
	if (interstitial) return interstitial;

	interstitial = document.createElement("div");
	interstitial.className = "cap-loading-indicator";

  const container = document.createElement("div");
  container.innerHTML = `<style>@keyframes spin {to{transform:rotate(360deg)}}</style>
    <svg style="animation:spin .7s linear infinite" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>
    <span style="font-weight:500">making sure you're not a bot!</span>
    <span class="desc">this might take a few seconds</span>
  `;

	interstitial.appendChild(container);
	document.body.appendChild(interstitial);

	return interstitial;
}

function hideInterstitial() {
	const interstitial = document.querySelector(".cap-loading-indicator");
	if (interstitial) {
		interstitial.remove();
	}
}

async function createNewSession(apiUrl, showUI = true) {
	if (showUI) {
		showInterstitial();
	}

	try {
		const cap = new window.Cap({
			apiEndpoint: "https://cap.tiago.zip/c18a824a18/",
		});

		const { token: capToken } = await cap.solve();

		const response = await fetch(`${apiUrl}/cap/session`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ capToken }),
		});

		const result = await response.json();

		if (!result.success || !result.sessionToken) {
			throw new Error(result.error || "Failed to create session");
		}

		const session = {
			token: result.sessionToken,
			expires: result.expires,
			searchCount: 0,
		};

		storeSession(session);

		return session;
	} finally {
		if (showUI) {
			hideInterstitial();
		}
	}
}

export async function ensureSession(apiUrl) {
	if (
		currentSession &&
		Date.now() < currentSession.expires - SESSION_REFRESH_BUFFER_MS
	) {
		if ((currentSession.searchCount || 0) >= MAX_SEARCHES) {
			invalidateSession();
		} else {
			return currentSession.token;
		}
	}

	const stored = getStoredSession();
	if (stored) {
		currentSession = stored;
		return stored.token;
	}

	if (sessionPromise) {
		showInterstitial();
		try {
			const session = await sessionPromise;
			if (session) {
				return session.token;
			}
		} finally {
			hideInterstitial();
		}
	}

	sessionPromise = createNewSession(apiUrl, true);
	try {
		const session = await sessionPromise;
		return session.token;
	} finally {
		sessionPromise = null;
	}
}

export function startSessionCreation(apiUrl) {
	const stored = getStoredSession();
	if (stored) {
		currentSession = stored;
		return;
	}

	if (!sessionPromise) {
		sessionPromise = createNewSession(apiUrl, false)
			.catch(() => {
				return null;
			})
			.finally(() => {
				sessionPromise = null;
			});
	}
}

export function isCreatingSession() {
	return sessionPromise !== null;
}

export function getSessionToken() {
	if (
		currentSession &&
		Date.now() < currentSession.expires - SESSION_REFRESH_BUFFER_MS
	) {
		return currentSession.token;
	}

	const stored = getStoredSession();
	if (stored) {
		currentSession = stored;
		return stored.token;
	}

	return null;
}

export function invalidateSession() {
	currentSession = null;
	localStorage.removeItem(SESSION_STORAGE_KEY);
}

export async function waitForPendingSession() {
	if (sessionPromise) {
		await sessionPromise;
	}
}
