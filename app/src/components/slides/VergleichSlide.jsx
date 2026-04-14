import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const comparisons = [
  { ohne: '80+ Anrufe manuell bearbeiten', mit: 'KI beantwortet 80% automatisch' },
  { ohne: 'Stunden mit DATEV-Belegerfassung', mit: 'Automatische Belegverarbeitung' },
  { ohne: 'Fristenkalender manuell pflegen', mit: 'Proaktive Fristenüberwachung' },
  { ohne: 'Standardanfragen einzeln beantworten', mit: '24/7 Mandanten-Bot' },
  { ohne: 'Fachkräftemangel & Überlastung', mit: 'KI-Mitarbeiter skaliert unbegrenzt' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export default function VergleichSlide() {
  return (
    <div className="w-full h-full bg-dark flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[960px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white leading-tight">
            Vorher vs. Nachher
          </h2>
        </motion.div>

        {/* Column Headers */}
        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 py-2">
            <X className="size-5 text-red-400" />
            <span className="text-red-400 font-semibold text-[14px] uppercase tracking-wider">Ohne KI</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <Check className="size-5 text-emerald" />
            <span className="text-emerald font-semibold text-[14px] uppercase tracking-wider">Mit KI-Mitarbeiter</span>
          </div>
        </motion.div>

        {/* Comparison Rows */}
        <motion.div
          className="flex flex-col gap-2.5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              variants={rowVariants}
              className="grid grid-cols-2 gap-3 md:gap-5"
            >
              {/* Without */}
              <div className="flex items-center gap-3 bg-red-500/[0.06] border border-red-500/[0.12] rounded-[2px] p-4">
                <div className="size-7 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
                  <X className="size-3.5 text-red-400" />
                </div>
                <span className="text-white/60 text-[13px] md:text-[14px] leading-snug">{row.ohne}</span>
              </div>

              {/* With */}
              <div className="flex items-center gap-3 bg-emerald/[0.06] border border-emerald/[0.15] rounded-[2px] p-4">
                <div className="size-7 rounded-full bg-emerald/15 flex items-center justify-center shrink-0">
                  <Check className="size-3.5 text-emerald" />
                </div>
                <span className="text-white/80 text-[13px] md:text-[14px] leading-snug font-medium">{row.mit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
