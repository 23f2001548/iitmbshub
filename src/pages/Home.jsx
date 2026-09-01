import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, FileText, Link as LinkIcon, Info, LayoutDashboard, MessageSquare, Headset, ExternalLink, BarChart, ClipboardCheck, Users, CalendarDays, BookOpen, Video } from 'lucide-react';

const externalPortals = [
  {
    name: 'IITM Dashboard',
    description: 'Access your official IITM BS Degree student dashboard for courses and grades.',
    icon: LayoutDashboard,
    url: 'https://app.onlinedegree.iitm.ac.in/',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'IITM Discourse',
    description: 'Join the community forum for queries, doubts, and student discussions.',
    icon: MessageSquare,
    url: 'https://discourse.onlinedegree.iitm.ac.in/',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: 'Support Portal',
    description: 'Raise tickets for academic, accounts, or official complaints.',
    icon: Headset,
    url: 'https://study-supportdesk.freshdesk.com/support/login',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    name: 'Looker / Data Studio',
    description: 'Access academic performance analytics, reports, and dashboards.',
    icon: BarChart,
    url: 'https://datastudio.google.com/u/0/reporting/d02dac13-665b-49cc-8d51-0451268a6a3e/page/p_5egdu7yurd',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Score Checker',
    description: 'Check your current term scores, eligibility, and qualifier results.',
    icon: ClipboardCheck,
    url: 'https://study.iitm.ac.in/score-checker',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Student Activities',
    description: 'Central platform by SEC for event notifications, academic sessions, and discussions.',
    icon: Users,
    url: 'https://iitmbs.org/',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    name: 'Course Planner',
    description: 'Plan your courses and academic schedule.',
    icon: CalendarDays,
    url: 'https://course-planner-140256174016.asia-south1.run.app/dashboard',
    color: 'bg-amber-100 text-amber-600',
  },
];

const features = [
  {
    name: 'Academic Calendar',
    description: 'View the detailed schedule for the current term and future long-term plans.',
    icon: CalendarDays,
    path: '/calendar',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    name: 'Grade Predictor',
    description: 'Estimate your final grades based on current assignments and quiz scores.',
    icon: Calculator,
    path: '/grade-predictor',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Important Documents',
    description: 'Quick access to student handbooks, academic calendars, and grading schemes.',
    icon: FileText,
    path: '/documents',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'About',
    description: 'Learn more about this platform and how you can contribute to it.',
    icon: Info,
    path: '/about',
    color: 'bg-purple-100 text-purple-600',
  },
];

const resourcesAndNotes = [
  {
    name: 'AceGrade by OG Community Leaders',
    description: 'AceGrade - Your Companion in BS Degree. Recommended for Foundation Level and Diploma Level.',
    icon: BookOpen,
    url: 'https://www.acegrade.in/notes',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    name: 'Maurya Hub by Ashish Maurya',
    description: 'General Resources for IITM BS Degree. Recommended for Diploma in Data Science and Degree Level Courses.',
    icon: FileText,
    url: 'https://mauryahub.onrender.com/resources',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Courses by Maurya Hub',
    description: 'Courses taught by Legends of BS degree.',
    icon: Users,
    url: 'https://mauryahub.onrender.com/dashboard',
    color: 'bg-orange-100 text-orange-600',
  },
];

const pyqsAndMockTests = [
  {
    name: 'PYQ Platform – Shine in Exams! by Ashish Maurya',
    description: 'Access a collection of previous year questions and practice materials.',
    icon: FileText,
    url: 'https://mauryahub.onrender.com/',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'QuizPractice Space by SALMANUL FARIS',
    description: 'Recommended for all your quizzes practice.',
    icon: ClipboardCheck,
    url: 'https://quizpractice.space/',
    color: 'bg-rose-100 text-rose-600',
  },
];

const channelsToSubscribe = [
  {
    name: 'Ashish Maurya',
    description: 'Helpful content and guides for the IITM BS Degree.',
    icon: Video,
    url: 'https://www.youtube.com/@ashishmaurya7157',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Code Synth by Soul Slayer',
    description: 'Coding tutorials, project walkthroughs, and course help.',
    icon: Video,
    url: 'https://www.youtube.com/@Code_Synth',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Parampreet Singh',
    description: 'Tips, strategies, and insights on managing the degree.',
    icon: Video,
    url: 'https://www.youtube.com/@Param3021',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'MyCampus by Rishu Raj',
    description: 'Updates and resources relevant to the BS degree community.',
    icon: Video,
    url: 'https://www.youtube.com/@Myowncampus',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Devloper Harsh',
    description: 'Technical guidance, programming concepts, and more.',
    icon: Video,
    url: 'https://www.youtube.com/@devloper_hs',
    color: 'bg-red-100 text-red-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const CardLink = ({ item, isInternal }) => {
  const content = (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-gray-200/50 dark:border-white/5 p-6 flex flex-col group relative overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-transparent pointer-events-none" />
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isInternal && <ExternalLink className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300" />}
      </div>
      <div className={`p-3 rounded-2xl inline-flex w-fit mb-4 ${item.color} shadow-inner`}>
        <item.icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors pr-8 mb-2 tracking-tight">
        {item.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow leading-relaxed font-medium">
        {item.description}
      </p>
    </motion.div>
  );

  return isInternal ? (
    <Link to={item.path} className="block h-full outline-none">{content}</Link>
  ) : (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">{content}</a>
  );
};

const Section = ({ title, items, isInternal = false }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
    >
      {title}
    </motion.h2>
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((item) => (
        <CardLink key={item.name} item={item} isInternal={isInternal} />
      ))}
    </motion.div>
  </section>
);

const Home = () => {
  return (
    <div className="flex flex-col space-y-24 pb-24 transition-colors duration-300 bg-[#f8fafc] dark:bg-[#0a0f1a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[60vh]">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/20 dark:bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-[#111827]/50 backdrop-blur-md border border-gray-200/50 dark:border-white/5 mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your All-in-One Companion</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl tracking-tighter font-black text-gray-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block mb-2">Welcome to</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400">
              IITM BS Hub
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl font-medium leading-relaxed"
          >
            Access tools, resources, and community links in one place. Engineered for the IIT Madras BS Degree program students.
          </motion.p>
        </div>
      </section>

      <Section title="Essential Portals" items={externalPortals} />
      <Section title="Quick Access" items={features} isInternal={true} />
      <Section title="Resources and Notes" items={resourcesAndNotes} />
      <Section title="PYQs and Mock Tests" items={pyqsAndMockTests} />
      <Section title="Channels to Subscribe" items={channelsToSubscribe} />
      
    </div>
  );
};

export default Home;
