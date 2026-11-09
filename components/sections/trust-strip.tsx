import Image from 'next/image'
import { Container } from '@/components/shared/container'
import { factIcons } from '@/data/facts'
import { getMessages } from '@/i18n/server'
import { logos } from '@/data/logos'

/** True product facts only. The customer logo row appears only when data/logos.ts has real entries. */
function FactRow({ facts, hidden }: { facts: string[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {facts.map((text, i) => {
        const Icon = factIcons[i]
        return (
        <li key={text} className="flex items-center">
          <span className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-medium text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/10">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
              <Icon className="size-[18px]" aria-hidden />
            </span>
            {text}
          </span>
          <span aria-hidden className="mx-6 size-1.5 rotate-45 rounded-[2px] bg-amber-400/80" />
        </li>
        )
      })}
    </ul>
  )
}

/** True product facts only. The customer logo row appears only when data/logos.ts has real entries. */
export async function TrustStrip() {
  const m = (await getMessages()).trust
  return (
    <section aria-label={m.ariaLabel} className="on-deep bg-deep border-y border-white/10 py-6 text-white">
      <div className="marquee">
        <div className="marquee-track">
          <FactRow facts={m.facts} />
          <FactRow facts={m.facts} hidden />
          <FactRow facts={m.facts} hidden />
          <FactRow facts={m.facts} hidden />
        </div>
      </div>
      {logos.length > 0 && (
        <Container>
          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="text-sm font-medium text-emerald-100/80">{m.logosHeading}</p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
              {logos.map((l) => (
                <li key={l.name}>
                  <Image src={l.src} alt={l.name} width={l.width} height={l.height} className="h-8 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </section>
  )
}
