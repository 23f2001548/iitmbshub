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
    case 'exam': return { bg: 'bg-[#FF2E00]', text: 'text-white', icon: <Edit3 className="w-5 h-5" /> };
    case 'registration': return { bg: 'bg-[#0047FF]', text: 'text-white', icon: <ClipboardList className="w-5 h-5" /> };
    case 'result': return { bg: 'bg-[#00E676]', text: 'text-black', icon: <CheckCircle2 className="w-5 h-5" /> };
    default: return { bg: 'bg-black dark:bg-white', text: 'text-white dark:text-black', icon: <Info className="w-5 h-5" /> };
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
      <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white/20 transition-all duration-150 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#FFF]">
        <div className="flex items-start space-x-6 w-full">
          <div className={`p-4 border-2 border-black dark:border-transparent ${styles.bg} ${styles.text}`}>
            {styles.icon}
          </div>
          <div className="flex-grow">
            <h4 className="font-display text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-2">{event.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center font-mono text-sm font-bold uppercase tracking-widest text-black/60 dark:text-white/60 mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="bg-[#F4F4F0] dark:bg-[#0B0B0B] px-3 py-1.5 border-2 border-black/10 dark:border-white/10">{event.start}</span>
              {event.end && (
                <>
                  <ChevronRight className="hidden sm:block w-4 h-4" />
                  <span className="bg-[#F4F4F0] dark:bg-[#0B0B0B] px-3 py-1.5 border-2 border-black/10 dark:border-white/10">{event.end}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`hidden lg:block uppercase font-mono text-xs font-black tracking-widest px-4 py-2 border-2 border-black dark:border-transparent mt-4 sm:mt-0 whitespace-nowrap ${styles.bg} ${styles.text}`}>
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
    <div className="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16 min-h-screen bg-[#F4F4F0] dark:bg-[#0B0B0B]">
      
      {/* Header */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-[#0047FF] text-white border-2 border-black mb-6">
          <CalendarDays className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl font-black text-black dark:text-white sm:text-6xl md:text-8xl tracking-tighter uppercase mb-4 leading-none">
          Academic <br/> Calendar.
        </h1>
        <p className="font-sans text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto font-bold tracking-wide">
          Comprehensive schedules, precisely mapped.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-mono text-sm uppercase font-bold tracking-widest border-2 transition-all duration-150 ${
              activeTab === tab.id
                ? 'bg-[#0047FF] text-white border-black dark:border-[#0047FF]'
                : 'bg-white dark:bg-[#1A1A1A] text-black dark:text-white border-black dark:border-white/20 hover:bg-[#0047FF] hover:text-white hover:border-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div 
        layout
        className="min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          {activeTab === 'sep2026' && (
            <motion.div 
              key="sep2026"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              <section>
                <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#0047FF] pl-6">
                  For Term Students
                </h2>
                <div>
                  {sep2026Data.term.map((event, idx) => <EventRow key={`term-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#00E676] pl-6">
                  For Qualifier Students
                </h2>
                <div>
                  {sep2026Data.qualifier.map((event, idx) => <EventRow key={`qual-${idx}`} event={event} index={idx} />)}
                </div>
              </section>

              <section>
                <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#FF2E00] pl-6">
                  For DAD Qualifier
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
              <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#0047FF] pl-6">
                Term Students (Jan 2027)
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
              <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#0047FF] pl-6">
                Term Students (May 2027)
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
              <h2 className="font-display text-4xl font-black uppercase text-black dark:text-white mb-10 flex items-center gap-6 border-l-8 border-[#0047FF] pl-6">
                Term Students (Sep 2027)
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
