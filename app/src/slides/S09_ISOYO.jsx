import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Calendar, Users, Monitor, Award } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const features = [
  { icon: ShieldCheck, label: "AZAV-zertifiziert", desc: "Staatlich anerkannter Bildungsträger" },
  { icon: GraduationCap, label: "IHK-Abschluss möglich", desc: "Anerkannte Zusatzqualifikation" },
  { icon: Calendar, label: "Flexible Zeiteinteilung", desc: "15h/Woche, 2 Live-Calls, Rest im Tagesgeschäft" },
  { icon: Users, label: "Kleine Gruppen", desc: "Max. 20 Teilnehmer, persönliche Betreuung" },
  { icon: Monitor, label: "100% digital", desc: "Keine Reisekosten, kein Arbeitsausfall" },
  { icon: Award, label: "Kein Prüfungsdruck", desc: "Praxisnahes Lernen ohne Abschlussprüfung" },
];

export default function S09_ISOYO({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />
      <div className="absolute top-0 right-0 w-[50%] h-full bg-cream-dark/40 -skew-x-6 translate-x-20" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-6">
            <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">05</span>
            <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Bildungspartner</span>
          </div>

          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-3">
            ISOYO — Ihr<br />Bildungsträger
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-lg">
            Spezialisiert auf KI-Weiterbildung für Steuerkanzleien. AZAV-zertifiziert, IHK-anerkannt, praxisnah.
          </p>

          {/* Trust badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-border-light">
              <ShieldCheck className="size-4 text-emerald" />
              <span className="text-xs font-semibold text-text-primary">AZAV</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-border-light">
              <Award className="size-4 text-maroon" />
              <span className="text-xs font-semibold text-text-primary">TÜV</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-border-light">
              <GraduationCap className="size-4 text-blue-600" />
              <span className="text-xs font-semibold text-text-primary">IHK</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Feature grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              className="p-4 rounded-xl bg-white/70 border border-border-light hover:border-maroon/15 hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
            >
              <feat.icon className="size-5 text-maroon mb-2" />
              <p className="text-sm font-semibold text-text-primary mb-0.5">{feat.label}</p>
              <p className="text-xs text-text-secondary leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
