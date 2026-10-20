'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import dynamic from 'next/dynamic'
import { MessageCircle, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { trackChat } from '@/lib/chatbot/analytics'
import { CHAT_OPEN_ATTR } from '@/lib/site'

// The chat window code loads only when it is first needed.
const loadWindow = () => import('@/components/chatbot/ChatWindow')
const ChatWindow = dynamic(loadWindow, { ssr: false })

const TEASER_KEY = 'plotledge-teaser-dismissed'
const TEASER_DELAY_MS = 8000

function teaserDismissed(): boolean {
  try {
    return sessionStorage.getItem(TEASER_KEY) === '1'
  } catch {
    return false
  }
}

export default function ChatLauncher() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Tell the rest of the page (the sticky mobile bar) that the chat is open.
  useEffect(() => {
    const root = document.documentElement
    if (open) root.setAttribute(CHAT_OPEN_ATTR, '')
    else root.removeAttribute(CHAT_OPEN_ATTR)
    return () => root.removeAttribute(CHAT_OPEN_ATTR)
  }, [open])

  // A small teaser appears once, after a few seconds, unless it was dismissed in this session.
  useEffect(() => {
    if (teaserDismissed()) return
    const t = setTimeout(() => setTeaser(true), TEASER_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  const dismissTeaser = useCallback(() => {
    setTeaser(false)
    try {
      sessionStorage.setItem(TEASER_KEY, '1')
    } catch {
      /* the teaser may show again after a reload */
    }
  }, [])

  const openChat = useCallback(() => {
    setMounted(true)
    setOpen(true)
    dismissTeaser()
    trackChat('chat_opened')
  }, [dismissTeaser])

  const closeChat = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  return (
    <>
      {mounted && <ChatWindow open={open} onClose={closeChat} onMinimize={closeChat} />}

      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            role="status"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[8.25rem] right-4 z-40 flex max-w-[260px] items-center gap-1 rounded-2xl rounded-br-md border border-border bg-card py-1 pl-4 pr-1 text-sm shadow-lg md:bottom-24 md:right-6"
          >
            <button type="button" onClick={openChat} className="min-h-11 flex-1 py-2 text-left font-medium text-foreground">
              Questions about Plot Ledge? Ask me.
            </button>
            <button type="button" aria-label="Dismiss" onClick={dismissTeaser} className="grid size-11 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground">
              <X className="size-4" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? 'Close chat with Plot Ledge Assistant' : 'Chat with Plot Ledge Assistant'}
        aria-expanded={open}
        onClick={() => (open ? closeChat() : openChat())}
        onPointerEnter={() => void loadWindow()}
        onFocus={() => void loadWindow()}
        className="chat-launcher fixed bottom-[4.75rem] right-4 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-10px_rgb(var(--shadow-color)/.6)] transition-transform duration-200 hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
      >
        <span aria-hidden className="chat-pulse pointer-events-none absolute inset-0 rounded-full bg-primary" />
        <MessageCircle className="relative size-6" aria-hidden />
      </button>
    </>
  )
}
