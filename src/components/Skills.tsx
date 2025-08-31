import { useState } from "react";
import { Code, Database, Brain, Wrench, Globe, Microscope } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-accent to-accent-glow",
      skills: [
        { name: "Python", level: 95, description: "AI/ML, Data Science, Backend Development" },
        { name: "JavaScript/TypeScript", level: 90, description: "Full-stack web development, React ecosystem" },
        { name: "Java", level: 85, description: "Enterprise applications, Android development" },
        { name: "C++", level: 80, description: "System programming, competitive programming" },
        { name: "R", level: 75, description: "Statistical analysis, bioinformatics" },
        { name: "MATLAB", level: 70, description: "Scientific computing, signal processing" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "from-primary to-primary-glow",
      skills: [
        { name: "TensorFlow/Keras", level: 90, description: "Deep learning, neural networks" },
        { name: "PyTorch", level: 85, description: "Research, computer vision models" },
        { name: "Scikit-learn", level: 88, description: "Machine learning algorithms" },
        { name: "Computer Vision", level: 85, description: "OpenCV, medical imaging" },
        { name: "NLP", level: 75, description: "Text analysis, transformers" },
        { name: "Data Analysis", level: 90, description: "Pandas, NumPy, statistical modeling" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-accent-glow to-primary",
      skills: [
        { name: "React/Next.js", level: 92, description: "Modern web applications, SSR/SSG" },
        { name: "Node.js", level: 88, description: "Backend APIs, microservices" },
        { name: "Tailwind CSS", level: 90, description: "Responsive design, component libraries" },
        { name: "GraphQL", level: 75, description: "API design, data fetching" },
        { name: "AWS/Cloud", level: 80, description: "Deployment, serverless, containers" },
        { name: "MongoDB/SQL", level: 85, description: "Database design, optimization" }
      ]
    },
    {
      title: "Bioengineering",
      icon: Microscope,
      color: "from-primary-glow to-accent",
      skills: [
        { name: "Medical Imaging", level: 80, description: "MRI/CT analysis, DICOM processing" },
        { name: "Bioinformatics", level: 75, description: "Genomics, sequence analysis" },
        { name: "MATLAB/Simulink", level: 85, description: "Biomedical signal processing" },
        { name: "CAD/SolidWorks", level: 70, description: "Medical device design" },
        { name: "Statistical Analysis", level: 85, description: "Clinical data, R/Python" },
        { name: "Laboratory Techniques", level: 75, description: "Cell culture, microscopy" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-accent to-primary-glow",
      skills: [
        { name: "Git/GitHub", level: 95, description: "Version control, collaboration" },
        { name: "Docker", level: 80, description: "Containerization, deployment" },
        { name: "Linux/Unix", level: 85, description: "System administration, shell scripting" },
        { name: "Arduino/Raspberry Pi", level: 88, description: "IoT, embedded systems" },
        { name: "Figma", level: 75, description: "UI/UX design, prototyping" },
        { name: "Jupyter", level: 90, description: "Data analysis, research notebooks" }
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning computer science, bioengineering, 
              and everything in between.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Selector */}
            <div className="lg:col-span-1">
              <div className="space-y-2 sticky top-24">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeCategory === index
                          ? 'bg-accent/20 text-accent border border-accent/30'
                          : 'bg-secondary/50 text-muted-foreground hover:bg-secondary/80 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={20} />
                        <span className="font-medium">{category.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-3">
              <div className="surface-card p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                    {(() => {
                      const IconComponent = skillCategories[activeCategory].icon;
                      return <IconComponent className="text-white" size={24} />;
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                        <span className="text-accent font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="relative">
                        <div className="w-full bg-secondary/50 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="surface-card p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="surface-card p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Frameworks & Libraries</div>
                  </div>
                  <div className="surface-card p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Tools & Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;