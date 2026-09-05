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
    <div className="min-h-screen bg-[#F4F4F0] text-black font-mono pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-[#0047FF] selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
        
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          
          <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-4xl font-display font-black uppercase tracking-tight mb-2">
              CGPA <span className="text-[#0047FF]">Calculator</span>
            </h1>
            <p className="text-lg font-bold border-l-4 border-[#0047FF] pl-4">
              Calculate your IITM BS Degree CGPA and check eligibility rules.
            </p>
          </div>

          {/* Warnings Section */}
          <AnimatePresence>
            {warnings.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-[3px] border-black bg-[#FFD700] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase">Status Warnings</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 font-semibold">
                  {warnings.map((w, i) => (
                    <li key={i} className={w.includes("Great job") ? "text-green-800" : "text-black"}>{w}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Course Levels Accordion */}
          <div className="space-y-6">
            {Object.entries(COURSES).map(([level, courseList]) => (
              <div key={level} className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                <button 
                  onClick={() => toggleLevel(level)}
                  className="w-full flex items-center justify-between p-4 bg-black text-white hover:bg-[#0047FF] transition-colors"
                >
                  <h2 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {level}
                  </h2>
                  <motion.div animate={{ rotate: expandedLevels[level] ? 180 : 0 }}>
                    <ChevronDown className="w-6 h-6" />
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
                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courseList.map(course => (
                          <div key={course.id} className="border-2 border-black p-3 hover:bg-gray-50 flex flex-col justify-between">
                            <div>
                              <p className="font-bold text-sm mb-1 line-clamp-2">{course.name}</p>
                              <div className="flex items-center gap-2 mb-3 flex-wrap">
                                <span className="bg-[#0047FF] text-white text-xs px-2 py-0.5 uppercase font-bold">
                                  {course.credits} CR
                                </span>
                                {course.type === 'project' && (
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 uppercase font-bold">Project</span>
                                )}
                                {course.type === 'mandatory' && (
                                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 uppercase font-bold border-2 border-black">Mandatory</span>
                                )}
                              </div>
                            </div>
                            <select 
                              value={grades[course.id] || '-'}
                              onChange={(e) => handleGradeChange(course.id, e.target.value)}
                              className="w-full border-[3px] border-black font-bold p-2 focus:ring-0 focus:border-[#0047FF] outline-none cursor-pointer appearance-none bg-white"
                            >
                              {GRADES.map(g => <option key={g} value={g}>{g === '-' ? 'Select Grade' : `Grade: ${g}`}</option>)}
                            </select>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Non-Graded Credits Section */}
            <div className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
               <div className="w-full flex items-center p-4 bg-gray-200 border-b-2 border-black">
                  <h2 className="text-xl font-bold uppercase tracking-wide text-black flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Non-Graded Credits
                  </h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <div className="font-bold">Apprenticeship Credits</div>
                      <div className="text-sm text-gray-600 font-semibold">Earned through internships. Counts toward degree, no effect on CGPA.</div>
                    </div>
                    <select 
                        value={extraCredits.appr}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, appr: parseInt(e.target.value) }))}
                        className="w-32 border-[3px] border-black font-bold p-2 focus:outline-none focus:border-[#0047FF] cursor-pointer bg-white"
                      >
                        {[0, 4, 8, 12].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t-2 border-gray-300 pt-4">
                    <div>
                      <div className="font-bold">NPTEL Credits (BSc Level)</div>
                      <div className="text-sm text-gray-600 font-semibold">Max 4 credits allowed at this level.</div>
                    </div>
                    <select 
                        value={extraCredits.nptelBsc}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, nptelBsc: parseInt(e.target.value) }))}
                        className="w-32 border-[3px] border-black font-bold p-2 focus:outline-none focus:border-[#0047FF] cursor-pointer bg-white"
                      >
                        {[0, 4].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t-2 border-gray-300 pt-4">
                    <div>
                      <div className="font-bold">NPTEL Credits (BS Level)</div>
                      <div className="text-sm text-gray-600 font-semibold">Max 4 credits allowed at this level.</div>
                    </div>
                    <select 
                        value={extraCredits.nptelBs}
                        onChange={(e) => setExtraCredits(prev => ({ ...prev, nptelBs: parseInt(e.target.value) }))}
                        className="w-32 border-[3px] border-black font-bold p-2 focus:outline-none focus:border-[#0047FF] cursor-pointer bg-white"
                      >
                        {[0, 4].map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                </div>
            </div>
            
            <div className="pt-4 flex justify-end">
                <button 
                  onClick={clearAll}
                  className="bg-red-500 text-white px-6 py-3 font-black uppercase text-lg border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Reset Calculator
                </button>
            </div>

          </div>
        </div>

        {/* Sticky Analytics Sidebar */}
        <div className="w-full lg:w-96 relative">
          <div className="sticky top-28 border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="bg-black text-white p-4 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-[#0047FF]" />
              <h2 className="text-2xl font-black uppercase tracking-widest">Results</h2>
            </div>
            
            <div className="p-6 space-y-6">
              
              <div className="text-center">
                <p className="text-sm font-bold uppercase text-gray-500 tracking-widest mb-1">Overall CGPA</p>
                <div className="text-7xl font-display font-black text-[#0047FF]">
                  {calcData.overallCGPA}
                </div>
                <p className="text-sm font-bold mt-2 border-t-2 border-dashed border-gray-300 pt-2">
                  Total Earned Credits: <span className="bg-black text-white px-2 py-0.5 ml-1">{calcData.stats.total.credits}</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 border-2 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm uppercase">Found. + Diploma CGPA</span>
                  <span className="font-black text-xl">{calcData.diplomaCumulativeCGPA}</span>
                </div>
                <div className="bg-gray-100 border-2 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm uppercase">Diploma Project CGPA</span>
                  <span className="font-black text-xl">{calcData.projectCGPA}</span>
                </div>
              </div>

              <div className="border-t-[3px] border-black pt-4">
                <h3 className="font-black uppercase mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0047FF]" /> 
                  Degree Progress
                </h3>
                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Foundation (32)</span>
                    <span>{calcData.stats.foundation.credits}/32</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 border border-black">
                    <div className="bg-[#0047FF] h-full transition-all" style={{width: `${Math.min(100, (calcData.stats.foundation.credits/32)*100)}%`}}></div>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-600">Diploma (54)</span>
                    <span>{calcData.stats.diplomaDs.credits + calcData.stats.diplomaProg.credits}/54</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 border border-black">
                    <div className="bg-[#0047FF] h-full transition-all" style={{width: `${Math.min(100, ((calcData.stats.diplomaDs.credits + calcData.stats.diplomaProg.credits)/54)*100)}%`}}></div>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-600">BSc Degree (28)</span>
                    <span>{calcData.stats.degreeBsc.credits}/28</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 border border-black">
                    <div className="bg-[#0047FF] h-full transition-all" style={{width: `${Math.min(100, (calcData.stats.degreeBsc.credits/28)*100)}%`}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-600">BS Degree (28)</span>
                    <span>{calcData.stats.degreeBs.credits}/28</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 border border-black">
                    <div className="bg-[#0047FF] h-full transition-all" style={{width: `${Math.min(100, (calcData.stats.degreeBs.credits/28)*100)}%`}}></div>
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
