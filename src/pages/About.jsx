import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6 text-purple-600 dark:text-purple-400 shadow-sm">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
          About IITM BS Hub
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Built by students, for students.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 sm:p-10 border border-gray-100 dark:border-gray-700 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          The IITM BS Hub is an unofficial, community-driven platform designed to aggregate useful tools, calculators, and resources for students enrolled in the IIT Madras BS Degree program. 
          Our goal is to make academic planning and resource discovery as seamless as possible.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Contribute</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This project is open-source. If you're a fellow student with ideas, bug reports, or code contributions, we'd love to hear from you. 
          You can view the source code and contribute on our GitHub repository.
        </p>
      </div>
    </div>
  );
};

export default About;
