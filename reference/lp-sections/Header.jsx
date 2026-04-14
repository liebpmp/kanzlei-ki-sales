import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Vorteile", href: "#vorteile" },
    { label: "Förderung", href: "#foerderung" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-3 lg:px-10">
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <img
            src="./fp-logo.png"
            alt="Förderperspektive Deutschland"
            className="h-9 w-auto"
          />
          <span className="text-text-muted text-[20px] font-light select-none">×</span>
          <img
            src="./steuerclara-logo.jpg"
            alt="SteuerClara"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-maroon hover:bg-maroon-hover text-white text-[13px] font-medium px-4 py-2 rounded-[2px] transition-colors cursor-pointer"
        >
          Potenzialanalyse vereinbaren
          <ArrowRight className="size-3.5" />
        </a>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-text-secondary cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 bg-maroon text-white text-[14px] font-medium px-4 py-2.5 rounded-[2px] cursor-pointer mt-1"
            onClick={() => setMobileOpen(false)}
          >
            Potenzialanalyse vereinbaren
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
