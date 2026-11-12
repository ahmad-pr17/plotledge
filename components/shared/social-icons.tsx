import { SOCIAL_LINKS, type SocialKey } from '@/lib/site'

// Brand icons drawn inline, because the icon library the site uses has no brand logos.
const ICONS: Record<SocialKey, React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
}

/** A row of round icon links to the social profiles. Renders nothing until at least one address is set. */
export function SocialIcons({ className }: { className?: string }) {
  if (SOCIAL_LINKS.length === 0) return null
  return (
    <ul className={className ?? 'mt-4 flex items-center gap-2'}>
      {SOCIAL_LINKS.map(({ key, label, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {ICONS[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
