// English text for the 'problem' namespace. See docs/i18n.md.
const problem = {
  eyebrow: 'Why Plot Ledge',
  title: 'From scattered files to one clear ledger.',
  description: 'When records live in five places, nobody can say what a buyer has paid. Plot Ledge keeps the whole story of each file in one place.',
  messy: {
    heading: 'Excel and WhatsApp chaos',
    /** Sample rows from a messy spreadsheet (three cells each). An empty cell shows a red "?". */
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'paid cash'],
      ['usman E102', '', 'call him'],
    ],
    quote: '"Which month did he pay?" Scroll up 400 messages, and hope the slip is still there.',
  },
  clear: {
    heading: 'One clear ledger',
    tableCaption: 'Installments with their status',
    columns: { plot: 'Plot', amount: 'Amount', status: 'Status' },
    status: { Paid: 'Paid', Pending: 'Pending', Overdue: 'Overdue' },
    receiptIssued: 'Receipt issued',
    note: 'Each payment links to its buyer, its slip and its receipt. Overdue installments show up on their own.',
  },
}
export default problem
