import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Involvement from "@/components/Involvement";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";
import AsciiDivider from "@/components/AsciiDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GridBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <AsciiDivider label=".about" />
        <section id="about">
          <About />
        </section>
        
        <AsciiDivider label=".experience" />
        <section id="experience">
          <Experience />
        </section>
        
        <AsciiDivider label=".projects" />
        <section id="projects">
          <Projects />
        </section>
        
        <AsciiDivider label=".involvement" />
        <section id="involvement">
          <Involvement />
        </section>
        
        <AsciiDivider label=".blog" />
        <section id="blog">
          <Blog />
        </section>
        
        <AsciiDivider label=".contact" />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
