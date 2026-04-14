import { motion } from "framer-motion";
import { Phone, FileText, Clock, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Anrufe entgegennehmen & qualifizieren",
    description:
      "Clara nimmt jeden Anruf an, beantwortet Standardfragen, bucht Termine und leitet nur Wichtiges weiter. 24/7, keine Wartezeiten.",
  },
  {
    icon: FileText,
    number: "02",
    title: "DATEV & Belege automatisch verarbeiten",
    description:
      "Belege werden automatisch erkannt, kategorisiert und in DATEV vorbereitet. Buchungsvorschläge auf Knopfdruck.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Fristen überwachen & Mandanten erinnern",
    description:
      "Automatische Fristenüberwachung mit rechtzeitigen Erinnerungen an Mandanten für fehlende Unterlagen.",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Vorbereitende Buchhaltung auf Knopfdruck",
    description:
      "KI sortiert, kategorisiert und bereitet Belege vor — Ihre Mitarbeiter prüfen nur noch.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              Fähigkeiten
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] text-text-primary">
            Was übernimmt Ihr KI-Mitarbeiter?
          </h2>
          <p className="text-[16px] leading-relaxed text-text-secondary max-w-[600px]">
            Von der Telefonannahme bis zur DATEV-Automatisierung — Schritt für
            Schritt entlasten wir Ihren Kanzleialltag.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="flex gap-5 bg-cream rounded-sm p-6 md:p-8"
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="flex items-center justify-center size-10 rounded-sm bg-white">
                  <step.icon className="size-5 text-maroon" />
                </div>
                <span className="text-[12px] font-medium text-text-muted">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold text-text-primary leading-snug">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
