import { motion } from 'framer-motion'
import { ArrowRight, Clock, Phone, Calculator, Check } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const bullets = [
  { icon: Check, text: 'Komplett unverbindlich' },
  { icon: Clock, text: '30 Minuten — mehr brauchen wir nicht' },
  { icon: Calculator, text: 'Ihre individuelle Fördersumme berechnet' },
]

export default function CTASlide() {
  return (
    <div className="w-full h-full bg-maroon flex items-center justify-center overflow-hidden relative">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-black/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[700px] px-6 w-full flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Icon */}
        <motion.div
          className="size-16 md:size-20 rounded-full bg-white/10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <Phone className="size-7 md:size-9 text-white" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-heading text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold text-white leading-[1.1]"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
        >
          In 30 Minuten wissen,<br /> was möglich ist
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-white/70 text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[500px] leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
        >
          Lassen Sie uns gemeinsam analysieren, welche KI-Mitarbeiter für Ihre Kanzlei möglich sind — und wie viel Förderung Sie erhalten.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        >
          <button className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-maroon text-[16px] md:text-[17px] font-bold px-8 md:px-10 py-4 md:py-5 rounded-[2px] transition-all duration-300 cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
            Kostenlose Potenzialanalyse buchen
            <ArrowRight className="size-5" />
          </button>
        </motion.div>

        {/* Trust Bullets */}
        <motion.div
          className="flex flex-col gap-3 mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
        >
          {bullets.map((b, i) => (
            <motion.div
              key={b.text}
              className="flex items-center gap-2.5 text-white/80"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.75 + i * 0.1 }}
            >
              <div className="size-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <b.icon className="size-3 text-white" />
              </div>
              <span className="text-[14px]">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
