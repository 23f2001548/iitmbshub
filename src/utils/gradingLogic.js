export const getLetterGrade = (score) => {
  if (score >= 90) return 'S';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  if (score >= 40) return 'E';
  return 'U';
};

// Component definitions
const GAA = { id: 'gaa', label: 'Graded Assignment Average (GAA)', max: 100 };
const GA = { id: 'ga', label: 'Graded Assignment (GA)', max: 100 };
const QZ1 = { id: 'qz1', label: 'Quiz 1 Score', max: 100 };
const QZ2 = { id: 'qz2', label: 'Quiz 2 Score', max: 100 };
const QZ3 = { id: 'qz3', label: 'Quiz 3 Score', max: 100 };
const F = { id: 'f', label: 'Final Exam Score', max: 100 };
const OPPE1 = { id: 'oppe1', label: 'OPPE 1 Score', max: 100 };
const OPPE2 = { id: 'oppe2', label: 'OPPE 2 Score', max: 100 };
const OPPE = { id: 'oppe', label: 'OPPE Score', max: 100 }; 
const KA = { id: 'ka', label: 'Kaggle Assignments (KA)', max: 100 }; 
const BONUS = { id: 'bonus', label: 'Bonus Marks', max: 5 };
const GP1 = { id: 'gp1', label: 'Group Project 1', max: 100 };
const GP2 = { id: 'gp2', label: 'Group Project 2', max: 100 };
const GP3 = { id: 'gp3', label: 'Group Project 3', max: 100 };
const PP = { id: 'pp', label: 'Project Presentation', max: 100 };
const CP = { id: 'cp', label: 'Class Participation', max: 100 };
const NPPE = { id: 'nppe', label: 'NPPE Score', max: 100 };
const NPPE1 = { id: 'nppe1', label: 'NPPE 1', max: 100 };
const NPPE2 = { id: 'nppe2', label: 'NPPE 2', max: 100 };
const NPPE3 = { id: 'nppe3', label: 'NPPE 3', max: 100 };
const QZ1_20 = { id: 'qz1_20', label: 'Quiz 1 Score', max: 20 };
const QZ2_20 = { id: 'qz2_20', label: 'Quiz 2 Score', max: 20 };
const A_20 = { id: 'a_20', label: 'Assignments', max: 20 };
const F_40 = { id: 'f_40', label: 'Final Exam Score', max: 40 };
const ROE = { id: 'roe', label: 'Remote Online Exam', max: 100 };
const P1 = { id: 'p1', label: 'Project 1', max: 100 };
const P2 = { id: 'p2', label: 'Project 2', max: 100 };
const GAA2 = { id: 'gaa2', label: 'GAA 2', max: 100 };
const GAA3 = { id: 'gaa3', label: 'GAA 3', max: 100 };
const GLA = { id: 'gla', label: 'Graded Lab Assignments', max: 100 };
const BPTA = { id: 'bpta', label: 'Biweekly Prog. Test Avg (BPTA)', max: 100 };
const VIVA = { id: 'viva', label: 'Viva Score', max: 100 };
const P = { id: 'p', label: 'Project Score', max: 100 };
const GP = { id: 'gp', label: 'Group Project Score', max: 100 };
const GRPA = { id: 'grpa', label: 'Programming Assignments Average', max: 100 };
const CVA = { id: 'cva', label: 'Circuit Verse Assignment', max: 100 };
const PAA = { id: 'paa', label: 'Programming Assignments Average (PAA)', max: 100 };

