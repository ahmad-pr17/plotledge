import QRCode from 'qrcode'

type Props = {
  /** The full URL to encode. Add campaign tags first, see trackedUrl() in lib/site.ts. */
  value: string
  /** Text read out by screen readers, for example "QR code: open Plot Ledge on your phone". */
  label: string
  /** Rendered width and height in CSS pixels. Keep it at 128 or more so phone cameras read it easily. */
  size?: number
  className?: string
}

/** Quiet zone width in modules. ISO/IEC 18004 asks for at least 4. */
const QUIET_ZONE = 4

/**
 * A static QR code drawn on the server as one SVG path. No third-party QR service sees the link,
 * nothing runs in the browser, and the image stays sharp at any size.
 *
 * Industry rules followed here:
 * - Dark modules on a light background with the full 4-module quiet zone. Never inverted, also in dark mode.
 * - Error correction level M (about 15% recoverable), the usual choice for a URL with no logo on top.
 * - Always show the short link as text beside it, so people can still type it when scanning fails.
 */
export function QrCode({ value, label, size = 176, className }: Props) {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: 'M' })
  const n = modules.size
  const total = n + QUIET_ZONE * 2

  // Join horizontal runs of dark modules into one rectangle each, which keeps the path short.
  let path = ''
  for (let row = 0; row < n; row++) {
    let col = 0
    while (col < n) {
      if (!modules.data[row * n + col]) {
        col++
        continue
      }
      const start = col
      while (col < n && modules.data[row * n + col]) col++
      path += `M${start + QUIET_ZONE} ${row + QUIET_ZONE}h${col - start}v1h-${col - start}z`
    }
  }

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${total} ${total}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width={total} height={total} fill="#ffffff" />
      <path d={path} fill="#0b1f17" />
    </svg>
  )
}
