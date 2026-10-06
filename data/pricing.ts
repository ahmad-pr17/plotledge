export const GROWTH_MONTHLY = 2999
export const GROWTH_YEARLY = 28788
/** Yearly price shown per month: 28,788 / 12. */
export const GROWTH_YEARLY_PER_MONTH = GROWTH_YEARLY / 12
export const YEARLY_SAVING_PERCENT = 20

export type Plan = {
  id: 'starter' | 'growth' | 'enterprise'
  name: string
  blurb: string
  /** Monthly price in PKR, or null for custom pricing. */
  monthly: number | null
  yearlyPerMonth: number | null
  yearlyTotal: number | null
  popular?: boolean
  highlights: string[]
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For one small project or a dealer just moving off Excel.',
    monthly: 0,
    yearlyPerMonth: 0,
    yearlyTotal: 0,
    highlights: ['Up to 25 plots', '1 team member', 'Basic payment ledger'],
  },
  {
    id: 'growth',
    name: 'Growth',
    blurb: 'For a team selling and collecting every week.',
    monthly: GROWTH_MONTHLY,
    yearlyPerMonth: GROWTH_YEARLY_PER_MONTH,
    yearlyTotal: GROWTH_YEARLY,
    popular: true,
    highlights: ['Unlimited plots', 'Installments and receipts', '5 team members', 'Reports and exports'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For societies with several projects and larger teams.',
    monthly: null,
    yearlyPerMonth: null,
    yearlyTotal: null,
    highlights: ['Everything in Growth', 'Several projects', 'Custom team size', 'Priority support'],
  },
]

/** Cell value: true is a check, false is a dash, a string is shown as text. */
export type Cell = boolean | string

export const comparisonRows: { feature: string; starter: Cell; growth: Cell; enterprise: Cell }[] = [
  { feature: 'Plots', starter: 'Up to 25', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Team members', starter: '1', growth: '5', enterprise: 'Custom' },
  { feature: 'Plot inventory (available, booked, sold)', starter: true, growth: true, enterprise: true },
  { feature: 'Deals and installment plans', starter: false, growth: true, enterprise: true },
  { feature: 'Receipts with unique IDs', starter: false, growth: true, enterprise: true },
  { feature: 'Payment slip records', starter: true, growth: true, enterprise: true },
  { feature: 'Investors and profit split', starter: false, growth: true, enterprise: true },
  { feature: 'Loans and finance ledger', starter: false, growth: true, enterprise: true },
  { feature: 'Dealer exchanges', starter: false, growth: true, enterprise: true },
  { feature: 'Reports and exports', starter: false, growth: true, enterprise: true },
  { feature: 'Role-based access', starter: false, growth: true, enterprise: true },
  { feature: 'Several projects', starter: false, growth: false, enterprise: true },
  { feature: 'Priority support', starter: false, growth: false, enterprise: true },
  { feature: 'Onboarding help', starter: false, growth: 'Excel import on request', enterprise: 'Guided setup' },
]
