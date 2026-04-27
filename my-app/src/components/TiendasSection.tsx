import { useScrollFade } from '../hooks/useScrollFade';

const steps = [
  { n: '1', title: 'Entra a tu tienda', desc: 'Ve todos los productos con fotos, precios y disponibilidad' },
  { n: '2', title: 'Elige talla y color', desc: 'Selecciona exactamente lo que quiere sin preguntar' },
  { n: '3', title: 'Añade al carrito', desc: 'Puede pedir varios productos a la vez' },
  { n: '4', title: 'Envía por WhatsApp', desc: 'Te llega todo organizado con la dirección completa' },
];

const plans = [
  {
    name: 'Básico',
    price: '$50',
    desc: 'Para empezar',
    features: ['Hasta 20 productos', 'Catálogo profesional', 'Pedidos por WhatsApp', 'Diseño responsive', 'Publicación online'],
    excluded: ['Panel de administración'],
    popular: false,
  },
  {
    name: 'Profesional',
    price: '$100',
    desc: 'Para crecer',
    features: ['Hasta 50 productos', 'Todo del plan Básico', 'Panel de administración', 'Carrito de compras', 'Soporte post-venta', 'Capacitación incluida'],
    excluded: [],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$200',
    desc: 'Todo incluido',
    features: ['Productos ilimitados', 'Todo del plan Pro', 'Diseño 100% personalizado', 'Dominio personalizado*', '3 meses mantenimiento', 'Soporte prioritario'],
    excluded: [],
    popular: false,
  },
];

export default function TiendasSection() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section id="tiendas" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-green-400 mb-2 block">// TIENDAS ONLINE CUBA</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tiendas Online <span className="gradient-text">Profesionales</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La solución perfecta para negocios en Cuba que venden por WhatsApp
          </p>
        </div>

        {/* How it works */}
        <HowItWorks />

        {/* Pricing */}
        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Elige tu <span className="gradient-text">Plan</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => <TiendaPlanCard key={plan.name} plan={plan} delay={i * 100} />)}
          </div>
          <HostingNote />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade gradient-border">
      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-mono text-green-400 mb-2 block">// FLUJO DEL CLIENTE</span>
            <h3 className="text-2xl font-bold mb-6 text-white">Experiencia del Cliente</h3>
            <ul className="space-y-4">
              {steps.map(step => (
                <li key={step.n} className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 text-white">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/5351257656?text=Hola%2C%20quiero%20ver%20una%20demo%20de%20tienda%20online" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold text-sm hover:opacity-90 transition text-white">
              Pedir Demo en Vivo →
            </a>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
            <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
              <span className="text-green-400">📩</span> Así te llega el pedido:
            </p>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <p className="text-green-400">🛒 <strong>NUEVO PEDIDO</strong></p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-white mt-2">👤 María García</p>
              <p className="text-white">📞 +53 5XXX XXXX</p>
              <p className="text-white">📍 Calle 23 #456, Vedado</p>
              <p className="text-white">🏘️ La Habana</p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-white mt-2">📦 <strong>PRODUCTOS</strong></p>
              <p className="text-white mt-1">1️⃣ Pulóver Nike</p>
              <p className="text-slate-300 pl-4">💰 $25 · Talla M · Negro</p>
              <p className="text-white mt-1">2️⃣ Shorts Adidas</p>
              <p className="text-slate-300 pl-4">💰 $18 · Talla L · Azul</p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-green-400 mt-2">💰 <strong>TOTAL: $43 USD</strong></p>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">* Ejemplo ilustrativo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TiendaPlanCard({ plan, delay }: { plan: typeof plans[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`scroll-fade bg-white/5 backdrop-blur-sm rounded-2xl p-6 card-glow relative ${plan.popular ? 'border-2 border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-pink-500/10' : 'border border-white/10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white">
          MÁS POPULAR
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
        <p className="text-slate-400 text-sm mb-3">{plan.desc}</p>
        <span className={`text-4xl font-bold ${plan.popular ? 'gradient-text' : 'text-white'}`}>{plan.price}</span>
        <span className="text-slate-400 text-sm"> USD</span>
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
        href={`https://wa.me/5351257656?text=Hola%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20tienda%20online%20(${encodeURIComponent(plan.price)})`}
        target="_blank" rel="noreferrer"
        className={`block w-full py-3 text-center rounded-xl font-semibold text-sm transition text-white ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/10'}`}
      >
        Elegir Plan
      </a>
    </div>
  );
}

function HostingNote() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade mt-8">
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xl">ℹ️</span>
          <h4 className="font-semibold text-white">Sobre el Hosting</h4>
        </div>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Todos los planes incluyen <strong className="text-white">publicación en servidores confiables</strong> (Netlify, Vercel, Firebase).
          Si necesitas hosting premium con más capacidad, lo gestionamos con el <strong className="text-white">plan de mantenimiento mensual</strong>.
        </p>
      </div>
    </div>
  );
}
