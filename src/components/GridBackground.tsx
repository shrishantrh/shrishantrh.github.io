import { useEffect, useRef, useState } from "react";

const ASCII_LABELS = [
  "[ .INIT ]",
  "[ 200 OK ]",
  "[ .BUILD ]",
  "[ .DEPLOY ]",
  "[ .RUN ]",
  "[ v1.0 ]",
  "[ .SRC ]",
  "[ .OUT ]",
];

const GridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [labels, setLabels] = useState<{ text: string; x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const generateLabels = () => {
      const newLabels = ASCII_LABELS.map((text, i) => ({
        text,
        x: 5 + (i % 4) * 25 + Math.random() * 10,
        y: 10 + Math.floor(i / 4) * 45 + Math.random() * 20,
        opacity: 0.08 + Math.random() * 0.08,
      }));
      setLabels(newLabels);
    };
    generateLabels();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.4]" />
      
      {/* Vertical accent lines */}
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-border/20" />
      <div className="absolute left-[80%] top-0 bottom-0 w-px bg-border/20" />
      
      {/* Horizontal accent lines */}
      <div className="absolute top-[25%] left-0 right-0 h-px bg-border/15" />
      <div className="absolute top-[75%] left-0 right-0 h-px bg-border/15" />
      
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-border/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-border/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-border/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-border/20" />
      
      {/* Floating ASCII labels */}
      {labels.map((label, i) => (
        <span
          key={i}
          className="absolute font-mono text-[10px] tracking-[0.15em] text-foreground select-none whitespace-nowrap"
          style={{
            left: `${label.x}%`,
            top: `${label.y}%`,
            opacity: label.opacity,
          }}
        >
          {label.text}
        </span>
      ))}

      {/* Small cross markers at intersections */}
      {[
        { x: '20%', y: '25%' },
        { x: '80%', y: '25%' },
        { x: '20%', y: '75%' },
        { x: '80%', y: '75%' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2"
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className="absolute inset-x-0 top-1/2 h-px bg-border/30" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-border/30" />
        </div>
      ))}
    </div>
  );
};

export default GridBackground;
