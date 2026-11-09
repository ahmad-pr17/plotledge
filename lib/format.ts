// Money helpers. Amounts are shown in rupees and millions. Change CURRENCY_PREFIX to switch "Rs" to "PKR" everywhere.
// Numbers follow the page language for grouping but always use Western digits (0-9).
export const CURRENCY_PREFIX = 'Rs'

/** Intl locale tag for a page language: Western digits, and Mexican Spanish / Simplified Chinese grouping. */
export function numberLocale(locale: string = 'en'): string {
  const base = locale === 'es' ? 'es-MX' : locale === 'zh' ? 'zh-Hans' : locale
  return `${base}-u-nu-latn`
}

/** Formats a plain number for the page language, e.g. 10000 -> "10,000". */
export function formatNumber(n: number, locale: string = 'en', maxFractionDigits = 0): string {
  return new Intl.NumberFormat(numberLocale(locale), { maximumFractionDigits: maxFractionDigits, useGrouping: true }).format(n)
}

export function formatRs(amount: number, locale: string = 'en'): string {
  return `${CURRENCY_PREFIX} ${formatNumber(Math.round(amount), locale)}`
}

/** 38_300_000 -> "Rs 38.3 million". Amounts under a million keep full digits. `million` is the translated word. */
export function formatCompactRs(amount: number, locale: string = 'en', million = 'million'): string {
  return Math.abs(amount) >= 1_000_000 ? `${CURRENCY_PREFIX} ${formatNumber(amount / 1_000_000, locale, 2)} ${million}` : formatRs(amount, locale)
}

/** Value already in millions: 3.12 -> "3.12 million". `million` is the translated word. */
export function formatMillion(millions: number, locale: string = 'en', million = 'million'): string {
  return `${formatNumber(millions, locale, 2)} ${million}`
}
