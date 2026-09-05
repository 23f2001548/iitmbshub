import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import GradePredictor from './pages/GradePredictor';
import CGPACalculator from './pages/CGPACalculator';
import ImportantDocuments from './pages/ImportantDocuments';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative overflow-hidden transition-colors duration-300 bg-background text-foreground">
        {/* Decorative background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/20 dark:bg-orange-600/20 blur-[100px] animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}} />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-sky-400/20 dark:bg-sky-600/20 blur-[100px] animate-pulse" style={{animationDuration: '12s', animationDelay: '1s'}} />
        </div>

        <div className="z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/grade-predictor" element={<GradePredictor />} />
              <Route path="/cgpa-calculator" element={<CGPACalculator />} />
              <Route path="/documents" element={<ImportantDocuments />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
