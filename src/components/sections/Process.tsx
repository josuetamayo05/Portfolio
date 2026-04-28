import { siteData } from "../../data/siteData";

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Nuestro método de trabajo
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/50 to-brand-violet/0" />

          {siteData.process.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-dark-bg border border-brand-cyan text-brand-cyan flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}