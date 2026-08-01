import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Github } from 'lucide-react';
import { githubData } from '../data/github';

interface LiveStats {
  repos: number | string;
  prs: number | string;
  followers: number | string;
}

export default function GitHubShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [stats, setStats] = useState<LiveStats>({ repos: '-', prs: '-', followers: '-' });

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch user data (repos, followers)
        const userRes = await fetch(`https://api.github.com/users/${githubData.username}`);
        const userData = await userRes.json();
        
        // Fetch PR count (search API)
        const prsRes = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${githubData.username}`);
        const prsData = await prsRes.json();

        setStats({
          repos: userData.public_repos ?? '-',
          prs: prsData.total_count ?? '-',
          followers: userData.followers ?? '-'
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    }
    
    fetchStats();
  }, []);

  const statCards = [
    { label: "Repositories", value: stats.repos },
    { label: "Pull Requests", value: stats.prs },
    { label: "Followers", value: stats.followers }
  ];

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

        {/* Live Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-serif italic font-medium text-white mb-2">{stat.value}</div>
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
      </div>
    </section>
  );
}
