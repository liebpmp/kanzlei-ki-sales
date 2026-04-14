import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, BadgeCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function TitleSlide({ isActive }) {
  const show = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-cream">
      <div className="min-h-[100dvh] flex items-center justify-center px-5 md:px-10 py-12 pb-20">
        <div className="w-full max-w-[700px] flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Pill badge */}
          <motion.div
            {...show(0)}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_1px_2px_rgba(8,8,8,0.05),0_3px_3px_rgba(8,8,8,0.04)]"
          >
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-text-secondary">
              Staatlich geförderte KI-Implementierung
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...show(0.15)}
            className="font-heading font-semibold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-text-primary"
          >
            <span className="text-maroon">KI-Mitarbeiter</span>{" "}
            für Ihre Steuerkanzlei —{" "}
            <span className="text-emerald">100% staatlich gefördert</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...show(0.3)}
            className="text-base md:text-lg text-text-secondary max-w-[560px] leading-relaxed"
          >
            Dank des Qualifizierungschancengesetzes wird die KI-Implementierung
            in Ihrer Kanzlei vollständig gefördert — mit IHK-Abschluss und ohne
            Eigenanteil.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...show(0.45)}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <button className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-hover text-white px-6 py-3 md:px-7 md:py-3.5 rounded-[2px] font-medium transition-colors text-sm md:text-base">
              Jetzt Fördersumme berechnen
              <ArrowRight className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-border-light bg-white hover:bg-cream-dark text-text-primary px-6 py-3 md:px-7 md:py-3.5 rounded-[2px] font-medium transition-colors text-sm md:text-base">
              <Play className="size-4" />
              Demo ansehen
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...show(0.6)}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {[
              { icon: Award, label: "IHK-zertifiziert" },
              { icon: Shield, label: "100% gefördert" },
              { icon: BadgeCheck, label: "Kein Eigenanteil" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-3 py-1.5 md:px-3.5 md:py-2 rounded-[2px] text-[12px] md:text-[13px] font-medium"
              >
                <Icon className="size-3.5" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
