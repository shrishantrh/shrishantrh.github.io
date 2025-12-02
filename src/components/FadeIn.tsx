import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
