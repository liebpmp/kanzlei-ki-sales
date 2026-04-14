import { motion } from "framer-motion";
import { Phone, BarChart3, Clock, MessageSquare, FolderOpen, Bot } from "lucide-react";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const ease = [0.16, 1, 0.3, 1];

const agents = [
  { icon: Phone, code: "CL", label: "Clara — Telefon-KI", desc: "Beantwortet Mandantenanrufe 24/7, dokumentiert automatisch", color: "bg-maroon/10 text-maroon" },
  { icon: BarChart3, code: "DA", label: "DATEV-Automation", desc: "Belegerkennung, automatische Buchungsvorschläge", color: "bg-amber-500/10 text-amber-600" },
  { icon: Clock, code: "FA", label: "Fristen-Agent", desc: "Automatische Erinnerungen, Eskalation bei Verzug", color: "bg-emerald/10 text-emerald" },
  { icon: MessageSquare, code: "MB", label: "Mandanten-Bot", desc: "Beantwortet FAQ, sammelt Unterlagen ein", color: "bg-blue-500/10 text-blue-600" },
  { icon: FolderOpen, code: "BH", label: "Vorbereitende BuHa", desc: "Kontierung, Belegprüfung, FiBu-Vorbereitung", color: "bg-purple-500/10 text-purple-600" },
];

const stats = [
  { value: "500+", label: "Anrufe / Monat" },
  { value: "15h", label: "gespart / Woche" },
  { value: "24/7", label: "erreichbar" },
];

export default function S06_KI_Overview({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-dark flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-maroon/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/30 bg-maroon/10 px-4 py-1.5 mb-6">
              <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">04</span>
              <span className="text-maroon font-semibold text-sm tracking-wider uppercase">KI-Mitarbeiter</span>
            </div>

            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-4 text-white">
              Was Ihr KI-Mitarbeiter<br />konkret kann
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Nicht nur Schulung — sondern echte KI-Agenten, die ab Tag 1 arbeiten. Implementiert durch SteuerClara.
            </p>

            {/* Stat counters */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.15 }}
                >
                  <div className="text-2xl md:text-3xl font-heading font-semibold text-maroon">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Agent Cards */}
          <div className="flex flex-col gap-2.5">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.code}
                className="flex items-center gap-3 p-3 md:p-4 rounded-xl backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-maroon/30 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.1 }}
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${agent.color}`}>
                  <agent.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{agent.label}</p>
                  <p className="text-xs text-white/50">{agent.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
                  </span>
                  <span className="text-xs text-emerald font-medium">Aktiv</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <span className="text-xs text-white/30">Implementiert durch</span>
          <span className="text-xs text-maroon font-semibold ml-2">SteuerClara</span>
          <span className="text-xs text-white/30 ml-1">— Deutschlands führender KI-Anbieter für Steuerkanzleien</span>
        </motion.div>
      </div>
    </div>
  );
}
