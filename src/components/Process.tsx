import { useScrollFade } from '../hooks/useScrollFade';

const steps = [
  { n: '01', title: 'Conversamos', desc: 'Me cuentas tu idea, analizamos opciones y definimos el alcance del proyecto.', icon: '💬', color: 'from-blue-500 to-purple-500' },
  { n: '02', title: 'Diseñamos', desc: 'Creamos el diseño visual y la arquitectura técnica antes de escribir código.', icon: '🎨', color: 'from-purple-500 to-pink-500' },
  { n: '03', title: 'Desarrollamos', desc: 'Codifico tu proyecto con las mejores prácticas, tecnologías modernas y calidad.', icon: '⚙️', color: 'from-pink-500 to-red-500' },
  { n: '04', title: 'Revisamos', desc: 'Lo revisamos juntos, hacemos ajustes y pruebas hasta que quede perfecto.', icon: '🔍', color: 'from-amber-500 to-orange-500' },
  { n: '05', title: 'Publicamos', desc: 'Tu proyecto listo en producción, funcionando y optimizado para usuarios reales.', icon: '🚀', color: 'from-green-500 to-emerald-500' },
  { n: '06', title: 'Soporte', desc: 'Seguimiento post-lanzamiento, correcciones y mejoras continuas según necesidades.', icon: '🛠️', color: 'from-teal-500 to-cyan-500' },
];

export default function Process() {
  const { ref: titleRef } = useScrollFade();
  return (
    <section id="proceso" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="scroll-fade text-center mb-14">
          <span className="text-sm font-mono text-purple-400 mb-2 block">// PROCESO</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Cómo <span className="gradient-text">Trabajamos</span>?
          </h2>
          <p className="text-slate-400 text-lg">Simple, transparente y enfocado en resultados</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const { ref } = useScrollFade();
            return (
              <div key={step.n} ref={ref} className="scroll-fade bg-white/5 border border-white/10 rounded-2xl p-6 card-glow" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-bold text-slate-700">{step.n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-10 hidden md:block">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-amber-500 via-green-500 to-cyan-500 rounded-full max-w-4xl mx-auto opacity-40" />
        </div>

        {/* Guarantee */}
        <Guarantee />
      </div>
    </section>
  );
}

function Guarantee() {
  const { ref } = useScrollFade();
  return (
    <div ref={ref} className="scroll-fade mt-14">
      <div className="gradient-border">
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-bold text-white mb-2">Entrega Puntual</h3>
              <p className="text-slate-400 text-sm">Los plazos acordados se respetan. Sin sorpresas ni excusas.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-bold text-white mb-2">Revisiones Incluidas</h3>
              <p className="text-slate-400 text-sm">Hasta que quede perfecto. No cobro extra por ajustes razonables.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-white mb-2">Comunicación Directa</h3>
              <p className="text-slate-400 text-sm">Hablas conmigo directamente. Sin intermediarios ni procesos lentos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
