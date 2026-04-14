import { motion } from 'framer-motion'
import { Building2, ShieldCheck, Award, GraduationCap, Lock, ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const badges = [
  { icon: Building2, label: 'Agentur für Arbeit', desc: 'Offiziell anerkannter Bildungsträger' },
  { icon: ShieldCheck, label: 'AZAV-zertifiziert', desc: 'Zugelassene Maßnahme nach §45 SGB III' },
  { icon: Award, label: 'TÜV-geprüft', desc: 'Qualitätsmanagement nach ISO 9001' },
  { icon: GraduationCap, label: 'IHK-Zertifikat', desc: 'Anerkannter Weiterbildungsabschluss' },
  { icon: Lock, label: 'DSGVO-konform', desc: 'Datenschutz nach höchsten Standards' },
]

const flowSteps = [
  { label: 'Staat / AfA', icon: Building2, amount: 'Fördermittel' },
  { label: 'Förderperspektive', icon: Award, amount: 'Schulung + KI' },
  { label: 'Ihre Kanzlei', icon: ShieldCheck, amount: 'KI-Mitarbeiter' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

export default function TrustSlide() {
  return (
    <div className="w-full h-full bg-dark flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-emerald text-[13px] font-semibold uppercase tracking-wider">Vertrauen & Sicherheit</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white mt-2 leading-tight">
            Zertifiziert. Gefördert. Sicher.
          </h2>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {badges.map((b) => (
            <motion.div
              key={b.label}
              variants={badgeVariants}
              className="flex flex-col items-center text-center bg-white/[0.04] border border-white/[0.08] rounded-[2px] p-4 md:p-5 transition-all duration-500 hover:bg-white/[0.07] hover:border-emerald/20"
            >
              <div className="size-12 rounded-full bg-emerald/10 flex items-center justify-center mb-3 relative">
                <div className="absolute inset-0 rounded-full animate-[pulse-ring_3s_ease-out_infinite]" />
                <b.icon className="size-6 text-emerald relative z-10" />
              </div>
              <h3 className="text-white font-semibold text-[13px] mb-1">{b.label}</h3>
              <p className="text-white/40 text-[11px] leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Money Flow */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
        >
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 md:gap-8">
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 16, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.7 + i * 0.15 }}
              >
                <div className="size-14 rounded-full bg-gradient-to-br from-emerald to-emerald/80 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center">
                  <step.icon className="size-6 text-white" />
                </div>
                <span className="text-[12px] text-white/70 font-medium">{step.label}</span>
                <span className="text-[11px] text-emerald font-semibold">{step.amount}</span>
              </motion.div>

              {i < flowSteps.length - 1 && (
                <motion.div
                  className="text-emerald/40"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.9 + i * 0.15 }}
                >
                  <ArrowRight className="size-5" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
