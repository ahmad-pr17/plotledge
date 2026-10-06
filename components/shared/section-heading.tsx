import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  /** Heading level. Defaults to h2. */
  as?: 'h2' | 'h3'
  className?: string
  tone?: 'base' | 'deep'
}

export function SectionHeading({ eyebrow, title, description, align = 'left', as: Tag = 'h2', className, tone = 'base' }: Props) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className={cn('t-h2 mt-3', tone === 'deep' ? 'text-white' : 'text-foreground')}>{title}</Tag>
      {description && (
        <p className={cn('t-lead measure mt-5', align === 'center' && 'mx-auto', tone === 'deep' ? 'text-emerald-100/80' : 'text-muted-foreground')}>{description}</p>
      )}
    </Reveal>
  )
}
