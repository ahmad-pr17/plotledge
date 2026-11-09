// English text for the 'faq' namespace. See docs/i18n.md.
// `items` must stay { q: string; a: string }[] (plain text): it also feeds the FAQPage structured data.
// Prices and the trial length are written out in full here because structured data cannot fill placeholders.
// Keep them in step with data/pricing.ts (Silver Rs 10,000, Gold Rs 40,000, 17% yearly saving, 15-day trial).
const faq = {
  eyebrow: 'Questions',
  title: 'Questions dealers ask before they switch',
  items: [
    {
      q: 'What is Plot Ledge?',
      a: 'Plot Ledge is a CRM for plot and property dealers. It keeps your plots, deals, installments, payments and receipts in one place, so you stop piecing things together from Excel sheets and WhatsApp screenshots.',
    },
    {
      q: 'Who can see what?',
      a: 'Everyone gets their own login. The Owner sees everything, including sales, profit and investors. The Accountant handles payments, slips, receipts and reports. A Sales Agent can add deals and look up plots and buyers, but cannot edit or delete a deal.',
    },
    {
      q: 'Can I bring in my Excel records?',
      a: 'Yes, we can help you load your current plots, buyers and payments from Excel. Send us the sheet and we will tell you if anything needs tidying first, such as two buyers in one row.',
    },
    {
      q: 'How do receipts and payment slips work?',
      a: 'Every payment you record gets a receipt with its own unique ID. You can attach the bank slip reference to the same payment, so the receipt, the slip and the deal stay linked.',
    },
    {
      q: 'Does it work on my phone?',
      a: 'Yes. Plot Ledge works on phones and tablets, so you can check a buyer balance or record a payment from the site or from a client meeting.',
    },
    {
      q: 'How does the investor profit split work?',
      a: 'You record how much each investor put into a project and the share they hold. Plot Ledge then shows each investor the profit that belongs to them, so the split is a number on screen and not a discussion.',
    },
    {
      q: 'How much does it cost?',
      a: 'Plans start at Rs 10,000 a month for Silver. Gold is Rs 40,000 a month, and paying yearly saves 17% (two months free). Enterprise is priced for multi-branch developers, societies and larger groups, so talk to us.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes. There is a 15-day free trial. No payment is needed. Book a demo and we will set it up, then you choose a paid plan if you want to continue.',
    },
    {
      q: 'Can a housing society use it?',
      a: 'Yes. The Enterprise plan is built for societies and multi-branch developers with several projects and larger teams. Chat with us on WhatsApp or book a demo and we will set it up around your projects.',
    },
  ],
}
export default faq
