import { ArrowUpRight, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import jvalaLogo from "@/assets/logos/jvala.png";

const Projects = () => {
  const projects = [
    {
      name: "Jvala",
      tagline: "AI-powered chronic condition tracker",
      description: "Health monitoring platform that uses AI to help patients track and manage chronic conditions. Won UIUC Startup Weekend.",
      link: "https://jvala.tech",
      award: "Secured $20K+ backing from 1517 Fund",
      tech: ["AI/ML", "Healthcare", "React Native"],
      logo: jvalaLogo
    },
    {
      name: "Neurovision",
      tagline: "Medical AI diagnostic platform",
      description: "CNN-based early-stage Alzheimer's detection from MRI scans achieving 92% accuracy. Built HIPAA-compliant data pipeline.",
      link: null,
      award: null,
      tech: ["TensorFlow", "Python", "Medical Imaging"],
      logo: null
    },
    {
      name: "Agricare",
      tagline: "Agricultural disease detection",
      description: "Computer vision app for crop disease identification with treatment recommendations. Custom CNN architecture with OpenCV.",
      link: null,
      award: null,
      tech: ["OpenCV", "CNN", "Mobile"],
      logo: null
    }
  ];

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group">
                <div className="flex items-start gap-4 mb-2">
                  {/* Logo */}
                  {project.logo && (
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden">
                        <img 
                          src={project.logo} 
                          alt={`${project.name} logo`} 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-foreground inline-flex items-center gap-2">
                          {project.name}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <ArrowUpRight size={16} />
                            </a>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {project.award && (
                  <div className="inline-flex items-center gap-1.5 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 ml-16">
                    <Award size={14} />
                    {project.award}
                  </div>
                )}
                
                <p className="text-foreground/70 leading-relaxed mb-3 ml-16">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 ml-16">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
