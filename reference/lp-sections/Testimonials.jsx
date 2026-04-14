import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wir haben dank der Förderung keinen Cent für die Schulung bezahlt — und jetzt übernimmt die KI 60% unserer Belegverarbeitung. Das hätte ich vorher nicht für möglich gehalten.",
    name: "Stefan K.",
    role: "Inhaber, Steuerkanzlei München",
    highlight: "60% Belegverarbeitung automatisiert",
    rating: 5,
  },
  {
    quote:
      "Der gesamte Förderprozess wurde für uns übernommen. Meine Mitarbeiter sind begeistert von der Schulung — praxisnah, ohne den Kanzleibetrieb zu stören.",
    name: "Claudia M.",
    role: "Partnerin, mittelständische Kanzlei NRW",
    highlight: "Kein Ausfall im Tagesgeschäft",
    rating: 5,
  },
  {
    quote:
      "Clara nimmt jetzt unsere Anrufe an. Seitdem arbeiten meine Fachangestellten endlich konzentriert. Allein das war die Sache wert — und es ist komplett gefördert.",
    name: "Dr. Thomas B.",
    role: "Steuerberater, Einzelkanzlei Hamburg",
    highlight: "100% staatlich gefördert",
    rating: 5,
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  return (
    <section className="relative bg-dark py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Erfahrungen
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-white">
            Das sagen unsere Kunden
          </h2>
        </motion.div>

        {/* Featured testimonial (first one, large) */}
        <motion.div
          className="mb-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Large decorative quote */}
          <div className="absolute top-4 right-6 text-[120px] leading-none text-white/[0.03] font-serif select-none pointer-events-none">"</div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease, delay: 0.3 + i * 0.08 }}
                  >
                    <Star className="size-4 text-amber-400 fill-amber-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-[18px] md:text-[20px] leading-[1.7] text-white/90 mb-6">
                &bdquo;{testimonials[0].quote}&ldquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-full bg-maroon/20 text-maroon font-bold text-lg border border-maroon/30">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white">{testimonials[0].name}</p>
                  <p className="text-[13px] text-white/50">{testimonials[0].role}</p>
                </div>
              </div>
            </div>

            {/* Highlight badge */}
            <div className="flex items-center gap-3 bg-emerald/10 border border-emerald/20 rounded-xl px-5 py-4 shrink-0">
              <div className="size-10 rounded-full bg-emerald/20 flex items-center justify-center">
                <span className="text-emerald text-lg font-bold">✓</span>
              </div>
              <div>
                <p className="text-emerald font-semibold text-[14px]">{testimonials[0].highlight}</p>
                <p className="text-white/40 text-[11px]">Verifiziertes Ergebnis</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.15 }}
            >
              <div className="absolute top-3 right-5 text-[80px] leading-none text-white/[0.03] font-serif select-none pointer-events-none">"</div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-[15px] leading-[1.75] text-white/80 mb-5">
                &bdquo;{t.quote}&ldquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-9 rounded-full bg-maroon/20 text-maroon font-bold text-[13px] border border-maroon/30">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                    <p className="text-[11px] text-white/40">{t.role}</p>
                  </div>
                </div>
                <span className="text-[11px] text-emerald font-medium bg-emerald/10 px-2.5 py-1 rounded-full border border-emerald/20">
                  {t.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
