import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { siteData } from "../data/siteData";
import FAQ from "../components/sections/FAQ";

function buildWhatsAppLink(serviceTitle: string) {
  const msg = encodeURIComponent(
    `Hola, me interesa el servicio: ${serviceTitle}. ¿Podemos conversar sobre mi proyecto?`
  );
  return `${siteData.brand.whatsapp}?text=${msg}`;
}

export default function ServicePage() {
  const { slug } = useParams();

  const service = useMemo(
    () => siteData.services.find((s) => s.slug === slug),
    [slug]
  );

  useEffect(() => {
    if (!service) {
      document.title = `${siteData.brand.name} | Servicio no encontrado`;
      return;
    }
    document.title = `${service.title} | ${siteData.brand.name}`;
  }, [service]);

  if (!service) {
    return (
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-cyan font-semibold">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Servicio no encontrado
          </h1>
          <p className="text-slate-400 mt-4">
            El servicio que buscas no existe o el enlace está mal.
          </p>

          <Link
            to="/"
            className="inline-flex mt-8 px-6 py-3 bg-brand-cyan text-dark-bg font-bold rounded-full"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const details = service.details;

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors">
            ← Inicio
          </Link>
          <span className="text-slate-600"> / </span>
          <span className="text-slate-300">{service.title}</span>
        </div>

        <div className="relative overflow-hidden rounded-3xl glass-panel border border-white/10 p-8 md:p-12">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-hero-glow blur-[90px] opacity-30 pointer-events-none" />

          <p className="text-brand-cyan font-semibold">Servicio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            {service.title}
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl">
            {details?.subtitle ?? service.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsAppLink(service.title)}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-brand-cyan text-dark-bg font-bold rounded-full text-center hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              {details?.ctaText ?? "Cotizar este servicio"}
            </a>

            <a
              href="/#contacto"
              className="px-8 py-4 glass-panel text-white font-semibold rounded-full text-center hover:bg-white/10 transition-all"
            >
              Ver contacto
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Incluye</h2>
            <ul className="space-y-2 text-slate-300">
              {(details?.features ?? []).length ? (
                details!.features.map((f) => <li key={f}>• {f}</li>)
              ) : (
                <li className="text-slate-400">
                  (Añade features en <code>siteData.services[].details.features</code>)
                </li>
              )}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Entregables</h2>
            <ul className="space-y-2 text-slate-300">
              {(details?.deliverables ?? []).length ? (
                details!.deliverables.map((d) => <li key={d}>• {d}</li>)
              ) : (
                <li className="text-slate-400">
                  (Añade deliverables en <code>details.deliverables</code>)
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <FAQ items={details?.faq ?? siteData.faq} />

        <div className="mt-12">
          <h3 className="text-lg font-bold text-white mb-4">Otros servicios</h3>
          <div className="flex flex-wrap gap-3">
            {siteData.services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 5)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="px-4 py-2 rounded-full glass-panel hover:border-brand-cyan/50 transition-all text-slate-200"
                >
                  {s.title} →
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}