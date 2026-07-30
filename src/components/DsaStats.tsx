import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, ArrowUpRight, Target } from 'lucide-react';
import { dsaData } from '../data/dsa';

export default function DsaStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dsa" ref={ref} className="relative bg-[#050505] text-white py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Problem Solving</p>
          <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
            Algorithmic <br /><span className="text-white/50">rigor.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dsaData.map((profile, i) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white group-hover:text-[#BA3E2B] transition-colors">{profile.platform}</h3>
                <ArrowUpRight size={28} className="text-white/40 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2"><Trophy size={14} /> Rating</p>
                  <p className="font-serif italic text-4xl text-white">{profile.rating}</p>
                  <p className="text-sm text-white/50 mt-1">Max: {profile.maxRating}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2"><Target size={14} /> Solved</p>
                  <p className="font-serif italic text-4xl text-white">{profile.problemsSolved}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {profile.badge && (
                  <span className="px-4 py-1.5 rounded-full bg-[#BA3E2B]/10 border border-[#BA3E2B]/30 text-xs font-bold uppercase tracking-wider text-[#BA3E2B]">
                    {profile.badge}
                  </span>
                )}
                {profile.globalRank && (
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70">
                    {profile.globalRank}
                  </span>
                )}
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider text-white/70 flex items-center gap-2">
                  @{profile.username}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
