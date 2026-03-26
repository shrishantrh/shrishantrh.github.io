import { ArrowUpRight, Award, ExternalLink, Smartphone, Video, FileText } from "lucide-react";
import FadeIn from "./FadeIn";
import jvalaLogo from "@/assets/logos/jvala.png";
import ardenLogo from "@/assets/logos/arden.png";
import butterflyLogo from "@/assets/logos/butterfly.png";

const Projects = () => {
  const projects = [
    {
      name: "Jvala",
      tagline: "Evidence-based chronic condition platform",
      description: "Health monitoring platform that uses AI to help patients track and manage chronic conditions. Won 1st at UIUC Startup Weekend and pitched as a top 10 startup at CMU's NexHacks.",
      links: [
        { label: "Website", url: "https://jvala.tech", icon: "external" },
        { label: "App Store", url: "https://apps.apple.com/us/app/jvala/id6759641361", icon: "appstore" },
      ],
      award: "Secured $20K+ backing from 1517 Fund",
      tech: ["AI/ML", "Healthcare", "React Native", "iOS"],
      logo: jvalaLogo
    },
    {
      name: "Arden",
      tagline: "Real-time AI psychiatric diagnostic copilot",
      description: "Multimodal copilot that watches and listens to psychiatric interviews, surfacing diagnostic signals clinicians might miss. Analyzes 28 biometric measurements via video, detects 50+ crisis keywords in speech, and generates DSM-5-coded clinical reports — all in real time during the session.",
      links: [
        { label: "Devpost", url: "https://devpost.com/software/project-v813inysf24z", icon: "devpost" },
        { label: "Demo", url: "https://www.youtube.com/watch?v=GlrNu1b3Bxg", icon: "video" },
      ],
      award: "NexHacks 2026 @ CMU — Top 10",
      tech: ["LiveKit", "Overshoot", "Gemini", "React", "Supabase"],
      logo: ardenLogo
    },
    {
      name: "Butterfly",
      tagline: "Realtime intelligence for CAT inspections",
      description: "Multimodal AI co-pilot that transforms heavy equipment inspections into a hands-free, voice-driven workflow. Technicians walk and talk while Butterfly transcribes speech and analyzes live video to auto-fill a 38-item inspection form, cross-validate findings, and generate PDF reports with parts recommendations.",
      links: [
        { label: "Try It", url: "https://usebutterfly.lovable.app/", icon: "external" },
        { label: "Devpost", url: "https://devpost.com/software/butterfly-aslk19", icon: "devpost" },
        { label: "Demo", url: "https://www.youtube.com/watch?v=hZcuh3qi-ik", icon: "video" },
      ],
      award: "HackIllinois 2026",
      tech: ["Gemini 2.5", "React", "Firecrawl", "Supabase"],
      logo: butterflyLogo
    },
    {
      name: "ParkPal",
      tagline: "Voice-native end-to-end parking navigation",
      description: "End-to-end voice-native parking system that guides drivers from city streets to an available spot inside a garage. Uses YOLOv8 computer vision on CCTV feeds to detect open spots, predicts availability hours ahead, and provides turn-by-turn in-lot navigation — all hands-free.",
      links: [
        { label: "Devpost", url: "https://devpost.com/software/parkpal-8x6pgk", icon: "devpost" },
      ],
      award: "UIUC Keywords AI Hackathon 2026",
      tech: ["YOLOv8", "Google Maps", "ElevenLabs", "Keywords AI"],
      logo: null,
      emoji: "🅿️"
    },
    {
      name: "Neurovision",
      tagline: "Medical AI diagnostic platform",
      description: "CNN-based early-stage Alzheimer's detection from MRI scans achieving 92% accuracy. Built HIPAA-compliant data pipeline for medical imaging analysis.",
      links: [],
      award: null,
      tech: ["TensorFlow", "Python", "Medical Imaging"],
      logo: null
    },
    {
      name: "Agricare",
      tagline: "Agricultural disease detection",
      description: "Computer vision app for crop disease identification with treatment recommendations. Custom CNN architecture with OpenCV for real-time analysis.",
      links: [],
      award: null,
      tech: ["OpenCV", "CNN", "Mobile"],
      logo: null
    }
  ];

  const getLinkIcon = (icon: string) => {
    switch (icon) {
      case "video": return <Video size={12} />;
      case "appstore": return <Smartphone size={12} />;
      case "devpost": return <FileText size={12} />;
      default: return <ExternalLink size={12} />;
    }
  };

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
                    <div className="inline-flex items-center gap-2">
                      {project.logo && (
                        <img 
                          src={project.logo} 
                          alt={`${project.name} logo`} 
                          className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                        />
                      )}
                      {project.emoji && (
                        <span className="text-base leading-none">{project.emoji}</span>
                      )}
                      <h3 className="text-base font-medium text-foreground">
                        {project.name}
                      </h3>
                    </div>
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

                {/* Link buttons */}
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                      >
                        {getLinkIcon(link.icon)}
                        {link.label}
                        <ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
                
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
