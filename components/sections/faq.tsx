'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { cn } from '@/lib/utils'
import { faqs } from '@/data/faqs'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" containerClassName="max-w-3xl" aria-labelledby="faq-title">
      <SectionHeading align="center" eyebrow="Questions" title={<span id="faq-title">Questions dealers ask before they switch</span>} />
      <Reveal className="mt-10">
        <div className="card-solid divide-y divide-border overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition-colors hover:bg-muted/50 sm:px-6"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={cn('size-5 shrink-0 text-muted-foreground transition-transform duration-300', isOpen && 'rotate-180')} aria-hidden="true" />
                  </button>
                </h3>
                {/* The grid-rows trick animates height while the answer text stays in the HTML. */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={cn('grid transition-[grid-template-rows] duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <div className="overflow-hidden">
                    <p className={cn('measure px-5 pb-5 text-[0.95rem] leading-7 text-muted-foreground transition-opacity duration-300 sm:px-6', isOpen ? 'opacity-100' : 'opacity-0')}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
