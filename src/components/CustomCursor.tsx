import { useEffect, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'hover' | 'button' | 'link' | 'text';
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: 'default'
  });

  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      // Determine cursor type based on target element
      const target = e.target as HTMLElement;
      let newCursorType: CursorState['cursorType'] = 'default';

      if (target.tagName === 'BUTTON' || target.closest('button') || target.classList.contains('btn-hero') || target.classList.contains('btn-secondary')) {
        newCursorType = 'button';
      } else if (target.tagName === 'A' || target.closest('a')) {
        newCursorType = 'link';
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        newCursorType = 'text';
      } else if (target.classList.contains('hover-lift') || target.classList.contains('surface-card') || target.closest('.hover-lift')) {
        newCursorType = 'hover';
      }

      setCursor(prev => ({
        ...prev,
        cursorType: newCursorType
      }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('interactive') || 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a')) {
        setCursor(prev => ({ ...prev, isHovering: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, isHovering: false }));
    };

    // Smooth cursor following with requestAnimationFrame
    const updateCursor = () => {
      if (isMoving) {
        setCursor(prev => ({
          ...prev,
          x: mouseX,
          y: mouseY
        }));

        // Add trail point
        setTrail(prev => {
          const newTrail = [
            { x: mouseX, y: mouseY, id: Date.now() },
            ...prev.slice(0, 8) // Keep only last 8 trail points
          ];
          return newTrail;
        });

        isMoving = false;
      }
      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .hover-lift, .surface-card, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const getCursorSize = () => {
    switch (cursor.cursorType) {
      case 'button':
        return cursor.isClicking ? 60 : 50;
      case 'link':
        return cursor.isClicking ? 45 : 40;
      case 'hover':
        return cursor.isClicking ? 35 : 30;
      case 'text':
        return 20;
      default:
        return cursor.isClicking ? 25 : 20;
    }
  };

  const getCursorColor = () => {
    switch (cursor.cursorType) {
      case 'button':
        return 'hsl(var(--accent))';
      case 'link':
        return 'hsl(var(--primary))';
      case 'hover':
        return 'hsl(var(--accent-glow))';
      case 'text':
        return 'hsl(var(--foreground))';
      default:
        return 'hsl(var(--accent) / 0.8)';
    }
  };

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: 4 - (index * 0.3),
            height: 4 - (index * 0.3),
            backgroundColor: getCursorColor(),
            opacity: (8 - index) / 8 * 0.3,
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-all duration-200 ease-out"
        style={{
          left: cursor.x - getCursorSize() / 2,
          top: cursor.y - getCursorSize() / 2,
          width: getCursorSize(),
          height: getCursorSize(),
          backgroundColor: 'transparent',
          border: `2px solid ${getCursorColor()}`,
          transform: `scale(${cursor.isClicking ? 0.8 : 1}) ${cursor.cursorType === 'text' ? 'scaleY(1.5)' : ''}`,
          borderRadius: cursor.cursorType === 'text' ? '2px' : '50%',
        }}
      >
        {/* Inner dot */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
          style={{
            width: cursor.cursorType === 'button' || cursor.cursorType === 'link' ? 8 : 4,
            height: cursor.cursorType === 'button' || cursor.cursorType === 'link' ? 8 : 4,
            backgroundColor: getCursorColor(),
            opacity: cursor.cursorType === 'text' ? 0 : 1,
          }}
        />

        {/* Ripple effect for buttons */}
        {(cursor.cursorType === 'button' || cursor.cursorType === 'link') && (
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              backgroundColor: getCursorColor(),
              opacity: 0.1,
            }}
          />
        )}
      </div>

      {/* Magnetic Effect for Special Elements */}
      {cursor.cursorType === 'button' && (
        <div
          className="fixed pointer-events-none z-40 rounded-full transition-all duration-300"
          style={{
            left: cursor.x - 80,
            top: cursor.y - 80,
            width: 160,
            height: 160,
            background: `radial-gradient(circle, ${getCursorColor()}15 0%, transparent 70%)`,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;