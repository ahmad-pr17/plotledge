'use client'

import { useEffect } from 'react'
import { classifyLink, trackEvent } from '@/lib/events'

/** One click listener for the whole site: reports demo, WhatsApp, email, phone, sign-up and social clicks without touching each link. Mounted once in the root layout. */
export function EventTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a')
      if (!a) return
      const name = classifyLink(a as HTMLAnchorElement)
      if (!name) return
      // Where on the page the click happened: the nearest section id, else the page path.
      const place = a.closest('[id]')?.id || a.closest('header,footer,aside')?.tagName.toLowerCase() || 'page'
      trackEvent(name, { place, page: location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
