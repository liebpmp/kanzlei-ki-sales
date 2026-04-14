import { motion } from "framer-motion";

const SLIDE_LABELS = [
  "Titel",
  "Problem",
  "Lösung",
  "Live Demo",
  "Förderung",
  "Rechner",
  "Schulung",
  "Vorher/Nachher",
  "Ablauf",
  "Trust",
  "Kontakt",
];

export default function SlideNav({ currentSlide, onNavigate }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        {SLIDE_LABELS.map((label, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            title={`${index + 1}. ${label}`}
            aria-label={`Slide ${index + 1}: ${label}`}
            className="relative flex items-center justify-center cursor-pointer transition-all duration-300"
          >
            {/* Inactive dot (always rendered as base) */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-3 h-3 bg-transparent"
                  : "w-2.5 h-2.5 bg-black/20 hover:bg-black/40"
              }`}
            />

            {/* Active dot overlay with layoutId for smooth transitions */}
            {currentSlide === index && (
              <motion.span
                layoutId="activeSlideIndicator"
                className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-maroon animate-pulse-ring"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
