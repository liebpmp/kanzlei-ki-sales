import { motion } from "framer-motion";
import { Search, FileText, GraduationCap, Rocket, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "1",
    phase: "Discovery",
    timeline: "Woche 1–2",
    title: "Potenzialanalyse",
    meta: "30 Min, kostenlos",
    description:
      "Wir analysieren Ihre Kanzlei und berechnen die mögliche Fördersumme.",
    checklist: [
      "Bestehende Workflows & Tools erfassen",
      "KI-Potenziale identifizieren",
      "Individuellen Plan erstellen",
    ],
  },
  {
    number: "2",
    phase: "Antrag",
    timeline: "Woche 3–4",
    title: "Förderantrag",
    meta: "Wir übernehmen alles",
    description:
      "Wir übernehmen den kompletten Antrag bei der Agentur für Arbeit — Sie müssen sich um nichts kümmern.",
    checklist: [
      "Förderfähigkeit prüfen",
      "Alle Unterlagen vorbereiten",
      "Antrag einreichen & nachverfolgen",
    ],
  },
  {
    number: "3",
    phase: "Schulung",
    timeline: "Monat 1–12",
    title: "Schulung & KI-Setup",
    meta: "2 Calls / Woche",
    description:
      "Ihre Mitarbeiter lernen KI-Anwendung in der Praxis, parallel implementieren wir die Systeme.",
    checklist: [
      "IHK-zertifizierte Weiterbildung",
      "KI-Agenten konfigurieren & trainieren",
      "Workflows automatisieren",
    ],
  },
  {
    number: "4",
    phase: "Go Live",
    timeline: "Ab Monat 3",
    title: "KI-Mitarbeiter live",
    meta: "Parallel zur Schulung",
    description:
      "Schrittweise Aktivierung aller KI-Mitarbeiter im Tagesgeschäft Ihrer Kanzlei.",
    checklist: [
      "Performance-Monitoring einrichten",
      "Feintuning auf Ihre Daten",
      "24/7 autonomer Betrieb",
    ],
  },
];

function TimelineStep({ step, index, isLast, isActive }) {
  return (
    <motion.div
      className="flex gap-6 md:gap-8 relative"
      initial={{ opacity: 0, x: 24 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
      transition={{ duration: 0.6, ease, delay: index * 0.18 }}
    >
      {/* Left: number circle + vertical line */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="relative z-10 flex items-center justify-center size-14 rounded-full bg-maroon text-white text-[22px] font-bold shadow-[0_4px_12px_rgba(162,30,41,0.25)]"
          initial={{ scale: 0.6 }}
          animate={isActive ? { scale: 1 } : { scale: 0.6 }}
          transition={{ duration: 0.4, ease, delay: index * 0.18 }}
          style={isActive ? { animation: `pulse-ring 2s ease-out ${index * 0.3}s 1` } : {}}
        >
          {step.number}
        </motion.div>

        {/* Vertical connecting line */}
        {!isLast && (
          <div className="relative w-px flex-1 min-h-[24px] bg-border-light my-2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-maroon/40"
              initial={{ height: 0 }}
              animate={isActive ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 + index * 0.18 }}
            />
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="flex flex-col gap-1.5 pb-8 pt-1">
        {/* Phase pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-3 py-1 mb-1 w-fit">
          <span className="text-maroon font-semibold text-xs tracking-wider uppercase">
            {step.phase}
          </span>
          <span className="text-[11px] text-text-secondary border border-border-light rounded-full px-2.5 py-0.5">
            {step.timeline}
          </span>
        </div>

        <h3 className="text-[18px] font-bold text-text-primary leading-snug">
          {step.title}
        </h3>
        <span className="text-[13px] font-semibold text-maroon uppercase tracking-wide">
          {step.meta}
        </span>
        <p className="text-[14px] leading-relaxed text-text-secondary mt-1 max-w-[380px]">
          {step.description}
        </p>

        {/* Checklist */}
        <div className="flex flex-col gap-1.5 mt-2">
          {step.checklist.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-start gap-2 text-[13px] text-text-primary"
              initial={{ opacity: 0, x: -12 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease, delay: 0.4 + index * 0.18 + i * 0.08 }}
            >
              <span className="size-4 rounded-full bg-maroon/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="size-2.5 text-maroon" />
              </span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AblaufSlide({ isActive }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-y-auto bg-cream">
      <div className="slide-content w-full max-w-[1100px] mx-auto px-5 md:px-10 py-12 pb-20">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          animate={
            isActive
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -32, filter: "blur(8px)" }
          }
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              So funktioniert's
            </span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight tracking-tight text-text-primary">
            In 4 Schritten zum KI-Mitarbeiter
          </h2>
        </motion.div>

        {/* Timeline — 2 columns on desktop, single on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 max-w-[900px] mx-auto">
          {steps.map((step, i) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
              isActive={isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
