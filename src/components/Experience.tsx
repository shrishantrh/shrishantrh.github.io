import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import jvalaLogo from "@/assets/logos/jvala.png";
import jeevLogo from "@/assets/logos/jeev.png";
import uicLogo from "@/assets/logos/uic-robotics.png";
import argonneLogo from "@/assets/logos/argonne.png";

const Experience = () => {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "Jvala",
      location: "Champaign, IL",
      period: "Sep 2025 – Present",
      description: "AI-powered chronic condition tracker. Won UIUC Startup Weekend. Raised $20K+ from 1517 Fund.",
      link: "https://jvala.tech",
      logo: jvalaLogo
    },
    {
      role: "Software Development Intern",
      company: "Jeev Lifeworks",
      location: "Bengaluru, India",
      period: "Jun 2022 – Present",
      description: "Built production OCR system for FDA medical data migration, processing 10K+ documents monthly. Optimized pharmacovigilance signal detection algorithms for FDA's 15M+ record FAERS dataset.",
      link: "https://jeevlifeworks.com",
      logo: jeevLogo
    },
    {
      role: "Research Assistant",
      company: "UIC Robotics and Motion Lab",
      location: "Chicago, IL",
      period: "Sep 2024 – May 2025",
      description: "Developed autonomous pathfinding algorithms for Unitree Go1 quadruped robots using real-time stereo vision. Benchmarked against motion capture systems.",
      link: "https://pab47.github.io/",
      logo: uicLogo
    },
    {
      role: "Machine Learning Researcher",
      company: "Argonne National Laboratory",
      location: "Lemont, IL",
      period: "Sep 2023 – Jun 2024",
      description: "Developed LSTM-based classification models to predict thermoacoustic instability in aerospace propulsion systems. Published research on IMSA Digital Commons.",
      link: "https://www.anl.gov/taps/advanced-propulsion-and-power",
      logo: argonneLogo
    }
  ];

  return (
    <section className="section-spacing subtle-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Experience</h2>
        </FadeIn>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 100}>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover glow-hover group block"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                      />
                      <span className="group-hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1">
                        {exp.company}
                        <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground md:text-right whitespace-nowrap">
                    {exp.period}
                    <span className="hidden md:inline"> · </span>
                    <span className="block md:inline">{exp.location}</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {exp.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
