// Product screen data. Edit the numbers here and every card, chart and table updates together.
// Amounts are in rupees. "M" fields hold values in millions (1 million = 1,000,000).
// The totals below are tied together: received + outstanding = sales, and the monthly series add up to them.

import type { Locale } from '@/i18n/config'
import { CURRENCY_PREFIX } from '@/lib/format'

/** The seven months the charts cover, January to July. Names come from Intl in the page language. */
export const MONTH_COUNT = 7

const latn = (locale: Locale) => `${locale}-u-ca-gregory-nu-latn`

/** Month names for the charts, in the page language: monthLabels('en', 'short') -> ['Jan', ... 'Jul']. */
export function monthLabels(locale: Locale, month: 'short' | 'long' = 'short'): string[] {
  const f = new Intl.DateTimeFormat(latn(locale), { month, timeZone: 'UTC' })
  return Array.from({ length: MONTH_COUNT }, (_, i) => f.format(new Date(Date.UTC(2026, i, 1))))
}

/** 'YYYY-MM-DD' -> '2026-07-15'. The order of day, month and year comes from the message `pattern` ('{day} {month} {year}'). */
export function formatDate(locale: Locale, iso: string, pattern: string): string {
  const [y, mo, d] = iso.split('-').map(Number)
  const month = new Intl.DateTimeFormat(latn(locale), { month: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(y, mo - 1, 1)))
  return pattern.replace('{day}', String(d).padStart(2, '0')).replace('{month}', month).replace('{year}', String(y))
}

/** 85000 -> 'Rs 85,000' with Western digits and the page language's grouping. */
export function formatRsL(locale: Locale, amount: number): string {
  return `${CURRENCY_PREFIX} ${new Intl.NumberFormat(`${locale}-u-nu-latn`).format(Math.round(amount))}`
}

/** Locale-aware number with Western digits: formatNum('fr', 14.2, 1) -> '14,2'. */
export function formatNum(locale: Locale, n: number, minFraction = 0, maxFraction = minFraction): string {
  return new Intl.NumberFormat(`${locale}-u-nu-latn`, { minimumFractionDigits: minFraction, maximumFractionDigits: maxFraction }).format(n)
}

/** Money received per month, in millions. Adds up to 31.64 million. */
export const collectionsM = [3.12, 3.85, 3.58, 4.79, 4.46, 5.23, 6.61]
/** Money still outstanding per month of billing, in millions. Adds up to 16.6 million. */
export const outstandingM = [0.64, 0.79, 0.95, 1.32, 1.98, 3.16, 7.76]

export const totals = {
  sales: 48_200_000,
  received: 31_640_000,
  outstanding: 16_600_000,
  collectionRate: 65.6,
}

export type Kpi = {
  id: 'sales' | 'received' | 'outstanding' | 'rate'
  value: number
  decimals?: number
  prefix?: string
  /** 'million' shows the translated word after the number, 'percent' shows %. */
  unit: 'million' | 'percent'
  delta: number
  /** Is a rising delta good news? Outstanding going down is good. */
  upIsGood: boolean
  spark: number[]
}

export const kpis: Kpi[] = [
  { id: 'sales', value: 48.2, decimals: 1, prefix: 'Rs ', unit: 'million', delta: 14.2, upIsGood: true, spark: [28, 34, 31, 42, 47, 55, 64] },
  { id: 'received', value: 31.6, decimals: 1, prefix: 'Rs ', unit: 'million', delta: 12.4, upIsGood: true, spark: [31, 38, 36, 48, 45, 52, 66] },
  { id: 'outstanding', value: 16.6, decimals: 1, prefix: 'Rs ', unit: 'million', delta: -6.8, upIsGood: false, spark: [30, 28, 31, 27, 26, 24, 22] },
  { id: 'rate', value: 65.6, decimals: 1, unit: 'percent', delta: 4.1, upIsGood: true, spark: [52, 55, 54, 58, 60, 63, 66] },
]

export const paymentStatus = [
  { key: 'paid', count: 312 },
  { key: 'pending', count: 74 },
  { key: 'overdue', count: 21 },
] as const

/** Keys into messages.showcase.people (sample customer names, translated per language). */
export type PersonKey = 'ayesha' | 'hamza' | 'mehwish' | 'bilal' | 'usman' | 'rabia' | 'kamran' | 'nimra'

export type InstallmentStatus = 'Paid' | 'Pending' | 'Overdue'
export type Installment = {
  id: string
  plot: string
  buyer: PersonKey
  /** ISO date, formatted in the page language. */
  due: string
  amount: number
  status: InstallmentStatus
}

export const installments: Installment[] = [
  { id: 'i1', plot: 'A-104', buyer: 'ayesha', due: '2026-07-15', amount: 85000, status: 'Paid' },
  { id: 'i2', plot: 'B-107', buyer: 'hamza', due: '2026-07-20', amount: 42500, status: 'Pending' },
  { id: 'i3', plot: 'C-103', buyer: 'mehwish', due: '2026-07-28', amount: 120000, status: 'Pending' },
  { id: 'i4', plot: 'D-106', buyer: 'bilal', due: '2026-08-02', amount: 65000, status: 'Pending' },
  { id: 'i5', plot: 'E-102', buyer: 'usman', due: '2026-06-05', amount: 50000, status: 'Overdue' },
  { id: 'i6', plot: 'F-109', buyer: 'rabia', due: '2026-06-10', amount: 75000, status: 'Overdue' },
  { id: 'i7', plot: 'A-108', buyer: 'kamran', due: '2026-07-01', amount: 95000, status: 'Paid' },
  { id: 'i8', plot: 'B-101', buyer: 'nimra', due: '2026-07-08', amount: 55000, status: 'Paid' },
]

