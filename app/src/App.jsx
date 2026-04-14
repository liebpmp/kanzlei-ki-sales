import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  center: {
    x: 0,
    opacity: 1,
  },
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

      setTimeout(() => {
        isAnimating.current = false;
      }, 550);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStart.current = null;
  };

  // Click navigation (left/right halves)
  const handleClick = (e) => {
    // Don't navigate if clicking on interactive elements
    const tag = e.target.tagName.toLowerCase();
    if (
      tag === "button" ||
      tag === "input" ||
      tag === "a" ||
      tag === "select" ||
      tag === "textarea" ||
      e.target.closest("button") ||
      e.target.closest("a") ||
      e.target.closest("input") ||
      e.target.closest('[role="button"]')
    ) {
      return;
    }

    const x = e.clientX;
    const w = window.innerWidth;
    if (x < w * 0.2) prevSlide();
    else if (x > w * 0.8) nextSlide();
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
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

      <SlideNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={goToSlide}
      />

      {/* Keyboard hint - fades out */}
      {currentSlide === 0 && (
        <motion.div
          className="fixed bottom-20 left-1/2 -translate-x-1/2 text-[12px] text-text-secondary/50 flex items-center gap-2 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className="px-1.5 py-0.5 border border-border-light rounded text-[10px]">
            ←
          </span>
          <span className="px-1.5 py-0.5 border border-border-light rounded text-[10px]">
            →
          </span>
          <span>Pfeiltasten oder Swipe</span>
        </motion.div>
      )}
    </div>
  );
}
