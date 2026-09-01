import { Link } from 'react-router-dom';
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

const Home = () => {
  return (
    <div className="flex flex-col space-y-12 pb-12 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-gray-900/50 pointer-events-none" />
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-iitm-blue dark:text-blue-300 mt-2">IITM BS Hub</span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Your all-in-one companion for the IIT Madras BS Degree program. Access tools, resources, and community links in one place.
          </p>
        </div>
      </section>

      {/* Essential Portals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Essential Portals</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {externalPortals.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-iitm-light-blue dark:hover:border-iitm-blue transition-all duration-300 hover:-translate-y-1 flex flex-col group relative"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue" />
              </div>
              <div className={`p-3 rounded-xl inline-flex w-fit mb-4 ${portal.color} dark:bg-opacity-20`}>
                <portal.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue transition-colors pr-8">
                {portal.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow leading-relaxed">
                {portal.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.name}
              to={feature.path}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-iitm-light-blue dark:hover:border-iitm-blue transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className={`p-3 rounded-xl inline-flex w-fit mb-4 ${feature.color} dark:bg-opacity-20`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue transition-colors">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Resources and Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resources and Notes</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourcesAndNotes.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-iitm-light-blue dark:hover:border-iitm-blue transition-all duration-300 hover:-translate-y-1 flex flex-col group relative"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue" />
              </div>
              <div className={`p-3 rounded-xl inline-flex w-fit mb-4 ${resource.color} dark:bg-opacity-20`}>
                <resource.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue transition-colors pr-8">
                {resource.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow leading-relaxed">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* PYQs and Mock Tests */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">PYQs and Mock Tests</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pyqsAndMockTests.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-iitm-light-blue dark:hover:border-iitm-blue transition-all duration-300 hover:-translate-y-1 flex flex-col group relative"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue" />
              </div>
              <div className={`p-3 rounded-xl inline-flex w-fit mb-4 ${item.color} dark:bg-opacity-20`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue transition-colors pr-8">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Channels you must subscribe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Channels you must subscribe</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channelsToSubscribe.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg hover:border-iitm-light-blue dark:hover:border-iitm-blue transition-all duration-300 hover:-translate-y-1 flex flex-col group relative"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue" />
              </div>
              <div className={`p-3 rounded-xl inline-flex w-fit mb-4 ${channel.color} dark:bg-opacity-20`}>
                <channel.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-iitm-blue dark:group-hover:text-iitm-light-blue transition-colors pr-8">
                {channel.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow leading-relaxed">
                {channel.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
