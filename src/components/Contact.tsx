import { Mail, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Contact
          </h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech and healthcare.
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:shatt@illinois.edu"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 glow-primary"
            >
              <Mail size={16} />
              shatt@illinois.edu
            </a>
            <a
              href="https://linkedin.com/in/shrishanth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-border/80 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="mt-20 pt-8">
            <div className="divider-gradient mb-8" />
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Shrishant Hattarki
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
