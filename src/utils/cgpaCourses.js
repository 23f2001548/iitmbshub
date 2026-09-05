export const GRADE_POINTS = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 4,
  U: 0,
  W: 0,
  WA: 0,
  WQ: 0
};

export const COURSE_LEVELS = {
  FOUNDATION: 'Foundation',
  DIPLOMA_DS: 'Diploma in Data Science',
  DIPLOMA_PROG: 'Diploma in Programming',
  DEGREE_BSC: 'BSc Degree',
  DEGREE_BS: 'BS Degree',
};

export const COURSES = {
  [COURSE_LEVELS.FOUNDATION]: [
    { id: 'math1', name: 'Mathematics for Data Science 1', credits: 4 },
    { id: 'stat1', name: 'Statistics for Data Science 1', credits: 4 },
    { id: 'eng1', name: 'English 1', credits: 4 },
    { id: 'ct', name: 'Computational Thinking', credits: 4 },
    { id: 'math2', name: 'Mathematics for Data Science 2', credits: 4 },
    { id: 'stat2', name: 'Statistics for Data Science 2', credits: 4 },
    { id: 'eng2', name: 'English 2', credits: 4 },
    { id: 'python', name: 'Intro to Python Programming', credits: 4 },
  ],
  [COURSE_LEVELS.DIPLOMA_DS]: [
    // Mandatory Theory
    { id: 'mlf', name: 'Machine Learning Foundations', credits: 4, type: 'theory' },
    { id: 'mlt', name: 'Machine Learning Techniques', credits: 4, type: 'theory' },
    { id: 'mlp', name: 'Machine Learning Practice', credits: 4, type: 'theory' },
    { id: 'bdm', name: 'Business Data Management', credits: 4, type: 'theory' },
    { id: 'tds', name: 'Tools in Data Science', credits: 3, type: 'theory' },
    // Mandatory Project
    { id: 'mlp_proj', name: 'MLP Project', credits: 2, type: 'project' },
    
    // Option 1
    { id: 'ba', name: 'Business Analytics (Option 1)', credits: 4, type: 'theory', group: 'opt1' },
    { id: 'bdm_proj', name: 'BDM Project (Option 1)', credits: 2, type: 'project', group: 'opt1' },
    
    // Option 2
    { id: 'dlgenai', name: 'Intro to Deep Learning and Generative AI (Option 2)', credits: 4, type: 'theory', group: 'opt2' },
    { id: 'dlgenai_proj', name: 'Deep Learning and GenAI Project (Option 2)', credits: 2, type: 'project', group: 'opt2' },
  ],
  [COURSE_LEVELS.DIPLOMA_PROG]: [
    // Theory
    { id: 'pdsa', name: 'Programming, Data Structures & Algorithms', credits: 4, type: 'theory' },
    { id: 'dbms', name: 'Database Management Systems', credits: 4, type: 'theory' },
    { id: 'mad1', name: 'Application Development 1', credits: 4, type: 'theory' },
    { id: 'java', name: 'Programming Concepts using Java', credits: 4, type: 'theory' },
    { id: 'syscmd', name: 'System Commands', credits: 3, type: 'theory' },
    { id: 'mad2', name: 'Application Development 2', credits: 4, type: 'theory' },
    // Projects
    { id: 'mad1_proj', name: 'App Dev 1 Project', credits: 2, type: 'project' },
    { id: 'mad2_proj', name: 'App Dev 2 Project', credits: 2, type: 'project' },
  ],
  [COURSE_LEVELS.DEGREE_BSC]: [
    // 20 credits mandatory
    { id: 'BSGN3001', name: 'Strategies for Professional Growth', credits: 4, type: 'mandatory' },
    { id: 'BSCS3001', name: 'Software Engineering (Core_BP)', credits: 4, type: 'mandatory' },
    { id: 'BSCS3002', name: 'Software Testing (Core_BP)', credits: 4, type: 'mandatory' },
    { id: 'BSCS3003', name: 'AI: Search Methods for Problem Solving (Core_BD)', credits: 4, type: 'mandatory' },
    { id: 'BSCS3004', name: 'Deep Learning (Core_BD)', credits: 4, type: 'mandatory' },
    
    // Electives
    { id: 'BSBT4001', name: 'Algorithmic Thinking in Bioinformatics', credits: 4, type: 'elective' },
    { id: 'BSBT4002', name: 'Big Data and Biological Networks', credits: 4, type: 'elective' },
    { id: 'BSCS4001', name: 'Data Visualization Design', credits: 4, type: 'elective' },
    { id: 'BSEE4001', name: 'Speech Technology', credits: 4, type: 'elective' },
    { id: 'BSMS4002', name: 'Design Thinking for Data-Driven App Dev', credits: 4, type: 'elective' },
    { id: 'BSMS4001', name: 'Industry 4.0', credits: 4, type: 'elective' },
    { id: 'BSMS4003', name: 'Financial Forensics', credits: 4, type: 'elective' },
    { id: 'BSMS3002', name: 'Market Research', credits: 4, type: 'elective' },
    { id: 'BSDA5001', name: 'Introduction to Big Data', credits: 4, type: 'elective' },
    { id: 'BSCS4003', name: 'Privacy & Security in Online Social Media', credits: 4, type: 'elective' },
    { id: 'BSMA2001', name: 'Mathematical Thinking', credits: 4, type: 'elective' },
    { id: 'BSMA3012', name: 'Linear Statistical Models', credits: 4, type: 'elective' },
    { id: 'BSMA3014', name: 'Statistical Computing', credits: 4, type: 'elective' },
  ],
  [COURSE_LEVELS.DEGREE_BS]: [
    // Electives
    { id: 'BSCS4021', name: 'Advanced Algorithms', credits: 4, type: 'elective' },
    { id: 'BSCS3031', name: 'Computer Systems Design', credits: 4, type: 'elective' },
    { id: 'BSCS4022', name: 'Operating Systems', credits: 4, type: 'elective' },
    { id: 'BSDA5007', name: 'Reinforcement Learning', credits: 4, type: 'elective' },
    { id: 'BSCS3005', name: 'Programming in C', credits: 4, type: 'elective' },
    { id: 'BSCS4024', name: 'Computer Networks', credits: 4, type: 'elective' },
    { id: 'BSDA5005', name: 'Introduction to Natural Language Processing (i-NLP)', credits: 4, type: 'elective' },
    { id: 'BSDA5006', name: 'Deep Learning for Computer Vision', credits: 4, type: 'elective' },
    { id: 'BSDA5004', name: 'Large Language Models', credits: 4, type: 'elective' },
    { id: 'BSMS4023', name: 'Game Theory and Strategy', credits: 4, type: 'elective' },
    { id: 'BSMS3033', name: 'Managerial Economics', credits: 4, type: 'elective' },
    { id: 'BSMS3034', name: 'Corporate Finance', credits: 4, type: 'elective' },
    { id: 'BSDA5014', name: 'ML Ops', credits: 4, type: 'elective' },
    { id: 'BSDA5002', name: 'Mathematical Foundations of Generative AI', credits: 4, type: 'elective' },
    { id: 'BSDA5003', name: 'Algorithms for Data Science', credits: 4, type: 'elective' },
    { id: 'BSDA5013', name: 'Deep Learning Practice', credits: 4, type: 'elective' },
    { id: 'BSDA4001', name: 'Data Science and AI Lab', credits: 4, type: 'elective' },
    { id: 'BSCS4010', name: 'Application Development Lab', credits: 4, type: 'elective' },
    // Comprehensive Exams
    { id: 'BSDA4002', name: 'Comp. Exam - Data Science & AI', credits: 2, type: 'exam' },
    { id: 'BSCS4009', name: 'Comp. Exam - Computer Science & IT', credits: 2, type: 'exam' },
  ]
};

