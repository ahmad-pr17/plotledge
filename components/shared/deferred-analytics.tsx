'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect, useState } from 'react'

/** Starts Google Analytics only after the page is idle, so it never competes with first paint or hydration. */
export function DeferredAnalytics({ gaId }: { gaId: string }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
      cancelIdleCallback?: (n: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 5000 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = setTimeout(() => setReady(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return ready ? <GoogleAnalytics gaId={gaId} /> : null
}
