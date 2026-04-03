import { motion } from 'framer-motion';
import energyImg from '@/assets/services-energy.jpg';

const products = [
  { emoji: '🕯️', name: 'Vela Ritual Ísis', desc: 'Vela preparada com ervas e óleos sagrados.', price: 'R$ 89', badge: 'Popular', img: energyImg },
  { emoji: '🔮', name: 'Cristal Ametista', desc: 'Proteção espiritual e intuição ampliada.', price: 'R$ 120', img: energyImg },
  { emoji: '🌿', name: 'Kit Ervas Sagradas', desc: 'Seleção de ervas para banhos e defumações.', price: 'R$ 65', img: energyImg },
  { emoji: '📿', name: 'Amuleto de Proteção', desc: 'Amuleto consagrado para blindagem energética.', price: 'R$ 150', badge: 'Novo', img: energyImg },
];

const ShopSection = () => {
  return (
    <section id="loja" className="py-32 px-6 md:px-12 bg-background text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Loja Sagrada</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          Produtos <em className="italic text-amber">Ritualísticos</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto mt-12">
        {products.map((prod, i) => (
          <motion.div
            key={prod.name}
            className="bg-secondary border border-foreground/[0.06] overflow-hidden transition-all duration-500 cursor-pointer hover:translate-y-[-5px] hover:border-amber/30 hover:shadow-[0_16px_50px_rgba(0,0,0,0.7)] group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="h-44 relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a1a1a, #222)' }}>
              <img src={prod.img} alt={prod.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.45] transition-all duration-500 group-hover:scale-105 group-hover:brightness-[0.4]" />
              <span className="text-4xl relative z-[1] drop-shadow-[0_0_10px_hsl(var(--amber)/0.5)] transition-transform duration-400 group-hover:scale-110">{prod.emoji}</span>
              {prod.badge && (
                <span className="absolute top-2 left-2 z-[2] text-[0.5rem] font-semibold tracking-[0.15em] uppercase bg-amber text-background px-2 py-0.5 rounded-sm">{prod.badge}</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{prod.name}</h3>
              <p className="text-[0.74rem] leading-relaxed text-foreground/45 mb-3">{prod.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-amber">{prod.price}</span>
                <button className="pill-button text-[0.58rem] px-3 py-1.5 border-amber/40 text-amber/80 hover:bg-amber hover:text-background hover:border-amber">Adicionar</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
