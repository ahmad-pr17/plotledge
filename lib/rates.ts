import { RATES_PKR, type Rates } from '@/lib/currency'

const ONE_DAY = 60 * 60 * 24

/** Rupees per 1 unit of each currency, refreshed daily. Falls back to the fixed rates if the API is down. */
export async function getRates(): Promise<Rates> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/PKR', { next: { revalidate: ONE_DAY }, signal: AbortSignal.timeout(5000) })
    if (!res.ok) throw new Error(String(res.status))
    const data = (await res.json()) as { result?: string; rates?: Record<string, number> }
    if (data.result !== 'success' || !data.rates) throw new Error('bad payload')
    const rates: Rates = { ...RATES_PKR }
    for (const [code, perPkr] of Object.entries(data.rates)) {
      if (perPkr > 0 && Number.isFinite(perPkr)) rates[code] = 1 / perPkr
    }
    rates.PKR = 1
    return rates
  } catch {
    return RATES_PKR
  }
}
