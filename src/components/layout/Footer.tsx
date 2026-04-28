import { MessageCircle } from "lucide-react";
import { siteData } from "../../data/siteData";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-white/10 bg-dark-surface/50 pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para escalar tu negocio?
          </h2>
          <p className="text-slate-400 max-w-md">
            Escríbeme y agendamos una consulta gratuita para analizar tu proyecto.
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <a
            href={siteData.brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-brand-cyan transition-colors"
          >
            <MessageCircle size={20} /> Iniciar chat
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {siteData.brand.name} — {siteData.brand.tagline}
        </p>

        <div className="flex gap-4">
          <a
            href={siteData.brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-cyan transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={siteData.brand.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-cyan transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href={siteData.brand.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-cyan transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}