import { useScrollFade } from '../hooks/useScrollFade';

const platforms = [
  { icon: '🍎', name: 'iOS', sub: 'iPhone & iPad', color: 'from-slate-500 to-slate-700' },
  { icon: '🤖', name: 'Android', sub: 'Todos los modelos', color: 'from-green-600 to-emerald-700' },
  { icon: '🌐', name: 'Web', sub: 'Funciona en browser', color: 'from-blue-600 to-indigo-700' },
  { icon: '🖥️', name: 'Desktop', sub: 'Windows & macOS', color: 'from-purple-600 to-violet-700' },
];

const flutterFeatures = [
  { icon: '⚡', title: 'Un solo código', desc: 'Escribes una vez, funciona en iOS, Android, Web y Desktop. Ahorra tiempo y dinero.' },
  { icon: '🎨', title: 'UI nativa y hermosa', desc: 'Interfaces modernas, animaciones fluidas y rendimiento nativo en cada plataforma.' },
  { icon: '🔗', title: 'Integración completa', desc: 'Conecta tu app a Firebase, APIs REST, pagos, mapas, cámara y más.' },
  { icon: '🚀', title: 'Publicación incluida', desc: 'Te ayudo con el proceso de publicación en App Store y Google Play Store.' },
  { icon: '📊', title: 'Backend integrado', desc: 'Combina Flutter con Node.js o Firebase para apps con datos en tiempo real.' },
  { icon: '🔒', title: 'Seguridad y autenticación', desc: 'Login con email, Google, Apple. Datos protegidos y encriptados.' },
];

const flutterApps = [
  { icon: '🛒', name: 'App de Tienda', desc: 'Catálogo, carrito y pedidos desde el móvil' },
  { icon: '🍽️', name: 'App de Restaurante', desc: 'Menú digital, pedidos y rastreo' },
  { icon: '📦', name: 'App de Gestión', desc: 'Control de inventario y ventas' },
  { icon: '💬', name: 'App de Servicios', desc: 'Reservas, citas y atención al cliente' },
  { icon: '🏋️', name: 'App Fitness / Gym', desc: 'Rutinas, seguimiento y membresías' },
  { icon: '🏠', name: 'App Inmobiliaria', desc: 'Catálogo de propiedades y contacto' },
];

const plans = [
  {
    name: 'App Básica',
    price: '$200',
    sub: 'iOS + Android',
    features: ['5-8 pantallas', 'Diseño profesional', 'Integración con API o Firebase', 'Login con email', 'Publicación asistida'],
    excluded: ['Backend personalizado', 'Pagos in-app'],
    popular: false,
  },
  {
    name: 'App Profesional',
    price: '$400',
    sub: 'iOS + Android + Web',
    features: ['Hasta 15 pantallas', 'Todo del plan Básico', 'Backend incluido (Node.js)', 'Notificaciones push', 'Login social (Google, Apple)', 'Panel de administración web'],
    excluded: [],
    popular: true,
  },
  {
    name: 'App Premium',
    price: 'A cotizar',
    sub: 'Todas las plataformas',
    features: ['Pantallas ilimitadas', 'Todo del plan Profesional', 'Pagos in-app (Stripe)', 'Analytics y reportes', 'Diseño 100% personalizado', '3 meses de mantenimiento'],
    excluded: [],
    popular: false,
  },
];

export default function FlutterSection() {
  const { ref: titleRef } = useScrollFade();

  return (
    <section id="flutter" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-cyan-400 mb-2 block">// APPS MÓVILES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Flutter <span className="gradient-text">Multiplataforma</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Una sola app que funciona en iOS, Android, Web y Desktop. Sin compromisos de calidad.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {platforms.map((p, i) => (
            <PlatformCard key={p.name} platform={p} delay={i * 80} />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {flutterFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 80} />
          ))}
        </div>

        {/* App Types */}
        <AppTypes />

        {/* Pricing */}
        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Planes de <span className="gradient-text">Apps</span></h3>
            <p className="text-slate-400">Elige el plan que mejor se adapta a tu proyecto</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => <PlanCard key={plan.name} plan={plan} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ platform, delay }: { platform: typeof platforms[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade text-center" style={{ transitionDelay: `${delay}ms` }}>
      <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg`}>
        {platform.icon}
      </div>
      <p className="font-semibold text-white">{platform.name}</p>
      <p className="text-xs text-slate-400">{platform.sub}</p>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: typeof flutterFeatures[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade bg-white/5 border border-white/10 rounded-2xl p-6 card-glow" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl mb-3">{feature.icon}</div>
      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  );
}

function AppTypes() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade">
      <div className="gradient-border">
        <div className="p-8">
          <div className="text-center mb-8">
            <span className="text-sm font-mono text-cyan-400 mb-2 block">// TIPOS DE APPS</span>
            <h3 className="text-2xl font-bold text-white">¿Qué app necesitas?</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {flutterApps.map(app => (
              <div key={app.name} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{app.name}</p>
                  <p className="text-xs text-slate-400">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan, delay }: { plan: typeof plans[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className={`scroll-fade bg-white/5 backdrop-blur-sm rounded-2xl p-6 card-glow relative ${plan.popular ? 'border-2 border-cyan-500/50' : 'border border-white/10'}`} style={{ transitionDelay: `${delay}ms` }}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold text-white">
          MÁS POPULAR
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
        <p className="text-slate-400 text-sm mb-3">{plan.sub}</p>
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
        href={`https://wa.me/5351257656?text=Hola%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20Flutter`}
        target="_blank" rel="noreferrer"
        className={`block w-full py-3 text-center rounded-xl font-semibold text-sm transition text-white ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/10'}`}
      >
        Elegir Plan
      </a>
    </div>
  );
}