export const coursesConfig = {
  Foundation: [
    {
      id: 'math1',
      name: 'Mathematics for Data Science 1',
      components: [QZ1, QZ2, F],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0 } = vals;
        return Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'math2',
      name: 'Mathematics for Data Science 2',
      components: [QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2) + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'stat1',
      name: 'Statistics for Data Science 1',
      components: [QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2) + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'stat2',
      name: 'Statistics for Data Science 2',
      components: [QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2) + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'eng1',
      name: 'English 1',
      components: [QZ1, QZ2, F],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0 } = vals;
        return Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'eng2',
      name: 'English 2',
      components: [QZ1, QZ2, F],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0 } = vals;
        return Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'ct',
      name: 'Computational Thinking',
      components: [QZ1, QZ2, F],
      calculate: (vals) => {
        const { qz1 = 0, qz2 = 0, f = 0 } = vals;
        return Math.max(0.6 * f + 0.3 * Math.max(qz1, qz2), 0.45 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'python',
      name: 'Intro to Python Programming',
      components: [QZ1, OPPE1, OPPE2, F],
      calculate: (vals) => {
        const { qz1 = 0, oppe1 = 0, oppe2 = 0, f = 0 } = vals;
        return 0.15 * qz1 + 0.4 * f + 0.25 * Math.max(oppe1, oppe2) + 0.2 * Math.min(oppe1, oppe2);
      }
    }
  ],
  Diploma: [
    {
      id: 'mlf',
      name: 'Machine Learning Foundations',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'mlt',
      name: 'Machine Learning Techniques',
      components: [GAA, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.05 * gaa + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2) + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'mlp',
      name: 'Machine Learning Practice',
      components: [GAA, OPPE1, OPPE2, KA, F],
      calculate: (vals) => {
        const { gaa = 0, oppe1 = 0, oppe2 = 0, ka = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.3 * f + 0.2 * oppe1 + 0.2 * oppe2 + 0.2 * ka; 
      }
    },
    {
      id: 'bdm',
      name: 'Business Data Management',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'ba',
      name: 'Business Analytics',
      components: [QZ1_20, QZ2_20, A_20, F_40],
      calculate: (vals) => {
        const { qz1_20 = 0, qz2_20 = 0, a_20 = 0, f_40 = 0 } = vals;
        const qz = 2 * (0.7 * Math.max(qz1_20, qz2_20) + 0.3 * Math.min(qz1_20, qz2_20));
        return Math.min(qz + a_20 + f_40, 100);
      }
    },
    {
      id: 'tds',
      name: 'Tools in Data Science',
      components: [GAA, ROE, P1, P2, F],
      calculate: (vals) => {
        const { gaa = 0, roe = 0, p1 = 0, p2 = 0, f = 0 } = vals;
        return 0.2 * gaa + 0.2 * roe + 0.2 * p1 + 0.2 * p2 + 0.2 * f;
      }
    },
    {
      id: 'pdsa',
      name: 'Programming, Data Structures & Algorithms (PDSA)',
      components: [GAA, OPPE, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, oppe = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + 0.2 * oppe + 0.45 * f + Math.max(0.2 * Math.max(qz1, qz2), 0.1 * qz1 + 0.2 * qz2);
      }
    },
    {
      id: 'dbms',
      name: 'Database Management Systems (DBMS)',
      components: [GAA2, GAA3, OPPE, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa2 = 0, gaa3 = 0, oppe = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.03 * gaa2 + 0.02 * gaa3 + 0.2 * oppe + 0.45 * f + Math.max(0.2 * Math.max(qz1, qz2), 0.1 * qz1 + 0.2 * qz2);
      }
    },
    {
      id: 'mad1',
      name: 'Application Development 1',
      components: [GLA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gla = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gla + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'java',
      name: 'Programming Concepts using Java',
      components: [GAA, OPPE1, OPPE2, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, oppe1 = 0, oppe2 = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.05 * gaa + 0.2 * Math.max(oppe1, oppe2) + 0.45 * f + Math.max(0.2 * Math.max(qz1, qz2), 0.1 * qz1 + 0.2 * qz2) + 0.1 * Math.min(oppe1, oppe2) + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'syscmd',
      name: 'System Commands',
      components: [GAA, QZ1, OPPE, F, BPTA],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, oppe = 0, f = 0, bpta = 0 } = vals;
        return 0.05 * gaa + 0.25 * qz1 + 0.3 * oppe + 0.3 * f + 0.1 * bpta;
      }
    },
    {
      id: 'mad2',
      name: 'Application Development 2',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2);
      }
    },
    {
      id: 'dlgenai',
      name: 'Introduction to Deep Learning and Generative AI',
      components: [GAA, QZ1, QZ2, NPPE1, NPPE2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, nppe1 = 0, nppe2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.2 * qz1 + 0.2 * qz2 + 0.25 * f + 0.1 * nppe1 + 0.15 * nppe2;
      }
    }
  ],
  Degree: [
    {
      id: 'st',
      name: 'Software Testing',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'se',
      name: 'Software Engineering',
      components: [GAA, QZ2, F, GP1, GP2, PP, CP],
      calculate: (vals) => {
        const { gaa = 0, qz2 = 0, f = 0, gp1 = 0, gp2 = 0, pp = 0, cp = 0 } = vals;
        return 0.05 * gaa + 0.2 * qz2 + 0.4 * f + 0.1 * gp1 + 0.1 * gp2 + 0.1 * pp + 0.05 * cp;
      }
    },
    {
      id: 'dl',
      name: 'Deep Learning',
      components: [GAA, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.05 * gaa + 0.25 * qz1 + 0.25 * qz2 + 0.45 * f + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'ai',
      name: 'AI Search Methods for Problem Solving',
      components: [GAA, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2 + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'spg',
      name: 'Strategies for Professional Growth',
      components: [GAA, GP, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, gp = 0, qz2 = 0, f = 0 } = vals;
        return 0.15 * gaa + 0.25 * gp + 0.25 * qz2 + 0.35 * f;
      }
    },
    {
      id: 'prog_c',
      name: 'Programming in C',
      components: [GAA, QZ1, OPPE1, OPPE2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, oppe1 = 0, oppe2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.2 * qz1 + 0.2 * oppe1 + 0.2 * oppe2 + 0.3 * f;
      }
    },
    {
      id: 'dlcv',
      name: 'Deep Learning for CV',
      components: [GAA, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2 + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'llm',
      name: 'Large Language Models',
      components: [GAA, QZ1, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.05 * gaa + 0.35 * f + 0.3 * qz1 + 0.3 * qz2 + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'dlp',
      name: 'Deep Learning Practice',
      components: [GAA, QZ1, QZ2, QZ3, NPPE1, NPPE2, NPPE3, VIVA],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, qz3 = 0, nppe1 = 0, nppe2 = 0, nppe3 = 0, viva = 0 } = vals;
        return 0.05 * gaa + 0.15 * qz1 + 0.15 * qz2 + 0.15 * qz3 + 0.25 * ((nppe1 + nppe2 + nppe3) / 3) + 0.25 * viva;
      }
    },
    {
      id: 'dsailab',
      name: 'Data Science and AI Lab',
      components: [GAA, QZ2, P, VIVA, BONUS],
      calculate: (vals) => {
        const { gaa = 0, qz2 = 0, p = 0, viva = 0, bonus = 0 } = vals;
        const T = 0.05 * gaa + 0.25 * qz2 + 0.4 * p + 0.3 * viva + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'appdevlab',
      name: 'Application Development Lab',
      components: [GAA, QZ2, VIVA],
      calculate: (vals) => {
        const { gaa = 0, qz2 = 0, viva = 0 } = vals;
        return 0.3 * gaa + 0.2 * qz2 + 0.5 * viva;
      }
    },
    {
      id: 'atb',
      name: 'Algorithmic Thinking in Bioinformatics',
      components: [GAA, GRPA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, grpa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.075 * gaa + 0.025 * grpa + 0.25 * qz1 + 0.25 * qz2 + 0.4 * f;
      }
    },
    {
      id: 'mr',
      name: 'Market Research',
      components: [GAA, QZ1, QZ2, P, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, p = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.2 * qz1 + 0.2 * qz2 + 0.25 * p + 0.25 * f;
      }
    },
    {
      id: 'me',
      name: 'Managerial Economics',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'mlops',
      name: 'MLOps',
      components: [GAA, OPPE1, OPPE2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, oppe1 = 0, oppe2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.2 * gaa + 0.3 * f + 0.25 * oppe1 + 0.25 * oppe2 + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'mfgai',
      name: 'Mathematical Foundations of Generative AI',
      components: [GAA, QZ1, QZ2, NPPE, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, nppe = 0, f = 0 } = vals;
        return 0.05 * gaa + 0.35 * f + 0.2 * qz1 + 0.2 * qz2 + 0.2 * nppe;
      }
    },
    {
      id: 'dvd',
      name: 'Data Visualization Design',
      components: [GA, QZ1, QZ2, P, BONUS],
      calculate: (vals) => {
        const { ga = 0, qz1 = 0, qz2 = 0, p = 0, bonus = 0 } = vals;
        const T = 0.3 * ga + Math.max(0.2 * qz1 + 0.2 * qz2, 0.3 * Math.max(qz1, qz2)) + 0.3 * p + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'dt',
      name: 'Design Thinking for Data-Driven App Dev',
      components: [GAA, GP1, GP2, GP3, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, gp1 = 0, gp2 = 0, gp3 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.1 * gp1 + 0.1 * gp2 + 0.2 * gp3 + 0.2 * qz2 + 0.3 * f;
      }
    },
    {
      id: 'psosm',
      name: 'Privacy & Security in Online Social Media',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.2 * gaa + 0.3 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'csd',
      name: 'Computer Systems Design',
      components: [GAA, QZ1, QZ2, CVA, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, cva = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.2 * qz1 + 0.25 * qz2 + 0.05 * cva;
      }
    },
    {
      id: 'gts',
      name: 'Game Theory and Strategy',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'ads',
      name: 'Algorithms for Data Science',
      components: [GAA, PAA, QZ2, F, BONUS],
      calculate: (vals) => {
        const { gaa = 0, paa = 0, qz2 = 0, f = 0, bonus = 0 } = vals;
        const T = 0.1 * gaa + 0.1 * paa + 0.45 * f + 0.35 * qz2 + bonus;
        return Math.min(T, 100);
      }
    },
    {
      id: 'dm',
      name: 'Discrete Mathematics',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'cd',
      name: 'Compiler Design',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    },
    {
      id: 'toc',
      name: 'Theory of Computation',
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.4 * f + 0.25 * qz1 + 0.25 * qz2;
      }
    }
  ]
};
