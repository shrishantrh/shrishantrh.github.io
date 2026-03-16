import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpeg";
import uiucLogo from "@/assets/logos/uiuc.png";
import Silk from "./Silk";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Silk background effect */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <Silk
          speed={7}
          scale={1.2}
          color="#6B7280"
          noiseIntensity={1}
          rotation={0}
        />
      </div>
      
      {/* Fade overlay at bottom */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)',
          mask: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      
      <div 
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-10 backdrop-blur-sm"
        style={{
          mask: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />

      {/* ASCII corner decorations */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-muted-foreground/15 tracking-widest hidden md:block">
        {">"} PORTFOLIO.v2
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-muted-foreground/15 tracking-widest hidden md:block">
        [ .HERO ]
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="space-y-6">
          {/* Profile Picture with clay effect */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)' }}
              />
              <div className="clay-pill p-1">
                <img 
                  src={headshot} 
                  alt="Shrishant Hattarki" 
                  className="relative w-24 h-24 rounded-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-1 -right-1 clay-pill p-1">
                <img src={uiucLogo} alt="UIUC" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Status */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="clay-pill px-4 py-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              CS + Bioengineering @ UIUC
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Shrishant Hattarki
          </motion.h1>

          {/* Bio */}
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Building at the intersection of technology and healthcare. ML researcher, software developer, and founder.
          </motion.p>

          {/* Links */}
          <motion.div 
            className="flex items-center justify-center gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { href: "https://github.com/shrishantrh", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/shrishanth", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:shatt@illinois.edu", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="clay-button p-2.5 text-muted-foreground hover:text-foreground"
                aria-label={label}
              >
                <Icon size={18} className="relative z-10" />
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="clay-button px-5 py-2.5 inline-flex items-center gap-2 font-medium text-sm text-foreground"
            >
              <FileText size={14} className="relative z-10" />
              <span className="relative z-10">Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button 
          onClick={scrollToAbout} 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 p-2 text-muted-foreground/50 hover:text-muted-foreground transition-all duration-300 hover:-translate-y-1" 
          aria-label="Scroll to content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ArrowDown size={20} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
