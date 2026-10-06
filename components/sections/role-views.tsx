'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import { RoleCard } from '@/components/cards/role-card'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { roles, type RoleId } from '@/data/roles'
import { cn } from '@/lib/utils'

export function RoleViews() {
  const [active, setActive] = useState<RoleId>('owner')
  const reduce = useReducedMotion()
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = -1
    if (e.key === 'ArrowRight') next = (index + 1) % roles.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + roles.length) % roles.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = roles.length - 1
    if (next < 0) return
    e.preventDefault()
    const id = roles[next].id
    setActive(id)
    refs.current[id]?.focus()
  }

  return (
    <Section id="roles">
      <SectionHeading
        eyebrow="Your team"
        title="Same records, different jobs."
        description="The Owner, the Accountant and the Sales Agent each get their own login and see what they need."
      />
      <Reveal className="mt-10">
        <div role="tablist" aria-label="Team roles" className="flex w-full gap-1 overflow-x-auto rounded-full border border-border bg-card p-1 sm:w-fit">
          {roles.map((r, i) => {
            const selected = r.id === active
            return (
              <button
                key={r.id}
                ref={(el) => { refs.current[r.id] = el }}
                type="button"
                role="tab"
                id={`role-tab-${r.id}`}
                aria-selected={selected}
                aria-controls={`role-panel-${r.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(r.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  'relative min-h-11 flex-1 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors sm:flex-none sm:px-6',
                  selected ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="role-indicator"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{r.name}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          {roles.map((r) => (
            <div key={r.id} role="tabpanel" id={`role-panel-${r.id}`} aria-labelledby={`role-tab-${r.id}`} hidden={r.id !== active} tabIndex={0} className="rounded-3xl">
              <AnimatePresence mode="wait" initial={false}>
                {r.id === active && (
                  <motion.div
                    key={r.id}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <RoleCard role={r} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
