import { motion } from 'framer-motion';
import heroFace from '@/assets/hero-face.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-36 pb-24 overflow-hidden">
      {/* Woman's face - right side with opacity */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url(${heroFace})`,
          backgroundSize: '65%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          maskImage: 'linear-gradient(to left, black 30%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 70%)',
        }}
      />

      {/* Dark landscape silhouette at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-[25%]"
        style={{
          background: 'linear-gradient(to top, hsl(0 0% 3.5%) 0%, hsl(0 0% 3.5% / 0.8) 40%, transparent 100%)',
        }}
      />

      {/* Subtle amber glow at bottom horizon */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[30%]"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(30 55% 20% / 0.25), transparent)',
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
          Prever o Futuro
        </p>
        <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.1] mb-8">
          <span className="text-foreground">Seu caminho é iluminado por um </span>
          <em className="italic text-amber">mapa de estrelas.</em>
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
