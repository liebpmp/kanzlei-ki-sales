import { motion } from "framer-motion";
import {
  Phone,
  FileSpreadsheet,
  CalendarClock,
  MessageSquare,
  Calculator,
  Workflow,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const solutions = [
  {
    icon: Phone,
    title: "Telefon-KI Clara",
    desc: "Beantwortet Mandantenanrufe 24/7, nimmt Rückrufe an und dokumentiert alles automatisch.",
  },
  {
    icon: FileSpreadsheet,
    title: "DATEV-Automation",
    desc: "Belegerkennung, automatische Zuordnung und Buchungsvorschläge — direkt in DATEV integriert.",
  },
  {
    icon: CalendarClock,
    title: "Fristen-Management",
    desc: "Automatische Fristenverwaltung, Erinnerungen an Mandanten und Eskalation bei Verzug.",
  },
  {
    icon: MessageSquare,
    title: "Mandanten-Bot",
    desc: "Beantwortet häufige Fragen, sammelt Unterlagen ein und hält Mandanten auf dem Laufenden.",
  },
  {
    icon: Calculator,
    title: "Vorbereitende BuHa",
    desc: "Kontierung, Belegprüfung und FiBu-Vorbereitung — automatisiert und DATEV-konform.",
  },
  {
    icon: Workflow,
    title: "Individuelle Workflows",
    desc: "Maßgeschneiderte KI-Prozesse für Ihre spezifischen Kanzlei-Anforderungen.",
  },
];

export default function SolutionSlide({ isActive }) {
  const headerShow = (delay = 0) => ({
    initial: { opacity: 0, x: -32, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 0, x: -32, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-y-auto bg-cream">
      <div className="slide-content w-full max-w-[1200px] px-6 lg:px-10 py-16">
        {/* Section header */}
        <div className="mb-12">
          <motion.div {...headerShow(0)} className="flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
              Die Lösung
            </span>
          </motion.div>

          <motion.h2
            {...headerShow(0.1)}
            className="font-heading font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.025em] text-text-primary mb-4"
          >
            Ein KI-Mitarbeiter, der nie krank wird
          </motion.h2>

          <motion.p
            {...headerShow(0.2)}
            className="text-lg text-text-secondary max-w-[600px] leading-relaxed"
          >
            Ihre digitalen Kollegen übernehmen die Routinearbeit — rund um die
            Uhr, fehlerfrei und vollständig in Ihre bestehenden Systeme
            integriert.
          </motion.p>
        </div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white border border-border-light rounded-[2px] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-emerald/20 transition-all duration-300"
              >
                <div className="size-11 rounded-sm bg-emerald/10 flex items-center justify-center mb-5">
                  <Icon className="size-5 text-emerald" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
