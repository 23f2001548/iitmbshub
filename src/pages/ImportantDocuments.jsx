import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const ImportantDocuments = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen bg-[#F4F4F0] dark:bg-[#0B0B0B] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-4 bg-[#0047FF] text-white border-2 border-black mb-6">
          <FileText className="w-12 h-12" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl font-black text-black dark:text-white sm:text-6xl md:text-7xl tracking-tighter uppercase mb-6">
          Important <br/> Documents.
        </h1>
        <p className="font-sans text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto font-medium">
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
          className="bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 p-8 flex flex-col items-start relative hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#FFF] transition-all duration-150 group"
        >
          <div className="flex items-center justify-between w-full mb-6">
            <h3 className="font-display text-3xl font-black text-black dark:text-white uppercase tracking-tight">
              Grading Scheme
            </h3>
            <div className="p-2 border-2 border-transparent group-hover:border-black dark:group-hover:border-white/20 transition-colors">
              <ExternalLink className="w-6 h-6 text-[#0047FF]" strokeWidth={2.5} />
            </div>
          </div>
          <p className="font-sans text-black/70 dark:text-white/70 text-left leading-relaxed font-medium text-lg">
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
          className="bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 p-8 flex flex-col items-start relative hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#FFF] transition-all duration-150 group"
        >
          <div className="flex items-center justify-between w-full mb-6">
            <h3 className="font-display text-3xl font-black text-black dark:text-white uppercase tracking-tight">
              Student Handbook
            </h3>
            <div className="p-2 border-2 border-transparent group-hover:border-black dark:group-hover:border-white/20 transition-colors">
              <ExternalLink className="w-6 h-6 text-[#0047FF]" strokeWidth={2.5} />
            </div>
          </div>
          <p className="font-sans text-black/70 dark:text-white/70 text-left leading-relaxed font-medium text-lg">
            The comprehensive student handbook for rules, guidelines, and non-negotiable academic info.
          </p>
        </motion.a>
      </div>
    </div>
  );
};

export default ImportantDocuments;
