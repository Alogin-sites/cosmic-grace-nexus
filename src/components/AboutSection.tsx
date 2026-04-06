import { motion } from "framer-motion";
import aboutImg from "@/assets/about-portrait.jpg";

const credentials = [
  "Taróloga & Vidência Oracular",
  "Especialista em Hipnose",
  "Terapeuta Apométrica",
  "Reikiana",
  "Consultora de Vidas Passadas",
  "Professora — Curso de Iniciação à Bruxaria",
];

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] relative overflow-hidden"
    >
      {/* Left - Image */}
      <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0">
        <img
          src={aboutImg}
          alt="Espírito da Lua"
          loading="lazy"
          width={800}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.38] saturate-[0.4]"
        />
        {/* Sacred geometry overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-[1]">
          <svg
            viewBox="0 0 400 400"
            className="w-[min(400px,70%)] h-auto opacity-50"
          >
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="hsl(30,55%,50%)"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle
              cx="200"
              cy="200"
              r="130"
              fill="none"
              stroke="hsl(30,55%,50%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="hsl(30,55%,50%)"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <polygon
              points="200,30 370,290 30,290"
              fill="none"
              stroke="hsl(30,55%,50%)"
              strokeWidth="0.5"
              opacity="0.25"
            />
            <polygon
              points="200,370 30,110 370,110"
              fill="none"
              stroke="hsl(30,55%,50%)"
              strokeWidth="0.5"
              opacity="0.25"
            />
          </svg>
        </div>
        {/* Planets */}
        <div
          className="absolute w-[90px] h-[90px] rounded-full top-[12%] right-[-20px]"
          style={{
            background: "radial-gradient(circle at 35% 35%, #7a5533, #1a0d00)",
          }}
        />
        <div
          className="absolute w-[55px] h-[55px] rounded-full top-[55%] right-[8%]"
          style={{
            background: "radial-gradient(circle at 35% 35%, #444, #111)",
          }}
        />
      </div>

      {/* Right - Content */}
      <motion.div
        className="px-8 lg:px-20 py-16 lg:py-24 flex flex-col justify-center bg-background relative z-[1]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="section-eyebrow">Sacerdotisa de Ísis</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)]">
          O que eu <em className="italic text-amber">faço</em>
        </h2>
        <p className="section-body mb-6">
          Com mais de 25 anos na Arte — um quarto do século! — sou fundadora da
          Tradição Misteriosa Familiar, uma tradição hereditária dos meus
          antepassados. Minha prática une o ancestral ao contemporâneo para
          despertar em você o poder que sempre foi seu.
        </p>
        <div className="flex flex-col gap-2 mb-8">
          {credentials.map((cred) => (
            <div
              key={cred}
              className="flex items-center gap-3 text-[0.82rem] text-foreground/55"
            >
              <span className="w-[18px] h-px bg-amber flex-shrink-0" />
              {cred}
            </div>
          ))}
        </div>
        <a href="#contato" className="pill-button-filled w-fit">
          Agendar Consulta
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
