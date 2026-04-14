import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const withoutKI = [
  "Telefon klingelt permanent — keiner geht ran",
  "DATEV-Eingabe frisst 3+ Stunden täglich",
  "Fristen werden manuell in Excel getrackt",
  "Mandanten warten tagelang auf Antworten",
  "Fachkräfte sind überlastet und frustriert",
];

const withKI = [
  "Clara nimmt jeden Anruf an — 24/7, freundlich",
  "Belege werden automatisch erkannt und gebucht",
  "Fristen-Agent erinnert und eskaliert automatisch",
  "Mandanten-Bot antwortet sofort auf Standardfragen",
  "Team konzentriert sich auf wertschöpfende Arbeit",
];

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function VergleichSlide({ isActive }) {
  return (
    <div className="min-h-[100dvh] w-screen overflow-y-auto bg-dark">
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
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Vergleich
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Vorher vs. Nachher
          </h2>
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT — Ohne KI */}
          <motion.div
            className="backdrop-blur-sm bg-white/[0.05] border border-red-500/20 rounded-[2px] p-7"
            initial={{ opacity: 0, x: -40 }}
            animate={
              isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center size-9 rounded-full bg-red-500/15">
                <X className="size-4 text-red-400" />
              </div>
              <span className="text-xl font-semibold text-red-400">
                Ohne KI
              </span>
            </div>

            {/* Items */}
            <motion.div
              className="flex flex-col gap-4"
              variants={listContainerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              {withoutKI.map((item) => (
                <motion.div
                  key={item}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-[14px] text-white/70"
                >
                  <X className="text-red-400 size-4 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Mit KI-Mitarbeiter */}
          <motion.div
            className="backdrop-blur-sm bg-white/[0.05] border border-emerald/20 rounded-[2px] p-7"
            initial={{ opacity: 0, x: 40 }}
            animate={
              isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
            }
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center size-9 rounded-full bg-emerald/15">
                <Check className="size-4 text-emerald" />
              </div>
              <span className="text-xl font-semibold text-emerald">
                Mit KI-Mitarbeiter
              </span>
            </div>

            {/* Items */}
            <motion.div
              className="flex flex-col gap-4"
              variants={listContainerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              {withKI.map((item) => (
                <motion.div
                  key={item}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-[14px] text-white/70"
                >
                  <Check className="text-emerald size-4 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
