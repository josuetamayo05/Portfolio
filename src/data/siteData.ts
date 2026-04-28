import { Monitor, Smartphone, ShoppingCart, Server, Utensils, Wrench } from 'lucide-react';

export const siteData = {
  brand: {
    name: "JA CubanCode",
    tagline: "Developer Services",
    whatsapp: "https://wa.me/5351257656",
    instagram: "https://www.instagram.com/jacubancode",
    facebook: "https://www.facebook.com/share/1GbdQ6hftM/",
    github: "https://github.com/josuetamayo05"
  },
  hero: {
    title: "Impulsa tu negocio con tecnología de alto nivel.",
    subtitle: "Desarrollo web y móvil a medida para marcas que buscan destacar, vender más y operar en automático.",
    ctaPrimary: "Cotizar mi proyecto",
    ctaSecondary: "Ver servicios"
  },
  services: [
    { id: 1, title: "Desarrollo Web", desc: "Landing pages, webs corporativas y dashboards a medida, optimizados para velocidad y conversión.", icon: Monitor },
    { id: 2, title: "E-Commerce", desc: "Tiendas online completas, catálogos digitales y pasarelas de pago para vender 24/7.", icon: ShoppingCart },
    { id: 3, title: "Apps Móviles", desc: "Aplicaciones nativas e híbridas para Android e iOS. Tu negocio en el bolsillo de tus clientes.", icon: Smartphone },
    { id: 4, title: "Backend & APIs", desc: "Arquitecturas robustas, bases de datos seguras y conexiones entre sistemas para automatizar procesos.", icon: Server },
    { id: 5, title: "Soluciones Gastronómicas", desc: "Sistemas para restaurantes: menús QR interactivos, reservas y gestión de pedidos directo a cocina.", icon: Utensils },
    { id: 6, title: "Mantenimiento", desc: "Soporte técnico continuo, actualizaciones de seguridad y mejoras evolutivas para tu plataforma.", icon: Wrench }
  ],
  process: [
    { step: "01", title: "Descubrimiento", desc: "Analizamos tu negocio y definimos la mejor solución tecnológica para tus objetivos." },
    { step: "02", title: "Diseño UI/UX", desc: "Creamos prototipos interactivos para que veas y sientas tu app antes de programarla." },
    { step: "03", title: "Desarrollo", desc: "Escribimos código limpio y escalable con entregas semanales para que veas el progreso." },
    { step: "04", title: "Lanzamiento", desc: "Desplegamos tu proyecto en servidores de alto rendimiento y te enseñamos a usarlo." }
  ],
  faq: [
    { q: "¿Cuánto tarda en crearse una Tienda Online?", a: "Depende de la complejidad, pero una tienda estándar lista para vender suele tomar entre 2 a 4 semanas." },
    { q: "¿Necesito conocimientos técnicos para manejar mi web?", a: "No. Te entregamos un panel de administración muy fácil de usar y te damos capacitación inicial." },
    { q: "¿Ofrecen hosting y dominio?", a: "Sí, podemos encargarnos de toda la infraestructura técnica para que no tengas que preocuparte por nada." },
    { q: "¿Cómo funcionan los pagos del desarrollo?", a: "Trabajamos con un anticipo del 50% para iniciar y el 50% restante contra entrega y satisfacción final." }
  ]
};