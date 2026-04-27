import { useScrollFade } from '../hooks/useScrollFade';

const backendServices = [
  {
    icon: '🔌',
    title: 'APIs REST & GraphQL',
    desc: 'Diseño e implementación de APIs robustas, documentadas y escalables para conectar tu frontend, app móvil o servicios externos.',
    tags: ['Node.js', 'Express', 'FastAPI', 'Python'],
  },
  {
    icon: '🗄️',
    title: 'Bases de Datos',
    desc: 'Modelado, optimización y gestión de bases de datos relacionales y no relacionales según las necesidades de tu proyecto.',
    tags: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL'],
  },
  {
    icon: '🔐',
    title: 'Autenticación & Seguridad',
    desc: 'Sistemas de login seguros con JWT, OAuth2, roles y permisos. Protección de rutas y datos sensibles.',
    tags: ['JWT', 'OAuth2', 'bcrypt', 'HTTPS'],
  },
  {
    icon: '☁️',
    title: 'Deploy en la Nube',
    desc: 'Publicación y configuración de servidores en plataformas cloud. CI/CD, variables de entorno y monitoreo.',
    tags: ['Railway', 'Render', 'Vercel', 'Docker'],
  },
  {
    icon: '⚡',
    title: 'Tiempo Real',
    desc: 'Funcionalidades en tiempo real: chats, notificaciones, dashboards en vivo con WebSockets o Firebase Realtime.',
    tags: ['WebSockets', 'Socket.io', 'Firebase', 'Pusher'],
  },
  {
    icon: '🔗',
    title: 'Integración de Servicios',
    desc: 'Conexión con servicios de terceros: pasarelas de pago, envío de emails, SMS, WhatsApp API, Google Maps y más.',
    tags: ['Stripe', 'SendGrid', 'Twilio', 'Google APIs'],
  },
];

const backendPlans = [
  {
    name: 'API Básica',
    price: '$150',
    desc: 'Para proyectos simples',
    features: ['API REST básica', 'Hasta 10 endpoints', 'Base de datos incluida', 'Autenticación JWT', 'Deploy en Railway/Render'],
    excluded: ['GraphQL', 'Tiempo real', 'Documentación Swagger'],
    popular: false,
  },
  {
    name: 'Backend Completo',
    price: '$350',
    desc: 'Para proyectos medianos',
    features: ['API REST + WebSockets', 'Endpoints ilimitados', 'Base de datos + caché Redis', 'Auth completa (JWT + OAuth)', 'Documentación Swagger/Postman', 'Deploy + CI/CD básico'],
    excluded: [],
    popular: true,
  },
  {
    name: 'Sistema Empresarial',
    price: 'A cotizar',
    desc: 'Proyectos complejos',
    features: ['Arquitectura microservicios', 'GraphQL + REST', 'Multi-tenant', 'Escalabilidad horizontal', 'Monitoreo y alertas', 'Soporte extendido'],
    excluded: [],
    popular: false,
  },
];

export default function BackendSection() {
  const { ref: titleRef } = useScrollFade();

  return (
    <section id="backend" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-violet-400 mb-2 block">// BACKEND</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Backend & <span className="gradient-text">APIs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            El motor de tu aplicación. Servidores, bases de datos y lógica de negocio robusta y segura.
          </p>
        </div>

        {/* Visual diagram */}
        <BackendDiagram />

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14 mt-14">
          {backendServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 80} />
          ))}
        </div>

        {/* Plans */}
        <div className="mt-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Planes de <span className="gradient-text">Backend</span></h3>
            <p className="text-slate-400">Desde una API simple hasta arquitecturas complejas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {backendPlans.map((plan, i) => <BackendPlanCard key={plan.name} plan={plan} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof backendServices[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade bg-white/5 border border-white/10 rounded-2xl p-6 card-glow" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl mb-3">{service.icon}</div>
      <h3 className="font-bold text-white mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.desc}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded text-xs font-mono">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function BackendDiagram() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade gradient-border">
      <div className="p-8">
        <div className="text-center mb-8">
          <span className="text-sm font-mono text-violet-400 mb-2 block">// ARQUITECTURA</span>
          <h3 className="text-xl font-bold text-white">¿Cómo funciona un Backend?</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <DiagramBox icon="📱" label="Tu App" sub="Flutter / React" color="bg-cyan-500/20 border-cyan-500/40" />
          <Arrow />
          <DiagramBox icon="⚙️" label="API Server" sub="Node.js / Python" color="bg-violet-500/20 border-violet-500/40" />
          <Arrow />
          <DiagramBox icon="🗄️" label="Base de Datos" sub="PostgreSQL / Firebase" color="bg-blue-500/20 border-blue-500/40" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 flex-wrap">
          {[
            { icon: '🔐', label: 'Autenticación' },
            { icon: '💳', label: 'Pagos (Stripe)' },
            { icon: '📧', label: 'Email / SMS' },
            { icon: '☁️', label: 'Almacenamiento' },
            { icon: '🗺️', label: 'Mapas / GPS' },
            { icon: '📊', label: 'Analytics' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
              <span>{item.icon}</span>
              <span className="text-xs text-slate-300">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-xs mt-4">El backend conecta tu app con todos los servicios que necesita</p>
      </div>
    </div>
  );
}

function DiagramBox({ icon, label, sub, color }: { icon: string; label: string; sub: string; color: string }) {
  return (
    <div className={`flex-1 max-w-[160px] p-4 rounded-xl border ${color} text-center`}>
      <div className="text-3xl mb-2">{icon}</div>
      <p className="font-semibold text-white text-sm">{label}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center text-slate-500 rotate-90 md:rotate-0">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </div>
  );
}

function BackendPlanCard({ plan, delay }: { plan: typeof backendPlans[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`scroll-fade bg-white/5 backdrop-blur-sm rounded-2xl p-6 card-glow relative ${plan.popular ? 'border-2 border-violet-500/50' : 'border border-white/10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-xs font-semibold text-white">
          MÁS POPULAR
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
        <p className="text-slate-400 text-sm mb-3">{plan.desc}</p>
        <span className={`text-4xl font-bold ${plan.popular ? 'gradient-text' : 'text-white'}`}>{plan.price}</span>
      </div>
      <ul className="space-y-2 mb-5">
        {plan.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="text-green-400">✓</span> {f}
          </li>
        ))}
        {plan.excluded.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
            <span>✗</span> {f}
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/5351257656?text=Hola%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20Backend`}
        target="_blank" rel="noreferrer"
        className={`block w-full py-3 text-center rounded-xl font-semibold text-sm transition text-white ${plan.popular ? 'bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/10'}`}
      >
        Cotizar
      </a>
    </div>
  );
}
