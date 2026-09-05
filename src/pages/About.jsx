import { motion } from 'framer-motion';
import { Info, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24 max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 shadow-inner">
          <Info className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
          About <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">IITM BS Hub.</span>
        </h1>
        <p className="font-sans text-lg text-foreground/70 font-bold uppercase tracking-widest">
          Built by students, for students.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
              <Heart className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Our Mission</h2>
          </div>
          
          <p className="font-sans text-foreground/80 text-xl leading-relaxed font-medium relative z-10">
            The IITM BS Hub is an unofficial, community-driven platform designed to aggregate useful tools, calculators, and resources for students enrolled in the IIT Madras BS Degree program. 
            <br/><br/>
            Our goal is to make academic planning and resource discovery as seamless as possible. No fluff, just utility.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass !bg-primary/5 !border-primary/20 p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mb-20" />
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="p-4 bg-white/80 dark:bg-slate-800/80 text-primary rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <Code2 className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">How to Contribute</h2>
          </div>
          
          <p className="font-sans text-foreground/80 text-xl leading-relaxed font-medium relative z-10">
            This project is open-source. If you're a fellow student with ideas, bug reports, or code contributions, we'd love to hear from you in the future when we open up our repository!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
