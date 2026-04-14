import { motion } from 'framer-motion'
import { PhoneCall, Database, CalendarCheck, MessageCircle, Receipt, Cog } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const solutions = [
  { icon: PhoneCall, title: 'Telefon-KI Clara', desc: '24/7 Anrufannahme, Terminbuchung und Routineantworten — vollautomatisch' },
  { icon: Database, title: 'DATEV-Automatisierung', desc: 'Belegerfassung, Kontierung und Datenabgleich ohne manuellen Aufwand' },
  { icon: CalendarCheck, title: 'Fristen-Management', desc: 'Automatische Überwachung aller Abgabefristen mit proaktiver Warnung' },
  { icon: MessageCircle, title: 'Mandanten-Kommunikation', desc: 'KI-gestützter Bot beantwortet Standard-Anfragen sofort und korrekt' },
  { icon: Receipt, title: 'Vorbereitende Buchhaltung', desc: 'Belege erfassen, kategorisieren und vorbereiten — alles automatisch' },
  { icon: Cog, title: 'Individuelle Automations', desc: 'Maßgeschneiderte Workflows für Ihre spezifischen Kanzleiprozesse' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export default function SolutionSlide() {
  return (
    <div className="w-full h-full bg-cream flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, x: -32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-emerald text-[13px] font-semibold uppercase tracking-wider">Die Lösung</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-text-primary mt-2 leading-tight">
            Ein KI-Mitarbeiter, der nie krank wird<br className="hidden md:block" /> und nie kündigt
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group flex flex-col gap-3 bg-white border border-border-light rounded-[2px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-emerald/20"
            >
              <div className="size-10 rounded-[2px] bg-emerald/10 flex items-center justify-center">
                <s.icon className="size-5 text-emerald" />
              </div>
              <h3 className="text-text-primary font-semibold text-[15px]">{s.title}</h3>
              <p className="text-text-secondary text-[13px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
