import { useScrollFade } from '../hooks/useScrollFade';

const services = [
  {
    id: 'tiendas',
    icon: '🛒',
    color: 'from-green-500 to-emerald-600',
    badge: '🇨🇺 CUBA',
    badgeColor: 'from-green-500 to-emerald-500',
    title: 'Tiendas Online Cuba',
    desc: 'Catálogos profesionales con pedidos por WhatsApp. Perfectas para negocios en Cuba.',
    features: ['Catálogo con fotos y precios', 'Carrito + pedidos por WhatsApp', 'Panel de administración', 'Responsive en todos los dispositivos'],
    price: 'Desde $50',
    href: '#tiendas',
    featured: true,
  },
  {
    id: 'flutter',
    icon: '📱',
    color: 'from-cyan-500 to-blue-600',
    badge: '📱 MULTIPLATAFORMA',
    badgeColor: 'from-cyan-500 to-blue-500',
    title: 'Apps Flutter',
    desc: 'Aplicaciones móviles nativas para iOS y Android con un solo código. Rápidas, hermosas y eficientes.',
    features: ['iOS y Android desde un código', 'UI nativa de alto rendimiento', 'Integración con APIs', 'Publicación en App Store y Play Store'],
    price: 'Desde $200',
    href: '#flutter',
    featured: true,
  },
  {
    id: 'backend',
    icon: '⚙️',
    color: 'from-violet-500 to-purple-600',
    badge: '🔧 NUEVO',
    badgeColor: 'from-violet-500 to-purple-500',
    title: 'Backend & APIs',
    desc: 'Servidores robustos, APIs REST/GraphQL, bases de datos y lógica de negocio escalable.',
    features: ['APIs REST y GraphQL', 'Autenticación y seguridad JWT', 'Bases de datos SQL y NoSQL', 'Deploy en la nube (Railway, Render)'],
    price: 'Desde $150',
    href: '#backend',
    featured: true,
  },
  {
    id: 'ecommerce',
    icon: '💳',
    color: 'from-blue-500 to-indigo-600',
    badge: '🌎 INTERNACIONAL',
    badgeColor: 'from-blue-500 to-indigo-500',
    title: 'E-commerce Internacional',
    desc: 'Tiendas con pasarela de pagos para clientes en EEUU y el mundo. Stripe, Apple Pay y más.',
    features: ['Pagos con Stripe (Visa, Mastercard)', 'Apple Pay & Google Pay', 'Sistema híbrido EEUU + Cuba', 'Dashboard de ventas en tiempo real'],
    price: 'Desde $300',
    href: '#ecommerce',
    featured: false,
  },
  {
    id: 'landing',
    icon: '🚀',
    color: 'from-blue-400 to-cyan-600',
    badge: null,
    badgeColor: '',
    title: 'Landing Pages',
    desc: 'Páginas de presentación profesionales y optimizadas para convertir visitas en clientes.',
    features: ['Diseño moderno y atractivo', 'Optimizada para conversión', 'Integración WhatsApp', 'Velocidad y SEO'],
    price: 'Desde $30',
    href: '#contacto',
    featured: false,
  },
  {
    id: 'restaurantes',
    icon: '📋',
    color: 'from-orange-500 to-red-600',
    badge: '🍽️ RESTAURANTES',
    badgeColor: 'from-orange-500 to-red-500',
    title: 'Cartas Digitales',
    desc: 'Menús digitales con código QR para restaurantes. El cliente escanea y pide directo a tu WhatsApp.',
    features: ['Menú digital con fotos', 'Código QR para mesas', 'Pedidos por WhatsApp', 'Panel para actualizar platos'],
    price: 'Desde $40',
    href: '#cartas',
    featured: false,
  },
];

export default function ServicesOverview() {
  const { ref } = useScrollFade();

  return (
    <section id="servicios" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-purple-400 mb-2 block">// SERVICIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Todo lo que <span className="gradient-text">Necesitas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desarrollo profesional completo: desde la idea hasta el servidor. Web, móvil y backend.
          </p>
        </div>

        {/* Featured 3 */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {services.filter(s => s.featured).map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} />
          ))}
        </div>

        {/* Other 3 */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.filter(s => !s.featured).map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} />
          ))}
        </div>

        {/* Extra services row */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <MiniCard icon="🔧" color="from-cyan-500 to-teal-600" title="Mantenimiento Web" desc="Actualizaciones y soporte continuo" price="$15/mes" />
          <MiniCard icon="🌐" color="from-indigo-500 to-purple-600" title="Hosting Incluido" desc="Servidores confiables en la nube" price="Incluido" priceColor="text-green-400" />
          <MiniCard icon="🎓" color="from-rose-500 to-pink-600" title="Capacitación" desc="Te enseño a usar tu plataforma" price="Incluida" priceColor="text-green-400" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref } = useScrollFade();
  const handleNav = () => {
    const target = document.querySelector(service.href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      ref={ref}
      className="scroll-fade bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-glow relative overflow-hidden flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {service.badge && (
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 bg-gradient-to-r ${service.badgeColor} text-white text-[10px] font-bold rounded-full`}>
            {service.badge}
          </span>
        </div>
      )}
      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{service.desc}</p>
      <ul className="space-y-1.5 mb-5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="text-green-400 text-xs">✓</span> {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-lg font-bold text-white">{service.price}</span>
        <button
          onClick={handleNav}
          className={`px-4 py-2 bg-gradient-to-r ${service.color} rounded-lg font-semibold text-sm hover:opacity-90 transition text-white`}
        >
          Ver más →
        </button>
      </div>
    </div>
  );
}

function MiniCard({ icon, color, title, desc, price, priceColor = 'text-white' }: {
  icon: string; color: string; title: string; desc: string; price: string; priceColor?: string;
}) {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 card-glow text-center">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-xl mb-3 mx-auto`}>
        {icon}
      </div>
      <h3 className="font-bold mb-1 text-white">{title}</h3>
      <p className="text-slate-400 text-xs mb-3">{desc}</p>
      <span className={`text-lg font-bold ${priceColor}`}>{price}</span>
    </div>
  );
}
