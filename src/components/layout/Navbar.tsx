import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";
import { siteData } from "../../data/siteData";

const navItems = [
  { label: "Servicios", to: "/#servicios", key: "servicios" },
  { label: "Portfolio", to: "/#portfolio", key: "portfolio" },
  { label: "Proceso", to: "/#proceso", key: "proceso" },
  { label: "Contacto", to: "/#contacto", key: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  // Cambia estilo con scroll SOLO en Home
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Bloquear scroll cuando menú móvil está abierto (external side-effect OK)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  // Fondo del header (sólido)
  const headerClass = useMemo(() => {
    // En páginas internas: siempre sólido
    if (!isHome) {
      return "fixed top-0 left-0 z-50 w-full bg-dark-surface border-b border-white/10";
    }

    // En Home:
    // - arriba: sólido (para que NO sea transparente)
    // - scrolled: sólido + sombra
    if (scrolled) {
      return "fixed top-0 left-0 z-50 w-full bg-dark-surface border-b border-white/10 shadow-xl";
    }
    return "fixed top-0 left-0 z-50 w-full bg-dark-bg border-b border-white/10";
  }, [isHome, scrolled]);

  const desktopBase =
    "rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors";
  const desktopActive =
    "rounded-xl px-3 py-2 text-sm font-semibold text-white bg-white/10 border border-white/10";

  const mobileBase =
    "block w-full rounded-xl px-4 py-3 text-left text-base font-medium text-slate-200 hover:bg-white/5 border border-white/10 transition-colors";
  const mobileActive =
    "block w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white bg-white/10 border border-brand-cyan/30";

  const activeKey = isHome ? location.hash.replace("#", "") : "";

  const isServicesActive =
    location.pathname.startsWith("/servicios") || activeKey === "servicios";

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={close} className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">
            JA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
              CubanCode
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.key === "servicios" ? isServicesActive : activeKey === item.key;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={isActive ? desktopActive : desktopBase}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={siteData.brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-brand-cyan text-dark-bg hover:opacity-90 transition-opacity"
        >
          Cotizar <ChevronRight size={16} />
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-dark-surface border border-white/15"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/90"
            aria-label="Cerrar menú"
            onClick={close}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-dark-surface border-l border-white/15 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-bold text-white">Menú</div>
              <button
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-dark-bg border border-white/15"
                aria-label="Cerrar menú"
                onClick={close}
              >
                <X className="text-white" />
              </button>
            </div>

            <nav className="space-y-3">
              {navItems.map((item) => {
                const isActive =
                  item.key === "servicios" ? isServicesActive : activeKey === item.key;

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={close}
                    className={isActive ? mobileActive : mobileBase}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={siteData.brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-cyan text-dark-bg font-bold"
            >
              Cotizar por WhatsApp <ChevronRight size={18} />
            </a>

            <p className="text-xs text-slate-500 mt-6">
              Respuesta rápida • Trabajo por etapas
            </p>
          </div>
        </div>
      )}
    </header>
  );
}