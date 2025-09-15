import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';

interface ScrollContextType {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  scrollProgress: number;
  isScrolling: boolean;
  sections: Map<string, { element: HTMLElement; progress: number; isVisible: boolean }>;
  registerSection: (id: string, element: HTMLElement) => void;
  unregisterSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sections] = useState(() => new Map<string, { element: HTMLElement; progress: number; isVisible: boolean }>());
  
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const observerRef = useRef<IntersectionObserver>();

  const updateSectionProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    sections.forEach((section, id) => {
      const rect = section.element.getBoundingClientRect();
      const elementHeight = rect.height;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Calculate progress (0 when entering viewport, 1 when fully passed)
      let progress = 0;
      if (elementTop < windowHeight && elementBottom > 0) {
        if (elementTop <= 0) {
          // Element is partially or fully above viewport
          progress = Math.min(1, Math.abs(elementTop) / elementHeight);
        } else {
          // Element is entering viewport from bottom
          progress = Math.max(0, (windowHeight - elementTop) / windowHeight);
        }
      }

      const isVisible = elementTop < windowHeight && elementBottom > 0;
      
      sections.set(id, { ...section, progress, isVisible });
    });
  }, [sections]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    setScrollY(currentScrollY);
    setScrollProgress(documentHeight > 0 ? currentScrollY / documentHeight : 0);
    setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
    setIsScrolling(true);
    
    lastScrollY.current = currentScrollY;
    updateSectionProgress();

    // Clear existing timeout and set new one
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);
  }, [updateSectionProgress]);

  const registerSection = useCallback((id: string, element: HTMLElement) => {
    sections.set(id, { element, progress: 0, isVisible: false });
    updateSectionProgress();
  }, [sections, updateSectionProgress]);

  const unregisterSection = useCallback((id: string) => {
    sections.delete(id);
  }, [sections]);

  useEffect(() => {
    // Throttled scroll listener
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', updateSectionProgress, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', updateSectionProgress);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll, updateSectionProgress]);

  const value: ScrollContextType = {
    scrollY,
    scrollDirection,
    scrollProgress,
    isScrolling,
    sections,
    registerSection,
    unregisterSection,
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const useSection = (id: string) => {
  const { sections, registerSection, unregisterSection } = useScrollContext();
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      registerSection(id, element);
      return () => unregisterSection(id);
    }
  }, [id, registerSection, unregisterSection]);

  const sectionData = sections.get(id);
  return {
    ref: elementRef,
    progress: sectionData?.progress ?? 0,
    isVisible: sectionData?.isVisible ?? false,
  };
};