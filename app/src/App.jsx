import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import S01_Title from "./slides/S01_Title";
import S02_Agenda from "./slides/S02_Agenda";
import S03_Discovery from "./slides/S03_Discovery";
import S04_Foerderung from "./slides/S04_Foerderung";
import S05_Rechner from "./slides/S05_Rechner";
import S06_KI_Overview from "./slides/S06_KI_Overview";
import S07_KI_Dashboard from "./slides/S07_KI_Dashboard";
import S08_KI_Graph from "./slides/S08_KI_Graph";
import S09_ISOYO from "./slides/S09_ISOYO";
import S10_Curriculum from "./slides/S10_Curriculum";
import S11_CaseStudies from "./slides/S11_CaseStudies";
import S12_FAQ from "./slides/S12_FAQ";
import S13_Proof from "./slides/S13_Proof";
import S14_Ablauf from "./slides/S14_Ablauf";
import S15_VorherNachher from "./slides/S15_VorherNachher";
import S16_CTA from "./slides/S16_CTA";
import SectionNav from "./components/ui/SectionNav";

const slides = [
  S01_Title,
  S02_Agenda,
  S03_Discovery,
  S04_Foerderung,
  S05_Rechner,
  S06_KI_Overview,
  S07_KI_Dashboard,
  S08_KI_Graph,
  S09_ISOYO,
  S10_Curriculum,
  S11_CaseStudies,
  S12_FAQ,
  S13_Proof,
  S14_Ablauf,
  S15_VorherNachher,
  S16_CTA,
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
  x: { type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  opacity: { duration: 0.25 },
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
      setTimeout(() => { isAnimating.current = false; }, 500);
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
      className="h-[100dvh] w-screen overflow-hidden relative bg-cream"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section navigation (FMI-style) */}
      <SectionNav currentSlide={currentSlide} onNavigate={goToSlide} />

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

      {/* Desktop nav arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 size-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-white transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="size-5 text-text-primary" />
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 size-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center hover:bg-white transition-colors cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="size-5 text-text-primary" />
        </button>
      )}

      {/* Slide counter */}
      <div className="fixed top-14 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
        <span className="text-[11px] font-semibold text-text-primary">{currentSlide + 1}</span>
        <span className="text-[11px] text-text-secondary"> / {slides.length}</span>
      </div>

      {/* Bottom dot nav (mobile) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide
                ? "w-6 h-1.5 bg-maroon"
                : "w-1.5 h-1.5 bg-text-muted/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
