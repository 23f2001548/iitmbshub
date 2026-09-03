import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Award, BookOpen } from 'lucide-react';
import { coursesConfig, getLetterGrade } from '../utils/gradingLogic';

const gradeColors = {
  S: 'bg-[#00E676] text-black border-black',
  A: 'bg-[#00E676] text-black border-black',
  B: 'bg-[#0047FF] text-white border-black',
  C: 'bg-[#FFEA00] text-black border-black',
  D: 'bg-[#FF2E00] text-white border-black',
  E: 'bg-[#FF2E00] text-white border-black',
  U: 'bg-black text-white border-black dark:bg-white dark:text-black'
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
    <div className="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen bg-[#F4F4F0] dark:bg-[#0B0B0B]">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-16"
      >
        <div className="inline-flex items-center justify-center p-4 bg-[#0047FF] text-white border-2 border-black mb-6">
          <Calculator className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl font-black text-black dark:text-white sm:text-6xl md:text-7xl tracking-tighter uppercase mb-4">
          Grade <br/> Predictor.
        </h1>
        <p className="font-sans text-lg text-black/70 dark:text-white/70 max-w-2xl font-medium leading-relaxed">
          Forecast your final course grade by experimenting with different score scenarios. No magic, just math.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Config */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Level Selector */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 p-8 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#FFF]"
          >
            <h2 className="font-display text-2xl font-black uppercase text-black dark:text-white mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#0047FF]" /> Select Level
            </h2>
            <div className="flex flex-wrap gap-3">
              {Object.keys(coursesConfig).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-6 py-3 font-mono text-sm uppercase font-bold tracking-widest border-2 transition-colors ${
                    level === lvl
                      ? 'bg-[#0047FF] text-white border-black dark:border-[#0047FF]'
                      : 'bg-[#F4F4F0] dark:bg-[#0B0B0B] text-black dark:text-white border-black dark:border-white/20 hover:bg-[#0047FF] hover:text-white hover:border-black'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Course Selector */}
            <div className="mt-8">
              <label htmlFor="course-select" className="block font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-white mb-3">
                Select Course
              </label>
              <select
                id="course-select"
                value={course.id}
                onChange={(e) => {
                  const selected = coursesConfig[level].find(c => c.id === e.target.value);
                  setCourse(selected);
                }}
                className="block w-full pl-4 pr-10 py-4 text-base border-2 border-black dark:border-white/20 bg-[#F4F4F0] dark:bg-[#0B0B0B] text-black dark:text-white font-mono font-bold appearance-none cursor-pointer focus:outline-none focus:border-[#0047FF] transition-colors"
              >
                {coursesConfig[level].map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Input Sliders */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 p-8 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#FFF]"
          >
            <h2 className="font-display text-2xl font-black uppercase text-black dark:text-white mb-8 border-l-8 border-[#0047FF] pl-4">
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
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <label className="font-mono text-sm font-bold uppercase tracking-wide text-black dark:text-white">{comp.label}</label>
                      <div className="flex items-center space-x-2 bg-[#F4F4F0] dark:bg-[#0B0B0B] px-3 py-2 border-2 border-black dark:border-white/20">
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
                          className="w-16 text-right bg-transparent font-mono font-black text-xl text-[#0047FF] focus:outline-none placeholder-black/20 dark:placeholder-white/20"
                          placeholder="0"
                        />
                        <span className="font-mono text-sm font-bold text-black/50 dark:text-white/50">
                          / {comp.max}
                        </span>
                      </div>
                    </div>
                    <div className="relative group">
                      <input
                        type="range"
                        min="0"
                        max={comp.max}
                        value={scores[comp.id] || 0}
                        onChange={(e) => handleScoreChange(comp.id, Number(e.target.value))}
                        className="w-full h-2 bg-black dark:bg-white/20 appearance-none cursor-pointer accent-[#0047FF] transition-all hover:h-4"
                      />
                    </div>
                    <div className="flex justify-between font-mono text-xs font-bold text-black/50 dark:text-white/50 mt-2 px-1">
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
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="sticky top-28"
        >
          <div className={`p-8 border-4 transition-colors duration-300 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FFF] ${gradeColors[result.grade]}`}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold opacity-90">Predicted Grade</h3>
                <p className="font-sans text-sm opacity-80 mt-1 font-bold">{course.name}</p>
              </div>
              <div className="p-3 bg-black/10 border-2 border-black">
                <Award className="w-8 h-8" />
              </div>
            </div>

            <div className="text-center my-8">
              <motion.div 
                key={result.grade}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="font-display text-[8rem] leading-none font-black tracking-tighter mb-4"
              >
                {result.grade}
              </motion.div>
              <div className="font-mono text-2xl font-black opacity-90">
                SCORE: {result.score.toFixed(2)}
              </div>
            </div>

            {endTermComp ? (
              <div className="mt-12 bg-white/20 border-2 border-black p-6">
                <div className="font-mono text-xs uppercase tracking-widest font-black mb-4 pb-3 border-b-2 border-current flex items-center justify-between">
                  <span className="opacity-90">End-Term Goals</span>
                  <span className="opacity-70">MAX: {endTermComp.max}</span>
                </div>
                <div className="space-y-0">
                  {reverseCalculate().map((res, i, arr) => (
                    <div key={res.grade}>
                      <div className="flex justify-between items-center font-mono text-sm font-bold py-2">
                        <span className="text-lg">Grade {res.grade}</span>
                        <span className="opacity-90 text-right">
                          {res.status === 'secured' && 'Secured ✓'}
                          {res.status === 'impossible' && <span className="opacity-50 text-xs uppercase tracking-wider">Not possible</span>}
                          {res.status === 'achievable' && `${res.required} / ${res.max} (${res.percentage}%)`}
                        </span>
                      </div>
                      {i < arr.length - 1 && <div className="h-px bg-current opacity-20"></div>}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-12 bg-white/20 border-2 border-black p-6">
                <div className="flex items-center justify-between font-mono text-sm font-bold uppercase">
                  <span className="opacity-90">Minimum for S:</span>
                  <span>90.00</span>
                </div>
                <div className="flex items-center justify-between font-mono text-sm font-bold uppercase mt-4">
                  <span className="opacity-90">Minimum to Pass:</span>
                  <span>40.00</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default GradePredictor;
