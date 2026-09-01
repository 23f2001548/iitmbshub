import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, CheckCircle2, Info, Edit3, ClipboardList, ChevronRight } from 'lucide-react';

const sep2026Data = {
  qualifier: [
    { name: 'Qualifier Registration Form', start: 'Mon, Jun 29, 2026', end: 'Sun, Sep 27, 2026', type: 'registration' },
    { name: 'Course and Program Orientation', start: 'Mon, Sep 14, 2026', end: 'Fri, Sep 18, 2026', type: 'info' },
    { name: 'Qualifier Exam', start: 'Sun, Nov 15, 2026', end: '', type: 'exam' },
    { name: 'Publishing results for Qualifier exam', start: 'Thu, Nov 19, 2026', end: '', type: 'result' },
    { name: 'QF Course Registration and Reattempt window', start: 'Thu, Nov 19, 2026', end: 'Fri, Nov 20, 2026', type: 'registration' },
    { name: 'Reattempt Qualifier Exam', start: 'Sat, Dec 5, 2026', end: '', type: 'exam' },
    { name: 'Publishing results Qual_Reattempt', start: 'Tue, Dec 15, 2026', end: '', type: 'result' },
  ],
  term: [
    { name: 'Class Committee', start: 'Tue, Sep 15, 2026', end: '', type: 'info' },
    { name: 'Course registration window', start: 'Tue, Sep 22, 2026', end: 'Wed, Sep 23, 2026', type: 'registration' },
    { name: 'Term start', start: 'Fri, Oct 2, 2026', end: '', type: 'info' },
    { name: 'Drop Course form window', start: 'Fri, Oct 23, 2026', end: 'Sun, Oct 25, 2026', type: 'registration' },
    { name: 'Quiz1', start: 'Sun, Nov 15, 2026', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day1)', start: 'Sat, Nov 21, 2026', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day2)', start: 'Sun, Nov 22, 2026', end: '', type: 'exam' },
    { name: 'Publishing results for Quiz1', start: 'Mon, Nov 23, 2026', end: '', type: 'result' },
    { name: 'OPPE1 Result Release', start: 'Thu, Nov 26, 2026', end: 'Tue, Dec 1, 2026', type: 'result' },
    { name: 'Quiz2', start: 'Sat, Dec 5, 2026', end: '', type: 'exam' },
    { name: 'Publishing results for Quiz2', start: 'Sun, Dec 13, 2026', end: '', type: 'result' },
    { name: 'Programming Quiz2 (Day1)', start: 'Sat, Dec 19, 2026', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day2)', start: 'Sun, Dec 20, 2026', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day3)', start: 'Sat, Jan 2, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day4)', start: 'Sun, Jan 3, 2027', end: '', type: 'exam' },
    { name: 'OPPE2 Result release', start: 'Thu, Jan 7, 2027', end: 'Tue, Jan 12, 2027', type: 'result' },
    { name: 'END TERM (DAD_Qualifier)', start: 'Sun, Jan 10, 2027', end: '', type: 'exam' },
    { name: 'Publishing results for EndTerm', start: 'Mon, Jan 18, 2027', end: 'Sat, Jan 23, 2027', type: 'result' },
    { name: 'Disco Student Meeting', start: 'Yet to Decide', end: '', type: 'info' },
  ],
  dad: [
    { name: 'DAD Qualifier Registration Window', start: 'Sun, Sep 27, 2026', end: 'Fri, Dec 11, 2026', type: 'registration' },
    { name: 'DAD Qualifier Exam', start: 'Sun, Jan 10, 2027', end: '', type: 'exam' },
    { name: 'Publishing results for DAD Qualifier', start: 'Mon, Jan 18, 2027', end: 'Sat, Jan 23, 2027', type: 'result' },
  ]
};

const futureTermsData = {
  jan2027: [
    { name: 'Term start', start: 'Fri, Feb 5, 2027', end: '', type: 'info' },
    { name: 'Quiz1', start: 'Sun, Mar 14, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day1)', start: 'Sat, Mar 27, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day2)', start: 'Sun, Mar 28, 2027', end: '', type: 'exam' },
    { name: 'Quiz2', start: 'Sun, Apr 11, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day1)', start: 'Sun, Apr 25, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day2)', start: 'Sun, May 2, 2027', end: '', type: 'exam' },
    { name: 'END TERM', start: 'Sun, May 9, 2027', end: '', type: 'exam' },
  ],
  may2027: [
    { name: 'Term start', start: 'Fri, Jun 4, 2027', end: '', type: 'info' },
    { name: 'Quiz1', start: 'Sun, Jul 11, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day1)', start: 'Sat, Jul 24, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day2)', start: 'Sun, Jul 25, 2027', end: '', type: 'exam' },
    { name: 'Quiz2', start: 'Sun, Aug 8, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day1)', start: 'Sun, Aug 22, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day2)', start: 'Sun, Aug 29, 2027', end: '', type: 'exam' },
    { name: 'END TERM', start: 'Sun, Sep 5, 2027', end: '', type: 'exam' },
  ],
  sep2027: [
    { name: 'Term start', start: 'Fri, Oct 1, 2027', end: '', type: 'info' },
    { name: 'Quiz1', start: 'Sun, Nov 7, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day1)', start: 'Sat, Nov 27, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz1 (Day2)', start: 'Sun, Nov 28, 2027', end: '', type: 'exam' },
    { name: 'Quiz2', start: 'Sun, Dec 12, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day1)', start: 'Sun, Dec 19, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day2)', start: 'Sun, Dec 26, 2027', end: '', type: 'exam' },
    { name: 'Programming Quiz2 (Day3)', start: 'Sun, Jan 2, 2028', end: '', type: 'exam' },
    { name: 'END TERM', start: 'Sun, Jan 9, 2028', end: '', type: 'exam' },
  ]
};

