'use client'

import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useMessages } from '@/i18n/client'
import { LOCALE_META, LOCALES, type Locale } from '@/i18n/config'
import { localePath, splitLocale } from '@/i18n/path'
import { cn } from '@/lib/utils'

/**
 * Language picker. A native <select> on purpose: it works with every keyboard and screen reader, shows each language in its
 * own name and script, and needs no extra library. Changing it opens the same page in the chosen language.
 */
export function LanguageSwitcher({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'deep' }) {
  const locale = useLocale()
  const m = useMessages()
  const pathname = usePathname()
  const router = useRouter()

  const change = (next: Locale) => {
    const { path } = splitLocale(pathname)
    router.push(`${localePath(next, path)}${window.location.search}${window.location.hash}`)
  }

  return (
    <label
      className={cn(
        'relative inline-flex min-h-11 items-center rounded-full border text-sm font-medium transition-colors',
        tone === 'deep'
          ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
          : 'border-[var(--border-strong)] bg-card text-foreground hover:bg-secondary',
        className,
      )}
    >
      <Globe aria-hidden className="pointer-events-none absolute start-3 size-4" />
      <span className="sr-only">{m.common.language}</span>
      <select
        value={locale}
        onChange={(e) => change(e.target.value as Locale)}
        className="min-h-11 cursor-pointer appearance-none rounded-full bg-transparent ps-9 pe-4 text-inherit outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {LOCALES.map((l) => (
          <option key={l} value={l} lang={LOCALE_META[l].htmlLang} className="bg-card text-foreground">
            {LOCALE_META[l].label}
          </option>
        ))}
      </select>
    </label>
  )
}
