export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export type Guide = {
  slug: string
  title: string
  description: string
  /** ISO date. */
  date: string
  readTime: string
  keywords: string[]
  body: GuideBlock[]
}

export const guides: Guide[] = [
  {
    slug: 'how-to-track-plot-installments-without-excel',
    title: 'How to track plot installments without Excel',
    description: 'A practical way to track plot installments, due dates and balances without scattered Excel sheets, using one ledger per deal.',
    date: '2026-09-15',
    readTime: '4 min read',
    keywords: ['installment tracking software', 'plot installment management system', 'plot management software'],
    body: [
      { type: 'p', text: 'Most plot dealers start with an Excel sheet. It works for ten buyers. At fifty, one sheet becomes five, a few payments live only in WhatsApp, and nobody is sure who still owes the June installment. This guide shows how to track installments in a way that survives growth, whether you use a plot installment management system or a very disciplined spreadsheet.' },
      { type: 'h2', text: 'Start with one record per deal' },
      { type: 'p', text: 'Every deal needs one place that holds the plot number, buyer, sale price, down payment, number of installments, installment amount and the first due date. If any of those lives in a different file, they will drift apart. Installment tracking software keeps all of it on one screen and builds the schedule for you.' },
      { type: 'h2', text: 'Generate the schedule once, then only record payments' },
      { type: 'p', text: 'Do not retype due dates every month. Create the full schedule when the deal is signed, then mark each line as paid when money arrives. A schedule has three states that everyone should read the same way:' },
      { type: 'ul', items: ['Paid: money received and a receipt issued.', 'Pending: not yet due, or due but still inside the agreed grace days.', 'Overdue: past the due date and not received.'] },
      { type: 'h2', text: 'Match every payment to a slip' },
      { type: 'p', text: 'An installment is only paid when you can show proof. Record the bank slip or transfer reference number against the same line. When a buyer says they paid on the 12th, you can open the deal and see the reference in seconds.' },
      { type: 'h2', text: 'Check overdue items every week' },
      { type: 'p', text: 'Set one fixed time each week to open the overdue list, oldest first. Call or message the buyer before the delay becomes three months. Grouping overdue amounts by age, such as 0 to 30 days and 31 to 60 days, shows you where to spend your time.' },
      { type: 'h2', text: 'What to do next' },
      { type: 'p', text: 'If you are still on Excel, clean one project first: one row per installment, not per buyer, and one column for the slip reference. If you want the schedule, receipts and overdue list to work without that upkeep, Plot Ledge is built for exactly this job.' },
    ],
  },
  {
    slug: 'payment-slips-and-receipts-for-property-dealers',
    title: 'How property dealers can manage payment slips and receipts',
    description: 'Keep bank slips, reference numbers and receipts linked to the right deal, so disputes end quickly and your accounts stay clean.',
    date: '2026-09-22',
    readTime: '4 min read',
    keywords: ['payment receipt software for property dealers', 'real estate accounting software Pakistan', 'property dealer software'],
    body: [
      { type: 'p', text: 'A buyer sends a photo of a bank slip on WhatsApp. A week later, nobody can find it, and the buyer insists the payment was made. Payment slips and receipts are the evidence behind every installment. This guide covers a simple routine for property dealers, with or without payment receipt software.' },
      { type: 'h2', text: 'Separate the slip from the receipt' },
      { type: 'p', text: 'The slip is what the buyer gets from the bank, with a reference number. The receipt is what you give back to confirm that you accepted the money. Keep both, and link them to each other and to the deal.' },
      { type: 'h2', text: 'Give every receipt a unique ID' },
      { type: 'p', text: 'Use a running number that never repeats, for example the year plus a sequence. Unique IDs stop duplicate receipts and make an audit simple: any receipt can be found from its number alone. Handwritten books make this hard, because pages get lost and numbers get skipped.' },
      { type: 'h2', text: 'Record these fields every time' },
      { type: 'ul', items: ['Receipt ID and date.', 'Buyer name and plot number.', 'Amount, and which installment it covers.', 'Payment method: cash, bank transfer, cheque or other.', 'Slip or reference number for anything that is not cash.', 'Who received the payment.'] },
      { type: 'h2', text: 'Reconcile weekly against the bank' },
      { type: 'p', text: 'Once a week, compare slips with the bank statement. Any slip without a matching deposit, or deposit without a slip, needs a call. Doing this weekly keeps errors small, and it is the heart of any real estate accounting routine in Pakistan or elsewhere.' },
      { type: 'h2', text: 'Make it searchable' },
      { type: 'p', text: 'The test of a good system is simple: can you answer "what did this buyer pay, when, and where is the proof" in under a minute? If not, move the records into one ledger where receipts, slips and deals are connected.' },
    ],
  },
  {
    slug: 'split-profit-between-investors-on-a-plot-project',
    title: 'How to split profit between investors on a plot project',
    description: 'A clear method to record investor contributions and share profit on a plot project, so every partner can see the same numbers.',
    date: '2026-09-29',
    readTime: '4 min read',
    keywords: ['plot management software', 'society management software', 'real estate accounting software Pakistan'],
    body: [
      { type: 'p', text: 'Plot projects are often funded by several people: a few partners buy land, develop it and sell plots over time. Disagreements rarely start with the profit itself. They start because nobody wrote down who put in what, and which costs came off before profit. Here is a clean way to handle it.' },
      { type: 'h2', text: 'Write down contributions first' },
      { type: 'p', text: 'Record each investor, the amount and the date. Share percentages follow from contributions: if one partner puts in 90 lakh of a 200 lakh project, their share is 45 percent. Agree this in writing before the first plot is sold, and keep the figures in your ledger.' },
      { type: 'h2', text: 'Agree what counts as a project cost' },
      { type: 'p', text: 'Profit is sale proceeds minus costs, so the list of costs matters. Typical items are land price, development, legal and transfer fees, marketing and agent commission. Decide this list up front, and record each expense against the project.' },
      { type: 'h2', text: 'Calculate profit as sales come in' },
      { type: 'ul', items: ['Add up money actually received from buyers, not just agreed prices.', 'Subtract project costs recorded so far.', 'Multiply the result by each investor share.', 'Pay out on a schedule everyone has agreed to.'] },
      { type: 'h2', text: 'Show every investor the same view' },
      { type: 'p', text: 'Trust grows when each partner can see contribution, share, received profit and balance without asking. Society management software or a project ledger that shows the investor split next to deals removes the need for a monthly meeting just to reconcile numbers.' },
      { type: 'h2', text: 'Keep exits and changes on record' },
      { type: 'p', text: 'If someone adds money or leaves, record the date and recalculate shares from that point, and note it in the ledger. A short written note today saves a long argument later.' },
    ],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
