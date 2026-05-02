import { Github, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">Victor.dev</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 text-sm">Desenvolvedor Frontend</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/VictorMuza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-800 hover:bg-primary-500/20 text-gray-400 hover:text-primary-400 transition-all"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Victor Hugo © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}