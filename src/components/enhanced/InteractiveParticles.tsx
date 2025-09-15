import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animationRef = useRef<number>();
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const createParticle = useCallback((x: number, y: number): Particle => ({
    id: Math.random(),
    x,
    y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    color: Math.random() > 0.5 ? '#06b6d4' : '#4f46e5',
    life: 0,
    maxLife: 120 + Math.random() * 60,
  }), []);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    setParticles(prevParticles => {
      const updatedParticles = prevParticles
        .map(particle => {
          // Update position with slight gravity and drag
          const newVx = particle.vx * 0.99;
          const newVy = particle.vy * 0.99 + 0.01; // slight downward pull
          
          return {
            ...particle,
            x: particle.x + newVx,
            y: particle.y + newVy,
            vx: newVx,
            vy: newVy,
            life: particle.life + 1,
            opacity: Math.max(0, particle.opacity - 0.005),
          };
        })
        .filter(particle => 
          particle.life < particle.maxLife && 
          particle.opacity > 0 &&
          particle.x > -50 && particle.x < canvas.width + 50 &&
          particle.y > -50 && particle.y < canvas.height + 50
        );

      // Draw particles
      updatedParticles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, particle.color + 'ff');
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      return updatedParticles;
    });
  }, []);

  const animate = useCallback(() => {
    updateParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    // Create particles at mouse position with probability
    if (Math.random() > 0.85) {
      const newParticle = createParticle(e.clientX, e.clientY);
      setParticles(prev => [...prev, newParticle]);
    }
  }, [mouseX, mouseY, createParticle]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Burst of particles on click
    const burstParticles: Particle[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const velocity = 3 + Math.random() * 2;
      burstParticles.push({
        ...createParticle(e.clientX, e.clientY),
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 4 + 2,
        opacity: 0.9,
      });
    }
    setParticles(prev => [...prev, ...burstParticles]);
  }, [createParticle]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      />
      <motion.div
        className="fixed inset-0 z-20 pointer-events-auto"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{ 
          background: 'transparent',
          cursor: 'none',
        }}
      />
    </>
  );
};