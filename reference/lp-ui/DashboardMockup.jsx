import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tasks = [
  { emoji: "\u{1F4CB}", text: "Steuerbescheid gepr\u00FCft \u2014 2 Abweichungen erkannt" },
  { emoji: "\u{1F4C1}", text: "34 Belege klassifiziert \u2014 DATEV-Import bereit" },
  { emoji: "\u23F0", text: "USt-VA Frist in 3 Tagen \u2014 Erinnerung versandt" },
  { emoji: "\u{1F916}", text: "KI-Fachkraft: 8 Prozesse automatisiert" },
];

const ease = [0.16, 1, 0.3, 1];

export default function DashboardMockup() {
  return (
    <motion.div
      className="animate-float w-full max-w-[480px] mx-auto lg:mx-0"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.6 }}
    >
      <div className="bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-border-light overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-cream-dark/60 border-b border-border-light">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-[#FF5F57]" />
            <span className="size-3 rounded-full bg-[#FEBC2E]" />
            <span className="size-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[12px] font-medium text-text-secondary ml-2">
            KI-Kanzlei-Assistent — Live
          </span>
        </div>

        {/* Task rows */}
        <div className="flex flex-col divide-y divide-border-light">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between px-4 py-3.5 gap-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease, delay: 1.0 + i * 0.3 }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[14px] shrink-0">{task.emoji}</span>
                <span className="text-[13px] text-text-secondary leading-snug truncate">
                  {task.text}
                </span>
              </div>
              <motion.div
                className="flex items-center justify-center size-5 rounded-full bg-emerald/15 shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease, delay: 1.3 + i * 0.3 }}
              >
                <Check className="size-3 text-emerald" strokeWidth={3} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-cream-dark/40 border-t border-border-light">
          <span className="text-[11px] text-text-muted font-medium">
            4 Prozesse aktiv
          </span>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald animate-pulse-dot" />
            <span className="text-[11px] text-emerald font-medium">
              System l&auml;uft
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
