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

        <div className="grid gap-6">
          {activities.map((activity, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border before:transition-colors before:duration-300 group-hover:before:bg-primary">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{activity.role}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  {activity.logo && (
                    <img 
                      src={activity.logo} 
                      alt={`${activity.org} logo`} 
                      className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span>{activity.org}</span>
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
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
