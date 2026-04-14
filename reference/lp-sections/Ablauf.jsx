import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Potenzialanalyse",
    meta: "30 Min, kostenlos",
    description:
      "Wir analysieren Ihre Kanzlei und berechnen die mögliche Fördersumme.",
  },
  {
    number: "2",
    title: "Förderantrag",
    meta: "Wir übernehmen alles",
    description:
      "Wir übernehmen den kompletten Antrag — Sie müssen sich um nichts kümmern.",
  },
  {
    number: "3",
    title: "Schulung startet",
    meta: "2 Calls / Woche",
    description:
      "Ihre Mitarbeiter lernen KI-Anwendung in der Praxis. Der Rest läuft im Tagesgeschäft.",
  },
  {
    number: "4",
    title: "KI-Mitarbeiter live",
    meta: "Parallel zur Schulung",
    description:
      "Schritt für Schritt implementieren wir die Automatisierungen in Ihrer Kanzlei.",
  },
];

const ease = [0.16, 1, 0.3, 1];

function TimelineStep({ step, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-6 md:gap-8 relative"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease, delay: index * 0.15 }}
    >
      {/* Left: number circle + vertical line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Number circle with pulse */}
        <motion.div
          className={`relative z-10 flex items-center justify-center size-14 rounded-full bg-maroon text-white text-[22px] font-bold shadow-[0_4px_12px_rgba(162,30,41,0.25)] ${isInView ? "animate-pulse-ring" : ""}`}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease, delay: index * 0.15 }}
          style={{ animationDelay: `${index * 0.3}s`, animationIterationCount: 1 }}
        >
          {step.number}
        </motion.div>

        {/* Vertical connecting line (draw animation) */}
        {!isLast && (
          <div className="relative w-px flex-1 min-h-[40px] bg-border-light my-2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-maroon/40"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.3 + index * 0.15 }}
            />
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="flex flex-col gap-2 pb-10 pt-2">
        <h3 className="text-[20px] font-bold text-text-primary leading-snug">
          {step.title}
        </h3>
        <span className="text-[13px] font-semibold text-maroon uppercase tracking-wide">
          {step.meta}
        </span>
        <p className="text-[15px] leading-relaxed text-text-secondary mt-1 max-w-[400px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Ablauf() {
  return (
    <section id="ablauf" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-20"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              So einfach geht's
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            In 4 Schritten zum KI-Mitarbeiter
          </h2>
        </motion.div>

        {/* Timeline steps */}
        <div className="max-w-[600px] mx-auto">
          {steps.map((step, i) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
