import { motion } from "framer-motion";
import {
  BarChart3,
  FolderOpen,
  Mail,
  Landmark,
  Globe,
  Building2,
  ArrowRight,
  Server,
  Zap,
  ShieldCheck,
  Infinity,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const chatMessages = [
  {
    role: "user",
    text: "Welche Mandanten haben noch offene Belege für Q1?",
  },
  {
    role: "ai",
    label: "Kanzlei-LLM",
    text: "3 Mandanten haben offene Belege:\n\u2022 Müller GmbH — 4 Belege (Reisekosten)\n\u2022 Schmidt & Partner — 2 Belege (Bewirtung)\n\u2022 Weber KG — 1 Beleg (Abschreibung)\n\nSoll ich automatische Erinnerungen versenden?",
  },
  {
    role: "user",
    text: "Ja, und prüfe gleichzeitig den Bescheid von Müller GmbH",
  },
  {
    role: "ai",
    label: "Kanzlei-LLM",
    text: "Erledigt. Erinnerungen sind raus. Bescheid-Analyse läuft — Ergebnis in ~2 Minuten.",
  },
];

const connections = [
  { icon: BarChart3, label: "DATEV" },
  { icon: FolderOpen, label: "DMS" },
  { icon: Mail, label: "E-Mail" },
  { icon: Landmark, label: "ELSTER" },
  { icon: Globe, label: "Mandantenportal" },
  { icon: Building2, label: "Finanzverwaltung" },
];

const capabilities = [
  "Mandantendaten kanzleiübergreifend abfragen",
  "Bescheide analysieren & Einsprüche formulieren",
  "Fehlende Belege identifizieren & anfordern",
  "Fristen prüfen & proaktiv kommunizieren",
  "Steuerliche Fragen mit Kanzlei-Kontext beantworten",
  "Reports & Auswertungen in Sekunden erstellen",
];

const stats = [
  { icon: Server, label: "100% Deutsche Server" },
  { icon: Zap, label: "<2s Antwortzeit" },
  { icon: ShieldCheck, label: "DSGVO Vollkonform" },
  { icon: Infinity, label: "∞ Anfragen/Monat" },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white/30"
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

function ChatBubble({ message, index }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease, delay: 0.3 + index * 0.6 }}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-maroon text-white"
            : "bg-white/[0.08] text-white/80"
        }`}
      >
        {!isUser && message.label && (
          <span className="block text-[10px] font-semibold text-maroon mb-1.5">
            {message.label}
          </span>
        )}
        <p className="text-[13px] leading-relaxed whitespace-pre-line">
          {message.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function PrivateLLM() {
  return (
    <section
      id="private-llm"
      className="bg-[#0a0a0a] py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      {/* Subtle radial glow behind chat */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="flex items-center gap-2 text-[12px] font-medium text-white/40 bg-white/[0.05] px-3 py-1.5 rounded-full">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Nach den 8 Wochen verfügbar
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Ihr <span className="text-gradient-gold">privates</span> KI-Modell.
            <br className="hidden md:block" /> Trainiert auf Ihre Kanzlei.
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[640px]">
            Nach der Implementierung steht Ihnen ein eigenes Sprachmodell zur
            Verfügung — verbunden mit DATEV und allen Tools, die Sie nutzen.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — Chat UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-white/[0.06]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[12px] text-white/40 ml-2 font-mono">
                  Kanzlei-LLM — Privat & DSGVO-konform
                </span>
              </div>

              {/* Chat messages */}
              <div className="bg-[#0f0f0f] p-4 flex flex-col gap-3 min-h-[320px]">
                {chatMessages.map((msg, i) => (
                  <ChatBubble key={i} message={msg} index={i} />
                ))}
                <TypingIndicator />
              </div>
            </div>
          </motion.div>

          {/* Right — Tech Stack + Capabilities */}
          <div className="flex flex-col gap-6">
            {/* Connection cards grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {connections.map((conn) => (
                <motion.div
                  key={conn.label}
                  className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                  }}
                >
                  <conn.icon className="w-4 h-4 text-white/50 shrink-0" />
                  <span className="text-[12px] font-medium text-white/70">
                    {conn.label}
                  </span>
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald ml-auto shrink-0"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Capabilities box */}
            <motion.div
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: 0.3 }}
            >
              <h4 className="text-[13px] font-semibold text-white/50 uppercase tracking-wider mb-4">
                Was Ihr LLM kann
              </h4>
              <ul className="flex flex-col gap-2.5">
                {capabilities.map((cap, i) => (
                  <motion.li
                    key={cap}
                    className="flex items-center gap-2.5 text-[13px] text-white/70"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.3,
                      ease,
                      delay: 0.5 + i * 0.08,
                    }}
                  >
                    <ArrowRight className="w-3 h-3 text-maroon shrink-0" />
                    {cap}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stat cards */}
            <motion.div
              className="grid grid-cols-2 gap-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-3"
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, ease },
                    },
                  }}
                >
                  <stat.icon className="w-4 h-4 text-maroon shrink-0" />
                  <span className="text-[12px] font-semibold text-white/70">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />
    </section>
  );
}
