'use client'

/**
 * "Skip to content": hidden until it has keyboard focus (see .skip-link in globals.css). It moves focus to <main id="content"> itself
 * instead of changing the address (#content), so using it never adds a step to the browser's Back history.
 */
export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#content"
      className="skip-link"
      onClick={(e) => {
        const main = document.getElementById('content')
        if (!main) return
        e.preventDefault()
        main.setAttribute('tabindex', '-1')
        main.focus()
        main.scrollIntoView()
      }}
    >
      {label}
    </a>
  )
}
