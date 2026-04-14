import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideNav from './components/ui/SlideNav'
import TitleSlide from './components/slides/TitleSlide'
import ProblemSlide from './components/slides/ProblemSlide'
import SolutionSlide from './components/slides/SolutionSlide'
import DemoSlide from './components/slides/DemoSlide'
import FoerderungSlide from './components/slides/FoerderungSlide'
import RechnerSlide from './components/slides/RechnerSlide'
import SchulungSlide from './components/slides/SchulungSlide'
import VergleichSlide from './components/slides/VergleichSlide'
import AblaufSlide from './components/slides/AblaufSlide'
import TrustSlide from './components/slides/TrustSlide'
import CTASlide from './components/slides/CTASlide'

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  DemoSlide,
  FoerderungSlide,
  RechnerSlide,
  SchulungSlide,
  VergleichSlide,
  AblaufSlide,
  TrustSlide,
  CTASlide,
]

const ease = [0.16, 1, 0.3, 1]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function App() {
  const [[current, direction], setCurrent] = useState([0, 0])
  const isAnimating = useRef(false)
  const touchStart = useRef(null)

  const go = useCallback((idx) => {
    if (isAnimating.current) return
    if (idx < 0 || idx >= slides.length || idx === current) return
    isAnimating.current = true
    setCurrent([idx, idx > current ? 1 : -1])
  }, [current])

  const next = useCallback(() => go(current + 1), [go, current])
  const prev = useCallback(() => go(current - 1), [go, current])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStart.current = null
  }

  const CurrentSlide = slides[current]

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="wait"
        onExitComplete={() => { isAnimating.current = false }}
      >
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease }}
          className="absolute inset-0"
        >
          <CurrentSlide isActive={true} />
        </motion.div>
      </AnimatePresence>

      <SlideNav
        current={current}
        total={slides.length}
        onPrev={(idx) => typeof idx === 'number' ? go(idx) : prev()}
        onNext={(idx) => typeof idx === 'number' ? go(idx) : next()}
      />
    </div>
  )
}
