import { ImageResponse } from 'next/og'

export const alt = 'Plot Ledge: plot management software for property dealers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0b1f17', color: '#f5f7f5', padding: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: '#064e3b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="44" height="44" viewBox="0 0 28 28" fill="none" stroke="#fbbf24" strokeWidth="1.5">
              <path d="M5 5h18v18H5zM14 5v18M5 14h18" />
              <path d="M8 8h3v3H8z" fill="#fbbf24" />
            </svg>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Plot Ledge</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, display: 'flex', flexDirection: 'column' }}>
            <span>Every plot. Every installment.</span>
            <span style={{ color: '#fbbf24' }}>Every rupee, tracked.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#a7f3d0', display: 'flex' }}>Plot management software for property dealers</div>
        </div>
      </div>
    ),
    size,
  )
}
