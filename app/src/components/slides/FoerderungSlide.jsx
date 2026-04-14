import { motion } from 'framer-motion'
import { GraduationCap, Wallet, Server } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const ease = [0.16, 1, 0.3, 1]

const pillars = [
  {
    icon: GraduationCap,
    pct: '100%',
    label: 'Schulungskosten',
    desc: 'Vollständige Übernahme aller Weiterbildungskosten durch die Agentur für Arbeit',
    color: 'emerald',
    value: 50000,
  },
  {
    icon: Wallet,
    pct: '75%',
    label: 'Lohnkostenerstattung',
    desc: 'Bis zu 75% der Bruttogehälter während der gesamten Schulungsdauer erstattet',
    color: 'emerald',
    value: 180000,
  },
  {
    icon: Server,
    pct: '50–100K',
    label: 'KI-Implementierung',
    desc: 'Im Rahmen der Förderung: Professionelle KI-Lösung für Ihre Kanzlei inklusive',
    color: 'maroon',
    value: 75000,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
}

export default function FoerderungSlide() {
  return (
    <div className="w-full h-full bg-cream flex items-center justify-center overflow-hidden relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-emerald text-[13px] font-semibold uppercase tracking-wider">Staatliche Förderung</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.75rem)] font-extrabold text-text-primary mt-2 leading-tight">
            Der Staat zahlt — Sie profitieren
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              variants={cardVariants}
              className="flex flex-col items-center text-center bg-white border border-border-light rounded-[2px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className={`size-14 rounded-full flex items-center justify-center mb-4 ${
                p.color === 'emerald' ? 'bg-emerald/10' : 'bg-maroon/10'
              }`}>
                <p.icon className={`size-7 ${p.color === 'emerald' ? 'text-emerald' : 'text-maroon'}`} />
              </div>

              <span className={`text-[clamp(2rem,4vw,3rem)] font-extrabold font-heading ${
                p.color === 'emerald' ? 'text-emerald' : 'text-maroon'
              }`}>
                {p.pct}
              </span>

              <h3 className="text-text-primary font-semibold text-[16px] mt-2 mb-2">{p.label}</h3>
              <p className="text-text-secondary text-[13px] leading-relaxed mb-4">{p.desc}</p>

              {/* Animated progress bar */}
              <div className="w-full bg-cream-dark rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${p.color === 'emerald' ? 'bg-emerald' : 'bg-maroon'}`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease, delay: 0.8 }}
                />
              </div>

              <div className="mt-3 text-[13px] font-semibold text-text-primary">
                bis zu <AnimatedCounter target={p.value} suffix=" €" duration={1800} className="text-emerald font-bold" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
