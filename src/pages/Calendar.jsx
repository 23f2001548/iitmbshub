import { useState, useEffect } from 'react';
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
    case 'exam': return { bg: 'bg-red-50 hover:bg-red-100', border: 'border-red-200', text: 'text-red-700', icon: <Edit3 className="w-5 h-5" /> };
    case 'registration': return { bg: 'bg-blue-50 hover:bg-blue-100', border: 'border-blue-200', text: 'text-blue-700', icon: <ClipboardList className="w-5 h-5" /> };
    case 'result': return { bg: 'bg-green-50 hover:bg-green-100', border: 'border-green-200', text: 'text-green-700', icon: <CheckCircle2 className="w-5 h-5" /> };
    default: return { bg: 'bg-gray-50 hover:bg-gray-100', border: 'border-gray-200', text: 'text-gray-700', icon: <Info className="w-5 h-5" /> };
  }
};

const EventRow = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = getTypeStyles(event.type);
  
  useEffect(() => {
    // Staggered fade in animation
    const timer = setTimeout(() => setIsVisible(true), 50 + (index * 30));
    return () => clearTimeout(timer);
  }, [index, event]);

  return (
    <div className={`transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
      <div className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mb-3 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md ${styles.bg} ${styles.border} hover:-translate-y-0.5 cursor-default`}>
        <div className="flex items-start space-x-4 w-full">
          <div className={`p-2.5 rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${styles.text}`}>
            {styles.icon}
          </div>
          <div className="flex-grow">
            <h4 className={`text-[1.05rem] font-bold group-hover:text-black transition-colors ${styles.text}`}>{event.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm font-medium text-gray-700 mt-1.5 space-y-1 sm:space-y-0 sm:space-x-2">
              <span className="bg-white px-2.5 py-1 rounded-md shadow-sm border border-black/5">{event.start}</span>
              {event.end && (
                <>
                  <ChevronRight className="hidden sm:block w-4 h-4 text-gray-400" />
                  <span className="bg-white px-2.5 py-1 rounded-md shadow-sm border border-black/5">{event.end}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`hidden lg:block uppercase text-[0.65rem] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full bg-white shadow-sm mt-4 sm:mt-0 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity ${styles.text}`}>
          {event.type}
        </div>
      </div>
    </div>
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
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header */}
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 bg-iitm-blue text-white rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <CalendarDays className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
          Detailed Academic Calendar
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Comprehensive schedules, precisely mapped from the official academic calendars.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-iitm-blue text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:scale-105'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 min-h-[500px]">
        {activeTab === 'sep2026' && (
          <div className="space-y-14 animate-fade-in">
            <section>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-purple-500">For Term Students</h2>
              <div className="space-y-1">
                {sep2026Data.term.map((event, idx) => <EventRow key={`term-${idx}`} event={event} index={idx} />)}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-blue-500">For Qualifier Students</h2>
              <div className="space-y-1">
                {sep2026Data.qualifier.map((event, idx) => <EventRow key={`qual-${idx}`} event={event} index={idx} />)}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-green-500">For DAD Qualifier Students</h2>
              <div className="space-y-1">
                {sep2026Data.dad.map((event, idx) => <EventRow key={`dad-${idx}`} event={event} index={idx} />)}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'jan2027' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-indigo-500">For Term Students (Jan 2027)</h2>
            <div className="space-y-1">
              {futureTermsData.jan2027.map((event, idx) => <EventRow key={`jan-${idx}`} event={event} index={idx} />)}
            </div>
          </div>
        )}

        {activeTab === 'may2027' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-emerald-500">For Term Students (May 2027)</h2>
            <div className="space-y-1">
              {futureTermsData.may2027.map((event, idx) => <EventRow key={`may-${idx}`} event={event} index={idx} />)}
            </div>
          </div>
        )}

        {activeTab === 'sep2027' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 pl-4 border-orange-500">For Term Students (Sep 2027)</h2>
            <div className="space-y-1">
              {futureTermsData.sep2027.map((event, idx) => <EventRow key={`sep27-${idx}`} event={event} index={idx} />)}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Calendar;
