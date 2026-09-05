import { useState } from 'react';
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
    case 'exam': return { bg: 'bg-red-500/10', text: 'text-red-500', icon: <Edit3 className="w-5 h-5" />, badge: 'bg-red-500/20 text-red-600 dark:text-red-400' };
    case 'registration': return { bg: 'bg-primary/10', text: 'text-primary', icon: <ClipboardList className="w-5 h-5" />, badge: 'bg-primary/20 text-primary' };
    case 'result': return { bg: 'bg-emerald-500/10', text: 'text-emerald-500', icon: <CheckCircle2 className="w-5 h-5" />, badge: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' };
    default: return { bg: 'bg-slate-500/10', text: 'text-slate-500 dark:text-slate-400', icon: <Info className="w-5 h-5" />, badge: 'bg-slate-500/20 text-slate-600 dark:text-slate-300' };
  }
};

const EventRow = ({ event, index }) => {
  const styles = getTypeStyles(event.type);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: index * 0.02, type: 'spring', stiffness: 400, damping: 25 }}
      className="mb-4"
    >
      <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 glass hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        <div className="flex items-center space-x-5 w-full">
          <div className={`p-3 rounded-xl ${styles.bg} ${styles.text} transition-colors`}>
            {styles.icon}
          </div>
          <div className="flex-grow">
            <h4 className="font-sans text-lg font-bold text-foreground mb-1">{event.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center font-sans text-sm font-semibold text-foreground/60 mt-1 space-y-1 sm:space-y-0 sm:space-x-2">
              <span className="bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">{event.start}</span>
              {event.end && (
                <>
                  <ChevronRight className="hidden sm:block w-4 h-4 opacity-50" />
                  <span className="bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">{event.end}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`hidden lg:block uppercase font-sans text-xs font-bold tracking-widest px-3 py-1.5 rounded-md mt-4 sm:mt-0 whitespace-nowrap ${styles.badge}`}>
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
    <div className="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16 min-h-screen relative z-10">
      
      {/* Header */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 shadow-inner">
          <CalendarDays className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Calendar.</span>
        </h1>
        <p className="font-sans text-lg text-foreground/70 font-medium tracking-wide">
          Comprehensive schedules, precisely mapped.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-sans text-sm font-semibold rounded-xl transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'glass hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground/70 hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div 
        layout
        className="min-h-[500px] max-w-4xl mx-auto"
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
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-primary rounded-full" />
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    For Term Students
                  </h2>
                </div>
                <div>
                  {sep2026Data.term.map((event, idx) => <EventRow key={`term-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-emerald-500 rounded-full" />
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    For Qualifier Students
                  </h2>
                </div>
                <div>
                  {sep2026Data.qualifier.map((event, idx) => <EventRow key={`qual-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-red-500 rounded-full" />
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    For DAD Qualifier
                  </h2>
                </div>
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
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 bg-primary rounded-full" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Term Students (Jan 2027)
                </h2>
              </div>
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
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 bg-primary rounded-full" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Term Students (May 2027)
                </h2>
              </div>
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
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1.5 bg-primary rounded-full" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Term Students (Sep 2027)
                </h2>
              </div>
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
