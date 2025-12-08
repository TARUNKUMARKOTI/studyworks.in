import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  grayBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", grayBackground = false }) => {
  return (
    <section className={`w-full py-24 md:py-32 px-8 ${grayBackground ? 'bg-academic-100' : 'bg-white'} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};