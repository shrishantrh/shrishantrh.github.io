import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, FileText } from 'lucide-react';

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-3">
      {/* Additional Actions (when expanded) */}
      <div className={`flex flex-col space-y-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={downloadResume}
          className="p-3 bg-secondary/90 backdrop-blur-sm text-secondary-foreground rounded-full hover:bg-secondary hover:scale-110 transition-all duration-300 shadow-lg border border-border/50"
          title="Download Resume"
        >
          <FileText size={20} />
        </button>
        
        <button
          onClick={scrollToContact}
          className="p-3 bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg"
          title="Contact Me"
        >
          <MessageCircle size={20} />
        </button>
      </div>

      {/* Main FAB */}
      <div className="relative">
        {/* Scroll to Top (when scrolled) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`absolute inset-0 p-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-glow ${
              isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            title="Back to Top"
          >
            <ArrowUp size={24} />
          </button>
        )}

        {/* Menu Toggle (when not scrolled or when expanded) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-glow ${
            showScrollTop && !isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          title="Quick Actions"
        >
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
            <MessageCircle size={24} />
          </div>
        </button>
      </div>

      {/* Ripple effect */}
      {isExpanded && (
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-accent/20 rounded-full animate-ping pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingActionButton;