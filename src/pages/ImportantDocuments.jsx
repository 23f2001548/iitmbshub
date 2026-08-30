import { FileText, ExternalLink } from 'lucide-react';

const ImportantDocuments = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4 text-yellow-600">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Important Documents
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Access essential academic resources, handbooks, and grading schemes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a 
          href="https://docs.google.com/document/u/0/d/e/2PACX-1vT5PBOz4OH663W0IJPVGVjG_nfmYZGfFI7W1j-6wTLcex13O_7BZmf6a96Q6liO0W-mLZB5hOGZeNNl/pub?urp=gmail_link&pli=1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow hover:border-blue-300 group flex flex-col items-start"
        >
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              Grading Document
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-gray-500 text-left">
            View the official grading scheme and policies.
          </p>
        </a>

        <a 
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow hover:border-blue-300 group flex flex-col items-start"
        >
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              Student Handbook
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-gray-500 text-left">
            Read the comprehensive student handbook for rules and guidelines.
          </p>
        </a>
      </div>
    </div>
  );
};

export default ImportantDocuments;
