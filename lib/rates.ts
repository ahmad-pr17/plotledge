import { RATES_PKR, type Rates } from '@/lib/currency'

const ONE_DAY = 60 * 60 * 24
const MAX_DRIFT = 3

/** Rupees per 1 unit of each currency, refreshed daily. Falls back to the fixed rates if the API is down. */
export async function getRates(): Promise<Rates> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/PKR', { next: { revalidate: ONE_DAY }, signal: AbortSignal.timeout(5000) })
    if (!res.ok) throw new Error(String(res.status))
    const data = (await res.json()) as { result?: string; rates?: Record<string, number> }
    if (data.result !== 'success' || !data.rates) throw new Error('bad payload')
    const rates: Rates = { ...RATES_PKR }
    for (const [code, perPkr] of Object.entries(data.rates)) {
      if (typeof perPkr !== 'number' || !Number.isFinite(perPkr) || perPkr <= 0) continue
      const rupees = 1 / perPkr
      // The result is cached for a day, so a bad value would show wrong prices all day. For currencies we have a
      // fixed rate for, ignore anything more than 3x away from it and keep the fixed rate instead.
      const known = RATES_PKR[code]
      if (known && (rupees > known * MAX_DRIFT || rupees < known / MAX_DRIFT)) continue
      rates[code] = rupees
    }
    rates.PKR = 1
    return rates
  } catch {
    return RATES_PKR
  }
}
