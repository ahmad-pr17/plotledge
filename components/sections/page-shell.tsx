import { Container } from '@/components/shared/container'
import { FloatingActions } from '@/components/sections/floating-actions'
import { Footer } from '@/components/sections/footer'
import { Navbar } from '@/components/sections/navbar'
import { cn } from '@/lib/utils'

/** Shared frame for subpages: navbar, main landmark, footer and floating actions. */
export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        <Container className={cn('pb-20 pt-28 md:pb-28 md:pt-36', className)}>{children}</Container>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
