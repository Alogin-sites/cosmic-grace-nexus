import { motion } from "framer-motion";
import { WeatherEffect } from "./ui/weather-effect";
import cursoIniciante from "@/assets/curso-iniciante.png";
import cursoMedio from "@/assets/curso-medio.png";
import cursoAvancado from "@/assets/curso-avancado.png";

/* ─── SVG Witchcraft Icons (used as decorative elements) ─── */
const CauldronSVG = () => (
  <svg viewBox="0 0 100 90" fill="none" className="w-full h-full">
    <path
      d="M20 40 C20 40 15 80 50 80 C85 80 80 40 80 40"
      stroke="#c8a050"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <ellipse
      cx="50"
      cy="40"
      rx="30"
      ry="8"
      stroke="#c8a050"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M15 50 C10 50 8 55 12 58"
      stroke="#c8a050"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M85 50 C90 50 92 55 88 58"
      stroke="#c8a050"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M40 35 C38 28 42 22 40 15"
      stroke="#c8a050"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
      strokeLinecap="round"
    />
    <path
      d="M50 33 C48 25 52 18 50 10"
      stroke="#c8a050"
      strokeWidth="0.8"
      fill="none"
      opacity="0.25"
      strokeLinecap="round"
    />
    <path
      d="M60 35 C62 28 58 22 60 15"
      stroke="#c8a050"
      strokeWidth="0.8"
      fill="none"
      opacity="0.3"
      strokeLinecap="round"
    />
  </svg>
);

const BroomSVG = () => (
  <svg viewBox="0 0 60 120" fill="none" className="w-full h-full">
    <line
      x1="30"
      y1="5"
      x2="30"
      y2="75"
      stroke="#c8a050"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <path
      d="M18 70 C18 70 22 75 30 75 C38 75 42 70 42 70 L38 110 C38 110 34 115 30 115 C26 115 22 110 22 110 Z"
      stroke="#c8a050"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <line
      x1="24"
      y1="78"
      x2="22"
      y2="108"
      stroke="#c8a050"
      strokeWidth="0.5"
      opacity="0.25"
    />
    <line
      x1="30"
      y1="75"
      x2="30"
      y2="112"
      stroke="#c8a050"
      strokeWidth="0.5"
      opacity="0.25"
    />
    <line
      x1="36"
      y1="78"
      x2="38"
      y2="108"
      stroke="#c8a050"
      strokeWidth="0.5"
      opacity="0.25"
    />
  </svg>
);

const MoonPhasesSVG = () => (
  <svg viewBox="0 0 300 30" fill="none" className="w-full h-full">
    <circle
      cx="30"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <circle
      cx="75"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M75 7 A8 8 0 0 1 75 23 A5 8 0 0 0 75 7"
      fill="#c8a050"
      opacity="0.2"
    />
    <circle
      cx="120"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <path d="M120 7 A8 8 0 0 1 120 23 L120 7" fill="#c8a050" opacity="0.25" />
    <circle cx="150" cy="15" r="9" fill="#c8a050" opacity="0.3" />
    <circle
      cx="150"
      cy="15"
      r="9"
      stroke="#c8a050"
      strokeWidth="0.8"
      fill="none"
      opacity="0.5"
    />
    <circle
      cx="180"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <path d="M180 7 A8 8 0 0 0 180 23 L180 7" fill="#c8a050" opacity="0.25" />
    <circle
      cx="225"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M225 7 A8 8 0 0 0 225 23 A5 8 0 0 1 225 7"
      fill="#c8a050"
      opacity="0.2"
    />
    <circle
      cx="270"
      cy="15"
      r="8"
      stroke="#c8a050"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
  </svg>
);

const courses = [
  {
    title: "Iniciante",
    subtitle: "Fundamentos da Magia Natural",
    cover: cursoIniciante,
    lessons: "12 aulas",
    topics:
      "Raízes da Bruxaria, Mistérios Femininos e Masculinos, Origens Celtas, Tradições Ancestrais",
  },
  {
    title: "Médio",
    subtitle: "Ritualismo Hermético e Magia Elemental",
    cover: cursoMedio,
    lessons: "16 aulas",
    topics:
      "Plano Astral, Mediunidade, Forma-Pensamento, Chakras, Poder Psíquico, Leis Herméticas",
  },
  {
    title: "Avançado",
    subtitle: "Teurgia e Alquimia Espiritual Superior",
    cover: cursoAvancado,
    lessons: "30 aulas",
    topics:
      "Magia com Velas, Rituais, Sabbats, Poções, Círculo Sagrado, Ritos de Passagem",
  },
];

