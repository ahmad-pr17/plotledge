// Prices are defined in rupees. Visitors outside Pakistan see an approximate local amount.
// Live rates are fetched on the server (see lib/rates.ts); the fixed rates below are the fallback.
// Rates are rupees per 1 unit. Billing itself stays in rupees.
import { CURRENCY_PREFIX } from '@/lib/format'

export type Rates = Record<string, number>

export const RATES_PKR: Rates = { PKR: 1, USD: 280, AED: 76, SAR: 75, GBP: 370, EUR: 325, INR: 3.3 }

// Currency -> ISO 3166 country codes that use it.
const CURRENCY_REGIONS: Record<string, string> = {
  PKR: 'PK', USD: 'US PR GU VI AS MP EC SV PA TL', EUR: 'AT BE HR CY EE FI FR DE GR IE IT LV LT LU MT NL PT SK SI ES AD MC SM VA ME XK',
  GBP: 'GB IM JE GG', AED: 'AE', SAR: 'SA', INR: 'IN', AUD: 'AU KI NR TV', CAD: 'CA', CHF: 'CH LI', CNY: 'CN', JPY: 'JP', KRW: 'KR',
  HKD: 'HK', SGD: 'SG', MYR: 'MY', THB: 'TH', IDR: 'ID', PHP: 'PH', VND: 'VN', TWD: 'TW', BDT: 'BD', LKR: 'LK', NPR: 'NP', AFN: 'AF',
  BTN: 'BT', MVR: 'MV', MMK: 'MM', KHR: 'KH', LAK: 'LA', BND: 'BN', MNT: 'MN', MOP: 'MO', NZD: 'NZ', FJD: 'FJ', PGK: 'PG', WST: 'WS',
  SBD: 'SB', TOP: 'TO', VUV: 'VU', QAR: 'QA', KWD: 'KW', BHD: 'BH', OMR: 'OM', JOD: 'JO', ILS: 'IL', LBP: 'LB', IQD: 'IQ', IRR: 'IR',
  SYP: 'SY', YER: 'YE', TRY: 'TR', EGP: 'EG', KZT: 'KZ', UZS: 'UZ', KGS: 'KG', TJS: 'TJ', TMT: 'TM', AZN: 'AZ', GEL: 'GE', AMD: 'AM',
  RUB: 'RU', UAH: 'UA', BYN: 'BY', MDL: 'MD', PLN: 'PL', CZK: 'CZ', HUF: 'HU', RON: 'RO', BGN: 'BG', RSD: 'RS', BAM: 'BA', MKD: 'MK',
  ALL: 'AL', ISK: 'IS', NOK: 'NO', SEK: 'SE', DKK: 'DK', ZAR: 'ZA', NGN: 'NG', KES: 'KE', GHS: 'GH', TZS: 'TZ', UGX: 'UG', ETB: 'ET',
  RWF: 'RW', BIF: 'BI', MAD: 'MA', DZD: 'DZ', TND: 'TN', LYD: 'LY', SDG: 'SD', SSP: 'SS', SOS: 'SO', DJF: 'DJ', ERN: 'ER', ZMW: 'ZM',
  MWK: 'MW', MZN: 'MZ', AOA: 'AO', BWP: 'BW', NAD: 'NA', LSL: 'LS', SZL: 'SZ', MGA: 'MG', MUR: 'MU', SCR: 'SC', CDF: 'CD', KMF: 'KM',
  GMD: 'GM', GNF: 'GN', LRD: 'LR', SLE: 'SL', MRU: 'MR', CVE: 'CV', STN: 'ST', XOF: 'BJ BF CI GW ML NE SN TG', XAF: 'CM CF TD CG GQ GA',
  MXN: 'MX', BRL: 'BR', ARS: 'AR', CLP: 'CL', COP: 'CO', PEN: 'PE', UYU: 'UY', PYG: 'PY', BOB: 'BO', VES: 'VE', GYD: 'GY', SRD: 'SR',
  CRC: 'CR', GTQ: 'GT', HNL: 'HN', NIO: 'NI', BZD: 'BZ', DOP: 'DO', HTG: 'HT', JMD: 'JM', TTD: 'TT', BBD: 'BB', BSD: 'BS', BMD: 'BM',
  KYD: 'KY', CUP: 'CU',
}

const REGION_CURRENCY: Record<string, string> = {}
for (const [currency, regions] of Object.entries(CURRENCY_REGIONS)) {
  for (const region of regions.split(' ')) REGION_CURRENCY[region] = currency
}

/** The currency for a country, or PKR when the country is unknown or has no rate available. */
export function currencyForRegion(region?: string, rates: Rates = RATES_PKR): string {
  if (!region) return 'PKR'
  const currency = REGION_CURRENCY[region.toUpperCase()]
  return currency && rates[currency] ? currency : 'PKR'
}

export function detectCurrency(rates: Rates = RATES_PKR): string {
  try {
    const locale = navigator.languages?.[0] ?? navigator.language
    return currencyForRegion(new Intl.Locale(locale).region, rates)
  } catch {
    return 'PKR'
  }
}

export function formatPrice(amountPkr: number, currency: string, rates: Rates = RATES_PKR): string {
  const rate = rates[currency]
  if (currency === 'PKR' || !rate) return `${CURRENCY_PREFIX} ${amountPkr.toLocaleString('en-US')}`
  const converted = Math.round(amountPkr / rate)
  try {
    return `~${new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 0 }).format(converted)}`
  } catch {
    return `${CURRENCY_PREFIX} ${amountPkr.toLocaleString('en-US')}`
  }
}
