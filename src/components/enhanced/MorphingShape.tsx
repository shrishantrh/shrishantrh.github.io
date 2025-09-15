import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

interface MorphingShapeProps {
  className?: string;
  color?: string;
  size?: number;
  complexity?: number;
  speed?: number;
}

export const MorphingShape: React.FC<MorphingShapeProps> = ({
  className = '',
  color = '#06b6d4',
  size = 200,
  complexity = 8,
  speed = 0.02,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const time = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  useAnimationFrame((t) => {
    time.set(t * speed);
  });

  const generatePath = (t: number) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const baseRadius = size * 0.3;
    
    let path = '';
    
    for (let i = 0; i <= complexity; i++) {
      const angle = (i / complexity) * Math.PI * 2;
      
      // Create organic variations using multiple sine waves
      const radiusVariation = Math.sin(t * 0.001 + i * 0.5) * 0.3 + 
                            Math.sin(t * 0.003 + i * 0.8) * 0.2 +
                            Math.sin(t * 0.005 + i * 1.2) * 0.1;
      
      const radius = baseRadius * (1 + radiusVariation);
      
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        // Use smooth curves instead of straight lines
        const prevAngle = ((i - 1) / complexity) * Math.PI * 2;
        const prevRadius = baseRadius * (1 + Math.sin(t * 0.001 + (i - 1) * 0.5) * 0.3 + 
                                       Math.sin(t * 0.003 + (i - 1) * 0.8) * 0.2 +
                                       Math.sin(t * 0.005 + (i - 1) * 1.2) * 0.1);
        
        const prevX = centerX + Math.cos(prevAngle) * prevRadius;
        const prevY = centerY + Math.sin(prevAngle) * prevRadius;
        
        // Control points for smooth curves
        const cp1X = prevX + Math.cos(prevAngle + Math.PI / 2) * radius * 0.2;
        const cp1Y = prevY + Math.sin(prevAngle + Math.PI / 2) * radius * 0.2;
        const cp2X = x + Math.cos(angle - Math.PI / 2) * radius * 0.2;
        const cp2Y = y + Math.sin(angle - Math.PI / 2) * radius * 0.2;
        
        path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${x} ${y}`;
      }
    }
    
    path += ' Z';
    return path;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = pathRef.current?.closest('.morphing-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const pathD = useTransform(time, (latest) => 
    isVisible ? generatePath(latest) : generatePath(0)
  );

  return (
    <div className={`morphing-container ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="morphingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          ref={pathRef}
          d={pathD}
          fill="url(#morphingGradient)"
          stroke={color}
          strokeWidth="0.5"
          strokeOpacity="0.8"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
            rotate: isVisible ? 360 : 0,
          }}
          transition={{ 
            duration: 2,
            ease: "easeOut",
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
      </motion.svg>
    </div>
  );
};