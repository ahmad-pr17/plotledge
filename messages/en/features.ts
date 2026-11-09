// English text for the 'features' namespace. See docs/i18n.md.
const features = {
  eyebrow: 'What it does',
  title: 'Everything a plot deal needs, in one place.',
  description: 'From the first booking to the last installment, each step is written down once. This is plot management software built around how dealers actually work.',
  /** In this order: inventory, deals, receipts, slips, investors, reports. */
  items: [
    { title: 'Plot inventory', desc: 'Every plot with its number, size and price. See what is available, booked or sold without opening a sheet.' },
    { title: 'Deals and installments', desc: 'Set the sale price, down payment and plan once. See what is paid and what is due next.' },
    { title: 'Payments and receipts', desc: 'Log each payment against its deal and issue a receipt with its own unique ID.' },
    { title: 'Payment slips', desc: 'Keep the bank slip reference with the payment it belongs to.' },
    { title: 'Investors and profit split', desc: 'Record what each investor put in and see their share of the profit.' },
    { title: 'Reports and exports', desc: 'Print or export a report when a partner, an investor or your accountant asks where a project stands.' },
  ],
  visuals: {
    paid: 'Paid',
    /** Labels on the export buttons in the reports card. */
    exportFormats: ['PDF', 'Excel', 'Print'],
  },
}
export default features
