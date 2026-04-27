import { useScrollFade } from '../hooks/useScrollFade';

export default function About() {
  const { ref: leftRef } = useScrollFade();
  const { ref: rightRef } = useScrollFade();

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className="scroll-fade">
            <span className="text-sm font-mono text-purple-400 mb-2 block">// SOBRE MÍ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Desarrollador <span className="gradient-text">Full Stack</span> Cubano
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Soy estudiante de <strong className="text-white">Ciencias de la Computación</strong> en la{' '}
              <strong className="text-white">Universidad de La Habana</strong>, apasionado por crear soluciones digitales completas.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Trabajo con el stack completo: frontend con <strong className="text-white">React</strong>, apps móviles con{' '}
              <strong className="text-white">Flutter</strong>, backend con <strong className="text-white">Node.js y Python</strong>,
              y bases de datos SQL y NoSQL.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Entiendo las necesidades de los negocios cubanos:{' '}
              <strong className="text-white">soluciones prácticas, sin complicaciones, que funcionen con nuestra realidad</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: '🎓', value: 'CS', label: 'Ciencias de la Computación' },
                { icon: '🏫', value: 'UH', label: 'Universidad de La Habana' },
                { icon: '⚡', value: 'Full', label: 'Stack Developer' },
                { icon: '📱', value: 'iOS/And', label: 'Flutter Apps' },
                { icon: '⚙️', value: 'API', label: 'Backend & Servers' },
                { icon: '💯', value: '100%', label: 'Clientes satisfechos' },
              ].map(item => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="text-sm font-bold gradient-text">{item.value}</div>
                  <div className="text-[10px] text-slate-400 leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="scroll-fade" style={{ transitionDelay: '200ms' }}>
            <div className="code-block rounded-2xl p-6 font-mono text-sm">
              <p className="text-slate-500 mb-4">// developer.ts</p>
              <p className="text-white"><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {'{'}</p>
              <p className="text-white pl-4"><span className="text-green-300">name</span>: <span className="text-amber-300">"JA CubanCode"</span>,</p>
              <p className="text-white pl-4"><span className="text-green-300">location</span>: <span className="text-amber-300">"La Habana, Cuba 🇨🇺"</span>,</p>
              <p className="text-white pl-4"><span className="text-green-300">university</span>: <span className="text-amber-300">"Universidad de La Habana"</span>,</p>
              <p className="text-white pl-4"><span className="text-green-300">frontend</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Tailwind"</span>, <span className="text-amber-300">"TypeScript"</span>],</p>
              <p className="text-white pl-4"><span className="text-green-300">mobile</span>: [<span className="text-cyan-300">"Flutter"</span>, <span className="text-cyan-300">"Dart"</span>],</p>
              <p className="text-white pl-4"><span className="text-green-300">backend</span>: [<span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"Python"</span>, <span className="text-green-300">"FastAPI"</span>],</p>
              <p className="text-white pl-4"><span className="text-green-300">database</span>: [<span className="text-pink-300">"PostgreSQL"</span>, <span className="text-pink-300">"Firebase"</span>, <span className="text-pink-300">"MongoDB"</span>],</p>
              <p className="text-white pl-4"><span className="text-green-300">devops</span>: [<span className="text-slate-300">"Docker"</span>, <span className="text-slate-300">"Railway"</span>, <span className="text-slate-300">"Vercel"</span>],</p>
              <p className="text-white pl-4"><span className="text-green-300">available</span>: <span className="text-purple-400">true</span></p>
              <p className="text-white">{'}'}</p>
              <p className="mt-3 text-white"><span className="text-purple-400">export default</span> <span className="text-blue-300">developer</span>;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
