import { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import { TextureLoader } from "three";

import svcTarotImg from "@/assets/videncia.png";
import hipnoseImg from "@/assets/hipnose.png";
import apometriaImg from "@/assets/apometrica.png";
import reikiImg from "@/assets/reiki.png";
import vidasPassadasImg from "@/assets/vidas.png";
import dancaSagradaImg from "@/assets/danca.png";

const services = [
  {
    name: "Consulta Oracular & Vidência",
    shortName: "Vidência",
    desc: "Tarot, vidência e espíritos guias revelam o que você precisa ver neste momento da sua jornada.",
    frontImg: svcTarotImg,
    numeral: "I",
  },
  {
    name: "Hipnose Terapêutica",
    shortName: "Hipnose",
    desc: "Acesse o inconsciente para curar traumas, liberar bloqueios e reprogramar crenças limitantes.",
    frontImg: hipnoseImg,
    numeral: "II",
  },
  {
    name: "Terapia Apométrica",
    shortName: "Apometria",
    desc: "Desobsessão, limpeza energética e liberação de entidades. Trabalho profundo no campo áurico.",
    frontImg: apometriaImg,
    numeral: "III",
  },
  {
    name: "Reiki",
    shortName: "Reiki",
    desc: "Canalização de energia universal para reequilíbrio dos chakras, alívio de stress e ansiedade.",
    frontImg: reikiImg,
    numeral: "IV",
  },
  {
    name: "Vidas Passadas",
    shortName: "Vidas Passadas",
    desc: "Acesse memórias de outras encarnações e compreenda padrões e missões da sua alma.",
    frontImg: vidasPassadasImg,
    numeral: "V",
  },
  {
    name: "Dança Sagrada",
    shortName: "Dança Sagrada",
    desc: "Arte ancestral de reconexão com o feminino sagrado. Força, sensualidade e espiritualidade.",
    frontImg: dancaSagradaImg,
    numeral: "VI",
  },
];

/* ─── 3D Tarot Card ─── */
function TarotCard3D({
  frontImg,
  isHovered,
}: {
  frontImg: string;
  isHovered: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const frontTex = useLoader(TextureLoader, frontImg);
  const targetRotation = useRef(0);

  // Smoother textures
  useMemo(() => {
    frontTex.minFilter = THREE.LinearFilter;
    frontTex.magFilter = THREE.LinearFilter;
  }, [frontTex]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    targetRotation.current = isHovered ? Math.PI : 0;
    meshRef.current.rotation.y +=
      (targetRotation.current - meshRef.current.rotation.y) *
      Math.min(delta * 4, 1);
    // subtle float
    meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.03;
  });

  const frontMat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: frontTex, side: THREE.FrontSide, color: new THREE.Color(0.7, 0.7, 0.7) }),
    [frontTex],
  );
  const backMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: '#080810', side: THREE.FrontSide }),
    [],
  );

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.2, 3.3]} />
      {/* Front face — imagem de capa */}
      <primitive object={frontMat} attach="material" />

      {/* Back face — fundo escuro sólido */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0, -0.01]}>
        <planeGeometry args={[2.2, 3.3]} />
        <primitive object={backMat} attach="material" />
      </mesh>
    </mesh>
  );
}

/* ─── Particles around card ─── */
function CardParticles({ active }: { active: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const count = 40;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity += ((active ? 0.6 : 0) - mat.opacity) * 0.05;
    ref.current.rotation.y += 0.003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c8813a"
        transparent
        opacity={0}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ─── Single Service Card Component ─── */
function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D Canvas + Info Overlay */}
      <div className="w-[200px] h-[310px] md:w-[220px] md:h-[340px] cursor-pointer relative">
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-700 pointer-events-none z-10"
          style={{
            opacity: hovered ? 0.6 : 0,
            boxShadow: "0 0 60px 20px hsla(30, 55%, 50%, 0.3)",
          }}
        />

        {/* CSS Info Overlay — aparece quando a carta vira */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-5 py-6 rounded-lg pointer-events-none transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: 'radial-gradient(ellipse at center, rgba(20, 15, 8, 0.97) 0%, rgba(5, 5, 10, 0.99) 100%)',
            border: '1px solid rgba(200, 160, 80, 0.2)',
          }}
        >
          {/* Ornamental top line */}
          <div className="w-10 h-[1px] mb-3" style={{ background: 'linear-gradient(90deg, transparent, #c8a050, transparent)' }} />

          <span className="text-[11px] tracking-[0.35em] font-medium uppercase mb-3"
            style={{ color: '#c8a050', textShadow: '0 0 12px rgba(200,160,80,0.4)' }}>
            {svc.numeral}
          </span>

          <h3 className="text-[13px] font-display font-bold text-white mb-4 leading-snug uppercase tracking-wide"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
            {svc.name}
          </h3>

          {/* Ornamental divider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #c8a050)' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: '1px solid #c8a050' }} />
            <div className="w-6 h-[1px]" style={{ background: 'linear-gradient(90deg, #c8a050, transparent)' }} />
          </div>

          <p className="text-[10px] leading-[1.7] text-white/80 font-light px-1">
            {svc.desc}
          </p>

          {/* Ornamental bottom line */}
          <div className="w-10 h-[1px] mt-4" style={{ background: 'linear-gradient(90deg, transparent, #c8a050, transparent)' }} />
        </div>

        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 45 }}
          style={{ borderRadius: "8px" }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.85} />
          <Suspense fallback={null}>
            <TarotCard3D
              frontImg={svc.frontImg}
              isHovered={hovered}
            />
            <CardParticles active={hovered} />
          </Suspense>
        </Canvas>
      </div>

      {/* Label below card */}
      <div className="mt-5 text-center max-w-[220px]">
        <p className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-amber mb-1 opacity-60">
          {svc.shortName}
        </p>
        {!hovered && (
          <p className="text-[0.65rem] tracking-[0.15em] uppercase text-foreground/30 mt-1">
            Ver detalhes
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
const ServicesSection = () => {
  return (
    <section
      id="consultas"
      className="py-32 px-6 md:px-12 bg-background relative overflow-hidden text-center"
    >
      {/* Mandala bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none rounded-full border border-foreground">
        <div className="absolute inset-10 rounded-full border border-foreground" />
        <div className="absolute inset-[120px] rounded-full border border-foreground" />
      </div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-eyebrow">Consultas & Terapias</p>
        <h2 className="section-title text-[clamp(2.2rem,4vw,3.6rem)] mx-auto">
          Meus <em className="italic text-amber">Serviços</em>
        </h2>
        <p className="text-sm leading-relaxed text-foreground/50 max-w-xl mx-auto mt-3">
          Passe o mouse sobre cada carta para revelar o serviço. Do tarot à
          hipnose — um espaço sagrado para cada jornada.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1400px] mx-auto">
        {services.map((svc, i) => (
          <ServiceCard key={svc.name} svc={svc} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
