import type { LucideIcon } from "lucide-react";

export type FAQItem = { q: string; a: string };

export type ServiceDetails = {
  subtitle: string;
  features: string[];
  deliverables: string[];
  ctaText: string;
  faq?: FAQItem[];
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  details?: ServiceDetails;
};

export type SiteData = {
  brand: {
    name: string;
    tagline: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    github: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: Service[];
  process: { step: string; title: string; desc: string }[];
  faq: FAQItem[];
  projects: Project[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];        // ej: ["Web", "E‑commerce", "Restaurantes"]
  tech?: string[];       // ej: ["React", "Tailwind", "FastAPI"]
  image?: string;        // ruta en /public, ej: "/portfolio/tienda1.png"
  liveUrl?: string;      // link demo
  repoUrl?: string;      // link github (opcional)
};
