/**
 * An original aerial site plan of a housing scheme, drawn as light vector art for the legal and trust page heroes: blocks of plots
 * separated by roads, a curved main road, and a few plots filled in as booked (amber) and sold (green). Decorative only. It is
 * mirrored for right-to-left languages and fades out toward the text.
 */

// Blocks of plots: top-left corner, columns, rows.
const BLOCKS = [
  { x: 24, y: 28, cols: 5, rows: 3 },
  { x: 236, y: 28, cols: 5, rows: 3 },
  { x: 448, y: 28, cols: 4, rows: 3 },
  { x: 24, y: 170, cols: 5, rows: 4 },
  { x: 236, y: 190, cols: 5, rows: 3 },
  { x: 448, y: 190, cols: 4, rows: 3 },
  { x: 24, y: 346, cols: 5, rows: 2 },
  { x: 236, y: 346, cols: 5, rows: 2 },
  { x: 448, y: 346, cols: 4, rows: 2 },
]
const W = 30
const H = 24
const GAP = 6

/** Which plots are filled is fixed (no randomness), so server and browser draw exactly the same picture. */
function status(bi: number, i: number, j: number): 'booked' | 'sold' | 'open' {
  const n = (bi * 7 + i * 5 + j * 11) % 11
  if (n === 0 || n === 5) return 'booked'
  if (n === 2 || n === 8) return 'sold'
  return 'open'
}

export function LegalHeroArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" className={className} fill="none" aria-hidden="true" focusable="false">
      {/* Roads */}
      <g stroke="#0f5132" strokeOpacity=".09" strokeLinecap="round">
        <path d="M-20 150H660M-20 330H660" strokeWidth="14" />
        <path d="M216 -10V440M428 -10V440" strokeWidth="14" />
        <path d="M-20 398C150 300 300 372 440 290S600 196 670 214" strokeWidth="18" />
      </g>
      <path d="M-20 398C150 300 300 372 440 290S600 196 670 214" stroke="#fbf6ea" strokeOpacity=".9" strokeWidth="1.5" strokeDasharray="7 9" strokeLinecap="round" />

      {/* Plots */}
      {BLOCKS.map((b, bi) =>
        Array.from({ length: b.rows }).flatMap((_, j) =>
          Array.from({ length: b.cols }).map((__, i) => {
            const s = status(bi, i, j)
            return (
              <rect
                key={`${bi}-${i}-${j}`}
                x={b.x + i * (W + GAP)}
                y={b.y + j * (H + GAP)}
                width={W}
                height={H}
                rx="3"
                fill={s === 'booked' ? '#f59e0b' : s === 'sold' ? '#16a34a' : 'none'}
                fillOpacity={s === 'booked' ? 0.5 : s === 'sold' ? 0.4 : 0}
                stroke="#0f5132"
                strokeOpacity={s === 'open' ? 0.22 : 0.3}
                strokeWidth="1.4"
              />
            )
          }),
        ),
      )}

      {/* A map pin on one plot */}
      <g transform="translate(306 120)">
        <path d="M0 0C-9 -12 -13 -17 -13 -24a13 13 0 1 1 26 0c0 7-4 12-13 24z" fill="#0f5132" fillOpacity=".55" />
        <circle cy="-24" r="5" fill="#fbf6ea" />
      </g>

      {/* Scheme boundary */}
      <rect x="8" y="12" width="624" height="410" rx="18" stroke="#0f5132" strokeOpacity=".16" strokeWidth="1.5" strokeDasharray="3 8" />
    </svg>
  )
}
