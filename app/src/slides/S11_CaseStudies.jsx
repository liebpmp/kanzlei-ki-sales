import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const cases = [
  {
    label: "Kanzlei mit 12 MA",
    problem: "40 Anrufe/Tag manuell, 3h DATEV-Pflege täglich, Überstunden im Sekretariat",
    solution: "Clara Telefon-KI + DATEV-Automation-Bot implementiert",
    result: "15h/Woche gespart, 100% telefonisch erreichbar, Mandantenzufriedenheit +40%",
    emoji: "📞",
    highlight: "15h/Woche gespart",
  },
  {
    label: "Kanzlei mit 25 MA",
    problem: "Fachkräftemangel — 3 offene Stellen seit 9 Monaten, Überlastung im Team",
    solution: "4 KI-Agenten: Clara, Fristen-Agent, Mandanten-Bot, BuHa-Assistent",
    result: "Kapazität von 3 FTE gewonnen, 0 neue Stellen nötig, Krankenstand -20%",
    emoji: "🤖",
    highlight: "3 FTE durch KI ersetzt",
  },
];

export default function S11_CaseStudies({ isActive }) {
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
            <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">06</span>
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Praxisbeispiele</span>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight">
            So sieht das in der Praxis aus
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-border-light overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.2 }}
            >
              <div className="px-5 py-3 bg-cream-dark/50 border-b border-border-light flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">{c.emoji} {c.label}</span>
                <span className="text-xs text-maroon font-semibold bg-maroon/8 px-2.5 py-1 rounded-full">{c.highlight}</span>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Problem</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.problem}</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="size-4 text-text-muted" />
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-maroon uppercase tracking-wider">Maßnahme</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.solution}</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="size-4 text-text-muted" />
                </div>

                {/* Result */}
                <div className="p-3 rounded-xl bg-emerald/5 border border-emerald/15">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-emerald uppercase tracking-wider">Resultat</span>
                  </div>
                  <p className="text-sm text-text-primary font-medium leading-relaxed">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
