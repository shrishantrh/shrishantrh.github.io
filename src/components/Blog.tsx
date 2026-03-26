import { PenLine } from "lucide-react";
import FadeIn from "./FadeIn";

const Blog = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Blog</h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="clay-card p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="clay-pill p-3 rounded-full">
                <PenLine size={24} className="text-muted-foreground relative z-10" />
              </div>
              <h3 className="text-lg font-medium text-foreground">Coming Soon</h3>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                I'll be sharing thoughts on AI, healthcare technology, startup building, and lessons from hackathons and research. Stay tuned!
              </p>
            </div>

            {/* ASCII decoration */}
            <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/20 tracking-widest">
              [ .BLOG ]
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Blog;
