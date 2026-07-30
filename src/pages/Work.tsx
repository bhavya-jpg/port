import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import TechStack from '../components/TechStack';
import ContactCTA from '../components/ContactCTA';
import { projectsData, ProjectData } from '../data/projects';
import ProjectDetailModal from '../components/ProjectDetailModal';

type FilterType = 'engineering' | 'cinematography';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('engineering');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProjects = projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#050505] min-h-screen">
      <Nav />
      <main className="pt-28 pb-24 md:pb-40 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto space-y-20">
          
          {/* 1. Single Page-Level Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#BA3E2B] font-mono font-bold">WORK & TOOLKIT</p>
              <h1 className="font-serif italic font-medium text-4xl sm:text-6xl text-white">
                The Stack & The Projects.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans font-medium max-w-2xl pt-1 leading-relaxed">
                The languages, frameworks, and infrastructure I use to architect scalable software systems — alongside the cinematic tools I use to grade, edit, and bring visual narratives to life.
              </p>
            </div>

            {/* Plain Anchor Link Sub-Nav (Enlarged) */}
            <div className="flex items-center gap-4 text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white/80 select-none self-start md:self-auto pb-1">
              <button
                onClick={() => scrollToSection('toolkit')}
                className="hover:text-white text-[#BA3E2B] hover:underline underline-offset-4 transition-colors cursor-pointer"
              >
                Toolkit ↓
              </button>
              <span className="text-white/30">•</span>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-white text-[#BA3E2B] hover:underline underline-offset-4 transition-colors cursor-pointer"
              >
                Selected Work ↓
              </button>
            </div>
          </div>

          {/* 2. Toolkit Section (No Duplicate Headline Inside) */}
          <div id="toolkit">
            <TechStack />
          </div>

          {/* 3. Single Simple Transition Line (No Cards or Extra Labels) */}
          <div className="py-4 border-t border-b border-white/10">
            <p className="text-base sm:text-xl font-serif italic text-white/90">
              Here's what I've built with it.
            </p>
          </div>

          {/* 4. Single Projects Showcase Header & Filter Bar */}
          <div id="projects" className="pt-4">
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between flex-wrap gap-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-mono font-bold">SELECTED WORKS</p>
                <h2 className="font-serif italic font-medium text-4xl sm:text-6xl md:text-7xl leading-tight text-white">
                  Projects that solve real problems.
                </h2>
              </div>

              {/* Filter Bar (Only Engineering & Cinematography) */}
              <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
                <button
                  onClick={() => setActiveFilter('engineering')}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeFilter === 'engineering' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  Engineering
                </button>
                <button
                  onClick={() => setActiveFilter('cinematography')}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeFilter === 'cinematography' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  Cinematography
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {filteredProjects.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative ${p.bgColorClass} rounded-[2rem] overflow-hidden border border-white/5 flex flex-col cursor-pointer hover:border-white/20 hover:shadow-2xl hover:shadow-[#BA3E2B]/10 hover:-translate-y-2 transition-all duration-500`}
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="aspect-[16/10] relative overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute w-[90%] h-[90%] rounded-xl object-contain opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-6 left-6 text-sm font-medium text-white/50">{p.id}</span>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/40">
                    <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">{p.title}</h3>
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
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-[#BA3E2B] group-hover:text-white transition-colors">
                        Explore Case Study <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}

              {filteredProjects.length === 0 && (
                <div className="col-span-1 lg:col-span-2 py-20 text-center">
                  <p className="text-white/50 text-xl font-serif italic">Projects coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <ContactCTA />
      </main>

      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        projectIndex={selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : 0}
        totalProjects={filteredProjects.length}
      />
    </div>
  );
}
