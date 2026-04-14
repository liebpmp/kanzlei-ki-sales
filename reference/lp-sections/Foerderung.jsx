import { motion } from "framer-motion";
import { GraduationCap, Banknote, Bot, Check } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    badge: "0 \u20AC f\u00FCr Sie",
    badgeColor: "bg-emerald text-white",
    title: "Schulung f\u00FCr Ihre Mitarbeiter",
    subtitle: "100% gef\u00F6rdert",
    items: [
      "IHK-zertifizierte KI-Weiterbildung",
      "Speziell f\u00FCr die Steuerbranche",
      "720 UE (kein Ausfall aus dem Tagesgesch\u00E4ft)",
      "Abschluss: IHK-Fachkraft f\u00FCr KI",
    ],
    highlight: "Der Staat \u00FCbernimmt 100% der Schulungskosten",
  },
  {
    icon: Banknote,
    badge: "75% zur\u00FCck",
    badgeColor: "bg-emerald text-white",
    title: "Lohnkostenerstattung",
    subtitle: "75% erstattet",
    items: [
      "75% der Lohnkosten werden erstattet",
      "F\u00FCr die gesamte Ma\u00DFnahme-Dauer",
      "6\u201312 Monate Laufzeit",
    ],
    highlight: "Kanzlei mit 10 MA: bis 150.000 \u20AC+ Erstattung",
  },
  {
    icon: Bot,
    badge: "0 \u20AC effektiv",
    badgeColor: "bg-emerald text-white",
    title: "KI-Implementierung",
    subtitle: "Aus Lohnkostenzuschuss finanziert",
    items: [
      "KI-Mitarbeiter im Wert von 50.000\u2013100.000 \u20AC",
      "Finanziert durch den Lohnkostenzuschuss",
      "Schritt-f\u00FCr-Schritt-Implementierung",
    ],
    highlight: "Effektiv kostenlos f\u00FCr Ihre Kanzlei",
  },
];

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function Foerderung() {
  return (
    <section id="foerderung" className="bg-dark py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Gradient orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient transition line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Komplett kostenlos
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Der Staat zahlt — Sie profitieren
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[600px]">
            Über das Qualifizierungschancengesetz (QCG) werden Schulung und
            Implementierung vollständig finanziert.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="flex flex-col backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] rounded-[2px] p-7 gap-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-maroon/30 animate-border-glow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center size-10 rounded-sm bg-white/10">
                  <card.icon className="size-5 text-white" />
                </div>
                <span
                  className={`text-[12px] font-semibold px-2.5 py-1 rounded-sm ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-white-muted">
                  {card.subtitle}
                </p>
              </div>

              <motion.ul
                className="flex flex-col gap-3"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {card.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={listItemVariants}
                    className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/80"
                  >
                    <Check className="size-4 text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto pt-4 border-t border-white/[0.08]">
                <p className="text-[13px] font-medium text-emerald">
                  {card.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Urgency note */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10 pt-8 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-[2px] px-5 py-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span className="text-[13px] text-white/70">
              <span className="text-amber-400 font-semibold">Achtung:</span> Die Fördertöpfe sind begrenzt — wer zuerst beantragt, wird zuerst bewilligt.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Gradient transition line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />
    </section>
  );
}
