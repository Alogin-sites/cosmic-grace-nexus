import { useState, useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { TextureLoader } from 'three';

import svcTarotImg from '@/assets/svc-tarot.jpg';
import svcHypnosisImg from '@/assets/svc-hypnosis.jpg';
import svcEnergyImg from '@/assets/svc-energy.jpg';
import svcReikiImg from '@/assets/svc-reiki.jpg';
import svcPastlivesImg from '@/assets/svc-pastlives.jpg';
import svcDanceImg from '@/assets/svc-dance.jpg';
import tarotBackImg from '@/assets/tarot-back.jpg';

const services = [
  {
    name: 'Consulta Oracular & Vidência',
    shortName: 'Vidência',
    desc: 'Tarot, vidência e espíritos guias revelam o que você precisa ver neste momento da sua jornada.',
    img: svcTarotImg,
    numeral: 'I',
  },
  {
    name: 'Hipnose Terapêutica',
    shortName: 'Hipnose',
    desc: 'Acesse o inconsciente para curar traumas, liberar bloqueios e reprogramar crenças limitantes.',
    img: svcHypnosisImg,
    numeral: 'II',
  },
  {
    name: 'Terapia Apométrica',
    shortName: 'Apometria',
    desc: 'Desobsessão, limpeza energética e liberação de entidades. Trabalho profundo no campo áurico.',
    img: svcEnergyImg,
    numeral: 'III',
  },
  {
    name: 'Reiki',
    shortName: 'Reiki',
    desc: 'Canalização de energia universal para reequilíbrio dos chakras, alívio de stress e ansiedade.',
    img: svcReikiImg,
    numeral: 'IV',
  },
  {
    name: 'Vidas Passadas',
    shortName: 'Vidas Passadas',
    desc: 'Acesse memórias de outras encarnações e compreenda padrões e missões da sua alma.',
    img: svcPastlivesImg,
    numeral: 'V',
  },
  {
    name: 'Dança do Ventre',
    shortName: 'Dança Sagrada',
    desc: 'Arte ancestral de reconexão com o feminino sagrado. Força, sensualidade e espiritualidade.',
    img: svcDanceImg,
    numeral: 'VI',
  },
];

/* ─── 3D Tarot Card ─── */
function TarotCard3D({ frontImg, backImg, isHovered }: { frontImg: string; backImg: string; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const frontTex = useLoader(TextureLoader, frontImg);
  const backTex = useLoader(TextureLoader, backImg);
  const targetRotation = useRef(0);

  // Smoother textures
  useMemo(() => {
    [frontTex, backTex].forEach(t => {
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
    });
  }, [frontTex, backTex]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    targetRotation.current = isHovered ? Math.PI : 0;
    meshRef.current.rotation.y += (targetRotation.current - meshRef.current.rotation.y) * Math.min(delta * 4, 1);
    // subtle float
    meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.03;
  });

  const frontMat = useMemo(() => new THREE.MeshBasicMaterial({ map: frontTex, side: THREE.FrontSide }), [frontTex]);
  const backMat = useMemo(() => new THREE.MeshBasicMaterial({ map: backTex, side: THREE.BackSide }), [backTex]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.2, 3.3]} />
      {/* Front face (character) — visible when not flipped */}
      <primitive object={frontMat} attach="material" />
      {/* Back face rendered as second mesh */}
      <mesh rotation={[0, Math.PI, 0]}>
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
      <pointsMaterial size={0.03} color="#c8813a" transparent opacity={0} blending={THREE.AdditiveBlending} />
    </points>
  );
}

/* ─── Single Service Card Component ─── */
function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
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
      {/* 3D Canvas */}
      <div className="w-[200px] h-[310px] md:w-[220px] md:h-[340px] cursor-pointer relative">
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: hovered ? 0.6 : 0,
            boxShadow: '0 0 60px 20px hsla(30, 55%, 50%, 0.3)',
          }}
        />
        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 45 }}
          style={{ borderRadius: '8px' }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.2} />
          <Suspense fallback={null}>
            <TarotCard3D frontImg={svc.img} backImg={tarotBackImg} isHovered={hovered} />
            <CardParticles active={hovered} />
          </Suspense>
        </Canvas>
      </div>

      {/* Text below card */}
      <div className="mt-5 text-center max-w-[220px]">
        <p className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-amber mb-1">
          {svc.numeral}
        </p>
        <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-tight">
          {hovered ? svc.name : svc.shortName}
        </h3>
        <p
          className="text-[0.78rem] leading-relaxed text-foreground/45 transition-all duration-500 overflow-hidden"
          style={{
            maxHeight: hovered ? '120px' : '0px',
            opacity: hovered ? 1 : 0,
          }}
        >
          {svc.desc}
        </p>
        {!hovered && (
          <p className="text-[0.65rem] tracking-[0.15em] uppercase text-foreground/30 mt-1">
            Passe o mouse para revelar
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
const ServicesSection = () => {
  return (
    <section id="consultas" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden text-center">
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
          Passe o mouse sobre cada carta para revelar o serviço. Do tarot à hipnose — um espaço sagrado para cada jornada.
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
