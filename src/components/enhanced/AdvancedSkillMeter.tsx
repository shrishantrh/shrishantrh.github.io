import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollContext } from '@/contexts/ScrollContext';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  icon?: string;
}

interface AdvancedSkillMeterProps {
  skills: Skill[];
  className?: string;
}

const categoryColors = {
  frontend: '#06b6d4',
  backend: '#4f46e5', 
  ai: '#10b981',
  tools: '#f59e0b',
};

export const AdvancedSkillMeter: React.FC<AdvancedSkillMeterProps> = ({ 
  skills, 
  className = '' 
}) => {
  const { sections } = useScrollContext();
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsSection = sections.get('skills');

  useEffect(() => {
    if (skillsSection?.isVisible && skillsSection.progress > 0.3) {
      setAnimateSkills(true);
    }
  }, [skillsSection]);

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill.name}
            skill={skill}
            index={index}
            animate={animateSkills}
          />
        ))}
      </div>
      
      {/* Category Summary */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={animateSkills ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h4 className="text-lg font-semibold text-foreground mb-6">Skill Categories</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(categoryColors).map(([category, color]) => {
            const categorySkills = skills.filter(s => s.category === category);
            const averageLevel = categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length;
            
            return (
              <CategorySummary
                key={category}
                category={category}
                color={color}
                level={averageLevel}
                animate={animateSkills}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

const SkillItem: React.FC<{
  skill: Skill;
  index: number;
  animate: boolean;
}> = ({ skill, index, animate }) => {
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { damping: 30, stiffness: 100 });
  const width = useTransform(smoothProgress, [0, 100], ['0%', '100%']);
  const opacity = useTransform(smoothProgress, [0, 100], [0.3, 1]);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        progress.set(skill.level);
      }, index * 150);
    }
  }, [animate, skill.level, index, progress]);

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, x: -30 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width,
            opacity,
            backgroundColor: categoryColors[skill.category],
            boxShadow: `0 0 10px ${categoryColors[skill.category]}40`,
          }}
        />
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={animate ? { x: [-24, 200] } : {}}
          transition={{ 
            delay: index * 0.1 + 0.5,
            duration: 1.5,
            ease: "easeOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

const CategorySummary: React.FC<{
  category: string;
  color: string;
  level: number;
  animate: boolean;
}> = ({ category, color, level, animate }) => {
  const circumference = 2 * Math.PI * 20; // radius = 20
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { damping: 25, stiffness: 120 });
  const strokeDasharray = useTransform(
    smoothProgress, 
    [0, 100], 
    [0, (level / 100) * circumference]
  );

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        progress.set(100);
      }, 2000);
    }
  }, [animate, progress]);

  return (
    <motion.div
      className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={animate ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <div className="relative w-12 h-12">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-muted/30"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke={color}
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={useTransform(strokeDasharray, (latest) => circumference - latest)}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-foreground">
            {Math.round(level)}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground capitalize">
        {category}
      </span>
    </motion.div>
  );
};