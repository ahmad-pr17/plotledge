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
  highlights: ['15 days, no payment needed', 'Deals, installments and receipts'],
}

export type PlanId = 'trial' | 'silver' | 'gold' | 'enterprise'

export type Plan = {
  id: PlanId
  name: string
  blurb: string
  /** Monthly price in rupees, or null for custom pricing. */
  monthly: number | null
  yearlyPerMonth: number | null
  yearlyTotal: number | null
  popular?: boolean
  highlights: string[]
}

/** Shown first on the pricing section. Not part of `plans`, so it never reaches the price lists. */
export const trialPlan: Plan = {
  id: 'trial',
  name: 'Trial',
  blurb: `Try Plot Ledge for ${TRIAL.days} days before you choose a plan.`,
  monthly: 0,
  yearlyPerMonth: 0,
  yearlyTotal: null,
  highlights: [`${TRIAL.days} days, no payment needed`, 'Deals, installments and receipts', 'Receipts with unique IDs'],
}

export const plans: Plan[] = [
  {
    id: 'silver',
    name: 'Silver',
    blurb: 'For a small agency running one branch.',
    monthly: SILVER_MONTHLY,
    yearlyPerMonth: SILVER_YEARLY / 12,
    yearlyTotal: SILVER_YEARLY,
    highlights: ['1 branch, 5 projects', 'Up to 1,000 plots and 250 active deals', '3 staff and 10 salespersons', 'Deals, installments, leads and receipts'],
  },
  {
    id: 'gold',
    name: 'Gold',
    blurb: 'For a growing developer with several dealers.',
    monthly: GOLD_MONTHLY,
    yearlyPerMonth: GOLD_YEARLY / 12,
    yearlyTotal: GOLD_YEARLY,
    popular: true,
    highlights: ['Everything in Silver', '3 branches, 25 projects', 'Up to 10,000 plots and 2,500 active deals', '8 staff and 40 salespersons', 'Investors, dealer mutuals and forms ledger', 'Excel import, backup and priority support'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For multi-branch developers with complex accounting.',
    monthly: null,
    yearlyPerMonth: null,
    yearlyTotal: null,
    highlights: ['Everything in Gold', 'Unlimited branches, projects, plots and deals', 'Unlimited staff and salespersons', 'Loans, general ledger and cross-branch reports', 'Data migration help and dedicated support'],
  },
]

/** Cell value: true is a check, false is a dash, a string is shown as text. */
export type Cell = boolean | string

export type ComparisonRow = { feature: string } & Record<Exclude<PlanId, 'trial'>, Cell>

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Branches', silver: '1', gold: '3', enterprise: 'Unlimited' },
  { feature: 'Projects', silver: '5', gold: '25', enterprise: 'Unlimited' },
  { feature: 'Plots', silver: '1,000', gold: '10,000', enterprise: 'Unlimited' },
  { feature: 'Active deals', silver: '250', gold: '2,500', enterprise: 'Unlimited' },
  { feature: 'Staff (admin and accountant)', silver: '3', gold: '8', enterprise: 'Unlimited' },
  { feature: 'Salespersons', silver: '10', gold: '40', enterprise: 'Unlimited' },
  { feature: 'Roles and secure login', silver: true, gold: true, enterprise: true },
  { feature: 'Dashboard and page charts', silver: true, gold: true, enterprise: true },
  { feature: 'Customers, deals and transaction history', silver: true, gold: true, enterprise: true },
  { feature: 'Leads', silver: true, gold: true, enterprise: true },
  { feature: 'Projects and plots inventory', silver: true, gold: true, enterprise: true },
  { feature: 'Finance and earnings', silver: true, gold: true, enterprise: true },
  { feature: 'Proof attachments', silver: true, gold: true, enterprise: true },
  { feature: 'Leads upload and auto-assign', silver: false, gold: true, enterprise: true },
  { feature: 'Salesperson wallet and team performance', silver: false, gold: true, enterprise: true },
  { feature: 'Investors and inventory payments', silver: false, gold: true, enterprise: true },
  { feature: 'Dealer mutuals', silver: false, gold: true, enterprise: true },
  { feature: 'Balances and forms ledger', silver: false, gold: true, enterprise: true },
  { feature: 'Dealer share and summary PDFs', silver: false, gold: true, enterprise: true },
  { feature: 'Multiple branches', silver: false, gold: true, enterprise: true },
  { feature: 'Excel import and data backup', silver: false, gold: true, enterprise: true },
  { feature: 'Slip record and Excel import', silver: false, gold: false, enterprise: true },
  { feature: 'Loans and investments', silver: false, gold: false, enterprise: true },
  { feature: 'General ledger', silver: false, gold: false, enterprise: true },
  { feature: 'Cross-branch consolidated reports', silver: false, gold: false, enterprise: true },
  { feature: 'Data migration assistance', silver: false, gold: false, enterprise: true },
  { feature: 'Support', silver: 'Standard', gold: 'Priority', enterprise: 'Dedicated, with SLA' },
]
