import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const trustBullets = [
  "Unverbindlich & kostenlos",
  "30 Minuten Gespräch",
  "Individuelle Fördersumme",
];

export default function CTASlide({ isActive }) {
  // Slide-up with blur, staggered by delay
  const show = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-maroon relative">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="slide-content w-full max-w-[1100px] mx-auto px-5 md:px-10 py-12 pb-20 relative z-10 flex flex-col items-center text-center gap-8">
        {/* Small label */}
        <motion.div
          {...show(0)}
          className="flex items-center gap-2"
        >
          <Calendar className="size-4 text-white/50" />
          <span className="text-white/60 text-[13px] uppercase tracking-wider font-medium">
            Nächster Schritt
          </span>
        </motion.div>

        {/* H2 */}
        <motion.h2
          {...show(0.12)}
          className="font-heading font-semibold text-white text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-tight max-w-[700px]"
        >
          In 30 Minuten wissen, was möglich ist
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          {...show(0.24)}
          className="text-white/70 text-lg max-w-[600px] leading-relaxed"
        >
          Kostenlose Potenzialanalyse für Ihre Kanzlei. Wir zeigen Ihnen, welche
          Prozesse sich automatisieren lassen und wie hoch Ihre Fördersumme ist.
        </motion.p>

        {/* Large CTA button */}
        <motion.div {...show(0.36)}>
          <motion.button
            className="bg-white text-maroon hover:bg-cream px-10 py-5 rounded-[2px] text-lg font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] inline-flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Kostenlose Potenzialanalyse buchen
            <ArrowRight className="size-5" />
          </motion.button>
        </motion.div>

        {/* 3 Trust bullets */}
        <motion.div
          {...show(0.48)}
          className="flex flex-wrap items-center justify-center gap-8 mt-4"
        >
          {trustBullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-center gap-2 text-white/60 text-[14px]"
            >
              <Check className="text-emerald size-4 shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
