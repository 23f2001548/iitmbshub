import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, AlertTriangle, BookOpen,
  ChevronDown, Award, GitBranch, CheckCircle2, ClipboardList
} from 'lucide-react';
import { COURSES, COURSE_LEVELS, calculateCGPA } from '../utils/cgpaCourses';

const GRADES = ['S', 'A', 'B', 'C', 'D', 'E', 'U', 'P', 'F', 'W', 'I', '-'];

const STREAM_META = {
  BP: { label: 'Degree – Programming (BP)', colour: 'text-blue-600 dark:text-blue-400' },
  BD: { label: 'Degree – Data Science (BD)', colour: 'text-emerald-600 dark:text-emerald-400' },
  HM: { label: 'Humanities & Mgmt (HM)',     colour: 'text-violet-600 dark:text-violet-400' },
  SE: { label: 'Science & Engg (SE)',         colour: 'text-orange-600 dark:text-orange-400' },
};

// Default credits prefill for direct-entry per level
const LEVEL_META = {
  [COURSE_LEVELS.FOUNDATION]:   { defaultCredits: 32, defaultProjCredits: 0,  hasProject: false, colour: 'sky',    hint: '8 courses × 4 CR' },
  [COURSE_LEVELS.DIPLOMA_DS]:   { defaultCredits: 23, defaultProjCredits: 4,  hasProject: true,  colour: 'teal',   hint: '5 mandatory + 1 pathway theory course' },
  [COURSE_LEVELS.DIPLOMA_PROG]: { defaultCredits: 23, defaultProjCredits: 4,  hasProject: true,  colour: 'teal',   hint: 'PDSA, DBMS, MAD1, Java, SysCmd, MAD2' },
  [COURSE_LEVELS.DEGREE_BSC]:   { defaultCredits: 28, defaultProjCredits: 0,  hasProject: false, colour: 'indigo', hint: '5 mandatory + electives (28 CR total)' },
  [COURSE_LEVELS.DEGREE_BS]:    { defaultCredits: 28, defaultProjCredits: 0,  hasProject: false, colour: 'indigo', hint: '28 CR (electives + NPTEL/Apprenticeship)' },
};

const colourTokens = {
  sky:    'border-sky-500/30    bg-sky-500/5    text-sky-600    dark:text-sky-400',
  teal:   'border-teal-500/30   bg-teal-500/5   text-teal-600   dark:text-teal-400',
  indigo: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400',
};

const parseNum = v => { const n = parseFloat(v); return isNaN(n) ? null : n; };
const fmtCgpa = (pts, cr) => cr > 0 ? (pts / cr).toFixed(2) : '—';
const toFixed2 = v => { const n = parseNum(v); return n !== null ? n.toFixed(2) : '—'; };

