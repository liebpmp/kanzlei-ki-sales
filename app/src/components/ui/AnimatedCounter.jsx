import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ target, duration = 2000, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  const prevTarget = useRef(target)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const from = prevTarget.current !== target ? val : 0
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(from + eased * (target - from)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prevTarget.current = target
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{val.toLocaleString('de-DE')}{suffix}
    </span>
  )
}
