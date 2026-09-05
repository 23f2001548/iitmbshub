import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Award, BookOpen, Sparkles } from 'lucide-react';
import { coursesConfig, getLetterGrade } from '../utils/gradingLogic';

const gradeColors = {
  S: 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-emerald-500/20 border-emerald-500/20',
  A: 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-green-500/20 border-green-500/20',
  B: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-blue-500/20 border-blue-500/20',
  C: 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white shadow-orange-500/20 border-orange-500/20',
  D: 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-red-500/20 border-red-500/20',
  E: 'bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-rose-500/20 border-rose-500/20',
  U: 'bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-slate-900/20 border-slate-700/20'
};

const GradePredictor = () => {
  const [level, setLevel] = useState('Foundation');
  const [course, setCourse] = useState(coursesConfig['Foundation'][0]);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState({ score: 0, grade: 'U' });

  useEffect(() => {
    const firstCourse = coursesConfig[level][0];
    setCourse(firstCourse);
  }, [level]);

  useEffect(() => {
    const initialScores = {};
    course.components.forEach(comp => {
      initialScores[comp.id] = '';
    });
    setScores(initialScores);
  }, [course]);

  useEffect(() => {
    const coercedScores = {};
    for (const key in scores) {
      coercedScores[key] = Number(scores[key]) || 0;
    }
    const calculatedScore = course.calculate(coercedScores);
    const letterGrade = getLetterGrade(calculatedScore);
    setResult({ score: calculatedScore, grade: letterGrade });
  }, [scores, course]);

  const endTermComps = ['f', 'f_40'];
  const endTermComp = course.components.find(c => endTermComps.includes(c.id));

  const reverseCalculate = () => {
    if (!endTermComp) return [];
    const results = [];
    
    const coercedScores = {};
    for (const key in scores) {
      if (key !== endTermComp.id) {
        coercedScores[key] = Number(scores[key]) || 0;
      }
    }

    const grades = [
      { name: 'S', threshold: 90 },
      { name: 'A', threshold: 80 },
      { name: 'B', threshold: 70 },
      { name: 'C', threshold: 60 },
      { name: 'D', threshold: 50 },
      { name: 'E', threshold: 40 }
    ];

    grades.forEach(g => {
      const scoreWith0 = course.calculate({ ...coercedScores, [endTermComp.id]: 0 });
      const scoreWithMax = course.calculate({ ...coercedScores, [endTermComp.id]: endTermComp.max });
      const epsilon = 0.0001;

      if (scoreWith0 >= g.threshold - epsilon) {
        results.push({ grade: g.name, status: 'secured' });
      } else if (scoreWithMax < g.threshold - epsilon) {
        results.push({ grade: g.name, status: 'impossible' });
      } else {
        let low = 0;
        let high = endTermComp.max;
        let ans = endTermComp.max;
        for (let i = 0; i < 40; i++) {
          let mid = (low + high) / 2;
          if (course.calculate({ ...coercedScores, [endTermComp.id]: mid }) >= g.threshold - epsilon) {
            ans = mid;
            high = mid;
          } else {
            low = mid;
          }
        }
        let requiredInt = Math.ceil(ans - 0.001);
        if (requiredInt < 0) requiredInt = 0;
        if (requiredInt > endTermComp.max) requiredInt = endTermComp.max;

        results.push({ 
          grade: g.name, 
          status: 'achievable', 
          required: requiredInt, 
          max: endTermComp.max,
          percentage: Math.round((requiredInt / endTermComp.max) * 100)
        });
      }
    });

    return results;
  };

  const handleScoreChange = (id, value) => {
    setScores(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen relative z-10">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-6 shadow-inner">
          <Calculator className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Predictor</span>
        </h1>
        <p className="font-sans text-lg text-foreground/70 font-medium leading-relaxed">
          Forecast your final course grade by experimenting with different score scenarios. No magic, just math.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Config */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          
          {/* Level Selector */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass p-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              Course Selection
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(coursesConfig).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-5 py-2.5 font-sans text-sm font-semibold rounded-xl transition-all duration-200 ${
                    level === lvl
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-foreground/70 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-foreground'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Course Selector */}
            <div>
              <label htmlFor="course-select" className="block font-sans text-xs font-bold text-foreground/50 uppercase tracking-widest mb-3 pl-1">
                Select Course
              </label>
              <div className="relative">
                <select
                  id="course-select"
                  value={course.id}
                  onChange={(e) => {
                    const selected = coursesConfig[level].find(c => c.id === e.target.value);
                    setCourse(selected);
                  }}
                  className="block w-full pl-4 pr-10 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-foreground font-semibold appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                >
                  {coursesConfig[level].map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Input Sliders */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass p-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-500">
                <Sparkles className="w-5 h-5" />
              </div>
              Enter Scores
            </h2>
            <div className="space-y-8">
              <AnimatePresence mode="popLayout">
                {course.components.map((comp, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    key={comp.id} 
                    className="relative bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-sans text-sm font-bold text-foreground">{comp.label}</label>
                      <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5">
                        <input
                          type="number"
                          min="0"
                          max={comp.max}
                          value={scores[comp.id] !== undefined ? scores[comp.id] : ''}
                          onChange={(e) => {
                            let val = e.target.value;
                            if (val !== '') {
                              val = Number(val);
                              if (val > comp.max) val = comp.max;
                              if (val < 0) val = 0;
                            }
                            handleScoreChange(comp.id, val);
                          }}
                          className="w-16 text-right bg-transparent font-sans font-bold text-lg text-primary focus:outline-none placeholder-foreground/20"
                          placeholder="0"
                        />
                        <span className="font-sans text-sm font-semibold text-foreground/40">
                          / {comp.max}
                        </span>
                      </div>
                    </div>
                    <div className="relative group flex items-center h-4">
                      <input
                        type="range"
                        min="0"
                        max={comp.max}
                        value={scores[comp.id] || 0}
                        onChange={(e) => handleScoreChange(comp.id, Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-primary outline-none transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="flex justify-between font-sans text-xs font-semibold text-foreground/40 mt-1 px-1">
                      <span>0</span>
                      <span>{comp.max}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Result */}
        <div className="lg:col-span-5 xl:col-span-4">
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="sticky top-28"
          >
            <div className={`p-8 rounded-3xl border border-white/20 transition-all duration-500 shadow-xl overflow-hidden relative ${gradeColors[result.grade]}`}>
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px]"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest font-bold opacity-80 mb-1">Predicted Grade</h3>
                    <p className="font-sans text-sm font-medium leading-tight max-w-[180px]">{course.name}</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md border border-white/20">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-center my-10">
                  <motion.div 
                    key={result.grade}
                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="font-display text-[7rem] leading-none font-black tracking-tighter drop-shadow-lg"
                  >
                    {result.grade}
                  </motion.div>
                  <div className="font-mono text-xl font-bold opacity-90 mt-2 bg-black/20 inline-block px-4 py-1.5 rounded-full backdrop-blur-sm">
                    SCORE: {result.score.toFixed(2)}
                  </div>
                </div>
                
                {course.formula && (
                  <div className="mt-8 p-4 bg-black/10 rounded-xl backdrop-blur-md border border-white/10">
                    <div className="opacity-70 mb-2 text-[10px] font-bold uppercase tracking-widest">Grading Formula</div>
                    <div className="font-mono text-xs leading-relaxed break-words font-medium">{course.formula}</div>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  {endTermComp ? (
                    <div>
                      <div className="font-sans text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center justify-between opacity-80">
                        <span>End-Term Goals</span>
                        <span>MAX: {endTermComp.max}</span>
                      </div>
                      <div className="space-y-2">
                        {reverseCalculate().map((res, i) => (
                          <div key={res.grade} className="flex justify-between items-center bg-black/10 rounded-lg px-3 py-2 text-sm font-medium">
                            <span>Grade {res.grade}</span>
                            <span className="text-right text-xs font-bold">
                              {res.status === 'secured' && 'Secured ✓'}
                              {res.status === 'impossible' && <span className="opacity-60">Not possible</span>}
                              {res.status === 'achievable' && `${res.required} / ${res.max} (${res.percentage}%)`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm font-medium">
                      <div className="flex items-center justify-between bg-black/10 rounded-lg px-4 py-2">
                        <span className="opacity-90">Minimum for S:</span>
                        <span className="font-bold">90.00</span>
                      </div>
                      <div className="flex items-center justify-between bg-black/10 rounded-lg px-4 py-2">
                        <span className="opacity-90">Minimum to Pass:</span>
                        <span className="font-bold">40.00</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default GradePredictor;
