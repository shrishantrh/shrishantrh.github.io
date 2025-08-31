import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Developer",
    "Researcher", 
    "Engineer",
    "Innovator",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-hero bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Shrishant Hattarki
            </h1>
            <div className="text-subheading text-muted-foreground">
              CS + BioE Student at{" "}
              <span className="text-accent font-semibold">UIUC</span>
            </div>
          </div>

          {/* Animated Role */}
          <div className="text-display text-foreground h-20 flex items-center justify-center">
            <span>I'm a </span>
            <span 
              key={currentRole}
              className="text-accent font-bold ml-2 animate-fade-in"
            >
              {roles[currentRole]}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging the gap between technology and healthcare through
            innovative AI/ML solutions, robotics, and bioengineering applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="btn-hero"
            >
              Explore My Work
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/shrishant" 
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/shrishant-hattarki" 
              target="_blank"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:shrishant@illinois.edu"
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

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;