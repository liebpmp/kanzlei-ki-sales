import { motion } from 'framer-motion'
import { Phone, Clock, AlertTriangle, Users, MessageSquare, Laptop } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const problems = [
  { icon: Phone, title: 'Telefon-Chaos', desc: '80+ Anrufe am Tag, davon 60% Routinefragen die Ihre Fachkräfte binden' },
  { icon: Clock, title: 'DATEV-Zeitfresser', desc: 'Stunden mit manueller Belegerfassung und Datenabgleich verschwendet' },
  { icon: AlertTriangle, title: 'Fristen-Stress', desc: 'Kritische Abgabefristen manuell im Blick behalten — ein Risiko' },
  { icon: Users, title: 'Fachkräftemangel', desc: 'Offene Stellen bleiben Monate unbesetzt, Team ist überlastet' },
  { icon: MessageSquare, title: 'Endlos-Kommunikation', desc: 'Mandantenanfragen per Mail, Telefon, Portal — alles einzeln bearbeiten' },
  { icon: Laptop, title: 'Digitalisierungsdruck', desc: 'Mandanten erwarten moderne Tools, aber die Umstellung ist aufwendig' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export default function ProblemSlide() {
  return (
    <div className="w-full h-full bg-dark flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, x: -32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-maroon text-[13px] font-semibold uppercase tracking-wider">Das Problem</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white mt-2 leading-tight">
            Der Kanzleialltag frisst Ihre Zeit
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="group flex flex-col gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-[2px] p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-maroon/30"
            >
              <div className="size-10 rounded-[2px] bg-maroon/15 flex items-center justify-center">
                <p.icon className="size-5 text-maroon" />
              </div>
              <h3 className="text-white font-semibold text-[15px]">{p.title}</h3>
              <p className="text-white/50 text-[13px] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
