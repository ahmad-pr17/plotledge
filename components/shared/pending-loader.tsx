'use client'

import { useLinkStatus } from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { PlotLedgeLoader } from '@/components/shared/plot-ledge-loader'
import { useMessages } from '@/i18n/client'

/**
 * The Plot Ledge loader, shown over the page only while a navigation is actually in progress and only after a short delay, so
 * quick page changes never flash it. It exists only in the browser (never in the server HTML), so pages are complete for people
 * without JavaScript, search engines and screen readers. It is drawn through a portal so it never becomes part of a link's name,
 * and it does not block clicks.
 */
export function PendingLoader({ pending, delay = 250 }: { pending: boolean; delay?: number }) {
  const m = useMessages()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!pending) { setShow(false); return }
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [pending, delay])

  if (!show || typeof document === 'undefined') return null
  return createPortal(<PlotLedgeLoader fullscreen label={m.common.loading} className="pointer-events-none" />, document.body)
}

/** Put inside a next/link <Link>: shows the loader while that link's page is loading. */
export function LinkPendingLoader() {
  const { pending } = useLinkStatus()
  return <PendingLoader pending={pending} />
}
