import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStackData } from '../data/techStack';

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Separate engineering vs creative
  const languages = techStackData.find(c => c.category === "Languages")?.skills || [];
  const frontend = techStackData.find(c => c.category === "Frontend")?.skills || [];
  const backend = techStackData.find(c => c.category === "Backend")?.skills || [];
  
  const databases = techStackData.find(c => c.category === "Databases")?.skills || [];
  const cloud = techStackData.find(c => c.category === "Cloud & DevOps")?.skills || [];
  const ai = techStackData.find(c => c.category === "AI & ML")?.skills || [];
  const devTools = techStackData.find(c => c.category === "Dev Tools")?.skills || [];
  
  const creative = techStackData.find(c => c.category === "Creative")?.skills || [];

  return (
    <section id="toolkit" ref={ref} className="relative bg-[#050505] text-white py-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Side-by-Side Grid: Left (Engineering) | Right (Creative Suite) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT ZONE: Engineering & Development (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-[#BA3E2B] font-mono font-bold">
                Engineering & Development
              </span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-white/60">Core Technical Stack</span>
            </div>

            {/* Combined Card 1: Core Stack (Languages + Frontend + Backend) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-2xl bg-[#FFE4DC] text-[#1A0A05] space-y-8 shadow-lg border-none"
            >
              <div className="flex items-center justify-between border-b border-black/15 pb-4">
                <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight">Languages & Core Frameworks</h3>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#C23B22] uppercase tracking-wider">01 / Code</span>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#66281A] mb-2.5">Languages</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#1A0A05]/85">
                    {languages.map((s, idx) => (
                      <span key={s} className="flex items-center gap-4">
                        <span>{s}</span>
                        {idx < languages.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#66281A] mb-2.5">Frontend & UI Systems</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#1A0A05]/85">
                    {frontend.map((s, idx) => (
                      <span key={s} className="flex items-center gap-4">
                        <span>{s}</span>
                        {idx < frontend.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#66281A] mb-2.5">Backend & APIs</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#1A0A05]/85">
                    {backend.map((s, idx) => (
                      <span key={s} className="flex items-center gap-4">
                        <span>{s}</span>
                        {idx < backend.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Combined Card 2: Infrastructure, Data & AI (Databases + Cloud + AI + Dev Tools) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-2xl bg-[#D1FAE5] text-[#064E3B] space-y-8 shadow-lg border-none"
            >
              <div className="flex items-center justify-between border-b border-black/15 pb-4">
                <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight">Data, Cloud & AI Systems</h3>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#047857] uppercase tracking-wider">02 / Infra</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#065F46] mb-2.5">Databases</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#064E3B]/85">
                    {databases.map((s, idx) => (
                      <span key={s} className="flex items-center gap-3">
                        <span>{s}</span>
                        {idx < databases.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#065F46] mb-2.5">Cloud & DevOps</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#064E3B]/85">
                    {cloud.map((s, idx) => (
                      <span key={s} className="flex items-center gap-3">
                        <span>{s}</span>
                        {idx < cloud.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#065F46] mb-2.5">AI & ML Pipelines</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#064E3B]/85">
                    {ai.map((s, idx) => (
                      <span key={s} className="flex items-center gap-3">
                        <span>{s}</span>
                        {idx < ai.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#065F46] mb-2.5">Developer Tools</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-sans font-medium text-[#064E3B]/85">
                    {devTools.map((s, idx) => (
                      <span key={s} className="flex items-center gap-3">
                        <span>{s}</span>
                        {idx < devTools.length - 1 && <span className="text-black/20 font-normal">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT ZONE: Creative Suite (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-[#BA3E2B] font-mono font-bold">
                Creative Suite
              </span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-white/60">Cinema & Visuals</span>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-2xl bg-[#CFFAFE] text-[#164E63] space-y-8 shadow-lg border-none flex-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-black/15 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight">Cinema & Design</h3>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0891B2] uppercase tracking-wider">03 / Visuals</span>
                </div>

                <p className="text-base font-sans leading-relaxed text-[#155E75]/90">
                  Professional post-production, color grading, motion graphics, and visual design tools used in cinematography work.
                </p>

                <div className="space-y-4 pt-2">
                  <p className="text-base sm:text-lg font-sans font-black uppercase tracking-wider text-[#155E75] mb-2">Creative Tools</p>
                  <div className="flex flex-col gap-3 text-sm sm:text-base md:text-lg font-sans font-medium text-[#164E63]/85">
                    {creative.map(s => (
                      <div key={s} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#0891B2]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/15 text-xs sm:text-sm font-mono font-bold text-[#0891B2] uppercase tracking-wider">
                Post-Production Ready
              </div>
            </motion.div>

          </div>

        </div>

        {/* Lightweight Scroll Indicator Cue */}
        <div className="pt-12 flex items-center justify-center text-white/40 text-xs font-mono uppercase tracking-widest gap-2 select-none animate-bounce">
          <span>Scroll to explore projects</span>
          <span>↓</span>
        </div>

      </div>
    </section>
  );
}
