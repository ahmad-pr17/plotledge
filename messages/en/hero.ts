// English text for the 'hero' namespace. See docs/i18n.md.
const hero = {
  eyebrow: 'Plot management software for property dealers',
  /** The headline is animated word by word: `words` appear one after another, then `tail` in the highlight color. */
  title: {
    words: ['Every', 'plot.', 'Every', 'installment.', 'Every', 'rupee,'],
    tail: 'tracked.',
  },
  lead: 'Plot Ledge is a CRM for property dealers in Pakistan. It replaces Excel sheets and WhatsApp screenshots with one clear record of your plots, installments and receipts.',
  cta: {
    primary: 'Book a free demo',
    secondary: 'See how it works',
    whatsapp: 'Chat on WhatsApp',
  },
  trust: ['15-day free trial', 'No payment needed', 'Setup help'],
  /** The fake product dashboard next to the headline. */
  preview: {
    title: 'Overview',
    live: 'Live',
    /** Short form of "million" shown after the amount in the KPI tiles, with its leading space. */
    millionShort: ' M',
    kpis: {
      sales: 'Total sales',
      received: 'Received',
      outstanding: 'Outstanding',
    },
    collections: 'Collections',
    collectionsRange: 'January to July',
    collectionsChartLabel: 'Collections rising from January to July',
    /** Seven short month names, January to July. */
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    recentPayments: 'Recent payments',
    /** {plot} is a plot ID such as A-104. */
    plotLabel: 'Plot {plot}',
    status: {
      Paid: 'Paid',
      Pending: 'Pending',
      Overdue: 'Overdue',
    },
    events: {
      paymentReceived: { title: 'Payment received', sub: '{amount} for {plot}' },
      receiptIssued: { title: 'Receipt issued' },
      plotBooked: { title: 'Plot {plot} booked', sub: 'Down payment recorded' },
    },
    receiptIssued: 'Receipt issued',
    /** {count} is a number. */
    overdueNotice: '{count} installments overdue',
  },
}
export default hero
