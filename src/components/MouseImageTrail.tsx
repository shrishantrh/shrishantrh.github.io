import { useRef, useCallback } from "react";
import { motion, useAnimate } from "framer-motion";

interface MouseImageTrailProps {
  images: string[];
  renderImageBuffer?: number;
  rotationRange?: number;
  imageClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

const MouseImageTrail = ({
  images,
  renderImageBuffer = 40,
  rotationRange = 20,
  imageClassName = "h-16 w-16",
  children,
  className = "",
}: MouseImageTrailProps) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const imgIndex = useRef(0);

  const distance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const d = distance(lastPos.current.x, lastPos.current.y, x, y);
      if (d < renderImageBuffer) return;
      lastPos.current = { x, y };

      const el = scope.current?.children[imgIndex.current % images.length] as
        | HTMLElement
        | undefined;
      if (!el) return;

      const rot = Math.random() * rotationRange - rotationRange / 2;
      el.style.top = `${y}px`;
      el.style.left = `${x}px`;
      el.style.zIndex = String(imgIndex.current);

      animate(
        el,
        { opacity: [0, 1], transform: [`translate(-50%, -25%) rotate(${rot}deg) scale(0.5)`, `translate(-50%, -50%) rotate(${rot}deg) scale(1)`] },
        { type: "spring", damping: 15, stiffness: 200 }
      );
      animate(
        el,
        { opacity: [1, 0] },
        { ease: "linear", duration: 0.7, delay: 0.4 }
      );

      imgIndex.current++;
    },
    [animate, images.length, renderImageBuffer, rotationRange, scope]
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <div ref={scope} className="pointer-events-none absolute inset-0">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className={`pointer-events-none absolute opacity-0 ${imageClassName}`}
            style={{ left: 0, top: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

export default MouseImageTrail;