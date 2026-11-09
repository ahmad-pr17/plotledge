import { ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { getMessages } from '@/i18n/server'

/** A short, honest note. Every line must be true of the product. See data/facts.ts. */
export async function SecurityNote() {
  const m = (await getMessages()).security
  return (
    <section aria-labelledby="security-title" className="pb-2 pt-8 sm:pt-12">
      <Container>
        <Reveal>
          <div className="card-solid grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-12">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="size-5" aria-hidden /></span>
              <div>
                <h2 id="security-title" className="t-h3">{m.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{m.description}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3 text-sm leading-6">
              {m.points.map((p) => (
                <li key={p} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-paid" />{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
