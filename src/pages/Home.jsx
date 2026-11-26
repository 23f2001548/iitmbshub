import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, FileText, Info, LayoutDashboard, MessageSquare, Headset, 
  ExternalLink, BarChart, ClipboardCheck, Users, CalendarDays, BookOpen, 
  Video, ArrowRight, Sparkles, GraduationCap, Globe, FileCheck, Library, 
  MessageCircle, Briefcase, ShieldAlert 
} from 'lucide-react';

const externalPortals = [
  {
    name: 'Official BS Website',
    description: "The degree program's official home portal and announcements.",
    icon: Globe,
    url: 'https://study.iitm.ac.in/ds/',
  },
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
    name: 'Score Checker',
    description: 'Check current term scores, eligibility, and qualifier results.',
    icon: ClipboardCheck,
    url: 'https://study.iitm.ac.in/score-checker',
  },
  {
    name: 'Data Studio',
    description: 'Academic performance analytics and class reports.',
    icon: BarChart,
    url: 'https://datastudio.google.com/s/k3kRC9kDo54',
  },
  {
    name: 'OPPE Exam Portal',
    description: 'Scheduled online exam links and portal for OPPE exams.',
    icon: FileCheck,
    url: 'https://study.iitm.ac.in/ds/exam.html',
  },
  {
    name: 'Student Activities',
    description: 'Central platform by SEC for event notifications.',
    icon: Users,
    url: 'https://iitmbs.org/',
  },
  {
    name: 'Course Planner',
    description: 'Plan your courses and academic schedule for upcoming terms.',
    icon: CalendarDays,
    url: 'https://course-planner-140256174016.asia-south1.run.app/dashboard',
  },
];

