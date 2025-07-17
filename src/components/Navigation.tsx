import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-montserrat font-bold text-zooOrange">
              $ZOO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-zooOrange transition-colors font-poppins"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tokenomics')}
                className="text-gray-700 hover:text-zooOrange transition-colors font-poppins"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 hover:text-zooOrange transition-colors font-poppins"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="text-gray-700 hover:text-zooOrange transition-colors font-poppins"
              >
                Community
              </button>
              <a
                href="https://t.me/zoorisecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zooOrange text-white px-6 py-2 rounded-full hover:bg-zooOrange-dark transition-colors font-montserrat font-semibold"
              >
                Join Pack
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-zooOrange"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-gray-700 hover:text-zooOrange font-poppins"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="block px-3 py-2 text-gray-700 hover:text-zooOrange font-poppins"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block px-3 py-2 text-gray-700 hover:text-zooOrange font-poppins"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block px-3 py-2 text-gray-700 hover:text-zooOrange font-poppins"
            >
              Community
            </button>
            <a
              href="https://t.me/zoorisecoin"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 my-2 bg-zooOrange text-white px-6 py-2 rounded-full text-center font-montserrat font-semibold"
            >
              Join Pack
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;