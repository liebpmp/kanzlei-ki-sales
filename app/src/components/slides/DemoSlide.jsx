import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1];

// Animated counter hook: counts from 0 to target over duration when active
function useAnimatedCounter(target, isActive, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for a satisfying count-up
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, target, duration]);

  return value;
}

const agents = [
  {
    letter: "C",
    letterBg: "bg-maroon",
    name: "Clara",
    area: "Telefon",
    tasks: "142 heute",
    status: "LIVE",
  },
  {
    letter: "D",
    letterBg: "bg-emerald",
    name: "DATEV-Bot",
    area: "FiBu",
    tasks: "312 Belege",
    status: "LIVE",
  },
  {
    letter: "M",
    letterBg: "bg-amber-500",
    name: "Mandanten-Bot",
    area: "Komm.",
    tasks: "28 aktiv",
    status: "TRAINING",
  },
  {
    letter: "F",
    letterBg: "bg-blue-500",
    name: "Fristen-Agent",
    area: "Compliance",
    tasks: "89 offen",
    status: "LIVE",
  },
];

const stats = [
  { label: "ANRUFE", target: 47, color: "text-text-primary" },
  { label: "BELEGE", target: 312, color: "text-maroon" },
  { label: "FRISTEN", target: 89, color: "text-amber-500" },
  { label: "EFFIZIENZ", target: 94, color: "text-emerald", suffix: "%" },
];

function StatValue({ target, isActive, color, suffix = "" }) {
  const value = useAnimatedCounter(target, isActive, 1200);
  return (
    <span className={`text-lg font-bold ${color}`}>
      {value}
      {suffix}
    </span>
  );
}

export default function DemoSlide({ isActive }) {
  const headerShow = (delay = 0) => ({
    initial: { opacity: 0, x: -32, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 0, x: -32, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  const dashboardShow = {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: isActive
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 40, scale: 0.96 },
    transition: { duration: 0.8, ease, delay: 0.25 },
  };

  const rowShow = (i) => ({
    initial: { opacity: 0, x: -16 },
    animate: isActive
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: -16 },
    transition: { duration: 0.5, ease, delay: 0.15 + i * 0.1 },
  });

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-dark relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.12)_0%,rgba(16,185,129,0.04)_40%,transparent_70%)] pointer-events-none blur-[40px]" />

      <div className="min-h-[100dvh] flex flex-col justify-center px-5 md:px-10 py-12 pb-20 relative z-10">
        {/* Section header */}
        <div className="mb-10 text-center">
          <motion.div
            {...headerShow(0)}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-white-muted">
              Live Demo
            </span>
          </motion.div>

          <motion.h2
            {...headerShow(0.1)}
            className="font-heading font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.025em] text-text-white"
          >
            Ihr KI-Kanzlei-Dashboard
          </motion.h2>
        </div>

        {/* macOS Dashboard Mockup */}
        <motion.div
          {...dashboardShow}
          className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(162,30,41,0.08)] max-w-[900px] mx-auto"
        >
          {/* Title bar */}
          <div className="bg-cream-dark/50 border-b border-border-light px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full" style={{ backgroundColor: "rgba(255,95,87,0.6)" }} />
                <span className="size-3 rounded-full" style={{ backgroundColor: "rgba(254,188,46,0.6)" }} />
                <span className="size-3 rounded-full" style={{ backgroundColor: "rgba(40,200,64,0.6)" }} />
              </div>
              <span className="text-xs text-text-secondary font-medium ml-1">
                steuerclara — agent dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-maroon animate-pulse-dot" />
              <span className="text-xs font-medium text-maroon">Live</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 border-b border-border-light">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-3 py-3 text-center border-r border-border-light last:border-r-0"
              >
                <div className="text-[9px] font-semibold tracking-wider text-text-secondary mb-1">
                  {stat.label}
                </div>
                <StatValue
                  target={stat.target}
                  isActive={isActive}
                  color={stat.color}
                  suffix={stat.suffix}
                />
              </div>
            ))}
          </div>

          {/* Agent status table */}
          <div>
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_auto] px-4 py-2 text-[9px] text-text-secondary tracking-wider font-semibold border-b border-border-light uppercase">
              <span>Agent</span>
              <span>Bereich</span>
              <span>Tasks</span>
              <span>Status</span>
            </div>

            {/* Table rows */}
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                {...rowShow(i)}
                className="grid grid-cols-[1fr_1fr_1fr_auto] items-center px-4 py-2.5 border-b border-border-light/50 last:border-b-0"
              >
                {/* Agent name with avatar */}
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white ${agent.letterBg}`}
                  >
                    {agent.letter}
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {agent.name}
                  </span>
                </div>

                {/* Area */}
                <span className="text-sm text-text-secondary">{agent.area}</span>

                {/* Tasks */}
                <span className="text-sm text-text-secondary">{agent.tasks}</span>

                {/* Status badge */}
                <StatusBadge status={agent.status} />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-cream-dark/30 border-t border-border-light px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-text-secondary">
              <span className="font-semibold text-text-primary">4 Agents</span>{" "}
              aktiv
            </span>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-medium text-emerald">
                System l&auml;uft
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isLive = status === "LIVE";
  const badgeClasses = isLive
    ? "border-emerald/30 text-emerald bg-emerald/5"
    : "border-amber-500/30 text-amber-500 bg-amber-500/5";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full border ${badgeClasses}`}
    >
      {isLive && (
        <span className="size-1.5 rounded-full bg-emerald animate-pulse" />
      )}
      {status}
    </span>
  );
}
