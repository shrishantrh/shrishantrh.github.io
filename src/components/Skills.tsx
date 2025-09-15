import { AnimatedCard } from "@/components/enhanced/AnimatedCard";
import { AdvancedSkillMeter } from "@/components/enhanced/AdvancedSkillMeter";
import { MorphingShape } from "@/components/enhanced/MorphingShape";
import { motion } from "framer-motion";
import { Code, Database, Brain, Wrench } from "lucide-react";
import { useSection } from "@/contexts/ScrollContext";

const Skills = () => {
  const { ref: sectionRef } = useSection('skills');

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Code,
      skills: [
        "React/Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GraphQL",
        "WebGL/Three.js"
      ]
    },
    {
      name: "Backend Development", 
      icon: Database,
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS/Cloud Services"
      ]
    },
    {
      name: "AI/ML Engineering",
      icon: Brain,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "NLP",
        "Data Science",
        "Statistical Analysis"
      ]
    },
    {
      name: "Tools & DevOps",
      icon: Wrench,
      skills: [
        "Git/GitHub",
        "Docker",
        "Linux/Unix",
        "CI/CD",
        "Figma",
        "Arduino/Raspberry Pi"
      ]
    }
  ];

  const skillsData = [
    { name: 'React/Next.js', level: 95, category: 'frontend' as const },
    { name: 'TypeScript', level: 90, category: 'frontend' as const },
    { name: 'Python', level: 88, category: 'backend' as const },
    { name: 'Node.js', level: 85, category: 'backend' as const },
    { name: 'Machine Learning', level: 82, category: 'ai' as const },
    { name: 'TensorFlow', level: 78, category: 'ai' as const },
    { name: 'Docker', level: 80, category: 'tools' as const },
    { name: 'AWS', level: 75, category: 'tools' as const },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' as const },
    { name: 'PostgreSQL', level: 83, category: 'backend' as const },
    { name: 'PyTorch', level: 76, category: 'ai' as const },
    { name: 'Git/GitHub', level: 90, category: 'tools' as const },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background morphing shapes */}
      <div className="absolute top-20 right-20 opacity-30">
        <MorphingShape size={300} color="#06b6d4" complexity={6} speed={0.01} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <MorphingShape size={200} color="#4f46e5" complexity={8} speed={0.015} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-display text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical expertise and proficiencies
            across various domains of computer science and engineering.
          </motion.p>
        </div>

        {/* Advanced Skills Visualization */}
        <div className="mb-16">
          <AdvancedSkillMeter skills={skillsData} />
        </div>

        {/* Traditional Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedCard 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="p-6 h-full relative overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading text-foreground">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skill} 
                      className="text-muted-foreground flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.5 
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;