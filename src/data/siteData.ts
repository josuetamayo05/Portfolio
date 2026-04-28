import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Server,
  Utensils,
  Wrench,
} from "lucide-react";
import type { SiteData } from "./siteData.types";

export const siteData: SiteData = {
  brand: {
    name: "JA CubanCode",
    tagline: "Developer Services",
    whatsapp: "https://wa.me/5351257656",
    instagram: "https://www.instagram.com/jacubancode",
    facebook: "https://www.facebook.com/share/1GbdQ6hftM/",
    github: "https://github.com/josuetamayo05",
  },
  
  hero: {
    title: "Impulsa tu negocio con tecnología de alto nivel.",
    subtitle:
      "Desarrollo soluciones web, móviles y backend para marcas que quieren vender más, automatizar tareas y verse profesionales desde el primer día.",
    ctaPrimary: "Cotizar mi proyecto",
    ctaSecondary: "Ver servicios",
  },

  projects: [
    {
      id: "tienda-catalogo",
      title: "Tienda/Catálogo para floristería",
      summary:
        "Catálogo rápido con productos, carrito y pedido directo por WhatsApp. Optimizado para móvil.",
      tags: ["Web", "Catálogo", "WhatsApp"],
      tech: ["React", "Tailwind"],
      image: "/portfolio/placeholder-1.png",
      liveUrl: "https://bloompiper.vercel.app/",
      repoUrl: "https://github.com/josuetamayo05/BloomPiper",
    },
    {
      id: "tienda-deportiva",
      title: "Tienda/Catálogo deportiva",
      summary:
        "Catálogo rápido con productos, carrito y pedido directo por WhatsApp. Optimizado para móvil.",
      tags: ["Web", "Catálogo", "WhatsApp"],
      tech: ["React", "Tailwind"],
      image: "/portfolio/placeholder-2.png",
      liveUrl: "https://futbeteo-store.vercel.app/",
    }
  ],
  
  services: [
    {
      slug: "web",
      title: "Desarrollo Web",
      desc: "Landing pages, webs corporativas y sistemas web modernos, rápidos y pensados para convertir visitas en clientes.",
      icon: Monitor,
      details: {
        subtitle:
          "Una web moderna no es solo “bonita”: debe cargar rápido, explicar tu oferta en segundos y convertir en contactos o ventas.",
        features: [
          "Landing page (producto/servicio) enfocada en conversiones",
          "Web corporativa profesional (secciones, servicios, contacto)",
          "Paneles y dashboards (si tu negocio lo requiere)",
          "Formularios, WhatsApp, email y automatizaciones simples",
          "Buenas prácticas: performance, responsive, accesibilidad",
          "SEO técnico básico (metas, estructura, indexación)",
        ],
        deliverables: [
          "Diseño UI/UX (estructura + estilo visual)",
          "Implementación completa (frontend) y publicación (deploy)",
          "Optimización base (performance + responsive)",
          "Guía de uso/actualización y soporte inicial",
        ],
        ctaText: "Cotizar desarrollo web",
        faq: [
          {
            q: "¿Necesito tener hosting y dominio?",
            a: "No necesariamente. Puedo asesorarte y gestionarlo, o adaptarme a lo que ya tengas. Si quieres empezar rápido, se puede publicar en opciones sencillas y luego migrar.",
          },
          {
            q: "¿La web queda bien en móvil?",
            a: "Sí. Trabajo mobile‑first: se diseña y prueba para móvil, tablet y escritorio.",
          },
          {
            q: "¿Incluye SEO?",
            a: "Incluyo SEO técnico básico (estructura, metas, rendimiento). Si necesitas SEO avanzado (contenido, estrategia, blog), lo planificamos aparte.",
          },
        ],
      },
    },

    {
      slug: "ecommerce",
      title: "E‑Commerce",
      desc: "Tiendas online completas: catálogo, carrito, administración y flujos listos para vender 24/7.",
      icon: ShoppingCart,
      details: {
        subtitle:
          "Vende productos o servicios con una tienda clara, rápida y fácil de administrar. Desde catálogo simple hasta pagos en línea.",
        features: [
          "Catálogo con categorías, búsqueda y filtros",
          "Carrito de compras y resumen de pedido",
          "Checkout (WhatsApp, formulario o pagos online según necesidad)",
          "Panel administrador (productos, precios, stock, pedidos)",
          "Cupones/descuentos (opcional)",
          "Integración de pagos (Stripe/PayPal) si aplica",
        ],
        deliverables: [
          "Diseño UI/UX de la tienda (home, producto, carrito, checkout)",
          "Implementación + panel admin",
          "Configuración de analíticas básicas (opcional)",
          "Deploy y guía de administración",
        ],
        ctaText: "Cotizar e‑commerce",
        faq: [
          {
            q: "¿Puede ser solo catálogo sin pagos?",
            a: "Sí. Podemos hacerlo tipo catálogo profesional con pedidos por WhatsApp o formulario, ideal para negocios que no usan pasarela de pago.",
          },
          {
            q: "¿Puedo gestionar productos yo mismo?",
            a: "Sí. La idea es que tengas un panel simple para crear/editar productos, precios, fotos y disponibilidad.",
          },
          {
            q: "¿Se puede vender internacionalmente?",
            a: "Sí, si necesitas pagos online (Stripe/PayPal) y reglas de envío. Se define según país/moneda y requerimientos.",
          },
        ],
      },
    },

    {
      slug: "apps",
      title: "Apps Móviles",
      desc: "Aplicaciones para Android/iOS para reservas, pedidos, gestión interna, clientes, catálogos y más.",
      icon: Smartphone,
      details: {
        subtitle:
          "Tu negocio en el bolsillo de tus clientes o de tu equipo. Apps enfocadas en UX, velocidad y estabilidad.",
        features: [
          "Apps multiplataforma (Android/iOS) con Flutter (si aplica)",
          "Login y perfiles de usuario (opcional)",
          "Notificaciones push (opcional)",
          "Modo offline básico (según caso)",
          "Integración con APIs/Backend",
          "Publicación y builds (APK/AAB) según necesidad",
        ],
        deliverables: [
          "Definición de pantallas y flujo (wireframes)",
          "App funcional por etapas (entregas semanales)",
          "Integración con backend o base local (según alcance)",
          "Builds de prueba + guía básica",
        ],
        ctaText: "Cotizar app móvil",
        faq: [
          {
            q: "¿Se puede hacer Android y iOS con el mismo proyecto?",
            a: "Sí. Con Flutter se puede apuntar a Android y iOS desde una misma base de código (iOS requiere compilar desde macOS).",
          },
          {
            q: "¿La app puede conectarse a una web/tienda existente?",
            a: "Sí, si tu sistema tiene API o si definimos una integración. También se puede crear el backend si no existe.",
          },
        ],
      },
    },

    {
      slug: "backend",
      title: "Backend & APIs",
      desc: "APIs, bases de datos y lógica de negocio para conectar tu web/app, automatizar procesos y escalar de forma segura.",
      icon: Server,
      details: {
        subtitle:
          "Cuando necesitas algo más que una web: usuarios, datos, roles, reportes, integraciones y reglas de negocio.",
        features: [
          "APIs REST (arquitectura clara y documentada)",
          "Autenticación (JWT) y roles (admin/usuario) si aplica",
          "Base de datos (PostgreSQL/SQLite según entorno)",
          "Integraciones con servicios externos (pagos, email, etc.)",
          "Validaciones, manejo de errores y logs",
          "Despliegue y configuración (dev/prod) según necesidad",
        ],
        deliverables: [
          "Diseño de modelos de datos + endpoints",
          "API documentada (Swagger/OpenAPI)",
          "Implementación + pruebas básicas",
          "Deploy (si tienes servidor o usamos una opción gratuita)",
        ],
        ctaText: "Cotizar backend/API",
        faq: [
          {
            q: "¿Necesito backend si solo quiero una landing?",
            a: "No siempre. Para una landing simple, no es necesario. Se recomienda backend cuando hay usuarios, pedidos, inventario, panel admin o integraciones.",
          },
          {
            q: "¿Qué base de datos recomiendas?",
            a: "Para proyectos que escalan y multiusuario, Postgres. Para demos o proyectos pequeños, SQLite puede servir. Lo definimos según el caso.",
          },
        ],
      },
    },

    {
      slug: "restaurantes",
      title: "Soluciones para Restaurantes",
      desc: "Cartas digitales con QR, pedidos, reservas y flujos pensados para operación real (cocina/caja/mesas).",
      icon: Utensils,
      details: {
        subtitle:
          "Soluciones rápidas y prácticas para restaurantes: menú QR moderno y, si quieres, pedidos/reservas con control.",
        features: [
          "Carta digital con QR (categorías, fotos, precios)",
          "Panel para actualizar platos y marcar “agotado”",
          "Pedidos por WhatsApp o sistema interno (según alcance)",
          "Reservas (opcional) con horarios y confirmación",
          "Múltiples sucursales/menús (opcional)",
        ],
        deliverables: [
          "Diseño del menú (UI) + optimización móvil",
          "Implementación + panel admin (si aplica)",
          "Generación de QR y publicación",
          "Guía rápida para actualizar el menú",
        ],
        ctaText: "Cotizar solución para restaurante",
        faq: [
          {
            q: "¿Puedo cambiar precios y platos sin depender del programador?",
            a: "Sí, con un panel de administración simple. Si prefieres algo aún más sencillo, también se puede manejar con una plantilla y actualización asistida.",
          },
          {
            q: "¿Funciona bien con internet lento?",
            a: "Se optimiza para que cargue rápido y en móvil. Además se comprimen imágenes y se cuida el rendimiento.",
          },
        ],
      },
    },

    {
      slug: "mantenimiento",
      title: "Mantenimiento & Mejoras",
      desc: "Soporte continuo, corrección de errores, mejoras de rendimiento y actualizaciones para mantener tu producto estable.",
      icon: Wrench,
      details: {
        subtitle:
          "Después de publicar, lo importante es mantener tu producto rápido, seguro y actualizado. Te acompaño con soporte.",
        features: [
          "Corrección de bugs y mejoras evolutivas",
          "Optimización de performance (web/app)",
          "Actualizaciones de dependencias y seguridad",
          "Mejoras de UI/UX basadas en feedback",
          "Soporte por etapas (semanal/quincenal) según acuerdo",
        ],
        deliverables: [
          "Diagnóstico inicial (qué está mal y cómo mejorarlo)",
          "Plan de mejoras por prioridades",
          "Cambios implementados con entregas y verificación",
          "Documentación básica de lo cambiado",
        ],
        ctaText: "Solicitar mantenimiento",
        faq: [
          {
            q: "¿Puedo pedir cambios pequeños sin contratar un proyecto nuevo?",
            a: "Sí. Podemos trabajar por horas o por mini‑hitos (tareas concretas con entrega).",
          },
          {
            q: "¿También das soporte si el proyecto no lo hiciste tú?",
            a: "Depende del stack y del estado del código, pero normalmente sí. Primero hago una revisión para estimar esfuerzo.",
          },
        ],
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Descubrimiento",
      desc: "Entiendo tu objetivo, tu negocio y definimos alcance, prioridades y entregables.",
    },
    {
      step: "02",
      title: "Propuesta",
      desc: "Te presento una propuesta con etapas, tiempos estimados y forma de trabajo (hitos).",
    },
    {
      step: "03",
      title: "Desarrollo por etapas",
      desc: "Entregas semanales con demo + ajustes. Transparencia total del avance.",
    },
    {
      step: "04",
      title: "Lanzamiento y soporte",
      desc: "Publicación y acompañamiento inicial. Luego mantenimiento si lo necesitas.",
    },
  ],

  faq: [
    {
      q: "¿Trabajas remoto y con avances verificables?",
      a: "Sí. Trabajo 100% remoto y por etapas, con demos y entregables para que veas el progreso antes de finalizar.",
    },
    {
      q: "¿Cómo se cotiza un proyecto?",
      a: "Depende del alcance. Te hago preguntas clave y te envío una propuesta con etapas, tiempos y costo estimado.",
    },
    {
      q: "¿Qué necesitas de mí para empezar?",
      a: "Una idea clara del objetivo, referencias (si tienes) y el contenido básico (logo, textos, productos/servicios). Si no lo tienes, te ayudo a estructurarlo.",
    },
    {
      q: "¿Entregas el código y acceso al proyecto?",
      a: "Sí. El proyecto se entrega con repositorio y acceso a lo publicado, además de una guía básica.",
    },
  ],
};