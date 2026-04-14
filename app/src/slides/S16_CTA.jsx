import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Users, Calendar } from "lucide-react";
import AnimatedCounter from "../components/ui/AnimatedCounter";

const ease = [0.16, 1, 0.3, 1];

const badges = [
  { icon: ShieldCheck, value: "98%+", label: "Bewilligungsquote" },
  { icon: Users, value: "250+", label: "Geförderte Unternehmen" },
  { icon: Calendar, value: "30 Min", label: "Kostenlose Erstberatung" },
];

export default function S16_CTA({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-dark flex items-center relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-maroon/10 rounded-full blur-[250px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/30 bg-maroon/10 px-4 py-1.5 mb-8">
            <Rocket className="size-4 text-maroon" />
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Nächster Schritt</span>
          </div>

          <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-tight text-white mb-4">
            Jetzt starten — bevor<br />die Fördertöpfe leer sind
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Kostenlose KI-Potenzialanalyse für Ihre Kanzlei.<br />
            In 30 Minuten wissen Sie, wie viel Förderung Ihnen zusteht.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-maroon hover:bg-maroon-hover text-white font-heading font-semibold text-lg px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(162,30,41,0.35)] transition-colors cursor-pointer">
            <Calendar className="size-5" />
            Jetzt Förderung sichern
          </div>
        </motion.div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.5 + i * 0.1 }}
            >
              <badge.icon className="size-6 text-emerald mx-auto mb-2" />
              <div className="text-xl font-heading font-semibold text-white">
                <AnimatedCounter value={badge.value} />
              </div>
              <p className="text-xs text-white/40 mt-1">{badge.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Logos footer */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center gap-2 text-white/30">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-maroon to-emerald" />
            <span className="text-xs font-semibold">Förderperspektive</span>
          </div>
          <span className="text-white/20">×</span>
          <span className="text-xs font-semibold text-white/30">SteuerClara</span>
          <span className="text-white/20">×</span>
          <span className="text-xs font-semibold text-white/30">ISOYO</span>
        </motion.div>
      </div>
    </div>
  );
}
