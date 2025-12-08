import React from 'react';
import { Section } from '../components/Section';
import { BookOpen, GraduationCap, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Section>
        <div className="max-w-4xl mx-auto animate-fade-in-up text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-academic-900 mb-8">
            About Studyworks
          </h1>
          <div className="w-24 h-1.5 bg-academic-900 mx-auto mb-12 rounded-full"></div>
          
          <p className="text-2xl md:text-3xl text-academic-600 font-light leading-snug mb-16">
            We are an academic services provider dedicated to empowering students by bridging the gap between theoretical knowledge and practical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Card 1 */}
           <div className="bg-academic-50 p-10 rounded-xl hover:shadow-lg transition-all duration-300 group border border-academic-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-academic-800" />
              </div>
              <h3 className="text-2xl font-semibold text-academic-900 mb-4">Student Centric</h3>
              <p className="text-lg text-academic-600 leading-relaxed">
                We understand the academic pressure of final years. Our services are specifically tailored to meet university standards while ensuring you remain confident during evaluations.
              </p>
           </div>

           {/* Card 2 */}
           <div className="bg-academic-50 p-10 rounded-xl hover:shadow-lg transition-all duration-300 group border border-academic-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-academic-800" />
              </div>
              <h3 className="text-2xl font-semibold text-academic-900 mb-4">Concept Mastery</h3>
              <p className="text-lg text-academic-600 leading-relaxed">
                We do not just deliver code; we deliver understanding. Our primary goal is to ensure you fully grasp the architecture, logic, and implementation details of your project.
              </p>
           </div>

           {/* Card 3 */}
           <div className="bg-academic-50 p-10 rounded-xl hover:shadow-lg transition-all duration-300 group border border-academic-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-academic-800" />
              </div>
              <h3 className="text-2xl font-semibold text-academic-900 mb-4">Practical Execution</h3>
              <p className="text-lg text-academic-600 leading-relaxed">
                Moving beyond theory, we help you implement real-world applications across various domains including IoT, Machine Learning, and Full Stack Web Development.
              </p>
           </div>

           {/* Card 4 */}
           <div className="bg-academic-50 p-10 rounded-xl hover:shadow-lg transition-all duration-300 group border border-academic-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-academic-800" />
              </div>
              <h3 className="text-2xl font-semibold text-academic-900 mb-4">Academic Integrity</h3>
              <p className="text-lg text-academic-600 leading-relaxed">
                We adhere to strict academic guidelines for report writing and documentation, ensuring your submission is professional, plagiarism-free, and structurally sound.
              </p>
           </div>
        </div>
      </Section>
    </div>
  );
};