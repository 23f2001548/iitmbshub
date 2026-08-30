import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Grade Predictor', path: '/grade-predictor' },
    { name: 'Important Documents', path: '/documents' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-iitm-blue text-white shadow-lg border-b-4 border-iitm-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 font-bold text-2xl tracking-wider text-iitm-gold">
              IITM BS Hub
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                    location.pathname === link.path
                      ? 'bg-iitm-light-blue text-white'
                      : 'text-gray-200 hover:bg-iitm-light-blue hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button could go here in future */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
