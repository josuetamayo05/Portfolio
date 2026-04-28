import { MessageCircle } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <a
        href={siteData.brand.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-brand-cyan text-dark-bg rounded-full shadow-[0_4px_20px_rgba(0,240,255,0.4)]"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}