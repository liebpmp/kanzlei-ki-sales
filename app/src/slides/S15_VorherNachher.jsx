import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const vorher = [
  "40 Anrufe täglich manuell annehmen",
  "3h DATEV-Pflege pro Tag",
  "Fachkräftemangel — offene Stellen seit Monaten",
  "Fristen-Stress — manuelle Erinnerungen",
  "Mandanten beschweren sich über Erreichbarkeit",
  "Überstunden im gesamten Team",
];

const nachher = [
  "KI nimmt alle Anrufe ab — 24/7 erreichbar",
  "DATEV-Import automatisch — Minuten statt Stunden",
  "Kapazität wie 3 neue Mitarbeiter — 0 Stellen nötig",
  "Automatische Fristenüberwachung — 0 Verstöße",
  "Mandanten-Bot beantwortet 80% der Anfragen sofort",
  "Work-Life-Balance zurück — weniger Krankenstand",
];

export default function S15_VorherNachher({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-dark flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-maroon/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-white mb-2">
            Ihre Kanzlei — vorher und nachher
          </h2>
          <p className="text-white/50 text-base">Stellen Sie sich vor, Ihre Kanzlei läuft so.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
          {/* Vorher */}
          <motion.div
            className="rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <div className="text-center mb-4">
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">❌ Vorher</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {vorher.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-white/60"
                  initial={{ opacity: 0, x: -12 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.08 }}
                >
                  <X className="size-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex items-center justify-center self-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center">
              <ArrowRight className="size-5 text-white" />
            </div>
          </motion.div>

          {/* Nachher */}
          <motion.div
            className="rounded-2xl border border-emerald/20 bg-emerald/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
          >
            <div className="text-center mb-4">
              <span className="text-sm font-semibold text-emerald uppercase tracking-wider">✅ Nachher</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {nachher.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-white/80"
                  initial={{ opacity: 0, x: 12 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.08 }}
                >
                  <Check className="size-4 text-emerald shrink-0 mt-0.5" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
