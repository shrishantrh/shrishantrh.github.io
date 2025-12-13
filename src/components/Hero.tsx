import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import uiucLogo from "@/assets/logos/uiuc.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='currentColor'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
        }} 
      />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="animate-in flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={headshot} 
                alt="Shrishant Hattarki" 
                className="relative w-28 h-28 rounded-full object-cover ring-2 ring-border shadow-lg transition-transform duration-300 group-hover:scale-[1.02]" 
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md border border-border">
                <img src={uiucLogo} alt="UIUC" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="animate-in-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-sm text-muted-foreground border border-border/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            CS + Bioengineering @ UIUC
          </div>

          {/* Name */}
          <h1 className="animate-in-delay-1 text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
            Shrishant Hattarki
          </h1>

          {/* Bio */}
          <p className="animate-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building at the intersection of technology and healthcare. ML researcher, software developer, and founder.
          </p>

          {/* Links */}
          <div className="animate-in-delay-3 flex items-center justify-center gap-3 pt-4">
            <a 
              href="https://github.com/shrishantrh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 border border-transparent hover:border-border/50" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/shrishanth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 border border-transparent hover:border-border/50" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:shatt@illinois.edu" 
              className="p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 border border-transparent hover:border-border/50" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 glow-primary"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout} 
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 p-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300" 
          aria-label="Scroll to content"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;