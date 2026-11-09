'use client'

import { Check, ChevronDown, Globe } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLocale, useMessages } from '@/i18n/client'
import { LOCALE_META, LOCALES, type Locale } from '@/i18n/config'
import { localePath, splitLocale } from '@/i18n/path'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  /** 'light' on the page, 'deep' on the dark green footer. */
  tone?: 'light' | 'deep'
  /**
   * 'menu': a small button showing the current code (EN) that opens the list. Takes the least space; used in the header.
   * 'inline': every code in one row, EN | FR | IT ...; used where there is room (footer, mobile menu).
   */
  variant?: 'menu' | 'inline'
}

/** Each language is a real link (works without JavaScript and is crawlable). A plain click keeps the query string and #anchor. */
function useLocaleLinks() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { path } = splitLocale(pathname)
  const hrefFor = (l: Locale) => localePath(l, path)
  const onClick = (l: Locale) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return // let the browser open it in a new tab
    e.preventDefault()
    router.push(`${hrefFor(l)}${window.location.search}${window.location.hash}`)
  }
  return { locale, hrefFor, onClick }
}

export function LanguageSwitcher({ className, tone = 'light', variant = 'menu' }: Props) {
  return variant === 'inline' ? <InlineSwitcher className={className} tone={tone} /> : <MenuSwitcher className={className} tone={tone} />
}

function InlineSwitcher({ className, tone }: { className?: string; tone: 'light' | 'deep' }) {
  const m = useMessages()
  const { locale, hrefFor, onClick } = useLocaleLinks()
  return (
    <nav aria-label={m.common.language} className={className}>
      <ul className="flex flex-wrap items-center">
        {LOCALES.map((l, i) => {
          const current = l === locale
          return (
            <li key={l} className={cn('flex items-center', i > 0 && (tone === 'deep' ? 'border-s border-white/25' : 'border-s border-[var(--border-strong)]'))}>
              <Link
                href={hrefFor(l)}
                onClick={onClick(l)}
                lang={LOCALE_META[l].htmlLang}
                hrefLang={LOCALE_META[l].htmlLang}
                aria-label={LOCALE_META[l].label}
                title={LOCALE_META[l].label}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-11 min-w-10 items-center justify-center px-2 text-sm tracking-wide transition-colors',
                  current
                    ? tone === 'deep' ? 'font-bold text-white' : 'font-bold text-primary'
                    : tone === 'deep' ? 'text-emerald-100/70 hover:text-white' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {l.toUpperCase()}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function MenuSwitcher({ className, tone }: { className?: string; tone: 'light' | 'deep' }) {
  const m = useMessages()
  const { locale, hrefFor, onClick } = useLocaleLinks()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return
    const outside = (e: PointerEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false) }
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', key) }
  }, [open])

  return (
    <div ref={root} className={cn('relative', className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${m.common.language}: ${LOCALE_META[locale].label}`}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold tracking-wide transition-colors',
          tone === 'deep' ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border-[var(--border-strong)] bg-card text-foreground hover:bg-secondary',
        )}
      >
        <Globe aria-hidden className="size-4" />
        {locale.toUpperCase()}
        <ChevronDown aria-hidden className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <ul className="absolute end-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-[var(--border-strong)] bg-card py-1 text-foreground shadow-[0_20px_50px_-20px_rgb(var(--shadow-color)/.45)]">
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={hrefFor(l)}
                onClick={(e) => { onClick(l)(e); setOpen(false) }}
                lang={LOCALE_META[l].htmlLang}
                hrefLang={LOCALE_META[l].htmlLang}
                aria-current={l === locale ? 'true' : undefined}
                className={cn('flex min-h-11 items-center justify-between gap-3 px-4 text-sm transition-colors hover:bg-secondary', l === locale && 'font-semibold text-primary')}
              >
                <span>{LOCALE_META[l].label}</span>
                {l === locale ? <Check aria-hidden className="size-4" /> : <span aria-hidden className="text-xs text-muted-foreground">{l.toUpperCase()}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