const EbooksSection = () => {
  return (
    <section id="ebooks" className="bg-surface relative overflow-hidden">
      <WeatherEffect
        rainIntensity={350}
        rainSpeed={0.12}
        rainAngle={15}
        lightningEnabled={true}
        lightningFrequency={4}
        lightningIntensity={1.5}
        lightningSize={2.2}
        thunderEnabled={true}
        thunderVolume={0.5}
        className="py-32 px-6 md:px-12 text-center"
      >
        {/* Decorative SVG elements */}
        <div className="absolute top-12 left-8 w-16 h-20 opacity-30 pointer-events-none hidden lg:block z-10">
          <BroomSVG />
        </div>
        <div
          className="absolute top-12 right-8 w-16 h-20 opacity-30 pointer-events-none hidden lg:block z-10"
          style={{ transform: "scaleX(-1)" }}
        >
          <BroomSVG />
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-16 opacity-30 pointer-events-none hidden lg:block z-10">
          <CauldronSVG />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Moon Phases decorative */}
          <div className="w-[250px] h-[25px] mx-auto mb-6 opacity-60">
            <MoonPhasesSVG />
          </div>

          <p className="section-eyebrow">Curso de Iniciação à Bruxaria</p>
          <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
            Aprenda a <em className="italic text-amber">Arte Ancestral</em>
          </h2>
          <p className="text-sm text-foreground/45 max-w-2xl mx-auto mt-3 leading-relaxed">
            Mais de 20 anos de sabedoria condensados em 58 videoaulas divididas
            em 3 módulos progressivos.
            <br />
            Do iniciante ao avançado — domine a Bruxaria com quem vive a Arte.
          </p>
        </motion.div>

        {/* Price Section */}
        <motion.div
          className="relative z-10 mt-10 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="inline-flex flex-col items-center gap-2 px-12 py-6 rounded-2xl relative"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(200,160,80,0.1) 0%, rgba(200,160,80,0.02) 100%)",
              border: "1px solid rgba(200, 160, 80, 0.25)",
              boxShadow: "0 0 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Corner ornaments */}
            <div
              className="absolute top-2 left-2 w-4 h-4 border-t border-l opacity-50"
              style={{ borderColor: "#c8a050" }}
            />
            <div
              className="absolute top-2 right-2 w-4 h-4 border-t border-r opacity-50"
              style={{ borderColor: "#c8a050" }}
            />
            <div
              className="absolute bottom-2 left-2 w-4 h-4 border-b border-l opacity-50"
              style={{ borderColor: "#c8a050" }}
            />
            <div
              className="absolute bottom-2 right-2 w-4 h-4 border-b border-r opacity-50"
              style={{ borderColor: "#c8a050" }}
            />

            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-foreground/45 font-medium">
              Os 3 Cursos por apenas
            </span>
            <span
              className="font-display text-4xl font-bold"
              style={{
                color: "#c8a050",
                textShadow: "0 0 30px rgba(200,160,80,0.4)",
              }}
            >
              R$ 497,00
            </span>
            <span className="text-xs text-foreground/45">
              ou 6x de R$ 93,24 no cartão
            </span>

            {/* Ornamental divider */}
            <div className="flex items-center gap-2 mt-1">
              <div
                className="w-8 h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent, #c8a050)",
                }}
              />
              <span className="text-[0.55rem] text-foreground/25 tracking-wider uppercase">
                7 dias de garantia
              </span>
              <div
                className="w-8 h-[1px]"
                style={{
                  background: "linear-gradient(90deg, #c8a050, transparent)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* 3 Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1050px] mx-auto relative z-10">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
            >
              <div className="relative">
                {/* Card glow on hover */}
                <div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(200,160,80,0.2) 0%, transparent 70%)",
                  }}
                />

                {/* Cover Image */}
                <div
                  className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:translate-y-[-10px] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(200,160,80,0.12)]"
                  style={{ border: "1px solid rgba(200, 160, 80, 0.2)" }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={course.cover}
                      alt={`Curso de Bruxaria ${course.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

                    {/* Module badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[0.55rem] tracking-[0.2em] uppercase font-bold backdrop-blur-sm"
                      style={{
                        background: "rgba(200,160,80,0.2)",
                        border: "1px solid rgba(200,160,80,0.45)",
                        color: "#c8a050",
                      }}
                    >
                      Módulo {i + 1}
                    </div>

                    {/* Lessons badge */}
                    <div className="absolute bottom-4 right-4 text-[0.6rem] tracking-[0.15em] uppercase text-white/70 font-medium">
                      {course.lessons}
                    </div>
                  </div>
                </div>

                {/* Info below cover */}
                <div className="mt-5 text-left px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-[1px]"
                      style={{ background: "#c8a050" }}
                    />
                    <span
                      className="text-[0.55rem] tracking-[0.25em] uppercase font-medium"
                      style={{ color: "#c8a050" }}
                    >
                      {course.title}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-foreground mb-2 leading-snug group-hover:text-amber transition-colors duration-300">
                    {course.subtitle}
                  </h3>

                  <p className="text-[0.72rem] leading-relaxed text-foreground/50 line-clamp-2">
                    {course.topics}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://pay.hotmart.com/H43585626D?off=49lmfz3x&sck=HOTMART_PRODUCT_PAGE&checkoutMode=0&bid=1642725761390"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-display font-bold text-sm tracking-wide transition-all duration-400 hover:scale-105 group relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #c8a050, #a07830)",
              color: "#0a0a0f",
              boxShadow: "0 4px 30px rgba(200,160,80,0.4)",
            }}
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                animation: "shimmer 2s infinite",
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              🔮 Adquira os 3 Cursos Agora
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          {/* Benefits row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: "🎓", text: "Certificado Digital" },
              { icon: "♾️", text: "Acesso Vitalício" },
              { icon: "🎬", text: "58 Videoaulas" },
              { icon: "🛡️", text: "7 Dias Garantia" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-sm opacity-70">{item.icon}</span>
                <span className="text-[0.6rem] tracking-[0.12em] uppercase text-foreground/40 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative moon phases */}
        <div className="w-[200px] h-[20px] mx-auto mt-12 opacity-30 relative z-10">
          <MoonPhasesSVG />
        </div>

        {/* Shimmer keyframes */}
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </WeatherEffect>
    </section>
  );
};

export default EbooksSection;
