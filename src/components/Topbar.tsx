const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[300] bg-background/95 border-b border-foreground/[0.06] px-4 md:px-12 py-3 flex items-center justify-between backdrop-blur-sm">
      <div className="font-display text-xl font-bold text-amber flex items-center gap-2">
        <span className="text-2xl animate-spin-slow inline-block">✦</span>
        Espírito da Lua
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-amber/30 flex items-center justify-center text-sm text-amber flex-shrink-0">
            📍
          </div>
          <div className="leading-tight">
            <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-muted-foreground">
              Atendimento
            </div>
            <div className="text-[0.8rem] font-normal text-foreground">
              Online & Presencial
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-amber/30 flex items-center justify-center text-sm text-amber flex-shrink-0">
            📱
          </div>
          <div className="leading-tight">
            <div className="text-[0.65rem] font-normal tracking-[0.12em] uppercase text-muted-foreground">
              WhatsApp
            </div>
            <div className="text-[0.8rem] font-normal text-foreground">
              (51) 55555-5555
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
