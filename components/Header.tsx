import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    const baseClasses = "relative text-academic-600 hover:text-academic-900 transition-colors duration-200 pb-1 inline-block";
    const activeClasses = "text-academic-900 font-semibold";
    
    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-academic-900 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out`;
    }
    
    return `${baseClasses} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-academic-900 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-academic-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-academic-900 hover:opacity-80 transition-opacity" style={{ fontFamily: "'Days One', sans-serif", letterSpacing: '0.1em' }}>
          Studyworks
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-academic-900 focus:ring-offset-2 rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-academic-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-academic-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-academic-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-academic-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={`${isActive('/')} text-lg`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`${isActive('/about')} text-lg`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`${isActive('/contact')} text-lg`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};