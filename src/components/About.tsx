import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">About</h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="space-y-5 leading-relaxed">
            <p className="text-base text-foreground/90">
              I'm a freshman at the University of Illinois Urbana-Champaign studying Computer Science and Bioengineering. I'm passionate about building technology that makes healthcare more accessible.
            </p>
            <p className="text-sm text-muted-foreground">
              Currently, I'm the founder of{" "}
              <a 
                href="https://jvala.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
              >
                Jvala
              </a>
              , an AI-powered chronic condition tracker that won UIUC Startup Weekend and raised funding from{" "}
              <a 
                href="https://www.1517fund.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors duration-300 smooth-link"
              >
                1517 Fund
              </a>
              . I've also worked on ML research at Argonne National Laboratory and built production systems at Jeev Lifeworks.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
