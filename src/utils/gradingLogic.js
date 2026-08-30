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
const QZ1 = { id: 'qz1', label: 'Quiz 1 Score', max: 100 };
const QZ2 = { id: 'qz2', label: 'Quiz 2 Score', max: 100 };
const F = { id: 'f', label: 'Final Exam Score', max: 100 };
const OPPE1 = { id: 'oppe1', label: 'OPPE 1 Score', max: 100 };
const OPPE2 = { id: 'oppe2', label: 'OPPE 2 Score', max: 100 };
const OPPE = { id: 'oppe', label: 'OPPE Score', max: 100 }; // For PDSA/DBMS where OPPE is combined
const KA = { id: 'ka', label: 'Kaggle Assignments (KA)', max: 100 }; // For MLP
const BONUS = { id: 'bonus', label: 'Bonus Marks', max: 5 };
const GP1 = { id: 'gp1', label: 'Group Project 1', max: 100 };
const GP2 = { id: 'gp2', label: 'Group Project 2', max: 100 };
const GP3 = { id: 'gp3', label: 'Group Project 3', max: 100 };
const PP = { id: 'pp', label: 'Project Presentation', max: 100 };
const CP = { id: 'cp', label: 'Class Participation', max: 100 };
const NPPE = { id: 'nppe', label: 'NPPE Score', max: 100 }; // Added NPPE for Deep Learning Practice / Gen AI

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
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + Math.max(0.6 * f + 0.25 * Math.max(qz1, qz2), 0.4 * f + 0.25 * qz1 + 0.3 * qz2);
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
      id: 'mlp',
      name: 'Machine Learning Practice',
      components: [GAA, OPPE1, OPPE2, KA, F],
      calculate: (vals) => {
        const { gaa = 0, oppe1 = 0, oppe2 = 0, ka = 0, f = 0 } = vals;
        return 0.1 * gaa + 0.3 * f + 0.2 * oppe1 + 0.2 * oppe2 + 0.2 * ka; 
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
      components: [GAA, OPPE, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, oppe = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + 0.2 * oppe + 0.45 * f + Math.max(0.2 * Math.max(qz1, qz2), 0.1 * qz1 + 0.2 * qz2);
      }
    },
    {
      id: 'java',
      name: 'Programming Concepts using Java',
      components: [GAA, OPPE1, OPPE2, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, oppe1 = 0, oppe2 = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        const T = 0.05 * gaa + 0.2 * Math.max(oppe1, oppe2) + 0.45 * f + Math.max(0.2 * Math.max(qz1, qz2), 0.1 * qz1 + 0.2 * qz2) + 0.1 * Math.min(oppe1, oppe2);
        return Math.min(T, 100);
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
      components: [GAA, QZ1, QZ2, F],
      calculate: (vals) => {
        const { gaa = 0, qz1 = 0, qz2 = 0, f = 0 } = vals;
        return 0.05 * gaa + 0.25 * qz1 + 0.25 * qz2 + 0.45 * f;
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
