import { motion } from 'framer-motion';

const testimonials = [
  {
    avatar: '🌿',
    text: '"A Dana tocou em coisas que ninguém sabia, mas que eu sentia há meses. A leitura foi cirúrgica — e o acolhimento, absolutamente raro. Saí sabendo exatamente o que precisava fazer."',
    name: 'Camila R.',
    loc: 'São Paulo, SP · Tarot',
  },
  {
    avatar: '🌙',
    text: '"Fiz o curso de Iniciação à Bruxaria e me apaixonei. Didática impecável, conteúdo profundo e uma sensação de que a Dana realmente transmite sabedoria ancestral. Valeu cada centavo."',
    name: 'Larissa M.',
    loc: 'Porto Alegre, RS · Curso',
  },
  {
    avatar: '✨',
    text: '"A sessão de hipnose foi transformadora. Em 90 minutos desbloquiei algo que carregava há anos. A Dana tem um dom real para guiar o inconsciente com segurança e respeito."',
    name: 'Fernanda A.',
    loc: 'Curitiba, PR · Hipnose',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background text-center relative overflow-hidden">
      {/* Planet decoration */}
      <div
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-40 pointer-events-none blur-sm"
        style={{ background: 'radial-gradient(circle at 35% 35%, #8a4a1a, #2a0d00 60%, #0a0000)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Vozes Reais</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          O Que Minhas <em className="italic text-amber">Consulentes Dizem</em>
        </h2>
        <p className="text-sm text-foreground/50 max-w-xl mx-auto">Histórias de transformação de quem vivenciou a magia.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[1100px] mx-auto mt-12 relative z-[1]">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className={`p-10 ${i < 2 ? 'border-r border-foreground/[0.06] max-md:border-r-0 max-md:border-b' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Avatar with rays */}
            <div className="relative inline-block mb-8">
              <div className="w-[70px] h-[70px] rounded-full border-2 border-amber/40 flex items-center justify-center text-3xl grayscale-[0.6]" style={{ background: 'linear-gradient(135deg, #2a2a2a, #111)' }}>
                {t.avatar}
              </div>
              <div className="absolute inset-[-14px] rounded-full" style={{ background: 'repeating-conic-gradient(from 0deg, hsl(30 55% 50% / 0.25) 0deg 2deg, transparent 2deg 14deg)' }} />
            </div>

            <p className="font-display italic text-[0.92rem] leading-[1.85] text-foreground/65 mb-6">{t.text}</p>
            <p className="font-display text-base text-amber mb-1">{t.name}</p>
            <div className="w-8 h-px bg-foreground/20 mx-auto my-2" />
            <p className="text-[0.7rem] tracking-[0.15em] text-muted-foreground">{t.loc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
