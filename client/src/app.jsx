import Cap from "cap-widget"
import Chart from "chart.js/auto"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "preact/hooks"
import { TimeChart } from "./chart.jsx"
import {
  API_BASE,
  authHeaders,
  BLUE,
  clearSession,
  DAY,
  dayStart,
  fmtCount,
  fmtNum,
  GREEN,
  MONTHS,
  MONTHS_FULL,
  paneUrl,
  relTime,
  SESSION_KEY,
  sessionToken,
  today,
  useDashboard,
} from "./lib.js"

const CAT = {
  blue: "#89b4fa",
  teal: "#94e2d5",
  mauve: "#cba6f7",
  green: "#a6e3a1",
  peach: "#fab387",
  pink: "#f5c2e7",
  yellow: "#f9e2af",
  sky: "#89dceb",
  maroon: "#eba0ac",
  lavender: "#b4befe",
}
const TYPE_COLORS = [CAT.blue, CAT.teal, CAT.mauve]
const PANE_PALETTE = [
  CAT.blue,
  CAT.green,
  CAT.peach,
  CAT.mauve,
  CAT.pink,
  CAT.yellow,
  CAT.sky,
  CAT.teal,
  CAT.maroon,
  CAT.lavender,
]
const fmt = {
  num: fmtNum,
  sent: (v) => `${v > 0 ? "+" : ""}${v}%`,
  rank: (v) => `${v}`,
  text: (v) => v,
}
const labelFor = (f, t) => {
  const crossYr = f.getFullYear() !== t.getFullYear()
  const d = (x) =>
    crossYr
      ? `${MONTHS[x.getMonth()]} ${x.getDate()} '${String(x.getFullYear()).slice(-2)}`
      : `${MONTHS[x.getMonth()]} ${x.getDate()}`
  return f.getTime() === t.getTime() ? d(f) : `${d(f)} - ${d(t)}`
}

const clickProps = (handler) => ({
  role: "button",
  tabIndex: 0,
  onClick: handler,
  onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handler()
    }
  },
})

const Icon = ({ d }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    {d}
  </svg>
)
const I_PLAY = (
  <Icon
    d={
      <path
        d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
        fill="currentColor"
        stroke="none"
      />
    }
  />
)
const I_X = <Icon d={<path d="M18 6l-12 12M6 6l12 12" />} />
const I_CARET = <Icon d={<path d="M6 9l6 6l6 -6" />} />
const SPINNER = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 0 9 9" />
  </svg>
)

function VBadge({ square, verified }) {
  if (square)
    return (
      <svg
        class="vbadge"
        viewBox="0 0 22 22"
        width="15"
        height="15"
        aria-label="Verified organization"
      >
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="vga"
          x1="4.411"
          x2="18.083"
          y1="2.495"
          y2="21.508"
        >
          <stop offset="0" stop-color="#f4e72a" />
          <stop offset=".539" stop-color="#cd8105" />
          <stop offset=".68" stop-color="#cb7b00" />
          <stop offset="1" stop-color="#f4e72a" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="vgb"
          x1="5.355"
          x2="16.361"
          y1="3.395"
          y2="19.133"
        >
          <stop offset="0" stop-color="#f9e87f" />
          <stop offset=".406" stop-color="#e2b719" />
          <stop offset=".989" stop-color="#e2b719" />
        </linearGradient>
        <g clip-rule="evenodd" fill-rule="evenodd">
          <path
            d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
            fill="url(#vga)"
          />
          <path
            d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
            fill="url(#vgb)"
          />
          <path
            d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
            fill="#d18800"
          />
        </g>
      </svg>
    )
  if (verified)
    return (
      <svg class="vbadge" viewBox="0 0 22 22" width="15" height="15" aria-label="Verified">
        <path
          fill="#1da1f2"
          d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
        />
      </svg>
    )
  return null
}

const TW = (d) => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
)
const TW_REPLY = TW(
  "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z",
)
const TW_RT = TW(
  "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z",
)
const TW_LIKE = TW(
  "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z",
)
const TW_VIEW = TW(
  "M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z",
)

const LANG_FLAG = {
  en: "gb",
  es: "es",
  pt: "br",
  ja: "jp",
  fr: "fr",
  de: "de",
  ar: "sa",
  id: "id",
  in: "id",
  ko: "kr",
  tr: "tr",
  it: "it",
  ru: "ru",
  hi: "in",
  th: "th",
  nl: "nl",
  pl: "pl",
  fa: "ir",
  tl: "ph",
  zh: "cn",
  uk: "ua",
  ca: "es",
  vi: "vn",
  he: "il",
  iw: "il",
  sv: "se",
  no: "no",
  da: "dk",
  fi: "fi",
  cs: "cz",
  ro: "ro",
  hu: "hu",
  el: "gr",
  bn: "bd",
  ta: "in",
  ur: "pk",
  ms: "my",
  te: "in",
  mr: "in",
  gu: "in",
  kn: "in",
  ml: "in",
  pa: "in",
  or: "in",
  ne: "np",
  si: "lk",
  et: "ee",
  lv: "lv",
  lt: "lt",
  bg: "bg",
  sr: "rs",
  is: "is",
  am: "et",
  km: "kh",
  eu: "eu",
  gl: "es",
  cy: "gb",
}
const I_MEDIA_SYM = (
  <svg
    viewBox="0 0 24 24"
    width="11"
    height="11"
    fill="none"
    stroke="currentColor"
    stroke-width="2.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)
const LANG_SYM = { und: "?", qst: "…", zxx: "∅", qht: "#", qam: "@", qct: "$", qme: I_MEDIA_SYM }
const CODE_BY_NAME = {
  English: "en",
  Spanish: "es",
  Portuguese: "pt",
  Japanese: "ja",
  French: "fr",
  German: "de",
  Arabic: "ar",
  Indonesian: "id",
  Korean: "ko",
  Turkish: "tr",
  Italian: "it",
  Russian: "ru",
  Hindi: "hi",
  Thai: "th",
  Dutch: "nl",
  Polish: "pl",
  Persian: "fa",
  Tagalog: "tl",
  Chinese: "zh",
  Ukrainian: "uk",
  Catalan: "ca",
  Vietnamese: "vi",
  Hebrew: "he",
  Swedish: "sv",
  Norwegian: "no",
  Danish: "da",
  Finnish: "fi",
  Czech: "cs",
  Romanian: "ro",
  Hungarian: "hu",
  Greek: "el",
  Bengali: "bn",
  Tamil: "ta",
  Urdu: "ur",
  Malay: "ms",
}
const langCode = (item) => item.code || CODE_BY_NAME[item.lang]
const Flag = ({ code }) => {
  const sym = LANG_SYM[code]
  if (sym)
    return (
      <span class="row-flag row-flag-sym" aria-hidden="true">
        {sym}
      </span>
    )
  const cc = LANG_FLAG[code]
  if (!cc) return <span class="row-flag row-flag-none" aria-hidden="true" />
  return <img class="row-flag" src={`/assets/flags/${cc}.svg`} alt="" loading="lazy" />
}

const LANG_COUNTRIES = {
  en: ["US", "GB", "CA", "AU", "IE", "NZ", "ZA", "NG"],
  es: [
    "ES",
    "MX",
    "AR",
    "CO",
    "CL",
    "PE",
    "VE",
    "EC",
    "GT",
    "BO",
    "CU",
    "DO",
    "HN",
    "PY",
    "SV",
    "NI",
    "CR",
    "PA",
    "UY",
  ],
  pt: ["BR", "PT", "AO", "MZ"],
  ja: ["JP"],
  fr: ["FR", "BE", "CH", "CD", "CI", "CM", "SN", "ML", "NE", "BF", "GA", "TD", "MG"],
  de: ["DE", "AT", "CH"],
  ar: [
    "SA",
    "EG",
    "DZ",
    "MA",
    "IQ",
    "SD",
    "SY",
    "YE",
    "TN",
    "JO",
    "LY",
    "AE",
    "LB",
    "KW",
    "OM",
    "QA",
    "BH",
    "PS",
    "MR",
  ],
  id: ["ID"],
  in: ["ID"],
  ko: ["KR", "KP"],
  tr: ["TR"],
  it: ["IT"],
  ru: ["RU", "BY", "KZ", "KG"],
  hi: ["IN"],
  th: ["TH"],
  nl: ["NL"],
  pl: ["PL"],
  fa: ["IR", "AF"],
  tl: ["PH"],
  zh: ["CN", "TW", "HK"],
  uk: ["UA"],
  ca: ["ES"],
  vi: ["VN"],
  he: ["IL"],
  iw: ["IL"],
  sv: ["SE"],
  no: ["NO"],
  da: ["DK"],
  fi: ["FI"],
  cs: ["CZ"],
  ro: ["RO", "MD"],
  hu: ["HU"],
  el: ["GR"],
  bn: ["BD"],
  ta: ["LK"],
  ur: ["PK"],
  ms: ["MY", "BN"],
  et: ["EE"],
  lv: ["LV"],
  lt: ["LT"],
  bg: ["BG"],
  sr: ["RS"],
  is: ["IS"],
  ne: ["NP"],
  si: ["LK"],
  am: ["ET"],
  km: ["KH"],
  te: ["IN"],
  mr: ["IN"],
  gu: ["IN"],
  kn: ["IN"],
  ml: ["IN"],
  pa: ["IN"],
  or: ["IN"],
  hr: ["HR"],
  sk: ["SK"],
  sl: ["SI"],
  mk: ["MK"],
  sq: ["AL"],
  bs: ["BA"],
  ka: ["GE"],
  hy: ["AM"],
  az: ["AZ"],
  kk: ["KZ"],
  uz: ["UZ"],
  my: ["MM"],
  lo: ["LA"],
  ga: ["IE"],
}

let MAP_CACHE = null
let MAP_PROMISE = null
const loadMap = () => {
  if (MAP_CACHE) return Promise.resolve(MAP_CACHE)
  if (!MAP_PROMISE)
    MAP_PROMISE = fetch("/assets/map.svg")
      .then((r) => r.text())
      .then((t) => {
        MAP_CACHE = t
        return t
      })
      .catch(() => {
        MAP_PROMISE = null
        return ""
      })
  return MAP_PROMISE
}

const SRC_ICON = (path, fill) => (
  <svg class="src-icon" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path
      d={path}
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      stroke-width={fill ? 0 : 1.7}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
const SRC_APPLE = SRC_ICON(
  "M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.41-.9-1.75.03-3.37 1.02-4.27 2.59-1.82 3.16-.47 7.84 1.31 10.41.87 1.26 1.91 2.67 3.27 2.62 1.31-.05 1.81-.85 3.4-.85 1.58 0 2.03.85 3.41.82 1.41-.02 2.3-1.28 3.16-2.55.99-1.46 1.4-2.87 1.42-2.94-.03-.01-2.73-1.05-2.76-4.15zM14.6 4.4c.72-.87 1.21-2.08 1.07-3.29-1.04.04-2.3.69-3.04 1.56-.66.77-1.25 2-1.09 3.18 1.16.09 2.34-.59 3.06-1.45z",
  true,
)
const SRC_ANDROID = SRC_ICON(
  "M6 18a1 1 0 0 0 1 1h1v3.5a1.5 1.5 0 0 0 3 0V19h2v3.5a1.5 1.5 0 0 0 3 0V19h1a1 1 0 0 0 1-1V8H6v10zM3.5 8A1.5 1.5 0 0 0 2 9.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 3.5 8zm17 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 20.5 8zM15.53 2.16l1.3-1.3a.5.5 0 0 0-.7-.7l-1.48 1.48A5.96 5.96 0 0 0 12 1c-.96 0-1.86.22-2.66.62L7.87.14a.5.5 0 1 0-.7.7l1.3 1.31A5.99 5.99 0 0 0 6 7h12c0-2.02-1-3.8-2.47-4.84zM10 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
  true,
)
const SRC_WEB = SRC_ICON(
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 0c2.5 2.5 2.5 15.5 0 18m0-18C9.5 5.5 9.5 18.5 12 21M3.5 9h17M3.5 15h17",
  false,
)
const SRC_DECK = SRC_ICON("M4 5h7v14H4zM13 5h7v6h-7zM13 13h7v6h-7z", false)
const SRC_APP = SRC_ICON(
  "M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM4 9h16M9 4v5",
  false,
)
const sourceIcon = (label) => {
  const s = (label || "").toLowerCase()
  if (/iphone|ipad|ios|\bmac\b|macos/.test(s)) return SRC_APPLE
  if (/android/.test(s)) return SRC_ANDROID
  if (/web|browser/.test(s)) return SRC_WEB
  if (/tweetdeck|deck/.test(s)) return SRC_DECK
  return SRC_APP
}

function Seg({ cls, options, value, onChange }) {
  const ref = useRef(null)
  const ind = useRef(null)
  useLayoutEffect(() => {
    const c = ref.current
    const active = c?.querySelector(".active")
    if (!active || !ind.current) return
    ind.current.style.opacity = "1"
    ind.current.style.width = `${active.offsetWidth}px`
    ind.current.style.transform = `translateX(${active.offsetLeft}px)`
  })
  return (
    <div class={cls} ref={ref}>
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          class={o.value === value ? "active" : ""}
          onClick={() => onChange?.(o.value)}
        >
          <span>{o.label}</span>
        </button>
      ))}
      <span class="ind" ref={ind}></span>
    </div>
  )
}

