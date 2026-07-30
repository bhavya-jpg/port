import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, ArrowUpRight } from 'lucide-react';
import { communitiesData } from '../data/communities';

export default function Communities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="communities" ref={ref} className="relative bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Leadership</p>
            <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              Building <br /><span className="text-white/50">communities.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-sm md:text-base leading-relaxed">
            I believe that great engineering happens collaboratively. Leading student communities has been one of my most rewarding experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communitiesData.map((item, i) => {
            const content = (
              <>
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                    <Users size={20} />
                  </div>
                  {item.link && (
                    <ArrowUpRight size={20} className="text-[#BA3E2B] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </div>
                <h3 className="font-sans font-bold text-2xl text-white mb-1 group-hover:text-[#BA3E2B] transition-colors">{item.organization}</h3>
                <p className="font-serif italic text-[#BA3E2B] text-lg mb-4">{item.role}</p>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{item.duration}</span>
                </div>
              </>
            );

            const className = `group flex flex-col p-8 rounded-[2rem] bg-black border border-white/5 transition-colors h-full ${item.link ? 'hover:border-[#BA3E2B]/50 hover:bg-[#BA3E2B]/5 cursor-pointer' : ''}`;

            return item.link ? (
              <motion.a
                key={item.organization}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={className}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={item.organization}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={className}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
