import { Container } from '@/components/shared/container'
import { FloatingActions } from '@/components/sections/floating-actions'
import { Footer } from '@/components/sections/footer'
import { Navbar } from '@/components/sections/navbar'
import { cn } from '@/lib/utils'

/** Shared frame for subpages: navbar, main landmark, footer and floating actions. */
/** `flush` skips the padded container so a page can start with a full-width band (the policy pages' hero). */
export function PageShell({ children, className, flush = false }: { children: React.ReactNode; className?: string; flush?: boolean }) {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        {flush ? children : <Container className={cn('pb-20 pt-28 md:pb-28 md:pt-36', className)}>{children}</Container>}
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