const Skel = ({ w = "100%", h = 12, r = 6, m, cls }) => (
  <span
    class={`skel${cls ? ` ${cls}` : ""}`}
    style={`width:${w};height:${h}px;border-radius:${r}px${m ? `;margin:${m}` : ""}`}
  />
)
const BarsSkel = ({ n = 7, h = 34 }) => (
  <div class="skel-rows">
    {Array.from({ length: n }, (_, i) => (
      <Skel key={i} h={h} />
    ))}
  </div>
)
const SKEL_ROWS = { topics: 14, languages: 9, sources: 10, communities: 12 }
const TILE_SKEL = <Skel w="58px" h={26} r={7} m="8px 0" />
const FEED_SKEL_W = ["96%", "78%", "62%"]
const FeedSkel = () => (
  <>
    {Array.from({ length: 6 }, (_, i) => (
      <div class="tweet skel-card" key={i}>
        <div class="tweet-head">
          <Skel cls="avatar" w="40px" h={40} r={20} />
          <div class="who">
            <Skel w="130px" h={14} />
            <Skel w="90px" h={14} />
          </div>
        </div>
        <p class="text">
          {FEED_SKEL_W.slice(0, (i % 3) + 1).map((w, j) => (
            <Skel key={j} w={w} h={13} m={j ? "7px 0 0" : 0} />
          ))}
        </p>
        <div class="meta">
          {Array.from({ length: 4 }, (_, j) => (
            <Skel key={j} w="34px" h={12} />
          ))}
        </div>
      </div>
    ))}
  </>
)

function Avatar({ src, name, username, square, cls = "avatar" }) {
  const c = `${cls}${square ? " sq" : ""}`
  const [stage, setStage] = useState(src ? 0 : username ? 1 : 2)
  if (stage >= 2)
    return <div class={`${c} avph`}>{(name || "").trim().charAt(0).toUpperCase() || "?"}</div>
  const url = stage === 0 ? src : `${API_BASE}/api/avfetch?u=${encodeURIComponent(username)}`
  return (
    <img
      class={c}
      src={url}
      alt={name || username || "avatar"}
      loading="lazy"
      referrerpolicy="no-referrer"
      onError={() => setStage(stage === 0 && username ? 1 : 2)}
    />
  )
}

function OdoDigit({ d, delay }) {
  const [pos, setPos] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setPos(d), 20)
    return () => clearTimeout(t)
  }, [d])
  return (
    <span class="odo-d">
      <span
        class="odo-reel"
        style={`transform:translateY(${-pos * 10}%);transition-delay:${delay}ms`}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  )
}
function Odometer({ value, baseDelay = 0 }) {
  const chars = String(value).split("")
  let di = 0
  return (
    <span class="odo">
      {chars.map((ch, i) =>
        /[0-9]/.test(ch) ? (
          <OdoDigit key={i} d={+ch} delay={baseDelay + di++ * 45} />
        ) : (
          <span class="odo-static" key={i}>
            {ch}
          </span>
        ),
      )}
    </span>
  )
}

function StatTiles({ p, data, sentiment, metric, onMetric, loading }) {
  const values = data ? data.values : {}
  const prev = data ? data.prev : {}
  return (
    <div class="top">
      {p.metrics.map((m, mi) => {
        const key = m.key
        let valNode
        let change = null
        let cls = ""
        if (key === "sentiment") {
          const sv = sentiment ? sentiment.avg : null
          const pv = sentiment ? sentiment.prev : null
          valNode = sv == null ? (loading ? TILE_SKEL : "0%") : fmt.sent(sv)
          if (sv != null) cls = sv > 0 ? "pos" : sv < 0 ? "neg" : ""
          if (sv != null && pv != null) {
            const d = +(sv - pv).toFixed(1)
            if (d !== 0)
              change = (
                <span class={`change ${d > 0 ? "up" : "down"}`}>
                  {d > 0 ? "+" : "-"}
                  {Math.abs(d)}
                </span>
              )
          }
        } else if (!data) {
          valNode = loading ? TILE_SKEL : fmt.num(0)
        } else if (key === "bots") {
          const v = +values.bots || 0
          valNode = `${v}%`
          cls = v >= 8 ? "neg" : ""
        } else {
          const v = +values[key] || 0
          const pp = +prev[key] || 0
          valNode = fmt.num(v)
          if (v > 0 && pp <= 0) change = <span class="change up"></span>
          else if (pp > 0) {
            const delta = Math.round(((v - pp) / pp) * 100)

            if (Math.abs(delta) > 9999) {
              change = <span class="change up"></span>
            } else if (delta !== 0) {
              change = (
                <span class={`change ${delta > 0 ? "up" : "down"}`}>
                  {delta > 0 ? "+" : "-"}
                  {Math.abs(delta)}%
                </span>
              )
            }
          }
        }

        return (
          <div
            class={`point${key === metric ? " active" : ""}`}
            key={key}
            {...clickProps(() => onMetric(key))}
          >
            <p class={cls}>
              {typeof valNode === "string" ? (
                <Odometer value={valNode} baseDelay={mi * 110} />
              ) : (
                valNode
              )}
            </p>
            <small>
              {m.label} {change}
            </small>
          </div>
        )
      })}
    </div>
  )
}

const fmtPct = (v) => (v == null ? "" : `${v}%`)

function Trend({ trend, sentiment, metric, q, compares, compareData }) {
  const isSent = metric === "sentiment"
  const isBots = metric === "bots"
  const labels = isSent ? sentiment?.series.labels || [] : trend?.labels || []
  const primaryVals = isSent ? sentiment?.series.sentiment || [] : trend?.series[metric] || []
  const signMode = isSent && !compares.length
  const lines = [
    {
      values: primaryVals,
      color: signMode ? GREEN : BLUE,
      label: q,
      signColor: signMode,
    },
  ]
  for (const c of compares) {
    const cd = compareData[c.term]
    const arr = cd?.series?.[metric]
    if (cd?.labels && arr) {
      const m = new Map(cd.labels.map((l, i) => [l, arr[i]]))
      lines.push({
        values: labels.map((l) => (m.has(l) ? m.get(l) : isSent || isBots ? null : 0)),
        color: c.color,
        label: c.term,
      })
    } else {
      lines.push({ values: [], color: c.color, label: c.term })
    }
  }
  return (
    <div class="graph">
      <TimeChart
        labels={labels}
        lines={lines}
        beginZero={!isSent}
        valFmt={isSent ? fmt.sent : isBots ? fmtPct : fmtNum}
        yRange={isSent ? [-100, 100] : isBots ? [0, 100] : null}
        onSelect={window.__tcatSelect}
      />
    </div>
  )
}

const CMP_COLORS = [CAT.peach, CAT.mauve, CAT.green, CAT.pink]

function CompareBar({ primary, compares, onAdd, onRemove }) {
  const [adding, setAdding] = useState(false)
  const [val, setVal] = useState("")
  const nextColor = CMP_COLORS.find((c) => !compares.some((x) => x.color === c)) || CMP_COLORS[0]
  const submit = () => {
    onAdd(val)
    setVal("")
    setAdding(false)
  }
  return (
    <div class="compare-bar">
      <span class="cmp-item">
        <i style={`background:${BLUE}`} />
        {primary}
      </span>
      {compares.map((c) => (
        <span class="cmp-item" key={c.term}>
          <i style={`background:${c.color}`} />
          {c.term}
          <button type="button" class="cmp-rm" onClick={() => onRemove(c.term)}>
            {I_X}
          </button>
        </span>
      ))}
      {compares.length < 4 ? (
        <span
          class={`cmp-item cmp-new${adding ? " adding" : ""}`}
          {...(adding ? {} : clickProps(() => setAdding(true)))}
        >
          <i style={adding ? `background:${nextColor}` : undefined} />
          {adding ? (
            <input
              class="cmp-input"
              autofocus
              value={val}
              placeholder="type a term…"
              onInput={(e) => setVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit()
                if (e.key === "Escape") setAdding(false)
              }}
              onBlur={() => setAdding(false)}
            />
          ) : (
            <span class="cmp-hint">type a term…</span>
          )}
        </span>
      ) : null}
      <span class="cmp-brand" aria-label="twitter.cat">
        {LOGO}
        <span class="cmp-brand-txt">twitter.cat</span>
      </span>
    </div>
  )
}

