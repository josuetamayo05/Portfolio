import { useScrollFade } from '../hooks/useScrollFade';

const problems = [
  { icon: '😫', title: 'Pierdes Tiempo', desc: 'Enviando fotos y precios uno por uno a cada cliente que pregunta' },
  { icon: '😕', title: 'Clientes Confundidos', desc: 'No saben precios, tallas disponibles ni cómo hacer el pedido' },
  { icon: '💸', title: 'Ventas Perdidas', desc: 'Clientes que no esperan tu respuesta y compran en otro lado' },
  { icon: '📉', title: 'Imagen Poco Profesional', desc: 'Tu negocio se ve informal frente a la competencia' },
];

export default function ProblemSection() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-10">
          <span className="text-sm font-mono text-red-400 mb-2 block">// EL PROBLEMA</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            ¿Te Suena <span className="gradient-text">Familiar</span>?
          </h2>
          <p className="text-slate-400 text-lg">Los problemas de no tener presencia digital profesional</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problems.map((p, i) => {
            const { ref } = useScrollFade();
            return (
              <div key={p.title} ref={ref} className="scroll-fade bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center hover:bg-red-500/15 transition-all card-glow" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-semibold mb-2 text-white text-sm">{p.title}</h3>
                <p className="text-xs text-slate-400">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
