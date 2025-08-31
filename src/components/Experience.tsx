import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Jeev Lifeworks",
      location: "Remote",
      duration: "2021 - Present (3+ Years)",
      description: [
        "Developed healthcare technology solutions serving thousands of patients",
        "Built scalable web applications using React, Node.js, and cloud technologies",
        "Implemented AI-powered diagnostic tools and patient management systems",
        "Collaborated with medical professionals to design user-centric interfaces"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "MongoDB", "Healthcare APIs"]
    },
    {
      title: "ML Research Intern",
      company: "Argonne National Laboratory",
      location: "Chicago, IL",
      duration: "Summer 2023",
      description: [
        "Conducted cutting-edge machine learning research for scientific applications",
        "Developed computer vision models for automated data analysis",
        "Published research findings in peer-reviewed publications",
        "Collaborated with PhD researchers and national laboratory scientists"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Scientific Computing"]
    },
    {
      title: "Team Captain & Lead Programmer",
      company: "FIRST Robotics Team",
      location: "High School",
      duration: "2020 - 2023",
      description: [
        "Led a team of 20+ students in competitive robotics competitions",
        "Designed and programmed autonomous robot control systems",
        "Managed project timelines and coordinated with sponsors",
        "Mentored junior programmers in software development best practices"
      ],
      technologies: ["Java", "C++", "LabVIEW", "PID Control", "Computer Vision", "Team Leadership"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From healthcare technology to national laboratory research, 
              I've gained diverse experience across multiple domains.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent opacity-30"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="surface-card p-6 hover-lift">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-1 text-accent font-medium mb-2">
                          <span>{exp.company}</span>
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;