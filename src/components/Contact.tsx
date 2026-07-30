import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    // Uses the Web3Forms Access Key from your environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing!");
      setFormStatus('error');
      return;
    }
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="relative bg-[#0a0a0a] text-white pt-32 pb-12 md:pt-36 md:pb-16 px-6 md:px-10 w-full min-h-screen flex flex-col">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-stretch flex-grow">
        
        {/* Left Column: Heading and Image */}
        <div className="w-full h-full flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans font-bold text-5xl md:text-7xl lg:text-[5rem] tracking-tight mb-6"
          >
            Get in touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed mb-10"
          >
            Whether you're exploring design services for your brand or just curious, I'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex-grow relative overflow-hidden min-h-[400px] lg:min-h-0"
          >
            {/* The SVG Gate image */}
            <img 
              src="/gate.svg" 
              alt="Archway Gate" 
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            />
          </motion.div>
        </div>

        {/* Right Column: Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-full bg-[#111111] border border-white/5 p-8 md:p-12 lg:p-14 rounded-[2rem] shadow-2xl flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <input type="hidden" name="subject" value="New Project Inquiry from Portfolio!" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70">Name*</label>
                <input required type="text" id="name" name="name" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">Email*</label>
                <input required type="email" id="email" name="email" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="brand" className="text-sm font-medium text-white/70">Brand's Name</label>
                <input type="text" id="brand" name="brand" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-white/70">Website / Account Link</label>
                <input type="text" id="website" name="website" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-white/70">Budget Estimate</label>
                <input type="text" id="budget" name="budget" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="services" className="text-sm font-medium text-white/70">Services Required</label>
                <select id="services" name="services" className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="Website Design">Website Design</option>
                  <option value="AI/SaaS Design">AI/SaaS Design</option>
                  <option value="Both">Both</option>
                  <option value="Other">Other / Not sure</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="brief" className="text-sm font-medium text-white/70">Project Brief*</label>
              <textarea required id="brief" name="brief" rows={4} className="w-full bg-[#18181B] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-white/40 focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <p className="text-xs text-[#71717A] leading-relaxed mt-4">
              By submitting this form you agree to the processing of your personal data to be contacted regarding your inquiry.
            </p>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="mt-6 bg-[#F4F1DC] text-black py-3 px-8 rounded-md font-semibold hover:bg-white transition-colors tracking-wide disabled:opacity-50"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Contact Me'}
            </button>

            {formStatus === 'success' && (
              <p className="text-green-500 text-sm mt-4">Message sent successfully! I'll get back to you soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 text-sm mt-4">Oops! Something went wrong. Please try again or email directly.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
