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
            <p className="font-sans text-sm font-semibold tracking-wide text-foreground/60 max-w-sm">
              Unofficial community project. Not affiliated with IIT Madras.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4">
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
