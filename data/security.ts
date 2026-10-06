export type SecurityItem = {
  id: 'roles' | 'receipts' | 'backups' | 'audit' | 'privacy'
  title: string
  text: string
}

// Modest descriptions only. No certifications or technical guarantees are claimed.
export const securityItems: SecurityItem[] = [
  { id: 'roles', title: 'Role-based access', text: 'Owner, Accountant and Sales Agent each see only what their job needs. An agent can add a deal but not delete one.' },
  { id: 'receipts', title: 'Receipts with unique IDs', text: 'Every payment gets a receipt with its own ID, so a receipt can always be traced back to one deal and one payment.' },
  { id: 'backups', title: 'Backups', text: 'Your records are kept so a lost phone or a broken laptop does not mean lost payment history.' },
  { id: 'audit', title: 'Audit trail', text: 'Changes to deals and payments are recorded with who made them and when.' },
  { id: 'privacy', title: 'Data privacy', text: 'Buyer and investor details are for your team only. Your records are not shared with other dealers.' },
]

export const auditRows = [
  { who: 'Accountant', what: 'Recorded payment for A-104', when: '10:32' },
  { who: 'Sales Agent', what: 'Added deal for C-018', when: '09:48' },
  { who: 'Owner', what: 'Changed plan for D-006', when: 'Yesterday' },
]
