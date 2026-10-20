'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const ChatLauncher = dynamic(() => import('@/components/chatbot/ChatLauncher'), { ssr: false })

/** Loads the chat code only after the page is idle, so it never competes with the first paint. */
export function ChatMount() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
    if (ric) {
      const id = ric(() => setReady(true), { timeout: 4000 })
      return () => (window as unknown as { cancelIdleCallback?: (n: number) => void }).cancelIdleCallback?.(id)
    }
    const t = setTimeout(() => setReady(true), 2500)
    return () => clearTimeout(t)
  }, [])

  return ready ? <ChatLauncher /> : null
}
