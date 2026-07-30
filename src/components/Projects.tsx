import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData, ProjectData } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Home page only shows first 4 engineering projects (for example) or all of them. Let's just show all for now.
  const engineeringProjects = projectsData.filter(p => p.category === 'engineering');

  return (
    <section id="projects" ref={ref} className="relative bg-[#050505] text-white py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Selected Works</p>
            <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              Projects that<br />solve real <br /><span className="text-white/50">problems.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {engineeringProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${p.bgColorClass} rounded-[2rem] overflow-hidden border border-white/5 flex flex-col cursor-pointer hover:border-white/20 hover:shadow-2xl hover:shadow-[#BA3E2B]/10 hover:-translate-y-2 transition-all duration-500`}
              onClick={() => setSelectedProject(p)}
            >
              {/* Image Container with Parallax */}
              <div className="aspect-[16/10] relative overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-[90%] h-[90%] rounded-xl object-contain opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                
                {/* Number */}
                <span className="absolute top-6 left-6 text-sm font-medium text-white/50">{p.id}</span>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/40">
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">{p.title}</h3>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/70 text-base leading-relaxed mb-10 flex-grow line-clamp-3">
                  {p.tagline}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-[#BA3E2B] group-hover:text-white transition-colors">
                    Explore Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        projectIndex={selectedProject ? engineeringProjects.findIndex(p => p.id === selectedProject.id) : 0}
        totalProjects={engineeringProjects.length}
      />
    </section>
  );
}
