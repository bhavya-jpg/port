import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Cpu, Film } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "01",
    title: "Software Engineering & Open Source",
    description: "Building scalable web architectures and contributing to global open-source ecosystems.",
    link: "/work",
    bgColor: "bg-[#E5B5AE]", // Muted rust/amber
    textColor: "text-[#4A1D15]",
    iconColor: "text-[#993221]",
    icon: Code2
  },
  {
    id: "02",
    title: "AI & Robotics",
    description: "Developing autonomous agent frameworks and intelligent robotic control systems.",
    link: "/work",
    bgColor: "bg-[#A3C4F3]", // Muted blue
    textColor: "text-[#1B365D]",
    iconColor: "text-[#2563EB]",
    icon: Cpu
  },
  {
    id: "03",
    title: "Cinematography",
    description: "Crafting visual narratives through lighting design and cinematic color grading.",
    link: "/services",
    bgColor: "bg-[#B2E1C9]", // Muted sage/emerald
    textColor: "text-[#1C452F]",
    iconColor: "text-[#10B981]",
    icon: Film
  }
];

export default function CategoryStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't get covered

        const nextCard = cards[index + 1];
        if (!nextCard || !card) return;

        // Subtly scale down and dim card as next card slides over it
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top 80%",
            end: "top 15%",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-36 px-6 md:px-10">
      <div ref={containerRef} className="max-w-[1400px] mx-auto relative flex flex-col">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-12">
          What I Do
        </p>

        {/* Stack Container */}
        <div className="relative flex flex-col gap-24 pb-20">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const topOffset = 12 + index * 2; // Slight vertical offset per card for header peeking (12vh, 14vh, 16vh)

            return (
              <Link
                key={category.id}
                to={category.link}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`sticky w-full rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between overflow-hidden shadow-2xl transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${category.bgColor}`}
                style={{
                  top: `${topOffset}vh`,
                  minHeight: "380px",
                  height: "45vh",
                  maxHeight: "520px",
                  zIndex: index + 1,
                  transformOrigin: "top center",
                }}
              >
                {/* Card Top Row: Number & Icon */}
                <div className="flex justify-between items-start">
                  <div className={`text-5xl md:text-7xl font-serif italic font-light opacity-35 ${category.textColor}`}>
                    {category.id}
                  </div>
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-md ${category.iconColor}`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                {/* Card Bottom Row: Title, Description & CTA */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <h3 className={`text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight mb-3 md:mb-4 ${category.textColor}`}>
                      {category.title}
                    </h3>
                    <p className={`text-base sm:text-xl md:text-2xl font-medium opacity-85 leading-relaxed ${category.textColor}`}>
                      {category.description}
                    </p>
                  </div>

                  <div className={`flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest ${category.textColor} shrink-0`}>
                    <span>Explore</span>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${category.textColor.replace('text-', 'border-')}`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
