const tags = [
  { label: 'Tiendas Online', color: 'bg-blue-500/20 text-blue-300' },
  { label: 'Apps Web', color: 'bg-purple-500/20 text-purple-300' },
  { label: 'Flutter Móvil', color: 'bg-cyan-500/20 text-cyan-300' },
  { label: 'Backend & APIs', color: 'bg-green-500/20 text-green-300' },
  { label: 'E-commerce', color: 'bg-pink-500/20 text-pink-300' },
  { label: 'Software a Medida', color: 'bg-amber-500/20 text-amber-300' },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300 font-mono">Disponible para proyectos</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
              Desarrollo de
              <span className="gradient-text"> Software</span>
              <br />Profesional
            </h1>

            <p className="text-xl text-slate-300 mb-3 leading-relaxed">
              Transformo tus ideas en <strong className="text-white">soluciones digitales</strong> que realmente funcionan.
            </p>
            <p className="text-base text-slate-400 mb-6">
              Web · Móvil · Backend · E-commerce · Restaurantes
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {tags.map(t => (
                <span key={t.label} className={`service-tag ${t.color}`}>{t.label}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5351257656?text=Hola%2C%20tengo%20un%20proyecto%20en%20mente%20y%20me%20gustar%C3%ADa%20conversarlo"
                target="_blank" rel="noreferrer"
                className="group px-7 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg"
              >
                <WhatsAppIcon />
                Hablemos de tu Proyecto
              </a>
              <button
                onClick={() => handleScroll('#servicios')}
                className="px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2 text-white"
              >
                Ver Servicios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <Stat value="100%" label="Satisfacción" />
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <Stat value="3-7" label="Días de entrega" />
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <Stat value="24/7" label="Tu app activa" />
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <Stat value="Full" label="Stack Developer" />
            </div>
          </div>

          {/* Terminal */}
          <div className="flex justify-center float-animation">
            <div className="terminal w-full max-w-md">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-slate-400 ml-2 font-mono">ja-cubancode ~ dev</span>
              </div>
              <div className="terminal-body text-sm text-white">
                <p className="text-green-400">$ <span className="text-white">whoami</span></p>
                <p className="text-slate-300 mt-1 mb-3">→ Full Stack Developer · Cuba 🇨🇺</p>

                <p className="text-green-400">$ <span className="text-white">cat stack.json</span></p>
                <div className="text-slate-300 mt-2 mb-3 pl-2 border-l-2 border-purple-500">
                  <p className="text-purple-400">{'{'}</p>
                  <p className="pl-4"><span className="text-blue-400">"frontend"</span>: <span className="text-amber-300">"React, Tailwind"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"mobile"</span>: <span className="text-cyan-300">"Flutter (iOS/Android)"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"backend"</span>: <span className="text-green-300">"Node.js, Python, APIs"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"database"</span>: <span className="text-pink-300">"Firebase, PostgreSQL"</span>,</p>
                  <p className="pl-4"><span className="text-blue-400">"ecommerce"</span>: <span className="text-orange-300">"Stripe, WhatsApp"</span></p>
                  <p className="text-purple-400">{'}'}</p>
                </div>

                <p className="text-green-400">$ <span className="text-white">npm run start-project</span></p>
                <p className="text-yellow-400 mt-1">⚡ Analizando tu idea...</p>
                <p className="text-green-400 mt-1">✓ Solución lista para desarrollar</p>
                <p className="text-slate-400 mt-3 typing-effect">_</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6 font-mono">// tecnologías</p>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map(tech => (
              <div key={tech.name} className="flex items-center gap-2 text-slate-400 opacity-70 hover:opacity-100 transition">
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Flutter', icon: '💙' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Docker', icon: '🐳' },
];
