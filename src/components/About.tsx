const About = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I'm a freshman at the <span className="text-foreground font-medium">University of Illinois at Urbana-Champaign</span> studying 
            Computer Science and Bioengineering with a 4.0 GPA.
          </p>
          
          <p>
            My work sits at the intersection of healthcare and technology. I've built production OCR systems 
            processing 10K+ medical documents monthly, developed ML models for aerospace applications at 
            Argonne National Laboratory, and created autonomous pathfinding algorithms for quadruped robots.
          </p>
          
          <p>
            Recently, I co-founded <span className="text-foreground font-medium">Jvala</span>, an AI-powered 
            chronic condition tracker that won UIUC Startup Weekend and secured $20K+ in funding from 1517 Fund.
          </p>
          
          <p>
            When I'm not coding, you'll find me mentoring robotics teams—my FLL team won regional and sectional 
            victories, and I received the FIRST Coaches & Mentors Award for my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
