import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const ImportantDocuments = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl mb-8 shadow-[0_0_40px_rgba(245,158,11,0.4)]"
        >
          <FileText className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl md:text-6xl tracking-tight mb-6">
          Important Documents
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Access essential academic resources, handbooks, and grading schemes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          href="https://docs.google.com/document/u/0/d/e/2PACX-1vT5PBOz4OH663W0IJPVGVjG_nfmYZGfFI7W1j-6wTLcex13O_7BZmf6a96Q6liO0W-mLZB5hOGZeNNl/pub?urp=gmail_link&pli=1" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-[32px] p-8 border border-gray-200/50 dark:border-white/5 transition-all duration-300 group flex flex-col items-start relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 dark:bg-amber-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          
          <div className="flex items-center justify-between w-full mb-6">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
              Grading Document
            </h3>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:bg-amber-50 dark:group-hover:bg-amber-900/30 transition-colors">
              <ExternalLink className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-amber-500 transition-colors" />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-left leading-relaxed font-medium text-lg">
            View the official grading scheme and policies. Understand how your performance is evaluated.
          </p>
        </motion.a>

        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-[32px] p-8 border border-gray-200/50 dark:border-white/5 transition-all duration-300 group flex flex-col items-start relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 dark:bg-orange-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          
          <div className="flex items-center justify-between w-full mb-6">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
              Student Handbook
            </h3>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-orange-900/30 transition-colors">
              <ExternalLink className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-left leading-relaxed font-medium text-lg">
            Read the comprehensive student handbook for rules, guidelines, and important academic information.
          </p>
        </motion.a>
      </div>
    </div>
  );
};

export default ImportantDocuments;
