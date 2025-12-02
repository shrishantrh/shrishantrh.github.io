import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </div>
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="/resume.pdf"
            className="w-full h-[calc(100vh-120px)] rounded-lg border border-border"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
