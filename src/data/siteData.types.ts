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
};