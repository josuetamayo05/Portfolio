import { motion } from 'framer-motion';
import { siteData } from './data/siteData';
import { ChevronRight, MessageCircle} from "lucide-react";import { type Variants } from "framer-motion";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

// --- CONFIGURACIÓN DE ANIMACIONES ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1], // easeOut aprox
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- COMPONENTES DE SECCIÓN ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tighter text-white">
        JA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">CubanCode</span>
      </div>
      <a 
        href={siteData.brand.whatsapp} 
        target="_blank" rel="noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-dark-bg px-6 py-2 rounded-full font-semibold hover:bg-brand-cyan transition-colors"
      >
        Cotizar Proyecto <ChevronRight size={16} />
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
    {/* Efecto de luz de fondo */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow blur-[100px] rounded-full opacity-30 pointer-events-none"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.h1 
        initial="hidden" animate="visible" variants={fadeUp}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Impulsa tu negocio con <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
          tecnología de alto nivel.
        </span>
      </motion.h1>
      <motion.p 
        initial="hidden" animate="visible" variants={fadeUp}
        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
      >
        {siteData.hero.subtitle}
      </motion.p>
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href={siteData.brand.whatsapp} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-dark-bg font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
          {siteData.hero.ctaPrimary}
        </a>
        <a href="#servicios" className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-semibold rounded-full hover:bg-white/10 transition-all">
          {siteData.hero.ctaSecondary}
        </a>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicios" className="py-24 px-6 bg-dark-surface/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué podemos construir?</h2>
        <p className="text-slate-400">Soluciones digitales enfocadas en resultados para pymes y emprendedores.</p>
      </div>
      
      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {siteData.services.map((svc) => (
          <motion.div key={svc.id} variants={fadeUp} className="glass-panel p-8 rounded-2xl hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
              <svc.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
            <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Nuestro método de trabajo</h2>
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Línea conectora solo visible en desktop */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/50 to-brand-violet/0"></div>
        
        {siteData.process.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
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

const Footer = () => (
  <footer className="border-t border-white/10 bg-dark-surface/50 pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para escalar tu negocio?</h2>
        <p className="text-slate-400 max-w-md">Escríbenos y agendemos una consulta gratuita para analizar las necesidades de tu proyecto.</p>
      </div>
      <div className="flex justify-start md:justify-end">
        <a href={siteData.brand.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-brand-cyan transition-colors">
          <MessageCircle size={20} /> Iniciar chat en WhatsApp
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>© {new Date().getFullYear()} {siteData.brand.name} - {siteData.brand.tagline}. Todos los derechos reservados.</p>
      <div className="flex gap-4">
        <a href={siteData.brand.instagram} target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors" aria-label="Instagram"><FaInstagram  size={20} /></a>
        <a href={siteData.brand.facebook} target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors" aria-label="Facebook"><FaFacebook  size={20} /></a>
        <a href={siteData.brand.github} target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors" aria-label="GitHub"><FaGithub size={20} /></a>
      </div>
    </div>
  </footer>
);

const StickyMobileCTA = () => (
  <div className="md:hidden fixed bottom-6 right-6 z-50">
    <a 
      href={siteData.brand.whatsapp} 
      target="_blank" rel="noreferrer"
      className="flex items-center justify-center w-14 h-14 bg-brand-cyan text-dark-bg rounded-full shadow-[0_4px_20px_rgba(0,240,255,0.4)]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;