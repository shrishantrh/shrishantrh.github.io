import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";
import ThemeToggle from "@/components/ThemeToggle";

const BlogPost2 = () => {
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
              <time className="font-mono text-xs text-muted-foreground tracking-wider">May 11, 2026</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-4">
              You Are What You Won't Do
            </h1>
            <div className="h-px bg-border w-full" />
          </header>

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15px] leading-[1.8] text-foreground/85">
            <p>
              I just finished freshman year. I have basically no professional reputation yet. So when someone starts talking about protecting your personal brand, my first instinct is to tune out a little. That feels like a problem for later.
            </p>

            <p>
              That's what I thought until a session this semester with Mark Wolters, a professor who's also built a real personal brand outside of academia. He was talking about partnerships and sponsorships, and mentioned he turned down a deal with Duolingo. He didn't do this because the money wasn't good, but rather because Duolingo had recently laid off a large chunk of their contractor workforce and replaced them with AI. And that conflicted with something he actually cared about. So he passed on them.
            </p>

            <p>
              That sounded simple, but I kept thinking about it after class. Saying no to money because of a mismatch of values is easy to talk about but genuinely hard to do. And the earlier you build that habit, the more natural it becomes. The longer you wait, the more you've already quietly compromised.
            </p>

            <p>
              Wolters also made this comparison that stuck with me: he said your professional brand is basically just your reputation, and you've been building one since you were a kid without realizing it. Every interaction and choice and thing you said yes or no to. Nobody was calling it brand building then, but it was.
            </p>

            <p>
              I've been thinking about this a lot in the context of my own situation. I'm the cofounder of a company called Jvala, a platform that helps people with chronic conditions predict and track their flares using AI. We have a real app, actual users, and outside funding. And even at this early stage we get approached with things that don't quite fit. Opportunities that look fine on paper but feel off in practice. The times we've focused on stuff like that, it's pulled us off topic in directions that would get us distracted from our mission. Not necessarily because the opportunity was bad, but more so it wasn't actually "us".
            </p>

            <p>
              I think that's what Wolters was really getting at. Brand isn't a marketing exercise. It's not a LinkedIn bio, or a logo. It's simply the accumulation of choices you make when nobody is forcing you to make them a certain way. Who you work with. What you put your name on. What you pass on even when passing is uncomfortable or costs you something.
            </p>

            <p>
              Something else from the semester connected to this: a panelist from earlier in the year said that communication skills are the hardest to build but the most important ones to have. At first that felt like generic advice. But the more I thought about it the more I realized that communication and brand are kind of the same problem from different POVs. Both are about how other people experience you, not how you see yourself. You can think of yourself as reliable, or principled, or easy to work with. But at the end of the day, that only matters if it actually comes through to the people around you. And achieving that takes real, consistent effort over a long time.
            </p>

            <p>
              The habit that was described, of being intentional about what you associate with and why, is really just a specific version of that. It's choosing how you come across before someone else decides it for you.
            </p>

            <p>
              I don't have this fully figured out just yet. Like I said, I just finished my first year, and I'm figuring it out in real time like everyone else. But I think about it vastly differently now than I did at the start of this semester. The choices that feel small right now, what you say yes to, what you let slide, what you decide isn't worth pushing back on, those are the ones that add up in the end. Your reputation is just what those choices look like from the outside over time. So, you might as well be intentional about it.
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

export default BlogPost2;