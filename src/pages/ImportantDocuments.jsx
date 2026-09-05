import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const ImportantDocuments = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 shadow-inner">
          <FileText className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Documents.</span>
        </h1>
        <p className="font-sans text-lg text-foreground/70 font-medium tracking-wide">
          Access essential academic resources, handbooks, and grading schemes without the fluff.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          href="https://docs.google.com/document/u/0/d/e/2PACX-1vT5PBOz4OH663W0IJPVGVjG_nfmYZGfFI7W1j-6wTLcex13O_7BZmf6a96Q6liO0W-mLZB5hOGZeNNl/pub?urp=gmail_link&pli=1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass p-8 flex flex-col items-start relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
          <div className="flex items-center justify-between w-full mb-6 relative z-10">
            <h3 className="font-display text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Grading Scheme
            </h3>
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-colors">
              <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
          <p className="font-sans text-foreground/70 text-left leading-relaxed font-medium relative z-10">
            The official grading scheme and policies. Understand exactly how your performance is evaluated.
          </p>
        </motion.a>

        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass p-8 flex flex-col items-start relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-sky-500/10 transition-colors" />
          <div className="flex items-center justify-between w-full mb-6 relative z-10">
            <h3 className="font-display text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Student Handbook
            </h3>
            <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-colors">
              <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
          <p className="font-sans text-foreground/70 text-left leading-relaxed font-medium relative z-10">
            The comprehensive student handbook for rules, guidelines, and non-negotiable academic info.
          </p>
        </motion.a>
      </div>
    </div>
  );
};

export default ImportantDocuments;
