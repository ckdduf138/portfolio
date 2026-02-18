import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const { scrollY } = useScrollProgress();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isScrolled = scrollY > 50;

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Active section detection
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-primary-500">C</span>hangYeol
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? activeSection === item.href.replace('#', '')
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : activeSection === item.href.replace('#', '')
                      ? 'text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"
                  />
                )}
              </button>
            ))}
            <a
              href="https://github.com/ckdduf138"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                isScrolled
                  ? 'border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              GitHub
            </a>
            <a
              href="https://solved.ac/profile/ckdduf138"
              target="_blank"
              rel="noopener noreferrer"
              title="solved.ac 프로필"
              className={`hidden lg:inline-flex ml-1 px-3 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                isScrolled
                  ? 'border-gray-200 text-gray-600 hover:bg-gray-100'
                  : 'border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              solved.ac
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                className="block h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://github.com/ckdduf138"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center px-4 py-3 text-sm font-semibold text-white bg-primary-500 rounded-xl hover:bg-primary-600 transition-colors duration-200"
              >
                GitHub 방문
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
