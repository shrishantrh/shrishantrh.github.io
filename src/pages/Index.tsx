import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActionButton from "@/components/FloatingActionButton";
import InteractiveBackground from "@/components/InteractiveBackground";
import { CustomCursor } from "@/components/enhanced/CustomCursor";

const Index = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background bg-geometric relative overflow-x-hidden cursor-none">
      <CustomCursor />
      <InteractiveBackground />
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      <FloatingActionButton />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className={`${isVisible['about'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <About />
        </section>
        
        <section id="experience" className={`${isVisible['experience'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <Experience />
        </section>
        
        <section id="projects" className={`${isVisible['projects'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <Projects />
        </section>
        
        <section id="skills" className={`${isVisible['skills'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <Skills />
        </section>
        
        <section id="research" className={`${isVisible['research'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <Research />
        </section>
        
        <section id="contact" className={`${isVisible['contact'] ? 'animate-fade-in' : 'opacity-0'}`}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;