export default function Footer() {
  return (
    <footer className="bg-dark-deep border-t border-border-dark py-8">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] text-white/60 font-medium">
              Förderperspektive
            </span>
            <span className="text-white/30">&times;</span>
            <span className="text-[14px] text-white/60 font-medium">
              SteuerClara
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[13px] text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors cursor-pointer">Impressum</a>
            <a href="#" className="hover:text-white/60 transition-colors cursor-pointer">Datenschutz</a>
            <a href="#" className="hover:text-white/60 transition-colors cursor-pointer">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
