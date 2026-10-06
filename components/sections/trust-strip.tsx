import Image from 'next/image'
import { Container } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { productFacts } from '@/data/facts'
import { logos } from '@/data/logos'

/** True product facts only. The customer logo row appears only when data/logos.ts has real entries. */
export function TrustStrip() {
  return (
    <section aria-label="Why dealers choose Plot Ledge" className="border-y border-border bg-card/60 py-10">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
            {productFacts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-[18px]" aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
        {logos.length > 0 && (
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-medium text-muted-foreground">Trusted by dealers and societies</p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
              {logos.map((l) => (
                <li key={l.name}>
                  <Image src={l.src} alt={l.name} width={l.width} height={l.height} className="h-8 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  )
}
