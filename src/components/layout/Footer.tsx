import { Github, Phone, Mail, Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              <span className="text-primary-400">C</span>hangYeol
            </p>
            <p className="text-sm text-gray-500 mt-1">Frontend Developer</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-2">
            <a
              href="https://github.com/ckdduf138"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <Github size={16} />
              <span className="hidden sm:inline">ckdduf138</span>
            </a>
            <a
              href="https://solved.ac/profile/ckdduf138"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <Trophy size={16} />
              <span className="hidden sm:inline">solved.ac</span>
            </a>
            <a
              href="mailto:leecy0131@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">leecy0131@gmail.com</span>
            </a>
            <a
              href="tel:010-3801-2614"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">010-3801-2614</span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-600">
            © 2026 이창열. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
