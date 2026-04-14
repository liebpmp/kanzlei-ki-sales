import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Bot, Shield, Wrench } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const modules = [
  { icon: Lightbulb, num: "01", title: "KI-Grundlagen & Tools", desc: "Einführung in KI, Überblick über die wichtigsten Tools für die Kanzlei", color: "bg-maroon/10 text-maroon", weeks: "Monat 1" },
  { icon: MessageSquare, num: "02", title: "Prompt Engineering", desc: "Effektive Prompts für Steuerfach-Anwendungsfälle schreiben", color: "bg-amber-500/10 text-amber-600", weeks: "Monat 2" },
  { icon: Bot, num: "03", title: "KI-Agents & Automation", desc: "DATEV, ELSTER, Mandantenkommunikation automatisieren", color: "bg-emerald/10 text-emerald", weeks: "Monat 3–4" },
  { icon: Shield, num: "04", title: "Compliance & DSGVO", desc: "Sicherer Umgang mit Daten, rechtliche Rahmenbedingungen", color: "bg-blue-500/10 text-blue-600", weeks: "Monat 5" },
  { icon: Wrench, num: "05", title: "Eigener KI-Workflow", desc: "Sofort einsetzbar in Ihrer Kanzlei — das Abschlussprojekt", color: "bg-purple-500/10 text-purple-600", weeks: "Monat 6" },
];

export default function S10_Curriculum({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-2">
            Das lernen Ihre Mitarbeiter
          </h2>
          <p className="text-text-secondary text-base max-w-lg">
            5 Module in 6 Monaten — praxisnah, kanzleispezifisch, sofort anwendbar.
          </p>
        </motion.div>

        {/* Stepped pathway */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-maroon/30 via-emerald/30 to-emerald/30 hidden lg:block" />

          <div className="flex flex-col gap-4">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                className="flex items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.12 }}
              >
                {/* Step indicator */}
                <div className="relative z-10 shrink-0">
                  <div className={`w-12 h-12 rounded-xl ${mod.color} flex items-center justify-center`}>
                    <mod.icon className="size-5" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 p-4 rounded-xl bg-white/70 border border-border-light hover:border-maroon/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-text-primary">{mod.title}</span>
                    <span className="text-[10px] text-text-muted border border-border-light rounded-full px-2 py-0.5">{mod.weeks}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-6 p-4 rounded-xl bg-emerald/5 border border-emerald/15 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5, ease }}
        >
          <p className="text-sm text-emerald font-semibold">🎯 Abschluss: Fertiger, sofort einsetzbarer KI-Workflow für Ihre Kanzlei</p>
        </motion.div>
      </div>
    </div>
  );
}
