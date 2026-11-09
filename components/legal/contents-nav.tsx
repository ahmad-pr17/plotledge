'use client'

import { ChevronDown, ListTree } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Props = { heading: string; label: string; items: { id: string; title: string }[] }

/**
 * "On this page": a rail with the section you are reading highlighted as you scroll. On large screens it is a sticky panel beside
 * the text (scrolls on its own when the list is long); on phones it is a collapsed panel that opens on tap.
 */
export function ContentsNav({ heading, label, items }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  const [open, setOpen] = useState(false)

  // The active entry is the last section whose heading has reached the top of the screen (just below the sticky header).
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e)
    if (!els.length) return
    let frame = 0
    const update = () => {
      frame = 0
      let id = els[0].id
      for (const el of els) if (el.getBoundingClientRect().top <= 140) id = el.id
      setActive(id)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [items])

  const current = items.find((i) => i.id === active)

  return (
    <nav aria-label={label} className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-[var(--border-strong)] bg-card lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="contents-list"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-12 w-full items-center gap-3 px-4 text-start lg:pointer-events-none lg:min-h-0 lg:cursor-default lg:pb-2 lg:pt-5"
        >
          <ListTree aria-hidden className="size-4 shrink-0 text-primary" />
          <span className="flex-1 font-display text-sm font-bold text-foreground">{heading}</span>
          <ChevronDown aria-hidden className={cn('size-4 shrink-0 text-muted-foreground transition-transform lg:hidden', open && 'rotate-180')} />
        </button>
        {!open && current && <p className="-mt-1 truncate px-4 pb-3 ps-11 text-xs text-muted-foreground lg:hidden">{current.title}</p>}
        <ol id="contents-list" className={cn('relative mx-4 mb-4 mt-1 flex-col border-s border-border', open ? 'flex' : 'hidden lg:flex')}>
          {items.map((i) => {
            const on = i.id === active
            return (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  aria-current={on ? 'location' : undefined}
                  onClick={(e) => {
                    const el = document.getElementById(i.id)
                    setActive(i.id)
                    setOpen(false)
                    if (!el) return
                    // Scroll to the section and move focus there, but replace the address instead of adding to it: Back then leaves the page in one step.
                    e.preventDefault()
                    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' })
                    el.setAttribute('tabindex', '-1')
                    el.focus({ preventScroll: true })
                    history.replaceState(null, '', `#${i.id}`)
                  }}
                  className={cn(
                    '-ms-px flex min-h-11 items-center border-s-2 py-1 ps-4 pe-2 text-sm leading-5 transition-colors',
                    on ? 'border-primary font-semibold text-foreground' : 'border-transparent text-muted-foreground hover:border-[var(--border-strong)] hover:text-foreground',
                  )}
                >
                  {i.title}
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
