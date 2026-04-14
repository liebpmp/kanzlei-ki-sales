import { motion } from "framer-motion";
import { ShieldCheck, Award, Handshake } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const approvals = [
  { amount: "94.008,08 €", split: "62.400€ Lohn + 31.608€ Schulung", label: "Kanzlei, 8 MA" },
  { amount: "99.466,94 €", split: "68.000€ Lohn + 31.466€ Schulung", label: "Kanzlei, 10 MA" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Hohe Bewilligungsquote", desc: "Professionelle Antragstellung" },
  { icon: Award, label: "Zertifizierte Bildungsträger", desc: "AZAV, TÜV, IHK anerkannt" },
  { icon: Handshake, label: "Direkter Draht zur BA", desc: "Persönlicher Ansprechpartner" },
];

export default function S13_Proof({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-2">
            Echte Förderung — schwarz auf weiß
          </h2>
          <p className="text-text-secondary text-base">Bewilligungsbescheide unserer Kunden.</p>
        </motion.div>

        {/* Approval cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {approvals.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-border-light overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.2 }}
            >
              <div className="p-6 text-center">
                {/* Fake document header */}
                <div className="mx-auto w-20 h-1 bg-text-muted/20 rounded mb-4" />
                <div className="mx-auto w-32 h-1 bg-text-muted/15 rounded mb-6" />

                <div className="text-3xl font-heading font-semibold text-maroon mb-2">
                  {item.amount}
                </div>
                <div className="text-sm text-text-secondary mb-1">{item.split}</div>
                <div className="text-xs text-text-muted">{item.label}</div>

                {/* Stamp effect */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-emerald/40 rotate-[-3deg]">
                  <span className="text-xs font-bold text-emerald uppercase tracking-wider">✅ Bewilligt</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-4">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="text-center p-4"
              initial={{ opacity: 0, y: 12 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.6 + i * 0.1 }}
            >
              <badge.icon className="size-6 text-emerald mx-auto mb-2" />
              <p className="text-sm font-semibold text-text-primary">{badge.label}</p>
              <p className="text-xs text-text-secondary">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
