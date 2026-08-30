import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Grade Predictor', path: '/grade-predictor' },
    { name: 'Important Documents', path: '/documents' },
    { name: 'About', path: '/about' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-iitm-blue/95 dark:bg-gray-900/95 backdrop-blur-md text-white shadow-lg border-b-4 border-iitm-gold dark:border-iitm-gold/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex-shrink-0 font-extrabold text-2xl tracking-wider text-iitm-gold hover:text-white transition-colors duration-200">
              IITM BS Hub
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
                    location.pathname === link.path
                      ? 'bg-iitm-light-blue dark:bg-gray-800 text-white shadow-sm'
                      : 'text-gray-200 dark:text-gray-300 hover:bg-iitm-light-blue/50 dark:hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-iitm-gold"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-iitm-gold" /> : <Moon className="w-5 h-5 text-gray-200" />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-iitm-gold" /> : <Moon className="w-5 h-5 text-gray-200" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-iitm-blue dark:bg-gray-900 border-t border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-iitm-light-blue dark:bg-gray-800 text-white'
                  : 'text-gray-200 dark:text-gray-300 hover:bg-iitm-light-blue/50 dark:hover:bg-gray-800 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
