import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import moonBg from '@/assets/moon-bg.png';

/* ─── Three.js Floating Particles ─── */
function MoonParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 120;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 0.03 + 0.01;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;

    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i);
      pos.setY(i, y + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c8a050"
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Glowing Orbs ─── */
function GlowOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const t = state.clock.elapsedTime;
      mesh.position.y = Math.sin(t * 0.3 + i * 2) * 0.5;
      mesh.position.x = Math.cos(t * 0.2 + i * 1.5) * 0.3 + (i - 1.5) * 1.5;
      const scale = 0.08 + Math.sin(t * 0.5 + i) * 0.03;
      mesh.scale.setScalar(scale);
    });
  });

  return (
    <group ref={group}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[(i - 1.5) * 1.5, 0, -1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color="#c8a050"
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

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
      {/* Left - Info with Moon Background + Three.js */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {/* Moon image — fills the entire div */}
        <img
          src={moonBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ opacity: 0.25, filter: 'sepia(0.3) saturate(0.6)' }}
        />

        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(5,5,10,0.85) 0%, rgba(5,5,10,0.5) 50%, rgba(5,5,10,0.75) 100%)',
          }}
        />

        {/* Three.js particles canvas */}
        <div className="absolute inset-0 z-[1]">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ pointerEvents: 'none' }}
          >
            <Suspense fallback={null}>
              <MoonParticles />
              <GlowOrbs />
            </Suspense>
          </Canvas>
        </div>

        {/* Moonlight radial glow */}
        <div
          className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none z-[2]"
          style={{
            background: 'radial-gradient(circle, rgba(200,180,140,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-20 py-16 lg:py-24 flex flex-col justify-center min-h-[50vh] lg:min-h-[80vh]">
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
        </div>
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
