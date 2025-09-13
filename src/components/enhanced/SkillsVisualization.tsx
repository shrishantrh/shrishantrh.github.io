import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend', color: '#61dafb' },
  { name: 'TypeScript', level: 85, category: 'frontend', color: '#3178c6' },
  { name: 'Python', level: 88, category: 'backend', color: '#3776ab' },
  { name: 'Machine Learning', level: 82, category: 'ai', color: '#ff6b35' },
  { name: 'Node.js', level: 80, category: 'backend', color: '#339933' },
  { name: 'Three.js', level: 75, category: 'frontend', color: '#000000' },
];

interface SkillSphereProps {
  skill: Skill;
  position: [number, number, number];
}

const SkillSphere: React.FC<SkillSphereProps> = ({ skill, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  const radius = (skill.level / 100) * 0.8 + 0.2;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={skill.color}
            transparent
            opacity={0.8}
            emissive={skill.color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, -radius - 0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
};

const Skills3DScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ background: 'transparent' }}>
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2;
          const radius = 3;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 2;
          
          return (
            <SkillSphere
              key={skill.name}
              skill={skill}
              position={[x, y, z]}
            />
          );
        })}
        
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

export const SkillsVisualization: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative h-96 w-full">
        <Skills3DScene />
        
        {/* Overlay with traditional skill bars for mobile fallback */}
        <div className="absolute bottom-4 left-4 right-4 md:hidden">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 space-y-2">
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.name} className="flex justify-between items-center text-sm">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};