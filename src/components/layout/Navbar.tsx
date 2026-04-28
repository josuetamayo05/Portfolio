import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";
import { siteData } from "../../data/siteData";

const navItems = [
  { label: "Servicios", to: "/#servicios" },
  { label: "Proceso", to: "/#proceso" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // External system side-effect: bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={close}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          JA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
            CubanCode
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={siteData.brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-white text-dark-bg px-6 py-2 rounded-full font-semibold hover:bg-brand-cyan transition-colors"
        >
          Cotizar <ChevronRight size={16} />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-dark-surface border border-white/15"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/90"
            aria-label="Cerrar menú"
            onClick={close}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-dark-surface border-l border-white/20 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-bold text-white">Menú</div>
              <button
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-dark-bg border border-white/15"
                aria-label="Cerrar menú"
                onClick={close}
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className="px-4 py-3 rounded-xl bg-dark-bg border border-white/15 text-slate-200 hover:bg-dark-border/30 hover:border-brand-cyan/40 transition-all"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={siteData.brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="mt-4 px-4 py-3 rounded-xl bg-brand-cyan text-dark-bg font-bold inline-flex items-center justify-center gap-2"
              >
                Cotizar por WhatsApp <ChevronRight size={18} />
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-6">
              Respuesta rápida • Trabajo por etapas
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}