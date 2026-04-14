import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was kostet die Schulung?",
    answer:
      "Nichts. Bei Kanzleien mit bis zu 50 Mitarbeitern \u00FCbernimmt der Staat 100% der Schulungskosten \u00FCber das Qualifizierungschancengesetz.",
  },
  {
    question: "Fallen meine Mitarbeiter im Tagesgesch\u00E4ft aus?",
    answer:
      "Kaum. Nur 2 kurze Live-Calls pro Woche, der Rest ist Praxis direkt an Ihren eigenen Systemen. Ihre Mitarbeiter arbeiten ganz normal weiter \u2014 nur mit KI-Fokus.",
  },
  {
    question: "Was ist das Qualifizierungschancengesetz?",
    answer:
      "Ein F\u00F6rderprogramm des Bundes. Unternehmen mit bis zu 49 Mitarbeitern bekommen 100% der Schulungskosten und 75% der Lohnkosten erstattet \u2014 f\u00FCr die gesamte Dauer der Ma\u00DFnahme.",
  },
  {
    question: "Was kann der KI-Mitarbeiter konkret?",
    answer:
      "Telefon-KI (Clara), DATEV-Automatisierung, Belegverarbeitung, Fristen-Management, Mandantenkommunikation und vorbereitende Buchhaltung \u2014 alles, was heute noch manuell l\u00E4uft.",
  },
  {
    question: "Wie lange dauert der F\u00F6rderantrag?",
    answer:
      "Ca. 4\u20136 Wochen. Wir \u00FCbernehmen den kompletten Prozess f\u00FCr Sie \u2014 von der Antragstellung bis zur Bewilligung.",
  },
  {
    question: "Kann ich auch ohne F\u00F6rderung starten?",
    answer:
      "Ja! Viele Kanzleien entscheiden sich direkt f\u00FCr die Implementierung. Die F\u00F6rderung ist ein Bonus, kein Muss.",
  },
];

const ease = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Häufige Fragen
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-white rounded-sm border border-border-light px-6 data-[state=open]:border-maroon/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-[15px] font-medium text-text-primary text-left py-4 cursor-pointer hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-relaxed text-text-secondary pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
