import { motion } from 'framer-motion';
import { Info, Heart, Code2, TerminalSquare } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl mb-8 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
        >
          <Info className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl md:text-6xl tracking-tight mb-6">
          About IITM BS Hub
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Built by students, for students.
        </p>
      </motion.div>

      <div className="w-full space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-[32px] p-8 sm:p-12 border border-gray-200/50 dark:border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
            The IITM BS Hub is an unofficial, community-driven platform designed to aggregate useful tools, calculators, and resources for students enrolled in the IIT Madras BS Degree program. 
            Our goal is to make academic planning and resource discovery as seamless as possible.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-[32px] p-8 sm:p-12 border border-gray-200/50 dark:border-white/5 relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/10 dark:bg-pink-500/5 rounded-tl-[100px] -z-10 transition-transform group-hover:scale-110" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400">
              <Code2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">How to Contribute</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
            This project is open-source. If you're a fellow student with ideas, bug reports, or code contributions, we'd love to hear from you in the future when we open up our repository!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
