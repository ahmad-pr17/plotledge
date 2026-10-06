export type ExportItem = { id: 'pdf' | 'excel' | 'print'; title: string; text: string; cta: string }

export const exportItems: ExportItem[] = [
  { id: 'pdf', title: 'PDF report', text: 'Send a clean deals report to a partner or investor.', cta: 'Export PDF' },
  { id: 'excel', title: 'Excel export', text: 'Take the numbers to your own sheet when you need to.', cta: 'Export Excel' },
  { id: 'print', title: 'Print-ready deals report', text: 'A tidy page for the file, the bank or the meeting.', cta: 'Print report' },
]

export type IntegrationItem = { id: 'whatsapp' | 'excel' | 'pdf' | 'slips'; title: string; text: string }

export const integrationItems: IntegrationItem[] = [
  { id: 'whatsapp', title: 'WhatsApp', text: 'Share receipts and reminders with buyers by chat.' },
  { id: 'excel', title: 'Excel import', text: 'Bring your existing plots, buyers and payments in.' },
  { id: 'pdf', title: 'PDF export', text: 'Reports and receipts as files you can send.' },
  { id: 'slips', title: 'Bank slips', text: 'Attach the slip reference number to each payment.' },
]
