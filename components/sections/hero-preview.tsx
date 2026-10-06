'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { BarChart3, CheckCircle2, Handshake, LayoutGrid, Receipt, Settings, TriangleAlert, Users } from 'lucide-react'
import { CountUp } from '@/components/shared/count-up'
import { SampleTag } from '@/components/shared/sample-tag'
import { Sparkline } from '@/components/shared/sparkline'
import { StatusBadge, type Status } from '@/components/shared/status-badge'
import { collectionsLakh, installments, kpis, months } from '@/data/sample'
import { formatPKR } from '@/lib/format'

const rail = [LayoutGrid, Handshake, Receipt, Users, BarChart3, Settings]
const recent = installments.filter((i) => ['i1', 'i2', 'i5'].includes(i.id))
const sparkColor = ['var(--chart-4)', 'var(--chart-4)', 'var(--chart-5)']

function Float({ children, className, depth, mx, my }: { children: React.ReactNode; className: string; depth: number; mx: ReturnType<typeof useSpring>; my: ReturnType<typeof useSpring> }) {
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.div style={{ x, y }} className={className}>
      <div className="animate-float">{children}</div>
    </motion.div>
  )
}

export function HeroPreview() {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const mx = useSpring(rx, { stiffness: 80, damping: 20 })
  const my = useSpring(ry, { stiffness: 80, damping: 20 })
  const max = Math.max(...collectionsLakh)

  return (
    <div
      className="relative mx-auto w-full max-w-[640px] pb-6 pt-4"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        rx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
        ry.set(((e.clientY - r.top) / r.height - 0.5) * 2)
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0) }}
    >
      <div className="on-deep relative overflow-hidden rounded-3xl border border-white/10 bg-deep-card text-white shadow-[0_40px_80px_-30px_rgb(2_44_34/.7)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-xs font-medium text-white/70">Overview</span>
          <SampleTag className="border-white/25 text-white/70">Sample data</SampleTag>
        </div>
        <div className="flex">
          <div className="hidden w-12 shrink-0 flex-col items-center gap-3 border-r border-white/10 py-4 sm:flex" aria-hidden>
            {rail.map((Icon, i) => (
              <span key={i} className={`grid size-8 place-items-center rounded-lg ${i === 0 ? 'bg-amber-400 text-emerald-950' : 'text-white/50'}`}>
                <Icon className="size-4" />
              </span>
            ))}
          </div>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {kpis.slice(0, 3).map((k, i) => (
                <div key={k.id} className="min-w-0 rounded-2xl bg-white/[.07] p-2.5 sm:p-3">
                  <p className="truncate text-[9px] font-medium uppercase tracking-wider text-white/60 sm:text-[10px]">{k.label}</p>
                  <p className="mt-1 truncate text-[13px] font-semibold sm:text-base">
                    <CountUp value={k.value} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} />
                  </p>
                  <Sparkline data={k.spark} color={sparkColor[i]} className="mt-1 h-6" />
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-2xl bg-white/[.07] p-3">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-medium text-white/80">Collections</span>
                  <span className="text-emerald-300">+18.6%</span>
                </div>
                <div className="flex h-24 items-end gap-1.5 sm:h-28" role="img" aria-label="Sample collections rising from January to July">
                  {collectionsLakh.map((v, i) => (
                    <motion.div
                      key={i}
                      className="w-full origin-bottom rounded-t bg-gradient-to-t from-emerald-500 to-amber-300"
                      style={{ height: `${(v / max) * 100}%`, opacity: i === 6 ? 1 : 0.65 }}
                      initial={reduce ? false : { scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-white/50">
                  {months.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
              <div className="rounded-2xl bg-white/[.07] p-3">
                <p className="text-xs font-medium text-white/80">Recent payments</p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {recent.map((r) => (
                    <li key={r.id} className="flex items-center justify-between gap-2 text-[11px]">
                      <div className="min-w-0">
                        <p className="truncate font-medium">Plot {r.plot}</p>
                        <p className="num text-white/50">{formatPKR(r.amount)}</p>
                      </div>
                      <StatusBadge status={r.status as Status} className="shrink-0 !px-2 !py-0.5 text-[10px]" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Float mx={mx} my={my} depth={reduce ? 0 : 10} className="absolute -left-1 top-0 z-10 sm:-left-6">
        <div className="card-solid flex items-center gap-2.5 px-3 py-2.5 shadow-xl">
          <span className="grid size-8 place-items-center rounded-full bg-paid-soft text-paid-ink"><CheckCircle2 className="size-4" /></span>
          <div className="text-xs leading-tight">
            <p className="font-semibold text-foreground">Payment received</p>
            <p className="num text-muted-foreground">{formatPKR(85000)} for A-104</p>
          </div>
        </div>
      </Float>
      <Float mx={mx} my={my} depth={reduce ? 0 : -14} className="absolute -right-1 bottom-24 z-10 hidden sm:block sm:-right-6">
        <div className="card-solid px-3 py-2.5 shadow-xl">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground"><Receipt className="size-3.5 text-primary" /> Receipt issued</p>
          <p className="num mt-0.5 text-[11px] text-muted-foreground">PL-RCT-2026-00418</p>
        </div>
      </Float>
      <Float mx={mx} my={my} depth={reduce ? 0 : 8} className="absolute -bottom-1 left-3 z-10 sm:left-8">
        <div className="card-solid flex items-center gap-2 px-3 py-2 shadow-xl">
          <span className="grid size-7 place-items-center rounded-full bg-overdue-soft text-overdue-ink"><TriangleAlert className="size-3.5" /></span>
          <p className="text-[11px] font-semibold text-foreground">1 installment overdue</p>
        </div>
      </Float>
    </div>
  )
}
