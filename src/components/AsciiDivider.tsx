import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AsciiDividerProps {
  label?: string;
}

const AsciiDivider = ({ label }: AsciiDividerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="container-narrow">
      <motion.div
        className="flex items-center gap-4 py-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 h-px bg-border/50" />
        {label && (
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/30 uppercase">
            {label}
          </span>
        )}
        <div className="flex-1 h-px bg-border/50" />
      </motion.div>
    </div>
  );
};

export default AsciiDivider;
