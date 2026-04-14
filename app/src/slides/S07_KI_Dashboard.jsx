import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const agents = [
  { code: "CL", label: "Clara Telefon-KI", desc: "12 Anrufe beantwortet", status: "Live", codeColor: "bg-maroon/15 text-maroon" },
  { code: "DA", label: "DATEV-Bot", desc: "47 Belege klassifiziert", status: "Verarbeitet", codeColor: "bg-amber-500/15 text-amber-600" },
  { code: "FA", label: "Fristen-Agent", desc: "USt-VA Frist in 3 Tagen", status: "Überwacht", codeColor: "bg-emerald/15 text-emerald" },
  { code: "MB", label: "Mandanten-Bot", desc: "8 Anfragen bearbeitet", status: "Online", codeColor: "bg-blue-500/15 text-blue-600" },
  { code: "BH", label: "BuHa-Assistent", desc: "Kontierung läuft", status: "Aktiv", codeColor: "bg-purple-500/15 text-purple-600" },
];

const tasks = [
  { emoji: "📋", text: "Steuerbescheid geprüft — 2 Abweichungen erkannt" },
  { emoji: "📁", text: "34 Belege klassifiziert — DATEV-Import bereit" },
  { emoji: "⏰", text: "USt-VA Frist in 3 Tagen — Erinnerung versandt" },
  { emoji: "📞", text: "3 verpasste Anrufe — Rückruf-Termine angelegt" },
];

function StatusBadge({ status }) {
  const colors = {
    Live: "bg-emerald/10 text-emerald",
    Verarbeitet: "bg-amber-500/10 text-amber-600",
    "Überwacht": "bg-blue-500/10 text-blue-600",
    Online: "bg-emerald/10 text-emerald",
    Aktiv: "bg-maroon/10 text-maroon",
  };
  return (
    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export default function S07_KI_Dashboard({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-dark flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      {/* Ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-maroon/12 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-emerald/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight tracking-tight text-white mb-2">
            So sieht Ihre Kanzlei mit KI aus
          </h2>
          <p className="text-white/50 text-sm">Live-Dashboard — alle Agenten auf einen Blick</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          {/* Agent Board */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-sm bg-white/[0.03] shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
                </div>
                <span className="text-xs text-white/40 font-medium">Agenten Board</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
                </span>
                <span className="text-xs text-emerald font-medium">5 Aktiv</span>
              </div>
            </div>

            {/* Agent rows */}
            <div className="divide-y divide-white/[0.05]">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.code}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.03] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.1 }}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${agent.codeColor}`}>
                    {agent.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{agent.label}</p>
                    <p className="text-xs text-white/40 truncate">{agent.desc}</p>
                  </div>
                  <StatusBadge status={agent.status} />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/[0.08]">
              <span className="text-xs text-white/30">Heute erledigt: <span className="text-white/60 font-semibold">127 Aufgaben</span></span>
              <span className="text-xs text-maroon font-semibold">24/7 autonom</span>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-sm bg-white/[0.03]"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <div className="px-5 py-3 border-b border-white/[0.08]">
              <span className="text-xs text-white/40 font-medium">Aktivitäts-Feed</span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {tasks.map((task, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between px-5 py-3.5"
                  initial={{ opacity: 0, x: 12 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.6 + i * 0.15 }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-sm shrink-0">{task.emoji}</span>
                    <span className="text-xs text-white/60 leading-snug truncate">{task.text}</span>
                  </div>
                  <motion.div
                    className="flex items-center justify-center size-5 rounded-full bg-emerald/15 shrink-0 ml-2"
                    initial={{ scale: 0 }}
                    animate={isActive ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, ease, delay: 0.9 + i * 0.15 }}
                  >
                    <Check className="size-3 text-emerald" strokeWidth={3} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="px-5 py-2.5 border-t border-white/[0.08] flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald animate-pulse-dot" />
              <span className="text-xs text-emerald font-medium">System läuft</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
