import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import { cinematographyData } from '../data/cinematography';

export default function Cinematography() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="cinema" ref={ref} className="relative bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Visual Resume</p>
            <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              Through the <br /><span className="text-white/50">lens.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-sm md:text-base leading-relaxed">
            When I'm not writing code, I'm painting with light. A selection of my work as a Director of Photography.
          </p>
        </div>

        <div className="relative border-t border-white/10 group/list">
          {cinematographyData.map((film, i) => {
            const isHovered = hoveredIndex === i;
            const isDimmed = hoveredIndex !== null && !isHovered;
            
            return (
              <motion.a
                key={film.title}
                href={film.link || '#'}
                target={film.link ? '_blank' : undefined}
                rel={film.link ? 'noreferrer' : undefined}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/10 transition-colors ${film.link ? 'cursor-pointer' : ''}`}
              >
                {/* Title & Role */}
                <div className={`flex-1 md:pr-12 relative z-20 transition-opacity duration-500 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}>
                  <h3 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight group-hover:text-[#BA3E2B] transition-colors">
                    {film.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/60">
                    <span className="text-[#BA3E2B]">{film.role}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden md:block" />
                    <span>{film.camera}</span>
                  </div>
                </div>
                
                {/* Year & Link */}
                <div className={`mt-6 md:mt-0 flex items-center gap-6 shrink-0 relative z-20 transition-opacity duration-500 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}>
                  <span className="font-serif italic text-2xl text-white/50">{film.year}</span>
                  {film.link && (
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                      <Play size={18} className="ml-1" fill="currentColor" />
                    </div>
                  )}
                </div>

                {/* Hover Image Reveal */}
                <div 
                  className={`absolute right-0 md:right-[15%] top-1/2 -translate-y-1/2 w-full md:w-[500px] aspect-[16/9] pointer-events-none transition-all duration-700 ease-[0.16,1,0.3,1] z-10 md:rounded-2xl overflow-hidden ${isHovered ? 'opacity-20 md:opacity-100 scale-100 md:translate-x-0' : 'opacity-0 scale-95 md:translate-x-8'}`}
                >
                  <img 
                    src={film.image} 
                    alt={film.title} 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
