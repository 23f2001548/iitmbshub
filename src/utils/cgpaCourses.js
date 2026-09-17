// Official grade points per IITM BS grading document
export const GRADE_POINTS = {
  S: 10, A: 9, B: 8, C: 7, D: 6, E: 4,
  U: 0, P: 0, F: 0, W: 0, I: 0,
};

// P (Pass/Fail) — earns credits, excluded from CGPA numerator AND denominator
const PASS_FAIL_GRADES = new Set(['P']);
// Failed / incomplete — NO credits earned, excluded from CGPA entirely
const FAILED_GRADES = new Set(['U', 'F', 'W', 'I']);

export const COURSE_LEVELS = {
  FOUNDATION: 'Foundation',
  DIPLOMA_DS: 'Diploma in Data Science',
  DIPLOMA_PROG: 'Diploma in Programming',
  DEGREE_BSC: 'BSc Degree',
  DEGREE_BS: 'BS Degree',
};

export const COURSES = {
  // ── FOUNDATION (32 credits) ──────────────────────────────────────────────
  [COURSE_LEVELS.FOUNDATION]: [
    { id: 'math1',  name: 'Mathematics for Data Science 1', credits: 4 },
    { id: 'stat1',  name: 'Statistics for Data Science 1',  credits: 4 },
    { id: 'eng1',   name: 'English 1',                      credits: 4 },
    { id: 'ct',     name: 'Computational Thinking',          credits: 4 },
    { id: 'math2',  name: 'Mathematics for Data Science 2', credits: 4 },
    { id: 'stat2',  name: 'Statistics for Data Science 2',  credits: 4 },
    { id: 'eng2',   name: 'English 2',                      credits: 4 },
    { id: 'python', name: 'Intro to Python Programming',     credits: 4 },
  ],

  // ── DIPLOMA IN DATA SCIENCE (27 credits) ─────────────────────────────────
  // Mandatory: MLF(4) + MLT(4) + MLP(4) + BDM(4) + TDS(3) + MLP_Proj(2) = 21 CR
  // + ONE pathway: Opt1 [BA(4)+BDM_Proj(2)] OR Opt2 [DL-GenAI(4)+DL-GenAI_Proj(2)] = 6 CR
  [COURSE_LEVELS.DIPLOMA_DS]: [
    // Mandatory theory
    { id: 'mlf',         name: 'Machine Learning Foundations',      credits: 4, type: 'theory' },
    { id: 'mlt',         name: 'Machine Learning Techniques',       credits: 4, type: 'theory' },
    { id: 'mlp',         name: 'Machine Learning Practice',         credits: 4, type: 'theory' },
    { id: 'bdm',         name: 'Business Data Management',          credits: 4, type: 'theory' },
    { id: 'tds',         name: 'Tools in Data Science',             credits: 3, type: 'theory' },
    // Mandatory project
    { id: 'mlp_proj',    name: 'MLP Project',                       credits: 2, type: 'project' },
    // Pathway Option 1 — Business Analytics
    { id: 'ba',          name: 'Business Analytics',                credits: 4, type: 'theory',  group: 'opt1' },
    { id: 'bdm_proj',    name: 'BDM Project',                       credits: 2, type: 'project', group: 'opt1' },
    // Pathway Option 2 — GenAI
    { id: 'dlgenai',     name: 'Intro to Deep Learning & GenAI',   credits: 4, type: 'theory',  group: 'opt2' },
    { id: 'dlgenai_proj', name: 'Deep Learning & GenAI Project',   credits: 2, type: 'project', group: 'opt2' },
  ],

  // ── DIPLOMA IN PROGRAMMING (27 credits) ──────────────────────────────────
  [COURSE_LEVELS.DIPLOMA_PROG]: [
    { id: 'pdsa',     name: 'Programming, Data Structures & Algorithms', credits: 4, type: 'theory'  },
    { id: 'dbms',     name: 'Database Management Systems',               credits: 4, type: 'theory'  },
    { id: 'mad1',     name: 'Application Development 1',                 credits: 4, type: 'theory'  },
    { id: 'java',     name: 'Programming Concepts using Java',           credits: 4, type: 'theory'  },
    { id: 'syscmd',   name: 'System Commands',                           credits: 3, type: 'theory'  },
    { id: 'mad2',     name: 'Application Development 2',                 credits: 4, type: 'theory'  },
    { id: 'mad1_proj', name: 'App Dev 1 Project',                        credits: 2, type: 'project' },
    { id: 'mad2_proj', name: 'App Dev 2 Project',                        credits: 2, type: 'project' },
  ],

  // ── BSc DEGREE (28 credits) ───────────────────────────────────────────────
  // stream tag maps to grade-card columns: BP | BD | HM | SE
  [COURSE_LEVELS.DEGREE_BSC]: [
    // ── Mandatory core (20 CR) ──
    { id: 'BSGN3001', name: 'Strategies for Professional Growth',       credits: 4, type: 'mandatory', stream: 'HM' },
    { id: 'BSCS3001', name: 'Software Engineering',                     credits: 4, type: 'mandatory', stream: 'BP' },
    { id: 'BSCS3002', name: 'Software Testing',                         credits: 4, type: 'mandatory', stream: 'BP' },
    { id: 'BSCS3003', name: 'AI: Search Methods for Problem Solving',   credits: 4, type: 'mandatory', stream: 'BD' },
    { id: 'BSCS3004', name: 'Deep Learning',                            credits: 4, type: 'mandatory', stream: 'BD' },
    // ── Electives (choose remaining 8 CR from below) ──
    // BD stream
    { id: 'BSBT4001', name: 'Algorithmic Thinking in Bioinformatics',   credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSBT4002', name: 'Big Data and Biological Networks',         credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSCS4001', name: 'Data Visualization Design',                credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSEE4001', name: 'Speech Technology',                        credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5001', name: 'Introduction to Big Data',                 credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSCS4003', name: 'Privacy & Security in Online Social Media', credits: 4, type: 'elective', stream: 'BD' },
    // HM stream
    { id: 'BSMS4002', name: 'Design Thinking for Data-Driven App Dev',  credits: 4, type: 'elective', stream: 'HM' },
    { id: 'BSMS4001', name: 'Industry 4.0',                             credits: 4, type: 'elective', stream: 'HM' },
    { id: 'BSMS4003', name: 'Financial Forensics',                      credits: 4, type: 'elective', stream: 'HM' },
    { id: 'BSMS3002', name: 'Market Research',                          credits: 4, type: 'elective', stream: 'HM' },
    // SE stream
    { id: 'BSMA2001', name: 'Mathematical Thinking',                    credits: 4, type: 'elective', stream: 'SE' },
    { id: 'BSMA3012', name: 'Linear Statistical Models',                credits: 4, type: 'elective', stream: 'SE' },
    { id: 'BSMA3014', name: 'Statistical Computing',                    credits: 4, type: 'elective', stream: 'SE' },
  ],

  // ── BS DEGREE (28 credits) ────────────────────────────────────────────────
  // Must include: ≥2 L4+ BP courses + ≥2 L4+ BD courses + 4 CR from HM/NPTEL
  [COURSE_LEVELS.DEGREE_BS]: [
    // ── BP stream ──
    { id: 'BSCS3005', name: 'Programming in C',                        credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS3021', name: 'Theory of Computation',                   credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSMA3001', name: 'Discrete Mathematics',                    credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS3031', name: 'Computer Systems Design',                 credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4021', name: 'Advanced Algorithms',                     credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4022', name: 'Operating Systems',                       credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4024', name: 'Computer Networks',                       credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4032', name: 'Compiler Design',                         credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSDA5014', name: 'ML Ops',                                  credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4010', name: 'Application Development Lab',             credits: 4, type: 'elective', stream: 'BP' },
    { id: 'BSCS4009', name: 'Comp. Exam – Computer Science & IT',     credits: 2, type: 'exam',     stream: 'BP' },
    // ── BD stream ──
    { id: 'BSDA5007', name: 'Reinforcement Learning',                  credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5005', name: 'Intro to Natural Language Processing',    credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5006', name: 'Deep Learning for Computer Vision',       credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5004', name: 'Large Language Models',                   credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5002', name: 'Mathematical Foundations of GenAI',       credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5003', name: 'Algorithms for Data Science',             credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA5013', name: 'Deep Learning Practice',                  credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA4001', name: 'Data Science and AI Lab',                 credits: 4, type: 'elective', stream: 'BD' },
    { id: 'BSDA4002', name: 'Comp. Exam – Data Science & AI',         credits: 2, type: 'exam',     stream: 'BD' },
    // ── HM stream ──
    { id: 'BSMS4023', name: 'Game Theory and Strategy',                credits: 4, type: 'elective', stream: 'HM' },
    { id: 'BSMS3033', name: 'Managerial Economics',                    credits: 4, type: 'elective', stream: 'HM' },
    { id: 'BSMS3034', name: 'Corporate Finance',                       credits: 4, type: 'elective', stream: 'HM' },
  ],
};

// ── CGPA Calculation ─────────────────────────────────────────────────────────
export const calculateCGPA = (gradesData, extraCredits = { nptelBsc: 0, nptelBs: 0, appr: 0 }, courseList = COURSES) => {

  const stats = {
    foundation:  { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0, courses: 0 },
    diplomaDs:   { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0, projectCredits: 0, projectPoints: 0 },
    diplomaProg: { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0, projectCredits: 0, projectPoints: 0 },
    degreeBsc:   { earnedCredits: 0 },
    degreeBs:    { earnedCredits: 0 },
    streams: {
      BP: { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0 },
      BD: { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0 },
      HM: { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0 },
      SE: { gradedCredits: 0, gradedPoints: 0, earnedCredits: 0 },
    },
    projects:    { credits: 0, points: 0 },
    total:       { earnedCredits: 0, gradedCredits: 0, gradedPoints: 0 },
  };

  // ── Foundation processing ──────────────────────────────────────────────────
  const processFoundation = (course, grade) => {
    if (!grade || FAILED_GRADES.has(grade)) return;
    stats.foundation.earnedCredits += course.credits;
    stats.total.earnedCredits      += course.credits;
    stats.foundation.courses++;                          // count passed foundation courses
    if (PASS_FAIL_GRADES.has(grade)) return;            // P → credits only, no CGPA
    const gp  = GRADE_POINTS[grade];
    const pts = gp * course.credits;
    stats.foundation.gradedCredits += course.credits;
    stats.foundation.gradedPoints  += pts;
    stats.total.gradedCredits      += course.credits;
    stats.total.gradedPoints       += pts;
  };

  // ── Diploma processing ─────────────────────────────────────────────────────
  const processDiploma = (course, grade, levelKey) => {
    if (!grade || FAILED_GRADES.has(grade)) return;

    if (course.type === 'project') {
      // Projects earn credits but go to separate project CGPA, not theory CGPA
      stats[levelKey].earnedCredits += course.credits;
      stats.total.earnedCredits     += course.credits;
      if (!PASS_FAIL_GRADES.has(grade)) {
        const gp  = GRADE_POINTS[grade];
        const pts = gp * course.credits;
        stats[levelKey].projectCredits += course.credits;
        stats[levelKey].projectPoints  += pts;
        stats.projects.credits         += course.credits;
        stats.projects.points          += pts;

        // Blend projects into the diploma's graded total and the overall graded total
        stats[levelKey].gradedCredits += course.credits;
        stats[levelKey].gradedPoints  += pts;
        stats.total.gradedCredits     += course.credits;
        stats.total.gradedPoints      += pts;
      }
      return;
    }

    // Theory course
    stats[levelKey].earnedCredits += course.credits;
    stats.total.earnedCredits     += course.credits;
    if (PASS_FAIL_GRADES.has(grade)) return;           // P → credits only, no CGPA
    const gp  = GRADE_POINTS[grade];
    const pts = gp * course.credits;
    stats[levelKey].gradedCredits += course.credits;
    stats[levelKey].gradedPoints  += pts;
    stats.total.gradedCredits     += course.credits;
    stats.total.gradedPoints      += pts;
  };

  // ── Degree processing (stream-aware) ──────────────────────────────────────
  const processDegree = (course, grade, levelKey) => {
    if (!grade || FAILED_GRADES.has(grade)) return;
    const stream = course.stream;

    stats[levelKey].earnedCredits += course.credits;
    stats.total.earnedCredits     += course.credits;
    if (stream && stats.streams[stream]) {
      stats.streams[stream].earnedCredits += course.credits;
    }
    if (PASS_FAIL_GRADES.has(grade)) return;           // P → credits only, no CGPA
    const gp  = GRADE_POINTS[grade];
    const pts = gp * course.credits;
    stats.total.gradedCredits += course.credits;
    stats.total.gradedPoints  += pts;
    if (stream && stats.streams[stream]) {
      stats.streams[stream].gradedCredits += course.credits;
      stats.streams[stream].gradedPoints  += pts;
    }
  };

  // ── Run through all courses ────────────────────────────────────────────────
  courseList[COURSE_LEVELS.FOUNDATION].forEach(c =>
    processFoundation(c, gradesData[c.id])
  );
  courseList[COURSE_LEVELS.DIPLOMA_DS].forEach(c =>
    processDiploma(c, gradesData[c.id], 'diplomaDs')
  );
  courseList[COURSE_LEVELS.DIPLOMA_PROG].forEach(c =>
    processDiploma(c, gradesData[c.id], 'diplomaProg')
  );
  courseList[COURSE_LEVELS.DEGREE_BSC].forEach(c =>
    processDegree(c, gradesData[c.id], 'degreeBsc')
  );
  courseList[COURSE_LEVELS.DEGREE_BS].forEach(c =>
    processDegree(c, gradesData[c.id], 'degreeBs')
  );

  // ── Non-graded extra credits ───────────────────────────────────────────────
  const appr     = parseInt(extraCredits.appr)     || 0;
  const nptelBsc = parseInt(extraCredits.nptelBsc) || 0;
  const nptelBs  = parseInt(extraCredits.nptelBs)  || 0;

  // NPTEL BSc — technical bucket, counts toward BSc earned credits only
  stats.degreeBsc.earnedCredits  += nptelBsc;
  stats.total.earnedCredits      += nptelBsc;

  // NPTEL BS — satisfies HS/MG stream requirement at BS level
  // Counts toward HM earned credits (but NOT HM CGPA — no graded credits)
  stats.degreeBs.earnedCredits         += nptelBs;
  stats.streams.HM.earnedCredits       += nptelBs;
  stats.total.earnedCredits            += nptelBs;

  // Apprenticeship — counts toward BS level earned credits only
  stats.degreeBs.earnedCredits += appr;
  stats.total.earnedCredits    += appr;

  // ── Compute CGPAs ─────────────────────────────────────────────────────────
  const cgpa = (points, credits) =>
    credits > 0 ? (points / credits).toFixed(2) : '—';

  const foundationCGPA   = cgpa(stats.foundation.gradedPoints,   stats.foundation.gradedCredits);
  const diplomaDsCGPA    = cgpa(stats.diplomaDs.gradedPoints,    stats.diplomaDs.gradedCredits);
  const diplomaProgCGPA  = cgpa(stats.diplomaProg.gradedPoints,  stats.diplomaProg.gradedCredits);
  const bpCGPA           = cgpa(stats.streams.BP.gradedPoints,   stats.streams.BP.gradedCredits);
  const bdCGPA           = cgpa(stats.streams.BD.gradedPoints,   stats.streams.BD.gradedCredits);
  const hmCGPA           = cgpa(stats.streams.HM.gradedPoints,   stats.streams.HM.gradedCredits);
  const seCGPA           = cgpa(stats.streams.SE.gradedPoints,   stats.streams.SE.gradedCredits);
  const projectCGPA      = cgpa(stats.projects.points,           stats.projects.credits);
  const totalCGPA        = cgpa(stats.total.gradedPoints,        stats.total.gradedCredits);

  // Diploma cumulative CGPA = Foundation + Diploma DS + Diploma Prog theory courses
  // Used for Diploma→Degree eligibility check (must be ≥ 6.0)
  const dipPoints  = stats.foundation.gradedPoints  + stats.diplomaDs.gradedPoints  + stats.diplomaProg.gradedPoints;
  const dipCredits = stats.foundation.gradedCredits + stats.diplomaDs.gradedCredits + stats.diplomaProg.gradedCredits;
  const diplomaCumulativeCGPA = cgpa(dipPoints, dipCredits);

  return {
    foundationCGPA,
    diplomaDsCGPA,
    diplomaProgCGPA,
    bpCGPA,
    bdCGPA,
    hmCGPA,
    seCGPA,
    projectCGPA,
    totalCGPA,
    diplomaCumulativeCGPA,   // kept for eligibility warnings
    stats,
  };
};