// Helper to calculate CGPA
export const calculateCGPA = (gradesData, extraCredits = { nptel: 0, appr: 0 }, courseList = COURSES) => {
  let totalProjectCredits = 0;
  let earnedProjectPoints = 0;

  // Track credits by level for rules engine
  const stats = {
    foundation: { credits: 0, points: 0, courses: 0 },
    diplomaDs: { credits: 0, points: 0, projects: 0, projCredits: 0, projPoints: 0 },
    diplomaProg: { credits: 0, points: 0, projects: 0, projCredits: 0, projPoints: 0 },
    degreeBsc: { credits: 0, points: 0 },
    degreeBs: { credits: 0, points: 0 },
    total: { credits: 0, gradedCredits: 0, points: 0 }
  };

  const processCourse = (course, grade, levelKey) => {
    if (!grade || grade === 'U' || grade === 'W' || grade === 'WA' || grade === 'WQ' || grade === '-') return;
    
    const gp = GRADE_POINTS[grade] || 0;
    const pts = gp * course.credits;

    if (levelKey === 'foundation') stats[levelKey].courses++;

    if (course.type === 'project') {
      stats[levelKey].projects++;
      stats[levelKey].projCredits += course.credits;
      stats[levelKey].projPoints += pts;
      totalProjectCredits += course.credits;
      earnedProjectPoints += pts;
      // Projects still give degree credits, just not graded CGPA points
      stats[levelKey].credits += course.credits;
      stats.total.credits += course.credits;
    } else {
      // Only theory/mandatory/elective courses count towards regular CGPA
      stats[levelKey].credits += course.credits;
      stats[levelKey].points += pts;
      stats.total.credits += course.credits;
      stats.total.gradedCredits += course.credits;
      stats.total.points += pts;
    }
  };

  // Process Foundation
  courseList[COURSE_LEVELS.FOUNDATION].forEach(c => {
    processCourse(c, gradesData[c.id], 'foundation');
  });

  // Process Diploma DS
  courseList[COURSE_LEVELS.DIPLOMA_DS].forEach(c => {
    processCourse(c, gradesData[c.id], 'diplomaDs');
  });

  // Process Diploma Prog
  courseList[COURSE_LEVELS.DIPLOMA_PROG].forEach(c => {
    processCourse(c, gradesData[c.id], 'diplomaProg');
  });

  // Process Degree BSc
  courseList[COURSE_LEVELS.DEGREE_BSC].forEach(c => {
    processCourse(c, gradesData[c.id], 'degreeBsc');
  });

  // Process Degree BS
  courseList[COURSE_LEVELS.DEGREE_BS].forEach(c => {
    processCourse(c, gradesData[c.id], 'degreeBs');
  });

  // Add non-graded extra credits (Apprenticeship & NPTEL)
  const appr = parseInt(extraCredits.appr) || 0;
  const nptelBsc = parseInt(extraCredits.nptelBsc) || 0;
  const nptelBs = parseInt(extraCredits.nptelBs) || 0;
  
  stats.degreeBsc.credits += nptelBsc;
  stats.degreeBs.credits += appr + nptelBs;
  stats.total.credits += appr + nptelBsc + nptelBs;

  const overallCGPA = stats.total.gradedCredits > 0 ? (stats.total.points / stats.total.gradedCredits).toFixed(2) : 0;
  const projectCGPA = totalProjectCredits > 0 ? (earnedProjectPoints / totalProjectCredits).toFixed(2) : 0;
  
  // Diploma CGPA uses Foundation + Diploma Graded Credits
  const dipCumulativeCredits = stats.foundation.credits + stats.diplomaDs.credits + stats.diplomaProg.credits - (stats.diplomaDs.projCredits + stats.diplomaProg.projCredits);
  const dipCumulativePoints = stats.foundation.points + stats.diplomaDs.points + stats.diplomaProg.points - (stats.diplomaDs.projPoints + stats.diplomaProg.projPoints);
  const diplomaCumulativeCGPA = dipCumulativeCredits > 0 ? (dipCumulativePoints / dipCumulativeCredits).toFixed(2) : 0;

  return {
    overallCGPA,
    projectCGPA,
    diplomaCumulativeCGPA,
    stats
  };
};
