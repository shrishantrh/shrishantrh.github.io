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
    <section className="section-spacing subtle-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Involvement</h2>
        </FadeIn>

        <div className="space-y-2">
          {activities.map((activity, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="card-hover group">
                <h3 className="text-base text-foreground font-medium group-hover:text-primary transition-colors">
                  {activity.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  {activity.logo && (
                    <img 
                      src={activity.logo} 
                      alt={`${activity.org} logo`} 
                      className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  {activity.link ? (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {activity.org}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span>{activity.org}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Involvement;
