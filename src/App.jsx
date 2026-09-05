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
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0a0f1a] transition-colors duration-300">
        <Navbar />
        <main className="flex-grow w-full">
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
    </Router>
  );
}

export default App;
