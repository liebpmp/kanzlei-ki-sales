import { motion } from "framer-motion";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const ease = [0.16, 1, 0.3, 1];

const example1 = {
  label: "Kanzlei mit 10 Mitarbeitern",
  ma: 10,
  months: 12,
  brutto: "4.000€",
  rows: [
    { label: "Schulungswert", value: "100.000€", color: "emerald" },
    { label: "Lohnkostenerstattung (75%)", value: "360.000€", color: "emerald" },
    { label: "KI-Implementierung inkl.", value: "100.000€", color: "maroon" },
  ],
  total: "560.000€",
};

const example2 = {
  label: "Kanzlei mit 5 Mitarbeitern",
  ma: 5,
  months: 6,
  brutto: "4.000€",
  rows: [
    { label: "Schulungswert", value: "50.000€", color: "emerald" },
    { label: "Lohnkostenerstattung (75%)", value: "90.000€", color: "emerald" },
    { label: "KI-Implementierung inkl.", value: "65.000€", color: "maroon" },
  ],
  total: "205.000€",
};

function CalcCard({ example, delay, isActive }) {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
    >
      <div className="px-5 py-3 bg-cream-dark/50 border-b border-border-light">
        <p className="text-sm font-semibold text-text-primary">{example.label}</p>
        <p className="text-xs text-text-secondary">{example.ma} MA · {example.months} Monate · Ø {example.brutto} Brutto</p>
      </div>
      <div className="p-5 flex flex-col gap-2.5">
        {example.rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">{row.label}</span>
            <span className={`text-sm font-semibold ${row.color === "maroon" ? "text-maroon" : "text-emerald"}`}>
              ✅ {row.value}
            </span>
          </div>
        ))}
        <div className="border-t border-border-light pt-3 mt-1 flex items-center justify-between">
          <span className="text-sm font-semibold text-text-primary">Gesamtförderung</span>
          <span className="text-xl font-heading font-semibold text-maroon">
            <AnimatedCounter value={example.total} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function S05_Rechner({ isActive }) {
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
            <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">03</span>
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Rechenbeispiel</span>
          </div>
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-2">
            Ihre mögliche Fördersumme
          </h2>
          <p className="text-text-secondary text-base max-w-lg">
            Mit nur wenigen Angaben berechnen wir die voraussichtliche Fördersumme für Ihre Kanzlei.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <CalcCard example={example1} delay={0.2} isActive={isActive} />
          <CalcCard example={example2} delay={0.4} isActive={isActive} />
        </div>

        <motion.p
          className="text-xs text-text-muted mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          🧠 Förderung hängt u.a. vom Gehalt, der Mitarbeitendenzahl und dem individuellen Schulungskonzept ab — wir berechnen das exakt für Sie.
        </motion.p>
      </div>
    </div>
  );
}
