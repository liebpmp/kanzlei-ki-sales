import { motion } from 'framer-motion'
import { ArrowRight, Award, ShieldCheck, BadgeEuro } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const badges = [
  { icon: Award, label: 'IHK-zertifiziert' },
  { icon: BadgeEuro, label: '100% gefördert' },
  { icon: ShieldCheck, label: 'Kein Eigenanteil' },
]

export default function TitleSlide() {
  return (
    <div className="w-full h-full bg-cream flex items-center justify-center overflow-hidden relative">
      {/* Subtle glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-maroon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[960px] px-6 flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Pill */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-[0_1px_2px_rgba(8,8,8,0.05),0_3px_3px_rgba(8,8,8,0.04)]"
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <span className="size-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-[13px] text-text-secondary font-medium">Staatlich geförderte KI-Implementierung</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-heading text-[clamp(1.75rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-text-primary"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
        >
          <span className="text-maroon">KI-Mitarbeiter</span> für Ihre Steuerkanzlei
          <br />
          — <span className="text-emerald">100% staatlich gefördert</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-text-secondary max-w-[600px] leading-relaxed"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
        >
          Automatisieren Sie Routineaufgaben, entlasten Sie Ihr Team und nutzen Sie staatliche Förderungen — ohne Eigenanteil.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        >
          <button className="inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-hover text-white text-[15px] font-medium px-7 py-3.5 rounded-[2px] transition-all duration-300 cursor-pointer hover:shadow-[0_4px_20px_rgba(162,30,41,0.3)]">
            Kostenlose Potenzialanalyse
            <ArrowRight className="size-4" />
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium"
            >
              <b.icon className="size-3.5" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
