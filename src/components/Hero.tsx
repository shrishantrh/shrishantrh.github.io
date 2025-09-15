import { useState, useEffect, useCallback } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useMousePosition } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/enhanced/MagneticButton";
import { MorphingShape } from "@/components/enhanced/MorphingShape";
import { useAdvancedScroll } from "@/hooks/useAdvancedScroll";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const mousePosition = useMousePosition();
  const { elementProgress, scrollY } = useAdvancedScroll();
  
  // Advanced parallax effects
  const heroY = useTransform(scrollY, [0, 800], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  
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
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-geometric"
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
    >
      {/* Advanced morphing background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 opacity-30">
          <MorphingShape size={400} color="#06b6d4" complexity={8} speed={0.008} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-20">
          <MorphingShape size={300} color="#4f46e5" complexity={6} speed={0.012} />
        </div>
        <div className="absolute bottom-1/4 left-1/2 opacity-25">
          <MorphingShape size={250} color="#10b981" complexity={10} speed={0.01} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading with advanced text effects */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 
              className="text-hero bg-gradient-to-r from-foreground via-primary-glow to-accent bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Shrishant Hattarki
              
              {/* Floating particles around name */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    x: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.h1>
            
            <motion.div 
              className="text-subheading text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              CS Student at{" "}
              <motion.span 
                className="text-accent font-semibold"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary-glow))" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                UIUC
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced Animated Role with morphing background */}
          <div className="text-display text-foreground h-20 flex items-center justify-center relative">
            <span>I'm </span>
            <div className="relative ml-2">
              <motion.span 
                key={currentRole}
                className={`text-accent font-bold transition-all duration-500 relative z-10 ${
                  isTyping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 20px hsl(var(--accent-glow))",
                }}
              >
                {roles[currentRole]}
              </motion.span>
              
              {/* Dynamic glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Enhanced Description */}
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about bridging the gap between technology and healthcare through
            innovative AI/ML solutions, robotics, and bioengineering applications.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <MagneticButton 
              onClick={scrollToAbout}
              className="btn-hero group relative overflow-hidden"
              strength={0.4}
            >
              <span className="relative z-10">Explore My Work</span>
              
              {/* Enhanced ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-accent-glow/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 3, 
                  opacity: [0, 0.5, 0],
                  transition: { duration: 0.6 }
                }}
              />
            </MagneticButton>
            
            <MagneticButton 
              className="btn-secondary group"
              strength={0.3}
            >
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="block w-full h-full relative z-10"
              >
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center space-x-4 pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/shrishantrh" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shrishant-hattarki-15406a355/" },
              { icon: Mail, href: "mailto:shatt@illinois.edu" },
            ].map(({ icon: Icon, href }, index) => (
              <MagneticButton 
                key={href}
                className="p-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                strength={0.5}
              >
                <motion.a 
                  href={href}
                  target="_blank"
                  className="block w-full h-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <MagneticButton 
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/30 text-muted-foreground hover:text-accent transition-colors group"
            strength={0.3}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
