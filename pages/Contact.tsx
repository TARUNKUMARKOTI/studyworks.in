import React, { useState } from 'react';
import { Loader2, Send, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const recipientEmail = 'studyworks.in@gmail.com';
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    try {
      // Try EmailJS if configured
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            to_email: recipientEmail,
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
            subject: subject,
          },
          emailjsPublicKey
        );
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setStatus('idle');
      } else {
        // Use mailto as primary method (works immediately, no setup needed)
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        // Show success message
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full py-24 px-8 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Section: Information */}
        <div className="flex flex-col justify-start pt-4">
          <h1 className="text-4xl font-medium text-academic-900 mb-2">Get in Touch</h1>
          <p className="text-xl text-academic-600 mb-8 font-light">For academic project guidance and support</p>
          
          <p className="text-lg text-academic-600 mb-12 leading-relaxed">
            We welcome students and faculty to connect with us for detailed project discussions, technical clarification, and comprehensive support services. Fill out the form, and we will get back to you shortly.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white">
          {status === 'error' ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-red-50 rounded-xl border border-red-100 p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-academic-900 mb-2">Error Sending Message</h3>
              <p className="text-lg text-academic-600 mb-4">
                {errorMessage || 'Failed to send message. Please try again.'}
              </p>
              <a 
                href="mailto:studyworks.in@gmail.com" 
                className="text-academic-700 hover:text-academic-900 underline"
              >
                Or contact us directly at studyworks.in@gmail.com
              </a>
            </div>
          ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-academic-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-academic-200 rounded-md focus:outline-none focus:border-academic-400 transition-colors text-academic-800"
                    />
                 </div>
                 <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-academic-700 mb-2">Last Name</label>
                     <input 
                      type="text" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-academic-200 rounded-md focus:outline-none focus:border-academic-400 transition-colors text-academic-800"
                    />
                 </div>
              </div>

              <div>
                 <label htmlFor="email" className="block text-sm font-medium text-academic-700 mb-2">Email</label>
                 <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-academic-200 rounded-md focus:outline-none focus:border-academic-400 transition-colors text-academic-800"
                 />
              </div>

              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-academic-700 mb-2">Message</label>
                 <textarea 
                    id="message" 
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-academic-200 rounded-md focus:outline-none focus:border-academic-400 transition-colors text-academic-800 resize-none"
                 ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center px-8 py-3 bg-academic-700 text-white font-medium rounded-md hover:bg-academic-800 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
           </form>
          )}
        </div>
      </div>
    </div>
  );
};