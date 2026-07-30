import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { whatIDoData } from '../../data/home';

export default function WhatIDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-10"
        >
          What I Do
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {whatIDoData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={item.link}
                className="group block h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-start mb-16">
                  <span className="text-white/40 font-serif italic text-2xl">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#BA3E2B]/10 flex items-center justify-center group-hover:scale-110 transition-transform text-[#BA3E2B]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