const DOWN_PAYMENT = 770_000
const INSTALLMENT = 85_000
const INSTALLMENT_COUNT = 36
const PAID_COUNT = 12
const SALE_PRICE = DOWN_PAYMENT + INSTALLMENT * INSTALLMENT_COUNT // 38,30,000

export const deal = {
  plot: 'A-104',
  size: { n: 10, unit: 'marla' } as PlotSize,
  buyer: 'ayesha' as PersonKey,
  salePrice: SALE_PRICE,
  costPrice: 3_000_000,
  downPayment: DOWN_PAYMENT,
  installmentAmount: INSTALLMENT,
  installmentCount: INSTALLMENT_COUNT,
  installmentsPaid: PAID_COUNT,
  /** Down payment plus 12 installments. */
  paid: DOWN_PAYMENT + PAID_COUNT * INSTALLMENT,
  remaining: SALE_PRICE - (DOWN_PAYMENT + PAID_COUNT * INSTALLMENT),
  profit: SALE_PRICE - 3_000_000,
}

export const receipt = {
  id: 'PL-RCT-2026-00418',
  date: '2026-07-15',
  buyer: 'ayesha' as PersonKey,
  plot: 'A-104',
  size: { n: 10, unit: 'marla' } as PlotSize,
  /** Installment number 12 of 36, written by the translated template. */
  installmentNo: PAID_COUNT,
  installmentCount: INSTALLMENT_COUNT,
  amount: INSTALLMENT,
  slipRef: 'SLIP-7741920',
}

export type TimelineState = 'paid' | 'due' | 'overdue' | 'upcoming'
export const timeline: { kind: 'down' | 'installment'; n?: number; date: string; amount: number; state: TimelineState }[] = [
  { kind: 'down', date: '2025-08-12', amount: DOWN_PAYMENT, state: 'paid' },
  { kind: 'installment', n: 10, date: '2026-05-15', amount: INSTALLMENT, state: 'paid' },
  { kind: 'installment', n: 11, date: '2026-06-15', amount: INSTALLMENT, state: 'paid' },
  { kind: 'installment', n: 12, date: '2026-07-15', amount: INSTALLMENT, state: 'paid' },
  { kind: 'installment', n: 13, date: '2026-08-15', amount: INSTALLMENT, state: 'due' },
  { kind: 'installment', n: 14, date: '2026-09-15', amount: INSTALLMENT, state: 'upcoming' },
]

/** Plot size: the number and the unit; the unit's name comes from messages.showcase.sizes. */
export type PlotSize = { n: number; unit: 'marla' | 'kanal' }

export type PlotStatus = 'available' | 'booked' | 'sold'
export type Plot = { id: string; status: PlotStatus; size: PlotSize; price: number }

const SIZES: PlotSize[] = [{ n: 5, unit: 'marla' }, { n: 7, unit: 'marla' }, { n: 10, unit: 'marla' }, { n: 1, unit: 'kanal' }]
const BASE_PRICE = [2_400_000, 3_200_000, 3_830_000, 7_600_000]
const PATTERN: PlotStatus[] = [
  'sold', 'sold', 'available', 'booked', 'sold', 'available', 'available', 'sold', 'booked', 'available',
  'sold', 'available', 'sold', 'sold', 'booked', 'available', 'sold', 'available', 'booked', 'sold',
  'available', 'booked', 'sold', 'available', 'sold', 'sold', 'available', 'available', 'booked', 'sold',
  'sold', 'available', 'booked', 'sold', 'available', 'sold', 'booked', 'available', 'sold', 'available',
  'booked', 'sold', 'available', 'available', 'sold', 'booked', 'sold', 'available', 'sold', 'booked',
  'available', 'sold', 'sold', 'booked', 'available', 'sold', 'available', 'booked', 'sold', 'available',
]
const BLOCKS = ['A', 'B', 'C', 'D', 'E', 'F']

/** Plots that appear in the installment table, so the map always shows them as sold. */
const SOLD_IN_TABLE = new Set(installments.map((i) => i.plot))

/** 6 blocks of 10 plots (A-101 to F-110). Deterministic so server and client render the same grid. */
export const plots: Plot[] = PATTERN.map((pattern, i) => {
  const id = `${BLOCKS[Math.floor(i / 10)]}-${101 + (i % 10)}`
  const sizeIdx = (i * 7 + Math.floor(i / 10)) % SIZES.length
  const size = id === deal.plot ? deal.size : SIZES[sizeIdx]
  const price = id === deal.plot ? deal.salePrice : BASE_PRICE[sizeIdx] + (i % 5) * 50_000
  return { id, status: SOLD_IN_TABLE.has(id) ? 'sold' : pattern, size, price }
})

export const plotCounts = plots.reduce(
  (c, p) => ({ ...c, [p.status]: c[p.status] + 1 }),
  { available: 0, booked: 0, sold: 0 } as Record<PlotStatus, number>,
)

/** { n: 10, unit: 'marla' } -> '10 Marla' using the translated templates (messages.showcase.sizes). */
export function sizeLabel(sizes: Record<PlotSize['unit'], string>, size: PlotSize): string {
  return sizes[size.unit].replace('{n}', String(size.n))
}
