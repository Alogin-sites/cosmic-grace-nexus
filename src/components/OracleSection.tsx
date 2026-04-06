import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

import alchemyBg from '@/assets/alchemy-bg.jpg';
import tarotBack from '@/assets/tarot-back.jpg';
import tarotSun from '@/assets/tarot-sun.jpg';
import tarotMoon from '@/assets/tarot-moon.jpg';
import tarotStar from '@/assets/tarot-star.jpg';
import tarotTower from '@/assets/tarot-tower.jpg';
import tarotDeath from '@/assets/tarot-death.jpg';
import tarotPriestess from '@/assets/tarot-priestess.jpg';
import tarotWheel from '@/assets/tarot-wheel.jpg';
import tarotMagician from '@/assets/tarot-magician.jpg';

const allCardImages = [tarotSun, tarotMoon, tarotStar, tarotTower, tarotDeath, tarotPriestess, tarotWheel, tarotMagician];

const tarotCards = [
  { name: 'O Sol', numeral: 'XIX', imageIndex: 0, meaning: 'Sucesso, vitalidade e clareza iluminam seu caminho. A luz divina revela verdades ocultas e traz abundância.' },
  { name: 'A Lua', numeral: 'XVIII', imageIndex: 1, meaning: 'Confie na intuição. Mistérios serão revelados em breve. O inconsciente guarda respostas que a razão não alcança.' },
  { name: 'A Estrela', numeral: 'XVII', imageIndex: 2, meaning: 'Esperança renovada. A cura interior está em curso. As águas sagradas purificam sua alma e renovam sua fé.' },
  { name: 'A Torre', numeral: 'XVI', imageIndex: 3, meaning: 'Transformação radical. Do caos nasce a reconstrução. Estruturas falsas desmoronam para que a verdade se erga.' },
  { name: 'A Morte', numeral: 'XIII', imageIndex: 4, meaning: 'Fim de um ciclo. Renascimento e novos começos. O que morre abre espaço para o que precisa florescer.' },
  { name: 'A Sacerdotisa', numeral: 'II', imageIndex: 5, meaning: 'Sabedoria interior e mistérios velados. Os segredos do universo habitam em seu silêncio sagrado.' },
  { name: 'A Roda da Fortuna', numeral: 'X', imageIndex: 6, meaning: 'Ciclos do destino em movimento. A roda gira e traz mudanças inevitáveis. Aceite o fluxo cósmico.' },
  { name: 'O Mago', numeral: 'I', imageIndex: 7, meaning: 'Poder de manifestação. Todos os elementos estão à sua disposição. A vontade molda a realidade.' },
];

const oracleTypes = [
  'Tarot de Marselha',
  'Oráculo dos Anjos',
  'Runas Nórdicas',
  'Búzios',
];

/* ── 3D Card ── */
function TarotCard3D({ revealed, imageIndex }: { revealed: boolean; imageIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const frontMeshRef = useRef<THREE.Mesh>(null);
  const backTex = useLoader(THREE.TextureLoader, tarotBack);
  const allTextures = useLoader(THREE.TextureLoader, allCardImages);
  const currentRotY = useRef(0);

  // Update front texture when card changes
  useEffect(() => {
    if (frontMeshRef.current) {
      const mat = frontMeshRef.current.material as THREE.MeshStandardMaterial;
      mat.map = allTextures[imageIndex];
      mat.needsUpdate = true;
    }
  }, [imageIndex, allTextures]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetRotY = revealed ? Math.PI : 0;
    currentRotY.current = THREE.MathUtils.lerp(currentRotY.current, targetRotY, delta * 3);
    groupRef.current.rotation.y = currentRotY.current;

    if (!revealed) {
      groupRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.02;
      groupRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.05;
    } else {
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, delta * 4);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0.1, delta * 3);
    }
  });

  const cardW = 2.2;
  const cardH = 2.2;

  return (
    <group ref={groupRef}>
      {/* Back face (visible when not flipped) */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[cardW, cardH]} />
        <meshBasicMaterial map={backTex} side={THREE.FrontSide} />
      </mesh>
      {/* Front face (visible when flipped via Y rotation) */}
      <mesh ref={frontMeshRef} rotation={[0, Math.PI, 0]} position={[0, 0, 0.01]}>
        <planeGeometry args={[cardW, cardH]} />
        <meshBasicMaterial map={allTextures[imageIndex]} side={THREE.FrontSide} />
      </mesh>
    </group>
  );
}

