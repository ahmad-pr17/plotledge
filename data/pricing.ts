import enPricing from '@/messages/en/pricing'
import { fmt } from '@/i18n/text'

/** Paid prices in rupees. Mirrors the CRM plan catalog (server/config/planCatalog.js in the CRM repo). */
export const SILVER_MONTHLY = 10000
export const SILVER_YEARLY = 100000
export const GOLD_MONTHLY = 40000
export const GOLD_YEARLY = 400000
/** Yearly is two months free: (12 x monthly - yearly) / (12 x monthly), rounded. */
export const YEARLY_SAVING_PERCENT = 17

/** Free trial offered before any paid plan. Limits are fixed so the trial stays small. */
export const TRIAL = {
  days: 15,
}

export type PlanId = 'trial' | 'silver' | 'gold' | 'enterprise'

/** Plan names are product names and are never translated. All other plan text lives in messages (pricing.plans). */
export type Plan = {
  id: PlanId
  name: string
  /** Monthly price in rupees, or null for custom pricing. */
  monthly: number | null
  yearlyPerMonth: number | null
  yearlyTotal: number | null
  popular?: boolean
  /** English highlights, for the English-only chatbot prompt. The website reads m.pricing.plans[id].highlights instead. */
  highlights: string[]
}

const englishHighlights = (id: PlanId) => enPricing.plans[id].highlights.map((h) => fmt(h, { days: TRIAL.days }))

/** Shown first on the pricing section. Not part of `plans`, so it never reaches the price lists. */
export const trialPlan: Plan = {
  id: 'trial',
  name: 'Trial',
  monthly: 0,
  yearlyPerMonth: 0,
  yearlyTotal: null,
  highlights: englishHighlights('trial'),
}

export const plans: Plan[] = [
  {
    id: 'silver',
    name: 'Silver',
    monthly: SILVER_MONTHLY,
    yearlyPerMonth: SILVER_YEARLY / 12,
    yearlyTotal: SILVER_YEARLY,
    highlights: englishHighlights('silver'),
  },
  {
    id: 'gold',
    name: 'Gold',
    monthly: GOLD_MONTHLY,
    yearlyPerMonth: GOLD_YEARLY / 12,
    yearlyTotal: GOLD_YEARLY,
    popular: true,
    highlights: englishHighlights('gold'),
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: null,
    yearlyPerMonth: null,
    yearlyTotal: null,
    highlights: englishHighlights('enterprise'),
  },
]

/** Cell value: true is a check, false is a dash, a number is formatted for the page language, a keyword is translated text. */
export type Cell = boolean | number | 'unlimited' | 'standard' | 'priority' | 'dedicated'

/** `id` keys the row label in messages (pricing.table.rows). */
export type ComparisonRow = { id: string } & Record<Exclude<PlanId, 'trial'>, Cell>

const row = (id: string, silver: Cell, gold: Cell, enterprise: Cell): ComparisonRow => ({ id, silver, gold, enterprise })
const all = (id: string): ComparisonRow => row(id, true, true, true)
const goldUp = (id: string): ComparisonRow => row(id, false, true, true)
const enterpriseOnly = (id: string): ComparisonRow => row(id, false, false, true)

export const comparisonRows: ComparisonRow[] = [
  row('branches', 1, 3, 'unlimited'),
  row('projects', 5, 25, 'unlimited'),
  row('plots', 1000, 10000, 'unlimited'),
  row('activeDeals', 250, 2500, 'unlimited'),
  row('staff', 3, 8, 'unlimited'),
  row('salespersons', 10, 40, 'unlimited'),
  all('roles'),
  all('dashboard'),
  all('customers'),
  all('leads'),
  all('inventory'),
  all('finance'),
  all('proofs'),
  goldUp('leadsUpload'),
  goldUp('wallet'),
  goldUp('investors'),
  goldUp('mutuals'),
  goldUp('formsLedger'),
  goldUp('dealerPdfs'),
  goldUp('multiBranch'),
  goldUp('importBackup'),
  enterpriseOnly('slipImport'),
  enterpriseOnly('loans'),
  enterpriseOnly('generalLedger'),
  enterpriseOnly('crossBranch'),
  enterpriseOnly('migration'),
  row('support', 'standard', 'priority', 'dedicated'),
]
