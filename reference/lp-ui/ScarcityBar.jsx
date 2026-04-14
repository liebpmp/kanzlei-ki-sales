import { motion } from "framer-motion";
import { Clock, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScarcityBar() {
  // Subtle pulse animation on the dot
  return (
    <div className="bg-dark text-white py-2.5 relative z-50 overflow-hidden">
      {/* Animated gradient sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(162,30,41,0.15)_50%,transparent_100%)] animate-[marquee_8s_linear_infinite]" />
      
      <div className="mx-auto max-w-[1200px] px-4 flex items-center justify-center gap-3 md:gap-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-[12px] md:text-[13px] font-semibold">
            <span className="text-red-400">Nur noch 3 Plätze</span> für Q2 2026 verfügbar
          </span>
        </div>
        
        <span className="hidden md:inline text-white/20">|</span>
        
        <div className="hidden md:flex items-center gap-1.5">
          <Clock className="size-3.5 text-white/50" />
          <span className="text-[12px] text-white/60">
            Nächster Förderantrag-Stichtag: <span className="text-white font-medium">30. Juni 2026</span>
          </span>
        </div>

        <a
          href="#cta"
          className="ml-2 md:ml-4 text-[11px] md:text-[12px] font-semibold bg-maroon hover:bg-maroon-hover px-3 py-1 rounded-sm transition-colors whitespace-nowrap"
        >
          Platz sichern →
        </a>
      </div>
    </div>
  );
}
