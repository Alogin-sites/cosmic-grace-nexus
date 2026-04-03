import { motion } from 'framer-motion';

const rituais = [
  { icon: '💫', tag: 'Alta Magia', name: 'Despertar do Desejo & Domínio Mental', desc: 'Ativação do poder de atração e foco mental coletivo.' },
  { icon: '🛡️', tag: 'Proteção', name: 'Fechamento de Corpo e Proteção', desc: 'Blindagem energética contra influências negativas.' },
  { icon: '💕', tag: 'Amor', name: 'Alta Magia Amorosa', desc: 'Para abrir caminhos no amor e fortalecer vínculos.' },
  { icon: '💰', tag: 'Prosperidade', name: 'Abertura de Caminho & Prosperidade', desc: 'Para destravar a abundância e atrair oportunidades.' },
  { icon: '🔥', tag: 'Feminino Sagrado', name: 'Empoderamento com a Deusa Lilith', desc: 'Despertar da força e independência feminina.' },
  { icon: '🌙', tag: 'Hécate · Limpeza', name: 'Limpeza Espiritual com Hécate', desc: 'Purificação profunda e afastamento de negatividades.' },
  { icon: '🌹', tag: 'Amor · Limpeza', name: 'Limpeza nos Caminhos do Amor', desc: 'Remove bloqueios que travam o amor e os afetos.' },
  { icon: '❤️', tag: 'Apoio', name: 'Grupo de Apoio no Amor', desc: 'Espaço acolhedor para dificuldades afetivas.' },
];

const RituaisSection = () => {
  return (
    <section id="rituais" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      {/* Left - Info */}
      <motion.div
        className="px-8 lg:px-20 py-16 lg:py-24 flex flex-col justify-center bg-background"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Grupos Abertos · Gratuitos</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          Rituais <em className="italic text-amber">Coletivos</em>
        </h2>
        <p className="section-body mb-8">
          Comunidades abertas no WhatsApp para quem quer vivenciar a magia em grupo. Acesso gratuito — basta entrar em contato.
        </p>
        <a href="https://wa.me/5551989182397" target="_blank" rel="noopener noreferrer" className="pill-button-filled w-fit">
          Participar pelo WhatsApp
        </a>
      </motion.div>

      {/* Right - Grid */}
      <div className="bg-surface-2 grid grid-cols-1 sm:grid-cols-2">
        {rituais.map((rit, i) => (
          <motion.div
            key={rit.name}
            className="p-6 lg:p-8 border border-foreground/[0.05] transition-colors duration-300 cursor-pointer relative overflow-hidden group hover:bg-amber/[0.04]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="text-2xl mb-3 drop-shadow-[0_0_8px_hsl(var(--amber)/0.4)]">{rit.icon}</div>
            <div className="text-[0.58rem] font-medium tracking-[0.22em] uppercase text-amber mb-1">{rit.tag}</div>
            <h3 className="font-display text-[0.95rem] font-semibold text-foreground mb-2 leading-snug">{rit.name}</h3>
            <p className="text-[0.78rem] leading-7 text-foreground/45">{rit.desc}</p>
            <div className="mt-3 flex items-center gap-1.5 text-[0.6rem] font-medium tracking-[0.2em] uppercase text-amber">
              <span className="w-3 h-px bg-amber" />
              Entrada Gratuita
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RituaisSection;
