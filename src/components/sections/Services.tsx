import { motion } from "framer-motion";
import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../lib/motion";

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué podemos construir?
          </h2>
          <p className="text-slate-400">
            Soluciones digitales enfocadas en resultados para pymes y emprendedores.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteData.services.map((svc) => {
            const Icon = svc.icon as unknown as ElementType;

            return (
              <motion.div key={svc.slug} variants={fadeUp}>
                <Link to={`/servicios/${svc.slug}`} className="block h-full">
                  <div className="glass-panel p-8 rounded-2xl hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{svc.desc}</p>

                    <div className="mt-6 text-brand-cyan font-semibold">
                      Ver detalles →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}