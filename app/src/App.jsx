import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TitleSlide from "./components/slides/TitleSlide";
import ProblemSlide from "./components/slides/ProblemSlide";
import SolutionSlide from "./components/slides/SolutionSlide";
import DemoSlide from "./components/slides/DemoSlide";
import FoerderungSlide from "./components/slides/FoerderungSlide";
import RechnerSlide from "./components/slides/RechnerSlide";
import SchulungSlide from "./components/slides/SchulungSlide";
import VergleichSlide from "./components/slides/VergleichSlide";
import AblaufSlide from "./components/slides/AblaufSlide";
import TrustSlide from "./components/slides/TrustSlide";
import CTASlide from "./components/slides/CTASlide";
import SlideNav from "./components/ui/SlideNav";

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
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const slideTransition = {
  x: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  opacity: { duration: 0.3 },
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const isAnimating = useRef(false);
  const touchStart = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= slides.length) return;
      if (index === currentSlide) return;
      isAnimating.current = true;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setTimeout(() => { isAnimating.current = false; }, 550);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? nextSlide() : prevSlide(); }
    touchStart.current = null;
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="h-[100dvh] w-screen overflow-hidden relative bg-dark"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0"
        >
          <CurrentSlideComponent isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* Prev/Next arrow buttons — hidden on mobile (use swipe) */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 size-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-white transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6 text-text-primary" />
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 size-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-white transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6 text-text-primary" />
        </button>
      )}

      {/* Slide counter (top right) */}
      <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
        <span className="text-xs font-semibold text-text-primary">{currentSlide + 1}</span>
        <span className="text-xs text-text-secondary"> / {slides.length}</span>
      </div>

      <SlideNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={goToSlide}
      />
    </div>
  );
}
