import { useState, useEffect, useCallback } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useMousePosition } from "@/hooks/useScrollAnimation";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const mousePosition = useMousePosition();
  
  const roles = [
    "a Developer",
    "a Researcher", 
    "an Engineer",
    "an Innovator",
    "a Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const calculateParallax = useCallback((speed: number) => {
    return mousePosition.x * speed * 0.02;
  }, [mousePosition.x]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-hero bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              [⚠ W.I.P] Shrishant Hattarki
            </h1>
            <div className="text-subheading text-muted-foreground">
              CS Student at{" "}
              <span className="text-accent font-semibold">UIUC</span>
            </div>
          </div>

          {/* Animated Role */}
          <div className="text-display text-foreground h-20 flex items-center justify-center">
            <span>I'm </span>
            <div className="relative ml-2">
              <span 
                key={currentRole}
                className={`text-accent font-bold transition-all duration-500 ${
                  isTyping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {roles[currentRole]}
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-50 animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging the gap between technology and healthcare through
            innovative AI/ML solutions, robotics, and bioengineering applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton 
              onClick={scrollToAbout}
              className="btn-hero group"
              strength={0.4}
            >
              <span className="relative z-10">Explore My Work</span>
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-secondary"
              strength={0.3}
            >
              Download Resume
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/shrishantrh" 
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shrishant-hattarki-15406a355/" 
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:shatt@illinois.edu"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateX(${calculateParallax(0.5)}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateX(${calculateParallax(-0.3)}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Sparkles 
            className="text-accent/20 animate-pulse" 
            size={200}
            style={{ 
              transform: `rotate(${mousePosition.x * 0.01}deg) translateX(${calculateParallax(0.2)}px)`
            }}
          />
        </div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-accent/30 rotate-45 animate-bounce delay-300" />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-primary/40 rounded-full animate-ping delay-700" />
        <div className="absolute top-2/3 right-1/3 w-2 h-8 bg-accent/25 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;
