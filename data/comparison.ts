export type ComparisonRow = {
  topic: string
  excel: { ok: boolean; text: string }
  ledger: { ok: boolean; text: string }
}

export const comparisonRows: ComparisonRow[] = [
  { topic: 'Lost receipts', excel: { ok: false, text: 'Screenshots buried in chats' }, ledger: { ok: true, text: 'Every receipt has a unique ID' } },
  { topic: 'Missed installments', excel: { ok: false, text: 'Found when the buyer calls' }, ledger: { ok: true, text: 'Overdue shows up on its own' } },
  { topic: 'Who paid what', excel: { ok: false, text: 'Search three sheets' }, ledger: { ok: true, text: 'One page per buyer' } },
  { topic: 'Payment slips', excel: { ok: false, text: 'Photos in a phone gallery' }, ledger: { ok: true, text: 'Slip reference on the payment' } },
  { topic: 'Reporting time', excel: { ok: false, text: 'Hours at month end' }, ledger: { ok: true, text: 'Export in a few clicks' } },
  { topic: 'Investor visibility', excel: { ok: false, text: 'Asked for by phone' }, ledger: { ok: true, text: 'Share and profit on screen' } },
  { topic: 'Access control', excel: { ok: false, text: 'Everyone sees the file' }, ledger: { ok: true, text: 'Owner, Accountant, Agent roles' } },
  { topic: 'Works on a phone', excel: { ok: true, text: 'Awkward to edit' }, ledger: { ok: true, text: 'Pages resize to fit' } },
]
