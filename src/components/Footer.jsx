import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md relative z-10">
      <div className="max-w-[1400px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground mb-4">
              Built for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Students.</span>
            </h2>
            <p className="font-sans text-sm font-semibold tracking-wide text-foreground/60 max-w-sm mb-4">
              Unofficial community project. Not affiliated with IIT Madras.
            </p>
            <a 
              href="https://www.linkedin.com/in/gauravjhaiitm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/20"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 text-[#0A66C2] dark:text-[#70B5F9]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              Found a bug or have a suggestion?
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4">
            <div className="flex gap-4 font-sans text-sm font-medium text-foreground/60 mb-2">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-foreground/40">
              {new Date().getFullYear()} © IITM BS HUB
            </p>
            <div className="w-12 h-1.5 bg-gradient-to-r from-primary to-sky-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
