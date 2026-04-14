import { motion } from "framer-motion";
import { Building2, Award, Briefcase, ShieldCheck, GraduationCap } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const partners = [
  { icon: Award, label: "IHK-zertifiziert" },
  { icon: Briefcase, label: "Agentur für Arbeit" },
  { icon: ShieldCheck, label: "DIHK" },
  { icon: GraduationCap, label: "Qualifizierungschancengesetz" },
];

// Duplicate for seamless marquee loop
const marqueeItems = [...partners, ...partners];

export default function SocialProof() {
  return (
    <motion.section
      className="bg-white py-6 border-y border-border-light overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Counter */}
          <div className="flex items-center gap-2.5 text-text-primary shrink-0">
            <Building2 className="size-5 text-maroon" />
            <span className="text-[15px] font-semibold">
              <AnimatedCounter value="400+" /> Unternehmen erfolgreich begleitet
            </span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border-light shrink-0" />

          {/* Marquee partner badges */}
          <div className="relative overflow-hidden flex-1 max-w-[600px]">
            {/* Gradient fades */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-8 animate-marquee w-max">
              {marqueeItems.map((p, i) => (
                <div
                  key={`${p.label}-${i}`}
                  className="flex items-center gap-1.5 text-text-muted shrink-0"
                >
                  <p.icon className="size-3.5" />
                  <span className="text-[13px] font-medium tracking-wide whitespace-nowrap">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
