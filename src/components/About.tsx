import { Brain, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a freshman at the University of Illinois Urbana-Champaign, pursuing a unique 
              dual degree in Computer Science and Bioengineering—bridging the gap between 
              cutting-edge technology and life-saving healthcare innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-heading text-accent">The Perfect Intersection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey began with a fascination for how technology could solve real-world 
                  healthcare challenges. With 3+ years as a Software Development Intern at 
                  Jeev Lifeworks and research experience at Argonne National Laboratory, 
                  I've been fortunate to work at the forefront of healthcare innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a former FIRST Robotics team captain and published researcher, I bring 
                  both technical expertise and leadership experience to every project. 
                  My goal is to develop AI-powered solutions that make healthcare more 
                  accessible, accurate, and effective.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">1</div>
                  <div className="text-sm text-muted-foreground">Publication</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="space-y-6">
              <div className="surface-card surface-glow p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Code className="text-accent" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold">Computer Science</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Building robust, scalable software solutions with expertise in 
                  AI/ML, web development, and system architecture.
                </p>
              </div>

              <div className="surface-card surface-glow p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold">Bioengineering</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Applying engineering principles to biological systems, 
                  focused on medical devices and healthcare technologies.
                </p>
              </div>

              <div className="surface-card surface-glow p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Brain className="text-accent" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold">AI/ML Research</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Developing machine learning models for medical diagnosis, 
                  computer vision, and predictive healthcare analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;