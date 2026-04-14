import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const faqs = [
  { q: "Das klingt zu gut, um wahr zu sein.", a: "Die Foerderung basiert auf einem echten Bundesgesetz (QCG) \u2014 und wir arbeiten mit zertifizierten Traegern & der Bundesagentur fuer Arbeit zusammen." },
  { q: "Unsere Mitarbeiter sind schon stark ausgelastet.", a: "Die Schulung findet nur 15h/Woche statt \u2014 flexibel planbar, digital, ohne Pruefungsdruck." },
  { q: "Das klingt nach viel Aufwand.", a: "Sie liefern nur eine Excel-Liste mit Mitarbeiterdaten \u2014 wir uebernehmen den kompletten Antrag und die Koordination." },
  { q: "Was wenn jemand abbricht?", a: "Kein Problem \u2014 bei Abbruch muessen keine Foerdermittel zurueckgezahlt werden. Aufzeichnungen sind verfuegbar." },
  { q: "Was kostet uns das?", a: "Wir arbeiten im Kern erfolgsbasiert \u2014 mit einer Bearbeitungsgebuehr von 500\u20AC, die bei Bewilligung verrechnet wird." },
  { q: "Meine Mitarbeiter sind nicht technikaffin.", a: "Keine Vorkenntnisse noetig. Die Schulung ist praxisnah und fuer alle Erfahrungslevel konzipiert." },
];

export default function S12_FAQ({ isActive }) {
  return (
    <div className="min-h-[100dvh] bg-cream flex items-center relative overflow-hidden pt-14">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-maroon via-maroon/60 to-emerald z-10" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 lg:px-16">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight mb-2">
            Ihre Fragen &mdash; unsere Antworten
          </h2>
          <p className="text-text-secondary text-base">Die h&auml;ufigsten Bedenken, die wir h&ouml;ren &mdash; und warum sie kein Hindernis sind.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-xl bg-white/70 border border-border-light hover:border-maroon/15 transition-all duration-300"
              initial={{ opacity: 0, y: 12 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
            >
              <p className="text-sm font-semibold text-text-primary mb-2">&bdquo;{faq.q}&ldquo;</p>
              <p className="text-xs text-text-secondary leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-8 text-lg font-heading font-semibold text-text-primary"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Welche offenen Fragen haben Sie noch?
        </motion.p>
      </div>
    </div>
  );
}
