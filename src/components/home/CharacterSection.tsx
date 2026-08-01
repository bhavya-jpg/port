import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CharacterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Vibrant Illustration */}
        <div className="w-full lg:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/10 bg-[#12141a]"
          >
            <img 
              src="/cinematic-dev.png" 
              alt="Developer Workspace & Cinema Camera" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient for pop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#BA3E2B]/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-blue-500/30 to-[#BA3E2B]/30 blur-3xl opacity-50 -z-10 rounded-full" />
        </div>

        {/* Right: Copy */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#BA3E2B] font-bold mb-6">
              <Sparkles size={14} className="text-amber-400" /> The Multidisciplinary Maker
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-[1.1]">
              Blending logic <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA3E2B] to-amber-500">imagination.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed"
          >
            <p>
              I believe the best products aren't just engineered—they are directed. My background in cinematography deeply influences how I write code and design interfaces, ensuring every frame (and every div) feels intentional.
            </p>
            <p>
              Whether I'm architecting scalable backends or color-grading a short film, the core philosophy remains the same: <span className="text-white font-medium italic">build things that move people.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