const features = [
  {
    name: 'Study Room',
    description: 'Join a virtual co-working space to study with other IITM BS students via video call.',
    icon: Video,
    path: '/study-room',
  },
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
    name: 'CGPA Calculator',
    description: 'Calculate your cumulative grade point average (CGPA).',
    icon: GraduationCap,
    path: '/cgpa-calculator',
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
  {
    name: 'Grading Scheme',
    description: 'The official grading scheme and policies.',
    icon: FileText,
    url: 'https://docs.google.com/document/d/e/2PACX-1vT_FeqnTq0Br4sUaN7OYAmj1B9MwjchyTEed1Bh5FkZvi5NyIMeAvvkuttostVsJBPjZcs3SjjEfiho/pub',
  },
  {
    name: 'Student Handbook',
    description: 'The comprehensive student handbook for rules and guidelines.',
    icon: BookOpen,
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t',
  },
  {
    name: 'Course Booklet',
    description: 'Data Science Course Booklet with detailed syllabus.',
    icon: BookOpen,
    url: 'https://drive.google.com/file/d/1BJSLtuYTZPOSP-cuoX9BEAopOKqpDevs/view',
  },
  {
    name: 'Council Contacts',
    description: 'Contact details of UHC and LHC members including RCs and Secretaries.',
    icon: Users,
    url: 'https://docs.google.com/document/d/e/2PACX-1vS1RwDJciGRW72T_4Rgu1kmUrMMliOkjml8raWPJ2cSTj2qRmWQCvhrXfUBMajsgy-KrpIvKS_bph4H/pub',
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
  {
    name: "IITM BS Students' Corner",
    description: 'Community-driven notes and study materials for most courses.',
    icon: BookOpen,
    url: 'https://www.iitmbsdegree.in/',
  },
  {
    name: 'ML Study Hub (DegreeDost)',
    description: 'Topic-wise notes, cheat sheets, and summaries for degree courses.',
    icon: FileText,
    url: 'https://degreedost.com/',
  },
  {
    name: 'Student Link Library',
    description: 'Comprehensive community-kept master list of links on Discourse.',
    icon: Library,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/links-to-almost-all-resources-at-one-place/88809',
  },
  {
    name: 'Recommended Books',
    description: 'Books and reference texts suggested across courses in one place.',
    icon: BookOpen,
    url: 'https://bsc-iitm.github.io/books/',
  },
  {
    name: 'LITEPODS',
    description: 'Comprehensive directory of links to everything in the BS programme.',
    icon: Library,
    url: 'https://bsc-iitm.github.io/litepods/',
  },
  {
    name: 'Course Syllabus',
    description: 'Official week-wise syllabus and roadmaps for every course.',
    icon: FileText,
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vSWW4TMd2ujKYOeSay5iCIyTGLtJgM1KWC-Ernu_JdhugLtB0dXV9i966Z-ZaPZ9qAAI1_QtWa3o3br/pub#h.64f8davxbp1d',
  },
  {
    name: 'Course Resources by Level',
    description: 'Playlists, slides, and references for Foundation, Diploma, and Degree.',
    icon: BookOpen,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/foundation-level-resource/154274',
  },
  {
    name: 'Pratham Bhalla on Medium',
    description: 'Foundation level notes, walkthroughs, and past paper solutions.',
    icon: FileText,
    url: 'https://medium.com/@prathambhalla7',
  },
  {
    name: 'Course WhatsApp Groups',
    description: 'Student-run WhatsApp groups directory for every course.',
    icon: MessageCircle,
    url: 'https://sites.google.com/student.onlinedegree.iitm.ac.in/iitmbs-community',
  },
  {
    name: 'Course Calendars',
    description: 'Import official course calendars directly into Google Calendar.',
    icon: CalendarDays,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/course-tip-stay-on-top-of-your-term-with-calendar/44947',
  },
];

const pyqsAndMockTests = [
  {
    name: 'IITM Code Vistara',
    description: 'IITM PYQ Practice for IIT Madras BS',
    icon: FileText,
    url: 'https://iitmcodevistara.com/',
  },
  {
    name: 'QuizPractice Space',
    description: 'Recommended for all your quizzes practice.',
    icon: ClipboardCheck,
    url: 'https://quizpractice.space/',
  },
  {
    name: 'PYQ Platform',
    description: 'Collection of previous year questions and practice materials.',
    icon: FileText,
    url: 'https://mauryahub.in/',
  },
  {
    name: 'Quiz Space',
    description: 'Past quiz, end term, and OPPE practice papers.',
    icon: ClipboardCheck,
    url: 'https://quizspacee.com/',
  },
  {
    name: 'OPPE Practice',
    description: 'Practice platform for OPPE.',
    icon: ClipboardCheck,
    url: 'https://oppe.rangalabs.cloud',
  },
  {
    name: 'Custodia',
    description: 'Interactive OPPE practice environment with instant grading.',
    icon: ClipboardCheck,
    url: 'https://custodia-beta.vercel.app/',
  },
  {
    name: 'Degree Question Paper Repository',
    description: 'Past quiz and end term papers from Sep 2022, kept by IITM BS students.',
    icon: FileText,
    url: 'https://docs.google.com/spreadsheets/d/1ndm0pg3620crYW1yyUigW6NPE5cvHLk65IvHErEv7f4/edit?gid=1189182592#gid=1189182592',
  },
  {
    name: 'Fetch PYQs',
    description: 'Find past papers on file across terms or upload missing papers.',
    icon: BookOpen,
    url: 'https://script.google.com/a/macros/ds.study.iitm.ac.in/s/AKfycbzs7K5NYNosmnKhjI4nZMbS3_ZWLd0b6ZFIk5wZTNwxF9mBndt5cIZuCK9JG0i2ldA/exec',
  },
  {
    name: 'Discourse Papers Repository',
    description: 'Community initiative on Discourse to discover and share past papers.',
    icon: FileText,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/question-paper-repository-we-need-your-help/202463',
  },
];

const careersAndHigherStudies = [
  {
    name: 'Placements Portal',
    description: 'Official portal for IITM BS campus placements and internships.',
    icon: Briefcase,
    url: 'https://placements.study.iitm.ac.in/',
  },
  {
    name: 'Placement Policy',
    description: 'Official placement rules, eligibility criteria, and guidelines.',
    icon: FileText,
    url: 'https://docs.google.com/document/d/e/2PACX-1vRGX3FY8zu6F1QxjwBQjdFrb9DvxXWedfv1PHHAhgyXqkZ9D-EbGB4VuNSSv_NHpA/pub',
  },
  {
    name: 'Placement Student Guide',
    description: 'Comprehensive guide to landing internships and placements.',
    icon: BookOpen,
    url: 'https://docs.google.com/document/u/6/d/e/2PACX-1vRDVdDmrDy4To6HUQfpvDOP90wtl_7oD1tLf9HYaKE-plZ7K8-il-ribk51WaI1sWXGTlUvs3IjV150/pub',
  },
  {
    name: 'Activity Points System',
    description: 'Guidelines on earning mandatory activity points for placement support.',
    icon: ClipboardCheck,
    url: 'https://docs.google.com/document/d/1wzhKEFjsz4m9b7Slhgfc-vDz4GszH3RplDxJpJ37Kqg',
  },
  {
    name: 'Official Resume Templates',
    description: 'Placement cell verified standard resume templates.',
    icon: FileText,
    url: 'https://drive.google.com/drive/folders/1DOYyu4qJJM8OXR2pOv9WuXMVjYAkoHid?usp=drive_link',
  },
  {
    name: 'Fake Internship Advisory',
    description: 'Official Discourse warning against fraudulent internship providers.',
    icon: ShieldAlert,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/beware-of-fake-internship-providers/161512',
  },
  {
    name: 'GATE DA Question Bank',
    description: 'Practice questions for GATE Data Science & AI by IITM BS instructors.',
    icon: GraduationCap,
    url: 'https://iitmbsc-student-projects.github.io/gate-da',
  },
  {
    name: 'GATE 2027 Portal',
    description: 'Official GATE 2027 entrance exam website hosted by IIT Madras.',
    icon: Globe,
    url: 'https://gate2027.iitm.ac.in/',
  },
  {
    name: 'Apprenticeship Programme',
    description: 'Earn up to 12 degree credits through recognized industry work.',
    icon: Briefcase,
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vQ_ZCTw1_PzVDBJ7u-wX18KUgl-IK1POIYRvyjAYsj_A-tS99K7ARRuNVKk0tp34B1woqclNxvY_0Lc/pub',
  },
  {
    name: 'MTech Upgrade Guidelines',
    description: 'Guidelines to upgrade into MTech or exit with a PG Diploma.',
    icon: GraduationCap,
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRrtiiHlurfHtFnJnDwtNZ0NHAci8PQ7pHsiX3V3SZKmbSmALDk4whCO5La6efs4MSmBLVTH2ZfGJNL/pub',
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
    name: 'Degree Revision by Lalit Kumar',
    description: 'Concept walkthroughs and degree-level revision sessions.',
    icon: Video,
    url: 'https://www.youtube.com/channel/UCw8-ZEkw9gVXEBw5P96kDjw',
  },
  {
    name: 'BS Course Lecture Playlists',
    description: 'Directory of all course playlists and YouTube channels on Discourse.',
    icon: Video,
    url: 'https://discourse.onlinedegree.iitm.ac.in/t/iitm-bs-course-playlist-youtube/101319',
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

const CardLink = ({ item }) => {
  const isExternal = !!item.url;
  
  const content = (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="glass p-6 flex flex-col group relative h-full transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        {isExternal && <ExternalLink className="w-5 h-5 text-primary" />}
      </div>
      
      <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl inline-flex w-fit mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <item.icon className="w-6 h-6 text-primary" strokeWidth={2} />
      </div>
      
      <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-tight">
        {item.name}
      </h3>
      
      <p className="font-sans text-sm text-foreground/70 flex-grow leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );

  return !isExternal ? (
    <Link to={item.path} className="block h-full outline-none">{content}</Link>
  ) : (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">{content}</a>
  );
};

const Section = ({ title, items }) => (
  <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center gap-4 mb-10"
    >
      <div className="h-8 w-1.5 bg-primary rounded-full" />
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 25 }}
          className="h-full z-10"
        >
          <CardLink item={item} />
        </motion.div>
      ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full min-h-[75vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-sans text-xs font-semibold tracking-wide">
                Unofficial Student Directory
              </span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-[6rem] tracking-tight font-extrabold text-foreground leading-[1.1] mb-8"
            >
              The IITM BS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">
                Index.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-sans max-w-[45ch] text-lg md:text-xl text-foreground/70 font-medium leading-relaxed mb-10"
            >
              Cut through the noise of scattered official emails. Every portal, tool, and resource in one definitive list.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.75, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-sans font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-200"
              >
                Access Portals
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>
          
          {/* Floating Glass Cards Graphic */}
          <div className="hidden lg:block lg:col-span-5 relative h-[500px]">
             <motion.div 
               initial={{ opacity: 0, y: 50, x: 20 }}
               animate={{ opacity: 1, y: 0, x: 0 }}
               transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 25 }}
               className="absolute top-10 right-10 w-64 h-64 glass rounded-3xl p-6 flex flex-col justify-between z-20 shadow-2xl"
             >
               <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
               </div>
               <div>
                  <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-700 rounded-full mb-3" />
                  <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
               </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: -30, x: -30 }}
               animate={{ opacity: 1, y: 0, x: 0 }}
               transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 25 }}
               className="absolute bottom-10 left-0 w-72 h-48 glass rounded-3xl p-6 flex flex-col justify-between z-10 opacity-80 backdrop-blur-sm shadow-xl"
             >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                      <LayoutDashboard className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="w-24 h-3 bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
                    <div className="w-16 h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                  </div>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50" />
             </motion.div>
          </div>
        </div>
      </section>

      <Section title="Essential Portals" items={externalPortals} />
      <Section title="Quick Access" items={features} />
      <Section title="Resources & Notes" items={resourcesAndNotes} />
      <Section title="PYQs & Mock Tests" items={pyqsAndMockTests} />
      <Section title="Careers & Higher Studies" items={careersAndHigherStudies} />
      <Section title="Channels to Subscribe" items={channelsToSubscribe} />
      
    </div>
  );
};

export default Home;