const CGPACalculator = () => {
  // Per-level mode: 'grades' | 'direct'
  const [levelModes, setLevelModes] = useState({
    [COURSE_LEVELS.FOUNDATION]:   'grades',
    [COURSE_LEVELS.DIPLOMA_DS]:   'grades',
    [COURSE_LEVELS.DIPLOMA_PROG]: 'grades',
    [COURSE_LEVELS.DEGREE_BSC]:   'grades',
    [COURSE_LEVELS.DEGREE_BS]:    'grades',
  });

  // Direct-entry inputs per level
  const [directInputs, setDirectInputs] = useState({
    [COURSE_LEVELS.FOUNDATION]:   { cgpa: '', credits: 32 },
    [COURSE_LEVELS.DIPLOMA_DS]:   { cgpa: '', credits: 23, projectCgpa: '', projectCredits: 4 },
    [COURSE_LEVELS.DIPLOMA_PROG]: { cgpa: '', credits: 23, projectCgpa: '', projectCredits: 4 },
    [COURSE_LEVELS.DEGREE_BSC]:   { cgpa: '', credits: 28 },
    [COURSE_LEVELS.DEGREE_BS]:    { cgpa: '', credits: 28 },
  });

  const [grades, setGrades] = useState({});
  const [extraCredits, setExtraCredits] = useState({ nptelBsc: 0, nptelBs: 0, appr: 0 });
  const [diplomaPathway, setDiplomaPathway] = useState(null);
  const [expandedLevels, setExpandedLevels] = useState({
    [COURSE_LEVELS.FOUNDATION]:   true,
    [COURSE_LEVELS.DIPLOMA_DS]:   false,
    [COURSE_LEVELS.DIPLOMA_PROG]: false,
    [COURSE_LEVELS.DEGREE_BSC]:   false,
    [COURSE_LEVELS.DEGREE_BS]:    false,
  });

  // Persist
  useEffect(() => {
    const saved = localStorage.getItem('cgpaCalcState');
    if (!saved) return;
    try {
      const p = JSON.parse(saved);
      if (p.grades)        setGrades(p.grades);
      if (p.extraCredits)  setExtraCredits(p.extraCredits);
      if (p.diplomaPathway) setDiplomaPathway(p.diplomaPathway);
      if (p.levelModes)    setLevelModes(prev => ({ ...prev, ...p.levelModes }));
      if (p.directInputs)  setDirectInputs(prev => ({ ...prev, ...p.directInputs }));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem('cgpaCalcState', JSON.stringify(
      { grades, extraCredits, diplomaPathway, levelModes, directInputs }
    ));
  }, [grades, extraCredits, diplomaPathway, levelModes, directInputs]);

  // Handlers
  const handleGradeChange = (id, val) =>
    setGrades(prev => { const u = { ...prev }; val === '-' ? delete u[id] : (u[id] = val); return u; });

  const handlePathwayChange = (newPathway) => {
    if (newPathway === diplomaPathway) return;
    const toClear = COURSES[COURSE_LEVELS.DIPLOMA_DS]
      .filter(c => c.group === (newPathway === 'opt1' ? 'opt2' : 'opt1')).map(c => c.id);
    setGrades(prev => { const u = { ...prev }; toClear.forEach(id => delete u[id]); return u; });
    setDiplomaPathway(newPathway);
  };

  const handleDirectChange = (level, field, val) =>
    setDirectInputs(prev => ({ ...prev, [level]: { ...prev[level], [field]: val } }));

  const setLevelMode = (level, mode, e) => {
    e.stopPropagation();
    setLevelModes(prev => ({ ...prev, [level]: mode }));
  };

  const clearAll = () => {
    if (!window.confirm('Clear all entered data?')) return;
    setGrades({});
    setDiplomaPathway(null);
    setDirectInputs({
      [COURSE_LEVELS.FOUNDATION]:   { cgpa: '', credits: 32 },
      [COURSE_LEVELS.DIPLOMA_DS]:   { cgpa: '', credits: 23, projectCgpa: '', projectCredits: 4 },
      [COURSE_LEVELS.DIPLOMA_PROG]: { cgpa: '', credits: 23, projectCgpa: '', projectCredits: 4 },
      [COURSE_LEVELS.DEGREE_BSC]:   { cgpa: '', credits: 28 },
      [COURSE_LEVELS.DEGREE_BS]:    { cgpa: '', credits: 28 },
    });
  };

  const toggleLevel = lvl =>
    setExpandedLevels(prev => ({ ...prev, [lvl]: !prev[lvl] }));

  // ── Merged CGPA computation ────────────────────────────────────────────────
  const calc = useMemo(() => {
    // Run grade-based calc only for levels in 'grades' mode
    const filteredCourses = {};
    Object.entries(COURSES).forEach(([level, courses]) => {
      filteredCourses[level] = levelModes[level] === 'grades' ? courses : [];
    });
    const base = calculateCGPA(grades, extraCredits, filteredCourses);

    // Merge direct inputs on top
    let totalPts = base.stats.total.gradedPoints;
    let totalCR  = base.stats.total.gradedCredits;
    let projPts  = base.stats.projects.points;
    let projCR   = base.stats.projects.credits;
    let earnedCR = base.stats.total.earnedCredits;

    const injectDirect = (level) => {
      if (levelModes[level] !== 'direct') return;
      const inp = directInputs[level];
      const g = parseNum(inp.cgpa), c = parseNum(inp.credits);
      if (g !== null && c !== null && c > 0) { 
        totalPts += g * c; 
        totalCR += c; 
        earnedCR += c; 
      }
      if (inp.projectCgpa !== undefined) {
        const pg = parseNum(inp.projectCgpa), pc = parseNum(inp.projectCredits);
        if (pg !== null && pc !== null && pc > 0) { 
           // Blend projects into the overall CGPA too
           totalPts += pg * pc; 
           totalCR += pc;
           projPts += pg * pc; 
           projCR += pc; 
           earnedCR += pc; 
        }
      }
    };

    Object.keys(COURSES).forEach(injectDirect);

    // Display CGPA per level (direct value blended with project if applicable, or grade-based)
    const lvlDisplay = (level, gradeVal) => {
      if (levelModes[level] !== 'direct') return gradeVal;
      const inp = directInputs[level];
      const g = parseNum(inp.cgpa), c = parseNum(inp.credits);
      let lvlPts = 0; let lvlCR = 0;
      if (g !== null && c !== null && c > 0) { lvlPts += g * c; lvlCR += c; }
      
      if (inp.projectCgpa !== undefined) {
        const pg = parseNum(inp.projectCgpa), pc = parseNum(inp.projectCredits);
        if (pg !== null && pc !== null && pc > 0) { lvlPts += pg * pc; lvlCR += pc; }
      }
      return lvlCR > 0 ? (lvlPts / lvlCR).toFixed(2) : '—';
    };

    return {
      base,
      totalCGPA:   fmtCgpa(totalPts, totalCR),
      projectCGPA: fmtCgpa(projPts, projCR),
      earnedCR,
      foundationCGPA:   lvlDisplay(COURSE_LEVELS.FOUNDATION,   base.foundationCGPA),
      diplomaDsCGPA:    lvlDisplay(COURSE_LEVELS.DIPLOMA_DS,   base.diplomaDsCGPA),
      diplomaProgCGPA:  lvlDisplay(COURSE_LEVELS.DIPLOMA_PROG, base.diplomaProgCGPA),
      bscDirectCGPA: levelModes[COURSE_LEVELS.DEGREE_BSC] === 'direct' ? toFixed2(directInputs[COURSE_LEVELS.DEGREE_BSC]?.cgpa) : null,
      bsDirectCGPA:  levelModes[COURSE_LEVELS.DEGREE_BS]  === 'direct' ? toFixed2(directInputs[COURSE_LEVELS.DEGREE_BS]?.cgpa)  : null,
      bpCGPA: base.bpCGPA,
      bdCGPA: base.bdCGPA,
      hmCGPA: base.hmCGPA,
      seCGPA: base.seCGPA,
      diplomaCumulativeCGPA: base.diplomaCumulativeCGPA,
    };
  }, [grades, extraCredits, levelModes, directInputs]);

  // ── Sidebar CGPA rows ─────────────────────────────────────────────────────
  const cgpaRows = useMemo(() => {
    const rows = [
      { label: 'Foundation (FL)',             value: calc.foundationCGPA,  colour: 'text-sky-600 dark:text-sky-400' },
      { label: 'Diploma – Data Science (DD)', value: calc.diplomaDsCGPA,   colour: 'text-teal-600 dark:text-teal-400' },
      { label: 'Diploma – Programming (DP)',  value: calc.diplomaProgCGPA, colour: 'text-teal-600 dark:text-teal-400' },
    ];
    // Degree rows adapt to mode
    if (calc.bscDirectCGPA !== null) {
      rows.push({ label: 'BSc Degree (combined)', value: calc.bscDirectCGPA, colour: 'text-indigo-600 dark:text-indigo-400' });
    }
    rows.push(
      { label: 'Degree – Programming (BP)', value: calc.bpCGPA, colour: STREAM_META.BP.colour },
      { label: 'Degree – Data Science (BD)', value: calc.bdCGPA, colour: STREAM_META.BD.colour },
      { label: 'Humanities & Mgmt (HM)',    value: calc.hmCGPA, colour: STREAM_META.HM.colour },
      { label: 'Science & Engg (SE)',        value: calc.seCGPA, colour: STREAM_META.SE.colour },
    );
    if (calc.bsDirectCGPA !== null) {
      rows.push({ label: 'BS Degree (combined)', value: calc.bsDirectCGPA, colour: 'text-indigo-600 dark:text-indigo-400' });
    }
    return rows;
  }, [calc]);

  // ── Warnings ──────────────────────────────────────────────────────────────
  const warnings = useMemo(() => {
    const w = [];
    const { base } = calc;
    const hasDip = base.stats.diplomaDs.earnedCredits > 0 || base.stats.diplomaProg.earnedCredits > 0
      || levelModes[COURSE_LEVELS.DIPLOMA_DS] === 'direct' || levelModes[COURSE_LEVELS.DIPLOMA_PROG] === 'direct';
    if (hasDip && base.stats.foundation.courses < 8 && levelModes[COURSE_LEVELS.FOUNDATION] === 'grades')
      w.push('You must complete all 8 Foundation courses before registering for Diploma level courses.');
    const hasDeg = base.stats.degreeBsc.earnedCredits > 0 || base.stats.degreeBs.earnedCredits > 0
      || levelModes[COURSE_LEVELS.DEGREE_BSC] === 'direct' || levelModes[COURSE_LEVELS.DEGREE_BS] === 'direct';
    if (hasDeg) {
      const dipCGPA = parseNum(calc.diplomaCumulativeCGPA);
      if (dipCGPA !== null && dipCGPA < 6.0)
        w.push('Your Diploma Cumulative CGPA is below 6.0 — required to register for Degree level courses.');
      if (calc.projectCGPA !== '—' && parseNum(calc.projectCGPA) < 7.0)
        w.push('Your Project CGPA is below 7.0 — required to register for Degree level courses.');
    }
    const tc = parseNum(calc.totalCGPA);
    if (hasDeg && tc !== null && tc >= 8.0)
      w.push('🎉 Total CGPA ≥ 8.0 at the BS level — you may be eligible for the on-campus MS upgrade!');
    const failedCount = Object.values(grades).filter(v => ['U','F','W','I'].includes(v)).length;
    if (failedCount > 0)
      w.push(`${failedCount} course(s) with U/F/W/I grade — no credits earned, excluded from CGPA.`);
    return w;
  }, [calc, grades, levelModes]);

  // ── Progress bars ─────────────────────────────────────────────────────────
  const progressBars = [
    { label: 'Foundation',   target: 32, earned: levelModes[COURSE_LEVELS.FOUNDATION] === 'direct' ? (parseInt(directInputs[COURSE_LEVELS.FOUNDATION].credits) || 0) : calc.base.stats.foundation.earnedCredits },
    { label: 'Diploma DS',   target: 27, earned: levelModes[COURSE_LEVELS.DIPLOMA_DS] === 'direct' ? ((parseInt(directInputs[COURSE_LEVELS.DIPLOMA_DS].credits) || 0) + (parseInt(directInputs[COURSE_LEVELS.DIPLOMA_DS].projectCredits) || 0)) : calc.base.stats.diplomaDs.earnedCredits },
    { label: 'Diploma Prog', target: 27, earned: levelModes[COURSE_LEVELS.DIPLOMA_PROG] === 'direct' ? ((parseInt(directInputs[COURSE_LEVELS.DIPLOMA_PROG].credits) || 0) + (parseInt(directInputs[COURSE_LEVELS.DIPLOMA_PROG].projectCredits) || 0)) : calc.base.stats.diplomaProg.earnedCredits },
    { label: 'BSc Degree',   target: 28, earned: levelModes[COURSE_LEVELS.DEGREE_BSC] === 'direct' ? (parseInt(directInputs[COURSE_LEVELS.DEGREE_BSC].credits) || 0) : calc.base.stats.degreeBsc.earnedCredits },
    { label: 'BS Degree',    target: 28, earned: levelModes[COURSE_LEVELS.DEGREE_BS] === 'direct' ? (parseInt(directInputs[COURSE_LEVELS.DEGREE_BS].credits) || 0) : calc.base.stats.degreeBs.earnedCredits },
  ];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen text-foreground font-sans pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-primary selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* ── Main ── */}
        <div className="flex-1 space-y-6">

          {/* Hero */}
          <div className="glass p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
            <h1 className="text-4xl font-display font-black tracking-tight mb-2 text-foreground">
              CGPA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Calculator</span>
            </h1>
            <p className="text-base font-medium text-foreground/60">
              Mix & match — enter grades course-by-course <em>or</em> type CGPA directly, independently for each level.
            </p>
          </div>

          {/* Warnings */}
          <AnimatePresence>
            {warnings.length > 0 && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="glass !bg-yellow-500/10 !border-yellow-500/30 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500/20 rounded-lg"><AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" /></div>
                    <h3 className="text-base font-bold text-yellow-800 dark:text-yellow-300">Status Notices</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm font-medium">
                    {warnings.map((msg, i) => (
                      <li key={i} className={msg.startsWith('🎉') ? 'text-green-700 dark:text-green-400 font-semibold' : 'text-yellow-800/80 dark:text-yellow-200/80'}>
                        {msg.startsWith('🎉') ? msg : `• ${msg}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Level Accordions ── */}
          <div className="space-y-5">
            {Object.entries(COURSES).map(([level, courseList]) => {
              const mode = levelModes[level];
              const meta = LEVEL_META[level];
              const colourClass = colourTokens[meta.colour] || colourTokens.sky;
              const visibleCourses = level === COURSE_LEVELS.DIPLOMA_DS
                ? courseList.filter(c => !c.group || c.group === diplomaPathway)
                : courseList;
              const inp = directInputs[level] || {};

              return (
                <div key={level} className="glass overflow-hidden group transition-all">

                  {/* ── Accordion header ── */}
                  <button
                    onClick={() => toggleLevel(level)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 transition-colors ${
                      expandedLevels[level]
                        ? 'bg-primary/5 dark:bg-primary/10 border-b border-primary/10'
                        : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {/* Left: title + mode badge */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 rounded-lg shrink-0 ${expandedLevels[level] ? 'bg-primary/20 text-primary' : 'bg-slate-200/50 dark:bg-slate-700/50 text-foreground/70'}`}>
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-display font-bold text-foreground truncate">{level}</span>
                      {mode === 'direct' && (
                        <span className={`hidden sm:inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border ${colourClass}`}>
                          <ClipboardList className="w-3 h-3" /> Direct
                        </span>
                      )}
                    </div>

                    {/* Right: mode pill toggle + chevron */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-3">
                      {/* Mode toggle — stops propagation so it doesn't open/close accordion */}
                      <div
                        onClick={e => e.stopPropagation()}
                        className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 gap-0.5"
                      >
                        <button
                          onClick={e => setLevelMode(level, 'grades', e)}
                          title="Enter individual course grades"
                          className={`text-xs px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                            mode === 'grades'
                              ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                              : 'text-foreground/40 hover:text-foreground/70'
                          }`}
                        >
                          Grades
                        </button>
                        <button
                          onClick={e => setLevelMode(level, 'direct', e)}
                          title="Enter CGPA directly from grade card"
                          className={`text-xs px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                            mode === 'direct'
                              ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                              : 'text-foreground/40 hover:text-foreground/70'
                          }`}
                        >
                          Direct
                        </button>
                      </div>
                      <motion.div animate={{ rotate: expandedLevels[level] ? 180 : 0 }}>
                        <ChevronDown className="w-5 h-5 text-foreground/50" />
                      </motion.div>
                    </div>
                  </button>

                  {/* ── Accordion body ── */}
                  <AnimatePresence>
                    {expandedLevels[level] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 bg-white/30 dark:bg-slate-900/30">

                          {/* ═══ DIRECT MODE ═══ */}
                          {mode === 'direct' && (
                            <div className={`rounded-xl border p-5 ${colourClass}`}>
                              <p className="text-sm font-bold mb-1 flex items-center gap-2">
                                <ClipboardList className="w-4 h-4" />
                                Direct Entry — {level}
                              </p>
                              <p className="text-xs opacity-70 font-medium mb-4">{meta.hint}</p>

                              <div className="flex flex-wrap gap-4">
                                {/* Theory CGPA */}
                                <div className="flex-1 min-w-[130px]">
                                  <label className="text-xs font-bold opacity-70 block mb-1.5">
                                    {meta.hasProject ? 'Theory CGPA' : 'CGPA'} (0–10)
                                  </label>
                                  <input
                                    type="number" min="0" max="10" step="0.01"
                                    placeholder="e.g. 8.50"
                                    value={inp.cgpa}
                                    onChange={e => handleDirectChange(level, 'cgpa', e.target.value)}
                                    className="w-full bg-white/70 dark:bg-slate-900/60 border border-current/20 rounded-lg text-sm font-semibold px-3 py-2.5 focus:ring-2 focus:ring-current/30 outline-none text-foreground placeholder:text-foreground/30 transition-all"
                                  />
                                </div>
                                {/* Theory Credits */}
                                <div className="w-28">
                                  <label className="text-xs font-bold opacity-70 block mb-1.5">
                                    {meta.hasProject ? 'Theory Credits' : 'Earned Credits'}
                                  </label>
                                  <input
                                    type="number" min="0" max="142" step="1"
                                    value={inp.credits}
                                    onChange={e => handleDirectChange(level, 'credits', e.target.value)}
                                    className="w-full bg-white/70 dark:bg-slate-900/60 border border-current/20 rounded-lg text-sm font-semibold px-3 py-2.5 focus:ring-2 focus:ring-current/30 outline-none text-foreground transition-all"
                                  />
                                </div>
                                {/* Project inputs for Diploma levels */}
                                {meta.hasProject && (<>
                                  <div className="flex-1 min-w-[130px]">
                                    <label className="text-xs font-bold opacity-70 block mb-1.5">Project CGPA (0–10)</label>
                                    <input
                                      type="number" min="0" max="10" step="0.01"
                                      placeholder="e.g. 9.00"
                                      value={inp.projectCgpa ?? ''}
                                      onChange={e => handleDirectChange(level, 'projectCgpa', e.target.value)}
                                      className="w-full bg-white/70 dark:bg-slate-900/60 border border-current/20 rounded-lg text-sm font-semibold px-3 py-2.5 focus:ring-2 focus:ring-current/30 outline-none text-foreground placeholder:text-foreground/30 transition-all"
                                    />
                                  </div>
                                  <div className="w-28">
                                    <label className="text-xs font-bold opacity-70 block mb-1.5">Project Credits</label>
                                    <input
                                      type="number" min="0" max="12" step="1"
                                      value={inp.projectCredits ?? ''}
                                      onChange={e => handleDirectChange(level, 'projectCredits', e.target.value)}
                                      className="w-full bg-white/70 dark:bg-slate-900/60 border border-current/20 rounded-lg text-sm font-semibold px-3 py-2.5 focus:ring-2 focus:ring-current/30 outline-none text-foreground transition-all"
                                    />
                                  </div>
                                </>)}
                              </div>
                            </div>
                          )}

                          {/* ═══ GRADES MODE ═══ */}
                          {mode === 'grades' && (<>

                            {/* Diploma DS pathway selector */}
                            {level === COURSE_LEVELS.DIPLOMA_DS && (
                              <div className="mb-5 p-4 bg-primary/5 border border-primary/15 rounded-xl">
                                <p className="text-sm font-bold text-foreground mb-1 flex items-center gap-2">
                                  <GitBranch className="w-4 h-4 text-primary" />
                                  Choose your optional pathway
                                </p>
                                <p className="text-xs text-foreground/55 font-medium mb-3">
                                  Only one pathway is allowed. Switching clears the other pathway's grades.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                  {[
                                    { key: 'opt1', label: 'Option 1 — Business Analytics + BDM Project' },
                                    { key: 'opt2', label: 'Option 2 — Intro to GenAI + GenAI Project' },
                                  ].map(({ key, label }) => (
                                    <button key={key} onClick={() => handlePathwayChange(key)}
                                      className={`flex-1 flex items-center gap-2 p-3 rounded-xl border-2 text-sm font-semibold transition-all text-left ${
                                        diplomaPathway === key
                                          ? 'border-primary bg-primary/10 text-primary'
                                          : 'border-slate-200 dark:border-slate-700 text-foreground/60 hover:border-primary/50'
                                      }`}>
                                      {diplomaPathway === key && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                                      {label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Course cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {visibleCourses.map(course => (
                                <div key={course.id}
                                  className="bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                                >
                                  <div>
                                    <p className="font-bold text-sm mb-2 text-foreground line-clamp-2">{course.name}</p>
                                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                                      <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-semibold">{course.credits} CR</span>
                                      {course.type === 'project'   && <span className="bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs px-2.5 py-1 rounded-md font-semibold">Project</span>}
                                      {course.type === 'mandatory' && <span className="bg-red-500/10 text-red-500 text-xs px-2.5 py-1 rounded-md font-semibold">Mandatory</span>}
                                      {course.type === 'exam'      && <span className="bg-amber-500/10 text-amber-600 text-xs px-2.5 py-1 rounded-md font-semibold">Comp. Exam</span>}
                                      {course.stream && (
                                        <span className={`text-xs px-2.5 py-1 rounded-md font-semibold bg-slate-100 dark:bg-slate-700 ${STREAM_META[course.stream]?.colour}`}>
                                          {course.stream}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <select value={grades[course.id] || '-'}
                                      onChange={e => handleGradeChange(course.id, e.target.value)}
                                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold p-2.5 pr-8 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none cursor-pointer appearance-none text-foreground transition-all">
                                      {GRADES.map(g => (
                                        <option key={g} value={g}>{g === '-' ? 'Select Grade' : `Grade: ${g}`}</option>
                                      ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">
                                      <ChevronDown className="w-4 h-4" />
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>)}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Non-Graded Credits (only relevant in grades mode) */}
            <div className="glass overflow-hidden">
              <div className="w-full flex items-center p-5 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200/50 dark:border-slate-700/50">
                <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-accent"><Award className="w-5 h-5" /></div>
                  Non-Graded Credits
                </h2>
              </div>
              <div className="p-5 space-y-5 bg-white/30 dark:bg-slate-900/30">
                {[
                  { key: 'appr',    label: 'Apprenticeship Credits',            sub: '4 or 12 CR. Counts toward BS Degree, no CGPA effect.', options: [0, 4, 12] },
                  { key: 'nptelBsc', label: 'NPTEL Credits (BSc – Tech Bucket)', sub: 'Max 4 CR. Counts toward BSc earned credits, no CGPA effect.', options: [0, 4] },
                  { key: 'nptelBs', label: 'NPTEL Credits (BS – HS/MG Stream)', sub: 'Max 4 CR. Satisfies BS-level HS/MG requirement, counts toward HM earned credits, no CGPA effect.', options: [0, 4] },
                ].map(({ key, label, sub, options }) => (
                  <div key={key} className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-slate-200/30 dark:border-slate-700/30 pb-5 last:border-0 last:pb-0">
                    <div>
                      <div className="font-bold text-foreground text-sm">{label}</div>
                      <div className="text-xs text-foreground/55 font-medium mt-1">{sub}</div>
                    </div>
                    <select value={extraCredits[key]}
                      onChange={e => setExtraCredits(prev => ({ ...prev, [key]: parseInt(e.target.value) }))}
                      className="w-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold p-2.5 focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer text-foreground text-sm">
                      {options.map(c => <option key={c} value={c}>{c} CR</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button onClick={clearAll}
                className="bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200">
                Reset All
              </button>
            </div>
          </div>
        </div>

        {/* ── Sticky Sidebar ── */}
        <div className="w-full lg:w-96">
          <div className="sticky top-28 glass overflow-hidden flex flex-col">
            <div className="p-5 flex items-center gap-3 border-b border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="p-2 bg-primary/10 rounded-lg"><Calculator className="w-6 h-6 text-primary" /></div>
              <h2 className="text-xl font-display font-bold text-foreground">Results</h2>
            </div>

            <div className="p-6 space-y-8 overflow-y-auto max-h-[80vh]">

              {/* Total CGPA hero */}
              <div className="text-center relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
                <p className="text-xs font-bold uppercase text-foreground/50 tracking-widest mb-2 relative z-10">Total CGPA</p>
                <div className="text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400 relative z-10">
                  {calc.totalCGPA}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 relative z-10">
                  <span className="text-sm font-medium text-foreground/70">Earned Credits:</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md font-bold text-sm">{calc.earnedCR}</span>
                </div>
              </div>

              {/* Per-level CGPA breakdown */}
              <div>
                <h3 className="text-xs font-bold uppercase text-foreground/50 tracking-widest mb-3">CGPA Breakdown</h3>
                <div className="rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
                  {cgpaRows.map(({ label, value, colour }, i) => (
                    <div key={label}
                      className={`flex justify-between items-center px-4 py-3 ${i < cgpaRows.length - 1 ? 'border-b border-slate-200/40 dark:border-slate-700/40' : ''} ${i % 2 === 0 ? 'bg-white/40 dark:bg-slate-800/40' : 'bg-white/20 dark:bg-slate-900/20'}`}>
                      <span className="text-xs font-semibold text-foreground/70">{label}</span>
                      <span className={`text-sm font-bold tabular-nums ${value === '—' ? 'text-foreground/25' : colour}`}>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-4 py-3 bg-purple-500/5 border-t border-purple-500/20">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Project CGPA</span>
                    <span className={`text-sm font-bold tabular-nums ${calc.projectCGPA === '—' ? 'text-foreground/25' : 'text-purple-600 dark:text-purple-400'}`}>{calc.projectCGPA}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2.5 bg-slate-100/50 dark:bg-slate-800/50 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span className="text-xs font-semibold text-foreground/50">Diploma Cumulative CGPA</span>
                    <span className={`text-xs font-bold tabular-nums ${calc.diplomaCumulativeCGPA === '—' ? 'text-foreground/25' : 'text-foreground/70'}`}>{calc.diplomaCumulativeCGPA}</span>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
                <h3 className="font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" /> Degree Progress
                </h3>
                <div className="space-y-3.5 text-xs font-medium">
                  {progressBars.map(({ label, target, earned }) => (
                    <div key={label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-foreground/70">{label} ({target} CR)</span>
                        <span className="text-foreground font-bold">{earned}/{target}</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${Math.min(100, (earned / target) * 100)}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-bold text-foreground">Total (142 CR)</span>
                      <span className="text-foreground font-bold">{calc.earnedCR}/142</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-sky-400 h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.min(100, (calc.earnedCR / 142) * 100)}%` }} />
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