/* ── Stacked deck cards ── */
function DeckCards() {
  const backTex = useLoader(THREE.TextureLoader, tarotBack);
  return (
    <>
      {[-2, -1].map((i) => (
        <mesh key={i} position={[i * 0.06, i * 0.03, i * 0.015 - 0.05]} rotation={[0, 0, i * 0.03]}>
          <planeGeometry args={[2.2, 2.2]} />
          <meshBasicMaterial map={backTex} side={THREE.DoubleSide} opacity={0.6} transparent />
        </mesh>
      ))}
    </>
  );
}

/* ── Glow light ── */
function GlowLight({ revealed }: { revealed: boolean }) {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame((_, delta) => {
    if (!lightRef.current) return;
    lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, revealed ? 2.5 : 0.8, delta * 3);
  });
  return <pointLight ref={lightRef} position={[0, 0, 3]} color="#c49a3c" intensity={0.8} distance={10} />;
}

/* ── Scene ── */
function OracleScene({ revealed, imageIndex }: { revealed: boolean; imageIndex: number }) {
  return (
    <>
      <ambientLight intensity={0.3} color="#c49a3c" />
      <GlowLight revealed={revealed} />
      <directionalLight position={[2, 3, 4]} intensity={0.4} color="#f5e6c8" />
      <DeckCards />
      <TarotCard3D revealed={revealed} imageIndex={imageIndex} />
    </>
  );
}

/* ── Main Section ── */
const OracleSection = () => {
  const [revealed, setRevealed] = useState(false);
  const [activeOracle, setActiveOracle] = useState(0);
  const [card, setCard] = useState(tarotCards[0]);

  const handleReveal = () => {
    if (revealed) {
      setRevealed(false);
      setTimeout(() => {
        const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        setCard(random);
        setTimeout(() => setRevealed(true), 400);
      }, 600);
    } else {
      const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setCard(random);
      setRevealed(true);
    }
  };

  return (
    <section id="oraculo" className="relative py-32 px-6 md:px-12 overflow-hidden" style={{ background: 'hsl(var(--surface-2))' }}>
      <div className="absolute inset-0 opacity-[0.06] bg-center bg-cover pointer-events-none" style={{ backgroundImage: `url(${alchemyBg})` }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 5%) 80%)' }} />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:text-left text-center">
          <h2 className="section-title text-[clamp(2rem,3.5vw,3rem)]">
            Consulte o <em className="italic text-amber">Oráculo</em>
          </h2>
          <p className="section-body mb-5">Escolha seu oráculo e tire uma carta. Uma mensagem do universo espera por você.</p>
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

          <AnimatePresence>
            {revealed && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }} className="mt-6 max-w-sm mx-auto lg:mx-0">
                <div className="border border-amber/20 p-6" style={{ background: 'linear-gradient(135deg, hsl(30 30% 8% / 0.8), hsl(0 0% 4% / 0.9))' }}>
                  <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-amber/50 block mb-1">{card.numeral}</span>
                  <span className="font-display text-lg font-semibold text-amber block mb-3">{card.name}</span>
                  <p className="font-display italic text-[0.85rem] text-foreground/60 leading-relaxed">{card.meaning}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div className="flex flex-col items-center gap-7" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="w-full max-w-[320px] h-[420px] cursor-pointer" onClick={handleReveal}>
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
              <Suspense fallback={null}>
                <OracleScene revealed={revealed} imageIndex={card.imageIndex} />
              </Suspense>
            </Canvas>
          </div>
          <button onClick={handleReveal} className="pill-button text-[0.68rem]">{revealed ? 'Tirar Outra Carta' : 'Revelar Carta'}</button>
        </motion.div>
      </div>
    </section>
  );
};

export default OracleSection;
