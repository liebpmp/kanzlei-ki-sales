import { motion } from "framer-motion";
import { PhoneIncoming, Database, Clock, Users, Mail, Cpu } from "lucide-react";

const painPoints = [
  {
    icon: PhoneIncoming,
    title: "Telefon-Chaos",
    description:
      "Ständige Unterbrechungen durch Mandantenanrufe — keiner arbeitet konzentriert.",
  },
  {
    icon: Database,
    title: "DATEV-Zeitfresser",
    description:
      "Belege manuell hochladen, Buchungen prüfen, FiBu vorbereiten — Stunden pro Tag.",
  },
  {
    icon: Clock,
    title: "Fristen-Stress",
    description:
      "Abgabefristen manuell tracken, Mandanten hinterherrennen, Erinnerungen vergessen.",
  },
  {
    icon: Users,
    title: "Fachkräftemangel",
    description:
      "Gute Steuerfachangestellte sind kaum zu finden — und die vorhandenen sind überlastet.",
  },
  {
    icon: Mail,
    title: "Mandanten-Pingpong",
    description:
      "E-Mails, Rückrufe, Unterlagen nachfordern — ein endloser Kreislauf ohne Ende.",
  },
  {
    icon: Cpu,
    title: "Digitalisierungsdruck",
    description:
      "Sie wissen, dass KI helfen könnte — aber wo anfangen? Und wer setzt das um?",
  },
];

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
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

export default function PainPoints() {
  return (
    <section className="bg-cream-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              Kennen Sie das?
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] text-text-primary">
            Der Kanzleialltag frisst Ihre Zeit
          </h2>
          <p className="text-[16px] leading-relaxed text-text-secondary max-w-[640px]">
            Steuerkanzleien stehen unter enormem Druck. Fachkräfte fehlen, die
            Arbeit stapelt sich, und Digitalisierung bleibt ein leeres
            Versprechen.
          </p>
        </motion.div>

        {/* Pain cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {painPoints.map((pain) => (
            <motion.div
              key={pain.title}
              variants={cardVariants}
              className="group flex flex-col gap-4 bg-white border border-border-light rounded-[2px] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-maroon/20"
            >
              <div className="flex items-center justify-center size-11 rounded-sm bg-cream-dark">
                <pain.icon className="size-5 text-text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold text-text-primary">
                  {pain.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
