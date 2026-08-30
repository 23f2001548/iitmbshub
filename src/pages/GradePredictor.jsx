import { useState, useEffect } from 'react';
import { Calculator, Award, ArrowRight, BookOpen } from 'lucide-react';
import { coursesConfig, getLetterGrade } from '../utils/gradingLogic';

const gradeColors = {
  S: 'from-green-400 to-emerald-600 text-white',
  A: 'from-green-400 to-emerald-600 text-white',
  B: 'from-blue-400 to-indigo-600 text-white',
  C: 'from-yellow-400 to-orange-500 text-white',
  D: 'from-orange-400 to-red-500 text-white',
  E: 'from-red-500 to-rose-700 text-white',
  U: 'from-gray-700 to-gray-900 text-white'
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
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 bg-iitm-blue text-white rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Calculator className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
          Grade Predictor
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Accurately forecast your final course grade by experimenting with different score scenarios across all components.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Config */}
        <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
          
          {/* Level Selector */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-iitm-blue" /> Select Level
            </h2>
            <div className="flex flex-wrap gap-3">
              {Object.keys(coursesConfig).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    level === lvl
                      ? 'bg-iitm-blue text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Course Selector */}
            <div className="mt-8">
              <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select Course
              </label>
              <select
                id="course-select"
                value={course.id}
                onChange={(e) => {
                  const selected = coursesConfig[level].find(c => c.id === e.target.value);
                  setCourse(selected);
                }}
                className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-iitm-blue focus:border-iitm-blue sm:text-sm rounded-xl shadow-sm bg-gray-50"
              >
                {coursesConfig[level].map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Input Sliders */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-iitm-blue pl-4">
              Enter Your Scores
            </h2>
            <div className="space-y-8">
              {course.components.map((comp) => (
                <div key={comp.id} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">{comp.label}</label>
                    <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
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
                        className="w-16 text-right bg-transparent font-bold text-iitm-blue focus:outline-none focus:ring-1 focus:ring-iitm-blue rounded"
                      />
                      <span className="text-sm font-bold text-iitm-blue">
                        / {comp.max}
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={comp.max}
                    value={scores[comp.id] || 0}
                    onChange={(e) => handleScoreChange(comp.id, Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-iitm-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                    <span>0</span>
                    <span>{comp.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Result */}
        <div className="animate-fade-in-right">
          <div className={`rounded-3xl shadow-2xl p-8 bg-gradient-to-br ${gradeColors[result.grade]} sticky top-24 transition-colors duration-500`}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-medium opacity-90">Predicted Grade</h3>
                <p className="text-sm opacity-75 mt-1">{course.name}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center my-12">
              <div className="text-8xl font-black tracking-tighter mb-4 drop-shadow-lg">
                {result.grade}
              </div>
              <div className="text-2xl font-bold opacity-90">
                Score: {result.score.toFixed(2)}
              </div>
            </div>

            <div className="mt-12 bg-white/10 rounded-2xl p-5 backdrop-blur-md">
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-90">Minimum for S grade:</span>
                <span className="font-bold">90.00</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-3">
                <span className="opacity-90">Minimum to pass (E):</span>
                <span className="font-bold">40.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GradePredictor;
