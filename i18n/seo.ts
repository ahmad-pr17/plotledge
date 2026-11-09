import type { Metadata } from 'next'
import { DEFAULT_LOCALE, LOCALE_META, LOCALES, type Locale } from './config'
import { localePath } from './path'

/**
 * Canonical address plus the same page in every other language, so search engines show each visitor the right one.
 * Use in a page's metadata:  alternates: pageAlternates(locale, '/privacy')
 */
export function pageAlternates(locale: Locale, path: string): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {}
  for (const l of LOCALES) languages[LOCALE_META[l].htmlLang] = localePath(l, path)
  languages['x-default'] = localePath(DEFAULT_LOCALE, path)
  return { canonical: localePath(locale, path), languages }
}

/** Open Graph fields that depend on the language. */
export function openGraphLocale(locale: Locale) {
  return { locale: LOCALE_META[locale].ogLocale, alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => LOCALE_META[l].ogLocale) }
}
