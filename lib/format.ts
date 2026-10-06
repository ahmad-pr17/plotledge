// Money helpers. Amounts are shown in rupees and millions. Change CURRENCY_PREFIX to switch "Rs" to "PKR" everywhere.
export const CURRENCY_PREFIX = 'Rs'

export function formatRs(amount: number): string {
  return `${CURRENCY_PREFIX} ${Math.round(amount).toLocaleString('en-US')}`
}

/** 38_300_000 -> "Rs 38.3 million". Amounts under a million keep full digits. */
export function formatCompactRs(amount: number): string {
  return Math.abs(amount) >= 1_000_000 ? `${CURRENCY_PREFIX} ${trim(amount / 1_000_000, 2)} million` : formatRs(amount)
}

/** Value already in millions: 3.12 -> "3.12 million". */
export function formatMillion(millions: number): string {
  return `${trim(millions, 2)} million`
}

function trim(n: number, digits: number): string {
  return n.toFixed(digits).replace(/\.?0+$/, '')
}
