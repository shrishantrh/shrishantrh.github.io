import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
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
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <Silk
          speed={3}
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
          backdropFilter: 'blur(0px)',
          mask: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      
      {/* Additional blur fade for smoother transition */}
      <div 
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-10 backdrop-blur-sm"
        style={{
          mask: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-float-delayed" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="blur-in flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <img 
                src={headshot} 
                alt="Shrishant Hattarki" 
                className="relative w-24 h-24 rounded-full object-cover ring-2 ring-border shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-background rounded-full flex items-center justify-center shadow-lg border border-border transition-transform duration-300 group-hover:scale-110">
                <img src={uiucLogo} alt="UIUC" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="animate-in-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-xs text-muted-foreground border border-border/50 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            CS + Bioengineering @ UIUC
          </div>

          {/* Name */}
          <h1 className="animate-in-delay-1 text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
            Shrishant Hattarki
          </h1>

          {/* Bio */}
          <p className="animate-in-delay-2 text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Building at the intersection of technology and healthcare. ML researcher, software developer, and founder.
          </p>

          {/* Links */}
          <div className="animate-in-delay-3 flex items-center justify-center gap-3 pt-2">
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
                className="p-2.5 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 border border-transparent hover:border-border hover:shadow-lg hover:-translate-y-0.5"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout} 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 p-2 text-muted-foreground/50 hover:text-muted-foreground transition-all duration-300 hover:-translate-y-1" 
          aria-label="Scroll to content"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
