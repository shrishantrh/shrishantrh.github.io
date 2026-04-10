import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";
import ThemeToggle from "@/components/ThemeToggle";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background relative select-none" style={{ WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', userSelect: 'none' }}>
      <GridBackground />
      
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-3">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Article */}
      <main className="relative z-10 pt-24 pb-20">
        <article className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">Blog</span>
              <span className="text-muted-foreground/30">•</span>
              <time className="font-mono text-xs text-muted-foreground tracking-wider">April 2025</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-4">
              The Infrastructure No One Talks About
            </h1>
            <div className="h-px bg-border w-full" />
          </header>

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15px] leading-[1.8] text-foreground/85">
            <p>
              Most people think building a startup means having a great idea. I used to think that too, until I started actually building one.
            </p>

            <p>
              I'm a freshman at the University of Illinois, and I co-founded a company called{" "}
              <a href="https://jvala.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Jvala
              </a>
              , the first AI-native platform that helps people with chronic conditions predict and track their flares before they happen. We have a live iOS app, backing from 1517 Fund, and we won UIUC's Startup Weekend. By most metrics, things are going well.
            </p>

            <p>
              But this semester, sitting in a technology and management classroom for the first time, I started realizing something: the stuff we were covering — things like organizational design, decision-making, how technology and business strategy intersect — was the exact infrastructure I had been improvising my way through for the past year without knowing it had a name.
            </p>

            <p>
              I think this is a strange thing to experience. You're in a lecture about how technology strategy needs to align with organizational goals, and you're nodding along thinking <em className="text-foreground/70 italic">I've been making these calls by gut</em>. Not wrong, necessarily. But without a framework, you can't really stress test your intuitions. You just do things and hope they're right.
            </p>

            <p>
              At Jvala, our founding team has a CEO, CTO, a COO, and a CGO. We divide responsibilities fast because we have to. But dividing responsibilities is not the same as building an organization, I learned. One of the most important things I started to understand this semester is that how you structure decisions (who owns what, where accountability lives, how you handle disagreement) matters as much as the product itself. A broken internal structure will kill a company just as surely as a product nobody wants.
            </p>

            <p>
              We've felt this firsthand. When you're four people moving at startup speed, alignment feels easy because everyone's in the same room. But as you grow, that changes. The conversations you didn't formalize become the gaps you fall into. The technology decisions you made without documenting your reasoning become technical debt.
            </p>

            <p>
              What this course pushed me to think about is how the best technology leaders aren't just the best engineers or the best product thinkers. In reality, they are the people who understand the <em className="text-foreground/70 italic">system</em> they're building. The product, yes, but also the team, the incentives, the information flows, the external environment. Technology doesn't exist in a vacuum. It gets built by organizations, and deployed into markets, and shaped by the people who use it. Every layer of that system has to be managed deliberately.
            </p>

            <p>
              I came into this course thinking it would be a box to check on the way to the T&M minor. But now I'm thinking it might be the most practically useful thing I've taken so far. Not because every lecture mapped directly to a decision I needed to make, but because it gave me language for problems I'd already encountered. That's what good education does. It doesn't just prepare you for what's ahead — it makes sense of what you've already been through.
            </p>

            <p>
              If you're building something, or planning to, I'd encourage you to take this stuff seriously before you feel the consequences of ignoring it. The gap between a great idea and a lasting company is almost always organizational. And that's something you can actually learn.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-wider">Written by</p>
                <p className="text-sm font-medium text-foreground mt-1">Shrishant Hattarki</p>
              </div>
              <Link
                to="/#blog"
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← All posts
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default BlogPost1;
