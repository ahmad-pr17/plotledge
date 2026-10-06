// Money helpers for lakh and crore. Amounts are PKR.
export function formatPKR(amount: number): string {
  return `PKR ${Math.round(amount).toLocaleString('en-IN')}`
}

/** 4_82_00_000 -> "PKR 4.82Cr", 6_840_000 -> "PKR 68.4L". */
export function formatCompactPKR(amount: number): string {
  const abs = Math.abs(amount)
  if (abs >= 1_00_00_000) return `PKR ${trim(amount / 1_00_00_000, 2)}Cr`
  if (abs >= 1_00_000) return `PKR ${trim(amount / 1_00_000, 1)}L`
  return formatPKR(amount)
}

/** Lakh figure to compact text: 31.2 -> "31.2L", 316.4 -> "3.16Cr". */
export function formatLakh(lakh: number): string {
  return lakh >= 100 ? `${trim(lakh / 100, 2)}Cr` : `${trim(lakh, 1)}L`
}

function trim(n: number, digits: number): string {
  return n.toFixed(digits).replace(/\.?0+$/, '')
}
