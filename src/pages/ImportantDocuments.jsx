import { FileText, ExternalLink } from 'lucide-react';

const ImportantDocuments = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-6 text-yellow-600 dark:text-yellow-500 shadow-sm">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
          Important Documents
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Access essential academic resources, handbooks, and grading schemes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a 
          href="https://docs.google.com/document/u/0/d/e/2PACX-1vT5PBOz4OH663W0IJPVGVjG_nfmYZGfFI7W1j-6wTLcex13O_7BZmf6a96Q6liO0W-mLZB5hOGZeNNl/pub?urp=gmail_link&pli=1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500 group flex flex-col items-start"
        >
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Grading Document
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed">
            View the official grading scheme and policies.
          </p>
        </a>

        <a 
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500 group flex flex-col items-start"
        >
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Student Handbook
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-left leading-relaxed">
            Read the comprehensive student handbook for rules and guidelines.
          </p>
        </a>
      </div>
    </div>
  );
};

export default ImportantDocuments;
