/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

import headshotImg from '@/assets/headshot.jpeg';
import uiucLogo from '@/assets/logos/uiuc.png';

interface LanyardProps {
  position?: [number, number, number];
}

export default function Lanyard({ position = [0, 0, 20] }: LanyardProps) {
  return (
    <div className="absolute top-0 right-0 w-[400px] h-[500px] z-20 pointer-events-auto">
      <Canvas camera={{ position, fov: 25 }} gl={{ alpha: true }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <SwingingCard />
        </Suspense>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function SwingingCard() {
  const groupRef = useRef<THREE.Group>(null);
  const headshotTexture = useTexture(headshotImg);
  const uiucTexture = useTexture(uiucLogo);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle swinging animation
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.z = Math.sin(time * 0.8) * 0.08;
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      groupRef.current.position.x = Math.sin(time * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Lanyard string - curved path from top */}
      <mesh position={[0, 3.2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Clip at top of card */}
      <mesh position={[0, 2.25, 0]}>
        <boxGeometry args={[0.25, 0.12, 0.08]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Card group */}
      <group position={[0, 0.9, 0]}>
        {/* Card - Front Side */}
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.2, 1.8]} />
          <meshPhysicalMaterial
            color="#1a1a2e"
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Headshot on front */}
        <mesh position={[0, 0.35, 0.05]}>
          <circleGeometry args={[0.32, 32]} />
          <meshBasicMaterial map={headshotTexture} />
        </mesh>

        {/* Card - Back Side (UIUC) */}
        <mesh position={[0, 0, -0.04]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[1.2, 1.8]} />
          <meshPhysicalMaterial
            color="#13294b"
            clearcoat={1}
            clearcoatRoughness={0.15}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* UIUC Logo on back */}
        <mesh position={[0, 0, -0.05]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.65, 0.65]} />
          <meshBasicMaterial map={uiucTexture} transparent />
        </mesh>
      </group>
    </group>
  );
}
