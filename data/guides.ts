/** Non-text facts about each guide. All words live in messages/<lang>/guides.ts, keyed by slug. */
export type Guide = {
  slug: string
  /** ISO date. */
  date: string
  readMinutes: number
}

export const guides: Guide[] = [
  { slug: 'how-to-track-plot-installments-without-excel', date: '2026-09-15', readMinutes: 4 },
  { slug: 'payment-slips-and-receipts-for-property-dealers', date: '2026-09-22', readMinutes: 4 },
  { slug: 'split-profit-between-investors-on-a-plot-project', date: '2026-09-29', readMinutes: 4 },
  { slug: 'how-to-choose-installment-management-software-in-pakistan', date: '2026-11-09', readMinutes: 5 },
  { slug: 'real-estate-crm-vs-erp-for-plot-dealers', date: '2026-11-09', readMinutes: 4 },
  { slug: 'how-to-track-plot-file-transfers-and-ownership-history', date: '2026-11-09', readMinutes: 4 },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
