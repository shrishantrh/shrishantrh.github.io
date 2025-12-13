import { Mail, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Contact</h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <p className="text-foreground/80 leading-relaxed mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech and healthcare.
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shatt@illinois.edu"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              shatt@illinois.edu
            </a>
            <a
              href="https://linkedin.com/in/shrishanth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary hover:border-border/80 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              LinkedIn
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-xs text-muted-foreground mt-16 pt-8 border-t border-border">
            © {new Date().getFullYear()} Shrishant Hattarki
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
