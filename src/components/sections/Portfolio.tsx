import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { siteData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trabajos y ejemplos
          </h2>
          <p className="text-slate-400">
            Una muestra de proyectos (puedo enseñar demos privadas si lo prefieres).
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteData.projects.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-brand-cyan/40 transition-all"
            >
              <div className="aspect-[16/9] bg-dark-border/30">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20" />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  {p.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-dark-bg border border-white/10 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.tech?.length ? (
                  <p className="text-xs text-slate-500 mt-4">
                    Tech: {p.tech.join(" • ")}
                  </p>
                ) : null}

                <div className="flex gap-3 mt-6">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-dark-bg font-bold"
                    >
                      Ver demo <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">
                      Demo bajo solicitud
                    </span>
                  )}

                  {p.repoUrl ? (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-bg border border-white/10 text-white font-semibold hover:border-brand-cyan/40 transition-all"
                    >
                      Código <FaGithub size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}