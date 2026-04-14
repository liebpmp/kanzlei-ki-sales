import { motion } from 'framer-motion'
import { BookOpen, Users, Video, Award, Clock, Calendar, Euro } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

const timeline = [
  { day: 'Mo', label: 'Einführung', desc: 'KI-Grundlagen & Tool-Setup', icon: BookOpen },
  { day: 'Di–Do', label: 'Praxis', desc: 'Hands-on Training mit echten Kanzleidaten', icon: Users },
  { day: 'Fr', label: 'Review', desc: 'Wochenreview & Optimierung', icon: Video },
  { day: 'Ende', label: 'IHK-Zertifikat', desc: 'Offizielle IHK-Zertifizierung', icon: Award },
]

const stats = [
  { value: '15h', label: 'pro Woche', icon: Clock },
  { value: '2', label: 'Coaching Calls', icon: Video },
  { value: '6–12', label: 'Monate Laufzeit', icon: Calendar },
  { value: 'IHK', label: 'Zertifiziert', icon: Award },
  { value: '0€', label: 'Eigenanteil', icon: Euro },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export default function SchulungSlide() {
  return (
    <div className="w-full h-full bg-cream flex items-center justify-center overflow-hidden relative">
      <div className="relative z-10 mx-auto max-w-[1080px] px-6 w-full">
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, x: -32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-maroon text-[13px] font-semibold uppercase tracking-wider">Schulungskonzept</span>
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-text-primary mt-2 leading-tight">
            Strukturiert zum KI-Experten
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">
          {/* Timeline */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timeline.map((step, i) => (
                <motion.div
                  key={step.day}
                  variants={itemVariants}
                  className="flex items-start gap-4 bg-white border border-border-light rounded-[2px] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="shrink-0">
                    <div className="size-11 rounded-full bg-maroon/10 flex items-center justify-center">
                      <step.icon className="size-5 text-maroon" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-maroon uppercase tracking-wider bg-maroon/10 px-2 py-0.5 rounded-full">
                        {step.day}
                      </span>
                    </div>
                    <h3 className="text-text-primary font-semibold text-[15px]">{step.label}</h3>
                    <p className="text-text-secondary text-[13px] mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div
            className="bg-white border border-border-light rounded-[2px] p-5 md:p-6"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            <h3 className="text-text-primary font-semibold text-[15px] mb-4">Auf einen Blick</h3>
            <div className="flex flex-col gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3 p-2.5 rounded-[2px] bg-cream-dark/50"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.5 + i * 0.1 }}
                >
                  <div className="size-8 rounded-[2px] bg-maroon/10 flex items-center justify-center shrink-0">
                    <stat.icon className="size-4 text-maroon" />
                  </div>
                  <div>
                    <span className="text-text-primary font-bold text-[15px]">{stat.value}</span>
                    <span className="text-text-secondary text-[12px] ml-1.5">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
