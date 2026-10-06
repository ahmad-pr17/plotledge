export type Faq = { q: string; a: string }

// Plain text only, because the same strings feed the FAQPage structured data.
export const faqs: Faq[] = [
  {
    q: 'Who can see what inside Plot Ledge?',
    a: 'Everyone logs in with their own account and gets one of three roles. The Owner sees sales, profit, investors and every ledger. The Accountant handles payments, slips, receipts and reports. A Sales Agent can add deals and look up plots and buyers, but cannot edit or delete a deal.',
  },
  {
    q: 'Does it work on a phone?',
    a: 'Yes. Every page resizes for phones and tablets, so you can check a buyer balance or record a payment from the site, the office or a client meeting. Tables turn into stacked cards on small screens.',
  },
  {
    q: 'Can I bring in my existing Excel records?',
    a: 'Yes. We can load your current plots, buyers and payments from Excel when you start. Send us the sheet and we will tell you if anything needs tidying first, such as merged cells or two buyers in one row.',
  },
  {
    q: 'How are receipts and payment slips tracked?',
    a: 'Every payment you record gets a receipt with its own unique ID. You can attach the bank slip reference number to the same payment, so a receipt, a slip and a deal are always linked. Nobody has to scroll back through WhatsApp to find a screenshot.',
  },
  {
    q: 'Can I print or export a report?',
    a: 'Yes. Deals reports can be exported as PDF or Excel, or printed. Use them when a partner, an investor or your accountant asks where a project stands.',
  },
  {
    q: 'How does the investor profit split work?',
    a: 'You record how much each investor put into a project and the share they hold. Plot Ledge then shows each investor the profit that belongs to them from the deals on that project, so the split is a number on screen and not a discussion.',
  },
  {
    q: 'Is my financial data safe?',
    a: 'Access is role based, so people only see what their job needs. Every receipt has a unique ID, and changes are recorded so you can see who did what. Treat the exact backup and retention details as something to confirm with us on a demo call, because they depend on your plan.',
  },
  {
    q: 'How much does Plot Ledge cost?',
    a: 'Starter is free for up to 25 plots and 1 team member. Growth costs PKR 2,999 per month, or PKR 28,788 per year, which saves 20 percent. It has unlimited plots, installments and receipts, 5 team members, and reports and exports. Enterprise is priced for your society or group, so contact us.',
  },
  {
    q: 'Can a housing society with several projects use it?',
    a: 'Yes. The Enterprise plan is built for societies and larger groups that run several projects, many team members and different access levels. Talk to us on WhatsApp or book a demo and we will set it up around your projects.',
  },
  {
    q: 'How long does setup take, and do you help?',
    a: 'You can add your first plots in minutes. If you have a lot of history in Excel, we help you import it. Book a free demo and we will walk through your own plots and installment plans, not a generic example.',
  },
]
