// Prices are defined in rupees. Visitors outside Pakistan see an approximate local amount.
// Rates are rupees per 1 unit. Review them from time to time. Billing itself stays in rupees.
import { CURRENCY_PREFIX } from '@/lib/format'

export const RATES_PKR: Record<string, number> = { PKR: 1, USD: 280, AED: 76, SAR: 75, GBP: 370, EUR: 325, INR: 3.3 }

const EURO_REGIONS = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'FI', 'GR']
const REGION_CURRENCY: Record<string, string> = { PK: 'PKR', US: 'USD', AE: 'AED', SA: 'SAR', GB: 'GBP', IN: 'INR' }

export function currencyForRegion(region?: string): string {
  if (!region) return 'PKR'
  const r = region.toUpperCase()
  return REGION_CURRENCY[r] ?? (EURO_REGIONS.includes(r) ? 'EUR' : 'PKR')
}

export function detectCurrency(): string {
  try {
    const locale = navigator.languages?.[0] ?? navigator.language
    return currencyForRegion(new Intl.Locale(locale).region)
  } catch {
    return 'PKR'
  }
}

export function formatPrice(amountPkr: number, currency: string): string {
  if (currency === 'PKR') return `${CURRENCY_PREFIX} ${amountPkr.toLocaleString('en-US')}`
  const converted = Math.round(amountPkr / RATES_PKR[currency])
  return `~${new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 0 }).format(converted)}`
}
