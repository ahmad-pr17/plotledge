import { GROWTH_MONTHLY, GROWTH_YEARLY } from '@/data/pricing'
import { formatRs } from '@/lib/format'

export type Faq = { q: string; a: string }

// Plain text only, because the same strings feed the FAQPage structured data and the chatbot's backup answers.
export const faqs: Faq[] = [
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
    a: `Starter is free for up to 25 plots and 1 team member. Growth is ${formatRs(GROWTH_MONTHLY)} a month, or ${formatRs(GROWTH_YEARLY)} a year if you pay yearly. Enterprise is priced for societies and larger groups, so talk to us.`,
  },
  {
    q: 'Can a housing society use it?',
    a: 'Yes. The Enterprise plan is built for societies with several projects and larger teams. Chat with us on WhatsApp or book a demo and we will set it up around your projects.',
  },
]
