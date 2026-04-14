import { motion } from "framer-motion";
import { GraduationCap, Banknote, Bot, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

const cards = [
  {
    icon: GraduationCap,
    badge: "0 \u20AC f\u00FCr Sie",
    title: "Schulung f\u00FCr Ihre Mitarbeiter",
    subtitle: "100% gef\u00F6rdert",
    items: [
      "IHK-zertifizierte KI-Weiterbildung",
      "Speziell f\u00FCr Steuerbranche",
      "720 UE (kein Ausfall)",
      "Abschluss: IHK-Fachkraft",
    ],
    highlight: "Der Staat \u00FCbernimmt 100% der Schulungskosten",
  },
  {
    icon: Banknote,
    badge: "75% zur\u00FCck",
    title: "Lohnkostenerstattung",
    subtitle: "75% erstattet",
    items: [
      "75% Lohnkosten erstattet",
      "Gesamte Ma\u00DFnahme-Dauer",
      "6\u201312 Monate",
    ],
    highlight: "Kanzlei mit 10 MA: bis 150.000\u20AC+ Erstattung",
  },
  {
    icon: Bot,
    badge: "0 \u20AC effektiv",
    title: "KI-Implementierung",
    subtitle: "Aus Lohnkostenzuschuss finanziert",
    items: [
      "KI-Mitarbeiter 50\u2013100K Wert",
      "Finanziert durch Lohnkostenzuschuss",
      "Schritt-f\u00FCr-Schritt Implementierung",
    ],
    highlight: "Effektiv kostenlos f\u00FCr Ihre Kanzlei",
  },
];

export default function FoerderungSlide({ isActive }) {
  const headerShow = (delay = 0) => ({
    initial: { opacity: 0, x: -32, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 0, x: -32, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  const urgencyShow = {
    initial: { opacity: 0, y: 16 },
    animate: isActive
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 16 },
    transition: { duration: 0.6, ease, delay: 0.7 },
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-y-auto bg-dark relative">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="slide-content w-full max-w-[1200px] px-6 lg:px-10 py-16 relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.div
            {...headerShow(0)}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-white-muted">
              Komplett kostenlos
            </span>
          </motion.div>

          <motion.h2
            {...headerShow(0.1)}
            className="font-heading font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.025em] text-text-white mb-4"
          >
            Der Staat zahlt &mdash; Sie profitieren
          </motion.h2>

          <motion.p
            {...headerShow(0.2)}
            className="text-lg text-text-white-muted max-w-[600px] mx-auto leading-relaxed"
          >
            Drei F&ouml;rdert&ouml;pfe, ein Ziel: Ihre Kanzlei fit f&uuml;r die
            Zukunft machen &mdash; ohne Eigenanteil.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="flex flex-col backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] rounded-[2px] p-7 gap-6 hover:bg-white/[0.08] hover:border-maroon/30 animate-border-glow transition-all duration-300"
              >
                {/* Icon + Badge row */}
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-sm bg-white/10 flex items-center justify-center">
                    <Icon className="size-5 text-white" />
                  </div>
                  <span className="text-[12px] font-semibold px-2.5 py-1 rounded-sm bg-emerald text-white">
                    {card.badge}
                  </span>
                </div>

                {/* Title + Subtitle */}
                <div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-white-muted">
                    {card.subtitle}
                  </p>
                </div>

                {/* Item list */}
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="size-4 text-emerald mt-0.5 shrink-0" />
                      <span className="text-[14px] text-white/80 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Highlight footer */}
                <div className="mt-auto pt-4 border-t border-white/[0.08]">
                  <p className="text-[13px] font-medium text-emerald">
                    {card.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Urgency note */}
        <motion.div
          {...urgencyShow}
          className="flex items-center justify-center gap-2.5 mt-10"
        >
          <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-sm text-text-white-muted">
            F&ouml;rdert&ouml;pfe sind begrenzt &mdash; wer zuerst beantragt,
            wird zuerst bewilligt
          </span>
        </motion.div>
      </div>
    </div>
  );
}
