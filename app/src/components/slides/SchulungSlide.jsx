import { motion } from "framer-motion";
import { Clock, Award, Users, Calendar, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { icon: Clock, value: "15h/Woche", label: "Davon nur 2 Live-Calls" },
  { icon: Award, value: "IHK-Zertifikat", label: "Anerkannter Abschluss" },
  { icon: Users, value: "Top-Dozenten", label: "Experten aus der Branche" },
  { icon: Calendar, value: "6–12 Monate", label: "Flexibel anpassbar" },
  { icon: ShieldCheck, value: "Kein Ausfall", label: "Normaler Betrieb" },
];

const modules = [
  { name: "KI-Basis: Prozessanalyse", hours: "160 UE" },
  { name: "KI-Basis: Low-Code Tools", hours: "160 UE" },
  { name: "KI-Basis: Einführung & Recht", hours: "160 UE" },
  { name: "KI-Spezialisierung Steuerbranche", hours: "240 UE" },
  { name: "Optional: KI-Spezialist (IHK)", hours: "320 UE" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

const rowContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function SchulungSlide({ isActive }) {
  const show = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: isActive
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-cream">
      <div className="slide-content w-full max-w-[1100px] mx-auto px-5 md:px-10 py-12 pb-20">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          animate={
            isActive
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -32, filter: "blur(8px)" }
          }
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              Schulungskonzept
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Ihre Mitarbeiter lernen nebenbei —
            <br className="hidden md:block" /> ohne das Tagesgeschäft zu stören
          </h2>
          <p className="text-[16px] leading-relaxed text-text-secondary max-w-[600px]">
            Praxisnahe KI-Weiterbildung, speziell für Steuerkanzleien. Nur 2
            kurze Live-Calls pro Woche, der Rest läuft an Ihren eigenen
            Systemen.
          </p>
        </motion.div>

        {/* Stat cards row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-3 bg-cream rounded-sm p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <stat.icon className="size-5 text-maroon" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] font-semibold text-text-primary">
                  {stat.value}
                </span>
                <span className="text-[12px] text-text-secondary">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Module table */}
        <motion.div
          className="bg-cream-dark rounded-sm overflow-hidden"
          {...show(0.3)}
        >
          <div className="px-6 py-4 border-b border-border-light">
            <h3 className="text-[15px] font-semibold text-text-primary">
              Modulübersicht
            </h3>
          </div>
          <motion.div
            variants={rowContainerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            {modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                variants={rowVariants}
                className={`flex items-center justify-between px-6 py-3.5 text-[14px] ${
                  i < modules.length - 1 ? "border-b border-border-light" : ""
                } ${mod.name.includes("Optional") ? "bg-cream" : ""}`}
              >
                <span
                  className={`text-text-primary ${
                    mod.name.includes("Optional") ? "italic" : ""
                  }`}
                >
                  {mod.name}
                </span>
                <span className="text-text-secondary font-medium shrink-0 ml-4">
                  {mod.hours}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
