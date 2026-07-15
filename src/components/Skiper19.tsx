"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const Skiper19 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section ref={ref} className="relative section-spacing">
      <div className="container-narrow">
        <div className="relative">
          <h2 className="section-title mb-2">The Stroke</h2>
          <p className="text-foreground/80 leading-relaxed max-w-xl">
            That follows the scroll progress. Scroll down to see the effect.
          </p>

          <div className="relative mt-10 h-[60vh]">
            <LinePath
              className="absolute inset-0 w-full h-full"
              scrollYProgress={scrollYProgress}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: MotionValue<number>;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 200 C 150 40, 300 360, 450 200 S 750 40, 800 200"
        stroke="hsl(220 60% 50%)"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ pathLength }}
      />
    </svg>
  );
};

export { Skiper19 };
export default Skiper19;