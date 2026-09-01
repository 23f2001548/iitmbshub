import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Award, ArrowRight, BookOpen } from 'lucide-react';
import { coursesConfig, getLetterGrade } from '../utils/gradingLogic';

const gradeColors = {
  S: 'from-emerald-400 to-emerald-600',
  A: 'from-emerald-400 to-emerald-600',
  B: 'from-blue-400 to-indigo-600',
  C: 'from-amber-400 to-orange-500',
  D: 'from-orange-400 to-red-500',
  E: 'from-red-500 to-rose-700',
  U: 'from-gray-600 to-gray-800'
};

const GradePredictor = () => {
  const [level, setLevel] = useState('Foundation');
  const [course, setCourse] = useState(coursesConfig['Foundation'][0]);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState({ score: 0, grade: 'U' });

  // Handle level change
  useEffect(() => {
    const firstCourse = coursesConfig[level][0];
    setCourse(firstCourse);
  }, [level]);

  // Reset scores when course changes
  useEffect(() => {
    const initialScores = {};
    course.components.forEach(comp => {
      initialScores[comp.id] = 0;
    });
    setScores(initialScores);
  }, [course]);

  // Calculate results on score change
  useEffect(() => {
    const coercedScores = {};
    for (const key in scores) {
      coercedScores[key] = Number(scores[key]) || 0;
    }
    const calculatedScore = course.calculate(coercedScores);
    const letterGrade = getLetterGrade(calculatedScore);
    setResult({ score: calculatedScore, grade: letterGrade });
  }, [scores, course]);

  const handleScoreChange = (id, value) => {
    setScores(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl mb-6 shadow-[0_0_40px_rgba(99,102,241,0.4)]"
        >
          <Calculator className="w-10 h-10" />
        </motion.div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl md:text-6xl tracking-tight mb-4">
          Grade Predictor
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Accurately forecast your final course grade by experimenting with different score scenarios across all components.
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
            className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-200/50 dark:border-white/5 p-8"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-500" /> Select Level
            </h2>
            <div className="flex flex-wrap gap-3">
              {Object.keys(coursesConfig).map((lvl) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-colors ${
                    level === lvl
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {lvl}
                </motion.button>
              ))}
            </div>

            {/* Course Selector */}
            <div className="mt-8">
              <label htmlFor="course-select" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Select Course
              </label>
              <select
                id="course-select"
                value={course.id}
                onChange={(e) => {
                  const selected = coursesConfig[level].find(c => c.id === e.target.value);
                  setCourse(selected);
                }}
                className="block w-full pl-4 pr-10 py-4 text-base border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-2xl shadow-sm bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white font-medium appearance-none cursor-pointer"
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
            className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-200/50 dark:border-white/5 p-8"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-8 border-l-4 border-indigo-500 pl-4 rounded-sm">
              Enter Your Scores
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
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-200">{comp.label}</label>
                      <div className="flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
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
                          className="w-16 text-right bg-transparent font-bold text-indigo-600 dark:text-indigo-400 focus:outline-none placeholder-indigo-300"
                          placeholder="0"
                        />
                        <span className="text-sm font-bold text-indigo-400 dark:text-indigo-500/50">
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
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400 transition-all hover:h-3"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2 px-1 font-semibold">
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
        >
          <div className={`rounded-[32px] shadow-2xl p-8 bg-gradient-to-br ${gradeColors[result.grade]} sticky top-28 transition-colors duration-500 border border-white/20`}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-bold opacity-90 text-white">Predicted Grade</h3>
                <p className="text-sm opacity-80 mt-1 text-white font-medium">{course.name}</p>
              </div>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            <div className="text-center my-12">
              <motion.div 
                key={result.grade}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="text-8xl font-black tracking-tighter mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-white"
              >
                {result.grade}
              </motion.div>
              <div className="text-2xl font-bold opacity-90 text-white">
                Score: {result.score.toFixed(2)}
              </div>
            </div>

            <div className="mt-12 bg-black/10 rounded-[20px] p-6 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between text-sm text-white">
                <span className="opacity-90 font-medium">Minimum for S grade:</span>
                <span className="font-bold">90.00</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-4 text-white">
                <span className="opacity-90 font-medium">Minimum to pass (E):</span>
                <span className="font-bold">40.00</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default GradePredictor;
