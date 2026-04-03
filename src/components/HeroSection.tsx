import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-36 pb-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(0 0% 3.5%) 0%, transparent 40%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) saturate(0.5)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-display italic text-base text-foreground/60 mb-5 tracking-wide">
          Sacerdotisa de Ísis · Tradição Misteriosa Familiar
        </p>
        <h1 className="font-display text-[clamp(3.2rem,7vw,6.5rem)] font-bold leading-[1.05] mb-8">
          <span className="text-foreground">Seu caminho é{'\n'}iluminado pela{'\n'}</span>
          <em className="italic text-amber">magia ancestral.</em>
        </h1>
        <a href="#sobre" className="pill-button inline-flex">
          Descobrir Mais
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[0.58rem] tracking-[0.25em] uppercase text-muted-foreground">Rolar</span>
        <div className="w-px h-10 bg-gradient-to-b from-amber to-transparent animate-scroll-pulse" />
      </div>

      {/* Dot nav */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-2 h-2 rounded-full border border-amber cursor-pointer transition-colors duration-300 ${i === 0 ? 'bg-amber' : 'bg-transparent'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
