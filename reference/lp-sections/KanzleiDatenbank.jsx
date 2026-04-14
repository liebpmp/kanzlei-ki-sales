import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Alle bestehenden Tools & Systeme verbinden",
  "Mandanten, Bescheide, Belege & Fristen synchronisieren",
  "Einheitliches Datenmodell aufbauen",
  "Echtzeit-Sync — immer aktuell",
];

const sources = [
  "DATEV", "Lexware", "Microsoft Excel", "ELSTER",
  "Finanzamt", "Outlook", "DMS", "Mandantenportal",
];

const graphNodes = [
  { label: "DATEV", x: 105, y: 60 },
  { label: "Lexware", x: 295, y: 60 },
  { label: "Excel", x: 50, y: 140 },
  { label: "ELSTER", x: 350, y: 140 },
  { label: "Outlook", x: 80, y: 220 },
  { label: "DMS", x: 320, y: 220 },
  { label: "Finanzamt", x: 140, y: 260 },
  { label: "Portal", x: 260, y: 260 },
];

const CENTER = { x: 200, y: 155 };

function CountUp({ target, suffix = "", decimals = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(String(target).replace(/\./g, ""), 10);
    const start = Date.now();
    const step = () => {
      const p = Math.min((Date.now() - start) / 1800, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * num));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{val.toLocaleString("de-DE")}{suffix}</span>;
}

export default function KanzleiDatenbank() {
  const graphRef = useRef(null);
  const isGraphInView = useInView(graphRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-8">
              <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">02</span>
              <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Foundation</span>
              <span className="text-xs text-text-secondary border border-border-light rounded-full px-3 py-0.5">Woche 2–4</span>
            </div>

            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-tight mb-4 tracking-tight">
              Ihre Kanzlei-<br />Datenbank
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              Wir verbinden jedes Tool das Sie nutzen und bauen eine zentrale Datenquelle. Mandanten, Bescheide, Belege, Fristen — alles indexiert, alles durchsuchbar.
            </p>

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

          {/* Right: Knowledge Graph Mockup */}
          <motion.div
            ref={graphRef}
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
                <span className="text-xs text-text-secondary">steuerclara — kanzlei-datenbank</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon" />
                </span>
                <span className="text-xs text-maroon font-medium">Indexed</span>
              </div>
            </div>

            {/* Source tags */}
            <div className="px-5 pt-5 pb-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {sources.map((src, i) => (
                  <motion.span
                    key={src}
                    className="text-xs px-3.5 py-1.5 rounded-full border border-maroon/40 bg-maroon/10 text-maroon shadow-[0_0_12px_-3px_rgba(162,30,41,0.2)] cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isGraphInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, ease, delay: i * 0.08 }}
                  >
                    {src}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Knowledge Graph SVG */}
            <div className="px-5 py-2">
              <svg viewBox="0 0 400 300" fill="none" className="w-full" style={{ height: 220 }}>
                <defs>
                  <radialGradient id="dbGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(162,30,41,0.12)" />
                    <stop offset="100%" stopColor="rgba(162,30,41,0)" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background glow */}
                <circle cx={CENTER.x} cy={CENTER.y} r="120" fill="url(#dbGlow)" />

                {/* Connection lines */}
                {graphNodes.map((node, i) => (
                  <motion.line
                    key={`line-${node.label}`}
                    x1={CENTER.x}
                    y1={CENTER.y}
                    x2={node.x}
                    y2={node.y}
                    stroke="#A21E29"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isGraphInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.1 }}
                  />
                ))}

                {/* Center node */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isGraphInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.2 }}
                >
                  <circle cx={CENTER.x} cy={CENTER.y} r="32" fill="#A21E29" filter="url(#glow)" />
                  <text x={CENTER.x} y={CENTER.y - 6} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Kanzlei-</text>
                  <text x={CENTER.x} y={CENTER.y + 6} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Datenbank</text>
                  <motion.circle
                    cx={CENTER.x} cy={CENTER.y} r="32"
                    fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"
                    initial={{ r: 32 }}
                    animate={isGraphInView ? { r: [32, 40, 32] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.g>

                {/* Status badge */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isGraphInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <rect x={CENTER.x - 20} y={CENTER.y + 22} width="40" height="14" rx="7" fill="#10B981" />
                  <text x={CENTER.x} y={CENTER.y + 32} textAnchor="middle" fill="white" fontSize="7" fontWeight="600">READY</text>
                </motion.g>

                {/* Outer nodes */}
                {graphNodes.map((node, i) => (
                  <motion.g
                    key={node.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isGraphInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.08 }}
                  >
                    <circle cx={node.x} cy={node.y} r="8" fill="#A21E29" fillOpacity="0.15" stroke="#A21E29" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx={node.x} cy={node.y} r="3" fill="#10B981" />
                    <text x={node.x} y={node.y + 18} textAnchor="middle" fill="#595B63" fontSize="8" fontWeight="500">{node.label}</text>
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Stats footer */}
            <div className="grid grid-cols-3 border-t border-border-light">
              <div className="px-4 py-3 text-center border-r border-border-light">
                <p className="text-[9px] text-text-secondary tracking-wider">RECORDS</p>
                <p className="text-sm font-bold text-text-primary mt-0.5">
                  <CountUp target="158792" />
                </p>
              </div>
              <div className="px-4 py-3 text-center border-r border-border-light">
                <p className="text-[9px] text-text-secondary tracking-wider">SOURCES</p>
                <p className="text-sm font-bold text-text-primary mt-0.5">8</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-[9px] text-text-secondary tracking-wider">LATENCY</p>
                <p className="text-sm font-bold text-emerald mt-0.5">12ms</p>
              </div>
            </div>

            {/* Progress footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-cream-dark/30 border-t border-border-light">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <span className="font-semibold text-text-primary">8</span>
                <span>/</span>
                <span>8</span>
                <span className="ml-1">streams ·</span>
              </div>
              <span className="text-xs text-emerald font-medium">All data indexed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
