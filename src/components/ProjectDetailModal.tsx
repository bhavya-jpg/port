import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { ProjectData } from '../data/projects';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number;
  totalProjects: number;
}

export default function ProjectDetailModal({ project, isOpen, onClose, projectIndex, totalProjects }: ProjectDetailModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-12 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`relative w-full max-w-6xl max-h-full overflow-y-auto overscroll-contain rounded-[2rem] border border-white/10 shadow-2xl ${project.bgColorClass} flex flex-col`}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black transition-all backdrop-blur-md shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Top Image Placeholder */}
            <div className="relative w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[50vh] md:max-h-[60vh] object-contain opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-4xl z-10">
                <p className="text-[#BA3E2B] font-mono font-bold text-xs md:text-sm uppercase tracking-widest mb-3 drop-shadow-md">
                  Project {projectIndex + 1} of {totalProjects}
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight drop-shadow-xl">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* 2-Column Content */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 p-6 md:p-12 lg:p-16">
              
              {/* Left Sidebar: Meta Fields */}
              <div className="lg:w-1/3 shrink-0 flex flex-col gap-8">
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest font-mono text-[10px] mb-2">Year Accomplished</h4>
                    <p className="text-white/90 font-medium text-base leading-snug">{project.yearAccomplished}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest font-mono text-[10px] mb-2">Role / Position</h4>
                    <p className="text-white/90 font-medium text-base leading-snug">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest font-mono text-[10px] mb-2">Project Type</h4>
                    <p className="text-white/90 font-medium text-base leading-snug">{project.projectType}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest font-mono text-[10px] mb-2">Recognition</h4>
                    <p className="text-white/90 font-medium text-base leading-snug">{project.recognition}</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="flex flex-col gap-4 mt-4">
                  {project.publicationLink && (
                    <a href={project.publicationLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#BA3E2B] hover:text-white transition-all w-full text-center">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all w-full text-center">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Content: Story */}
              <div className="lg:w-2/3 flex flex-col gap-8">
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white leading-snug">
                  {project.tagline}
                </h3>
                <div className="h-[1px] w-12 bg-[#BA3E2B]" />
                <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-sans">
                  {project.story.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
