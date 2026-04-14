import { motion } from "framer-motion";

const sections = [
  { label: "Ihre Kanzlei", slides: [2] },
  { label: "Die Förderung", slides: [3] },
  { label: "Rechenbeispiel", slides: [4] },
  { label: "KI-Mitarbeiter", slides: [5, 6, 7] },
  { label: "Schulung", slides: [8, 9] },
  { label: "Praxis & FAQ", slides: [10, 11, 12] },
  { label: "Nächste Schritte", slides: [13, 14, 15] },
];

export default function SectionNav({ currentSlide, onNavigate }) {
  if (currentSlide < 2) return null; // hide on title + agenda

  const activeSection = sections.findIndex((s) =>
    s.slides.includes(currentSlide)
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center h-12 gap-1">
        {/* Logo area */}
        <div className="flex items-center gap-2 mr-6 shrink-0">
          <div className="flex items-center gap-1">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-maroon via-maroon to-emerald" />
          </div>
          <span className="text-[11px] font-semibold text-text-primary tracking-wide uppercase hidden lg:block">
            Förderperspektive
          </span>
        </div>

        {/* Section tabs */}
        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
          {sections.map((section, i) => {
            const isActive = i === activeSection;
            return (
              <button
                key={section.label}
                onClick={() => onNavigate(section.slides[0])}
                className={`relative px-3 py-3 text-[11px] md:text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {section.label}
                {isActive && (
                  <motion.div
                    layoutId="section-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-maroon rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
