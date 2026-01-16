import { ArrowUpRight, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import jvalaLogo from "@/assets/logos/jvala.png";
import charcotLogo from "@/assets/logos/charcot.png";

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
      name: "Charcot",
      tagline: "AI-powered real-time psychiatric diagnostic copilot",
      description: "Multimodal clinical support platform that analyzes live patient interviews using speech, facial behavior, and nonverbal cues to surface differential diagnoses, red flags, and follow-up prompts during sessions. Built with privacy-first, browser-based ML for in-room use by psychiatrists.",
      link: "https://jvala.tech/#/charcot",
      award: null,
      tech: ["AI/ML", "Healthcare", "Multimodal Analysis", "React", "TensorFlow.js", "MediaPipe"],
      logo: charcotLogo
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
    <section className="section-spacing subtle-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Projects</h2>
        </FadeIn>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="card-hover glow-hover group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group-hover:text-primary transition-colors duration-300"
                      >
                        {project.logo && (
                          <img 
                            src={project.logo} 
                            alt={`${project.name} logo`} 
                            className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                          />
                        )}
                        <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </h3>
                        <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                      </a>
                    ) : (
                      <h3 className="text-base font-medium text-foreground inline-flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        {project.logo && (
                          <img 
                            src={project.logo} 
                            alt={`${project.name} logo`} 
                            className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                          />
                        )}
                        {project.name}
                      </h3>
                    )}
                    <p className="text-xs text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>
                
                {project.award && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-2 border border-primary/20">
                    <Award size={12} />
                    {project.award}
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 group-hover:text-foreground/70 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground border border-border/50 transition-all duration-300 group-hover:border-border group-hover:bg-secondary"
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
