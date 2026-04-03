import { motion } from 'framer-motion';
import ebookCover from '@/assets/ebook-cover.jpg';

const ebooks = [
  { tag: 'Tarot · Iniciante', title: 'Tarot Desvendado — Guia Completo', price: 'R$ 47,00', pages: '180 págs · PDF + EPUB' },
  { tag: 'Magia · Rituais', title: 'Magia Lunar — 13 Rituais', price: 'R$ 37,00', pages: '120 págs · PDF' },
  { tag: 'Búzios · Orixás', title: 'Búzios para Iniciantes', price: 'R$ 55,00', pages: '200 págs · PDF + áudios' },
  { tag: 'Ervas · Magia Natural', title: 'Ervas Sagradas — Guia Prático', price: 'R$ 42,00', pages: '150 págs · PDF' },
];

const EbooksSection = () => {
  return (
    <section id="ebooks" className="py-32 px-6 md:px-12 bg-surface-2 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Conhecimento Sagrado</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          Ebooks & Guias <em className="italic text-amber">da Dana Luna</em>
        </h2>
        <p className="text-sm text-foreground/50 max-w-xl mx-auto">Sabedoria condensada em formato digital para você aprender no seu ritmo.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mt-12">
        {ebooks.map((book, i) => (
          <motion.div
            key={book.title}
            className="cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="aspect-[2/3] relative overflow-hidden border border-foreground/[0.07] mb-4 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[20px_20px_60px_rgba(0,0,0,0.8),0_0_30px_hsl(var(--amber)/0.12)]" style={{ background: 'linear-gradient(160deg, #1e1e1e, #111)' }}>
              <img src={ebookCover} alt={book.title} loading="lazy" className="w-full h-full object-cover grayscale brightness-[0.6] transition-all duration-400 group-hover:grayscale-[0.7] group-hover:brightness-[0.55]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-5">
                <span className="text-[0.55rem] font-medium tracking-[0.2em] uppercase text-amber mb-1">{book.tag}</span>
                <span className="font-display text-[0.9rem] font-semibold text-foreground leading-snug">{book.title}</span>
              </div>
            </div>
            <p className="font-display text-lg text-foreground mb-1">{book.price}</p>
            <p className="text-[0.7rem] text-muted-foreground mb-3">{book.pages}</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <button className="pill-button text-[0.62rem] px-4 py-1.5">Ver Mais</button>
              <button className="pill-button-filled text-[0.62rem] px-4 py-1.5">Comprar</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EbooksSection;
