const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} IITM BS Hub. Unofficial student community project.
          </p>
          <p className="text-gray-400 text-xs text-center">
            Built by students, for students. Not affiliated with IIT Madras.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
