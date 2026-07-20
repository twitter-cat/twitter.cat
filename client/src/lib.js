import { decodeMultiStream } from "@msgpack/msgpack"
import { useEffect, useRef, useState } from "preact/hooks"

export const DAY = 86400000
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
export const MONTHS_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const API_BASE = import.meta.env.PROD
  ? "https://kite.twitter.cat"
  : import.meta.env.VITE_API_BASE || "http://localhost:3399"
export const BLUE = "#1ea1f1"
export const GREEN = "#33cc66"
export const RED = "#ed5ea6"
export const FONT_BODY =
  "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

export const today = () => new Date(new Date().setHours(0, 0, 0, 0))
export const dayStart = (offset) => new Date(today().getTime() - offset * DAY)

const scaled = (n, scale, suffix, maxDec) => {
  const m = n / scale
  const am = Math.abs(m)
  const dec = am >= 100 ? 0 : am >= 10 ? Math.min(1, maxDec) : maxDec
  return `${+m.toFixed(dec)}${suffix}`
}

export const fmtNum = (n) => {
  const abs = Math.abs(n)
  if (abs >= 1e12) return scaled(n, 1e12, "T", 2)
  if (abs >= 1e9) return scaled(n, 1e9, "B", 2)
  if (abs >= 1e6) return scaled(n, 1e6, "M", 1)
  if (abs >= 100000) return `${Math.round(n / 1e3)}k`
  if (abs >= 10000) return scaled(n, 1e3, "k", 1)
  return Math.round(n).toLocaleString("en-US")
}

export const relTime = (ts) => {
  const date = new Date(ts)
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 0) return "now"
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d`
  const w = Math.floor(d / 7)
  if (w < 4) return `${w}w`
  const sameYear = date.getFullYear() === new Date().getFullYear()
  return date.toLocaleDateString(
    undefined,
    sameYear
      ? { month: "short", day: "numeric" }
      : { month: "short", day: "numeric", year: "numeric" },
  )
}

export const fmtCount = (n) => {
  n = +n || 0
  if (n < 10000) return n.toLocaleString("en-US")
  if (n < 1e6) return `${Math.floor(n / 1000)}k`
  if (n < 1e9) return `${+(n / 1e6).toFixed(n < 1e7 ? 1 : 0)}M`
  if (n < 1e12) return `${+(n / 1e9).toFixed(1)}B`
  return `${+(n / 1e12).toFixed(1)}T`
}

export const SESSION_KEY = "tcat_session"
export const sessionToken = () => {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || "null")
    return s?.token && s.expires > Date.now() ? s.token : ""
  } catch {
    return ""
  }
}
export const authHeaders = () => {
  const t = sessionToken()
  return t ? { Authorization: `Bearer ${t}` } : {}
}
export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {}
  window.dispatchEvent(new Event("tcat:unauthorized"))
}

export function useDashboard({ q, from, to, author, session }) {
  const [state, setState] = useState({ manifest: null, panes: {}, loading: true })
  const tok = useRef(0)
  const fromT = from.getTime()
  const toT = to.getTime()
  const idle = !q || !session
  useEffect(() => {
    const id = ++tok.current
    if (idle) {
      setState({ manifest: null, panes: {}, loading: false })
      return
    }
    setState({ manifest: null, panes: {}, loading: true })
    const ac = new AbortController()
    const stop = () => {
      if (id === tok.current) setState((s) => ({ ...s, loading: false }))
      ac.abort()
    }
    ;(async () => {
      try {
        const res = await fetch(`${API_BASE}/api/stream`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            q,
            from: fromT,
            to: toT + DAY,
            session: sessionToken(),
            ...(author ? { author } : {}),
          }),
          signal: ac.signal,
        })
        if (!res.ok || !res.body) {
          if (res.status === 401) clearSession()
          stop()
          return
        }
        for await (const msg of decodeMultiStream(res.body)) {
          if (id !== tok.current) break
          if (msg.ev === "manifest") setState((s) => ({ ...s, manifest: msg.data }))
          else if (msg.ev === "pane")
            setState((s) => ({ ...s, panes: { ...s.panes, [msg.data.id]: msg.data.data } }))
          else if (msg.ev === "done" || msg.ev === "error") break
        }
      } catch {}
      stop()
    })()
    return () => ac.abort()
  }, [q, fromT, toT, author, session])
  return state
}

export function paneUrl(paneId, base, extra) {
  return `${API_BASE}/api/pane?${new URLSearchParams({ pane: paneId, ...base, ...extra }).toString()}`
}
