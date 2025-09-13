import { motion, MotionProps } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'minimal';
  hoverable?: boolean;
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, variant = 'default', hoverable = true, ...motionProps }, ref) => {
    const baseStyles = "relative overflow-hidden";
    
    const variantStyles = {
      default: "surface-card",
      glow: "surface-card surface-glow",
      minimal: "bg-card/50 backdrop-blur border border-border/30 rounded-lg"
    };

    const hoverVariants = hoverable ? {
      hover: { 
        y: -8,
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }
    } : {};

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        whileHover={hoverVariants.hover}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...motionProps}
      >
        {children}
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
        </div>
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";