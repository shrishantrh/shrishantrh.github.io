import { ExternalLink, Github, Award, Brain, Shield, Leaf } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neurovision",
      subtitle: "AI-Powered Alzheimer's Detection",
      description: "Advanced machine learning system for early Alzheimer's detection using neuroimaging data. Achieved 94% accuracy in clinical trials.",
      longDescription: [
        "Developed CNN-based deep learning model for MRI scan analysis",
        "Implemented ensemble learning techniques for improved accuracy", 
        "Created intuitive web interface for healthcare professionals",
        "Validated with real clinical datasets from multiple hospitals"
      ],
      icon: Brain,
      technologies: ["Python", "TensorFlow", "React", "Medical Imaging", "CNN", "Healthcare APIs"],
      features: ["94% Accuracy", "Clinical Validation", "Real-time Analysis"],
      github: "#",
      demo: "#",
      award: "Winner - Healthcare Innovation Challenge 2023"
    },
    {
      title: "StoveStopper",
      subtitle: "IoT Fire Prevention System",
      description: "Smart kitchen safety system using IoT sensors and machine learning to prevent cooking-related fires before they start.",
      longDescription: [
        "Built IoT sensor network for real-time kitchen monitoring",
        "Developed predictive ML models for fire risk assessment",
        "Created mobile app for remote monitoring and alerts",
        "Integrated with smart home systems and emergency services"
      ],
      icon: Shield,
      technologies: ["Arduino", "Python", "IoT", "React Native", "Firebase", "Machine Learning"],
      features: ["Real-time Monitoring", "Predictive Alerts", "Mobile Integration"],
      github: "#",
      demo: "#",
      award: "2nd Place - Smart Cities Hackathon 2023"
    },
    {
      title: "Agricare",
      subtitle: "Crop Disease Detection Platform",
      description: "Computer vision platform helping farmers identify crop diseases early using smartphone cameras and AI diagnosis.",
      longDescription: [
        "Trained image classification models on 50,000+ crop images",
        "Built cross-platform mobile app for field use",
        "Integrated weather data for enhanced predictions",
        "Partnered with agricultural extension services for deployment"
      ],
      icon: Leaf,
      technologies: ["Python", "OpenCV", "Flutter", "TensorFlow Lite", "Google Cloud", "Agriculture APIs"],
      features: ["95%+ Disease Accuracy", "Offline Capability", "Multi-language Support"],
      github: "#",
      demo: "#",
      award: "Best Social Impact - AgTech Innovation Summit 2023"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From healthcare AI to IoT solutions, here are some projects that showcase 
              my passion for solving real-world problems with technology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="surface-card surface-glow p-8 hover-lift group">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Project Icon & Header */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                        <project.icon className="text-accent" size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Award Badge */}
                    {project.award && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="text-accent" size={16} />
                        <span className="text-accent font-medium">{project.award}</span>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-3">
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-secondary/80 hover:bg-secondary text-secondary-foreground rounded-lg transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2">
                        {project.longDescription.map((detail, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full font-medium border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Projects;