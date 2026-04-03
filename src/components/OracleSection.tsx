import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tarotCards = [
  { symbol: '☀️', name: 'O Sol', meaning: 'Sucesso, vitalidade e clareza iluminam seu caminho.' },
  { symbol: '🌙', name: 'A Lua', meaning: 'Confie na intuição. Mistérios serão revelados em breve.' },
  { symbol: '⭐', name: 'A Estrela', meaning: 'Esperança renovada. A cura interior está em curso.' },
  { symbol: '🔥', name: 'A Torre', meaning: 'Transformação radical. Do caos nasce a reconstrução.' },
  { symbol: '💀', name: 'A Morte', meaning: 'Fim de um ciclo. Renascimento e novos começos.' },
];

const oracleTypes = [
  'Tarot de Marselha',
  'Oráculo dos Anjos',
  'Runas Nórdicas',
  'Búzios',
];

const OracleSection = () => {
  const [revealed, setRevealed] = useState(false);
  const [activeOracle, setActiveOracle] = useState(0);
  const [card, setCard] = useState(tarotCards[0]);

  const handleReveal = () => {
    const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setCard(random);
    setRevealed(true);
    setTimeout(() => setRevealed(false), 5000);
  };

  return (
    <section id="oraculo" className="py-32 px-6 md:px-12 bg-surface-2">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:text-left text-center"
        >
          <h2 className="section-title text-[clamp(2rem,3.5vw,3rem)]">
            Consulte o <em className="italic text-amber">Oráculo</em>
          </h2>
          <p className="section-body mb-5">
            Escolha seu oráculo e tire uma carta. Uma mensagem do universo espera por você.
          </p>
          <div className="flex flex-col gap-2 mb-7 max-w-sm mx-auto lg:mx-0">
            {oracleTypes.map((type, i) => (
              <button
                key={type}
                onClick={() => setActiveOracle(i)}
                className={`flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.13em] uppercase text-left border px-4 py-3 cursor-pointer transition-all duration-300
                  ${activeOracle === i ? 'bg-amber/[0.08] border-amber/40 text-amber' : 'bg-transparent border-foreground/[0.07] text-foreground/45 hover:bg-amber/[0.05] hover:border-amber/30 hover:text-amber'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${activeOracle === i ? 'bg-amber' : 'bg-amber/30'}`} />
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Card deck */}
          <div
            className="relative w-[180px] h-[300px] cursor-pointer"
            style={{ perspective: '900px' }}
            onClick={handleReveal}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-[180px] h-[300px] rounded-lg border border-amber/25 transition-all duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: revealed && i === 2
                    ? 'rotate(0deg) rotateY(180deg) translateY(-8px)'
                    : `rotate(${-8 + i * 4}deg) translateX(${-16 + i * 8}px)`,
                  boxShadow: revealed && i === 2
                    ? '0 24px 80px rgba(0,0,0,0.8), 0 0 40px hsl(30 55% 50% / 0.2)'
                    : 'none',
                  zIndex: i,
                }}
              >
                {/* Back */}
                <div
                  className="absolute inset-0 rounded-lg flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="absolute inset-2 border border-amber/20 rounded" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 8px, hsl(30 55% 50% / 0.025) 8px, hsl(30 55% 50% / 0.025) 9px)' }} />
                  <span className="text-4xl relative z-[1] drop-shadow-[0_0_12px_hsl(var(--amber)/0.5)]">✦</span>
                </div>
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-5 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #1e1008, #0a0800)',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <span className="text-5xl mb-3 drop-shadow-[0_0_10px_hsl(var(--amber)/0.6)]">{card.symbol}</span>
                  <span className="font-display text-xs font-semibold tracking-[0.16em] text-amber mb-2">{card.name}</span>
                  <span className="font-display italic text-[0.78rem] text-foreground/55 leading-relaxed">{card.meaning}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleReveal} className="pill-button text-[0.68rem]">
            {revealed ? 'Tirar Outra Carta' : 'Revelar Carta'}
          </button>

          <AnimatePresence>
            {revealed && (
              <motion.p
                className="font-display italic text-[0.95rem] text-amber/80 text-center max-w-[200px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {card.meaning}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OracleSection;
