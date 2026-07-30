import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { GitPullRequest, Star, GitFork, Github } from 'lucide-react';
import { githubData } from '../data/github';

export default function GitHubShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="opensource" ref={ref} className="relative bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Open Source</p>
            <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              Building in <br /><span className="text-white/50">public.</span>
            </h2>
          </div>
          <a href={`https://github.com/${githubData.username}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-[#BA3E2B]/10 hover:border-[#BA3E2B]/50 transition-colors px-6 py-3 rounded-full w-fit">
            <Github size={20} />
            <span className="font-medium">@{githubData.username}</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {githubData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="text-3xl md:text-4xl font-serif italic font-medium text-white mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-[2rem] bg-black border border-white/5 flex justify-center mb-16 overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <GitHubCalendar 
              username={githubData.username} 
              colorScheme="dark"
              theme={{
                light: ['#161b22', '#39d353'],
                dark: ['#16191E', '#3A1510', '#632219', '#8C2F22', '#BA3E2B']
              }}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pinned Repos */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Star size={18} className="text-[#BA3E2B]" /> Pinned Repositories
            </h3>
            <div className="flex flex-col gap-4">
              {githubData.pinnedRepos.map((repo, i) => (
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group block p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-[#BA3E2B] group-hover:text-white transition-colors">{repo.name}</h4>
                    <div className="flex gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Star size={14} /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">{repo.description}</p>
                  <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                    <span className="w-2 h-2 rounded-full bg-[#BA3E2B]" /> {repo.language}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Merged PRs */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <GitPullRequest size={18} className="text-[#BA3E2B]" /> Merged Pull Requests
            </h3>
            <div className="flex flex-col gap-4">
              {githubData.mergedPRs.map((pr, i) => (
                <motion.a
                  href={pr.url}
                  target="_blank"
                  rel="noreferrer"
                  key={pr.title}
                  initial={{ x: 20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group block p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">{pr.repo}</span>
                    <span className="text-xs text-white/30">{pr.date}</span>
                  </div>
                  <h4 className="font-medium text-white group-hover:text-[#BA3E2B] transition-colors leading-relaxed">
                    {pr.title}
                  </h4>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
