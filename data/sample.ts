// SAMPLE DATA. Every number, name and ID in this file is made up for the product demo.
// Amounts are in PKR. "Lakh" fields hold values in lakh (1 lakh = 100,000, 100 lakh = 1 crore).

export const SAMPLE_LABEL = 'Sample data'

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] as const

/** Money received per month, in lakh. Totals PKR 3.16Cr. */
export const collectionsLakh = [31.2, 38.5, 35.8, 47.9, 44.6, 52.3, 66.1]
/** Money still outstanding per month of billing, in lakh. Totals PKR 1.66Cr. */
export const outstandingLakh = [6.4, 7.9, 9.5, 13.2, 19.8, 31.6, 77.6]

export const totals = {
  sales: 4_82_00_000,
  received: 3_16_40_000,
  outstanding: 1_66_00_000,
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
  { id: 'sales', label: 'Total sales', value: 4.82, decimals: 2, prefix: 'PKR ', suffix: 'Cr', delta: 14.2, deltaLabel: 'vs last quarter', upIsGood: true, spark: [28, 34, 31, 42, 47, 55, 64] },
  { id: 'received', label: 'Received', value: 3.16, decimals: 2, prefix: 'PKR ', suffix: 'Cr', delta: 12.4, deltaLabel: 'vs last quarter', upIsGood: true, spark: [31, 38, 36, 48, 45, 52, 66] },
  { id: 'outstanding', label: 'Outstanding', value: 1.66, decimals: 2, prefix: 'PKR ', suffix: 'Cr', delta: -6.8, deltaLabel: 'vs last quarter', upIsGood: false, spark: [30, 28, 31, 27, 26, 24, 22] },
  { id: 'rate', label: 'Collection rate', value: 65.6, decimals: 1, suffix: '%', delta: 4.1, deltaLabel: 'vs last quarter', upIsGood: true, spark: [52, 55, 54, 58, 60, 63, 66] },
]

export const paymentStatus = [
  { key: 'paid', label: 'Paid', count: 312 },
  { key: 'pending', label: 'Pending', count: 74 },
  { key: 'overdue', label: 'Overdue', count: 21 },
] as const

export const aging = [
  { bucket: '0 to 30 days', lakh: 9.8 },
  { bucket: '31 to 60 days', lakh: 6.4 },
  { bucket: '61 to 90 days', lakh: 3.2 },
  { bucket: '90+ days', lakh: 2.0 },
]

export const salesByType = [
  { type: 'House', lakh: 238 },
  { type: 'Plot', lakh: 176 },
  { type: 'Shop', lakh: 68 },
]

export const inventory = [
  { key: 'available', label: 'Available', count: 148 },
  { key: 'booked', label: 'Booked', count: 64 },
  { key: 'sold', label: 'Sold', count: 148 },
] as const

/** Profit on one project is PKR 48 lakh. Shares sum to 100. */
export const investors = [
  { name: 'Asad Mehmood', contributionLakh: 90, share: 45 },
  { name: 'Sana Malik', contributionLakh: 60, share: 30 },
  { name: 'Faisal Chaudhry', contributionLakh: 30, share: 15 },
  { name: 'Nida Rehman', contributionLakh: 20, share: 10 },
]
export const projectProfitLakh = 48

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
  { id: 'i2', plot: 'B-022', buyer: 'Hamza Qureshi', due: '20 Jul 2026', amount: 42500, status: 'Pending' },
  { id: 'i3', plot: 'C-018', buyer: 'Mehwish Ahmed', due: '28 Jul 2026', amount: 120000, status: 'Pending' },
  { id: 'i4', plot: 'D-006', buyer: 'Bilal Raza', due: '02 Aug 2026', amount: 65000, status: 'Pending' },
  { id: 'i5', plot: 'E-031', buyer: 'Usman Tariq', due: '05 Jun 2026', amount: 50000, status: 'Overdue' },
  { id: 'i6', plot: 'F-009', buyer: 'Rabia Siddiqui', due: '10 Jun 2026', amount: 75000, status: 'Overdue' },
  { id: 'i7', plot: 'G-014', buyer: 'Kamran Javed', due: '01 Jul 2026', amount: 95000, status: 'Paid' },
  { id: 'i8', plot: 'H-027', buyer: 'Nimra Aslam', due: '08 Jul 2026', amount: 55000, status: 'Paid' },
]

