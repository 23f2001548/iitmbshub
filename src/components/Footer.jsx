const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center font-medium">
            &copy; {new Date().getFullYear()} IITM BS Hub. Unofficial student community project.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs text-center max-w-md">
            Built by students, for students. Not affiliated with IIT Madras.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
