import type { ReactNode } from 'react'

/** Fills {name} placeholders: fmt('Save {pct}%', { pct: 17 }) -> 'Save 17%'. A missing value leaves the placeholder visible. */
export function fmt(text: string, values: Record<string, string | number> = {}): string {
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole))
}

type Tags = Record<string, (children: ReactNode) => ReactNode>

/**
 * Renders a translated sentence that contains inline tags, so links and bold stay inside the translation and word order can
 * change per language:  rich('Read the <link>privacy policy</link>.', { link: (c) => <Link href="/privacy">{c}</Link> })
 * Tags do not nest. An unknown tag renders as plain text.
 */
export function rich(text: string, tags: Tags, values: Record<string, string | number> = {}): ReactNode[] {
  const source = fmt(text, values)
  const out: ReactNode[] = []
  const pattern = /<(\w+)>([\s\S]*?)<\/\1>/g
  let last = 0
  let i = 0
  for (let m = pattern.exec(source); m; m = pattern.exec(source)) {
    if (m.index > last) out.push(source.slice(last, m.index))
    const render = tags[m[1]]
    out.push(render ? <span key={i++} style={{ display: 'contents' }}>{render(m[2])}</span> : m[2])
    last = m.index + m[0].length
  }
  if (last < source.length) out.push(source.slice(last))
  return out
}
