import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Star } from 'lucide-react';
import Nav from '../components/Nav';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const servicesList = [
  {
    id: "01",
    title: "Full-Stack / SaaS Development",
    shortDesc: "Complete web applications, backend APIs, and custom SaaS platforms built end-to-end.",
    bgColor: "bg-[#FFD7CC] hover:bg-[#FFC4B3]",
    textColor: "text-[#1A0A05]",
    subtextColor: "text-[#4A2015]",
    accentColor: "text-[#C23B22]"
  },
  {
    id: "02",
    title: "Website Development",
    shortDesc: "High-impact marketing sites, portfolios, and brand platforms built for speed and visual polish.",
    bgColor: "bg-[#FDE68A] hover:bg-[#FCD34D]",
    textColor: "text-[#1C1917]",
    subtextColor: "text-[#44403C]",
    accentColor: "text-[#B45309]"
  },
  {
    id: "03",
    title: "AI/ML Prototyping & AI SaaS",
    shortDesc: "LLM integrations, autonomous AI agents, and intelligent workflow automation built for production.",
    bgColor: "bg-[#A7F3D0] hover:bg-[#6EE7B7]",
    textColor: "text-[#064E3B]",
    subtextColor: "text-[#065F46]",
    accentColor: "text-[#047857]"
  }
];

const differentiators = [
  {
    number: "01",
    title: "Clear, Responsive Communication",
    description: "You're never left wondering where things stand. Direct daily or weekly updates with zero fluff."
  },
  {
    number: "02",
    title: "Genuine Project Investment",
    description: "I treat your product as if it were my own — genuine engineering care, not just billable hours."
  },
  {
    number: "03",
    title: "Straightforward Process",
    description: "No confusing technical jargon, no overselling capabilities, and no unexpected surprises at launch."
  },
  {
    number: "04",
    title: "Transparent Progress",
    description: "You'll always know exactly what is happening next, why it matters, and how it impacts milestones."
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Nav />
      
      <main className="pt-28 pb-24 md:pb-40 px-6 md:px-10 max-w-7xl mx-auto space-y-24">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-4 pt-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-mono font-bold">Services & Offerings</p>
          <h1 className="font-serif italic font-medium text-4xl sm:text-6xl md:text-7xl leading-tight">
            Crafting software that moves the needle.
          </h1>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans pt-2">
            Partnering with founders and product teams to build web platforms, AI products, and resilient digital tools.
          </p>
        </div>

        {/* 3 Core Solid Color Service Blocks Grid */}
        <div className="relative">
          
          {/* Decorative Hand-Crafted Doodle Stickers */}
          <div className="absolute -top-10 -right-4 z-20 hidden md:flex items-center gap-2 bg-[#BA3E2B] text-white px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider rotate-6 shadow-xl border border-white/20 select-none">
            <Sparkles size={14} />
            <span>100% Craft-Driven</span>
          </div>
          
          <div className="absolute -bottom-8 -left-6 z-20 hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider -rotate-6 shadow-xl border border-black/10 select-none">
            <Star size={14} fill="#000" />
            <span>Built To Scale</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {servicesList.map((service, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-8 md:p-10 rounded-lg transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[340px] ${service.bgColor} ${service.textColor} ${
                    isHovered ? 'shadow-2xl -translate-y-1' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest ${service.accentColor}`}>
                        {service.id}
                      </span>
                      <ArrowUpRight size={24} className={`transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-sans font-extrabold tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className={`text-sm sm:text-base font-medium leading-relaxed ${service.subtextColor}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider opacity-80">
                    <span>Inquire Project</span>
                    <span className="font-sans text-base">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </main>

      {/* Section 2: What Makes Working With Me Different (100% Full-Bleed Edge-to-Edge Taller Soft Sky Blue Section) */}
      <section className="w-full bg-[#BAE6FD] text-[#0F172A] py-20 sm:py-28 md:py-36 px-6 md:px-16 my-12 border-t border-b border-[#7DD3FC]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Bulkier Headline */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#0284C7] font-mono font-bold flex items-center gap-2">
                <Sparkles size={16} /> The Partnership Difference
              </p>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black text-[#0F172A] leading-[1.05] tracking-tight">
                What Makes Working With Me Different
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#1E293B] font-sans leading-relaxed pt-2">
                Engineering is more than just shipping lines of code — it's about building a reliable partnership and executing with momentum.
              </p>
            </div>

            {/* Right Numbered List with Larger Text */}
            <div className="lg:col-span-7 space-y-8">
              {differentiators.map((diff, dIdx) => (
                <div key={dIdx} className="pb-8 border-b border-[#7DD3FC] last:border-0 last:pb-0 space-y-3">
                  <div className="flex items-baseline gap-4">
                    <span className="text-base sm:text-xl font-mono text-[#0284C7] font-bold shrink-0">{diff.number}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">{diff.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#1E293B] font-sans leading-relaxed pl-9 sm:pl-10">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Currently Available For Status Bar */}
          <div className="pt-8 border-t border-[#7DD3FC] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/90 p-8 rounded-2xl border border-white shadow-lg">
            <div className="flex items-center gap-4">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <span className="text-sm sm:text-base font-mono text-[#0F172A] font-bold">
                Currently Available for Q3/Q4 Freelance Projects, SaaS Engineering & Consulting.
              </span>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#0284C7] transition-colors shrink-0 shadow-md"
            >
              <span>Check Availability</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
