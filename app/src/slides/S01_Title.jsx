import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function S01_Title({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden">
      {/* Left gradient bar (FMI-style) */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      {/* Diagonal background panel */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-cream-dark/60 -skew-x-6 translate-x-20 origin-top-right" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          {/* Logos */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 border border-border-light rounded-lg px-3 py-2 bg-white/60">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-maroon to-emerald" />
              <span className="text-sm font-semibold text-text-primary">Förderperspektive</span>
            </div>
            <span className="text-text-secondary text-lg">×</span>
            <div className="flex items-center gap-2 border border-border-light rounded-lg px-3 py-2 bg-white/60">
              <span className="text-sm font-semibold text-maroon">SteuerClara</span>
            </div>
          </div>

          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight mb-6">
            <span className="text-text-primary">KI-IMPLEMENTIERUNGS</span>
            <span className="text-maroon">GESPRÄCH</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            In 30 Minuten erfahren, wie Ihre Kanzlei einen KI-Mitarbeiter bekommt — komplett staatlich gefördert.
          </p>

          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span className="px-3 py-1 rounded-full border border-border-light bg-white/60">Vertraulich</span>
            <span className="px-3 py-1 rounded-full border border-border-light bg-white/60">Stand: April 2026</span>
          </div>
        </motion.div>

        {/* Right: Hexagonal visual cluster */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          {/* Abstract hex shapes */}
          <div className="relative w-[340px] h-[340px]">
            {/* Main hex */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-3xl bg-maroon/8 border border-maroon/15 rotate-12 flex items-center justify-center">
              <div className="text-center -rotate-12">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-sm font-semibold text-text-primary">KI-Mitarbeiter</div>
                <div className="text-xs text-text-secondary">für Ihre Kanzlei</div>
              </div>
            </div>
            {/* Top right hex */}
            <div className="absolute top-4 right-4 w-28 h-28 rounded-2xl bg-emerald/8 border border-emerald/15 -rotate-6 flex items-center justify-center">
              <div className="text-center rotate-6">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-[10px] font-medium text-text-secondary">DATEV-Automation</div>
              </div>
            </div>
            {/* Bottom left hex */}
            <div className="absolute bottom-4 left-4 w-28 h-28 rounded-2xl bg-maroon/6 border border-maroon/10 rotate-6 flex items-center justify-center">
              <div className="text-center -rotate-6">
                <div className="text-2xl mb-1">📞</div>
                <div className="text-[10px] font-medium text-text-secondary">24/7 erreichbar</div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 right-8 bg-white rounded-xl shadow-lg border border-border-light px-4 py-2.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="text-xs font-semibold text-emerald">✅ 100% staatlich gefördert</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
