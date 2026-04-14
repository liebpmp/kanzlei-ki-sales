import { motion } from "framer-motion";
import { Building2, Users, Cpu, Clock, HelpCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const questions = [
  { icon: Users, q: "Wie viele Mitarbeitende hat Ihre Kanzlei?" },
  { icon: Building2, q: "Welche Mandate-Typen betreuen Sie hauptsächlich?" },
  { icon: Cpu, q: "Welche Tools nutzen Sie? (DATEV, Lexware, Addison...)" },
  { icon: Clock, q: "Wo verbringen Ihre Mitarbeiter die meiste Zeit mit Routinearbeit?" },
  { icon: HelpCircle, q: "Haben Sie bereits Erfahrung mit KI oder Fördermitteln?" },
];

export default function S03_Discovery({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      <div className="absolute top-0 right-0 w-[50%] h-full bg-cream-dark/40 -skew-x-6 translate-x-20" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Right text — on mobile first, desktop second */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-6">
            <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">01</span>
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Discovery</span>
          </div>

          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-4">
            Ihre Kanzlei
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            Erzählen Sie uns, wo Ihre Kanzlei steht — wir zeigen Ihnen, was durch KI möglich ist.
          </p>

          <div className="flex flex-col gap-3">
            {questions.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-border-light"
                initial={{ opacity: 0, x: -16 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
              >
                <span className="w-8 h-8 rounded-lg bg-maroon/8 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="size-4 text-maroon" />
                </span>
                <span className="text-sm text-text-primary leading-relaxed">{item.q}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-3xl bg-maroon/5 border border-maroon/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <div className="text-lg font-semibold text-text-primary">Ihre Kanzlei</div>
                <div className="text-sm text-text-secondary mt-1">Potenzialanalyse</div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border-light px-3 py-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
            >
              <span className="text-xs font-semibold text-maroon">⚡ KI-Potenzial erkennen</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
