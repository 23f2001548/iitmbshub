import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4 text-purple-600">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About IITM BS Hub
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Built by students, for students.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-8 border border-gray-200">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          The IITM BS Hub is an unofficial, community-driven platform designed to aggregate useful tools, calculators, and resources for students enrolled in the IIT Madras BS Degree program. 
          Our goal is to make academic planning and resource discovery as seamless as possible.
        </p>

        <h2 className="text-xl font-medium text-gray-900 mb-4">How to Contribute</h2>
        <p className="text-gray-600">
          This project is open-source. If you're a fellow student with ideas, bug reports, or code contributions, we'd love to hear from you. 
          Details on how to access the repository and submit pull requests will be added here soon.
        </p>
      </div>
    </div>
  );
};

export default About;
