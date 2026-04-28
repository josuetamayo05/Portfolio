import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motion";

type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-400">Respuestas rápidas antes de cotizar.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {items.map((it) => (
            <motion.details
              key={it.q}
              variants={fadeUp}
              className="glass-panel rounded-2xl p-6 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-semibold text-white">{it.q}</span>
                <span className="text-brand-cyan transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-slate-400 leading-relaxed">{it.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}