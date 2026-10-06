'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { DEMO_URL, whatsappLink } from '@/lib/site'

/**
 * Sticky bottom bar for phones. It slides in after the first screen and steps aside near the end of the page.
 * While the chat window is open, CSS hides it through the data-chat-open flag on <html> (see globals.css).
 */
export function FloatingActions() {
  const [show, setShow] = useState(false)
  const [nearEnd, setNearEnd] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShow(y > 480)
      setNearEnd(document.documentElement.scrollHeight - (y + window.innerHeight) < 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visible = show && !nearEnd
  return (
    <div
      className="sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 pt-3 backdrop-blur-xl transition-[transform,opacity] duration-300 md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))', transform: visible ? 'none' : 'translateY(100%)', opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-md gap-2">
        <ButtonLink href={DEMO_URL} className="flex-1" tabIndex={visible ? 0 : -1}>Book a free demo</ButtonLink>
        <ButtonLink href={whatsappLink()} variant="secondary" aria-label="Chat on WhatsApp" className="px-4" tabIndex={visible ? 0 : -1}>
          <MessageCircle />
        </ButtonLink>
      </div>
    </div>
  )
}
