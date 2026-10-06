import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, ArrowRight, ExternalLink } from 'lucide-react';

const StudyRoom = () => {
  // Permanent Google Meet link
  const GMEET_LINK = "https://meet.google.com/cdm-swjf-sem";

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 dark:bg-blue-500/20 mb-8 border border-blue-500/20">
          <Video className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6">
          IITM BS Hub <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Study Room
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 font-sans leading-relaxed">
          Join our official 24/7 Google Meet space. Connect with other students, turn on your camera for accountability, or share your screen to discuss coursework.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md"
      >
        <div className="glass-heavy rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-200 dark:border-slate-700/50">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium font-sans">Room is open 24/7</span>
            </div>

            <a 
              href={GMEET_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-sans font-bold text-lg shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <Video className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Join Google Meet</span>
              <ExternalLink className="w-5 h-5 opacity-70 relative z-10" />
            </a>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50 w-full">
              <h3 className="font-semibold text-sm text-foreground/80 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" /> Room Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-foreground/60 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>Keep your microphone muted unless speaking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>Cameras are optional but encouraged for accountability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>Use the Meet chat for non-urgent questions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudyRoom;
