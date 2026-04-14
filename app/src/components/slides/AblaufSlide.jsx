import { motion } from 'framer-motion'
import { Search, FileCheck, GraduationCap, Rocket, ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Potenzialanalyse',
    desc: 'Kostenlose Analyse Ihrer Kanzleiprozesse und Identifikation von Automatisierungspotenzial',
    timeline: '30 Min Call',
  },
  {
    num: '02',
    icon: FileCheck,
    title: 'Förderantrag',
    desc: 'Wir übernehmen die komplette Antragstellung bei der Agentur für Arbeit für Sie',
    timeline: '2–4 Wochen',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Schulung + Setup',
    desc: 'IHK-zertifizierte Schulung Ihrer Mitarbeiter parallel zum KI-System-Aufbau',
    timeline: '6–12 Monate',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'KI live',
    desc: 'Ihre KI-Mitarbeiter sind produktiv — Anrufe, DATEV, Fristen vollautomatisch',
    timeline: 'Ab Tag 1',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
}

export default function AblaufSlide() {
  return (
    <div className="w-full h-full bg-cream flex items-center justify-center overflow-hidden relative">
      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-maroon text-[13px] font-semibold uppercase tracking-wider">In 4 Schritten</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-text-primary mt-2 leading-tight">
            So läuft es ab
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connecting arrow (desktop) */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute -right-3 top-10 text-maroon/30 z-10"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.15 }}
                >
                  <ArrowRight className="size-5" />
                </motion.div>
              )}

              {/* Numbered Circle */}
              <div className="relative mb-4">
                <div className="size-16 md:size-20 rounded-full bg-white border-2 border-maroon/20 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <step.icon className="size-7 md:size-8 text-maroon" />
                </div>
                <div className="absolute -top-1 -right-1 size-7 rounded-full bg-maroon text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-text-primary font-semibold text-[15px] mb-1.5">{step.title}</h3>
              <p className="text-text-secondary text-[12px] leading-relaxed mb-2 max-w-[200px]">{step.desc}</p>
              <span className="text-[11px] font-medium text-maroon bg-maroon/10 px-3 py-1 rounded-full">
                {step.timeline}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
