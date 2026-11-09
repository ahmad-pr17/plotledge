'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useSyncExternalStore } from 'react'
import { getServerConsent, readConsent, subscribe } from '@/lib/consent'

/** Google Analytics loads only after the visitor accepts analytics cookies. */
export function ConsentAnalytics({ gaId }: { gaId: string }) {
  const choice = useSyncExternalStore(subscribe, readConsent, getServerConsent)
  return choice === 'accepted' ? <GoogleAnalytics gaId={gaId} /> : null
}
