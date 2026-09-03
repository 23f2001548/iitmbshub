import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, FileText, Info, LayoutDashboard, MessageSquare, Headset, ExternalLink, BarChart, ClipboardCheck, Users, CalendarDays, BookOpen, Video, ArrowRight } from 'lucide-react';

const externalPortals = [
  {
    name: 'IITM Dashboard',
    description: 'Official student dashboard for courses and grades.',
    icon: LayoutDashboard,
    url: 'https://app.onlinedegree.iitm.ac.in/',
  },
  {
    name: 'IITM Discourse',
    description: 'Community forum for queries, doubts, and student discussions.',
    icon: MessageSquare,
    url: 'https://discourse.onlinedegree.iitm.ac.in/',
  },
  {
    name: 'Support Portal',
    description: 'Raise tickets for academic, accounts, or official complaints.',
    icon: Headset,
    url: 'https://study-supportdesk.freshdesk.com/support/login',
  },
  {
    name: 'Data Studio',
    description: 'Academic performance analytics and reports.',
    icon: BarChart,
    url: 'https://datastudio.google.com/u/0/reporting/d02dac13-665b-49cc-8d51-0451268a6a3e/page/p_5egdu7yurd',
  },
  {
    name: 'Score Checker',
    description: 'Check current term scores, eligibility, and qualifier results.',
    icon: ClipboardCheck,
    url: 'https://study.iitm.ac.in/score-checker',
  },
  {
    name: 'Student Activities',
    description: 'Central platform by SEC for event notifications.',
    icon: Users,
    url: 'https://iitmbs.org/',
  },
  {
    name: 'Course Planner',
    description: 'Plan your courses and academic schedule.',
    icon: CalendarDays,
    url: 'https://course-planner-140256174016.asia-south1.run.app/dashboard',
  },
];

const features = [
  {
    name: 'Academic Calendar',
    description: 'View the detailed schedule for the current term and future plans.',
    icon: CalendarDays,
    path: '/calendar',
  },
  {
    name: 'Grade Predictor',
    description: 'Estimate your final grades based on current assignments and quiz scores.',
    icon: Calculator,
    path: '/grade-predictor',
  },
  {
    name: 'Important Documents',
    description: 'Quick access to student handbooks, calendars, and grading schemes.',
    icon: FileText,
    path: '/documents',
  },
  {
    name: 'About Platform',
    description: 'Learn more about this platform and how you can contribute.',
    icon: Info,
    path: '/about',
  },
];

const resourcesAndNotes = [
  {
    name: 'AceGrade by OG Leaders',
    description: 'Your Companion in BS Degree. For Foundation and Diploma.',
    icon: BookOpen,
    url: 'https://www.acegrade.in/notes',
  },
  {
    name: 'Maurya Hub',
    description: 'General Resources for IITM BS Degree. Diploma and Degree.',
    icon: FileText,
    url: 'https://mauryahub.onrender.com/resources',
  },
  {
    name: 'Courses by Maurya Hub',
    description: 'Courses taught by Legends of BS degree.',
    icon: Users,
    url: 'https://mauryahub.onrender.com/dashboard',
  },
];

const pyqsAndMockTests = [
  {
    name: 'PYQ Platform',
    description: 'Collection of previous year questions and practice materials.',
    icon: FileText,
    url: 'https://mauryahub.onrender.com/',
  },
  {
    name: 'QuizPractice Space',
    description: 'Recommended for all your quizzes practice.',
    icon: ClipboardCheck,
    url: 'https://quizpractice.space/',
  },
  {
    name: 'OPPE Practice',
    description: 'Practice platform for OPPE.',
    icon: ClipboardCheck,
    url: 'https://oppe.rangalabs.cloud',
  },
];

const channelsToSubscribe = [
  {
    name: 'Ashish Maurya',
    description: 'Helpful content and guides for the IITM BS Degree.',
    icon: Video,
    url: 'https://www.youtube.com/@ashishmaurya7157',
  },
  {
    name: 'Code Synth',
    description: 'Coding tutorials, project walkthroughs, and course help.',
    icon: Video,
    url: 'https://www.youtube.com/@Code_Synth',
  },
  {
    name: 'Parampreet Singh',
    description: 'Tips, strategies, and insights on managing the degree.',
    icon: Video,
    url: 'https://www.youtube.com/@Param3021',
  },
  {
    name: 'MyCampus',
    description: 'Updates and resources relevant to the BS degree community.',
    icon: Video,
    url: 'https://www.youtube.com/@Myowncampus',
  },
  {
    name: 'Devloper Harsh',
    description: 'Technical guidance, programming concepts, and more.',
    icon: Video,
    url: 'https://www.youtube.com/@devloper_hs',
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } }
};

const CardLink = ({ item, isInternal }) => {
  const content = (
    <motion.div
      variants={itemVariants}
      className="bg-[#F4F4F0] dark:bg-[#0B0B0B] border-2 border-black dark:border-white/20 p-6 flex flex-col group relative h-full hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#0047FF] transition-all duration-150"
    >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isInternal && <ExternalLink className="w-5 h-5 text-black dark:text-white" />}
      </div>
      
      <div className="p-3 bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 inline-flex w-fit mb-6">
        <item.icon className="w-6 h-6 text-[#0047FF]" strokeWidth={2.5} />
      </div>
      
      <h3 className="font-display text-xl font-bold text-black dark:text-white mb-3 tracking-tight">
        {item.name}
      </h3>
      
      <p className="font-sans text-sm text-black/70 dark:text-white/70 flex-grow leading-relaxed">
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
  <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 border-t-2 border-black dark:border-white/20">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="font-display text-4xl md:text-5xl font-black text-black dark:text-white mb-10 tracking-tighter uppercase"
    >
      {title}
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 25 }}
          className="h-full"
        >
          <CardLink item={item} isInternal={isInternal} />
        </motion.div>
      ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="flex flex-col bg-[#F4F4F0] dark:bg-[#0B0B0B] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full min-h-[70vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black dark:border-white/20 bg-white dark:bg-[#1A1A1A] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                Unofficial Student Directory
              </span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-8xl lg:text-[7.5rem] tracking-tighter font-black text-black dark:text-white leading-[0.9] uppercase mb-8"
            >
              THE IITM BS <br />
              <span className="text-[#0047FF]">INDEX.</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans max-w-[45ch] text-lg md:text-xl text-black/70 dark:text-white/70 font-medium leading-relaxed mb-10"
            >
              Cut through the noise of scattered official emails. Every portal, tool, and resource in one definitive list.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0047FF] text-white border-2 border-black font-mono font-bold uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#FFF] transition-all duration-150"
              >
                Access Portals
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </button>
            </motion.div>
          </div>
          
          {/* Decorative element for Brutalist visual interest */}
          <div className="hidden lg:block lg:col-span-4 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
               className="aspect-square bg-[#0047FF] border-4 border-black shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#FFF] flex items-center justify-center p-8"
             >
               <div className="w-full h-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-black/50 dark:border-white/50 flex items-center justify-center">
                     <span className="font-display text-8xl font-black text-black dark:text-white">BS</span>
                  </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      <Section title="Essential Portals" items={externalPortals} />
      <Section title="Quick Access" items={features} isInternal={true} />
      <Section title="Resources & Notes" items={resourcesAndNotes} />
      <Section title="PYQs & Mock Tests" items={pyqsAndMockTests} />
      <Section title="Channels to Subscribe" items={channelsToSubscribe} />
      
    </div>
  );
};

export default Home;
