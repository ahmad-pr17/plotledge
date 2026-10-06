export type CustomerLogo = {
  name: string
  /** Path under /public, for example /logos/acme.svg */
  src: string
  width: number
  height: number
  href?: string
}

// Add real customer logos here, with their permission. While this list is empty, the logo row is not rendered.
export const logos: CustomerLogo[] = []
