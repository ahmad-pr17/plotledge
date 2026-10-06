import { BadgeCheck, Coins, FileText } from 'lucide-react'
import { CountUp } from '@/components/shared/count-up'
import { Container } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { PlaceholderTag, SampleTag } from '@/components/shared/sample-tag'

const logos = ['Your Society Logo', 'Agency Logo 2', 'Dealer Logo 3', 'Builder Logo 4', 'Investor Group 5', 'Partner Logo 6']

const trustPoints = [
  { icon: Coins, title: 'Lakh and crore native', body: 'Amounts read the way you say them: PKR 85,000, PKR 68.4L, PKR 4.82Cr. PKR comes first.' },
  { icon: FileText, title: 'Your deal workflow', body: 'Token, down payment, installments and possession are fields on the deal, not notes in a margin.' },
  { icon: BadgeCheck, title: 'Familiar terms', body: 'Plot, file, society, booking and dealer exchange. The words your team already uses every day.' },
]

export function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="border-y border-border bg-card/60 py-14 sm:py-16">
      <Container>
        <h2 id="proof-title" className="sr-only">Results and trust</h2>
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-border">
            <div className="lg:px-6 lg:first:pl-0">
              <dd className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"><CountUp value={4.8} decimals={1} prefix="PKR " suffix="Cr" /></dd>
              <dt className="mt-1 text-sm text-muted-foreground">tracked per quarter in the demo</dt>
            </div>
            <div className="lg:px-6">
              <dd className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"><CountUp value={0} /></dd>
              <dt className="mt-1 text-sm text-muted-foreground">missed installments in the demo ledger</dt>
            </div>
            <div className="lg:px-6">
              <dd className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"><CountUp value={10} suffix=" min" /></dd>
              <dt className="mt-1 text-sm text-muted-foreground">to add your first plots</dt>
            </div>
            <div className="lg:px-6">
              <dd className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">Lakh + Crore</dd>
              <dt className="mt-1 text-sm text-muted-foreground">amounts, built in</dt>
            </div>
          </dl>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><SampleTag /> Figures come from the sample ledger shown on this page, not from customers.</p>
        </Reveal>

        <div className="mt-12">
          <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
            Trusted by dealers, agencies and societies <PlaceholderTag>Placeholder logos</PlaceholderTag>
          </p>
          <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <ul className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {[...logos, ...logos].map((name, i) => (
                <li key={i} aria-hidden={i >= logos.length ? true : undefined} className="flex h-14 w-48 shrink-0 items-center justify-center rounded-xl border border-dashed border-[var(--border-strong)] text-sm font-semibold text-muted-foreground">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="t-h3 text-foreground">Built for Pakistani dealers and societies</h3>
          </Reveal>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {trustPoints.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 0.08}>
                <div className="card-solid h-full p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-paid-soft text-paid-ink"><p.icon className="size-5" aria-hidden /></span>
                  <h4 className="mt-4 font-display text-base font-semibold text-foreground">{p.title}</h4>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
