import { FileText, ExternalLink, Award, Users, Calendar } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Machine Learning Applications in Biomedical Signal Processing: A Comprehensive Review",
      authors: ["S. Hattarki", "Dr. Jane Smith", "Dr. Michael Johnson"],
      journal: "Journal of Biomedical Engineering Research",
      year: "2023",
      type: "Peer-Reviewed Article",
      abstract: "This comprehensive review examines the current state and future directions of machine learning applications in biomedical signal processing, with particular focus on diagnostic applications and real-time monitoring systems.",
      keywords: ["Machine Learning", "Biomedical Engineering", "Signal Processing", "Healthcare AI"],
      citations: 12,
      link: "#",
      lab: "Argonne National Laboratory"
    }
  ];

  const researchAreas = [
    {
      title: "Healthcare AI",
      description: "Developing AI solutions for medical diagnosis and treatment optimization",
      projects: ["Neurovision - Alzheimer's Detection", "Medical Image Analysis", "Clinical Decision Support"],
      icon: "🧠"
    },
    {
      title: "Biomedical Signal Processing",
      description: "Processing and analyzing biological signals for diagnostic purposes",
      projects: ["EEG Analysis", "ECG Pattern Recognition", "Real-time Monitoring Systems"],
      icon: "📊"
    },
    {
      title: "Computer Vision in Medicine",
      description: "Applying computer vision techniques to medical imaging and diagnostics",
      projects: ["Medical Image Segmentation", "Pathology Detection", "Surgical Navigation"],
      icon: "👁️"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Research & Publications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contributing to the scientific community through research at the intersection 
              of computer science and biomedical engineering.
            </p>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-heading mb-8">Recent Publications</h3>
            
            {publications.map((pub, index) => (
              <div key={index} className="surface-card p-8 hover-lift mb-6">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {pub.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{pub.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{pub.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award size={14} />
                          <span>{pub.citations} citations</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="text-accent font-medium">{pub.journal}</div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Research Lab:</span> {pub.lab}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Type:</span> {pub.type}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <a 
                        href={pub.link}
                        className="flex items-center space-x-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors text-sm"
                      >
                        <FileText size={16} />
                        <span>Read Paper</span>
                      </a>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Abstract</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Keywords</h5>
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full font-medium border border-primary/30"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-heading mb-8">Research Areas</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="surface-card p-6 hover-lift">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h4 className="text-lg font-semibold text-foreground">{area.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground text-sm text-center mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-accent text-center">Current Projects</div>
                    {area.projects.map((project, i) => (
                      <div key={i} className="text-xs text-muted-foreground text-center">
                        • {project}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="surface-card p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">1</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">Citations</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">Research Areas</div>
            </div>
            <div className="surface-card p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Ongoing Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;