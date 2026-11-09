'use client'

import { motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { LocaleLink } from '@/components/shared/locale-link'
import { Logo } from '@/components/shared/logo'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useDir, useMessages } from '@/i18n/client'
import { CRM_LOGIN_URL, CRM_SIGNUP_URL, DEMO_URL, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const m = useMessages()
  const dir = useDir()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-border bg-background/80 shadow-[0_8px_30px_-18px_rgb(var(--shadow-color)/.35)] backdrop-blur-xl'
          : 'border-transparent bg-background/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label={m.common.nav.ariaMain} className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <LocaleLink key={l.href} href={l.href} className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {m.common.nav[l.key]}
            </LocaleLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={CRM_LOGIN_URL} variant="ghost">{m.common.header.login}</ButtonLink>
          <ButtonLink href={DEMO_URL} variant="secondary" className="hidden xl:inline-flex">{m.common.header.demo}</ButtonLink>
          <ButtonLink href={CRM_SIGNUP_URL}>{m.common.header.signup}</ButtonLink>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<button type="button" aria-label={m.common.nav.openMenu} className="inline-grid size-11 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted [&_svg]:size-5" />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side={dir === 'rtl' ? 'left' : 'right'} className="p-0" showCloseButton={false}>
              <SheetHeader className="flex-row items-center justify-between border-b border-border px-5 py-3">
                <SheetTitle render={<div />}>
                  <Logo />
                </SheetTitle>
                <SheetClose
                  render={<button type="button" aria-label={m.common.nav.closeMenu} className="inline-grid size-11 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted [&_svg]:size-5" />}
                >
                  <X />
                </SheetClose>
              </SheetHeader>
              <nav aria-label={m.common.nav.ariaMobile} className="flex flex-col px-5 py-4">
                {NAV_LINKS.map((l) => (
                  <LocaleLink key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-lg text-lg font-medium text-foreground transition-colors hover:text-primary">
                    {m.common.nav[l.key]}
                  </LocaleLink>
                ))}
                <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
                  <ButtonLink href={CRM_SIGNUP_URL} size="lg" onClick={() => setOpen(false)}>{m.common.header.signup}</ButtonLink>
                  <ButtonLink href={DEMO_URL} variant="secondary" size="lg" onClick={() => setOpen(false)}>{m.common.header.demoFree}</ButtonLink>
                  <ButtonLink href={CRM_LOGIN_URL} variant="ghost" size="lg" onClick={() => setOpen(false)}>{m.common.header.login}</ButtonLink>
                  <LanguageSwitcher className="self-start" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <motion.div aria-hidden className="absolute inset-x-0 -bottom-px h-0.5 origin-left rtl:origin-right bg-gradient-to-r rtl:bg-gradient-to-l from-emerald-500 to-amber-400" style={{ scaleX: progress }} />
    </header>
  )
}
