import { motion } from 'framer-motion'
import { Phone, FileText, Clock, Bot, BookOpen, MessageSquare, Calendar } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const ease = [0.16, 1, 0.3, 1]

const kpis = [
  { label: 'Anrufe heute', value: 47, icon: Phone, color: 'text-maroon' },
  { label: 'Belege verarbeitet', value: 312, icon: FileText, color: 'text-emerald' },
  { label: 'Fristen überwacht', value: 89, icon: Clock, color: 'text-fp-blue' },
]

const agents = [
  { name: 'Clara — Telefon-KI', status: 'LIVE', icon: Phone, active: true },
  { name: 'DATEV-Automatisierung', status: 'LIVE', icon: FileText, active: true },
  { name: 'Mandanten-Bot', status: 'TRAINING', icon: MessageSquare, active: false },
  { name: 'Fristen-Manager', status: 'LIVE', icon: Calendar, active: true },
]

export default function DemoSlide() {
  return (
    <div className="w-full h-full bg-dark flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[960px] px-6 w-full">
        <motion.div
          className="mb-6 md:mb-10"
          initial={{ opacity: 0, x: -32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-emerald text-[13px] font-semibold uppercase tracking-wider">Live Dashboard</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white mt-2 leading-tight">
            So sieht Ihr KI-Cockpit aus
          </h2>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          {/* macOS Titlebar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-[#FF5F57]/80" />
                <div className="size-3 rounded-full bg-[#FEBC2E]/80" />
                <div className="size-3 rounded-full bg-[#28C840]/80" />
              </div>
              <span className="text-[12px] text-white/40 ml-1">kanzlei-ki-dashboard.app</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald" />
              </span>
              <span className="text-[11px] text-emerald font-medium">System aktiv</span>
            </div>
          </div>

          {/* KPI Row */}
          <div className="grid grid-cols-3 gap-3 p-4 md:p-5">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="flex flex-col items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg p-3 md:p-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.5 + i * 0.15 }}
              >
                <kpi.icon className={`size-4 md:size-5 ${kpi.color} mb-1`} />
                <span className={`text-xl md:text-2xl font-bold ${kpi.color}`}>
                  <AnimatedCounter target={kpi.value} duration={1500} />
                </span>
                <span className="text-[10px] md:text-[11px] text-white/40 text-center">{kpi.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Agent Status List */}
          <div className="border-t border-white/[0.06]">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04] last:border-b-0"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.8 + i * 0.12 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`size-8 rounded-lg flex items-center justify-center ${agent.active ? 'bg-emerald/15' : 'bg-amber-500/15'}`}>
                    <agent.icon className={`size-4 ${agent.active ? 'text-emerald' : 'text-amber-500'}`} />
                  </div>
                  <span className="text-[13px] md:text-[14px] text-white/80 font-medium">{agent.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`relative flex size-2 ${agent.active ? '' : ''}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite] ${agent.active ? 'bg-emerald' : 'bg-amber-500'}`} />
                    <span className={`relative inline-flex rounded-full size-2 ${agent.active ? 'bg-emerald' : 'bg-amber-500'}`} />
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                    agent.active
                      ? 'text-emerald border-emerald/30 bg-emerald/10'
                      : 'text-amber-500 border-amber-500/30 bg-amber-500/10'
                  }`}>
                    {agent.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between px-5 py-2.5 bg-white/[0.02] border-t border-white/[0.06]">
            <span className="text-[11px] text-white/30 font-medium">Letzte Aktualisierung: gerade eben</span>
            <div className="flex items-center gap-1.5">
              <Bot className="size-3 text-emerald/60" />
              <span className="text-[11px] text-emerald/60 font-medium">4 Agents aktiv</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
