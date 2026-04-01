import { useEffect, useRef, useState } from 'react'

export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const once = options?.once ?? true

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.1, rootMargin: '-50px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return { ref, inView }
}
