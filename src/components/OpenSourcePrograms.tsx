import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitPullRequest, Github, Award } from 'lucide-react';
import { openSourcePrograms } from '../data/openSource';

export default function OpenSourcePrograms() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-[#050505] text-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4">
            Programs & Contributions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A timeline of major open-source initiatives I've been a part of, pushing code that impacts global communities. Even in these highly technical spaces, the aesthetic discipline I've gained through my cinematography practice influences how I document, present, and polish the user-facing impact of my contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {openSourcePrograms.map((program, i) => (
            <motion.article
              key={program.id}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-white/20 transition-colors flex flex-col"
            >
              {/* Header */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#BA3E2B] font-bold mb-3">
                  {program.organization}
                </p>
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-2 group-hover:text-[#BA3E2B] transition-colors">
                  {program.name}
                </h3>
                <p className="text-sm font-medium text-white/50 mb-1">
                  {program.role}
                </p>
                <p className="text-xs text-white/30">
                  {program.duration}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed mb-10 flex-grow">
                {program.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 mt-auto pt-6 border-t border-white/5">
                {program.links.prs && (
                  <a href={program.links.prs} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 text-white/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#BA3E2B] hover:text-white transition-colors">
                    <GitPullRequest size={14} /> PRs
                  </a>
                )}
                {program.links.repo && (
                  <a href={program.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 text-white/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    <Github size={14} /> Repo
                  </a>
                )}
                {program.links.certificate && (
                  <a href={program.links.certificate} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 text-white/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                    <Award size={14} /> Cert
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
