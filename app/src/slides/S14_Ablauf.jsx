import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const steps = [
  { num: "01", day: "Heute", title: "Vereinbarung & Kick-off", desc: "Erfolgsbasierte Vereinbarung + 500€ Bearbeitungsgebühr (wird bei Bewilligung verrechnet). Kick-off-Call zur Bestandsaufnahme." },
  { num: "02", day: "Tag 7", title: "Datenaufnahme & Prüfung", desc: "Sie liefern eine Excel-Liste mit Mitarbeiterdaten — wir prüfen Förderfähigkeit und bereiten alle Unterlagen vor." },
  { num: "03", day: "Tag 14", title: "Antragstellung", desc: "Gemeinsamer Zoom-Termin mit Bildungsträger. Wir reichen den Antrag vollständig bei der Agentur für Arbeit ein." },
  { num: "04", day: "Tag 42–56", title: "Förderzusage & Start", desc: "Förderbescheid erhalten. Schulung + KI-Implementierung starten parallel. Zuschüsse werden direkt an Sie ausgezahlt." },
];

export default function S14_Ablauf({ isActive }) {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-4">
            <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">07</span>
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Ablauf</span>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight">
            So läuft die Beantragung ab
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-6 bottom-6 w-px bg-maroon/20 origin-top hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isActive ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.15 }}
              >
                {/* Circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-maroon text-white font-heading font-semibold text-sm flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>
                  {i === 0 && <div className="absolute inset-0 rounded-full animate-pulse-ring" />}
                </div>

                {/* Card */}
                <div className="flex-1 p-5 rounded-xl bg-white border border-border-light shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-heading font-semibold text-text-primary">{step.title}</span>
                    <span className="text-xs text-maroon font-semibold bg-maroon/8 px-2.5 py-1 rounded-full">{step.day}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
