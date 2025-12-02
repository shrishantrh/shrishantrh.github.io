import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-8 animate-in">
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            CS + Bioengineering @ UIUC
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
            Shrishant Hattarki
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building at the intersection of technology and healthcare. 
            ML researcher, software developer, and problem solver.
          </p>

          {/* Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/shrishantrh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shrishanth/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shatt@illinois.edu"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
