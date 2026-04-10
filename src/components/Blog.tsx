import { PenLine, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

const blogPosts = [
  {
    title: "The Infrastructure No One Talks About",
    excerpt: "Most people think building a startup means having a great idea. I used to think that too, until I started actually building one.",
    date: "April 2025",
    slug: "/blog/the-infrastructure-no-one-talks-about",
    tags: ["Startups", "Technology & Management"],
  },
];

const Blog = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="section-title">Blog</h2>
        </FadeIn>

        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={100 + index * 100}>
            <Link to={post.slug} className="block group">
              <div className="clay-card p-6 md:p-8 transition-all duration-300 group-hover:translate-y-[-2px]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
                      {post.date}
                    </time>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground/60 tracking-wider uppercase clay-pill px-2 py-0.5 rounded-full"
                      >
                        <span className="relative z-10">{tag}</span>
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary group-hover:gap-2.5 transition-all duration-300">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>

                {/* ASCII decoration */}
                <div className="absolute top-3 right-4 font-mono text-[9px] text-muted-foreground/20 tracking-widest">
                  [ .BLOG ]
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Blog;
