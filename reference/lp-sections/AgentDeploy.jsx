import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Kanzlei-spezifische Agenten konfigurieren",
  "Training auf Ihre Mandantendaten & Prozesse",
  "Automatisierte Workflows aktivieren",
  "Performance-Monitoring einrichten",
  "Privates LLM live schalten",
];

const agents = [
  { code: "BP", label: "Bescheid-Agent", desc: "3 Bescheide geprüft", status: "Live", codeColor: "bg-amber-500/20 text-amber-500" },
  { code: "BA", label: "Beleg-Agent", desc: "47 Belege klassifiziert", status: "Live", codeColor: "bg-maroon/15 text-maroon" },
  { code: "FA", label: "Fristen-Agent", desc: "USt-VA Erinnerung", status: "Live", codeColor: "bg-amber-500/20 text-amber-500" },
  { code: "KA", label: "Kommunikation", desc: "Beleg-Mahnung versandt", status: "Live", codeColor: "bg-maroon/15 text-maroon" },
  { code: "PA", label: "Prüfungs-Agent", desc: "GoBD-Check fertig", status: "Live", codeColor: "bg-amber-500/20 text-amber-500" },
];

export default function AgentDeploy() {
  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-cream">
      <div className="absolute bottom-20 right-0 w-[600px] h-[400px] bg-maroon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5 mb-8">
              <span className="h-6 w-6 rounded-full bg-maroon text-white text-xs font-bold flex items-center justify-center">03</span>
              <span className="text-maroon font-semibold text-sm tracking-wider uppercase">Aktivierung</span>
              <span className="text-xs text-text-secondary border border-border-light rounded-full px-3 py-0.5">Woche 4–8</span>
            </div>

            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] leading-tight mb-4 tracking-tight">
              Trainierte KI-Agenten<br />einsetzen
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              Maßgeschneiderte KI-Agenten werden in jedem Bereich eingesetzt — trainiert auf Ihre Mandantendaten, Prozesse und Kanzleisprache.
            </p>

            <div className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-text-primary"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                >
                  <span className="size-5 rounded-full bg-maroon/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3 text-maroon" />
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Agent Board Mockup */}
          <motion.div
            ref={mockupRef}
            className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-light bg-cream-dark/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                  <div className="h-3 w-3 rounded-full bg-maroon/40" />
                </div>
                <span className="text-xs text-text-secondary">Agenten Board</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon" />
                </span>
                <span className="text-xs text-maroon font-medium">5 Aktiv</span>
              </div>
            </div>

            {/* Agent cards */}
            <div className="p-4 space-y-2.5">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.code}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-cream-dark/50 transition-all duration-500 hover:shadow-sm hover:border-maroon/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.1 }}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${agent.codeColor}`}>
                    {agent.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary truncate">{agent.label}</p>
                    <p className="text-xs text-text-secondary truncate">{agent.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-maroon" />
                    </span>
                    <span className="text-xs text-maroon font-medium">{agent.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-cream-dark/30 border-t border-border-light">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                Heute erledigt: <span className="font-semibold text-text-primary">127 Aufgaben</span>
              </div>
              <span className="text-xs text-maroon font-semibold">24/7 autonom</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
