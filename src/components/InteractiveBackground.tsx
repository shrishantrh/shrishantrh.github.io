import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useScrollAnimation';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawMeshGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 50;
      const mouseInfluence = 100;
      
      // Create mesh grid with mouse interaction
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Calculate distance from mouse
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create displacement based on mouse proximity
          let offsetX = 0;
          let offsetY = 0;
          
          if (distance < mouseInfluence) {
            const force = (mouseInfluence - distance) / mouseInfluence;
            offsetX = (dx / distance) * force * 20;
            offsetY = (dy / distance) * force * 20;
          }

          // Draw mesh point
          const finalX = x + offsetX;
          const finalY = y + offsetY;
          
          // Opacity based on distance from mouse
          const opacity = distance < mouseInfluence ? 
            0.3 + (0.7 * (mouseInfluence - distance) / mouseInfluence) : 0.1;
          
          ctx.fillStyle = `hsla(220, 70%, 60%, ${opacity})`;
          ctx.beginPath();
          ctx.arc(finalX, finalY, 2, 0, Math.PI * 2);
          ctx.fill();

          // Connect to adjacent points
          if (x < canvas.width - gridSize) {
            const nextX = x + gridSize + (distance < mouseInfluence ? offsetX * 0.5 : 0);
            const nextY = y + (distance < mouseInfluence ? offsetY * 0.5 : 0);
            
            ctx.strokeStyle = `hsla(220, 70%, 60%, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }
          
          if (y < canvas.height - gridSize) {
            const nextX = x + (distance < mouseInfluence ? offsetX * 0.5 : 0);
            const nextY = y + gridSize + (distance < mouseInfluence ? offsetY * 0.5 : 0);
            
            ctx.strokeStyle = `hsla(220, 70%, 60%, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawMeshGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveBackground;