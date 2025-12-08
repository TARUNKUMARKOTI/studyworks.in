import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    const baseClasses = "relative text-academic-600 hover:text-academic-900 transition-colors duration-200 pb-1 inline-block";
    const activeClasses = "text-academic-900 font-semibold";
    
    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-academic-900 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out`;
    }
    
    return `${baseClasses} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-academic-900 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out`;
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-academic-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-academic-900 hover:opacity-80 transition-opacity">
          Studyworks
        </Link>
        <nav className="flex space-x-8 text-base">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};