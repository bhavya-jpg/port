import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function LetsConnect() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-[#BA3E2B] text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif italic font-medium text-5xl md:text-7xl leading-tight mb-8">
            You've got a project. <br/> I've got the skills. <br/>
            Let's talk.
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-md">
            Whether it's a full-stack engineering role, an open-source collaboration, or a cinematic vision, I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/20 backdrop-blur-sm p-8 md:p-10 rounded-[2rem]"
        >
          <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-white/60">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-white/60">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-white/60">Project Type</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors appearance-none text-white/80">
                <option value="freelance" className="bg-[#BA3E2B]">Freelance Dev</option>
                <option value="internship" className="bg-[#BA3E2B]">Internship</option>
                <option value="opensource" className="bg-[#BA3E2B]">Open Source Collab</option>
                <option value="cinematography" className="bg-[#BA3E2B]">Cinematography</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-white/60">Message</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>

            <div className="pt-6 mt-auto">
              <Link to="/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                Send Inquiry <ArrowUpRight size={16} />
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
