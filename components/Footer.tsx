import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-academic-50 border-t border-academic-200 mt-auto pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info & Social */}
          <div className="col-span-1">
            <h3 className="text-2xl font-medium text-academic-900 mb-6" style={{ fontFamily: "'Days One', sans-serif", letterSpacing: '0.1em' }}>
              Studyworks
            </h3>
            <p className="text-lg text-academic-600 leading-relaxed mb-8">
              Academic project development and support across multiple engineering and technology domains.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5">
              {/* X (Twitter) */}
              <a href="#" aria-label="X" className="text-academic-400 hover:text-academic-900 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/studyworks.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-academic-400 hover:text-academic-900 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919849848682" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-academic-400 hover:text-academic-900 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@studyworksprojects" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-academic-400 hover:text-academic-900 transition-colors transform hover:scale-110 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:pl-12">
            <h4 className="text-base font-semibold text-academic-900 uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-lg text-academic-600">
              <li><Link to="/" className="hover:text-academic-900 transition-colors hover:translate-x-1 inline-block transform duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-academic-900 transition-colors hover:translate-x-1 inline-block transform duration-200">About</Link></li>
              <li><Link to="/contact" className="hover:text-academic-900 transition-colors hover:translate-x-1 inline-block transform duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold text-academic-900 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-5 text-lg text-academic-600">
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-academic-100 flex items-center justify-center mr-4 group-hover:bg-academic-200 transition-colors">
                  <Phone className="w-5 h-5 text-academic-600 group-hover:text-academic-800 transition-colors" />
                </div>
                <a 
                  href="https://wa.me/919849848682" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-academic-800 hover:text-academic-900 transition-colors cursor-pointer"
                >
                  9849848682
                </a>
              </li>
              <li className="flex items-center group">
                 <div className="w-10 h-10 rounded-full bg-academic-100 flex items-center justify-center mr-4 group-hover:bg-academic-200 transition-colors">
                   <Mail className="w-5 h-5 text-academic-600 group-hover:text-academic-800 transition-colors" />
                 </div>
                 <a 
                  href="mailto:studyworks.in@gmail.com" 
                  className="font-medium text-academic-800 hover:text-academic-900 transition-colors cursor-pointer"
                >
                  studyworks.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-academic-200 pt-10 text-center">
          <p className="text-base text-academic-500">
            &copy; {new Date().getFullYear()} <span style={{ fontFamily: "'Days One', sans-serif", letterSpacing: '0.1em' }}>Studyworks</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};