import { motion } from "framer-motion";
import {
  Shield,
  Award,
  ShieldCheck,
  GraduationCap,
  Lock,
  Building2,
  Handshake,
  Building,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const badges = [
  { icon: Shield, label: "AfA-zertifiziert" },
  { icon: Award, label: "AZAV-zugelassen" },
  { icon: ShieldCheck, label: "TÜV-geprüft" },
  { icon: GraduationCap, label: "IHK-Abschluss" },
  { icon: Lock, label: "DSGVO-konform" },
];

const flowBoxes = [
  { icon: Building2, label: "Staat", borderAccent: "border-white/[0.1]" },
  { icon: Handshake, label: "Förderperspektive", borderAccent: "border-emerald/20" },
  { icon: Building, label: "Ihre Kanzlei", borderAccent: "border-maroon/20" },
];

const arrowLabels = ["Fördermittel", "KI + Schulung"];

export default function TrustSlide({ isActive }) {
  // Section header animation (slide from left with blur)
  const headerShow = (delay = 0) => ({
    initial: { opacity: 0, x: -32, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 0, x: -32, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  // Badge stagger animation (slide up with blur)
  const badgeShow = (i) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
    transition: { duration: 0.6, ease, delay: 0.3 + i * 0.1 },
  });

  // Flow section animation
  const flowShow = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
    transition: { duration: 0.65, ease, delay },
  });

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-dark relative">
      {/* Gradient orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient transition line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="slide-content w-full max-w-[1100px] mx-auto px-5 md:px-10 py-12 pb-20 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            {...headerShow(0)}
            className="flex items-center gap-2"
          >
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Vertrauen & Qualität
            </span>
          </motion.div>

          <motion.h2
            {...headerShow(0.1)}
            className="font-heading font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white"
          >
            Zertifiziert. Geprüft. Sicher.
          </motion.h2>

          <motion.p
            {...headerShow(0.2)}
            className="text-[16px] leading-relaxed text-text-white-muted max-w-[600px]"
          >
            Alle Maßnahmen sind staatlich anerkannt und durch unabhängige Stellen
            zertifiziert — für maximale Sicherheit und Qualität.
          </motion.p>
        </div>

        {/* 5 Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              {...badgeShow(i)}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 rounded-full backdrop-blur-sm bg-white/[0.05] border border-white/[0.15] flex items-center justify-center animate-pulse-ring">
                <badge.icon className="size-8 text-white/80" />
              </div>
              <span className="text-[13px] text-white/70 font-medium">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Geldfluss Visual */}
        <motion.div
          {...flowShow(0.8)}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <span className="text-sm text-white/50">So fließt das Geld</span>

          {/* Flow diagram */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {flowBoxes.map((box, i) => (
              <div key={box.label} className="flex items-center gap-4">
                {/* Box */}
                <motion.div
                  {...flowShow(0.9 + i * 0.15)}
                  className={`backdrop-blur-sm bg-white/[0.05] border ${box.borderAccent} rounded-[2px] px-6 py-4 flex flex-col items-center gap-2`}
                >
                  <box.icon className="size-6 text-white/70" />
                  <span className="text-[14px] font-medium text-white/90">
                    {box.label}
                  </span>
                </motion.div>

                {/* Arrow + label (except after last box) */}
                {i < flowBoxes.length - 1 && (
                  <motion.div
                    {...flowShow(1.0 + i * 0.15)}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="text-emerald text-2xl font-light">→</span>
                    <span className="text-[11px] text-white/40">
                      {arrowLabels[i]}
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