export const deal = {
  plot: 'A-104',
  size: '10 Marla',
  buyer: 'Ayesha Khan',
  salePrice: 3_830_000,
  costPrice: 3_000_000,
  downPayment: 770_000,
  installmentAmount: 85000,
  installmentCount: 36,
  installmentsPaid: 11,
  /** Down payment plus 11 installments. */
  paid: 770_000 + 11 * 85000,
  remaining: 3_830_000 - (770_000 + 11 * 85000),
  profit: 830_000,
}

export const receipt = {
  id: 'PL-RCT-2026-00418',
  date: '15 Jul 2026',
  buyer: 'Ayesha Khan',
  plot: 'A-104, 10 Marla',
  forWhat: 'Installment 12 of 36',
  amount: 85000,
  method: 'Bank transfer',
  slipRef: 'SLIP-7741920',
  receivedBy: 'Accounts desk',
}

export type TimelineState = 'paid' | 'due' | 'overdue' | 'upcoming'
export const timeline: { label: string; date: string; amount: number; state: TimelineState }[] = [
  { label: 'Down payment', date: '12 Aug 2025', amount: 770_000, state: 'paid' },
  { label: 'Installment 10', date: '15 May 2026', amount: 85000, state: 'paid' },
  { label: 'Installment 11', date: '15 Jun 2026', amount: 85000, state: 'paid' },
  { label: 'Installment 12', date: '15 Jul 2026', amount: 85000, state: 'paid' },
  { label: 'Installment 13', date: '15 Aug 2026', amount: 85000, state: 'due' },
  { label: 'Installment 14', date: '15 Sep 2026', amount: 85000, state: 'upcoming' },
]

export const overdueAlert = {
  plot: 'E-031',
  buyer: 'Usman Tariq',
  amount: 50000,
  dueDate: '05 Jun 2026',
  daysLate: 41,
}

export type ActivityKind = 'payment' | 'deal' | 'slip' | 'overdue'
export const activity: { id: string; kind: ActivityKind; text: string; meta: string; time: string }[] = [
  { id: 'a1', kind: 'payment', text: 'Payment received for A-104', meta: 'PKR 85,000 by bank transfer', time: '2 min ago' },
  { id: 'a2', kind: 'deal', text: 'New deal created for C-018', meta: 'Agent Hira Naveed', time: '18 min ago' },
  { id: 'a3', kind: 'slip', text: 'Slip SLIP-7741921 attached', meta: 'Matched to B-022', time: '1 hr ago' },
  { id: 'a4', kind: 'overdue', text: 'E-031 installment is overdue', meta: '41 days late', time: '3 hr ago' },
  { id: 'a5', kind: 'payment', text: 'Payment received for G-014', meta: 'PKR 95,000 in cash', time: 'Yesterday' },
]

export const agents = [
  { name: 'Zeeshan Ali', deals: 14, collectedLakh: 96 },
  { name: 'Hira Naveed', deals: 11, collectedLakh: 74 },
  { name: 'Talha Mirza', deals: 9, collectedLakh: 61 },
  { name: 'Sidra Anwar', deals: 7, collectedLakh: 48 },
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

/** 6 blocks of 10 plots. Deterministic so server and client render the same grid. */
export const plots: Plot[] = PATTERN.map((status, i) => {
  const size = SIZES[(i * 7 + Math.floor(i / 10)) % SIZES.length]
  return {
    id: `${BLOCKS[Math.floor(i / 10)]}-${String((i % 10) + 1).padStart(3, '0')}`,
    status,
    size,
    price: BASE_PRICE[size] + (i % 5) * 50_000,
  }
})
