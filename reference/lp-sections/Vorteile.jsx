import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Phone,
  Database,
  CalendarClock,
  MessageSquare,
  Receipt,
  Cog,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const capabilities = [
  {
    icon: Phone,
    title: "Telefon-KI (Clara)",
    desc: "Nimmt jeden Anruf an, beantwortet Fragen, bucht Termine",
    metric: "24/7",
    metricLabel: "Erreichbarkeit",
    activity: "Anruf von Mandant Müller — Termin gebucht für Do. 14:00",
  },
  {
    icon: Database,
    title: "DATEV-Automatisierung",
    desc: "Belege verarbeiten, Buchungsvorschläge, FiBu-Vorbereitung",
    metric: "85%",
    metricLabel: "Zeitersparnis",
    activity: "47 Belege klassifiziert — DATEV-Import bereit",
  },
  {
    icon: CalendarClock,
    title: "Fristen-Management",
    desc: "Automatische Überwachung aller Abgabefristen",
    metric: "0",
    metricLabel: "Verpasste Fristen",
    activity: "USt-VA März — Erinnerung an 3 Mandanten versandt",
  },
  {
    icon: MessageSquare,
    title: "Mandanten-Kommunikation",
    desc: "Follow-ups, Statusupdates, Dokumentenanforderungen",
    metric: "∞",
    metricLabel: "Geduld",
    activity: "Beleg-Mahnung an Weber KG — 3. Erinnerung (freundlich)",
  },
  {
    icon: Receipt,
    title: "Vorbereitende Buchhaltung",
    desc: "KI sortiert, kategorisiert und bereitet Belege vor",
    metric: "3x",
    metricLabel: "Schneller",
    activity: "Reisekostenabrechnung Schmidt — fertig zur Prüfung",
  },
  {
    icon: Cog,
    title: "Individuelle Prozesse",
    desc: "Analyse und Automatisierung Ihrer spezifischen Abläufe",
    metric: "100%",
    metricLabel: "Maßgeschneidert",
    activity: "GoBD-Prüfung abgeschlossen — alle Mandanten konform",
  },
];

function ActivityFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % capabilities.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-w-full">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-3 md:px-5 py-2.5 md:py-3 border-b border-border-light bg-cream-dark/50">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-amber-400/60" />
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-maroon/40" />
          </div>
          <span className="text-[11px] md:text-xs text-text-secondary truncate">KI-Mitarbeiter — Live</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          <span className="text-[11px] md:text-xs text-emerald font-medium">6 aktiv</span>
        </div>
      </div>

      {/* Activity feed */}
      <div className="p-3 md:p-4 space-y-2 overflow-hidden">
        {capabilities.map((cap, i) => {
          const isActive = i === activeIdx;
          return (
            <motion.div
              key={cap.title}
              className={`flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl border transition-all duration-500 overflow-hidden ${
                isActive
                  ? "border-maroon/20 bg-maroon/[0.03] shadow-[0_0_20px_-5px_rgba(162,30,41,0.1)]"
                  : "border-border-light bg-cream-dark/30"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
            >
              <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500 ${
                isActive ? "bg-maroon/15 text-maroon" : "bg-cream-dark text-text-secondary"
              }`}>
                <cap.icon className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm truncate transition-colors duration-500 ${
                  isActive ? "text-text-primary font-medium" : "text-text-secondary"
                }`}>
                  {isActive ? cap.activity : cap.title}
                </p>
                {!isActive && (
                  <p className="text-xs text-text-muted truncate">{cap.desc}</p>
                )}
              </div>
              {isActive ? (
                <motion.span
                  className="text-maroon font-bold text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, ease }}
                >
                  ✓
                </motion.span>
              ) : (
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-text-primary">{cap.metric}</p>
                  <p className="text-[10px] text-text-muted">{cap.metricLabel}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 bg-cream-dark/30 border-t border-border-light">
        <span className="text-[11px] md:text-xs text-text-secondary">
          <span className="font-semibold text-text-primary">342</span> Aufgaben erledigt
        </span>
        <span className="text-[11px] md:text-xs text-emerald font-medium">24/7 · Nie krank</span>
      </div>
    </div>
  );
}

export default function Vorteile() {
  return (
    <section id="vorteile" className="bg-cream py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="size-1.5 rounded-full bg-maroon" />
              <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
                Ihre Vorteile
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary mb-5">
              Die Lösung: Ein KI-Mitarbeiter, der nie krank wird
              <br className="hidden md:block" /> und nie kündigt
            </h2>
            <p className="text-[16px] leading-relaxed text-text-secondary mb-8 max-w-lg">
              6 spezialisierte KI-Agenten übernehmen die zeitfressendsten Prozesse Ihrer Kanzlei — gleichzeitig, rund um die Uhr, ohne Pause.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[
                { val: "6", label: "KI-Agenten" },
                { val: "24/7", label: "Verfügbar" },
                { val: "85%", label: "Zeitersparnis" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center bg-white rounded-lg p-3 md:p-4 border border-border-light min-w-0">
                  <span className="text-lg md:text-xl font-bold text-maroon">{stat.val}</span>
                  <span className="text-[10px] md:text-[11px] text-text-secondary mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Live Activity Feed */}
          <motion.div
            className="min-w-0 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <ActivityFeed />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
