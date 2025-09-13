import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Environment, OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  speed?: number;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({ 
  position, 
  color, 
  speed = 1 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Box>
    </Float>
  );
};

const RotatingTorus: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={torusRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#00bcd4" 
          transparent 
          opacity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
};

export const Scene3D: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          {/* Floating geometric elements */}
          <FloatingGeometry position={[-3, 2, 0]} color="#4f46e5" speed={0.8} />
          <FloatingGeometry position={[3, -1, 0]} color="#06b6d4" speed={1.2} />
          <FloatingGeometry position={[0, 3, -2]} color="#8b5cf6" speed={1.0} />
          
          {/* Rotating torus */}
          <RotatingTorus position={[0, 0, 0]} />
          
          {/* Interactive spheres */}
          <Float speed={2} rotationIntensity={2} floatIntensity={3}>
            <Sphere position={[-4, -2, -1]} args={[0.3, 32, 32]}>
              <meshStandardMaterial 
                color="#f59e0b" 
                transparent 
                opacity={0.8}
                emissive="#f59e0b"
                emissiveIntensity={0.1}
              />
            </Sphere>
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};