// English text for the 'roles' namespace. See docs/i18n.md.
const roles = {
  eyebrow: 'Your team',
  title: 'Same records, different jobs.',
  description: 'The Owner, the Accountant and the Sales Agent each get their own login and see what they need.',
  tablistLabel: 'Team roles',
  allowed: '(allowed)',
  notAllowed: '(not allowed)',
  /** Keyed by role id. Permission order matches data/roles.ts; the allowed flags stay in code. {amount} {count} are numbers filled in by the component. */
  items: {
    owner: {
      name: 'Owner',
      heading: 'See where the business stands.',
      description: 'Total sales, money received, what is still outstanding, and the profit on each deal. Investor and dealer balances are one click away.',
      panel: { title: 'This month', value: 'Rs {amount} million', caption: 'received in July across 42 active deals', progressLabel: '74% of what was due' },
      permissions: [
        'Sales, received and outstanding',
        'Profit on each deal',
        'Investor and dealer balances',
        'Every ledger and report',
        'Manage team accounts',
      ],
    },
    accountant: {
      name: 'Accountant',
      heading: 'Match every payment to its slip.',
      description: 'Check payments against bank slips, keep the ledgers straight, and print reports without asking anyone for numbers.',
      panel: { title: 'This week', value: '18 slips', caption: 'waiting to be matched to a payment', progressLabel: '62% already matched' },
      permissions: [
        'Record payments and slip references',
        'Issue receipts with unique IDs',
        'Deal reports and exports',
        'Investor profit splits',
        'Manage team accounts',
      ],
    },
    agent: {
      name: 'Sales Agent',
      heading: 'Enter deals, follow your buyers.',
      description: 'Agents add new deals and look up plots and buyers. Editing and deleting deals stays with the Owner and Accountant.',
      panel: { title: 'Open inventory', value: '{count} plots', caption: 'still available to sell', progressLabel: '{pct}% of plots sold' },
      permissions: [
        'Look up available plots',
        'See buyer details',
        'Add a new deal',
        'Edit or delete a deal',
        'See profit and investor data',
      ],
    },
  },
}
export default roles
