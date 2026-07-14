import { useEffect, useRef } from "preact/hooks"
import uPlot from "uplot"
import "uplot/dist/uPlot.min.css"
import { FONT_BODY, fmtNum, GREEN, MONTHS, RED } from "./lib.js"

const MAXLINES = 5

const TIP_ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }

const grad = (u, color) => {
  const c = u.ctx
  const b = u.bbox
  const g = c.createLinearGradient(0, b.top, 0, b.top + b.height)
  g.addColorStop(0, `${color}40`)
  g.addColorStop(1, `${color}03`)
  return g
}

const signGrad = (u, aPos, aNeg) => {
  const b = u.bbox
  const zero = Math.max(b.top, Math.min(b.top + b.height, u.valToPos(0, "y", true)))
  const frac = (zero - b.top) / b.height
  const g = u.ctx.createLinearGradient(0, b.top, 0, b.top + b.height)
  g.addColorStop(0, `${GREEN}${aPos}`)
  g.addColorStop(frac, `${GREEN}${aPos}`)
  g.addColorStop(frac, `${RED}${aNeg}`)
  g.addColorStop(1, `${RED}${aNeg}`)
  return g
}

export function TimeChart({
  labels,
  lines,
  beginZero = true,
  onSelect,
  valFmt = fmtNum,
  yRange = null,
}) {
  const ref = useRef(null)
  const plot = useRef(null)
  const cb = useRef({})
  cb.current = { onSelect, valFmt, beginZero, yRange, lines }

  useEffect(() => {
    const el = ref.current
    const tip = document.createElement("div")
    tip.className = "u-tip"
    tip.style.display = "none"
    const series = [{ value: (_u, v) => (v == null ? "" : new Date(v * 1000).toDateString()) }]
    for (let i = 0; i < MAXLINES; i++) {
      series.push({
        stroke: (u) => {
          const ln = cb.current.lines[i] || {}
          return ln.signColor ? signGrad(u, "", "") : ln.color || "#1ea1f1"
        },
        width: 1.75,
        spanGaps: true,
        points: { show: false },
        fill:
          i === 0
            ? (u) => {
                const ln = cb.current.lines[0] || {}
                return ln.signColor ? signGrad(u, "30", "26") : grad(u, ln.color || "#1ea1f1")
              }
            : undefined,
        fillTo: i === 0 ? () => 0 : undefined,
        value: (_u, v) => (v == null ? "" : cb.current.valFmt(v)),
      })
    }
    const opts = {
      width: el.clientWidth || 600,
      height: el.clientHeight || 380,
      padding: [14, 10, 2, 6],
      legend: { show: false },
      series,
      cursor: {
        drag: { x: true, y: false, setScale: false },
        points: { size: 7 },
        focus: { prox: 24 },
      },
      scales: {
        x: { time: true },
        y: { range: (_u, min, max) => cb.current.yRange || [cb.current.beginZero ? 0 : min, max] },
      },
      axes: [
        {
          stroke: "#71767b",
          grid: { show: false },
          ticks: { stroke: "rgba(62,65,68,0.4)", size: 4 },
          font: `11px ${FONT_BODY}`,
          space: 70,
          values: (_u, sp) => {
            const multiYear =
              sp.length > 1 &&
              new Date(sp[0] * 1000).getFullYear() !==
                new Date(sp[sp.length - 1] * 1000).getFullYear()
            return sp.map((s) => {
              const d = new Date(s * 1000)
              return multiYear
                ? `${MONTHS[d.getMonth()]} '${String(d.getFullYear()).slice(-2)}`
                : `${MONTHS[d.getMonth()]} ${d.getDate()}`
            })
          },
        },
        {
          stroke: "#71767b",
          grid: { stroke: "rgba(62,65,68,0.22)", width: 1 },
          ticks: { show: false },
          font: `11px ${FONT_BODY}`,
          size: 54,
          values: (_u, sp) => sp.map((v) => cb.current.valFmt(v)),
        },
      ],
      hooks: {
        setSelect: [
          (u) => {
            if (!u.select.width || !cb.current.onSelect) return
            const a = u.posToVal(u.select.left, "x")
            const b = u.posToVal(u.select.left + u.select.width, "x")
            u.setSelect({ width: 0, height: 0, left: 0, top: 0 }, false)
            cb.current.onSelect(Math.round(a * 1000), Math.round(b * 1000))
          },
        ],
        setCursor: [
          (u) => {
            const idx = u.cursor.idx
            if (idx == null || u.cursor.left < 0) {
              tip.style.display = "none"
              return
            }
            const lines = cb.current.lines
            let html = `<div class="u-tip-d">${new Date(u.data[0][idx] * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</div>`
            let any = false
            for (let i = 0; i < lines.length; i++) {
              const arr = u.data[i + 1]
              const v = arr?.[idx]
              if (v == null) continue
              any = true
              const swatch = lines[i].signColor ? (v >= 0 ? GREEN : RED) : lines[i].color
              const lbl = String(lines[i].label ?? "").replace(/[&<>"]/g, (c) => TIP_ESC[c])
              html += `<div class="u-tip-r"><i style="background:${swatch}"></i><b>${cb.current.valFmt(v)}</b><span>${lbl}</span></div>`
            }
            if (!any) {
              tip.style.display = "none"
              return
            }
            tip.innerHTML = html
            tip.style.display = "block"
            const flip = u.cursor.left > u.over.clientWidth * 0.62
            tip.style.left = `${u.cursor.left}px`
            tip.style.top = `${u.cursor.top}px`
            tip.style.transform = `translate(${flip ? "calc(-100% - 14px)" : "14px"}, -50%)`
          },
        ],
      },
    }
    const init = [[], ...Array.from({ length: MAXLINES }, () => [])]
    plot.current = new uPlot(opts, init, el)
    plot.current.over.appendChild(tip)
    const ro = new ResizeObserver(() =>
      plot.current?.setSize({ width: el.clientWidth, height: el.clientHeight }),
    )
    ro.observe(el)
    return () => {
      ro.disconnect()
      plot.current?.destroy()
      plot.current = null
    }
  }, [])

  useEffect(() => {
    if (!plot.current) return
    const xs = (labels || []).map((ms) => ms / 1000)
    const blank = xs.map(() => null)
    const data = [xs]
    for (let i = 0; i < MAXLINES; i++)
      data.push(lines[i]?.values && lines[i].values.length === xs.length ? lines[i].values : blank)
    plot.current.setData(data)
  }, [labels, lines])

  return <div class="uplot-host" ref={ref}></div>
}
