import { motion } from 'framer-motion';
import ebookCover from '@/assets/ebook-cover.jpg';

const courses = [
  {
    season: '1ª Temporada',
    title: 'Sementes Históricas',
    desc: 'Raízes da Bruxaria, Mistérios Femininos e Masculinos, Origens Celtas, Sacerdotisas & Druidas, Era da Inquisição e Tradições Ancestrais.',
    lessons: '12 aulas',
    icon: '🌙',
  },
  {
    season: '2ª Temporada',
    title: 'Sobrenatural',
    desc: 'Reinos e Planos Existenciais, Plano Astral, Mediunidade, Forma-Pensamento, Viagem Astral, Chakras, Poder Psíquico e Leis Herméticas.',
    lessons: '16 aulas',
    icon: '✨',
  },
  {
    season: '3ª Temporada',
    title: 'Mistérios do Caldeirão',
    desc: 'Magia com Velas, Cordas, Poções, Rituais, Sabbats, Esbats, Nome Mágico, Círculo Sagrado, Magia Herbal e Ritos de Passagem.',
    lessons: '30 aulas',
    icon: '🔮',
  },
];

const EbooksSection = () => {
  return (
    <section id="ebooks" className="py-32 px-6 md:px-12 bg-surface-2 text-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--amber)) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--amber)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="section-eyebrow">Conhecimento Sagrado</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          Curso de <em className="italic text-amber">Iniciação à Bruxaria</em>
        </h2>
        <p className="text-sm text-foreground/50 max-w-2xl mx-auto mt-3 leading-relaxed">
          Fruto de mais de 20 anos de experiência e estudos. 58 aulas de conteúdo original divididas em 3 temporadas.
          <br />Curso 100% online e vitalício com certificado digital de conclusão.
        </p>
      </motion.div>

      {/* Price highlight */}
      <motion.div
        className="relative z-10 mt-10 mb-14"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="inline-flex flex-col items-center gap-2 px-10 py-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(200 ,160, 80, 0.08) 0%, rgba(200, 160, 80, 0.03) 100%)',
            border: '1px solid rgba(200, 160, 80, 0.15)',
          }}
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground/40 font-medium">Investimento</span>
          <span className="font-display text-3xl font-bold text-amber">R$ 497,00</span>
          <span className="text-xs text-foreground/50">ou 6x de R$ 93,24 no cartão</span>
          <span className="text-[0.6rem] text-foreground/30 mt-1">7 dias de garantia incondicional</span>
        </div>
      </motion.div>

      {/* 3 Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto relative z-10">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(200,160,80,0.08)]"
              style={{
                background: 'linear-gradient(160deg, rgba(20, 18, 14, 0.95), rgba(8, 8, 12, 0.98))',
                border: '1px solid rgba(200, 160, 80, 0.1)',
              }}
            >
              {/* Cover Image */}
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={ebookCover}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[0.35] transition-all duration-700 group-hover:brightness-[0.45] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

                {/* Season badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.6rem] tracking-[0.2em] uppercase font-medium"
                  style={{
                    background: 'rgba(200, 160, 80, 0.12)',
                    border: '1px solid rgba(200, 160, 80, 0.25)',
                    color: '#c8a050',
                  }}
                >
                  {course.season}
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {course.icon}
                </div>

                {/* Lessons badge */}
                <div className="absolute bottom-3 right-4 text-[0.6rem] tracking-[0.15em] uppercase text-foreground/40 font-medium">
                  {course.lessons}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-amber transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Ornamental divider */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-[1px]" style={{ background: 'linear-gradient(90deg, #c8a050, transparent)' }} />
                  <div className="w-1 h-1 rotate-45" style={{ border: '1px solid rgba(200, 160, 80, 0.4)' }} />
                  <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(200, 160, 80, 0.2), transparent)' }} />
                </div>

                <p className="text-[0.78rem] leading-relaxed text-foreground/50 font-light">
                  {course.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-14 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://pay.hotmart.com/H43585626D?off=49lmfz3x&sck=HOTMART_PRODUCT_PAGE&checkoutMode=0&bid=1642725761390"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-display font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,160,80,0.25)]"
          style={{
            background: 'linear-gradient(135deg, #c8a050, #a07830)',
            color: '#0a0a0f',
          }}
        >
          Adquira Agora Mesmo
          <span className="text-lg">→</span>
        </a>
        <p className="text-[0.65rem] text-foreground/30 mt-3 tracking-wide">
          Acesso imediato · Suporte por email · Certificado incluso
        </p>
      </motion.div>

      {/* Vantagens */}
      <motion.div
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-[1000px] mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        {[
          { icon: '🎓', label: 'Certificado Digital' },
          { icon: '♾️', label: 'Acesso Vitalício' },
          { icon: '📱', label: '100% Online' },
          { icon: '🎬', label: '58 Aulas' },
          { icon: '🛡️', label: '7 Dias Garantia' },
          { icon: '📜', label: 'Conteúdo Original' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1.5 py-3">
            <span className="text-xl opacity-60">{item.icon}</span>
            <span className="text-[0.6rem] tracking-[0.12em] uppercase text-foreground/40 font-medium text-center leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default EbooksSection;
