import { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValue, useTransform, MotionValue } from 'framer-motion';

interface UseAdvancedScrollOptions {
  offset?: number;
  smooth?: boolean;
  threshold?: number;
}

export const useAdvancedScroll = <T extends HTMLElement = HTMLDivElement>(
  options: UseAdvancedScrollOptions = {}
) => {
  const { offset = 0, smooth = true, threshold = 0.1 } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Motion values for smooth animations
  const scrollY = useMotionValue(0);
  const elementProgress = useMotionValue(0);
  
  // Transforms for common effects
  const y = useTransform(elementProgress, [0, 1], [50, 0]);
  const opacity = useTransform(elementProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(elementProgress, [0, 0.5], [0.9, 1]);
  const rotateX = useTransform(elementProgress, [0, 1], [15, 0]);
  
  const updateScrollValues = useCallback(() => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Update scroll position
    scrollY.set(window.scrollY);
    
    // Calculate element visibility and progress
    const isInViewport = elementTop < windowHeight && (elementTop + elementHeight) > 0;
    setIsVisible(isInViewport);
    
    if (isInViewport) {
      // Calculate progress (0 when entering, 1 when fully visible)
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ));
      
      elementProgress.set(progress);
      
      // Mark as animated once it reaches threshold
      if (progress > threshold && !hasAnimated) {
        setHasAnimated(true);
      }
    }
  }, [elementProgress, scrollY, threshold, hasAnimated]);
  
  useEffect(() => {
    if (!smooth) return;
    
    let rafId: number;
    
    const handleScroll = () => {
      rafId = requestAnimationFrame(updateScrollValues);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollValues);
    
    // Initial call
    updateScrollValues();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollValues);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateScrollValues, smooth]);
  
  // Intersection Observer for non-smooth mode
  useEffect(() => {
    if (smooth) return;
    
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          elementProgress.set(1);
        }
      },
      { 
        threshold,
        rootMargin: `${offset}px`
      }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [smooth, threshold, offset, hasAnimated, elementProgress]);
  
  return {
    ref: elementRef,
    isVisible,
    hasAnimated,
    scrollY,
    elementProgress,
    // Pre-configured transforms
    motionProps: {
      style: { y, opacity, scale, rotateX },
      initial: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
      animate: hasAnimated ? { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
      } : {}
    }
  };
};

export const useParallax = (speed: number = 0.5, offset: number = 0) => {
  const scrollY = useMotionValue(0);
  const y = useTransform(scrollY, [0, 1000], [offset, offset + (1000 * speed)]);
  
  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  
  return { y, scrollY };
};

export const useScrollTrigger = (
  triggerPoint: number = 0.5,
  callback?: (isTriggered: boolean) => void
) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggered = rect.top < windowHeight * triggerPoint;
      
      if (triggered !== isTriggered) {
        setIsTriggered(triggered);
        callback?.(triggered);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint, isTriggered, callback]);
  
  return { ref: elementRef, isTriggered };
};