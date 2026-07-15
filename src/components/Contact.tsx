import { Mail, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import MouseImageTrail from "./MouseImageTrail";

const trailShapes = [
  "circle",
  "square",
  "plus",
  "cross",
  "triangle",
  "ring",
  "dot-grid",
  "bracket-l",
  "bracket-r",
  "diamond",
  "line",
  "chevron",
];

const shapeToSvg = (shape: string) => {
  const stroke = "hsl(220 60% 50%)";
  const inner = (() => {
    switch (shape) {
      case "circle":
        return `<circle cx="24" cy="24" r="14" fill="none" stroke="${stroke}" stroke-width="2"/>`;
      case "square":
        return `<rect x="12" y="12" width="24" height="24" fill="none" stroke="${stroke}" stroke-width="2"/>`;
      case "plus":
        return `<path d="M24 10v28M10 24h28" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>`;
      case "cross":
        return `<path d="M14 14l20 20M34 14L14 34" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>`;
      case "triangle":
        return `<path d="M24 10l14 26H10z" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>`;
      case "ring":
        return `<circle cx="24" cy="24" r="10" fill="${stroke}"/><circle cx="24" cy="24" r="6" fill="hsl(40 20% 98%)"/>`;
      case "dot-grid":
        return `<g fill="${stroke}"><circle cx="14" cy="14" r="2"/><circle cx="24" cy="14" r="2"/><circle cx="34" cy="14" r="2"/><circle cx="14" cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="34" cy="24" r="2"/><circle cx="14" cy="34" r="2"/><circle cx="24" cy="34" r="2"/><circle cx="34" cy="34" r="2"/></g>`;
      case "bracket-l":
        return `<path d="M18 10h-8v28h8" fill="none" stroke="${stroke}" stroke-width="2"/>`;
      case "bracket-r":
        return `<path d="M30 10h8v28h-8" fill="none" stroke="${stroke}" stroke-width="2"/>`;
      case "diamond":
        return `<path d="M24 10l14 14-14 14-14-14z" fill="none" stroke="${stroke}" stroke-width="2"/>`;
      case "line":
        return `<path d="M10 24h28" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>`;
      case "chevron":
        return `<path d="M14 16l10 10 10-10M14 26l10 10 10-10" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
      default:
        return "";
    }
  })();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>${inner}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const trailImages = trailShapes.map(shapeToSvg);

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
          <MouseImageTrail
            images={trailImages}
            renderImageBuffer={35}
            rotationRange={25}
            imageClassName="h-10 w-10"
            className="h-24 rounded-xl"
          >
            <div className="flex items-center gap-4 h-full">
              <div className="flex-1 h-px bg-border/50" />
              <p className="text-xs text-muted-foreground font-mono select-none">
                © {new Date().getFullYear()} Shrishant Hattarki
              </p>
              <div className="flex-1 h-px bg-border/50" />
            </div>
          </MouseImageTrail>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
