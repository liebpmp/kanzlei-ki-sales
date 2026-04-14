import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, BadgeCheck, Building2, Landmark, ArrowDown, ArrowRight, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

/* ── Animated counter for money values ── */
function MoneyCounter({ target, duration = 2000, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString("de-DE")}{suffix}
    </span>
  );
}

/* ── Money flow step ── */
function FlowStep({ icon: Icon, label, amount, delay, isLast }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 relative"
      initial={{ opacity: 0, y: 32, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {/* Glowing circle */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald/20 animate-pulse-ring" />
        <div className="relative flex items-center justify-center size-16 md:size-20 rounded-full bg-gradient-to-br from-emerald to-emerald/80 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <Icon className="size-7 md:size-8 text-white" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-[13px] md:text-[14px] font-medium text-text-white-muted">{label}</span>
        <span className="text-[20px] md:text-[24px] font-bold text-emerald">
          <MoneyCounter target={amount} suffix=" €" />
        </span>
      </div>
      {/* Arrow connector */}
      {!isLast && (
        <motion.div
          className="hidden md:flex absolute -right-8 top-8 text-emerald/50"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          <ArrowRight className="size-6" />
        </motion.div>
      )}
      {!isLast && (
        <motion.div
          className="md:hidden text-emerald/50 mt-1"
          initial={{ opacity: 0, y: -4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          <ArrowDown className="size-5" />
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── Trust seal ── */
function TrustSeal({ icon: Icon, title, subtitle, delay, flagColors }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-[2px] p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-emerald/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
      initial={{ opacity: 0, y: 32, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {/* Seal icon with glow */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald/10 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center justify-center size-16 md:size-20 rounded-full border-2 border-emerald/30 bg-gradient-to-b from-emerald/10 to-transparent">
          {flagColors ? (
            /* German flag mini + institution icon */
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-[6px] w-8 rounded-sm overflow-hidden">
                <div className="flex-1 bg-black" />
                <div className="flex-1 bg-red-600" />
                <div className="flex-1 bg-yellow-400" />
              </div>
              <Icon className="size-6 md:size-7 text-emerald" />
            </div>
          ) : (
            <Icon className="size-8 md:size-9 text-emerald" />
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-[16px] md:text-[18px] font-bold text-white tracking-tight">{title}</span>
        <span className="text-[13px] md:text-[14px] text-text-white-muted leading-relaxed">{subtitle}</span>
      </div>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5 bg-emerald/10 px-3 py-1.5 rounded-full">
        <Check className="size-3.5 text-emerald" />
        <span className="text-[12px] font-semibold text-emerald uppercase tracking-wider">Verifiziert</span>
      </div>
    </motion.div>
  );
}

export default function StaatlicheFinanzierung() {
  return (
    <section className="bg-dark py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="text-[13px] font-medium text-emerald uppercase tracking-wider">
              100% staatlich finanziert
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            So fließt das Geld —<br className="hidden md:block" /> Sie zahlen{" "}
            <span className="text-emerald">keinen Cent</span>
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[640px]">
            Über das Qualifizierungschancengesetz finanziert der Staat Schulung, Lohnkosten
            und KI-Implementierung — komplett und ohne Eigenanteil.
          </p>
        </motion.div>

        {/* ── MONEY FLOW VISUALIZATION ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-20 md:mb-24 items-start">
          <FlowStep
            icon={Landmark}
            label="Bundesagentur für Arbeit"
            amount={250000}
            delay={0}
          />
          <FlowStep
            icon={Building2}
            label="Schulungskosten"
            amount={100000}
            delay={0.15}
          />
          <FlowStep
            icon={Shield}
            label="Lohnkostenerstattung (75%)"
            amount={150000}
            delay={0.3}
          />
          <FlowStep
            icon={BadgeCheck}
            label="KI-Implementierung"
            amount={0}
            delay={0.45}
            isLast
          />
        </div>

        {/* ── Ihre Kosten = 0€ highlight bar ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-20 md:mb-24"
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 bg-emerald/10 border border-emerald/20 rounded-[2px] px-8 py-4 md:px-12 md:py-5">
            <span className="text-[18px] md:text-[22px] font-bold text-white">
              Ihre Kosten:
            </span>
            <span className="text-[32px] md:text-[42px] font-[800] text-emerald tracking-tight">
              0 €
            </span>
          </div>
        </motion.div>

        {/* ── TRUST SEALS ── */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-white text-center">
            Zertifiziert & staatlich anerkannt
          </h3>
          <p className="text-[14px] text-text-white-muted text-center max-w-[500px]">
            Alle Zertifizierungen für die vollständige Förderfähigkeit
          </p>
        </motion.div>

        {/* Application counter */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-[13px] text-text-white-muted">
            <span className="text-white font-semibold">127 Förderanträge</span> allein in den letzten 30 Tagen bewilligt
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <TrustSeal
            icon={Shield}
            title="TÜV zertifiziert"
            subtitle="Geprüfte Bildungsqualität nach höchsten deutschen Standards"
            delay={0}
          />
          <TrustSeal
            icon={BadgeCheck}
            title="AZAV zertifiziert"
            subtitle="Zugelassener Bildungsträger nach §178 SGB III"
            delay={0.1}
          />
          <TrustSeal
            icon={Landmark}
            title="Agentur für Arbeit"
            subtitle="Anerkannter Kooperationspartner der Bundesagentur"
            delay={0.2}
            flagColors
          />
          <TrustSeal
            icon={Building2}
            title="IHK-Abschluss"
            subtitle="Zertifikat der Industrie- und Handelskammer"
            delay={0.3}
          />
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
    </section>
  );
}
