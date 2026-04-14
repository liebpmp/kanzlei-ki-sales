import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Bestehende Workflows & Tools erfassen",
  "DATEV-Integration prüfen",
  "KI-Potenziale identifizieren & priorisieren",
  "Individuellen Implementierungsplan erstellen",
];

const stats = [
  { label: "SCANNED", value: "7", sub: "/7", color: "text-text-primary" },
  { label: "AI SCORE", value: "72", sub: "%", color: "text-maroon" },
  { label: "BOTTLENECKS", value: "2", sub: "", color: "text-red-500" },
  { label: "OPPORTUNITIES", value: "5", sub: "", color: "text-amber-500" },
];

const tableRows = [
  { letter: "D", name: "DATEV", dept: "FiBu", hours: "18h/Woche", status: "BOTTLENECK", statusColor: "border-red-400/30 text-red-400 bg-red-400/5" },
  { letter: "L", name: "Lexware", dept: "Lohn", hours: "12h/Woche", status: "CONNECTED", statusColor: "border-maroon/30 text-maroon bg-maroon/5" },
  { letter: "E", name: "ELSTER", dept: "Meldungen", hours: "6h/Woche", status: "AI READY", statusColor: "border-amber-500/30 text-amber-500 bg-amber-500/5" },
  { letter: "D", name: "DMS", dept: "Archiv", hours: "8h/Woche", status: "BOTTLENECK", statusColor: "border-red-400/30 text-red-400 bg-red-400/5" },
  { letter: "E", name: "E-Mail", dept: "Komm.", hours: "14h/Woche", status: "CONNECTED", statusColor: "border-maroon/30 text-maroon bg-maroon/5" },
  { letter: "F", name: "Finanzamt", dept: "Bescheide", hours: "5h/Woche", status: "AI READY", statusColor: "border-amber-500/30 text-amber-500 bg-amber-500/5" },
  { letter: "E", name: "Excel", dept: "Reporting", hours: "4h/Woche", status: "CONNECTED", statusColor: "border-maroon/30 text-maroon bg-maroon/5" },
];

function AnimStat({ stat, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  const target = parseInt(stat.value);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const step = () => {
      const p = Math.min((Date.now() - start) / 1200, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), delay * 1000);
    return () => clearTimeout(t);
  }, [isInView, target, delay]);

  return (
    <div ref={ref} className="px-3 py-3 text-center border-r border-border-light last:border-r-0">
      <p className="text-[9px] text-text-secondary tracking-wider font-medium">{stat.label}</p>
      <p className={`text-lg font-bold mt-0.5 ${stat.color}`}>
        {val}{stat.sub && <span className="text-text-secondary text-xs">{stat.sub}</span>}
      </p>
    </div>
  );
}

export default function KanzleiAudit() {
  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-cream">
      {/* Subtle background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-maroon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Phase pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-8">
              <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">01</span>
              <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Discovery</span>
              <span className="text-xs text-text-secondary border border-border-light rounded-full px-3 py-0.5">Woche 1–2</span>
            </div>

            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-tight mb-4 tracking-tight">
              Umfassende<br />Kanzlei-Analyse
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              Wir analysieren Ihre bestehenden Prozesse, Tools und Mandantenstruktur — und identifizieren die Bereiche mit dem größten KI-Potenzial.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-text-primary"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                >
                  <span className="size-5 rounded-full bg-maroon/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3 text-maroon" />
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: System Audit Mockup */}
          <motion.div
            ref={mockupRef}
            className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-light bg-cream-dark/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                  <div className="h-3 w-3 rounded-full bg-maroon/40" />
                </div>
                <span className="text-xs text-text-secondary">steuerclara — system audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon" />
                </span>
                <span className="text-xs text-maroon font-medium">Complete</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 border-b border-border-light">
              {stats.map((stat, i) => (
                <AnimStat key={stat.label} stat={stat} delay={i * 0.15} />
              ))}
            </div>

            {/* Table header */}
            <div className="grid grid-cols-4 px-4 py-2 text-[9px] text-text-secondary tracking-wider border-b border-border-light">
              <span>SYSTEM</span>
              <span className="text-right">ABTEILUNG</span>
              <span className="text-right">STUNDEN</span>
              <span className="text-right">STATUS</span>
            </div>

            {/* Table rows */}
            <div className="relative overflow-hidden">
              {tableRows.map((row, i) => (
                <motion.div
                  key={`${row.name}-${i}`}
                  className={`grid grid-cols-4 px-4 py-2.5 border-b border-border-light/50 ${
                    row.status === "BOTTLENECK" ? "bg-red-500/[0.03]" : ""
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${
                      row.status === "BOTTLENECK" ? "bg-red-400/15 text-red-400" :
                      row.status === "AI READY" ? "bg-amber-500/15 text-amber-500" :
                      "bg-maroon/15 text-maroon"
                    }`}>
                      {row.letter}
                    </div>
                    <span className="text-sm text-text-primary">{row.name}</span>
                  </div>
                  <span className="text-sm text-text-secondary text-right self-center">{row.dept}</span>
                  <span className="text-sm text-text-primary font-medium text-right self-center">{row.hours}</span>
                  <div className="text-right self-center">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-cream-dark/30 border-t border-border-light">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <span className="font-semibold text-text-primary">7</span>
                <span>/</span>
                <span>7</span>
                <span className="ml-1">Systeme gescannt</span>
              </div>
              <span className="text-xs text-emerald font-medium">Audit abgeschlossen</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
