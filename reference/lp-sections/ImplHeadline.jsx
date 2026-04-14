import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function ImplHeadline() {
  return (
    <section className="relative bg-cream py-16 md:py-20 overflow-hidden">
      {/* Gradient transition top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-maroon animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="text-[13px] font-medium text-maroon uppercase tracking-wider">
              In 8 Wochen einsatzbereit
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-tight text-text-primary font-[700]">
            So implementieren wir Ihren<br className="hidden md:block" />
            <span className="text-maroon"> KI-Mitarbeiter</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-text-secondary max-w-[600px]">
            Von der Analyse bis zum autonomen Betrieb — ein erprobter 3-Phasen-Prozess,
            komplett betreut und schlüsselfertig.
          </p>
        </motion.div>
      </div>

      {/* Gradient transition bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/20 to-transparent" />
    </section>
  );
}
