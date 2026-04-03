const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[300] bg-background/95 border-b border-foreground/[0.06] px-4 md:px-12 py-3 flex items-center justify-between backdrop-blur-sm">
      <div className="font-display text-xl font-bold text-amber flex items-center gap-2">
        <span className="text-2xl animate-spin-slow inline-block">✦</span>
        Dana Luna
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-amber/30 flex items-center justify-center text-sm text-amber flex-shrink-0">
            📍
          </div>
          <div className="leading-tight">
            <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-muted-foreground">Atendimento</div>
            <div className="text-[0.8rem] font-normal text-foreground">Online & Presencial</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-amber/30 flex items-center justify-center text-sm text-amber flex-shrink-0">
            📱
          </div>
          <div className="leading-tight">
            <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-muted-foreground">WhatsApp</div>
            <div className="text-[0.8rem] font-normal text-foreground">(51) 98918-2397</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-[0.65rem] font-medium tracking-[0.2em] uppercase bg-amber text-background px-5 py-2.5 border-none cursor-pointer transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_24px_hsl(var(--amber)/0.4)]">
          Agendar Consulta
        </button>
        <a
          href="https://wa.me/5551989182397"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center text-base shadow-[0_2px_16px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 no-underline"
        >
          📱
        </a>
      </div>
    </header>
  );
};

export default Topbar;
