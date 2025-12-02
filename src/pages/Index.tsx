import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Involvement from "@/components/Involvement";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="involvement">
          <Involvement />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
