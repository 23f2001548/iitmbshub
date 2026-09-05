import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, AlertTriangle, BookOpen, 
  ChevronDown, Award
} from 'lucide-react';
import { COURSES, COURSE_LEVELS, calculateCGPA } from '../utils/cgpaCourses';

const GRADES = ['S', 'A', 'B', 'C', 'D', 'E', 'U', 'W', 'WA', 'WQ', '-'];

const CGPACalculator = () => {
  const [grades, setGrades] = useState({});
  const [extraCredits, setExtraCredits] = useState({ nptelBsc: 0, nptelBs: 0, appr: 0 });
  const [expandedLevels, setExpandedLevels] = useState({
    [COURSE_LEVELS.FOUNDATION]: true,
    [COURSE_LEVELS.DIPLOMA_DS]: false,
    [COURSE_LEVELS.DIPLOMA_PROG]: false,
    [COURSE_LEVELS.DEGREE_BSC]: false,
    [COURSE_LEVELS.DEGREE_BS]: false,
  });

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('cgpaCalcState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setGrades(parsed.grades || {});
        setExtraCredits(parsed.extraCredits || { nptelBsc: 0, nptelBs: 0, appr: 0 });
      } catch (e) {
        console.error("Error loading CGPA state", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('cgpaCalcState', JSON.stringify({ grades, extraCredits }));
  }, [grades, extraCredits]);

  const handleGradeChange = (id, val) => {
    setGrades(prev => {
      const updated = { ...prev };
      if (val === '-') {
        delete updated[id];
      } else {
        updated[id] = val;
      }
      return updated;
    });
  };

  const clearAll = () => {
    if(window.confirm("Are you sure you want to clear all your grades?")) {
      setGrades({});
    }
  };

  const toggleLevel = (lvl) => {
    setExpandedLevels(prev => ({ ...prev, [lvl]: !prev[lvl] }));
  };

  // Calculations
  const calcData = useMemo(() => {
    return calculateCGPA(grades, extraCredits);
  }, [grades, extraCredits]);

  // Rules Engine Engine & Warnings
  const warnings = useMemo(() => {
    const w = [];
    const stats = calcData.stats;
    
    // Foundation check
    if (stats.foundation.courses < 8 && (stats.diplomaDs.credits > 0 || stats.diplomaProg.credits > 0)) {
      w.push("You must complete all 8 Foundation courses before moving to the Diploma level.");
    }
    
    // Diploma to Degree check
    const hasDegreeCredits = stats.degreeBsc.credits > 0 || stats.degreeBs.credits > 0;
    if (hasDegreeCredits) {
      if (parseFloat(calcData.diplomaCumulativeCGPA) < 6.0) {
         w.push("Your overall Foundation + Diploma CGPA is below 6.0. You cannot register for Degree courses.");
      }
      if (parseFloat(calcData.projectCGPA) < 7.0 && stats.diplomaDs.projects + stats.diplomaProg.projects > 0) {
         w.push("Your Diploma Project CGPA is below 7.0. You must improve this to register for Degree courses.");
      }
      // Assuming one diploma completion is enough for degree, usually it requires Foundation + 1 or 2 diplomas.
    }

    // MS Upgrade check
    if (stats.degreeBs.credits > 0 && parseFloat(calcData.overallCGPA) >= 8.0) {
      w.push("Great job! With a CGPA >= 8.0 in the BS level, you are eligible to apply for the on-campus MS upgrade.");
    }
    
    // U or W grades
    const failedCourses = Object.entries(grades).filter(([k, v]) => v === 'U' || v.startsWith('W')).length;
    if (failedCourses > 0) {
      w.push(`You have ${failedCourses} course(s) with U/W grades. These courses will not count towards your credits.`);
    }
    
    return w;
  }, [calcData, grades]);

  return (
    <div className="min-h-screen text-foreground font-sans pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-primary selection:text-white relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          
          <div className="glass p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
            <h1 className="text-4xl font-display font-black tracking-tight mb-3 text-foreground">
              CGPA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Calculator</span>
            </h1>
            <p className="text-lg font-medium text-foreground/70 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Calculate your IITM BS Degree CGPA and check eligibility rules.
            </p>
          </div>

          {/* Warnings Section */}
          <AnimatePresence>
            {warnings.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="overflow-hidden"
              >
                <div className="glass !bg-yellow-500/10 !border-yellow-500/30 p-5 mt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300">Status Warnings</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 font-medium text-sm">
                    {warnings.map((w, i) => (
                      <li key={i} className={w.includes("Great job") ? "text-green-700 dark:text-green-400 font-semibold" : "text-yellow-800/80 dark:text-yellow-200/80"}>{w}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Course Levels Accordion */}
          <div className="space-y-6">
            {Object.entries(COURSES).map(([level, courseList]) => (
              <div key={level} className="glass transition-all overflow-hidden group">
                <button 
                  onClick={() => toggleLevel(level)}
                  className={`w-full flex items-center justify-between p-5 transition-colors ${
                    expandedLevels[level] 
                      ? 'bg-primary/5 dark:bg-primary/10 border-b border-primary/10' 
                      : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <h2 className="text-xl font-display font-bold flex items-center gap-3 text-foreground">
                    <div className={`p-2 rounded-lg transition-colors ${expandedLevels[level] ? 'bg-primary/20 text-primary' : 'bg-slate-200/50 dark:bg-slate-700/50 text-foreground/70 group-hover:text-primary'}`}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                    {level}
                  </h2>
                  <motion.div animate={{ rotate: expandedLevels[level] ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-foreground/50" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedLevels[level] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/30 dark:bg-slate-900/30">
                        {courseList.map(course => (
                          <div key={course.id} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div>
                              <p className="font-bold text-sm mb-2 text-foreground line-clamp-2">{course.name}</p>
                              <div className="flex items-center gap-2 mb-4 flex-wrap">
                                <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-semibold">
                                  {course.credits} CR
                                </span>
                                {course.type === 'project' && (
                                  <span className="bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs px-2.5 py-1 rounded-md font-semibold">Project</span>
                                )}
                                {course.type === 'mandatory' && (
                                  <span className="bg-red-500/10 text-red-600 dark:text-red-400 text-xs px-2.5 py-1 rounded-md font-semibold">Mandatory</span>
                                )}
                              </div>
                            </div>
                            <div className="relative">
                              <select 
                                value={grades[course.id] || '-'}
                                onChange={(e) => handleGradeChange(course.id, e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold p-2.5 pr-8 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer appearance-none text-foreground transition-all"
                              >
                                {GRADES.map(g => <option key={g} value={g}>{g === '-' ? 'Select Grade' : `Grade: ${g}`}</option>)}
                              </select>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Non-Graded Credits Section */}
            <div className="glass overflow-hidden">
               <div className="w-full flex items-center p-5 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200/50 dark:border-slate-700/50">
                  <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-accent">
                      <Award className="w-5 h-5" />
                    </div>
                    Non-Graded Credits
                  </h2>
                </div>
                <div className="p-5 space-y-5 bg-white/30 dark:bg-slate-900/30">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground">Apprenticeship Credits</div>
                      <div className="text-sm text-foreground/60 font-medium mt-1">Earned through internships. Counts toward degree, no effect on CGPA.</div>
                    </div>
                    <select 
                        value={extraCredits.appr}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, appr: parseInt(e.target.value) }))}
                        className="w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold p-2.5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer text-foreground"
                      >
                        {[0, 4, 8, 12].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-200/50 dark:border-slate-700/50 pt-5">
                    <div>
                      <div className="font-bold text-foreground">NPTEL Credits (BSc Level)</div>
                      <div className="text-sm text-foreground/60 font-medium mt-1">Max 4 credits allowed at this level.</div>
                    </div>
                    <select 
                        value={extraCredits.nptelBsc}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, nptelBsc: parseInt(e.target.value) }))}
                        className="w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold p-2.5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer text-foreground"
                      >
                        {[0, 4].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-200/50 dark:border-slate-700/50 pt-5">
                    <div>
                      <div className="font-bold text-foreground">NPTEL Credits (BS Level)</div>
                      <div className="text-sm text-foreground/60 font-medium mt-1">Max 4 credits allowed at this level.</div>
                    </div>
                    <select 
                        value={extraCredits.nptelBs}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, nptelBs: parseInt(e.target.value) }))}
                        className="w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold p-2.5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer text-foreground"
                      >
                        {[0, 4].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                </div>
            </div>
            
            <div className="pt-4 flex justify-end">
                <button 
                  onClick={clearAll}
                  className="bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                >
                  Reset Calculator
                </button>
            </div>

          </div>
        </div>

        {/* Sticky Analytics Sidebar */}
        <div className="w-full lg:w-96 relative">
          <div className="sticky top-28 glass overflow-hidden flex flex-col">
            <div className="p-5 flex items-center gap-3 border-b border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-display font-bold text-foreground">Results</h2>
            </div>
            
            <div className="p-6 space-y-8">
              
              <div className="text-center relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
                <p className="text-xs font-bold uppercase text-foreground/50 tracking-widest mb-2 relative z-10">Overall CGPA</p>
                <div className="text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400 relative z-10">
                  {calcData.overallCGPA}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 relative z-10">
                  <span className="text-sm font-medium text-foreground/70">Total Earned Credits:</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md font-bold text-sm">{calcData.stats.total.credits}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-xs text-foreground/70 uppercase">Found. + Diploma CGPA</span>
                  <span className="font-bold text-lg text-foreground">{calcData.diplomaCumulativeCGPA}</span>
                </div>
                <div className="bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-xs text-foreground/70 uppercase">Diploma Project CGPA</span>
                  <span className="font-bold text-lg text-foreground">{calcData.projectCGPA}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <h3 className="font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" /> 
                  Degree Progress
                </h3>
                <div className="space-y-4 text-xs font-medium">
                  
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-foreground/70">Foundation (32)</span>
                      <span className="text-foreground font-bold">{calcData.stats.foundation.credits}/32</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out" style={{width: `${Math.min(100, (calcData.stats.foundation.credits/32)*100)}%`}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-foreground/70">Diploma (54)</span>
                      <span className="text-foreground font-bold">{calcData.stats.diplomaDs.credits + calcData.stats.diplomaProg.credits}/54</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out" style={{width: `${Math.min(100, ((calcData.stats.diplomaDs.credits + calcData.stats.diplomaProg.credits)/54)*100)}%`}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-foreground/70">BSc Degree (28)</span>
                      <span className="text-foreground font-bold">{calcData.stats.degreeBsc.credits}/28</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out" style={{width: `${Math.min(100, (calcData.stats.degreeBsc.credits/28)*100)}%`}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-foreground/70">BS Degree (28)</span>
                      <span className="text-foreground font-bold">{calcData.stats.degreeBs.credits}/28</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out" style={{width: `${Math.min(100, (calcData.stats.degreeBs.credits/28)*100)}%`}}></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;
