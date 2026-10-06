'use client'

import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { Banknote, FileCheck, Handshake, Rss, TriangleAlert, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { activity, type ActivityKind } from '@/data/sample'
import { cn } from '@/lib/utils'
import { CardShell } from './card-shell'
import { EASE } from './fill-bar'

type Item = { id: string; kind: ActivityKind; text: string; meta: string; time: string }

const kindMeta: Record<ActivityKind, { icon: LucideIcon; chip: string }> = {
  payment: { icon: Banknote, chip: 'bg-paid-soft text-paid-ink' },
  deal: { icon: Handshake, chip: 'bg-primary/10 text-primary' },
  slip: { icon: FileCheck, chip: 'bg-pending-soft text-pending-ink' },
  overdue: { icon: TriangleAlert, chip: 'bg-overdue-soft text-overdue-ink' },
}

const pool: Omit<Item, 'id'>[] = [
  { kind: 'payment', text: 'Payment received for H-027', meta: 'PKR 55,000 by bank transfer', time: 'Just now' },
  { kind: 'deal', text: 'New deal created for D-006', meta: 'Agent Zeeshan Ali', time: 'Just now' },
  { kind: 'slip', text: 'Slip SLIP-7741922 attached', meta: 'Matched to C-018', time: 'Just now' },
  { kind: 'payment', text: 'Payment received for B-022', meta: 'PKR 42,500 in cash', time: 'Just now' },
]

const CAP = 5

export function ActivityFeed({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLUListElement>(null)
  const inView = useInView(ref)
  const [items, setItems] = useState<Item[]>(() => activity.slice(0, CAP))
  const counter = useRef(0)

  useEffect(() => {
    if (reduce || !inView) return
    const timer = setInterval(() => {
      const next = pool[counter.current % pool.length]
      counter.current += 1
      setItems((cur) => [{ ...next, id: `live-${counter.current}` }, ...cur].slice(0, CAP))
    }, 4000)
    return () => clearInterval(timer)
  }, [reduce, inView])

  return (
    <CardShell title="Activity feed" icon={Rss} className={className}>
      <ul ref={ref} className="flex flex-col gap-1" aria-label="Recent activity (sample)">
        <AnimatePresence initial={true} mode="popLayout">
          {items.map((it, i) => {
            const meta = kindMeta[it.kind]
            const Icon = meta.icon
            return (
              <motion.li
                key={it.id}
                layout={reduce ? false : 'position'}
                className="flex items-start gap-3 rounded-xl px-1 py-2.5"
                initial={reduce ? false : { opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={reduce ? undefined : { opacity: 0, y: 8 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.08, ease: EASE }}
              >
                <span className={cn('mt-0.5 grid size-8 shrink-0 place-items-center rounded-full', meta.chip)}>
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug">{it.text}</p>
                  <p className="num text-xs text-muted-foreground">{it.meta}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{it.time}</span>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </CardShell>
  )
}
