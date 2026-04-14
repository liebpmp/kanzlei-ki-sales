import { motion } from "framer-motion";
import { Phone, FileSpreadsheet, CalendarClock, MessageSquare, Calculator, Workflow } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const solutions = [
  { icon: Phone, title: "Telefon-KI Clara", desc: "Beantwortet Mandantenanrufe 24/7 und dokumentiert alles automatisch." },
  { icon: FileSpreadsheet, title: "DATEV-Automation", desc: "Belegerkennung und automatische Buchungsvorschläge — direkt in DATEV." },
  { icon: CalendarClock, title: "Fristen-Management", desc: "Automatische Fristenverwaltung und Erinnerungen an Mandanten." },
  { icon: MessageSquare, title: "Mandanten-Bot", desc: "Beantwortet häufige Fragen und sammelt Unterlagen ein." },
  { icon: Calculator, title: "Vorbereitende BuHa", desc: "Kontierung und FiBu-Vorbereitung — automatisiert und DATEV-konform." },
  { icon: Workflow, title: "Individuelle Workflows", desc: "Maßgeschneiderte KI-Prozesse für Ihre Kanzlei." },
];

export default function SolutionSlide({ isActive }) {
  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-cream">
      <div className="min-h-[100dvh] flex flex-col justify-center px-5 md:px-10 py-12 pb-20">
        <div className="w-full max-w-[1100px] mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
            animate={isActive ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -32, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-emerald" />
              <span className="text-[12px] md:text-[13px] font-medium text-text-secondary uppercase tracking-wider">Die Lösung</span>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight tracking-tight text-text-primary mb-3">
              Ein KI-Mitarbeiter, der nie krank wird
            </h2>
            <p className="text-sm md:text-base text-text-secondary max-w-[500px] leading-relaxed">
              Digitale Kollegen übernehmen die Routinearbeit — rund um die Uhr, fehlerfrei und in Ihre Systeme integriert.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
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
                  className="bg-white border border-border-light rounded-[2px] p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-emerald/20 transition-all duration-300"
                >
                  <div className="size-9 md:size-10 rounded-sm bg-emerald/10 flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="size-4 md:size-5 text-emerald" />
                  </div>
                  <h3 className="font-heading font-semibold text-base md:text-lg text-text-primary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
