import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutTeaser() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif italic font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-[-0.02em] text-white mb-10">
            I believe that great engineering and cinematic storytelling share the same core: <span className="text-white/50">obsessive attention to detail and a clear vision.</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Whether I'm architecting scalable backends or grading footage in DaVinci Resolve, my focus is on crafting experiences that feel seamless and look beautiful.
          </p>

          <Link 
            to="/founder"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-[#BA3E2B] hover:text-white transition-colors"
          >
            Meet the person behind it
            <span className="text-xl leading-none">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
