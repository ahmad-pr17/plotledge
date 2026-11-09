'use client'

import { useEffect } from 'react'

/** One observer for every [data-reveal] element on the page. Mounted once in the root layout. */
export function RevealObserver() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    const seen = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el)
          io.observe(el)
        }
      })
    }
    scan()
    let raf = 0
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(scan)
    })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      cancelAnimationFrame(raf)
      mo.disconnect()
      io.disconnect()
    }
  }, [])
  return null
}
