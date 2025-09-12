import { Brain, Code, Heart, TrendingUp, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-display mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              <div 
                ref={statsRef}
                className={`grid grid-cols-3 gap-4 pt-6 transition-all duration-1000 delay-300 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="text-center group">
                  <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 relative">
                    3+
                    <TrendingUp className="absolute -top-2 -right-6 text-accent/60" size={16} />
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 relative">
                    10+
                    <Zap className="absolute -top-2 -right-6 text-accent/60" size={16} />
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 relative">
                    1
                    <Users className="absolute -top-2 -right-6 text-accent/60" size={16} />
                  </div>
                  <div className="text-sm text-muted-foreground">Publication</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div 
              ref={cardsRef}
              className={`space-y-6 transition-all duration-1000 delay-500 ${
                cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="surface-card surface-glow p-6 hover-lift group cursor-pointer relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-accent group-hover:rotate-6 transition-transform duration-300" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">Computer Science</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building robust, scalable software solutions with expertise in 
                  AI/ML, web development, and system architecture.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="surface-card surface-glow p-6 hover-lift group cursor-pointer relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="text-accent group-hover:animate-pulse transition-all duration-300" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">Bioengineering</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Applying engineering principles to biological systems, 
                  focused on medical devices and healthcare technologies.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="surface-card surface-glow p-6 hover-lift group cursor-pointer relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Brain className="text-accent group-hover:animate-bounce transition-all duration-300" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">AI/ML Research</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developing machine learning models for medical diagnosis, 
                  computer vision, and predictive healthcare analytics.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;