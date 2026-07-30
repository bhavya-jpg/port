import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" ref={ref} className="relative bg-[#050505] text-white py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Milestones</p>
          <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
            Awards & <br /><span className="text-white/50">recognition.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {achievementsData.map((item, i) => (
            <motion.div
              key={item.eventName + item.year}
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={item.linkTo}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#BA3E2B]/50 hover:bg-[#BA3E2B]/5 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-[#BA3E2B]/20 text-[#BA3E2B] flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-[#BA3E2B] transition-colors">
                      {item.eventName}
                    </h3>
                    <p className="text-sm font-medium text-white/50">
                      {item.result}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/40">
                  <span>{item.year}</span>
                  <ArrowUpRight size={16} className="text-[#BA3E2B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
