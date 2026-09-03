import { motion } from 'framer-motion';
import { Info, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center bg-[#F4F4F0] dark:bg-[#0B0B0B]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center justify-center p-4 bg-[#0047FF] text-white border-2 border-black mb-8">
          <Info className="w-12 h-12" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl font-black text-black dark:text-white sm:text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none">
          About <br/> IITM BS Hub.
        </h1>
        <p className="font-sans text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto font-bold uppercase tracking-widest">
          Built by students, for students.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#1A1A1A] border-4 border-black dark:border-white/20 p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFF] relative overflow-hidden"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black">
              <Heart className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-black dark:text-white tracking-tighter">Our Mission</h2>
          </div>
          
          <p className="font-sans text-black/80 dark:text-white/80 text-xl sm:text-2xl leading-relaxed font-medium">
            The IITM BS Hub is an unofficial, community-driven platform designed to aggregate useful tools, calculators, and resources for students enrolled in the IIT Madras BS Degree program. 
            <br/><br/>
            Our goal is to make academic planning and resource discovery as seamless as possible. No fluff, just utility.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0047FF] border-4 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFF] relative overflow-hidden"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-white text-black border-2 border-black">
              <Code2 className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tighter">How to Contribute</h2>
          </div>
          
          <p className="font-sans text-white/90 text-xl sm:text-2xl leading-relaxed font-medium">
            This project is open-source. If you're a fellow student with ideas, bug reports, or code contributions, we'd love to hear from you in the future when we open up our repository!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
