import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-[#0a0f1a]/50 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-sm text-center font-semibold"
          >
            &copy; {new Date().getFullYear()} IITM BS Hub. Unofficial student community project.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-xs text-center max-w-md font-medium"
          >
            Built by students, for students. Not affiliated with IIT Madras.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
