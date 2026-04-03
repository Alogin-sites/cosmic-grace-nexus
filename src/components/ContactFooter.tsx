import { motion } from 'framer-motion';

const footerLinks = ['Início', 'Sobre', 'Consultas', 'Rituais', 'Ebooks', 'Loja', 'Oráculo', 'Contato'];

const ContactFooter = () => {
  return (
    <>
      <section id="contato" className="relative overflow-hidden pt-24 px-6 md:px-12 bg-background">
        {/* Moon bg */}
        <div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[min(700px,90vw)] rounded-full opacity-35 pointer-events-none z-0 blur-[1px]"
          style={{ background: 'radial-gradient(circle at 40% 35%, #c87830, #7a3e10 40%, #3a1500 70%, #0a0400)' }}
        />

        <motion.div
          className="relative z-[1] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-[clamp(2rem,4vw,3.5rem)] mb-10">
            Vamos <em className="italic text-amber">Conversar?</em>
          </h2>
          <form className="flex gap-4 flex-wrap mb-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Seu nome"
              className="flex-1 min-w-[200px] bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground outline-none font-body transition-colors focus:border-amber placeholder:text-foreground/30"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 min-w-[200px] bg-transparent border-b border-foreground/20 py-3 text-sm text-foreground outline-none font-body transition-colors focus:border-amber placeholder:text-foreground/30"
            />
            <button type="submit" className="pill-button whitespace-nowrap text-[0.7rem]">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <footer className="relative z-[1] pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto border-t border-foreground/[0.05] mt-16">
          <div>
            <h4 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-foreground/35 mb-4">Contato</h4>
            <p className="text-[0.83rem] leading-relaxed text-foreground/40 mb-5">
              Atendimento online e presencial. Entre em contato para agendar sua consulta.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/5551989182397" className="text-sm text-foreground/40 transition-colors hover:text-amber">📱 (51) 98918-2397</a>
              <a href="mailto:contato@danaluna.com" className="text-sm text-foreground/40 transition-colors hover:text-amber">✉️ contato@danaluna.com</a>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="font-display text-2xl font-bold text-amber tracking-wide mb-2 flex items-center gap-2">
              <span className="animate-spin-slow">✦</span> Dana Luna
            </div>
            <p className="font-display italic text-sm text-foreground/35 mb-6">Sacerdotisa de Ísis</p>
            <div className="flex gap-3 justify-center">
              {['IG', 'YT', 'TT'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-foreground/12 flex items-center justify-center text-xs text-foreground/40 transition-all hover:border-amber hover:text-amber">{s}</a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-foreground/35 mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-foreground/40 transition-colors hover:text-amber">{link}</a>
              ))}
            </div>
          </div>
        </footer>

        <div className="relative z-[1] text-center py-6 border-t border-foreground/[0.04] text-[0.62rem] tracking-[0.15em] uppercase text-foreground/20">
          © 2026 Dana Luna · Todos os direitos reservados
        </div>
      </section>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/5551989182397"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-[200] w-[50px] h-[50px] rounded-full bg-[#25d366] flex items-center justify-center text-xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 no-underline"
      >
        📱
      </a>
    </>
  );
};

export default ContactFooter;
