const Footer = () => {
  return (
    <footer className="mt-auto border-t-2 border-black dark:border-white/20 bg-[#F4F4F0] dark:bg-[#0B0B0B]">
      <div className="max-w-[1400px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase mb-4 text-black dark:text-white">
              Built for <br className="hidden md:block"/>
              <span className="text-[#0047FF]">Students.</span>
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-black/60 dark:text-white/60 max-w-sm">
              Unofficial community project. Not affiliated with IIT Madras.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-2">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
              {new Date().getFullYear()} © IITM BS HUB
            </p>
            <div className="w-12 h-2 bg-[#0047FF]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
