import { Mail, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Contact</h2>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="clay-card p-6 md:p-8 mb-8">
            <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
              I'm always open to discussing new opportunities, collaborations, or just chatting about tech and healthcare.
            </p>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              <a
                href="mailto:shatt@illinois.edu"
                className="clay-button px-5 py-3 inline-flex items-center gap-2 font-medium text-sm text-foreground"
              >
                <Mail size={16} className="relative z-10" />
                <span className="relative z-10">shatt@illinois.edu</span>
              </a>
              <a
                href="https://linkedin.com/in/shrishanth"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-button px-5 py-3 inline-flex items-center gap-2 font-medium text-sm text-foreground group"
              >
                <span className="relative z-10">LinkedIn</span>
                <ArrowUpRight size={14} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* ASCII decoration */}
            <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/20 tracking-widest">
              [ .REACH_OUT ]
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border/50" />
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Shrishant Hattarki
            </p>
            <div className="flex-1 h-px bg-border/50" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
