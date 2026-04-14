import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const ease = [0.16, 1, 0.3, 1];

const fmt = (v) => new Intl.NumberFormat("de-DE").format(v);

// Rate tables by company size
const ratesBySize = {
  "<50": { training: 1.0, wage: 0.75 },
  "50-500": { training: 0.5, wage: 0.5 },
  ">500": { training: 0.25, wage: 0.25 },
};

// KI implementation value by employee count (midpoints)
function getKiValue(employees) {
  if (employees <= 5) return 37500;
  if (employees <= 15) return 75000;
  if (employees <= 30) return 137500;
  return 212500;
}

export default function RechnerSlide({ isActive }) {
  const [months, setMonths] = useState(12);
  const [companySize, setCompanySize] = useState("<50");
  const [employees, setEmployees] = useState(5);
  const [salary, setSalary] = useState(4000);

  const headerShow = (delay = 0) => ({
    initial: { opacity: 0, x: -32, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 0, x: -32, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  const panelShow = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: isActive
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 32 },
    transition: { duration: 0.7, ease, delay },
  });

  // Live calculation
  const calc = useMemo(() => {
    const rates = ratesBySize[companySize];
    const schulung = employees * 10000 * rates.training;
    const lohnkosten = employees * salary * months * rates.wage;
    const kiImplementierung = getKiValue(employees);
    const gesamt = schulung + lohnkosten + kiImplementierung;
    return { schulung, lohnkosten, kiImplementierung, gesamt };
  }, [months, companySize, employees, salary]);

  const bars = [
    {
      label: "Schulung",
      value: calc.schulung,
      color: "bg-emerald",
    },
    {
      label: "Lohnkosten",
      value: calc.lohnkosten,
      color: "bg-maroon",
    },
    {
      label: "KI-Implementierung",
      value: calc.kiImplementierung,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-dark relative">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="slide-content w-full max-w-[1100px] mx-auto px-5 md:px-10 py-12 pb-20 relative z-10">
        {/* Section header */}
        <div className="mb-10 text-center">
          <motion.div
            {...headerShow(0)}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-white-muted">
              F&ouml;rderrechner
            </span>
          </motion.div>

          <motion.h2
            {...headerShow(0.1)}
            className="font-heading font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.025em] text-text-white"
          >
            Berechnen Sie Ihre F&ouml;rdersumme
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Inputs */}
          <motion.div
            {...panelShow(0.2)}
            className="backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] rounded-[2px] p-7 flex flex-col gap-7"
          >
            {/* Dauer */}
            <div>
              <label className="block text-sm font-medium text-white/60 mb-3">
                Dauer
              </label>
              <div className="flex gap-2">
                {[6, 12].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonths(m)}
                    className={`px-6 py-2.5 rounded-[2px] text-sm font-medium transition-all duration-200 ${
                      months === m
                        ? "bg-maroon text-white"
                        : "bg-white/[0.05] text-white/60 border border-white/[0.1] hover:bg-white/[0.08]"
                    }`}
                  >
                    {m} Monate
                  </button>
                ))}
              </div>
            </div>

            {/* Unternehmensgr&ouml;&szlig;e */}
            <div>
              <label className="block text-sm font-medium text-white/60 mb-3">
                Unternehmensgr&ouml;&szlig;e
              </label>
              <div className="flex gap-2">
                {["<50", "50-500", ">500"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setCompanySize(size)}
                    className={`px-6 py-2.5 rounded-[2px] text-sm font-medium transition-all duration-200 ${
                      companySize === size
                        ? "bg-maroon text-white"
                        : "bg-white/[0.05] text-white/60 border border-white/[0.1] hover:bg-white/[0.08]"
                    }`}
                  >
                    {size} MA
                  </button>
                ))}
              </div>
            </div>

            {/* Anzahl Mitarbeiter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-white/60">
                  Anzahl Mitarbeiter
                </label>
                <span className="text-2xl font-bold text-white">{employees}</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-white/30">1</span>
                <span className="text-[11px] text-white/30">50</span>
              </div>
            </div>

            {/* Durchschnittliches Bruttogehalt */}
            <div>
              <label className="block text-sm font-medium text-white/60 mb-3">
                Durchschn. Bruttogehalt
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1000}
                  max={15000}
                  step={100}
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value) || 0)}
                  className="w-full bg-white/[0.05] border border-white/[0.1] text-white text-right px-4 py-2.5 rounded-[2px] pr-10 focus:outline-none focus:border-maroon/50 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 font-medium">
                  &euro;
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Results */}
          <motion.div
            {...panelShow(0.35)}
            className="backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] rounded-[2px] p-7 flex flex-col gap-6"
          >
            {/* Total */}
            <div className="text-center mb-2">
              <motion.div
                animate={
                  isActive
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, ease }}
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-emerald leading-none"
              >
                {fmt(calc.gesamt)} &euro;
              </motion.div>
              <p className="text-sm text-text-white-muted mt-2">
                Gesamte F&ouml;rdersumme
              </p>
            </div>

            {/* Breakdown bars */}
            <div className="flex flex-col gap-5">
              {bars.map((bar) => {
                const pct =
                  calc.gesamt > 0
                    ? Math.round((bar.value / calc.gesamt) * 100)
                    : 0;
                return (
                  <div key={bar.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/70">{bar.label}</span>
                      <span className="text-sm font-semibold text-white">
                        {fmt(bar.value)} &euro;
                      </span>
                    </div>
                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${bar.color}`}
                        initial={{ width: 0 }}
                        animate={
                          isActive
                            ? { width: `${pct}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 0.7, ease, delay: 0.5 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cash-Vorteil box */}
            <div className="mt-auto border border-emerald/30 bg-emerald/5 rounded-[2px] p-4">
              <p className="text-xs text-text-white-muted mb-1">
                Netto-Vorteil f&uuml;r Ihre Kanzlei
              </p>
              <p className="text-2xl font-bold text-emerald">
                {fmt(calc.lohnkosten)} &euro;
              </p>
              <p className="text-[11px] text-white/40 mt-1">
                Lohnkostenerstattung &mdash; Geld, das direkt an Sie flie&szlig;t
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
