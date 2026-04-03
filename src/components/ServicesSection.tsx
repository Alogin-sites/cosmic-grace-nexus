import { motion } from 'framer-motion';
import tarotImg from '@/assets/services-tarot.jpg';
import hypnosisImg from '@/assets/services-hypnosis.jpg';
import energyImg from '@/assets/services-energy.jpg';

const services = [
  { icon: '🃏', name: 'Consulta Oracular & Vidência', desc: 'Tarot, vidência e espíritos guias revelam o que você precisa ver neste momento da sua jornada.', img: tarotImg },
  { icon: '🌊', name: 'Hipnose Terapêutica', desc: 'Acesse o inconsciente para curar traumas, liberar bloqueios e reprogramar crenças limitantes.', img: hypnosisImg },
  { icon: '⚡', name: 'Terapia Apométrica', desc: 'Desobsessão, limpeza energética e liberação de entidades. Trabalho profundo no campo áurico.', img: energyImg },
  { icon: '✨', name: 'Reiki', desc: 'Canalização de energia universal para reequilíbrio dos chakras, alívio de stress e ansiedade.', img: energyImg },
  { icon: '🌀', name: 'Vidas Passadas', desc: 'Acesse memórias de outras encarnações e compreenda padrões e missões da sua alma.', img: hypnosisImg },
  { icon: '🌹', name: 'Dança do Ventre', desc: 'Arte ancestral de reconexão com o feminino sagrado. Força, sensualidade e espiritualidade.', img: tarotImg },
];

const ServicesSection = () => {
  return (
    <section id="consultas" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden text-center">
      {/* Mandala bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none rounded-full border border-foreground">
        <div className="absolute inset-10 rounded-full border border-foreground" />
        <div className="absolute inset-[120px] rounded-full border border-foreground" />
      </div>

      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Consultas & Terapias</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)] mx-auto">
          Meus <em className="italic text-amber">Serviços</em>
        </h2>
        <p className="text-sm leading-relaxed text-foreground/50 max-w-xl mx-auto mt-3">
          Do tarot à hipnose, da apometria à vidência — um espaço sagrado para cada jornada de cura e autoconhecimento.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {services.map((svc, i) => (
          <motion.div
            key={svc.name}
            className="card-mystical p-0 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="h-40 relative overflow-hidden flex items-center justify-center border-b border-foreground/[0.06]">
              <img src={svc.img} alt={svc.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] transition-all duration-500 hover:brightness-[0.35] hover:scale-105" />
              <span className="relative z-[1] text-5xl drop-shadow-[0_0_12px_hsl(var(--amber)/0.5)]">{svc.icon}</span>
            </div>
            <div className="p-7">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{svc.name}</h3>
              <p className="text-[0.83rem] leading-7 text-foreground/50 mb-5">{svc.desc}</p>
              <button className="pill-button text-[0.65rem] px-5 py-2">Saiba Mais</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
