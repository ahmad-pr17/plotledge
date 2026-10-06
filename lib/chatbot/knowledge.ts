// The only facts the assistant may state about Plot Ledge. Edit this file to change what it knows.
// Prices come from data/pricing.ts so the site and the assistant never disagree.
import { plans } from '@/data/pricing'
import { faqs } from '@/data/faqs'
import { securityPoints } from '@/data/facts'
import { CONTACT_CITY } from '@/lib/site'
import { formatRs } from '@/lib/format'

function planLine(p: (typeof plans)[number]): string {
  if (p.monthly === null) return `${p.name}: custom pricing for housing societies and larger groups. ${p.highlights.join('; ')}.`
  if (p.monthly === 0) return `${p.name}: free. ${p.highlights.join('; ')}.`
  return `${p.name} (most popular): ${formatRs(p.monthly)} per month, or ${formatRs(p.yearlyTotal ?? 0)} per year if paid yearly (about ${formatRs(Math.round(p.yearlyPerMonth ?? 0))} per month). ${p.highlights.join('; ')}.`
}

export const KNOWLEDGE = `
ABOUT
Plot Ledge is a CRM for plot and property dealers (house, plot, shop), mainly in Pakistan. It replaces Excel sheets and WhatsApp screenshots with one clear record. The team is based in ${CONTACT_CITY}.

FEATURES
- Plot inventory: every plot with number, size and price, marked available, booked or sold.
- Deals and installment plans: sale price, down payment and plan set once, with paid and due installments visible.
- Payments and receipts: each payment is logged against its deal and gets a receipt with a unique ID.
- Payment slip records: the bank slip reference is kept with the payment it belongs to.
- Investors and profit split: record what each investor put in and see their share of the profit.
- Loans and finance ledger, and dealer exchanges.
- Reports and exports.
- Amounts are shown in rupees and millions.
- Works on a phone, tablet or computer through the browser.

ROLES
- Owner: sees everything, including sales, profit, investors and every ledger.
- Accountant: records payments and slips, issues receipts, prepares reports.
- Sales Agent: adds deals and looks up plots and buyers. Cannot edit or delete a deal.
Everyone logs in separately.

PLANS AND PRICES (rupees)
${plans.map(planLine).join('\n')}
Prices on the website are the current prices. If someone asks about discounts, taxes or custom terms, say the team will confirm on a demo call or WhatsApp.

IMPORTING EXCEL DATA
The team can help load current plots, buyers and payments from Excel when a customer starts. The customer sends the sheet and the team checks it first and says if anything needs tidying, such as two buyers in one row.

DEMO PROCESS
The demo is free. The team asks how the dealer tracks plots and installments today, shows Plot Ledge working with plots, deals, installments and receipts, and can set up a Starter account to try with the dealer's own data. A housing society or a business with several projects should say so, and the team will cover the Enterprise plan.

SECURITY BASICS
${securityPoints.map((s) => `- ${s}`).join('\n')}
Do not claim any certification, audit, uptime figure, backup schedule or data location. If asked for details beyond this list, say you are not sure and offer a demo call or WhatsApp.

HOW TO CONTACT AND HAND OFF
Visitors can book a free demo, chat with the team on WhatsApp, open the CRM login, or see pricing. Offer these as buttons. Never read out a phone number or email address.

FREQUENTLY ASKED QUESTIONS
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n')}

NOT KNOWN OR NOT OFFERED
Nothing is known about integrations, a public API, a mobile app in app stores, accounting software links, SMS or WhatsApp automation, discounts, customer names or customer counts. If asked, say you are not sure and offer WhatsApp or a demo.
`.trim()
