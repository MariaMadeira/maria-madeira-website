import { useEffect, useRef, useState } from 'react'

/** The share of an element that must be on screen to trigger its reveal. */
const THRESHOLD = 0.1

const ARMED = 'reveal-armed'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/** True when at least THRESHOLD of the element is inside the viewport. */
function isInViewport(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  if (r.height === 0 || r.width === 0) return false
  const visibleH = Math.min(r.bottom, vh) - Math.max(r.top, 0)
  const visibleW = Math.min(r.right, vw) - Math.max(r.left, 0)
  return visibleH > 0 && visibleW > 0 && visibleH / r.height >= THRESHOLD
}

/**
 * Scroll reveal. Site rule: a fade-in starts when 10% of the element is in
 * view, lasts at most 300ms (see the .reveal classes in index.css), and never
 * happens under prefers-reduced-motion.
 *
 * Content is visible until JavaScript proves it can reveal it: the prerendered
 * HTML has no hidden state. On mount, an element already on screen (or any
 * element when the reader prefers reduced motion, or when IntersectionObserver
 * is missing) is marked in view at once and never hidden. Only an element
 * still below the fold gets the .reveal-armed class, which hides it until it
 * scrolls in.
 *
 * The threshold and root margin are fixed site-wide so every reveal triggers
 * equally early against the viewport; only `once` is read from the options.
 */
export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const once = options?.once ?? true

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined' || (once && isInViewport(el))) {
      setInView(true)
      if (once) return
    } else {
      el.classList.add(ARMED)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: THRESHOLD, rootMargin: '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return { ref, inView }
}
