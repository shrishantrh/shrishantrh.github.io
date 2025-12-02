import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import foundersLogo from "@/assets/logos/founders.png";
import nobeLogo from "@/assets/logos/nobe.png";

const Involvement = () => {
  const activities = [
    {
      role: "R&D Team Member",
      org: "Founders @ Illinois Entrepreneurs",
      description: "Working with DapUp, an athlete NIL management startup, on market research and product development.",
      link: "https://www.foundersillinois.org/",
      logo: foundersLogo
    },
    {
      role: "Consulting Lead",
      org: "National Organization of Business and Engineering",
      description: "Leading consulting project for QpiAI, developing market expansion strategy for Chicago tech sector.",
      link: "https://www.nobeillinois.org/",
      logo: nobeLogo
    },
    {
      role: "FLL Mentor & Coach",
      org: "FIRST Robotics - Low Battery Team 62208",
      description: "Mentored team to regional and sectional victories. Won FIRST Coaches & Mentors Award.",
      link: null,
      logo: null
    }
  ];

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
            Involvement
          </h2>
        </FadeIn>

        <div className="grid gap-8">
          {activities.map((activity, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="flex gap-4">
                {/* Logo */}
                {activity.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={activity.logo} 
                        alt={`${activity.org} logo`} 
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-1">
                  <h3 className="text-foreground font-medium">{activity.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{activity.org}</span>
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involvement;
