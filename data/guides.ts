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
      { type: 'p', text: 'Use a running number that never repeats, such as the year plus a sequence. Unique IDs stop duplicate receipts and make an audit simple: any receipt can be found from its number alone. Handwritten books make this hard, because pages get lost and numbers get skipped.' },
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
      { type: 'p', text: 'Record each investor, the amount and the date. Share percentages follow from contributions: if one partner puts in Rs 9 million of a Rs 20 million project, their share is 45 percent. Agree this in writing before the first plot is sold, and keep the figures in your ledger.' },
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
  {
    slug: 'how-to-choose-installment-management-software-in-pakistan',
    title: 'How to choose installment management software in Pakistan',
    description: 'A practical checklist for plot dealers and housing societies comparing installment management software: schedules, receipts, roles, imports and questions to ask in a demo.',
    date: '2026-11-09',
    readTime: '5 min read',
    keywords: ['installment management software Pakistan', 'real estate software Pakistan', 'plot installment management system'],
    body: [
      { type: 'p', text: 'Search for real estate software in Pakistan and you will find accounting packages, full ERP systems, CRMs and custom-built tools, all described in similar words. For a plot dealer or a housing society, the real question is narrower: which one tracks every installment on every deal without extra work? This checklist helps you compare options fairly, whichever vendor you end up with.' },
      { type: 'h2', text: 'Start from your own deals' },
      { type: 'p', text: 'Write down how your biggest project actually sells: down payment, number of installments, balloon payments, possession payments. Any software you consider should model that plan without workarounds. If a vendor cannot set up one of your real deals during the demo, that is useful information.' },
      { type: 'h2', text: 'What a good installment tool must do' },
      { type: 'ul', items: ['Build the full payment schedule when the deal is created, so due dates are never retyped.', 'Show paid, pending and overdue lines clearly, with the oldest overdue amounts first.', 'Issue a receipt with its own unique ID for every payment recorded.', 'Keep the bank slip or transfer reference with the payment it belongs to.', 'Show a buyer balance in seconds: what was paid, what is due, what is overdue.', 'Give separate logins, so an accountant, an agent and the owner see different things.'] },
      { type: 'h2', text: 'Questions about your data' },
      { type: 'ul', items: ['Can you load our existing Excel records, and who does the cleanup?', 'Can we export our records and reports whenever we want?', 'Who can edit or delete a deal, and is that restricted by role?', 'Does it work on a phone, so recording a payment does not need an office computer?'] },
      { type: 'h2', text: 'Questions about fit and cost' },
      { type: 'ul', items: ['Is the price per month or per user, and what changes as we add projects?', 'Is there a free trial we can run with our own data, without paying first?', 'Is it built for plot and property dealers, or is it a general tool with a real estate module?', 'How do you handle tax and invoicing requirements? Ask for a clear written answer instead of a general yes.'] },
      { type: 'h2', text: 'Ask for a real demo, not slides' },
      { type: 'p', text: 'Give the vendor one of your own deals and ask them to enter it live: plot, buyer, plan, first two payments and a receipt. In twenty minutes you will learn more than from any feature list. Plot Ledge offers exactly this: a free demo with your own plots and installment plans, and a 15-day free trial with no payment needed.' },
      { type: 'h2', text: 'Decide with a short scorecard' },
      { type: 'p', text: 'Score each option from one to five on schedules, receipts, roles, import help, mobile use and price. Add the numbers, then check the top two against a deal you know well. The best software is the one your accountant and agents will actually open every day.' },
    ],
  },
  {
    slug: 'real-estate-crm-vs-erp-for-plot-dealers',
    title: 'Real estate CRM vs ERP: what a plot dealer actually needs',
    description: 'The difference between a real estate CRM and a full ERP for plot dealers, when each makes sense, and how to avoid paying for features you will not use.',
    date: '2026-11-09',
    readTime: '4 min read',
    keywords: ['real estate CRM Pakistan', 'real estate ERP Pakistan', 'property dealer software'],
    body: [
      { type: 'p', text: 'Many software pages for the Pakistani property market use the words CRM, ERP and management system as if they meant the same thing. They do not, and choosing the wrong type is the most common reason dealers stop using a system after a few months. Here is a plain way to tell them apart.' },
      { type: 'h2', text: 'What a CRM covers' },
      { type: 'p', text: 'A CRM is built around people and deals: your plots, your buyers, their installment plans, their payments and their receipts. It answers questions such as who owes what, which plots are still available and what came in this week. It is usually quicker to learn, and it is the part of the business that dealers touch every day.' },
      { type: 'h2', text: 'What an ERP covers' },
      { type: 'p', text: 'An ERP goes wider: general accounting, payroll, inventory, procurement, construction costs and often compliance modules. That breadth is valuable for a large developer with finance, HR and site teams. It also means longer setup, more training and a higher price, even if you only need one corner of it.' },
      { type: 'h2', text: 'A quick way to decide' },
      { type: 'ul', items: ['Mostly selling plots on installments, with a small team: a CRM focused on deals, installments and receipts is usually enough.', 'Running a large society or developer with payroll, procurement and site accounts under one roof: an ERP may justify the effort.', 'In between: start with a focused CRM and keep your existing accounting package, as long as you can export reports to it.'] },
      { type: 'h2', text: 'Hidden costs to watch' },
      { type: 'ul', items: ['Setup and data loading charged separately from the monthly price.', 'Training time for staff who will only use a small part of the system.', 'Modules you pay for but never switch on.', 'Features that exist on the brochure but need a custom project to work.'] },
      { type: 'h2', text: 'Where Plot Ledge fits' },
      { type: 'p', text: 'Plot Ledge is a CRM for plot and property dealers. It keeps plots, deals, installments, payments, receipts and investor profit splits in one place, with separate logins for the Owner, Accountant and Sales Agent. It is not a payroll or full accounting suite, so a business that needs those should plan to use it alongside other tools. Housing societies and multi-branch developers can ask about the Enterprise plan.' },
    ],
  },
  {
    slug: 'how-to-track-plot-file-transfers-and-ownership-history',
    title: 'How to track plot file transfers and ownership history',
    description: 'A simple record-keeping method for plot files that change hands: who owns it now, who owned it before, what was paid and what is still due.',
    date: '2026-11-09',
    readTime: '4 min read',
    keywords: ['plot file management', 'property dealer software', 'plot management software'],
    body: [
      { type: 'p', text: 'A plot on installments often changes hands before the last installment is paid. The first buyer sells their file to a second buyer, sometimes to a third. If you do not record each step properly, you end up arguing about who paid what, and who is entitled to the plot. This guide gives a simple record-keeping method for dealers and societies.' },
      { type: 'h2', text: 'Keep one record per plot, not one per buyer' },
      { type: 'p', text: 'The plot is the thing that stays constant. Give every plot one record with its number, size and project, and attach every buyer, payment and transfer to that record. When a file changes hands, the plot record keeps the full story, and nothing has to be copied between sheets.' },
      { type: 'h2', text: 'Record each transfer as an event' },
      { type: 'ul', items: ['Date of the transfer.', 'Previous owner and new owner, with their identity details as you normally record them.', 'Amount paid by the previous owner up to that date.', 'Balance the new owner takes over, and the new installment plan if it changed.', 'Any transfer fee charged, and who paid it.', 'Where the signed documents are kept.'] },
      { type: 'h2', text: 'Never overwrite the old owner' },
      { type: 'p', text: 'Do not edit the buyer name on an existing deal. Close the first owner record at the transfer date and start a new one. That way the payments made by each owner stay with that owner, and a later dispute can be answered from the record in a minute.' },
      { type: 'h2', text: 'Keep payments linked to receipts and slips' },
      { type: 'p', text: 'Every payment on a transferred file should still have a receipt with a unique ID and the bank slip reference. If receipts are loose papers, transfers are exactly where they go missing.' },
      { type: 'h2', text: 'Limit who can change a transfer' },
      { type: 'p', text: 'Transfers affect ownership and money, so only the owner or a senior accountant should be able to change them. Sales agents can look up a plot and its history without being able to edit or delete a deal. Plot Ledge works this way with its separate Owner, Accountant and Sales Agent logins.' },
      { type: 'h2', text: 'Check the file before every payment' },
      { type: 'p', text: 'Before accepting an installment on a plot that has been transferred, open the plot record and confirm the current owner. A thirty-second check prevents a payment being receipted to the wrong person.' },
    ],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
