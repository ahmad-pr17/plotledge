'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/** Reads and writes the same "theme" key as the inline script in the root layout. */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false)
  useEffect(() => { setDark(document.documentElement.classList.contains('dark')) }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn('inline-grid size-11 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted [&_svg]:size-5', className)}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  )
}
