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
    <section className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Projects</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="clay-card p-5 group hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2 relative z-10">
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
                            className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                          />
                        )}
                        <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </h3>
                        <ArrowUpRight size={14} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                      </a>
                    ) : (
                      <h3 className="text-base font-medium text-foreground inline-flex items-center gap-2">
                        {project.logo && (
                          <img 
                            src={project.logo} 
                            alt={`${project.name} logo`} 
                            className="w-5 h-5 object-contain opacity-70"
                          />
                        )}
                        {project.name}
                      </h3>
                    )}
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{project.tagline}</p>
                  </div>
                </div>
                
                {project.award && (
                  <div className="clay-pill inline-flex items-center gap-1.5 text-xs text-primary px-3 py-1.5 mb-3 w-fit relative z-10">
                    <Award size={12} className="relative z-10" />
                    <span className="relative z-10">{project.award}</span>
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/70 transition-colors duration-300 flex-1 relative z-10">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50 transition-all duration-300 group-hover:border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ASCII decoration */}
                <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/15 tracking-widest">
                  [{String(index).padStart(2, '0')}]
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
