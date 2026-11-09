import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Refund and cancellation policy'
const DESCRIPTION = 'How the free trial, billing, cancellation and refunds work for Plot Ledge plans, and how to ask for one.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/refund-policy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/refund-policy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '9 November 2026'
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

const sections: LegalSection[] = [
  {
    id: 'free-trial',
    title: 'Free trial',
    content: (
      <p>New accounts start with a 15-day free trial. No payment is needed to start a trial, and you can cancel at any time during it without being charged.</p>
    ),
  },
  {
    id: 'billing',
    title: 'Billing',
    content: (
      <p>Paid plans are billed in Pakistani rupees, in advance, monthly or yearly depending on the option you choose, starting when your trial ends or when you choose a plan. Prices and plan limits are shown in the pricing section of this site and can change. We will tell you before a change applies to your account.</p>
    ),
  },
  {
    id: 'cancellation',
    title: 'Cancellation',
    content: (
      <p>You can cancel at any time. Cancelling stops future billing. It does not automatically refund the period you have already been charged for, whether that period is a month or a year.</p>
    ),
  },
  {
    id: 'refunds',
    title: 'Refunds',
    content: (
      <>
        <p>We do not offer automatic refunds for partially used billing periods. We will review a request and refund where appropriate if:</p>
        <ul>
          <li>you were charged in error, or charged twice, or</li>
          <li>a technical fault on our side kept you from using the service.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'enterprise',
    title: 'Enterprise plans',
    content: (
      <p>Custom Enterprise agreements may have their own billing and cancellation terms. Those are set out in your agreement with us and apply instead of this page where they differ.</p>
    ),
  },
  {
    id: 'how-to-ask',
    title: 'How to ask for a cancellation or refund',
    content: (
      <>
        <p>Write to {mail} and include:</p>
        <ul>
          <li>the name or email on your account,</li>
          <li>your plan, and the date and amount of the charge,</li>
          <li>what you would like us to do, and why.</li>
        </ul>
        <p>A person will read your request and reply to you.</p>
      </>
    ),
  },
]

export default function RefundPolicyPage() {
  return (
    <LegalPage
      current="/refund-policy"
      title={TITLE}
      intro="How trials, billing and cancellation work, and when we refund."
      updated={LAST_UPDATED}
      draftNote="Draft for review. Have a lawyer check this before launch, and confirm it matches your actual billing provider's terms."
      summary={[
        'You get a 15-day free trial with no payment needed, and you can cancel during it without being charged.',
        'Paid plans are billed in rupees, in advance, monthly or yearly.',
        'You can cancel at any time. Cancelling stops future billing but does not refund the period already paid.',
        'We review refunds for charges made in error or for faults on our side.',
      ]}
      sections={sections}
    />
  )
}
