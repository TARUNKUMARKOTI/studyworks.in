import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { ServiceItem, DomainItem, WhyUsItem } from '../types';
import { ArrowRight } from 'lucide-react';

const services: ServiceItem[] = [
  { title: "Academic Project Support", description: "Comprehensive guidance throughout the entire project lifecycle, from abstract to defense." },
  { title: "Project Execution", description: "Expert technical implementation and code development assistance tailored to your requirements." },
  { title: "Project Explanation", description: "In-depth walkthroughs of logic, architecture, and code flow to ensure complete understanding." },
  { title: "Project Documentation", description: "Professional report writing and thesis preparation adhering to strict academic standards." }
];

const domains: DomainItem[] = [
  { name: "Full Stack Web Applications" },
  { name: "Android Applications" },
  { name: "Machine Learning" },
  { name: "Internet of Things (IoT)" },
  { name: "VLSI" },
  { name: "Embedded Systems" },
  { name: "MATLAB" },
];

const whyUs: WhyUsItem[] = [
  { title: "Clear Project Guidance", description: "We provide structured pathways from ideation to completion." },
  { title: "Step-by-step Execution", description: "Projects are broken down into manageable milestones." },
  { title: "Concept Explanation", description: "Our focus is on ensuring you understand the underlying technology." },
  { title: "Academic Standards", description: "Documentation and implementation follow strict academic guidelines." },
  { title: "Student-Focused", description: "Services designed specifically for the needs of students and faculty." },
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-academic-50 px-6 overflow-hidden">
         {/* Subtle Background Element */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-academic-200 rounded-full blur-3xl mix-blend-multiply filter"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-academic-300 rounded-full blur-3xl mix-blend-multiply filter"></div>
         </div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-academic-900 mb-8 animate-fade-in-up leading-tight">
            Academic Project <br className="hidden md:block" />
            <span className="text-academic-600">Development & Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-academic-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100 font-light">
            Facilitating academic excellence by assisting students with comprehensive final-year and semester project execution.
          </p>
          <div className="animate-fade-in-up delay-200">
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-3 bg-academic-900 text-white px-10 py-4 text-lg font-medium rounded-full hover:bg-academic-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <Section grayBackground>
        <div className="mb-16 text-center animate-fade-in-up">
             <span className="text-academic-500 font-semibold uppercase tracking-widest text-sm mb-3 block">What we offer</span>
             <h2 className="text-3xl md:text-4xl font-medium text-academic-900 relative inline-block">
                Core Services
             </h2>
             <div className="w-20 h-1 bg-academic-300 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-10 border border-academic-200 hover:border-academic-400 hover:shadow-xl transition-all duration-300 rounded-sm">
              <h3 className="text-2xl font-semibold text-academic-800 mb-4 group-hover:text-academic-900 transition-colors">{service.title}</h3>
              <p className="text-lg text-academic-600 leading-relaxed group-hover:text-academic-700">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Domains */}
      <Section>
        <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-medium text-academic-900">Project Domains</h2>
            <div className="w-20 h-1 bg-academic-300 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div 
                key={index} 
                className="flex items-center px-6 py-4 border border-academic-200 bg-white text-academic-700 text-lg rounded-full cursor-default hover:bg-academic-50 hover:border-academic-400 hover:text-academic-900 transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 bg-academic-400 mr-4 rounded-full"></span>
              {domain.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section grayBackground>
        <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-medium text-academic-900">Why Choose Us</h2>
            <div className="w-20 h-1 bg-academic-300 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="space-y-10 max-w-4xl mx-auto">
          {whyUs.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline group border-b border-academic-200 pb-8 last:border-0 last:pb-0">
              <h3 className="text-xl md:text-2xl font-semibold text-academic-900 w-full md:w-1/3 mb-2 md:mb-0 group-hover:text-academic-700 transition-colors">{item.title}</h3>
              <p className="text-lg md:text-xl text-academic-600 w-full md:w-2/3 leading-relaxed group-hover:text-academic-800 transition-colors">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};