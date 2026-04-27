import { useScrollFade } from '../hooks/useScrollFade';

const testimonials = [
  {
    stars: 5,
    text: '"Mi tienda online quedó increíble. Los clientes ahora ven todo solos y me escriben con el pedido listo. Me ahorra horas de trabajo cada día."',
    name: 'María G.',
    role: 'Tienda de ropa',
    avatar: 'M',
    color: 'from-blue-500 to-purple-500',
  },
  {
    stars: 5,
    text: '"Súper profesional y rápido. Mi landing page genera confianza y ahora recibo muchos más mensajes de clientes interesados en mis servicios."',
    name: 'Carlos R.',
    role: 'Servicios de limpieza',
    avatar: 'C',
    color: 'from-green-500 to-emerald-500',
  },
  {
    stars: 5,
    text: '"El panel es facilísimo de usar. Yo misma actualizo los precios sin ayuda. La inversión valió totalmente la pena."',
    name: 'Laura M.',
    role: 'Mipyme de accesorios',
    avatar: 'L',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Testimonials() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-purple-400 mb-2 block">// TESTIMONIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Lo que Dicen <span className="gradient-text">Mis Clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref } = useScrollFade();
            return (
              <div key={t.name} ref={ref} className="scroll-fade bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-glow" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 text-yellow-400 mb-4 text-sm">{'★'.repeat(t.stars)}</div>
                <p className="text-slate-300 mb-5 text-sm leading-relaxed italic">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center font-bold text-white`}>{t.avatar}</div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
