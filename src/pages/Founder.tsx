import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles, Terminal, Camera, ShieldAlert, Layers } from 'lucide-react';
import Nav from '../components/Nav';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

import { founderIntroData } from '../data/founderIntro';
import { journeyMilestones } from '../data/journey';
import { processSteps, processQuote } from '../data/process';
import { codeContributions, filmContributions } from '../data/twoLives';
import { setbacksList } from '../data/whatDidntWork';

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------
// Section 1: Intro Component
// ----------------------------------------------------
function FounderIntro() {
  return (
    <section className="relative w-full py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Photo Container with Duotone Styling */}
        <div className="lg:col-span-5 relative">
          {/* Sticky Note / Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -top-6 -left-4 z-20 bg-[#BA3E2B] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl shadow-lg border border-white/20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>{founderIntroData.greetingCallout}</span>
          </motion.div>

          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#12141a] group">
            <img
              src={founderIntroData.photoUrl}
              alt="Bhavya - Founder"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <p className="text-xs uppercase tracking-widest text-white/50 font-mono">Bhavya • Engineer & Filmmaker</p>
              <p className="text-sm text-white/80 font-medium">Founder at KinetixVerse</p>
            </div>
          </div>
        </div>

        {/* Intro Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#BA3E2B] font-bold">
            <span>About The Founder</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
              {founderIntroData.headlineOptions[0]}
            </h1>
          </div>

          <div className="space-y-4 text-base md:text-lg text-white/70 leading-relaxed font-sans max-w-2xl">
            {founderIntroData.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-white/50">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">📍 Delhi / India</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">⚡ React • Node • Python • DaVinci</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// Section 2: Journey Roadmap (Serpentine Tube Path with Camera Marker)
// ----------------------------------------------------
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function JourneyRoadmap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const basePathRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  // The pinned serpentine road relies on percentage-positioned cards that only
  // line up with the SVG at desktop aspect ratios — phones get a vertical timeline.
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // 3-Tier Serpentine Road SVG Path (viewBox="0 0 1000 800")
  // Row 1: y=150, Row 2: y=410, Row 3: y=670 with cubic bezier U-turns
  const pathD = "M 100 150 L 820 150 C 950 150, 950 410, 820 410 L 180 410 C 50 410, 50 670, 180 670 L 900 670";

  useIsomorphicLayoutEffect(() => {
    if (!isDesktop) return;
    if (!sectionRef.current || !progressPathRef.current || !basePathRef.current || !markerRef.current) return;

    const path = basePathRef.current;
    const pathLength = path.getTotalLength();

    // Set strokeDasharray and initial strokeDashoffset for progress reveal
    gsap.set(progressPathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Set initial marker position to start of path in SVG viewBox coordinates
    const startPoint = path.getPointAtLength(0);
    if (markerRef.current) {
      markerRef.current.setAttribute('transform', `translate(${startPoint.x}, ${startPoint.y})`);
    }

    let ctx: gsap.Context | null = null;

    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=280%', // Pin for smooth scroll through full serpentine path
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          const drawLength = pathLength * progress;

          // 1. Color reveal: update progress path strokeDashoffset (Sky Blue -> Soft Rose Pink)
          if (progressPathRef.current) {
            progressPathRef.current.style.strokeDashoffset = `${pathLength - drawLength}px`;
          }

          // 2. Move Camera SVG marker along exact center of SVG path in internal SVG viewBox coordinates
          if (markerRef.current && path) {
            const point = path.getPointAtLength(drawLength);
            markerRef.current.setAttribute('transform', `translate(${point.x}, ${point.y})`);
          }
        },
      });
    }, sectionRef);

    return () => {
      if (ctx) ctx.revert();
    };
  }, [isDesktop]);

  // 9 Checkpoint milestones mapped with ZERO overlap coordinates (positioned strictly outside tube stroke area)
  // Row 1 tube is y=118..182. Top text is top: '2%' (y≈16), Bottom text is top: '26%' (y≈208).
  // Row 2 tube is y=378..442. Top text is top: '34%' (y≈272), Bottom text is top: '58%' (y≈464).
  // Row 3 tube is y=638..702. Top text is top: '66%' (y≈528), Bottom text is top: '91%' (y≈728).
  const milestonePositions = [
    // Row 1 (x: 100 -> 820)
    { ...journeyMilestones[0], left: '15%', top: '2%', revealAt: 0.03 },
    { ...journeyMilestones[1], left: '38%', top: '2%', revealAt: 0.10 },
    { ...journeyMilestones[2], left: '61%', top: '2%', revealAt: 0.18 },
    { ...journeyMilestones[3], left: '84%', top: '2%', revealAt: 0.26 },
    // Row 2 (x: 820 -> 180)
    { ...journeyMilestones[4], left: '84%', top: '58%', revealAt: 0.38 },
    { ...journeyMilestones[5], left: '61%', top: '58%', revealAt: 0.46 },
    { ...journeyMilestones[6], left: '38%', top: '58%', revealAt: 0.54 },
    { ...journeyMilestones[7], left: '15%', top: '58%', revealAt: 0.62 },
    // Row 3 (x: 180 -> 900)
    { ...journeyMilestones[8], left: '18%', top: '91%', revealAt: 0.74 },
    { ...journeyMilestones[9], left: '50%', top: '91%', revealAt: 0.85 },
    { ...journeyMilestones[10], left: '82%', top: '91%', revealAt: 0.96 },
  ];

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#050608] border-t border-b border-white/10 py-10 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-2">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#FF6B8B] font-mono font-bold">The Evolution</p>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-wide">Journey Roadmap</h2>
          <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
            {isDesktop
              ? 'Scroll to travel the winding path. Checkpoints reveal instantly as the camera arrives.'
              : 'The milestones that shaped the dual path, year by year.'}
          </p>
        </div>

        {/* Mobile: simple vertical timeline (no pin, no absolute positioning) */}
        {!isDesktop && (
          <div className="relative pl-9 mt-10 mb-4 max-w-md mx-auto">
            <div className="absolute left-[9px] top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-[#38BDF8] via-[#A78BFA] to-[#F43F5E]" />
            <div className="space-y-7">
              {journeyMilestones.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-2 w-5 h-5 rounded-full bg-[#F43F5E] border-2 border-white shadow-lg" />
                  <div className="bg-[#090b10]/90 px-4 py-3.5 rounded-xl border border-white/15 shadow-xl space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F43F5E]/20 border border-[#F43F5E]/40 text-[#FF6B8B] font-mono font-black text-[11px] tracking-wider">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        {m.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-extrabold text-[#F8FAFC] leading-snug">{m.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Serpentine Tube Road Container (desktop only) */}
        {isDesktop && (
        <div className="relative w-full max-w-5xl mx-auto h-[550px] sm:h-[650px] md:h-[750px] my-2">
          
          {/* SVG Serpentine Tube Road */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* 1. Base Tube Road (Untraveled - Vibrant Sky Blue #38BDF8) */}
            <path
              ref={basePathRef}
              d={pathD}
              fill="none"
              stroke="#38BDF8"
              strokeWidth="64"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 2. Progress Tube Road (Traveled - Soft Rose Pink #F43F5E) */}
            <path
              ref={progressPathRef}
              d={pathD}
              fill="none"
              stroke="#F43F5E"
              strokeWidth="64"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 3. Center Dashed Road Line */}
            <path
              d={pathD}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeDasharray="12 10"
              strokeLinecap="round"
            />

            {/* 4. Traveling Camera SVG Marker */}
            <g ref={markerRef} className="transition-transform pointer-events-none">
              {/* Outer Badge */}
              <circle r="24" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="3" className="shadow-2xl" />
              {/* Camera Icon */}
              <g transform="translate(-12, -12)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </g>
            </g>
          </svg>

          {/* 9 Checkpoint Milestones (Positioned ZERO overlap outside tube, reveals instantly when camera arrives) */}
          {milestonePositions.map((m) => {
            const isRevealed = scrollProgress >= m.revealAt;
            return (
              <div
                key={m.id}
                className={`absolute transform -translate-x-1/2 max-w-[200px] sm:max-w-[230px] z-20 pointer-events-none transition-all duration-300 ease-out ${
                  isRevealed
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-75 translate-y-3'
                }`}
                style={{
                  left: m.left,
                  top: m.top,
                }}
              >
                <div className="text-center space-y-1 bg-[#090b10]/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15 shadow-2xl">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F43F5E]/20 border border-[#F43F5E]/40 text-[#FF6B8B] font-mono font-black text-[11px] tracking-wider shadow-sm">
                      {m.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#F8FAFC] leading-snug drop-shadow">
                    {m.title}
                  </h4>
                </div>
              </div>
            );
          })}

        </div>
        )}

      </div>
    </section>
  );
}

// ----------------------------------------------------
// Section 3: Process Accordion Component (True Cream Editorial Module)
// ----------------------------------------------------
function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-20 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Contained Light Cream Editorial Panel Module */}
      <div className="w-full rounded-[2rem] bg-[#FAF8F5] text-[#111111] p-8 md:p-14 border border-[#E8E2D8] shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Honest B&W Photo Slot + Pull-Quote Sub-Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            
            {/* Honest B&W Photo Placeholder Slot */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EAE6DF] border border-[#DDD7CC] shadow-sm group select-none">
              <img 
                src="/founder-photo-2.jpg" 
                alt="Founder Portrait" 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            {/* Pull-Quote Sub-Card */}
            <div className="p-6 rounded-xl bg-[#F2EDE4] border border-[#E2DBD0] space-y-3 shadow-xs">
              <div className="text-3xl font-serif text-[#BA3E2B] font-bold leading-none">“</div>
              <p className="text-sm md:text-base text-[#1A1A1A] font-medium italic leading-relaxed">
                {processQuote}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#777066] pt-2 font-mono font-bold border-t border-[#E2DBD0]">
                — Founder's Principle
              </p>
            </div>
          </div>

          {/* Right Column: Restyled 5-Step Accordion on Cream */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Section Heading inside Light Cream Panel */}
            <div className="space-y-2 mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-mono font-bold">The Methodology</p>
              <h2 className="text-3xl md:text-5xl font-serif italic text-[#111111] font-bold leading-tight">
                How I Think & Build
              </h2>
            </div>

            {/* 5-Step Accordion List */}
            <div className="space-y-4">
              {processSteps.map((step, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={step.number}
                    className={`rounded-xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-2 border-[#BA3E2B] shadow-md shadow-[#BA3E2B]/5'
                        : 'bg-[#F3EFE8]/70 border border-[#E4DDD2] hover:bg-[#EEE9E0]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-xl md:text-2xl font-mono text-[#BA3E2B] font-black shrink-0">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="text-lg md:text-xl font-sans font-bold text-[#111111] tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-xs font-semibold text-[#666055] mt-0.5">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                        isOpen ? 'bg-[#BA3E2B] text-white rotate-180' : 'bg-[#E5DFD5] text-[#111111]'
                      }`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="px-6 pb-6 pt-3 text-sm text-[#27272A] space-y-2 border-t border-[#EAE4DA]"
                        >
                          <ul className="list-disc list-inside space-y-2 font-medium leading-relaxed marker:text-[#BA3E2B]">
                            {step.details.map((detail, dIdx) => (
                              <li key={dIdx}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// Section 4: The Differentiator Component
// ----------------------------------------------------
function Differentiator() {
  return (
    <section className="relative w-full py-24 bg-[#060608] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold">Behind The Scenes</p>
          <h2 className="text-3xl md:text-5xl font-serif italic text-white">The Differentiator</h2>
          <p className="text-sm text-white/50">Unfiltered proof of the dual path and the honest setbacks along the way.</p>
        </div>

        {/* Part A: The Two Lives Split Heatmap */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#0c0e14] border border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#BA3E2B]" />
                <span>The Two Lives: Split Contribution Calendar</span>
              </h3>
              <p className="text-xs text-white/50 mt-1">Comparing software engineering commits with cinema shoot logs across the year.</p>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                <span className="text-white/70">Code Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#BA3E2B] inline-block" />
                <span className="text-white/70">Shoot Days</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grid 1: Code */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                <span className="flex items-center gap-1.5"><Terminal size={14} className="text-emerald-400" /> Engineering Commits</span>
                {/* Note: This static number should eventually switch to the live API integration once extended. */}
                <span>~379 Commits / Year</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center bg-black/40 p-4 rounded-xl border border-white/5">
                {codeContributions.map((item, idx) => {
                  const colors = ['bg-white/5', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400'];
                  return (
                    <div
                      key={idx}
                      title={`${item.date}: ${item.count} commits`}
                      className={`w-3.5 h-3.5 rounded-sm ${colors[item.level]}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Grid 2: Film */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                <span className="flex items-center gap-1.5"><Camera size={14} className="text-[#BA3E2B]" /> Film & Production Sessions</span>
                <span>280 Production Hours</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center bg-black/40 p-4 rounded-xl border border-white/5">
                {filmContributions.map((item, idx) => {
                  const colors = ['bg-white/5', 'bg-red-950', 'bg-amber-900', 'bg-amber-600', 'bg-[#BA3E2B]'];
                  return (
                    <div
                      key={idx}
                      title={`${item.date}: ${item.count} production hours`}
                      className={`w-3.5 h-3.5 rounded-sm ${colors[item.level]}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Part B: What Didn't Work */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-[#BA3E2B]" />
            <h3 className="text-2xl font-bold text-white">What Didn't Work (Honest Setbacks)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setbacksList.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{item.context}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs font-medium text-[#BA3E2B] leading-normal">{item.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------
// Section 5: Main Founder Page Layout Component
// ----------------------------------------------------
export default function Founder() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24">
      <Nav />
      
      {/* Section 1: Intro */}
      <FounderIntro />

      {/* Section 2: Journey Roadmap */}
      <JourneyRoadmap />

      {/* Section 3: Process Accordion */}
      <ProcessAccordion />

      {/* Section 4: The Differentiator (Two Lives + What Didn't Work) */}
      <Differentiator />

      {/* Section 5: Professional Experience (Coming Soon) */}
      <section className="relative w-full py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">Professional Experience</p>
          <div className="p-8 md:p-20 rounded-3xl bg-[#0c0e14] border border-white/5 border-dashed flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white/40">Coming Soon</h2>
          </div>
        </div>
      </section>

      {/* Global Contact CTA */}
      <ContactCTA />
      <Footer />
    </div>
  );
}
