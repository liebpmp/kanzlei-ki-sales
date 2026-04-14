import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const items = [
  { num: "01", label: "Ihre Kanzlei verstehen", sub: "Potenziale erkennen" },
  { num: "02", label: "Das Qualifizierungschancengesetz", sub: "Was der Staat zahlt" },
  { num: "03", label: "Ihre Fördersumme berechnen", sub: "Konkretes Rechenbeispiel" },
  { num: "04", label: "Der KI-Mitarbeiter", sub: "Was er konkret kann" },
  { num: "05", label: "Die Schulung", sub: "Wie Ihr Team fit wird" },
  { num: "06", label: "Praxisbeispiele & Ihre Fragen", sub: "Aus echten Kanzleien" },
  { num: "07", label: "Nächste Schritte", sub: "Start der Zusammenarbeit" },
];

export default function S02_Agenda({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-6">
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Agenda</span>
            <span className="text-xs text-text-secondary border border-border-light rounded-full px-3 py-0.5">30 Minuten</span>
          </div>

          <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            Ihr Fahrplan<br />für heute
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-md">
            In 30 Minuten zeigen wir Ihnen, wie Ihre Kanzlei von staatlich geförderter KI-Implementierung profitiert.
          </p>
        </motion.div>

        {/* Right: Numbered list */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-border-light hover:border-maroon/15 hover:bg-white transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
            >
              <span className="w-10 h-10 rounded-xl bg-maroon/8 text-maroon font-heading font-semibold text-sm flex items-center justify-center shrink-0">
                {item.num}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-text-primary">{item.label}</div>
                <div className="text-xs text-text-secondary">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
