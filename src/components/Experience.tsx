import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experienceData } from '../data/experience';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative bg-[#050505] text-white py-24 md:py-40 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Journey</p>
          <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
            Professional <br /><span className="text-white/50">experience.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-24">
            {experienceData.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-[3px] border-[#BA3E2B] -translate-x-1/2 mt-1.5 md:mt-2 z-10" />

                  {/* Date (Desktop) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'text-left pl-12 lg:pl-20' : 'text-right pr-12 lg:pr-20'} pt-1`}>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/40">{exp.duration}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'}`}>
                    <div className="md:hidden text-sm font-bold uppercase tracking-widest text-white/40 mb-3">
                      {exp.duration}
                    </div>
                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg md:text-xl text-[#BA3E2B] font-medium mb-4 italic font-serif">{exp.company}</h4>
                    <p className="text-white/70 text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map(highlight => (
                        <span key={highlight} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