const getTypeStyles = (type) => {
  switch (type) {
    case 'exam': return { bg: 'bg-rose-50/50 dark:bg-rose-900/10', border: 'border-rose-100 dark:border-rose-900/30', text: 'text-rose-600 dark:text-rose-400', icon: <Edit3 className="w-5 h-5" />, glow: 'group-hover:shadow-[0_0_15px_rgba(225,29,72,0.15)]' };
    case 'registration': return { bg: 'bg-blue-50/50 dark:bg-blue-900/10', border: 'border-blue-100 dark:border-blue-900/30', text: 'text-blue-600 dark:text-blue-400', icon: <ClipboardList className="w-5 h-5" />, glow: 'group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]' };
    case 'result': return { bg: 'bg-emerald-50/50 dark:bg-emerald-900/10', border: 'border-emerald-100 dark:border-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', icon: <CheckCircle2 className="w-5 h-5" />, glow: 'group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]' };
    default: return { bg: 'bg-gray-50/50 dark:bg-gray-800/20', border: 'border-gray-200/50 dark:border-gray-700/30', text: 'text-gray-600 dark:text-gray-300', icon: <Info className="w-5 h-5" />, glow: 'group-hover:shadow-[0_0_15px_rgba(156,163,175,0.15)]' };
  }
};

const EventRow = ({ event, index }) => {
  const styles = getTypeStyles(event.type);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
    >
      <div className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 mb-4 rounded-2xl border transition-all duration-300 backdrop-blur-sm hover:scale-[1.01] cursor-default ${styles.bg} ${styles.border} ${styles.glow}`}>
        <div className="flex items-start space-x-4 w-full">
          <div className={`p-3 rounded-xl bg-white dark:bg-[#111827] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${styles.text}`}>
            {styles.icon}
          </div>
          <div className="flex-grow">
            <h4 className={`text-lg font-bold group-hover:text-gray-900 dark:group-hover:text-white transition-colors ${styles.text}`}>{event.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-lg shadow-sm border border-black/5 dark:border-white/5 backdrop-blur-md">{event.start}</span>
              {event.end && (
                <>
                  <ChevronRight className="hidden sm:block w-4 h-4 text-gray-400 opacity-50" />
                  <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-lg shadow-sm border border-black/5 dark:border-white/5 backdrop-blur-md">{event.end}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`hidden lg:block uppercase text-[0.65rem] font-extrabold tracking-[0.2em] px-4 py-2 rounded-full bg-white dark:bg-[#111827] shadow-sm mt-4 sm:mt-0 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity ${styles.text}`}>
          {event.type}
        </div>
      </div>
    </motion.div>
  );
};

const Calendar = () => {
  const [activeTab, setActiveTab] = useState('sep2026');

  const tabs = [
    { id: 'sep2026', label: 'Sep 2026 (Detailed)' },
    { id: 'jan2027', label: 'Jan 2027' },
    { id: 'may2027', label: 'May 2027' },
    { id: 'sep2027', label: 'Sep 2027' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-12 min-h-screen">
      
      {/* Header */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -5 }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl mb-6 shadow-[0_0_40px_rgba(99,102,241,0.4)]"
        >
          <CalendarDays className="w-10 h-10" />
        </motion.div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-white sm:text-5xl tracking-tight mb-4">
          Detailed Academic Calendar
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Comprehensive schedules, precisely mapped from the official academic calendars.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 md:gap-4">
        {tabs.map(tab => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-colors ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div 
        layout
        className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-gray-200/50 dark:border-white/5 p-6 sm:p-12 min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          {activeTab === 'sep2026' && (
            <motion.div 
              key="sep2026"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <section>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                  <span className="w-2 h-8 rounded-full bg-violet-500"></span> For Term Students
                </h2>
                <div>
                  {sep2026Data.term.map((event, idx) => <EventRow key={`term-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                  <span className="w-2 h-8 rounded-full bg-blue-500"></span> For Qualifier Students
                </h2>
                <div>
                  {sep2026Data.qualifier.map((event, idx) => <EventRow key={`qual-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                  <span className="w-2 h-8 rounded-full bg-emerald-500"></span> For DAD Qualifier Students
                </h2>
                <div>
                  {sep2026Data.dad.map((event, idx) => <EventRow key={`dad-${idx}`} event={event} index={idx} />)}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'jan2027' && (
            <motion.div 
              key="jan2027"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-2 h-8 rounded-full bg-indigo-500"></span> For Term Students (Jan 2027)
              </h2>
              <div>
                {futureTermsData.jan2027.map((event, idx) => <EventRow key={`jan-${idx}`} event={event} index={idx} />)}
              </div>
            </motion.div>
          )}

          {activeTab === 'may2027' && (
            <motion.div 
              key="may2027"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-2 h-8 rounded-full bg-emerald-500"></span> For Term Students (May 2027)
              </h2>
              <div>
                {futureTermsData.may2027.map((event, idx) => <EventRow key={`may-${idx}`} event={event} index={idx} />)}
              </div>
            </motion.div>
          )}

          {activeTab === 'sep2027' && (
            <motion.div 
              key="sep2027"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-2 h-8 rounded-full bg-orange-500"></span> For Term Students (Sep 2027)
              </h2>
              <div>
                {futureTermsData.sep2027.map((event, idx) => <EventRow key={`sep27-${idx}`} event={event} index={idx} />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};

export default Calendar;
