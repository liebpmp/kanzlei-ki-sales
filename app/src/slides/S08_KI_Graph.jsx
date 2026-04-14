import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const nodes = [
  { id: "center", label: "Kanzlei-Daten", emoji: "🏛️", x: 250, y: 180, size: 52 },
  { id: "clara", label: "Clara", emoji: "📞", x: 80, y: 60, size: 40 },
  { id: "datev", label: "DATEV-Bot", emoji: "📊", x: 420, y: 60, size: 40 },
  { id: "fristen", label: "Fristen-Agent", emoji: "⏰", x: 80, y: 300, size: 40 },
  { id: "mandant", label: "Mandanten-Bot", emoji: "💬", x: 420, y: 300, size: 40 },
  { id: "buha", label: "BuHa-KI", emoji: "📁", x: 250, y: 340, size: 36 },
];

const edges = [
  { from: "center", to: "clara" },
  { from: "center", to: "datev" },
  { from: "center", to: "fristen" },
  { from: "center", to: "mandant" },
  { from: "center", to: "buha" },
  { from: "clara", to: "datev" },
  { from: "fristen", to: "mandant" },
];

const checklist = [
  "Kanzlei-spezifische Agenten konfigurieren",
  "Training auf Ihre Mandantendaten & Prozesse",
  "Automatisierte Workflows aktivieren",
  "Performance-Monitoring einrichten",
  "Privates LLM live schalten",
];

function getNode(id) {
  return nodes.find((n) => n.id === id);
}

export default function S08_KI_Graph({ isActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="min-h-[100dvh] bg-dark flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-maroon/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight tracking-tight text-white mb-4">
            So arbeiten Ihre<br />KI-Agenten zusammen
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
            Maßgeschneiderte KI-Agenten werden in jedem Bereich eingesetzt — trainiert auf Ihre Mandantendaten, Prozesse und Kanzleisprache.
          </p>

          <div className="flex flex-col gap-3">
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 text-sm text-white/80"
                initial={{ opacity: 0, x: -16 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.1 }}
              >
                <span className="size-5 rounded-full bg-maroon/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3 text-maroon" />
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Knowledge Graph */}
        <motion.div
          ref={ref}
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <svg viewBox="0 0 500 400" className="w-full max-w-[500px]">
            {/* Edges with draw animation */}
            {edges.map((edge, i) => {
              const from = getNode(edge.from);
              const to = getNode(edge.to);
              return (
                <motion.line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#A21E29"
                  strokeWidth="1.5"
                  strokeOpacity="0.25"
                  initial={{ pathLength: 0 }}
                  animate={isActive ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, ease, delay: 0.5 + i * 0.1 }}
                />
              );
            })}

            {/* Pulse dots on edges */}
            {edges.map((edge, i) => {
              const from = getNode(edge.from);
              const to = getNode(edge.to);
              const mx = (from.x + to.x) / 2;
              const my = (from.y + to.y) / 2;
              return (
                <motion.circle
                  key={`dot-${i}`}
                  cx={mx}
                  cy={my}
                  r="3"
                  fill="#A21E29"
                  className="animate-pulse-dot"
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isActive ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.1 }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                {/* Glow ring for center */}
                {node.id === "center" && (
                  <circle cx={node.x} cy={node.y} r={node.size + 8} fill="none" stroke="#A21E29" strokeWidth="2" opacity="0.15" className="animate-pulse-ring" />
                )}
                <circle cx={node.x} cy={node.y} r={node.size} fill={node.id === "center" ? "#1a1a1a" : "#141414"} stroke={node.id === "center" ? "#A21E29" : "rgba(255,255,255,0.1)"} strokeWidth={node.id === "center" ? 2 : 1.5} />
                <text x={node.x} y={node.y - 4} textAnchor="middle" className="text-[18px]">{node.emoji}</text>
                <text x={node.x} y={node.y + 16} textAnchor="middle" fill="rgba(255,255,255,0.6)" className="text-[10px] font-medium">{node.label}</text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
