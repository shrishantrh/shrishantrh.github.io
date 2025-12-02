import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Get in touch
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm always open to discussing research opportunities, interesting projects, 
            or just chatting about technology and healthcare innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shatt@illinois.edu"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Mail size={18} />
              shatt@illinois.edu
            </a>
            <a
              href="https://github.com/shrishantrh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shrishanth/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shrishant Hattarki
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
