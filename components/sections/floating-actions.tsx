'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { DEMO_URL, whatsappLink } from '@/lib/site'

export function FloatingActions() {
  const [show, setShow] = useState(false)
  const [nearEnd, setNearEnd] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShow(y > 480)
      const remaining = document.documentElement.scrollHeight - (y + window.innerHeight)
      setNearEnd(remaining < 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = reduce ? { duration: 0 } : { duration: 0.25 }

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Plot Ledge on WhatsApp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={t}
            className="fixed bottom-24 right-4 z-40 hidden size-14 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-950/30 transition-colors hover:bg-emerald-500 max-md:hidden md:bottom-6 md:grid"
          >
            <span aria-hidden className="pulse-dot absolute right-1 top-1 size-2.5 rounded-full bg-amber-400 text-amber-400" />
            <MessageCircle className="size-6" aria-hidden />
          </motion.a>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && !nearEnd && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={t}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 pt-3 backdrop-blur-xl md:hidden"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
            <div className="mx-auto flex max-w-md gap-2">
              <ButtonLink href={DEMO_URL} className="flex-1">Book a free demo</ButtonLink>
              <ButtonLink href={whatsappLink()} variant="whatsapp" aria-label="Chat on WhatsApp" className="px-4">
                <MessageCircle />
                <span className="sr-only">WhatsApp</span>
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
