import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, type LegalSection } from '@/components/legal/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Terms of use'
const DESCRIPTION = 'The terms for using the Plot Ledge website and service: your account, plans, acceptable use, your data and our responsibilities.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/terms' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '9 November 2026'

const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreeing to these terms',
    content: (
      <p>By using the Plot Ledge website or service you agree to these terms. If you do not agree, please do not use them. If you use Plot Ledge for a business, you confirm that you may accept these terms on its behalf.</p>
    ),
  },
  {
    id: 'website',
    title: 'The website',
    content: (
      <p>This site describes Plot Ledge. The descriptions, examples and screenshots on it show what the product is for and are not a promise of any business result.</p>
    ),
  },
  {
    id: 'service',
    title: 'The service',
    content: (
      <p>Plot Ledge is software for tracking plots, deals, installments, payments and related records. We work to keep the service available and accurate, and we may improve or change features over time.</p>
    ),
  },
  {
    id: 'your-account',
    title: 'Your account',
    content: (
      <ul>
        <li>You are responsible for the accuracy of the data you enter.</li>
        <li>Keep your login details private, and tell us at once if you think someone else has used them.</li>
        <li>Give team members only the role they need. You are responsible for what people you add do in your account.</li>
      </ul>
    ),
  },
  {
    id: 'plans-and-payment',
    title: 'Plans, trials and payment',
    content: (
      <>
        <p>Plans are priced in Pakistani rupees and shown in the pricing section of this site, and can be billed monthly or yearly. New accounts start with a free trial. Prices and plan limits can change, and we will tell you before a change applies to your account.</p>
        <p>How trials, cancellation and refunds work is set out in the <Link href="/refund-policy">refund and cancellation policy</Link>.</p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    content: (
      <ul>
        <li>Do not use the service for anything unlawful or to deceive buyers.</li>
        <li>Do not try to break into accounts, or to disrupt, overload or copy the service.</li>
        <li>Do not upload material you have no right to use, or that you know to be false.</li>
      </ul>
    ),
  },
  {
    id: 'your-data',
    title: 'Your data',
    content: (
      <p>The records you store in Plot Ledge belong to you. We use them only to run the service for you. Keep your own copies of important records by exporting reports regularly. The <Link href="/privacy">privacy policy</Link> explains how we handle information collected through this website.</p>
    ),
  },
  {
    id: 'our-rights',
    title: 'Our software and content',
    content: (
      <p>We keep all rights in the Plot Ledge software, design, text and logos. These terms give you the right to use the service while your account is active, and no other rights in them.</p>
    ),
  },
  {
    id: 'liability',
    title: 'Our responsibility',
    content: (
      <p>We provide the service as is. To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profit or a missed payment that depended on information in the service.</p>
    ),
  },
  {
    id: 'ending',
    title: 'Ending your use',
    content: (
      <p>You can stop using Plot Ledge at any time. We may suspend or close an account that breaks these terms, and we will tell you why where we can.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    content: (
      <p>When we change these terms, we will update the date at the top and tell account holders about changes that matter before they apply. Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      current="/terms"
      title={TITLE}
      intro="The rules for using Plot Ledge, written to be read."
      updated={LAST_UPDATED}
      draftNote="Draft for review. Have a lawyer check this before launch."
      summary={[
        'Plot Ledge is software for tracking plots, deals, installments and payments.',
        'The records you store are yours, and you are responsible for keeping them accurate.',
        'Keep your login private and give team members only the access they need.',
        'Plans are billed in rupees. Trials, cancellation and refunds are in the refund policy.',
      ]}
      sections={sections}
    />
  )
}
