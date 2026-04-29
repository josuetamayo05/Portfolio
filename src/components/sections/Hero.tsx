import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";
import { fadeUp } from "../../lib/motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow blur-[100px] rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {siteData.hero.title.split(".")[0]}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
            {siteData.hero.title.split(".").slice(1).join(",").trim() || "Tecnología de alto nivel."}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          {siteData.hero.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteData.brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-dark-bg font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            {siteData.hero.ctaPrimary}
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            {siteData.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}