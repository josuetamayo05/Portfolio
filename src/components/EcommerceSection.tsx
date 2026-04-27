import { useScrollFade } from '../hooks/useScrollFade';

const ecommerceFeatures = [
  { icon: '💳', title: 'Pagos con Tarjeta', desc: 'Visa, Mastercard, Amex con Stripe.' },
  { icon: '📱', title: 'Apple & Google Pay', desc: 'Pagos con un toque desde el móvil.' },
  { icon: '🔄', title: 'Sistema Híbrido', desc: 'EEUU paga online, Cuba por WhatsApp.' },
  { icon: '📊', title: 'Dashboard de Ventas', desc: 'Estadísticas y órdenes en tiempo real.' },
];

const paymentMethods = ['💳 Visa', '💳 Mastercard', '💳 Amex', '🍎 Apple Pay', '📱 Google Pay', '💳 Discover'];

const plans = [
  {
    name: 'E-commerce Estándar',
    price: '$300',
    sub: 'Solo pagos en línea',
    features: ['Hasta 100 productos', 'Integración con Stripe', 'Visa, Mastercard, Amex', 'Apple Pay & Google Pay', 'Panel de administración', 'Diseño personalizado'],
    excluded: ['Sistema híbrido Cuba/EEUU'],
    popular: false,
  },
  {
    name: 'E-commerce Híbrido',
    price: '$400',
    sub: 'EEUU + Cuba en una tienda',
    features: ['Productos ilimitados', 'Todo del plan Estándar', 'Sistema híbrido Cuba/EEUU', 'EEUU: pago con tarjeta', 'Cuba: pedido por WhatsApp', 'Selector de ubicación auto', 'Dashboard de ventas'],
    excluded: [],
    popular: true,
  },
];

export default function EcommerceSection() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section id="ecommerce" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-blue-400 mb-2 block">// E-COMMERCE INTERNACIONAL</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            E-commerce <span className="gradient-text">Internacional</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tiendas con pasarela de pagos para negocios que venden en EEUU y el mundo
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {ecommerceFeatures.map((f, i) => {
            const { ref } = useScrollFade();
            return (
              <div key={f.title} ref={ref} className="scroll-fade text-center p-5 bg-white/5 border border-white/10 rounded-2xl card-glow" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-1 text-sm">{f.title}</h3>
                <p className="text-slate-400 text-xs">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
          {plans.map((plan, i) => <EcommercePlanCard key={plan.name} plan={plan} delay={i * 100} />)}
        </div>

        {/* Payment Methods */}
        <PaymentMethods />
      </div>
    </section>
  );
}

function EcommercePlanCard({ plan, delay }: { plan: typeof plans[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`scroll-fade bg-white/5 backdrop-blur-sm rounded-2xl p-8 card-glow relative ${plan.popular ? 'border-2 border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-indigo-500/10' : 'border border-white/10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-xs font-semibold text-white">
          🌎 RECOMENDADO
        </div>
      )}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-lg">
          {plan.popular ? '🌐' : '💳'}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
          <p className="text-slate-400 text-sm">{plan.sub}</p>
        </div>
      </div>
      <div className="mb-6">
        <span className={`text-4xl font-bold ${plan.popular ? 'gradient-text' : 'text-white'}`}>{plan.price}</span>
        <span className="text-slate-400 text-sm"> USD</span>
      </div>
      <ul className="space-y-2 mb-6">
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
      <p className="text-xs text-slate-500 mb-4">* Cliente debe crear cuenta Stripe</p>
      <a
        href={`https://wa.me/5351257656?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)})`}
        target="_blank" rel="noreferrer"
        className={`block w-full py-3 text-center rounded-xl font-semibold text-sm transition text-white ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/10'}`}
      >
        Cotizar Proyecto
      </a>
    </div>
  );
}

function PaymentMethods() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
      <h4 className="font-semibold text-white text-lg mb-6">Métodos de Pago Soportados</h4>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {paymentMethods.map(method => (
          <div key={method} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
            <span className="text-sm text-slate-300">{method}</span>
          </div>
        ))}
      </div>
      <p className="text-slate-500 text-sm">
        Procesado de forma segura con <strong className="text-white">Stripe</strong> — El líder mundial en pagos online
      </p>
    </div>
  );
}
