import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, Users, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-dark py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient transition line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center relative z-10">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Scarcity urgency badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-[13px] font-semibold text-red-400">
              Nur noch 3 Plätze frei für Q2 2026
            </span>
          </motion.div>

          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] text-white">
            Bereit für Ihren KI-Mitarbeiter?
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[520px]">
            Vereinbaren Sie jetzt eine kostenlose Potenzialanalyse. Wir
            berechnen, wie viel Förderung für Ihre Kanzlei möglich ist —
            bevor die letzten Plätze vergeben sind.
          </p>

          {/* CTA Button with urgency */}
          <motion.div
            className="flex flex-col items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-hover text-white text-[16px] font-semibold px-8 py-4 rounded-[2px] transition-all duration-300 cursor-pointer hover:shadow-[0_4px_30px_rgba(162,30,41,0.5)] animate-pulse-ring"
            >
              Jetzt Platz sichern — Kostenlose Analyse
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-[12px] text-text-white-muted">
              Unverbindlich · 15 Minuten · Sofort-Ergebnis
            </span>
          </motion.div>

          {/* Social proof micro-stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-6 border-t border-white/[0.08] mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-[13px] text-text-white-muted">
              <Users className="size-4 text-emerald" />
              <span><span className="text-white font-semibold">47 Kanzleien</span> nutzen bereits KI-Mitarbeiter</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-white-muted">
              <Clock className="size-4 text-emerald" />
              <span>Ø <span className="text-white font-semibold">14 Tage</span> bis zur Förderzusage</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-white-muted">
              <ShieldCheck className="size-4 text-emerald" />
              <span><span className="text-white font-semibold">100%</span> Förderquote</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
