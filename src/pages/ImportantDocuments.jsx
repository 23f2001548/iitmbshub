import { motion } from 'framer-motion';
import { FileText, ExternalLink, ShieldAlert, Award, HelpCircle, Archive, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const documents = [
  {
    title: 'Grading Scheme',
    description: 'The official grading scheme and policies. Understand exactly how your performance is evaluated.',
    url: 'https://docs.google.com/document/d/e/2PACX-1vT_FeqnTq0Br4sUaN7OYAmj1B9MwjchyTEed1Bh5FkZvi5NyIMeAvvkuttostVsJBPjZcs3SjjEfiho/pub',
    icon: FileText,
    accent: 'bg-primary/5 group-hover:bg-primary/10',
  },
  {
    title: 'Student Handbook',
    description: 'The comprehensive student handbook for rules, guidelines, and non-negotiable academic info.',
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub?urp=gmail_link#h.r8u12s2fi3t',
    icon: BookOpen,
    accent: 'bg-sky-500/5 group-hover:bg-sky-500/10',
  },
  {
    title: 'Course Booklet',
    description: 'Data Science Course Booklet with detailed syllabus and curriculum roadmap information.',
    url: 'https://drive.google.com/file/d/1BJSLtuYTZPOSP-cuoX9BEAopOKqpDevs/view',
    icon: BookOpen,
    accent: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
  },
  {
    title: 'Academic Malpractices',
    description: 'Official rules and disciplinary actions defining academic malpractice during exams and courses.',
    url: 'https://docs.google.com/document/d/e/2PACX-1vTt6ndMAI1-Y7Okm3HXmv0OFhFliUJPzkrUkQuX4InovMYewy_CWmFzmE4mUOAl_TjWlSrZNYWUOnG7/pub',
    icon: ShieldAlert,
    accent: 'bg-rose-500/5 group-hover:bg-rose-500/10',
  },
  {
    title: 'Non-Academic Malpractices',
    description: 'Official policies and code of conduct concerning non-academic misconduct in the community.',
    url: 'https://docs.google.com/document/d/e/2PACX-1vS3kG688sVzBil9uEFa9mXrnpuMAqE0LU1FpH1-TMDCHZF0XjC1265GmhVePdYvrc0_5qyq8OXwIZUb/pub',
    icon: ShieldAlert,
    accent: 'bg-amber-500/5 group-hover:bg-amber-500/10',
  },
  {
    title: 'Official Documents Archive',
    description: 'Archive of official degree announcements, circulars, certificates, and course resources.',
    url: 'https://study.iitm.ac.in/ds/archive.html',
    icon: Archive,
    accent: 'bg-purple-500/5 group-hover:bg-purple-500/10',
  },
  {
    title: 'How to Apply for Documents',
    description: 'Guide on requesting formal certificates, bonafide letters, transcripts, and credentials.',
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vQnn2cFan5BqTTAByCoqtue-0XSmFXQPT91bADDL_i33tHMh8C0ZJepvFBwze4E5zJbGiBMdQa59VeT/pub',
    icon: Award,
    accent: 'bg-blue-500/5 group-hover:bg-blue-500/10',
  },
  {
    title: 'How to Raise a Support Ticket',
    description: 'Detailed instructions on creating, tracking, and resolving queries via the Freshdesk support portal.',
    url: 'https://docs.google.com/document/d/e/2PACX-1vS7Vl-jl7usTsyXDES33uwCa57mD3fV031wb0KUVOkl3LxeNIcnGxRp_KSI09WLHtqD2zT1pnxEMYrZ/pub',
    icon: HelpCircle,
    accent: 'bg-teal-500/5 group-hover:bg-teal-500/10',
  },
  {
    title: 'Placement Policy',
    description: 'Official rules, eligibility requirements, and code of conduct for campus placement support.',
    url: 'https://docs.google.com/document/d/e/2PACX-1vRGX3FY8zu6F1QxjwBQjdFrb9DvxXWedfv1PHHAhgyXqkZ9D-EbGB4VuNSSv_NHpA/pub',
    icon: Briefcase,
    accent: 'bg-indigo-500/5 group-hover:bg-indigo-500/10',
  },
  {
    title: 'Apprenticeship Programme',
    description: 'Guidelines on earning up to 12 academic credits toward your degree through industry experience.',
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vQ_ZCTw1_PzVDBJ7u-wX18KUgl-IK1POIYRvyjAYsj_A-tS99K7ARRuNVKk0tp34B1woqclNxvY_0Lc/pub',
    icon: Briefcase,
    accent: 'bg-cyan-500/5 group-hover:bg-cyan-500/10',
  },
  {
    title: 'MTech Upgrade Guidelines',
    description: 'Official guidelines to upgrade into an MTech degree or exit with a Post Graduate Diploma.',
    url: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRrtiiHlurfHtFnJnDwtNZ0NHAci8PQ7pHsiX3V3SZKmbSmALDk4whCO5La6efs4MSmBLVTH2ZfGJNL/pub',
    icon: GraduationCap,
    accent: 'bg-pink-500/5 group-hover:bg-pink-500/10',
  },
];

const ImportantDocuments = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 shadow-inner">
          <FileText className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Documents.</span>
        </h1>
        <p className="font-sans text-lg text-foreground/70 font-medium tracking-wide">
          Access essential academic resources, policies, handbooks, and official guides without the fluff.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {documents.map((doc, idx) => {
          const Icon = doc.icon;
          return (
            <motion.a 
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              href={doc.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-6 flex flex-col items-start relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-10 -mt-10 transition-colors ${doc.accent}`} />
              <div className="flex items-center justify-between w-full mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                </div>
                <div className="p-2 bg-white/50 dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <p className="font-sans text-sm text-foreground/70 text-left leading-relaxed font-medium relative z-10 flex-grow">
                {doc.description}
              </p>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default ImportantDocuments;
