import { motion } from "framer-motion";
import { Check, ShieldCheck, FileText, Target } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const benefits = [
  { icon: "📚", text: "Bis zu 100% Übernahme der Schulungskosten" },
  { icon: "💰", text: "Bis zu 75% Lohnkostenzuschuss" },
  { icon: "🤖", text: "KI-Implementierung im Wert von 50–250K€ — finanziert aus dem Zuschuss" },
];

const services = [
  { icon: Target, text: "Hohe Bewilligungsquote — wir wissen, worauf es ankommt" },
  { icon: FileText, text: "Minimaler Aufwand für Sie — 1 Excel-Liste reicht" },
  { icon: ShieldCheck, text: "Komplettservice von A bis Z — wir übernehmen die Antragstellung" },
];

export default function S04_Foerderung({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-6">
              <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">02</span>
              <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Die Förderung</span>
            </div>

            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-3">
              Das Qualifizierungschancengesetz
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg">
              Der Staat unterstützt Unternehmen dabei, ihre Mitarbeitenden fit für die Zukunft zu machen — durch geförderte KI-Weiterbildungen und großzügige Lohnkostenzuschüsse.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald/5 border border-emerald/15"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium text-text-primary leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Who qualifies */}
            <div className="p-4 rounded-xl bg-white/70 border border-border-light">
              <p className="text-sm font-semibold text-text-primary mb-2">Wer kann gefördert werden?</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check className="size-4 text-emerald shrink-0" />
                  Mitarbeitende mit mind. 15 Stunden/Woche
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check className="size-4 text-emerald shrink-0" />
                  Offen für digitale Weiterbildung (kein IT-Vorkenntnis nötig)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Triangle + Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            {/* Triangle relationship */}
            <div className="relative bg-white rounded-2xl border border-border-light p-8 mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-center mb-6">
                <svg viewBox="0 0 300 220" className="w-full max-w-[280px]">
                  {/* Triangle lines */}
                  <line x1="150" y1="30" x2="30" y2="190" stroke="#A21E29" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                  <line x1="150" y1="30" x2="270" y2="190" stroke="#A21E29" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                  <line x1="30" y1="190" x2="270" y2="190" stroke="#A21E29" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                  
                  {/* Top: Förderperspektive */}
                  <circle cx="150" cy="30" r="24" fill="#A21E29" opacity="0.08" stroke="#A21E29" strokeWidth="1.5" opacity="0.3" />
                  <text x="150" y="75" textAnchor="middle" className="text-[11px] font-semibold fill-text-primary">Förderperspektive</text>
                  <text x="150" y="28" textAnchor="middle" className="text-[16px]">🎯</text>

                  {/* Bottom left: BA */}
                  <circle cx="30" cy="190" r="24" fill="#10B981" opacity="0.08" stroke="#10B981" strokeWidth="1.5" opacity="0.3" />
                  <text x="30" y="178" textAnchor="middle" className="text-[16px]">🏛️</text>
                  <text x="65" y="215" textAnchor="middle" className="text-[10px] fill-text-secondary">Agentur für Arbeit</text>

                  {/* Bottom right: Kanzlei */}
                  <circle cx="270" cy="190" r="24" fill="#A21E29" opacity="0.08" stroke="#A21E29" strokeWidth="1.5" opacity="0.3" />
                  <text x="270" y="178" textAnchor="middle" className="text-[16px]">🏛️</text>
                  <text x="235" y="215" textAnchor="middle" className="text-[10px] fill-text-secondary">Ihre Kanzlei</text>
                </svg>
              </div>
            </div>

            {/* Service promises */}
            <div className="flex flex-col gap-2.5">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-maroon/5 border border-maroon/10"
                  initial={{ opacity: 0, x: 16 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.1 }}
                >
                  <item.icon className="size-5 text-maroon shrink-0 mt-0.5" />
                  <span className="text-sm text-text-primary leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
