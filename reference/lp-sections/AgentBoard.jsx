import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const filterPills = [
  { code: "BP", label: "Bescheid", active: true },
  { code: "BA", label: "Beleg", active: true },
  { code: "FA", label: "Fristen", active: true },
  { code: "KA", label: "Kommunikation", active: false },
  { code: "PA", label: "Prüfung", active: false },
  { code: "LK", label: "Lohnkosten", active: false },
];

const todoItems = [
  { text: "Jahresabschluss Müller GmbH — Unterlagen anfordern", badge: "BP" },
  { text: "USt-VA März — Abgabefrist prüfen", badge: "FA" },
  { text: "Neue Belege — 12 Dokumente klassifizieren", badge: "BA" },
];

const inProgressItems = [
  {
    text: "Steuerbescheid Schmidt — Abweichungsanalyse",
    badge: "BP",
    progress: 60,
  },
  {
    text: "Lohnabrechnung Q1 — Daten konsolidieren",
    badge: "LK",
    progress: 30,
  },
];

const completedItems = [
  { text: "47 Belege klassifiziert — DATEV-Import abgeschlossen", badge: "BA" },
  { text: "USt-VA Februar — fristgerecht eingereicht", badge: "FA" },
  { text: "3 Bescheide geprüft — 1 Einspruch empfohlen", badge: "BP" },
];

function BadgePill({ code }) {
  return (
    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-maroon/20 text-maroon-hover shrink-0">
      {code}
    </span>
  );
}

function KanbanCard({ item, index, columnDelay, hasProgress }) {
  return (
    <motion.div
      className="flex flex-col gap-2 bg-white/[0.05] border border-white/[0.08] rounded-lg p-3.5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease, delay: columnDelay + index * 0.12 }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] text-white/80 leading-snug">
          {item.text}
        </span>
        <BadgePill code={item.badge} />
      </div>
      {hasProgress && (
        <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden mt-1">
          <motion.div
            className="h-full bg-maroon rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: `${item.progress}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, ease, delay: columnDelay + 0.5 }}
          />
        </div>
      )}
    </motion.div>
  );
}

function KanbanColumn({ title, count, items, columnDelay, type }) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      {/* Column header */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[12px] font-semibold text-white/50 uppercase tracking-wider">
          {title}
        </span>
        <span className="text-[11px] font-medium text-white/30 bg-white/[0.05] px-2 py-0.5 rounded">
          {count}
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => {
          if (type === "completed") {
            return (
              <motion.div
                key={item.text}
                className="flex items-start gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg p-3.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  ease,
                  delay: columnDelay + i * 0.12,
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.3,
                    ease,
                    delay: columnDelay + 0.3 + i * 0.12,
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                </motion.div>
                <div className="flex items-start justify-between gap-2 flex-1 min-w-0">
                  <span className="text-[13px] text-white/50 leading-snug line-through decoration-white/20">
                    {item.text}
                  </span>
                  <BadgePill code={item.badge} />
                </div>
              </motion.div>
            );
          }
          return (
            <KanbanCard
              key={item.text}
              item={item}
              index={i}
              columnDelay={columnDelay}
              hasProgress={type === "inProgress"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function AgentBoard() {
  return (
    <section
      id="agent-board"
      className="bg-dark py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Nach der Implementierung
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Was Ihre KI-Abteilung{" "}
            <span className="text-gradient-gold">heute</span> erledigt.
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[640px]">
            Bescheide prüfen, Belege kontieren, Fristen überwachen, Mandanten
            informieren — alles gleichzeitig, 24/7.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          {filterPills.map((pill) => (
            <span
              key={pill.code}
              className={`flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                pill.active
                  ? "bg-maroon text-white"
                  : "bg-white/[0.05] text-white/40 hover:bg-white/[0.08]"
              }`}
            >
              <span className="font-bold">{pill.code}</span>
              <span className="hidden sm:inline">{pill.label}</span>
            </span>
          ))}
        </motion.div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <KanbanColumn
            title="To Do"
            count={3}
            items={todoItems}
            columnDelay={0.3}
            type="todo"
          />
          <KanbanColumn
            title="In Progress"
            count={2}
            items={inProgressItems}
            columnDelay={0.6}
            type="inProgress"
          />
          <KanbanColumn
            title="Completed"
            count={3}
            items={completedItems}
            columnDelay={0.9}
            type="completed"
          />
        </div>

        {/* Footer bar */}
        <motion.div
          className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease, delay: 1.2 }}
        >
          <span className="text-[13px] text-white/40">
            <span className="text-white/70 font-semibold">127</span> Aufgaben
            erledigt diese Woche
          </span>
          <span className="text-[12px] font-semibold text-maroon bg-maroon/10 px-3 py-1.5 rounded-full">
            24/7 autonom
          </span>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />
    </section>
  );
}