function Table({ p, rows, loading, onAction }) {
  const def =
    p.defaultSort ||
    (p.columns.find((c) => c.sortable)
      ? { key: p.columns.find((c) => c.sortable).key, dir: -1 }
      : null)
  const [sort, setSort] = useState(def)
  const [expanded, setExpanded] = useState(false)
  const sorted = useMemo(() => {
    const r = [...(rows || [])]
    if (sort) r.sort((a, b) => sort.dir * ((+a[sort.key] || 0) - (+b[sort.key] || 0)))
    return r
  }, [rows, sort])
  const capped = p.cap && !expanded && sorted.length > p.cap
  const visible = capped ? sorted.slice(0, p.cap) : sorted
  const click = (key) =>
    setSort((s) => (s && s.key === key ? { key, dir: -s.dir } : { key, dir: -1 }))
  const cell = (row, c) => {
    if (c.kind === "author")
      return (
        <div class="who-cell">
          <Avatar src={row.avatar} name={row.name} username={row.username} square={row.square} />
          <span class="nm">
            <span class="nm-top">
              <b>{row.name}</b>
              <VBadge square={row.square} verified={row.verified} />
            </span>
            <em>@{row.username}</em>
          </span>
        </div>
      )
    if (c.kind === "num") return fmt.num(+row[c.key] || 0)
    if (c.kind === "rank") return <span class="rk">{row[c.key]}</span>
    return row[c.key]
  }
  const tbl = (
    <table class="authors-table">
      <thead>
        <tr>
          {p.columns.map((c) => (
            <th
              key={c.key}
              class={`${c.kind === "num" || c.kind === "rank" ? "" : "lft"}${c.sortable ? " sortable" : ""}${sort && sort.key === c.key ? " sorted" : ""}`}
              onClick={c.sortable ? () => click(c.key) : undefined}
            >
              {c.label}
              {c.sortable && sort && sort.key === c.key ? (
                <i class={`caret${sort.dir < 0 ? "" : " up"}`}>{I_CARET}</i>
              ) : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.length ? (
          visible.map((row, i) => (
            <tr
              class={`author-row${p.rowAction ? " clickable" : ""}`}
              key={row.authorId || row.username || i}
              onClick={p.rowAction ? () => onAction(p.rowAction.action, row) : undefined}
            >
              {p.columns.map((c) => (
                <td
                  key={c.key}
                  class={`${c.kind === "num" || c.kind === "rank" ? "num" : ""}${sort && sort.key === c.key ? " hl" : ""}`}
                >
                  {cell(row, c)}
                </td>
              ))}
            </tr>
          ))
        ) : loading ? (
          Array.from({ length: 8 }, (_, i) => (
            <tr key={i}>
              {p.columns.map((c) =>
                c.kind === "author" ? (
                  <td key={c.key}>
                    <div class="who-cell">
                      <Skel cls="avatar" w="34px" h={34} r={17} />
                      <span class="nm">
                        <Skel w={`${90 + ((i * 13) % 60)}px`} h={12} />
                        <Skel w={`${60 + ((i * 7) % 40)}px`} h={10} m="5px 0 0" />
                      </span>
                    </div>
                  </td>
                ) : c.kind === "num" || c.kind === "rank" ? (
                  <td key={c.key} class="num">
                    <Skel w={c.kind === "rank" ? "16px" : "40px"} h={12} m="0 0 0 auto" />
                  </td>
                ) : (
                  <td key={c.key}>
                    <Skel w={`${40 + ((i * 11) % 45)}%`} h={12} />
                  </td>
                ),
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colspan={p.columns.length}>
              <p class="empty">no data</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
  if (!p.cap || sorted.length <= p.cap) return tbl
  return (
    <>
      {tbl}
      <button class="reveal-all" type="button" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "show less" : `show all ${sorted.length}`}
      </button>
    </>
  )
}

function AuthorRows({ p, rows, loading, onAction }) {
  const [sort, setSort] = useState(p.defaultSort || { key: "likes", dir: -1 })
  const [expanded, setExpanded] = useState(false)
  const sorted = useMemo(() => {
    const r = [...(rows || [])]
    r.sort((a, b) => sort.dir * ((+a[sort.key] || 0) - (+b[sort.key] || 0)))
    return r
  }, [rows, sort])
  if (!rows)
    return loading ? (
      <div class="atable">
        <div class="atable-head">
          <span />
          <span class="atable-h">tweets</span>
          <span class="atable-h">likes</span>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <div class="atable-row" key={i}>
            <div class="atable-who">
              <Skel cls="avatar" w="40px" h={40} r={20} />
              <span class="atable-nm">
                <Skel w={`${52 + ((i * 7) % 34)}%`} h={13} />
                <Skel w={`${30 + ((i * 5) % 20)}%`} h={11} m="6px 0 0" />
              </span>
            </div>
            <Skel w="28px" h={13} m="0 0 0 auto" />
            <Skel w="38px" h={13} m="0 0 0 auto" />
          </div>
        ))}
      </div>
    ) : (
      <p class="empty">no data</p>
    )
  if (!rows.length) return <p class="empty">no authors</p>
  const capped = p.cap && !expanded && sorted.length > p.cap
  const visible = capped ? sorted.slice(0, p.cap) : sorted
  const click = (key) => setSort((s) => (s.key === key ? { key, dir: -s.dir } : { key, dir: -1 }))
  const hd = (key, label) => (
    <button
      type="button"
      class={`atable-h${sort.key === key ? " sorted" : ""}`}
      onClick={() => click(key)}
    >
      {label}
      {sort.key === key ? <i class={`caret${sort.dir < 0 ? "" : " up"}`}>{I_CARET}</i> : null}
    </button>
  )
  return (
    <div class="atable">
      <div class="atable-head">
        <span />
        {hd("posts", "tweets")}
        {hd("likes", "likes")}
      </div>
      {visible.map((row) => (
        <div
          class="atable-row clickable"
          key={row.authorId || row.username}
          {...clickProps(() => onAction("filterAuthor", row))}
        >
          <div class="atable-who">
            <Avatar src={row.avatar} name={row.name} username={row.username} square={row.square} />
            <span class="atable-nm">
              <span class="nm-top">
                <b>{row.name}</b>
                <VBadge square={row.square} verified={row.verified} />
              </span>
              <em>@{row.username}</em>
            </span>
          </div>
          <span class={`atable-n${sort.key === "posts" ? " hl" : ""}`}>
            {fmtNum(+row.posts || 0)}
          </span>
          <span class={`atable-n${sort.key === "likes" ? " hl" : ""}`}>
            {fmtNum(+row.likes || 0)}
          </span>
        </div>
      ))}
      {p.cap && sorted.length > p.cap ? (
        <button class="reveal-all" type="button" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "show less" : `show all ${sorted.length}`}
        </button>
      ) : null}
    </div>
  )
}

function Bars({ p, items, loading, onAction }) {
  const tabs = p.tabs
  const [tab, setTab] = useState(tabs ? tabs[0].value : "")
  if (!items)
    return loading ? (
      <>
        {tabs ? <Skel w="170px" h={21} m="0 0 14px" /> : null}
        <BarsSkel n={SKEL_ROWS[p.id] || 7} />
      </>
    ) : (
      <p class="empty">no data</p>
    )
  const list = (tabs ? items[tab] : items) || []
  const act = p.itemAction
  const max = Math.max(1, ...list.map((t) => t[p.valueKey]))
  const colored = p.id === "communities"
  return (
    <>
      {tabs ? <Seg cls="seg topic-tabs" value={tab} onChange={setTab} options={tabs} /> : null}
      {list.length ? (
        <div class="term-list">
          {list.map((t, i) => {
            const label = t[p.labelKey]
            const handle = typeof label === "string" && label[0] === "@" ? label.slice(1) : null
            const color = colored ? PANE_PALETTE[i % PANE_PALETTE.length] : null
            const lead =
              p.id === "languages" ? (
                <Flag code={langCode(t)} />
              ) : p.id === "sources" ? (
                sourceIcon(label)
              ) : handle ? (
                <Avatar username={handle} name={label} />
              ) : null
            return (
              <div
                class={`term-row${act ? " clickable" : ""}`}
                key={t.code || label}
                {...(act ? clickProps(() => onAction(act.action, t[act.valueKey])) : {})}
              >
                <i
                  class="fill"
                  style={`width:${Math.round((t[p.valueKey] / max) * 100)}%${color ? `;background-color:${color}2e` : ""}`}
                />
                <span class="term-left">
                  {lead}
                  <span class="t">{label}</span>
                </span>
                <span class="n">{fmtNum(t[p.valueKey])}</span>
              </div>
            )
          })}
        </div>
      ) : (
        <p class="empty">nothing here</p>
      )}
    </>
  )
}

const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
function Heatmap({ cells, loading }) {
  if (!cells && !loading) return <p class="empty">no data</p>
  const skel = !cells
  const max = skel ? 1 : Math.max(1, ...cells.map((c) => c.count))
  const m = new Map(skel ? [] : cells.map((c) => [c.dow * 100 + c.h, c.count]))
  return (
    <div class={`heatmap${skel ? " hm-skel" : ""}`}>
      {DOW.map((d, di) => (
        <div class="hm-row" key={d}>
          <span class="hm-lbl">{d}</span>
          <div class="hm-cells">
            {Array.from({ length: 24 }, (_, h) => {
              if (skel) return <i key={h} />
              const c = m.get((di + 1) * 100 + h) || 0
              const a = c ? (0.14 + 0.86 * (c / max)).toFixed(3) : 0
              return (
                <i
                  key={h}
                  title={`${d} ${h}:00 · ${fmtNum(c)} tweets`}
                  style={`background:rgba(30,161,241,${a})`}
                />
              )
            })}
          </div>
        </div>
      ))}
      <div class="hm-row hm-axis">
        <span class="hm-lbl" />
        <div class="hm-cells">
          {Array.from({ length: 24 }, (_, h) => (
            <i key={h}>{h % 6 === 0 ? h : ""}</i>
          ))}
        </div>
      </div>
    </div>
  )
}

const CP_MODES = {
  ec: {
    label: "econ / culture",
    xName: "economy",
    yName: "culture",
    xNeg: "left",
    xPos: "right",
    yPos: "traditional",
    yNeg: "progressive",
  },
  tg: {
    label: "populism / globalism",
    xName: "inst. trust",
    yName: "posture",
    xNeg: "establishment",
    xPos: "populist",
    yPos: "nationalist",
    yNeg: "globalist",
  },
}
const CP_STOPS = [
  [0.0, 137, 180, 250, 0],
  [0.18, 137, 180, 250, 0],
  [0.38, 137, 180, 250, 115],
  [0.58, 148, 226, 213, 175],
  [0.78, 249, 226, 175, 225],
  [1.0, 243, 139, 168, 255],
]
const cpLut = (() => {
  const lut = new Uint8ClampedArray(256 * 4)
  for (let i = 0; i < 256; i++) {
    const t = i / 255
    let a = CP_STOPS[0]
    let b = CP_STOPS[CP_STOPS.length - 1]
    for (let s = 0; s < CP_STOPS.length - 1; s++) {
      if (t >= CP_STOPS[s][0] && t <= CP_STOPS[s + 1][0]) {
        a = CP_STOPS[s]
        b = CP_STOPS[s + 1]
        break
      }
    }
    const f = b[0] === a[0] ? 0 : (t - a[0]) / (b[0] - a[0])
    for (let c = 0; c < 4; c++) lut[i * 4 + c] = Math.round(a[c + 1] + (b[c + 1] - a[c + 1]) * f)
  }
  return lut
})()

function Compass({ data, loading }) {
  const [mode, setMode] = useState("ec")
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const [tip, setTip] = useState(null)
  const cellsRef = useRef(new Map())
  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas || !data) return
    const draw = () => {
      const cells = data[mode] || []
      const size = Math.min(wrap.clientWidth, 420)
      if (!size) return
      const dpr = window.devicePixelRatio || 1
      const px = Math.round(size * dpr)
      canvas.width = px
      canvas.height = px
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      const ctx = canvas.getContext("2d")
      const pad = Math.round(16 * dpr)
      const plot = px - pad * 2
      const toPx = (v) => pad + ((v + 100) / 200) * plot
      cellsRef.current = new Map(cells.map((c) => [`${c.x},${c.y}`, c.n]))
      ctx.clearRect(0, 0, px, px)
      const SUB = 6
      const N = 21 * SUB
      let field = new Float32Array(N * N)
      for (const c of cells) {
        const gx = Math.round(((c.x + 100) / 10) * SUB + SUB / 2)
        const gy = Math.round(((100 - c.y) / 10) * SUB + SUB / 2)
        if (gx >= 0 && gx < N && gy >= 0 && gy < N) field[gy * N + gx] += c.n
      }
      const sigma = SUB
      const rad = Math.ceil(sigma * 2.5)
      const kern = new Float32Array(rad * 2 + 1)
      for (let k = -rad; k <= rad; k++) kern[k + rad] = Math.exp(-(k * k) / (2 * sigma * sigma))
      const pass = (src, horiz) => {
        const out = new Float32Array(N * N)
        for (let y = 0; y < N; y++)
          for (let x = 0; x < N; x++) {
            let s = 0
            let w = 0
            for (let k = -rad; k <= rad; k++) {
              const xx = horiz ? x + k : x
              const yy = horiz ? y : y + k
              if (xx < 0 || xx >= N || yy < 0 || yy >= N) continue
              s += src[yy * N + xx] * kern[k + rad]
              w += kern[k + rad]
            }
            out[y * N + x] = w ? s / w : 0
          }
        return out
      }
      field = pass(pass(field, true), false)
      const nz = Array.from(field)
        .filter((v) => v > 0)
        .sort((a, b) => a - b)
      const fmax = nz.length ? nz[Math.min(nz.length - 1, Math.floor(nz.length * 0.95))] : 1
      const img = new ImageData(N, N)
      const d = img.data
      for (let i = 0; i < field.length; i++) {
        const a = Math.min(255, Math.round(Math.min(1, field[i] / (fmax || 1)) ** 0.5 * 255))
        d[i * 4] = cpLut[a * 4]
        d[i * 4 + 1] = cpLut[a * 4 + 1]
        d[i * 4 + 2] = cpLut[a * 4 + 2]
        d[i * 4 + 3] = cpLut[a * 4 + 3]
      }
      const off = document.createElement("canvas")
      off.width = N
      off.height = N
      off.getContext("2d").putImageData(img, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      const half = (plot / 21) * 0.5
      ctx.save()
      ctx.beginPath()
      ctx.rect(pad, pad, plot, plot)
      ctx.clip()
      ctx.drawImage(off, pad - half, pad - half, plot + half * 2, plot + half * 2)
      ctx.restore()
      ctx.strokeStyle = "rgba(255,255,255,0.07)"
      ctx.lineWidth = dpr
      ctx.strokeRect(pad, pad, plot, plot)
      ctx.strokeStyle = "rgba(255,255,255,0.14)"
      ctx.beginPath()
      ctx.moveTo(toPx(0), pad)
      ctx.lineTo(toPx(0), pad + plot)
      ctx.moveTo(pad, toPx(0))
      ctx.lineTo(pad + plot, toPx(0))
      ctx.stroke()
      let sw = 0
      let sx = 0
      let sy = 0
      for (const c of cells) {
        sw += c.n
        sx += c.x * c.n
        sy += c.y * c.n
      }
      if (sw) {
        const cx = toPx(sx / sw)
        const cy = toPx(-sy / sw)
        ctx.strokeStyle = "rgba(255,255,255,0.9)"
        ctx.lineWidth = 1.5 * dpr
        ctx.beginPath()
        ctx.arc(cx, cy, 4 * dpr, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = "rgba(255,255,255,0.9)"
        ctx.beginPath()
        ctx.arc(cx, cy, 1.2 * dpr, 0, Math.PI * 2)
        ctx.fill()
      }
      const M = CP_MODES[mode]
      ctx.font = `${10 * dpr}px ${getComputedStyle(document.body).fontFamily}`
      ctx.textBaseline = "middle"
      ctx.lineWidth = 3 * dpr
      ctx.strokeStyle = "rgba(21,23,26,0.75)"
      ctx.fillStyle = "#9aa0a6"
      ctx.lineJoin = "round"
      const label = (t, x, y, align) => {
        ctx.textAlign = align
        ctx.strokeText(t, x, y)
        ctx.fillText(t, x, y)
      }
      label(M.yPos, px / 2, pad / 2, "center")
      label(M.yNeg, px / 2, px - pad / 2, "center")
      label(M.xNeg, pad + 5 * dpr, toPx(0) - 8 * dpr, "left")
      label(M.xPos, px - pad - 5 * dpr, toPx(0) - 8 * dpr, "right")
    }
    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [data, mode])
  if (!data && !loading) return <p class="empty">no data</p>
  const M = CP_MODES[mode]
  const onMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const size = rect.width
    const pad = 16
    const vx = ((e.clientX - rect.left - pad) / (size - pad * 2)) * 200 - 100
    const vy = -(((e.clientY - rect.top - pad) / (size - pad * 2)) * 200 - 100)
    if (vx < -100 || vx > 100 || vy < -100 || vy > 100) {
      setTip(null)
      return
    }
    const bx = Math.max(-100, Math.min(100, Math.round(vx / 10) * 10))
    const by = Math.max(-100, Math.min(100, Math.round(vy / 10) * 10))
    const n = cellsRef.current.get(`${bx},${by}`) || 0
    const wr = wrapRef.current.getBoundingClientRect()
    setTip({
      x: e.clientX - wr.left,
      y: e.clientY - wr.top,
      label: `${M.xName} ${bx > 0 ? "+" : ""}${bx} · ${M.yName} ${by > 0 ? "+" : ""}${by}`,
      n,
    })
  }
  return (
    <div class="compass" ref={wrapRef}>
      <Seg
        cls="seg topic-tabs"
        value={mode}
        onChange={setMode}
        options={Object.entries(CP_MODES).map(([value, m]) => ({ value, label: m.label }))}
      />
      {data ? (
        <canvas ref={canvasRef} onMouseMove={onMove} onMouseLeave={() => setTip(null)} />
      ) : (
        <span class="skel cp-skel" />
      )}
      {tip ? (
        <div class="lm-tip" style={`left:${tip.x}px;top:${tip.y}px`}>
          {tip.label} <b>{fmtNum(tip.n)}</b>
        </div>
      ) : null}
    </div>
  )
}

function Donut({ p, data, loading }) {
  const ref = useRef(null)
  const chart = useRef(null)
  const keys = p.keys
  const counts = keys.map((k) => (data ? data[k] || 0 : 0))
  const total = counts.reduce((a, c) => a + c, 0)
  useEffect(() => {
    chart.current = new Chart(ref.current, {
      type: "doughnut",
      data: {
        labels: keys,
        datasets: [
          {
            data: [],
            backgroundColor: TYPE_COLORS,
            borderColor: "#16191d",
            borderWidth: 2,
            hoverOffset: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
      },
    })
    return () => chart.current?.destroy()
  }, [])
  useEffect(() => {
    if (chart.current) {
      chart.current.data.datasets[0].data = counts
      chart.current.update()
    }
  }, [data])
  return (
    <div class="types-wrap">
      <div class="donut-box">
        <canvas ref={ref} />
      </div>
      <div class="types-legend">
        {data ? (
          keys.map((k, i) => (
            <div class="legend-row" key={k}>
              <i style={`background:${TYPE_COLORS[i]}`} />
              <span>{k}</span>
              <b>{Math.round((counts[i] / (total || 1)) * 100)}%</b>
            </div>
          ))
        ) : (
          <p class="empty">
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a9 9 0 1 0 9 9" />
              </svg>
            ) : (
              "no data"
            )}
          </p>
        )}
      </div>
    </div>
  )
}

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", "#x27": "'", nbsp: " " }
const decodeEntities = (s) =>
  (s || "").replace(/&(amp|lt|gt|quot|#39|#x27|nbsp);/g, (_, e) => ENT[e])

const LINK_RE = /(https?:\/\/\S+)|((?<![\w@])@\w{1,15})|((?<!\w)#[\p{L}\p{N}_]+)/gu
function linkify(text) {
  if (!text) return null
  text = decodeEntities(text)
  const out = []
  let last = 0
  for (const m of text.matchAll(LINK_RE)) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const tok = m[0]
    const href = m[1]
      ? tok
      : m[2]
        ? `https://x.com/${tok.slice(1)}`
        : `https://x.com/hashtag/${tok.slice(1)}`
    out.push(
      <a key={m.index} href={href} target="_blank" rel="noopener noreferrer nofollow">
        {tok}
      </a>,
    )
    last = m.index + tok.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

const TCO_TAIL = /\s*https?:\/\/t\.co\/[a-z0-9]+\s*$/i
const trimMediaLink = (text) => (text || "").replace(TCO_TAIL, "")

function Media({ media }) {
  const items = (media || []).slice(0, 4)
  if (!items.length) return null
  return (
    <div class={`tweet-media${items.length > 1 ? " tweet-media-grid" : ""}`}>
      {items.map((x, i) =>
        x.type === "video" || x.video ? (
          <div class="video-cell" key={i}>
            <img src={x.url} alt="video thumbnail" loading="lazy" referrerpolicy="no-referrer" />
            <span class="playbtn">{I_PLAY}</span>
          </div>
        ) : (
          <img key={i} src={x.url} alt="tweet media" loading="lazy" referrerpolicy="no-referrer" />
        ),
      )}
      {media.length > 4 ? <div class="media-count-badge">+{media.length - 4}</div> : null}
    </div>
  )
}
function Quoted({ q }) {
  const body = trimMediaLink(q.text).trim()
  return (
    <div class="quoted-tweet">
      <div class="quoted-header">
        <Avatar src={q.avatar} name={q.name} username={q.username} cls="quoted-avatar" />
        <span class="quoted-name">{decodeEntities(q.name)}</span>
        <span class="quoted-username">@{q.username}</span>
      </div>
      {body ? <p class="quoted-body">{linkify(body)}</p> : null}
      {q.media?.length ? (
        <div class="quoted-media">
          <img src={q.media[0].url} alt="tweet media" loading="lazy" referrerpolicy="no-referrer" />
        </div>
      ) : null}
    </div>
  )
}
function Tweet({ t }) {
  const body = trimMediaLink(t.text).trim()
  const open = (e) => {
    if (e.target.closest("a") || window.getSelection().toString()) return
    window.open(`https://x.com/${t.username}/status/${t.id}`, "_blank", "noopener,noreferrer")
  }
  return (
    <article class="tweet" onClick={open}>
      <div class="tweet-head">
        <Avatar src={t.avatar} name={t.name} username={t.username} />
        <div class="who">
          <div class="nm-top">
            <strong>{decodeEntities(t.name)}</strong>
            <VBadge square={t.square} verified={t.verified} />
          </div>
          <span>
            @{t.username} · {relTime(t.ts)}
          </span>
        </div>
      </div>
      {body ? <p class="text">{linkify(body)}</p> : null}
      <Media media={t.media} />
      {t.quoted ? <Quoted q={t.quoted} /> : null}
      <div class="meta">
        <span>
          {TW_REPLY}
          {fmtCount(t.replies)}
        </span>
        <span title={`${fmtCount(t.reposts)} retweets, ${fmtCount(t.quotes)} quotes`}>
          {TW_RT}
          {fmtCount(t.reposts + (t.quotes || 0))}
        </span>
        <span>
          {TW_LIKE}
          {fmtCount(t.likes)}
        </span>
        <span>
          {TW_VIEW}
          {fmtCount(t.views)}
        </span>
      </div>
    </article>
  )
}

const feedItems = (d) => (Array.isArray(d) ? d : (d?.items ?? null))
const feedNext = (d) => (Array.isArray(d) ? null : (d?.next ?? null))
function Feed({ p, base, streamFeed, streamLoading }) {
  const tabCtrl = (p.controls || [])[0]
  const opts = tabCtrl ? tabCtrl.options : []
  const [tab, setTab] = useState("top")
  const [items, setItems] = useState(() => feedItems(streamFeed))
  const [cursor, setCursor] = useState(() => feedNext(streamFeed))
  const [loadingMore, setLoadingMore] = useState(false)
  const sentinel = useRef(null)
  const tok = useRef(0)

  useEffect(() => {
    setTab("top")
    setItems(feedItems(streamFeed))
    setCursor(feedNext(streamFeed))
  }, [streamFeed])

  const fetchPage = (page, forTab, append) => {
    const id = ++tok.current
    setLoadingMore(true)
    const qs = page
      ? new URLSearchParams({ page })
      : new URLSearchParams({
          q: base.q,
          from: base.from,
          to: base.to,
          tab: forTab,
          ...(base.author ? { author: base.author } : {}),
        })
    fetch(`${API_BASE}/api/feed?${qs.toString()}`, { headers: authHeaders() })
      .then((r) => {
        if (r.status === 401) {
          clearSession()
          return null
        }
        return r.json()
      })
      .then((res) => {
        if (id !== tok.current || !res) return
        const next = feedItems(res) || []
        setItems((cur) => (append ? [...(cur || []), ...next] : next))
        setCursor(feedNext(res))
        setLoadingMore(false)
      })
      .catch(() => {
        if (id === tok.current) setLoadingMore(false)
      })
  }

  const switchTab = (t) => {
    if (t === tab) return
    setTab(t)
    if (t === "top") {
      setItems(feedItems(streamFeed))
      setCursor(feedNext(streamFeed))
    } else {
      setItems(null)
      setCursor(null)
      fetchPage(null, t, false)
    }
  }

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const ob = new IntersectionObserver(
      (es) => {
        if (!es[0].isIntersecting || loadingMore || !cursor) return
        fetchPage(cursor, tab, true)
      },
      { rootMargin: "600px" },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [cursor, loadingMore, tab])

  const list = items
  const hasMore = !!cursor
  const showSkel = (list == null || !list.length) && (streamLoading || loadingMore)
  return (
    <section class="preview">
      {tabCtrl ? <Seg cls="seg feed-tabs" value={tab} onChange={switchTab} options={opts} /> : null}
      <div class="feed-list">
        {list?.length ? (
          list.map((t) => <Tweet t={t} key={t.id} />)
        ) : showSkel ? (
          <FeedSkel />
        ) : (
          <p class="empty"></p>
        )}
        {list?.length && hasMore ? (
          <div class="feed-sentinel" ref={sentinel}>
            {loadingMore ? SPINNER : ""}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function Sparkline({ values, color }) {
  if (!values) return null
  const valid = values.filter((v) => v != null && Number.isFinite(v))
  if (valid.length < 2) return null
  const max = Math.max(...valid)
  const min = Math.min(...valid)
  const rng = max - min || 1
  const W = 100
  const H = 28
  const n = Math.max(1, values.length - 1)
  const pts = []
  values.forEach((v, i) => {
    if (v != null && Number.isFinite(v))
      pts.push(`${((i / n) * W).toFixed(1)},${(H - ((v - min) / rng) * H).toFixed(1)}`)
  })
  const x0 = pts[0].split(",")[0]
  const x1 = pts[pts.length - 1].split(",")[0]
  const area = [`${x0},${H}`, ...pts, `${x1},${H}`].join(" ")
  return (
    <svg class="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <polygon points={area} fill={color} fill-opacity="0.4" stroke="none" />
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={color}
        stroke-width="1"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  )
}

function Trending({ items, loading, onAction }) {
  const ranked = useMemo(() => {
    if (!items) return null
    return [...items]
      .filter((t) => t.cur > t.prev)
      .sort((a, b) => b.cur - b.prev - (a.cur - a.prev) || b.count - a.count)
      .slice(0, 12)
  }, [items])
  if (!ranked) return loading ? <BarsSkel n={12} h={36} /> : <p class="empty">no data</p>
  if (!ranked.length) return <p class="empty">nothing accelerating in this window</p>
  return (
    <div class="trend-list">
      {ranked.map((t) => (
        <div
          class="trend-row clickable"
          key={t.term}
          title={`≈${fmtNum(t.count)} tweets · ${t.cur} now vs ${t.prev} prior`}
          {...clickProps(() => onAction?.("addTerm", t.term))}
        >
          <span class="trend-term">{t.term}</span>
          <span class="trend-meta">
            <Sparkline values={t.spark} color={GREEN} />
            <span class={`trend-delta${t.pct == null ? " new" : t.pct < 0 ? " down" : ""}`}>
              {t.pct == null ? "new" : `${t.pct < 0 ? "↓" : "↑"}${Math.abs(t.pct)}%`}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

function Carded({ p, children, ctrl, onCtrl, headerExtra }) {
  return (
    <div class={`card card-${p.id}${p.span === "full" ? " span-full" : ""}`}>
      <div class="card-head">
        <h3>{p.title}</h3>
        {headerExtra}
        {(p.controls || []).map((c) =>
          c.type === "select" ? (
            <select
              key={c.id}
              class="ctrl-select"
              value={ctrl[c.param]}
              onChange={(e) => onCtrl(c.param, e.target.value)}
            >
              {c.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          ) : null,
        )}
      </div>
      <div class="card-body">{children}</div>
    </div>
  )
}

const LANG_PALETTE = [
  CAT.blue,
  CAT.peach,
  CAT.mauve,
  CAT.green,
  CAT.pink,
  CAT.yellow,
  CAT.sky,
  CAT.maroon,
  CAT.lavender,
]
function LangTrend({ data, loading }) {
  if (!data?.cats?.length)
    return <div class="lang-trend">{loading ? <BarsSkel /> : <p class="empty">no data</p>}</div>
  const cats = data.cats.slice(0, 5)
  const lines = cats.map((c, i) => ({ label: c, color: LANG_PALETTE[i], values: data.series[c] }))
  return (
    <div class="lang-trend">
      <TimeChart labels={data.labels} lines={lines} valFmt={fmtNum} />
      <div class="lang-legend">
        {cats.map((c, i) => (
          <span key={c}>
            <i style={`background:${LANG_PALETTE[i]}`} />
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

function LangMap({ data }) {
  const [svg, setSvg] = useState(MAP_CACHE)
  const [tip, setTip] = useState(null)
  const wrapRef = useRef(null)
  useEffect(() => {
    if (!svg) loadMap().then((t) => t && setSvg(t))
  }, [])
  const { css, ccInfo } = useMemo(() => {
    const rows = (data || []).filter((d) => (LANG_COUNTRIES[langCode(d)] || []).length)
    const max = Math.max(1, ...rows.map((d) => d.count || 0))
    const painted = new Map()
    const info = new Map()
    let ci = 0
    for (const d of rows) {
      const code = langCode(d)
      const color = LANG_PALETTE[ci % LANG_PALETTE.length]
      const op = (0.4 + 0.6 * Math.sqrt((d.count || 0) / max)).toFixed(3)
      let did = false
      for (const cc of LANG_COUNTRIES[code]) {
        if (!painted.has(cc)) {
          painted.set(cc, { color, op })
          info.set(cc, { name: d.lang, count: d.count })
          did = true
        }
      }
      if (did && ++ci >= 8) break
    }
    const rules = [...painted.entries()]
      .map(
        ([cc, { color, op }]) => `.lang-map .${cc}.country .st0{fill:${color};fill-opacity:${op}}`,
      )
      .join("")
    return { css: rules, ccInfo: info }
  }, [data])

  const onMove = (e) => {
    const g = e.target.closest?.(".country")
    const cc =
      g && [...g.classList].find((c) => c.length === 2 && c !== "WW" && c === c.toUpperCase())
    const hit = cc && ccInfo.get(cc)
    if (!hit) {
      if (tip) setTip(null)
      return
    }
    const r = wrapRef.current?.getBoundingClientRect()
    if (r) setTip({ x: e.clientX - r.left, y: e.clientY - r.top, name: hit.name, count: hit.count })
  }

  if (!svg)
    return (
      <div class="lang-map">
        <div class="feed-spinner">{SPINNER}</div>
      </div>
    )
  return (
    <div class="lang-map" ref={wrapRef}>
      <style>{css}</style>
      <div
        class="lang-map-canvas"
        onMouseMove={onMove}
        onMouseLeave={() => setTip(null)}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {tip ? (
        <div class="lm-tip" style={`left:${tip.x}px;top:${tip.y}px`}>
          {tip.name} <b>{fmtNum(tip.count)}</b>
        </div>
      ) : null}
    </div>
  )
}

function PanedView({ p, initial, base, loading, onAction }) {
  const [ctrl, setCtrl] = useState(() =>
    Object.fromEntries((p.controls || []).map((c) => [c.param, c.value])),
  )
  const [data, setData] = useState(initial)
  const [busy, setBusy] = useState(false)
  const isLang = p.id === "languages"
  const [lmode, setLmode] = useState("bars")
  const [lseries, setLseries] = useState(null)
  const [lbusy, setLbusy] = useState(false)
  const tok = useRef(0)
  useEffect(() => {
    setLmode("bars")
    setLseries(null)
  }, [base.q, base.from, base.to, base.author])
  const toLang = (mode) => {
    setLmode(mode)
    if (mode === "series" && !lseries) {
      setLbusy(true)
      fetch(paneUrl("languages", base, { mode: "series" }), { headers: authHeaders() })
        .then((r) => {
          if (r.status === 401) {
            clearSession()
            return null
          }
          return r.json()
        })
        .then((d) => {
          if (d) setLseries(d)
          setLbusy(false)
        })
        .catch(() => setLbusy(false))
    }
  }
  useEffect(() => {
    setData(initial)
  }, [initial])
  const onCtrl = (param, value) => {
    setCtrl((c) => ({ ...c, [param]: value }))
    const id = ++tok.current
    setBusy(true)
    fetch(paneUrl(p.id, base, { ...ctrl, [param]: value }), { headers: authHeaders() })
      .then((r) => {
        if (r.status === 401) {
          clearSession()
          return null
        }
        return r.json()
      })
      .then((d) => {
        if (id === tok.current && d) {
          setData(d)
          setBusy(false)
        }
      })
      .catch(() => {
        if (id === tok.current) setBusy(false)
      })
  }
  if (p.type === "feed") return <Feed p={p} base={base} streamFeed={data} streamLoading={loading} />
  const body =
    p.type === "table" ? (
      p.id === "authors" ? (
        <AuthorRows p={p} rows={data} loading={loading || busy} onAction={onAction} />
      ) : (
        <Table p={p} rows={data} loading={loading || busy} onAction={onAction} />
      )
    ) : p.type === "bars" ? (
      isLang && lmode === "series" ? (
        <LangTrend data={lseries} loading={lbusy} />
      ) : isLang && lmode === "map" ? (
        <LangMap data={data} />
      ) : (
        <Bars p={p} items={data} loading={loading} onAction={onAction} />
      )
    ) : p.type === "heatmap" ? (
      <Heatmap cells={data} loading={loading} />
    ) : p.type === "compass" ? (
      <Compass data={data} loading={loading} />
    ) : p.type === "donut" ? (
      <Donut p={p} data={data} loading={loading} />
    ) : p.type === "trending" ? (
      <Trending items={data} loading={loading} onAction={onAction} />
    ) : null
  if (p.region === "full")
    return (
      <div class="full-pane">
        <div class="card-head">
          <h3>{p.title}</h3>
          {(p.controls || []).map((c) =>
            c.type === "select" ? (
              <select
                key={c.id}
                class="ctrl-select"
                value={ctrl[c.param]}
                onChange={(e) => onCtrl(c.param, e.target.value)}
              >
                {c.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : null,
          )}
        </div>
        <div class="card-body">{body}</div>
      </div>
    )
  const settled = !loading && !busy
  let cardEmpty = false
  if (settled) {
    if (data == null) cardEmpty = true
    else if (p.type === "bars")
      cardEmpty = p.tabs ? p.tabs.every((t) => !(data[t.value] || []).length) : !(data || []).length
    else if (p.type === "donut") cardEmpty = (p.keys || []).every((k) => !data[k])
    else if (p.type === "compass") cardEmpty = !data || (data.authors || 0) < 25
    else cardEmpty = Array.isArray(data) ? !data.length : !data
  }
  if (cardEmpty) return null
  return (
    <Carded
      p={p}
      ctrl={ctrl}
      onCtrl={onCtrl}
      headerExtra={
        isLang ? (
          <Seg
            cls="seg mini-toggle"
            value={lmode}
            onChange={toLang}
            options={[
              { value: "bars", label: "top" },
              { value: "series", label: "over time" },
              { value: "map", label: "map" },
            ]}
          />
        ) : null
      }
    >
      {body}
    </Carded>
  )
}

function DatePicker({ from, to, label, onPick }) {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(() => new Date(to.getFullYear(), to.getMonth(), 1))
  const [start, setStart] = useState(null)
  const [hover, setHover] = useState(null)
  const wrap = useRef(null)
  const T = today()
  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("click", onDoc)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onDoc)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])
  const toggle = () => {
    setView(new Date(to.getFullYear(), to.getMonth(), 1))
    setStart(null)
    setHover(null)
    setOpen((o) => !o)
  }
  const presets = [
    ["today", 1],
    ["last 7 days", 7],
    ["last 14 days", 14],
    ["last 30 days", 30],
    ["last 90 days", 90],
    ["last 180 days", 180],
    ["last year", 365],
    ["last 2 years", 730],
  ]
  const pickPreset = (lbl, days) => {
    onPick(dayStart(days - 1), T, lbl)
    setOpen(false)
  }
  const pickDay = (t) => {
    const d = new Date(t)
    if (!start) {
      setStart(d)
      setHover(d)
      return
    }
    const [f, tt] = start <= d ? [start, d] : [d, start]
    const lbl =
      f.getTime() === tt.getTime()
        ? `${MONTHS[f.getMonth()]} ${f.getDate()}`
        : `${MONTHS[f.getMonth()]} ${f.getDate()} - ${MONTHS[tt.getMonth()]} ${tt.getDate()}`
    onPick(f, tt, lbl)
    setStart(null)
    setOpen(false)
  }
  const y = view.getFullYear()
  const m = view.getMonth()
  const lead = (new Date(y, m, 1).getDay() + 6) % 7
  const dim = new Date(y, m + 1, 0).getDate()
  const days = []
  for (let d = 1; d <= dim; d++) {
    const t = new Date(y, m, d).getTime()
    const cls = []
    if (t === T.getTime()) cls.push("today")
    if (start) {
      const a = start.getTime()
      const b = hover ? hover.getTime() : a
      if (t === a) cls.push("sel")
      else if (t >= Math.min(a, b) && t <= Math.max(a, b)) cls.push("range")
    } else if (t === from.getTime() || t === to.getTime()) cls.push("sel")
    else if (t > from.getTime() && t < to.getTime()) cls.push("range")
    days.push({ d, t, cls: cls.join(" "), disabled: t > T.getTime() })
  }
  return (
    <div class="date-wrap" ref={wrap}>
      <button class="date-range" type="button" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="arrow"
          aria-hidden="true"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <span>{label}</span>
      </button>
      {open ? (
        <div class="date-pop">
          <div class="presets">
            {presets.map(([lbl, dd]) => (
              <button
                type="button"
                key={dd}
                class={label === lbl ? "active" : ""}
                onClick={() => pickPreset(lbl, dd)}
              >
                {lbl}
              </button>
            ))}
          </div>
          <div class="cal">
            <div class="cal-head">
              <button type="button" class="cal-nav" onClick={() => setView(new Date(y, m - 1, 1))}>
                ‹
              </button>
              <span class="cal-title">
                {MONTHS_FULL[m]} {y}
              </span>
              <button
                type="button"
                class="cal-nav"
                disabled={y === T.getFullYear() && m === T.getMonth()}
                onClick={() => setView(new Date(y, m + 1, 1))}
              >
                ›
              </button>
            </div>
            <div class="cal-grid">
              {["mo", "tu", "we", "th", "fr", "sa", "su"].map((d) => (
                <span class="dow" key={d}>
                  {d}
                </span>
              ))}
              {Array.from({ length: lead }, (_, i) => (
                <i key={`l${i}`} />
              ))}
              {days.map((x) => (
                <button
                  type="button"
                  key={x.t}
                  class={x.cls}
                  disabled={x.disabled}
                  onClick={() => pickDay(x.t)}
                  onMouseEnter={() => start && setHover(new Date(x.t))}
                >
                  {x.d}
                </button>
              ))}
            </div>
            <div class="cal-hint">
              {start
                ? `${MONTHS[start.getMonth()]} ${start.getDate()} - pick the end day`
                : "pick a start day"}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

const LOGO = (
  <svg
    class="logo"
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    role="img"
    aria-label="tcat logo"
  >
    <g clip-path="url(#lg)">
      <path
        d="M8.43917 18.0742C8.43917 18.0742 9.00467 19.9117 8.1677 24.513C8.01787 25.3387 7.79715 26.1821 7.68517 26.8733C6.26981 26.8733 6.19409 28.486 6.49456 28.486H8.1814C9.25842 28.486 10.5747 25.8003 11.286 22.073C11.9973 18.3457 8.43917 18.0742 8.43917 18.0742ZM18.9452 21.0564C18.9452 21.0564 20.7755 22.0392 20.7078 24.3439C20.6812 25.2549 20.5072 26.0283 20.4218 26.7799C18.946 26.7799 18.9404 28.3789 19.3706 28.3789H20.8657C21.6092 28.3789 23.2831 25.8349 23.5876 22.5136C23.8921 19.1923 18.9452 21.0564 18.9452 21.0564Z"
        fill="#1DA1F2"
      />
      <path
        d="M28.9996 6.80366C28.9996 2.83871 25.6638 0.804688 21.7496 0.804688C21.536 0.804688 21.3311 0.889558 21.18 1.04063C21.0289 1.1917 20.9441 1.3966 20.9441 1.61024C20.9441 1.82389 21.0289 2.02879 21.18 2.17986C21.3311 2.33093 21.536 2.4158 21.7496 2.4158C23.2028 2.4158 27.1605 3.16819 27.1605 6.80366C27.1605 9.12446 25.8982 11.2036 24.1236 11.6225C23.9915 11.5637 23.8457 11.5387 23.7136 11.4678C17.8822 8.31247 12.8732 12.1944 11.4482 11.2342C10.0368 10.282 11.014 8.61213 9.17329 7.01069C8.90746 5.52766 8.30893 3.40422 7.72813 3.40422C7.28588 3.40422 6.7091 4.87435 6.32646 6.34933C5.85038 5.23685 5.22849 4.12922 4.82813 4.12922C4.31257 4.12922 3.79863 5.96024 3.54407 7.54074C2.19074 8.46472 1.20312 9.80355 1.20312 11.3792C1.20312 13.5542 4.46563 14.0835 5.55313 14.127C6.64063 14.1705 7.98832 16.9964 8.44104 18.2127C9.44154 21.7306 10.0932 25.2203 10.6144 27.2213C9.28607 27.2213 9.16121 28.9218 9.52854 28.9218C10.1029 28.9218 11.1018 28.9194 11.3209 28.9218C12.4334 28.9331 12.953 25.1309 12.953 21.7934C12.953 21.6227 12.9441 21.2884 12.9441 21.2884C12.9441 21.2884 14.4988 21.6952 17.808 21.1208C19.7768 20.7792 21.86 21.8047 22.4368 23.6688C22.8613 25.0414 23.5637 26.3311 23.9415 27.2809C22.6615 27.2809 22.697 28.9218 23.0683 28.9218C23.7023 28.9218 24.5191 28.9331 24.8268 28.9218C26.0094 28.8775 25.3448 22.8205 25.6566 20.7881C25.9683 18.7557 26.6772 16.2947 25.4721 13.7016C28.0789 12.2726 28.9996 9.26705 28.9996 6.80366Z"
        fill="#1DA1F2"
      />
      <path
        d="M2.40481 10.3582C1.85945 10.6989 1.85945 11.7897 1.58717 11.7897C1.31489 11.7897 0.769531 11.1484 0.769531 10.3582C0.768726 9.56794 3.07503 9.9393 2.40481 10.3582Z"
        fill="#1DA1F2"
      />
    </g>
    <defs>
      <clipPath id="lg">
        <rect width="29" height="29" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const EXAMPLES = ["ai agents", "bitcoin", "elon musk", "openai", "nvidia", "taylor swift"]
const FH_ROWS_PER_SEC = 40
const FH_STREAM_MS = 5 * 60 * 1000

function FhRow({ t }) {
  return (
    <a
      class="fh-tweet"
      href={`https://x.com/${t.username}/status/${t.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="fh-av"
        src={t.avatar}
        alt=""
        referrerpolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden"
        }}
      />
      <div class="fh-body">
        <div class="fh-meta">
          <b>{decodeEntities(t.name)}</b> <span>@{t.username}</span>
        </div>
        <p>{decodeEntities(trimMediaLink(t.body).trim())}</p>
      </div>
    </a>
  )
}

function Firehose({ open, onClose }) {
  const [buffer, setBuffer] = useState([])
  const [expired, setExpired] = useState(false)
  const [verifying, setVerifying] = useState(false)

  useEffect(() => {
    if (!open) {
      setBuffer([])
      setExpired(false)
      return
    }
    if (expired) return
    let alive = true
    let es = null
    const seen = new Set()
    const all = []
    const gunzip = async (b64) => {
      const bytes = Uint8Array.from(atob(b64), (ch) => ch.charCodeAt(0))
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))
      return new TextDecoder().decode(await new Response(stream).arrayBuffer())
    }
    const ingest = (list) => {
      if (!alive || !list?.length) return
      let added = false
      for (const t of list) {
        if (t?.id && t.body && !seen.has(t.id)) {
          seen.add(t.id)
          all.unshift(t)
          added = true
        }
      }
      if (all.length > 60) all.length = 60
      if (added) setBuffer(all.slice(0, 40))
    }
    fetch(`${API_BASE}/stats/tweets`, { headers: { "x-twittercat-client": "tcat-web-31bd" } })
      .then((r) => r.json())
      .then((d) => ingest(d.tweets))
      .catch(() => {})
    const tok = sessionToken()
    if (tok && "DecompressionStream" in window) {
      const u = new URL("/stats/tweets/stream", API_BASE || location.origin)
      u.searchParams.set("c", `web31bd${Math.random().toString(36).slice(2, 8)}`)
      u.searchParams.set("s", tok)
      es = new EventSource(u)
      es.onmessage = async (e) => {
        try {
          ingest(JSON.parse(await gunzip(e.data)).tweets)
        } catch {}
      }
    }
    const limit = setTimeout(() => setExpired(true), FH_STREAM_MS)
    return () => {
      alive = false
      es?.close()
      clearTimeout(limit)
    }
  }, [open, expired])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const reverify = async () => {
    if (verifying) return
    setVerifying(true)
    try {
      await solveCap()
      setExpired(false)
    } catch {}
    setVerifying(false)
  }

  if (!open) return null
  const ready = buffer.length >= 12

  return (
    <div class="fh-modal" onClick={onClose}>
      <div class="fh-panel" onClick={(e) => e.stopPropagation()}>
        <div class="fh-panel-head">
          <span class="fh-live">live firehose sample</span>
          <button type="button" class="fh-close" aria-label="close" onClick={onClose}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        {expired ? (
          <div class="fh-expired">
            <p>5-minute limit reached</p>
            <small>verify you're human to keep watching</small>
            <button type="button" class="fh-reverify" onClick={reverify} disabled={verifying}>
              {verifying ? "verifying…" : "keep watching"}
            </button>
          </div>
        ) : ready ? (
          <div class="fh-viewport">
            <div
              class="fh-track"
              style={`animation-duration:${(buffer.length / FH_ROWS_PER_SEC).toFixed(2)}s`}
            >
              {buffer.map((t, i) => (
                <FhRow key={`a${i}`} t={t} />
              ))}
              {buffer.map((t, i) => (
                <FhRow key={`b${i}`} t={t} />
              ))}
            </div>
          </div>
        ) : (
          <div class="fh-connecting">{SPINNER}</div>
        )}
      </div>
    </div>
  )
}

function Landing({ onSearch }) {
  const [v, setV] = useState("")
  const [counts, setCounts] = useState(() => {
    try {
      const c = JSON.parse(localStorage.getItem("tcat_counts") || "null")
      return c?.accounts && c?.tweets ? c : null
    } catch {
      return null
    }
  })
  const [trending, setTrending] = useState([])
  const [ti, setTi] = useState(0)
  const [fhOpen, setFhOpen] = useState(false)

  useEffect(() => {
    let alive = true
    fetch(`${API_BASE}/stats`)
      .then((r) => r.json())
      .then(([accounts, tweets]) => {
        if (!alive) return
        const c = { accounts: +accounts, tweets: +tweets }
        setCounts(c)
        try {
          localStorage.setItem("tcat_counts", JSON.stringify(c))
        } catch {}
      })
      .catch(() => {})
    fetch(`${API_BASE}/stats/trending`)
      .then((r) => r.json())
      .then(([t]) => {
        if (alive && Array.isArray(t)) setTrending(t.slice(0, 10))
      })
      .catch(() => {})
    const tick = setInterval(() => {
      setCounts((c) =>
        c
          ? {
              accounts: c.accounts + Math.floor(Math.random() * 10),
              tweets: c.tweets + Math.floor(Math.random() * 40),
            }
          : c,
      )
    }, 3000)
    return () => {
      alive = false
      clearInterval(tick)
    }
  }, [])

  useEffect(() => {
    const iv = setInterval(() => setTi((i) => i + 1), 4000)
    return () => clearInterval(iv)
  }, [])

  const chips = trending.length ? trending : EXAMPLES
  const cur = ti % chips.length
  const prevIdx = (ti - 1 + chips.length) % chips.length
  const trend = chips[cur]
  const go = (term) => {
    const s = (term || "").trim()
    if (s) onSearch(s)
  }

  return (
    <div class="landing">
      <div class="lmain">
        <div class="lhero">
          <div class="llogo">
            {LOGO}
            <span>
              <span class="at">@</span>
              <span class="nm">twitter.cat</span>
            </span>
          </div>
          <div class="lsearch">
            <svg width="18" height="18" viewBox="0 0 17 17" fill="none" aria-hidden="true">
              <path
                d="M7.26 2.65a4.6 4.6 0 1 0 0 9.21 4.6 4.6 0 0 0 0-9.21ZM1.24 7.26a6.02 6.02 0 1 1 10.75 3.73l3.39 3.38-1 1-3.39-3.39A6.02 6.02 0 0 1 1.24 7.26Z"
                fill="#71767B"
              />
            </svg>
            <div class="lsearch-input">
              <input
                autofocus
                maxlength={512}
                aria-label="search"
                placeholder={trend ? "" : "search"}
                value={v}
                onInput={(e) => setV(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && go(v || trend)}
              />
              {!v && chips.length ? (
                <span class="search-cycle">
                  <span class="sc-pre">search</span>
                  <span class="sc-rot">
                    {chips.map((c, i) => (
                      <span
                        class={`sc-term${i === cur ? " active" : i === prevIdx ? " exit" : ""}`}
                        key={c}
                        onClick={() => go(c)}
                      >
                        {c}
                      </span>
                    ))}
                  </span>
                </span>
              ) : null}
            </div>
          </div>
          {counts ? (
            <div
              class="lcounter"
              title="watch the live firehose"
              {...clickProps(() => setFhOpen(true))}
            >
              <div class="count">
                <span>tweets</span>
                <b>{counts.tweets.toLocaleString()}</b>
              </div>
              <div class="count">
                <span>accounts</span>
                <b>{counts.accounts.toLocaleString()}</b>
              </div>
            </div>
          ) : null}
        </div>
        <Firehose open={fhOpen} onClose={() => setFhOpen(false)} />
      </div>
      <div class="lfooter">
        <a href="https://api.twitter.cat" target="_blank" rel="noopener noreferrer">
          api
        </a>
        <a
          href="https://github.com/twitter-cat/twitter.cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a href="https://x.twitter.cat" target="_blank" rel="noopener noreferrer">
          fxembed
        </a>
        <a href="https://twitter.cat/legal" target="_blank" rel="noopener noreferrer">
          legal
        </a>
        <span>not affiliated with 𝕏</span>
      </div>
    </div>
  )
}

export function App() {
  const url = new URLSearchParams(window.location.search)
  const urlQ = (url.get("q") || "").trim()
  const urlFrom = +url.get("from")
  const urlTo = +url.get("to")
  const urlLabel = url.get("label")
  const [pending, setPending] = useState(urlQ)
  const [q, setQ] = useState(urlQ)
  const [terms, setTerms] = useState([])
  const [author, setAuthor] = useState(null)
  const [range, setRange] = useState(() =>
    urlFrom && urlTo
      ? {
          from: new Date(urlFrom),
          to: new Date(urlTo),
          label: urlLabel || labelFor(new Date(urlFrom), new Date(urlTo)),
        }
      : { from: dayStart(364), to: today(), label: "last year" },
  )
  const [metric, setMetric] = useState("tweets")
  const [compares, setCompares] = useState([])
  const [compareData, setCompareData] = useState({})
  const [session, setSession] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) || "null")
      return s?.token && s.expires > Date.now() + 5000 ? s : null
    } catch {
      return null
    }
  })
  const [capPhase, setCapPhase] = useState("verifying")
  const [capProgress, setCapProgress] = useState(0)
  const [capErr, setCapErr] = useState("")
  const capStarted = useRef(false)

  const solveCaptcha = () => {
    capStarted.current = true
    setCapPhase("verifying")
    setCapErr("")
    setCapProgress(0)
    solveCap(setCapProgress)
      .then((s) => setSession(s))
      .catch((e) => {
        setCapErr(String(e?.message || e))
        setCapPhase("error")
      })
  }

  useEffect(() => {
    if (!session && !capStarted.current) solveCaptcha()
  }, [])

  useEffect(() => {
    const onUnauth = () => {
      setSession(null)
      solveCaptcha()
    }
    window.addEventListener("tcat:unauthorized", onUnauth)
    return () => window.removeEventListener("tcat:unauthorized", onUnauth)
  }, [])

  const fetchSeries = (term, r) => {
    const qs = new URLSearchParams({
      q: term,
      from: r.from.getTime(),
      to: r.to.getTime() + DAY,
    }).toString()
    fetch(`${API_BASE}/api/series?${qs}`, { headers: authHeaders() })
      .then((res) => {
        if (res.status === 401) {
          clearSession()
          return null
        }
        return res.json()
      })
      .then((d) => d && setCompareData((m) => ({ ...m, [term]: d })))
      .catch(() => {})
  }
  const addCompare = (term) => {
    const t = term.trim()
    if (
      !t ||
      t.toLowerCase() === q.toLowerCase() ||
      compares.some((c) => c.term.toLowerCase() === t.toLowerCase()) ||
      compares.length >= 4
    )
      return
    const used = compares.map((c) => c.color)
    const color = CMP_COLORS.find((c) => !used.includes(c)) || CMP_COLORS[0]
    setCompares((cs) => [...cs, { term: t, color }])
    fetchSeries(t, range)
  }
  const removeCompare = (term) => {
    setCompares((cs) => cs.filter((c) => c.term !== term))
    setCompareData((m) => {
      const n = { ...m }
      delete n[term]
      return n
    })
  }
  useEffect(() => {
    for (const c of compares) fetchSeries(c.term, range)
  }, [range.from.getTime(), range.to.getTime()])

  const fullQ = [q, ...terms].join(" ").trim()
  const { manifest, panes, loading } = useDashboard({
    q: fullQ,
    from: range.from,
    to: range.to,
    author: author?.id,
    session: session?.token,
  })

  useEffect(() => {
    if (!fullQ) {
      window.history.replaceState(null, "", window.location.pathname)
      return
    }
    const p = new URLSearchParams()
    if (fullQ) p.set("q", fullQ)
    p.set("from", range.from.getTime())
    p.set("to", range.to.getTime())
    p.set("label", range.label)
    window.history.replaceState(null, "", `${window.location.pathname}?${p}`)
  }, [fullQ, range.from.getTime(), range.to.getTime(), range.label])

  window.__tcatSelect = (fromMs, toMs) => {
    const f = new Date(new Date(fromMs).setHours(0, 0, 0, 0))
    const t = new Date(new Date(toMs).setHours(0, 0, 0, 0))
    if (t.getTime() <= f.getTime()) return
    setRange({
      from: f,
      to: t,
      label: `${MONTHS[f.getMonth()]} ${f.getDate()} - ${MONTHS[t.getMonth()]} ${t.getDate()}`,
    })
  }
  const onPick = (f, t, label) => setRange({ from: f, to: t, label })
  const clearCmp = () => {
    setCompares([])
    setCompareData({})
  }
  const search = (v) => {
    const s = v.trim()
    if (s) {
      setQ(s)
      setPending(s)
      setTerms([])
      setAuthor(null)
      clearCmp()
    }
  }
  const onAction = (action, row) => {
    if (action === "addTerm") {
      const t = String(row).replace(/^[#@]/, "").toLowerCase()
      if (t && !terms.includes(t) && t !== q.toLowerCase()) setTerms((ts) => [...ts, t])
    } else if (action === "filterAuthor") setAuthor({ id: row.authorId, label: row.username })
  }
  const goHome = () => {
    setQ("")
    setPending("")
    setTerms([])
    setAuthor(null)
    clearCmp()
  }

  const base = {
    q: fullQ,
    from: range.from.getTime(),
    to: range.to.getTime() + DAY,
    ...(author ? { author: author.id } : {}),
    collected: panes.metrics ? panes.metrics.collected : 0,
  }
  const region = (r) =>
    manifest ? manifest.panes.filter((p) => p.region === r && p.id !== "types") : []
  const chips = [
    ...terms.map((t) => ({
      kind: "term",
      label: t,
      rm: () => setTerms((ts) => ts.filter((x) => x !== t)),
    })),
    ...(author
      ? [
          {
            kind: "author",
            label: `@${author.label}`,
            rm: () => setAuthor(null),
          },
        ]
      : []),
  ]
  const renderPane = (p, ldng = loading) => (
    <PanedView
      key={p.id}
      p={p}
      initial={panes[p.id]}
      base={base}
      loading={ldng}
      onAction={onAction}
    />
  )
  const gridTiles = region("grid").filter((p) => p.span !== "full")
  const gridFull = region("grid").filter((p) => p.span === "full")
  const showLanding = !fullQ

  return (
    <>
      {showLanding ? (
        <Landing onSearch={search} />
      ) : !session ? (
        <CaptchaWall phase={capPhase} progress={capProgress} err={capErr} onRetry={solveCaptcha} />
      ) : (
        <>
          <div class={`loadbar${loading && !panes.trend ? " on" : ""}`} />
          <header>
            <div class="input-zone">
              <div class="home-btn" {...clickProps(goHome)}>
                {LOGO}
              </div>

              <div class="search-bar">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                  <path
                    d="M7.26 2.65a4.6 4.6 0 1 0 0 9.21 4.6 4.6 0 0 0 0-9.21ZM1.24 7.26a6.02 6.02 0 1 1 10.75 3.73l3.39 3.38-1 1-3.39-3.39A6.02 6.02 0 0 1 1.24 7.26Z"
                    fill="#71767B"
                  />
                </svg>
                <input
                  placeholder='(bitcoin OR btc) -giveaway "exact phrase"'
                  value={pending}
                  maxlength={512}
                  autofocus
                  onInput={(e) => setPending(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && search(e.target.value)}
                />
              </div>
              <DatePicker from={range.from} to={range.to} label={range.label} onPick={onPick} />
            </div>
          </header>

          {chips.length ? (
            <div class="filters">
              {chips.map((c) => (
                <button type="button" class="chip" key={c.kind + c.label} onClick={c.rm}>
                  {c.kind === "author" ? "author" : "term"}: <b>{c.label}</b> {I_X}
                </button>
              ))}
            </div>
          ) : null}

          <main>
            <div class="stats">
              <section class="main-charts">
                {region("main")
                  .filter((p) => p.type === "stats")
                  .map((p) => (
                    <StatTiles
                      key={p.id}
                      p={p}
                      data={panes.metrics}
                      trend={panes.trend}
                      sentiment={panes.sentiment}
                      metric={metric}
                      onMetric={setMetric}
                      loading={loading}
                    />
                  ))}
                {region("main").some((p) => p.type === "timeseries") ? (
                  <CompareBar
                    primary={q}
                    compares={compares}
                    onAdd={addCompare}
                    onRemove={removeCompare}
                  />
                ) : null}
                {region("main")
                  .filter((p) => p.type === "timeseries")
                  .map((p) => (
                    <Trend
                      key={p.id}
                      q={q}
                      compares={compares}
                      compareData={compareData}
                      trend={panes.trend}
                      sentiment={panes.sentiment}
                      metric={metric}
                    />
                  ))}
              </section>
              <section class="grid">
                <div class="masonry">{gridTiles.map((p) => renderPane(p))}</div>
                {gridFull.map((p) => renderPane(p))}
              </section>
            </div>
            {region("side").map((p) => renderPane(p))}
          </main>
        </>
      )}
    </>
  )
}

const CAP_ENDPOINT = `${API_BASE}/cap/`
const jwtExp = (tok) => {
  try {
    const b = tok.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
    const pad = b.length % 4 ? "=".repeat(4 - (b.length % 4)) : ""
    return (JSON.parse(atob(b + pad)).exp || 0) * 1000
  } catch {
    return 0
  }
}

async function solveCap(onProgress) {
  const cap = new Cap({ apiEndpoint: CAP_ENDPOINT })
  if (onProgress)
    cap.addEventListener("progress", (e) => onProgress(Math.round(e.detail?.progress || 0)))
  try {
    const res = await Promise.race([
      cap.solve(),
      new Promise((_, rej) => setTimeout(() => rej(new Error("verification timed out")), 30000)),
    ])
    if (!res?.token) throw new Error("verification failed")
    const s = { token: res.token, expires: jwtExp(res.token) }
    localStorage.setItem(SESSION_KEY, JSON.stringify(s))
    return s
  } finally {
    try {
      cap.cleanup?.()
    } catch {}
  }
}

function CaptchaWall({ phase, progress, err, onRetry }) {
  return (
    <div class="gate">
      <div class="gate-box">
        {LOGO}
        {phase === "error" ? (
          <>
            <p class="gate-msg">couldn't verify you're human</p>
            {err ? <p class="gate-sub">{err}</p> : null}
            <button type="button" class="gate-btn" onClick={onRetry}>
              try again
            </button>
          </>
        ) : (
          <>
            <p class="gate-msg">verifying you're human…</p>
            <div class="gate-bar">
              <i style={`width:${progress}%`} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
