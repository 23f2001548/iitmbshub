import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 md:p-12 rounded-3xl"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none font-sans text-foreground/80 space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to the IITM BS Hub ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. The Data We Collect</h2>
            <p>
              Our application functions primarily as a directory and client-side toolset. We do not intentionally collect, store, or process any personally identifiable information (PII) on our servers.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Local Storage:</strong> Tools like the CGPA Calculator or Grade Predictor may store your input data locally on your device (in your browser's local storage) to provide a better user experience. This data never leaves your device.</li>
              <li><strong>Analytics:</strong> We may use basic, anonymized analytics to understand traffic patterns and improve the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Third-Party Links</h2>
            <p>
              This website includes links to third-party websites, plug-ins, and applications (such as the official IITM portals or YouTube channels). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p>
              Since we do not collect or store personal data on external servers, the security of any data entered into our client-side tools depends on the security of your own personal device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please reach out through our community channels.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
