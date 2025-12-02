import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Jeev Lifeworks",
      location: "Bengaluru, India",
      period: "Jun 2022 – Present",
      description: "Built production OCR system for FDA medical data migration, processing 10K+ documents monthly. Optimized pharmacovigilance signal detection algorithms for FDA's 15M+ record FAERS dataset.",
      link: null
    },
    {
      role: "Machine Learning Researcher",
      company: "Argonne National Laboratory",
      location: "Lemont, IL",
      period: "Sep 2023 – Jun 2024",
      description: "Developed LSTM-based classification models to predict thermoacoustic instability in aerospace propulsion systems. Published research on IMSA Digital Commons.",
      link: "https://digitalcommons.imsa.edu/"
    },
    {
      role: "Research Assistant",
      company: "UIC Robotics and Motion Lab",
      location: "Chicago, IL",
      period: "Sep 2024 – May 2025",
      description: "Developed autonomous pathfinding algorithms for Unitree Go1 quadruped robots using real-time stereo vision. Benchmarked against motion capture systems.",
      link: null
    }
  ];

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{exp.company}</span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground md:text-right">
                  {exp.period}
                  <br />
                  <span className="text-xs">{exp.location}</span>
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
