import { useScrollFade } from '../hooks/useScrollFade';

const steps = [
  { icon: '📱', title: 'Escanea el QR', desc: 'El cliente escanea el código en la mesa con su teléfono.' },
  { icon: '📋', title: 'Ve el Menú', desc: 'Carta digital con fotos, descripciones y precios actualizados.' },
  { icon: '🛒', title: 'Elige y Pide', desc: 'Selecciona platos y bebidas, envía el pedido.' },
  { icon: '💬', title: 'Llega a WhatsApp', desc: 'El pedido llega organizado al WhatsApp del negocio.' },
];

const plans = [
  { name: 'Carta Básica', price: '$40', desc: 'Para empezar', features: ['Hasta 30 platos', 'Menú digital con fotos', 'Código QR incluido', 'Pedidos por WhatsApp', 'Diseño responsive'], excluded: ['Panel admin'], popular: false },
  { name: 'Carta Pro', price: '$80', desc: 'Recomendado', features: ['Hasta 80 platos', 'Todo del Básico', 'Panel de administración', 'Categorías personalizadas', 'Marcar platos agotados', 'Soporte incluido'], excluded: [], popular: true },
  { name: 'Carta Premium', price: '$150', desc: 'Todo incluido', features: ['Platos ilimitados', 'Todo del Pro', 'Diseño 100% personalizado', 'Múltiples sucursales', 'QR para cada mesa', '3 meses mantenimiento'], excluded: [], popular: false },
];

const restaurantTypes = ['Restaurantes', 'Cafeterías', 'Bares', 'Pizzerías', 'Food Trucks', 'Heladerías', 'Paladares', 'Snack-bars'];

export default function CartasSection() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section id="cartas" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-orange-400 mb-2 block">// RESTAURANTES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Cartas Digitales <span className="gradient-text">con QR</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Menús digitales modernos para restaurantes, cafeterías y negocios de comida
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {steps.map((s, i) => {
            const { ref } = useScrollFade();
            return (
              <div key={s.title} ref={ref} className="scroll-fade text-center p-5 bg-white/5 border border-white/10 rounded-2xl" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-white mb-1 text-sm">{s.title}</h3>
                <p className="text-slate-400 text-xs">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits demo */}
        <CartasBenefits />

        {/* Plans */}
        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Planes de <span className="gradient-text">Carta Digital</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => <CartaPlanCard key={plan.name} plan={plan} delay={i * 100} />)}
          </div>
        </div>

        {/* Ideal for */}
        <IdealFor />
      </div>
    </section>
  );
}

function CartasBenefits() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade gradient-border">
      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-mono text-orange-400 mb-2 block">// BENEFICIOS</span>
            <h3 className="text-2xl font-bold mb-5 text-white">¿Por qué Carta Digital?</h3>
            <ul className="space-y-4">
              {[
                { title: 'Sin imprimir menús', desc: 'Ahorra dinero. Actualiza precios al instante desde el panel.' },
                { title: 'Fotos de los platos', desc: 'El cliente ve lo que va a pedir. Más apetito, más ventas.' },
                { title: 'Menos errores en pedidos', desc: 'El cliente escribe exactamente lo que quiere.' },
                { title: 'Imagen moderna y profesional', desc: 'Tu negocio se destaca frente a la competencia.' },
              ].map(b => (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">{b.title}</p>
                    <p className="text-sm text-slate-400">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/10">
            <p className="text-sm text-slate-400 mb-4 flex items-center gap-2">
              <span className="text-orange-400">📩</span> Así te llega el pedido:
            </p>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <p className="text-orange-400">🍽️ <strong>NUEVO PEDIDO - MESA 5</strong></p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-white mt-2">📦 <strong>PEDIDO</strong></p>
              <p className="text-white mt-1">🍔 Hamburguesa Clásica x2</p>
              <p className="text-slate-300 pl-4">Sin cebolla</p>
              <p className="text-white mt-1">🍟 Papas Fritas Grande x1</p>
              <p className="text-white mt-1">🥤 Refresco Cola x2</p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-white mt-2">💬 <strong>Nota:</strong> Sin picante</p>
              <p className="text-slate-500 mt-2">━━━━━━━━━━━━━━━━</p>
              <p className="text-orange-400 mt-2">💰 <strong>TOTAL: $28 USD</strong></p>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">* Ejemplo ilustrativo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartaPlanCard({ plan, delay }: { plan: typeof plans[0]; delay: number }) {
  const { ref } = useScrollFade();
  return (
    <div
      ref={ref}
      className={`scroll-fade bg-white/5 backdrop-blur-sm rounded-2xl p-6 card-glow relative ${plan.popular ? 'border-2 border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-red-500/10' : 'border border-white/10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-semibold text-white">
          RECOMENDADO
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
        href={`https://wa.me/5351257656?text=Hola%2C%20me%20interesa%20la%20${encodeURIComponent(plan.name)}%20para%20mi%20restaurante%20(${encodeURIComponent(plan.price)})`}
        target="_blank" rel="noreferrer"
        className={`block w-full py-3 text-center rounded-xl font-semibold text-sm transition text-white ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/10'}`}
      >
        Elegir Plan
      </a>
    </div>
  );
}

function IdealFor() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade mt-10">
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
        <h4 className="font-semibold text-white text-lg mb-4">🍽️ Ideal para</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {restaurantTypes.map(type => (
            <span key={type} className="px-4 py-2 bg-white/10 rounded-full text-sm text-slate-300">{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
