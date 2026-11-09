// Backup answers for the top questions, used only when the AI service cannot be reached.
// The text and the match keywords live in messages (chat.offline), per language.
import { SILVER_MONTHLY, GOLD_MONTHLY, YEARLY_SAVING_PERCENT } from '@/data/pricing'
import type { Locale } from '@/i18n/config'
import { fmt } from '@/i18n/text'

export type OfflineEntry = { id: string; keywords: string[]; answer: string }

/** Rs amount with Western digits in every language. */
const rs = (locale: Locale, n: number) => `Rs ${new Intl.NumberFormat(`${locale}-u-nu-latn`).format(Math.round(n))}`

/** The first entry that has a keyword inside the visitor's text (case-insensitive), or null. */
export function matchOfflineFaq(text: string, entries: OfflineEntry[], locale: Locale): string | null {
  const lower = text.toLowerCase()
  const hit = entries.find((e) => e.answer && e.keywords.some((k) => k && lower.includes(k.toLowerCase())))
  if (!hit) return null
  return fmt(hit.answer, { silver: rs(locale, SILVER_MONTHLY), gold: rs(locale, GOLD_MONTHLY), pct: YEARLY_SAVING_PERCENT })
}
