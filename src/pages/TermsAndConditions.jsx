import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 md:p-12 rounded-3xl"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none font-sans text-foreground/80 space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Unofficial Status</h2>
            <p>
              <strong>IMPORTANT:</strong> The IITM BS Hub is an unofficial, community-driven project. It is <strong>not</strong> affiliated with, endorsed by, or officially connected to the Indian Institute of Technology Madras (IITM) or the IITM BS Degree program in any way. Official information should always be verified through official IITM channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on IITM BS Hub for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Disclaimer</h2>
            <p>
              All the materials on the IITM BS Hub website are provided "as is". We make no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, we do not make any representations concerning the accuracy or reliability of the use of the materials on this website, especially regarding calculators (CGPA, Grade Predictors). These tools are for estimation purposes only and should not be treated as official results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Limitations</h2>
            <p>
              IITM BS Hub or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on this website, even if we or an authorized representative has been notified, orally or written, of the possibility of such damage.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
