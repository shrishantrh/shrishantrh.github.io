import FadeIn from "./FadeIn";

const Involvement = () => {
  const activities = [
    {
      role: "R&D Team Member",
      org: "Founders @ Illinois Entrepreneurs",
      description: "Working with DapUp, an athlete NIL management startup, on market research and product development."
    },
    {
      role: "Consulting Lead",
      org: "National Organization of Business and Engineering",
      description: "Leading consulting project for QpiAI, developing market expansion strategy for Chicago tech sector."
    },
    {
      role: "FLL Mentor & Coach",
      org: "FIRST Robotics",
      description: "Mentored team to regional and sectional victories. Won FIRST Coaches & Mentors Award."
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
              <div>
                <h3 className="text-foreground font-medium">{activity.role}</h3>
                <p className="text-sm text-muted-foreground mb-2">{activity.org}</p>
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
