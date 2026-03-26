import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">About</h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="clay-card p-6 md:p-8">
            <div className="space-y-5 leading-relaxed relative z-10">
              <p className="text-base text-foreground/90">
                Hey! I'm studying honors Computer Science & Bioengineering at the University of Illinois Urbana-Champaign. I'm passionate about the intersection of AI and healthcare — building technology that makes care more accessible, intelligent, and evidence-based.
              </p>
              <p className="text-sm text-muted-foreground">
                I'm the founder of{" "}
                <a 
                  href="https://jvala.tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
                >
                  Jvala
                </a>
                , the first evidence-based chronic condition platform. We raised $20K+ from{" "}
                <a 
                  href="https://www.1517fund.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
                >
                  1517 Fund
                </a>
                , won first at UIUC's Startup Weekend, and pitched as a top 10 startup at CMU's NexHacks.
              </p>
              <p className="text-sm text-muted-foreground">
                On the research side, I've worked on autonomous quadruped pathfinding at{" "}
                <a 
                  href="https://pab47.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
                >
                  UIC's Robotics and Motion Lab
                </a>
                {" "}and previously built LSTM models at{" "}
                <a 
                  href="https://anl.gov/taps/advanced-propulsion-and-power" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
                >
                  Argonne National Laboratory
                </a>
                {" "}for aerospace propulsion systems. I've also interned at{" "}
                <a 
                  href="https://jeevlifeworks.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
                >
                  Jeev Lifeworks
                </a>
                {" "}optimizing FDA drug safety algorithms.
              </p>
              <p className="text-sm text-muted-foreground">
                Always down to connect with others working in any of these spaces!
              </p>
            </div>
            {/* ASCII decoration */}
            <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/20 tracking-widest">
              .md
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
