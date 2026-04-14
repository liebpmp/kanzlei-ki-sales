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
    <div className="h-screen w-screen flex items-center justify-center overflow-y-auto bg-cream">
      <div className="slide-content w-full max-w-[800px] px-6 lg:px-10 py-16 flex flex-col items-center text-center">
        {/* Pill badge */}
        <motion.div
          {...show(0)}
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-[0_1px_2px_rgba(8,8,8,0.05),0_3px_3px_rgba(8,8,8,0.04)] mb-8"
        >
          <span className="size-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-sm font-medium text-text-secondary">
            Staatlich geförderte KI-Implementierung
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...show(0.15)}
          className="font-heading font-semibold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.06] tracking-[-0.03em] text-text-primary mb-6"
        >
          <span className="text-maroon">KI-Mitarbeiter</span>
          <br />
          für Ihre Steuerkanzlei —
          <br />
          <span className="text-emerald">100% staatlich gefördert</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...show(0.3)}
          className="text-lg text-text-secondary max-w-[600px] mb-10 leading-relaxed"
        >
          Qualifizierte KI-Implementierung durch zertifizierte Bildungsträger —
          mit IHK-Abschluss, 100% Förderung und ohne Eigenanteil für Ihre
          Kanzlei.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...show(0.45)}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-hover text-white px-7 py-3.5 rounded-[2px] font-medium transition-colors duration-200">
            Jetzt Fördersumme berechnen
            <ArrowRight className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-border-light bg-white hover:bg-cream-dark text-text-primary px-7 py-3.5 rounded-[2px] font-medium transition-colors duration-200">
            <Play className="size-4" />
            Demo ansehen
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...show(0.6)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
            <Award className="size-4" />
            IHK-zertifiziert
          </span>
          <span className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
            <Shield className="size-4" />
            100% gefördert
          </span>
          <span className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
            <BadgeCheck className="size-4" />
            Kein Eigenanteil
          </span>
        </motion.div>
      </div>
    </div>
  );
}
