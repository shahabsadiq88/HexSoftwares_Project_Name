import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-8 mt-12 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 font-medium text-sm">
          Designed & Built by <span className="text-gray-300 font-bold">Shahab</span> © {new Date().getFullYear()}
        </p>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors group"
        >
          Back to top
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
