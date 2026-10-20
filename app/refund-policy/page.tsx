import type { Metadata } from 'next'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Refund and cancellation policy'
const DESCRIPTION = 'How trials, billing, cancellation and refunds work for Plot Ledge plans.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/refund-policy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/refund-policy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '20 October 2026'

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <article className="measure-wide">
        <p className="rounded-xl bg-pending-soft p-4 text-sm font-semibold text-pending-ink">Draft for review. Have a lawyer check this before launch, and confirm it matches your actual billing provider's terms.</p>
        <h1 className="t-h2 mt-8">Refund and cancellation policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>

        <div className="mt-8 flex flex-col gap-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
          <h2>Free trial</h2>
          <p>New accounts start with a 15-day free trial. No payment is needed to start a trial, and you can cancel at any time during it without being charged.</p>

          <h2>Billing</h2>
          <p>Paid plans are billed monthly in Pakistani rupees, in advance, from the date your trial ends or you choose a plan. Prices and plan limits are shown on the pricing section of this site and can change; we will tell you before a change applies to your account.</p>

          <h2>Cancellation</h2>
          <p>You can cancel at any time. Cancelling stops future billing; it does not automatically refund the period you have already been charged for.</p>

          <h2>Refunds</h2>
          <p>We do not offer automatic refunds for partially used billing periods. If you were charged in error, or a technical fault on our side kept you from using the service, contact us and we will review it and refund where appropriate.</p>

          <h2>Enterprise plans</h2>
          <p>Custom Enterprise agreements may have their own billing and cancellation terms, set out in your agreement with us.</p>

          <h2>How to request a cancellation or refund</h2>
          <p>Write to <a className="font-semibold text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your account details and the reason for your request.</p>

          <h2>Related policies</h2>
          <ul>
            <li><a className="font-semibold text-primary underline" href="/terms">Terms of use</a></li>
            <li><a className="font-semibold text-primary underline" href="/privacy">Privacy policy</a></li>
          </ul>
        </div>
      </article>
    </PageShell>
  )
}
