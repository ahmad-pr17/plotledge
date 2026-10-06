import { collectionsM, plotCounts, plots } from '@/data/showcase'
import { formatMillion } from '@/lib/format'

export type RoleId = 'owner' | 'accountant' | 'agent'

export type Permission = { label: string; allowed: boolean }

export type Role = {
  id: RoleId
  name: string
  heading: string
  description: string
  /** Mini dashboard panel. */
  panel: { title: string; value: string; caption: string; progress: number; progressLabel: string }
  permissions: Permission[]
}

export const roles: Role[] = [
  {
    id: 'owner',
    name: 'Owner',
    heading: 'See where the business stands.',
    description: 'Total sales, money received, what is still outstanding, and the profit on each deal. Investor and dealer balances are one click away.',
    panel: { title: 'This month', value: `Rs ${formatMillion(collectionsM[collectionsM.length - 1])}`, caption: 'received in July across 42 active deals', progress: 74, progressLabel: '74% of what was due' },
    permissions: [
      { label: 'Sales, received and outstanding', allowed: true },
      { label: 'Profit on each deal', allowed: true },
      { label: 'Investor and dealer balances', allowed: true },
      { label: 'Every ledger and report', allowed: true },
      { label: 'Manage team accounts', allowed: true },
    ],
  },
  {
    id: 'accountant',
    name: 'Accountant',
    heading: 'Match every payment to its slip.',
    description: 'Check payments against bank slips, keep the ledgers straight, and print reports without asking anyone for numbers.',
    panel: { title: 'This week', value: '18 slips', caption: 'waiting to be matched to a payment', progress: 62, progressLabel: '62% already matched' },
    permissions: [
      { label: 'Record payments and slip references', allowed: true },
      { label: 'Issue receipts with unique IDs', allowed: true },
      { label: 'Deal reports and exports', allowed: true },
      { label: 'Investor profit splits', allowed: false },
      { label: 'Manage team accounts', allowed: false },
    ],
  },
  {
    id: 'agent',
    name: 'Sales Agent',
    heading: 'Enter deals, follow your buyers.',
    description: 'Agents add new deals and look up plots and buyers. Editing and deleting deals stays with the Owner and Accountant.',
    panel: { title: 'Open inventory', value: `${plotCounts.available} plots`, caption: 'still available to sell', progress: Math.round((plotCounts.sold / plots.length) * 100), progressLabel: `${Math.round((plotCounts.sold / plots.length) * 100)}% of plots sold` },
    permissions: [
      { label: 'Look up available plots', allowed: true },
      { label: 'See buyer details', allowed: true },
      { label: 'Add a new deal', allowed: true },
      { label: 'Edit or delete a deal', allowed: false },
      { label: 'See profit and investor data', allowed: false },
    ],
  },
]
