// Product screen data. Edit the numbers here and every card, chart and table updates together.
// Amounts are in rupees. "M" fields hold values in millions (1 million = 1,000,000).
// The totals below are tied together: received + outstanding = sales, and the monthly series add up to them.

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] as const

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
  id: string
  label: string
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  delta: number
  deltaLabel: string
  /** Is a rising delta good news? Outstanding going down is good. */
  upIsGood: boolean
  spark: number[]
}

export const kpis: Kpi[] = [
  { id: 'sales', label: 'Total sales', value: 48.2, decimals: 1, prefix: 'Rs ', suffix: ' million', delta: 14.2, deltaLabel: 'vs last quarter', upIsGood: true, spark: [28, 34, 31, 42, 47, 55, 64] },
  { id: 'received', label: 'Received', value: 31.6, decimals: 1, prefix: 'Rs ', suffix: ' million', delta: 12.4, deltaLabel: 'vs last quarter', upIsGood: true, spark: [31, 38, 36, 48, 45, 52, 66] },
  { id: 'outstanding', label: 'Outstanding', value: 16.6, decimals: 1, prefix: 'Rs ', suffix: ' million', delta: -6.8, deltaLabel: 'vs last quarter', upIsGood: false, spark: [30, 28, 31, 27, 26, 24, 22] },
  { id: 'rate', label: 'Collection rate', value: 65.6, decimals: 1, suffix: '%', delta: 4.1, deltaLabel: 'vs last quarter', upIsGood: true, spark: [52, 55, 54, 58, 60, 63, 66] },
]

export const paymentStatus = [
  { key: 'paid', label: 'Paid', count: 312 },
  { key: 'pending', label: 'Pending', count: 74 },
  { key: 'overdue', label: 'Overdue', count: 21 },
] as const

export type InstallmentStatus = 'Paid' | 'Pending' | 'Overdue'
export type Installment = {
  id: string
  plot: string
  buyer: string
  due: string
  amount: number
  status: InstallmentStatus
}

export const installments: Installment[] = [
  { id: 'i1', plot: 'A-104', buyer: 'Ayesha Khan', due: '15 Jul 2026', amount: 85000, status: 'Paid' },
  { id: 'i2', plot: 'B-107', buyer: 'Hamza Qureshi', due: '20 Jul 2026', amount: 42500, status: 'Pending' },
  { id: 'i3', plot: 'C-103', buyer: 'Mehwish Ahmed', due: '28 Jul 2026', amount: 120000, status: 'Pending' },
  { id: 'i4', plot: 'D-106', buyer: 'Bilal Raza', due: '02 Aug 2026', amount: 65000, status: 'Pending' },
  { id: 'i5', plot: 'E-102', buyer: 'Usman Tariq', due: '05 Jun 2026', amount: 50000, status: 'Overdue' },
  { id: 'i6', plot: 'F-109', buyer: 'Rabia Siddiqui', due: '10 Jun 2026', amount: 75000, status: 'Overdue' },
  { id: 'i7', plot: 'A-108', buyer: 'Kamran Javed', due: '01 Jul 2026', amount: 95000, status: 'Paid' },
  { id: 'i8', plot: 'B-101', buyer: 'Nimra Aslam', due: '08 Jul 2026', amount: 55000, status: 'Paid' },
]

const DOWN_PAYMENT = 770_000
const INSTALLMENT = 85_000
const INSTALLMENT_COUNT = 36
const PAID_COUNT = 12
const SALE_PRICE = DOWN_PAYMENT + INSTALLMENT * INSTALLMENT_COUNT // 38,30,000

export const deal = {
  plot: 'A-104',
  size: '10 Marla',
  buyer: 'Ayesha Khan',
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
  date: '15 Jul 2026',
  buyer: 'Ayesha Khan',
  plot: 'A-104, 10 Marla',
  forWhat: 'Installment 12 of 36',
  amount: INSTALLMENT,
  method: 'Bank transfer',
  slipRef: 'SLIP-7741920',
  receivedBy: 'Accounts desk',
}

export type TimelineState = 'paid' | 'due' | 'overdue' | 'upcoming'
export const timeline: { label: string; date: string; amount: number; state: TimelineState }[] = [
  { label: 'Down payment', date: '12 Aug 2025', amount: DOWN_PAYMENT, state: 'paid' },
  { label: 'Installment 10', date: '15 May 2026', amount: INSTALLMENT, state: 'paid' },
  { label: 'Installment 11', date: '15 Jun 2026', amount: INSTALLMENT, state: 'paid' },
  { label: 'Installment 12', date: '15 Jul 2026', amount: INSTALLMENT, state: 'paid' },
  { label: 'Installment 13', date: '15 Aug 2026', amount: INSTALLMENT, state: 'due' },
  { label: 'Installment 14', date: '15 Sep 2026', amount: INSTALLMENT, state: 'upcoming' },
]

export type PlotStatus = 'available' | 'booked' | 'sold'
export type Plot = { id: string; status: PlotStatus; size: string; price: number }

const SIZES = ['5 Marla', '7 Marla', '10 Marla', '1 Kanal']
const BASE_PRICE: Record<string, number> = { '5 Marla': 2_400_000, '7 Marla': 3_200_000, '10 Marla': 3_830_000, '1 Kanal': 7_600_000 }
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
  const size = id === deal.plot ? deal.size : SIZES[(i * 7 + Math.floor(i / 10)) % SIZES.length]
  const price = id === deal.plot ? deal.salePrice : BASE_PRICE[size] + (i % 5) * 50_000
  return { id, status: SOLD_IN_TABLE.has(id) ? 'sold' : pattern, size, price }
})

export const plotCounts = plots.reduce(
  (c, p) => ({ ...c, [p.status]: c[p.status] + 1 }),
  { available: 0, booked: 0, sold: 0 } as Record<PlotStatus, number>,
)
