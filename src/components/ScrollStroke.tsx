import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const LinePath = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 400"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.path
        d="M 50 0 C 20 100, 80 200, 50 300 S 20 400, 50 400"
        stroke="hsl(220 60% 50%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ pathLength }}
      />
    </svg>
  );
};

const ScrollStroke = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-4 top-0 z-20 hidden h-screen w-8 md:block opacity-40"
    >
      <LinePath scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ScrollStroke;