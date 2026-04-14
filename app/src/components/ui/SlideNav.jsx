import { motion } from "framer-motion";

export default function SlideNav({ currentSlide, totalSlides, onNavigate }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1.5 md:gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            aria-label={`Slide ${index + 1}`}
            className="relative flex items-center justify-center cursor-pointer p-0.5"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-2.5 h-2.5 md:w-3 md:h-3 bg-transparent"
                  : "w-2 h-2 md:w-2.5 md:h-2.5 bg-black/20 hover:bg-black/40"
              }`}
            />
            {currentSlide === index && (
              <motion.span
                layoutId="activeSlideIndicator"
                className="absolute inset-0 m-auto w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-maroon"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
