'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Check, CircleX, TrendingUp } from 'lucide-react'
import { SampleTag } from '@/components/shared/sample-tag'
import type { Role } from '@/data/roles'
import { cn } from '@/lib/utils'

export function RoleCard({ role }: { role: Role }) {
  const reduce = useReducedMotion()
  const { panel } = role
  return (
    <div className="card-solid grid gap-8 p-6 sm:p-10 md:grid-cols-2 md:items-center">
      <div>
        <h3 className="t-h3 text-2xl sm:text-3xl">{role.heading}</h3>
        <p className="measure mt-4 leading-7 text-muted-foreground">{role.description}</p>
        <ul className="mt-6 flex flex-col gap-3 text-sm font-medium">
          {role.permissions.map((p) => (
            <li key={p.label} className={cn('flex items-center gap-3', !p.allowed && 'text-muted-foreground')}>
              <span className={cn('grid size-6 shrink-0 place-items-center rounded-full', p.allowed ? 'bg-paid-soft text-paid-ink' : 'bg-muted text-muted-foreground')}>
                {p.allowed ? <Check className="size-3.5" aria-hidden /> : <CircleX className="size-3.5" aria-hidden />}
              </span>
              <span>
                {p.label}
                <span className="sr-only">{p.allowed ? ' (allowed)' : ' (not allowed)'}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="on-deep rounded-2xl bg-deep-card p-5 text-white ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <span className="text-sm text-white/70">{panel.title}</span>
          <span className="flex items-center gap-2">
            <SampleTag className="border-white/30 text-white/70">Sample data</SampleTag>
            <TrendingUp className="size-5 text-amber-300" aria-hidden />
          </span>
        </div>
        <p className="num mt-5 font-display text-4xl font-bold">{panel.value}</p>
        <p className="mt-1 text-sm text-emerald-100/80">{panel.caption}</p>
        <div
          className="mt-8 h-2 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={panel.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={panel.progressLabel}
        >
          <motion.div
            className="h-full origin-left rounded-full bg-amber-400"
            style={{ width: `${panel.progress}%` }}
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="mt-2 text-xs text-white/70">{panel.progressLabel}</p>
      </div>
    </div>
  )
}
