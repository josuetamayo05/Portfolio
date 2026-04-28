import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          JA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
            CubanCode
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition-colors" href="/#servicios">
            Servicios
          </a>
          <a className="hover:text-white transition-colors" href="/#proceso">
            Proceso
          </a>
          <a className="hover:text-white transition-colors" href="/#contacto">
            Contacto
          </a>
        </div>

        <a
          href={siteData.brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-white text-dark-bg px-6 py-2 rounded-full font-semibold hover:bg-brand-cyan transition-colors"
        >
          Cotizar <ChevronRight size={16} />
        </a>
      </div>
    </nav>
  );
}