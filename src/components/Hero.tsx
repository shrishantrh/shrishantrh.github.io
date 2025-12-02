import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import uiucLogo from "@/assets/logos/uiuc.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="animate-in flex justify-center">
            <div className="relative">
              <img 
                src={headshot} 
                alt="Shrishant Hattarki" 
                className="w-28 h-28 rounded-full object-cover ring-4 ring-secondary shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md border border-border">
                <img src={uiucLogo} alt="UIUC" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="animate-in-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            CS + Bioengineering @ UIUC
          </div>

          {/* Name */}
          <h1 className="animate-in-delay-1 text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
            Shrishant Hattarki
          </h1>

          {/* Bio */}
          <p className="animate-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building at the intersection of technology and healthcare. 
            ML researcher, software developer, and problem solver.
          </p>

          {/* Links */}
          <div className="animate-in-delay-3 flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/shrishantrh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shrishanth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shatt@illinois.edu"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all hover:scale-105"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
