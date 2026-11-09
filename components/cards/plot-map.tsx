'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { LayoutGrid } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { formatRsL, plots, sizeLabel, type PlotStatus } from '@/data/showcase'
import { useLocale, useMessages } from '@/i18n/client'
import { fmt, rich } from '@/i18n/text'
import { cn } from '@/lib/utils'
import { CardShell } from './card-shell'

const STATUSES: PlotStatus[] = ['available', 'booked', 'sold']

const cellStyle: Record<PlotStatus, React.CSSProperties> = {
  available: { background: 'var(--paid-soft)', borderColor: 'var(--paid)', color: 'var(--paid-ink)' },
  booked: { background: 'var(--pending-soft)', borderColor: 'var(--pending)', color: 'var(--pending-ink)' },
  sold: { background: 'color-mix(in oklab, var(--primary) 22%, var(--card))', borderColor: 'var(--primary)', color: 'var(--foreground)' },
}
const swatch: Record<PlotStatus, string> = { available: 'var(--paid)', booked: 'var(--pending)', sold: 'var(--primary)' }

function tipAlign(i: number): string {
  const c5 = i % 5
  const c10 = i % 10
  const mobile = c5 === 0 ? 'max-sm:start-0' : c5 === 4 ? 'max-sm:end-0' : 'max-sm:start-1/2 max-sm:-translate-x-1/2 max-sm:rtl:translate-x-1/2'
  const wide = c10 < 2 ? 'sm:start-0' : c10 > 7 ? 'sm:end-0' : 'sm:start-1/2 sm:-translate-x-1/2 sm:rtl:translate-x-1/2'
  return `${mobile} ${wide}`
}

export function PlotMap({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const msg = useMessages().showcase
  const m = msg.plotMap
  const locale = useLocale()
  const LABEL = msg.plotStatus
  const rs = (n: number) => formatRsL(locale, n)
  const [filter, setFilter] = useState<PlotStatus | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const seen = useInView(gridRef, { once: true, margin: '0px 0px -10% 0px' })
  const show = reduce || seen

  const [live, setLive] = useState<Record<string, PlotStatus>>({})
  const [pulse, setPulse] = useState<string | null>(null)
  useEffect(() => {
    if (reduce || !seen) return
    const next: Record<PlotStatus, PlotStatus> = { available: 'booked', booked: 'sold', sold: 'sold' }
    const t = setInterval(() => {
      const open = plots.filter((p) => (live[p.id] ?? p.status) !== 'sold')
      if (!open.length) return
      const p = open[Math.floor(Math.random() * open.length)]
      setLive((l) => ({ ...l, [p.id]: next[l[p.id] ?? p.status] }))
      setPulse(p.id)
    }, 2600)
    return () => clearInterval(t)
  }, [reduce, seen, live])

  const counts = useMemo(() => {
    const c: Record<PlotStatus, number> = { available: 0, booked: 0, sold: 0 }
    plots.forEach((p) => { c[live[p.id] ?? p.status] += 1 })
    return c
  }, [live])
  const blocks = useMemo(() => {
    const map = new Map<string, typeof plots>()
    plots.forEach((p) => {
      const key = p.id[0]
      map.set(key, [...(map.get(key) ?? []), p])
    })
    return Array.from(map.entries())
  }, [])

  return (
    <CardShell title={m.title} icon={LayoutGrid} className={className}>
      <div role="group" aria-label={m.filterLabel} className="mb-4 flex flex-wrap gap-2">
        {STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={filter === s}
            onClick={() => setFilter(filter === s ? null : s)}
            className={cn(
              'inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors',
              filter === s ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            <span aria-hidden="true" className="size-2.5 rounded-full" style={{ background: swatch[s] }} />
            {LABEL[s]}
            <span className="num text-xs">{counts[s]}</span>
          </button>
        ))}
      </div>

      <div ref={gridRef} className="flex flex-col gap-4">
        {blocks.map(([block, items], bi) => (
          <div key={block}>
            <p className="mb-1.5 text-xs font-semibold tracking-normal text-muted-foreground">{fmt(m.block, { block })}</p>
            <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
              {items.map((p, i) => {
                const st = live[p.id] ?? p.status
                const dim = filter !== null && filter !== st
                return (
                  <motion.div
                    key={p.id}
                    className="group relative"
                    initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                    animate={{ opacity: show ? (dim ? 0.28 : 1) : 0, scale: show ? 1 : 0.85 }}
                    transition={{ duration: 0.35, delay: reduce ? 0 : (bi * 10 + i) * 0.008 }}
                  >
                    {pulse === p.id && (
                      <motion.span
                        key={`${p.id}-${st}`}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-lg border-2"
                        style={{ borderColor: swatch[st] }}
                        initial={{ opacity: 0.9, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.7 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                      />
                    )}
                    <button
                      type="button"
                      aria-label={fmt(m.plotAria, { id: p.id, size: sizeLabel(msg.sizes, p.size), price: rs(p.price), status: LABEL[st] })}
                      className="num grid h-11 w-full place-items-center rounded-lg border text-xs font-semibold transition-[transform,background-color,border-color] duration-500 hover:scale-105 focus-visible:scale-105"
                      style={cellStyle[st]}
                    >
                      {p.id.slice(2)}
                    </button>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute bottom-full z-20 mb-2 w-max rounded-lg bg-deep px-3 py-2 text-start text-xs text-white opacity-0 shadow-lg transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100',
                        tipAlign(i),
                      )}
                    >
                      <span className="block font-semibold">{fmt(m.plotLabel, { id: p.id })}</span>
                      <span className="block text-emerald-100/80">{sizeLabel(msg.sizes, p.size)}</span>
                      <span className="num block">{rs(p.price)}</span>
                      <span className="block text-amber-300">{LABEL[st]}</span>
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {filter ? (
          <>
            {rich(m.showing, { n: (c) => <span className="num font-medium text-foreground">{c}</span> }, { count: counts[filter], status: LABEL[filter].toLocaleLowerCase(locale) })}
          </>
        ) : (
          <>
            {rich(m.total, { n: (c) => <span className="num font-medium text-foreground">{c}</span> }, { count: plots.length })}
          </>
        )}
      </p>
    </CardShell>
  )
}
