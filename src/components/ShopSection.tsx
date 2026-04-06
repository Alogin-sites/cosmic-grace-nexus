import { motion } from 'framer-motion';
import MistBackground from './ui/mist-background';
import shopBg from '@/assets/shop-bg.png';


const products = [
  {
    name: 'Vela Ritual Ísis',
    desc: 'Vela artesanal preparada com ervas e óleos sagrados consagrados em ritual.',
    price: 'R$ 89,00',
    badge: 'Popular',
    category: 'Velas',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="90" rx="18" ry="6" fill="#c8a050" opacity="0.15"/>
      <rect x="32" y="40" width="16" height="50" rx="3" fill="url(#vela)" stroke="#c8a050" stroke-width="0.5"/>
      <line x1="40" y1="40" x2="40" y2="28" stroke="#c8a050" stroke-width="1"/>
      <path d="M40 28 C36 20 34 14 40 6 C46 14 44 20 40 28Z" fill="#c8a050" opacity="0.9"/>
      <path d="M40 24 C38 19 37 15 40 10 C43 15 42 19 40 24Z" fill="#fff" opacity="0.3"/>
      <defs><linearGradient id="vela" x1="32" y1="40" x2="48" y2="90"><stop stop-color="#3a2a18"/><stop offset="1" stop-color="#1a1410"/></linearGradient></defs>
    </svg>`,
  },
  {
    name: 'Cristal Ametista',
    desc: 'Pedra natural de alta vibração para proteção espiritual e intuição ampliada.',
    price: 'R$ 120,00',
    category: 'Cristais',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="88" rx="16" ry="5" fill="#9b59b6" opacity="0.15"/>
      <polygon points="40,12 56,50 52,80 28,80 24,50" fill="url(#cristal)" stroke="#9b59b6" stroke-width="0.5"/>
      <polygon points="40,12 48,45 40,78 32,45" fill="#9b59b6" opacity="0.15"/>
      <line x1="40" y1="12" x2="40" y2="78" stroke="#9b59b6" stroke-width="0.3" opacity="0.3"/>
      <line x1="24" y1="50" x2="56" y2="50" stroke="#9b59b6" stroke-width="0.3" opacity="0.3"/>
      <defs><linearGradient id="cristal" x1="24" y1="12" x2="56" y2="80"><stop stop-color="#2a1a3a"/><stop offset="1" stop-color="#1a1020"/></linearGradient></defs>
    </svg>`,
  },
  {
    name: 'Kit Ervas Sagradas',
    desc: 'Seleção de ervas colhidas na lua ideal para banhos ritualísticos e defumações.',
    price: 'R$ 65,00',
    category: 'Ervas',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="88" rx="14" ry="4" fill="#27ae60" opacity="0.15"/>
      <path d="M40 85 C40 60 25 50 20 35 C30 40 35 38 40 30 C45 38 50 40 60 35 C55 50 40 60 40 85Z" fill="url(#erva)" stroke="#27ae60" stroke-width="0.5"/>
      <line x1="40" y1="85" x2="40" y2="30" stroke="#27ae60" stroke-width="0.5" opacity="0.4"/>
      <path d="M40 55 C35 50 28 48 25 42" stroke="#27ae60" stroke-width="0.3" opacity="0.3" fill="none"/>
      <path d="M40 55 C45 50 52 48 55 42" stroke="#27ae60" stroke-width="0.3" opacity="0.3" fill="none"/>
      <defs><linearGradient id="erva" x1="20" y1="30" x2="60" y2="85"><stop stop-color="#1a2a18"/><stop offset="1" stop-color="#101a10"/></linearGradient></defs>
    </svg>`,
  },
  {
    name: 'Amuleto de Proteção',
    desc: 'Amuleto consagrado em ritual de lua cheia para blindagem energética pessoal.',
    price: 'R$ 150,00',
    badge: 'Novo',
    category: 'Amuletos',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="88" rx="14" ry="4" fill="#c8a050" opacity="0.15"/>
      <circle cx="40" cy="52" r="22" fill="none" stroke="#c8a050" stroke-width="0.5"/>
      <circle cx="40" cy="52" r="18" fill="url(#amuleto)" stroke="#c8a050" stroke-width="0.3"/>
      <polygon points="40,36 44,48 56,48 46,56 50,68 40,60 30,68 34,56 24,48 36,48" fill="none" stroke="#c8a050" stroke-width="0.5"/>
      <circle cx="40" cy="52" r="6" fill="none" stroke="#c8a050" stroke-width="0.3" opacity="0.5"/>
      <line x1="40" y1="30" x2="40" y2="20" stroke="#c8a050" stroke-width="0.5"/>
      <circle cx="40" cy="18" r="3" fill="none" stroke="#c8a050" stroke-width="0.5"/>
      <defs><linearGradient id="amuleto" x1="22" y1="34" x2="58" y2="70"><stop stop-color="#1a1510"/><stop offset="1" stop-color="#0a0a08"/></linearGradient></defs>
    </svg>`,
  },
  {
    name: 'Incenso Purificação',
    desc: 'Blend artesanal de resinas e ervas para limpeza e purificação do ambiente.',
    price: 'R$ 35,00',
    category: 'Incensos',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="90" rx="12" ry="4" fill="#c8a050" opacity="0.12"/>
      <rect x="38" y="45" width="4" height="45" rx="1" fill="#3a2a18" stroke="#c8a050" stroke-width="0.3"/>
      <path d="M40 45 C38 35 35 28 38 18 C39 22 40 20 40 15 C40 20 41 22 42 18 C45 28 42 35 40 45Z" fill="none" stroke="#c8a050" stroke-width="0.5" opacity="0.6"/>
      <path d="M40 38 C37 30 36 24 39 16" fill="none" stroke="#c8a050" stroke-width="0.3" opacity="0.3"/>
    </svg>`,
  },
  {
    name: 'Tarot Místico',
    desc: 'Baralho artesanal com 78 cartas ilustradas e manual de interpretação.',
    price: 'R$ 220,00',
    badge: 'Exclusivo',
    category: 'Oráculos',
    svg: `<svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="88" rx="18" ry="5" fill="#c8a050" opacity="0.12"/>
      <rect x="22" y="25" width="32" height="55" rx="3" fill="url(#tarot1)" stroke="#c8a050" stroke-width="0.5" transform="rotate(-8 38 52)"/>
      <rect x="26" y="22" width="32" height="55" rx="3" fill="url(#tarot2)" stroke="#c8a050" stroke-width="0.5" transform="rotate(4 42 50)"/>
      <circle cx="42" cy="46" r="8" fill="none" stroke="#c8a050" stroke-width="0.4" opacity="0.5"/>
      <path d="M42 40 L44 44 L48 44 L45 47 L46 51 L42 48 L38 51 L39 47 L36 44 L40 44Z" fill="#c8a050" opacity="0.3" stroke="#c8a050" stroke-width="0.3"/>
      <defs>
        <linearGradient id="tarot1" x1="22" y1="25" x2="54" y2="80"><stop stop-color="#1a1510"/><stop offset="1" stop-color="#0f0d0a"/></linearGradient>
        <linearGradient id="tarot2" x1="26" y1="22" x2="58" y2="77"><stop stop-color="#201a12"/><stop offset="1" stop-color="#0f0d0a"/></linearGradient>
      </defs>
    </svg>`,
  },
];

const ShopSection = () => {
  return (
    <section id="loja" className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Full background image — grayscale, no colors */}
      <img
        src={shopBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{
          filter: 'grayscale(1) brightness(0.2) contrast(1.1)',
        }}
      />

      {/* Dark gradient overlays for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(5,5,10,0.7) 0%, rgba(5,5,10,0.4) 30%, rgba(5,5,10,0.5) 70%, rgba(5,5,10,0.85) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,10,0.6) 100%)',
        }}
      />

      {/* Mist Background (WebGL) - Replacing Three.js Fog */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <MistBackground opacity={0.5} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="section-eyebrow">Loja Sagrada</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          Produtos <em className="italic text-amber">Ritualísticos</em>
        </h2>
        <p className="text-sm text-foreground/45 max-w-xl mx-auto mt-3 leading-relaxed">
          Itens consagrados e preparados artesanalmente para potencializar seus rituais e práticas espirituais.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[900px] mx-auto mt-14 relative z-10">
        {products.map((prod, i) => (
          <motion.div
            key={prod.name}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div
              className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:translate-y-[-6px] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(200,160,80,0.06)]"
              style={{
                background: 'linear-gradient(170deg, rgba(18, 16, 12, 0.95), rgba(8, 8, 12, 0.98))',
                border: '1px solid rgba(200, 160, 80, 0.08)',
              }}
            >
              {/* Badge */}
              {prod.badge && (
                <span
                  className="absolute top-3 left-3 z-10 text-[0.5rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: prod.badge === 'Novo' ? 'linear-gradient(135deg, #27ae60, #1e8449)' :
                                prod.badge === 'Exclusivo' ? 'linear-gradient(135deg, #9b59b6, #7d3c98)' :
                                'linear-gradient(135deg, #c8a050, #a07830)',
                    color: '#fff',
                  }}
                >
                  {prod.badge}
                </span>
              )}

              {/* Category tag */}
              <span className="absolute top-3 right-3 z-10 text-[0.5rem] tracking-[0.15em] uppercase text-foreground/25 font-medium">
                {prod.category}
              </span>

              {/* SVG Illustration */}
              <div className="h-[140px] md:h-[160px] flex items-center justify-center relative overflow-hidden">
                {/* Glow behind icon */}
                <div
                  className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                  style={{ background: 'radial-gradient(circle, rgba(200,160,80,0.3) 0%, transparent 70%)' }}
                />
                <div
                  className="w-16 h-20 md:w-20 md:h-24 relative z-[1] transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  dangerouslySetInnerHTML={{ __html: prod.svg }}
                />
              </div>

              {/* Content */}
              <div className="px-4 pb-5 pt-2 text-left">
                {/* Ornamental line */}
                <div className="w-full h-[1px] mb-4 opacity-40"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,80,0.3), transparent)' }}
                />

                <h3 className="font-display text-[0.85rem] font-semibold text-foreground mb-1.5 group-hover:text-amber transition-colors duration-300 leading-tight">
                  {prod.name}
                </h3>

                <p className="text-[0.68rem] leading-relaxed text-foreground/35 mb-4 line-clamp-2">
                  {prod.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold"
                    style={{ color: '#c8a050', textShadow: '0 0 20px rgba(200,160,80,0.2)' }}>
                    {prod.price}
                  </span>
                  <button
                    className="text-[0.55rem] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      border: '1px solid rgba(200,160,80,0.3)',
                      color: '#c8a050',
                      background: 'rgba(200,160,80,0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#c8a050';
                      e.currentTarget.style.color = '#0a0a0f';
                      e.currentTarget.style.borderColor = '#c8a050';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(200,160,80,0.05)';
                      e.currentTarget.style.color = '#c8a050';
                      e.currentTarget.style.borderColor = 'rgba(200,160,80,0.3)';
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA — Ver Loja Completa */}
      <motion.div
        className="mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-display font-semibold text-sm tracking-wide transition-all duration-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,160,80,0.2)] group"
          style={{
            background: 'linear-gradient(135deg, rgba(200,160,80,0.1), rgba(200,160,80,0.04))',
            border: '1px solid rgba(200,160,80,0.25)',
            color: '#c8a050',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 group-hover:opacity-100 transition-opacity">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"/>
          </svg>
          Ver Loja Completa
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <p className="text-[0.6rem] text-foreground/20 mt-3 tracking-[0.15em] uppercase">
          Frete grátis em pedidos acima de R$ 200
        </p>
      </motion.div>
    </section>
  );
};

export default ShopSection;
