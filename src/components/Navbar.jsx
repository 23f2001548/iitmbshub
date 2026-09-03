import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Grade Predictor', path: '/grade-predictor' },
    { name: 'Documents', path: '/documents' },
    { name: 'About', path: '/about' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F4F4F0] dark:bg-[#0B0B0B] text-black dark:text-white border-b-2 border-black dark:border-white/20 transition-colors duration-150">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" onClick={closeMenu} className="flex-shrink-0 font-display font-black text-2xl md:text-3xl tracking-tighter hover:text-[#0047FF] transition-colors">
              IITM BS HUB
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-mono text-sm uppercase tracking-widest font-bold transition-colors duration-150 ${
                      isActive
                        ? 'text-[#0047FF]'
                        : 'hover:text-[#0047FF]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#0047FF]"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="ml-8 w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white/20 bg-white dark:bg-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#0047FF] transition-all duration-150"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ rotate: -90, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white/20 bg-white dark:bg-black active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150"
            >
              {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white/20 bg-white dark:bg-black active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#F4F4F0] dark:bg-[#0B0B0B] border-b-2 border-black dark:border-white/20"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`block font-display text-2xl font-black uppercase tracking-tighter transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#0047FF]'
                        : 'text-black dark:text-white hover:text-[#0047FF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
