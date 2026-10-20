/** Lowest paid price, used for "from" copy and structured data. */
export const STARTER_MONTHLY = 9999
export const STARTER_YEARLY = 95990
export const GROWTH_MONTHLY = 14999
export const GROWTH_YEARLY = 143990
export const BUSINESS_MONTHLY = 24999
export const BUSINESS_YEARLY = 239990
export const YEARLY_SAVING_PERCENT = 20

/** Free trial offered before any paid plan. Limits are fixed so the trial stays small. */
export const TRIAL = {
  days: 15,
  users: 2,
  plots: 25,
  highlights: ['15 days, no payment needed', '2 team members', 'Up to 25 plots', 'Deals, installments and receipts'],
}

export type PlanId = 'trial' | 'starter' | 'growth' | 'business' | 'enterprise'

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
  highlights: [`${TRIAL.days} days, no payment needed`, `${TRIAL.users} team members`, `Up to ${TRIAL.plots} plots`, 'Deals, installments and receipts', 'Receipts with unique IDs'],
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For one project or a dealer just moving off Excel.',
    monthly: STARTER_MONTHLY,
    yearlyPerMonth: STARTER_YEARLY / 12,
    yearlyTotal: STARTER_YEARLY,
    highlights: ['Up to 100 plots', '2 team members', 'Installments and receipts', 'Payment ledger'],
  },
  {
    id: 'growth',
    name: 'Growth',
    blurb: 'For a team selling and collecting every week.',
    monthly: GROWTH_MONTHLY,
    yearlyPerMonth: GROWTH_YEARLY / 12,
    yearlyTotal: GROWTH_YEARLY,
    popular: true,
    highlights: ['Unlimited plots', '5 team members', 'Reports and exports', 'Investors and profit split'],
  },
  {
    id: 'business',
    name: 'Business',
    blurb: 'For dealers running several projects with a larger team.',
    monthly: BUSINESS_MONTHLY,
    yearlyPerMonth: BUSINESS_YEARLY / 12,
    yearlyTotal: BUSINESS_YEARLY,
    highlights: ['Everything in Growth', 'Several projects', '15 team members', 'Loans and dealer exchanges'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For societies and groups with custom needs.',
    monthly: null,
    yearlyPerMonth: null,
    yearlyTotal: null,
    highlights: ['Everything in Business', 'Custom team size', 'Guided setup', 'Priority support'],
  },
]

/** Cell value: true is a check, false is a dash, a string is shown as text. */
export type Cell = boolean | string

export type ComparisonRow = { feature: string } & Record<Exclude<PlanId, 'trial'>, Cell>

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Plots', starter: 'Up to 100', growth: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Team members', starter: '2', growth: '5', business: '15', enterprise: 'Custom' },
  { feature: 'Plot inventory (available, booked, sold)', starter: true, growth: true, business: true, enterprise: true },
  { feature: 'Deals and installment plans', starter: true, growth: true, business: true, enterprise: true },
  { feature: 'Receipts with unique IDs', starter: true, growth: true, business: true, enterprise: true },
  { feature: 'Payment slip records', starter: true, growth: true, business: true, enterprise: true },
  { feature: 'Reports and exports', starter: false, growth: true, business: true, enterprise: true },
  { feature: 'Investors and profit split', starter: false, growth: true, business: true, enterprise: true },
  { feature: 'Role-based access', starter: false, growth: true, business: true, enterprise: true },
  { feature: 'Loans and finance ledger', starter: false, growth: false, business: true, enterprise: true },
  { feature: 'Dealer exchanges', starter: false, growth: false, business: true, enterprise: true },
  { feature: 'Several projects', starter: false, growth: false, business: true, enterprise: true },
  { feature: 'Priority support', starter: false, growth: false, business: false, enterprise: true },
  { feature: 'Onboarding help', starter: 'Excel import on request', growth: 'Excel import on request', business: 'Excel import on request', enterprise: 'Guided setup' },
]
