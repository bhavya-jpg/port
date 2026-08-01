import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Film, HeartHandshake, Mouse } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const HERO_CONFIG = {
  branding: "Bhavya Creates™",
  taglinePart1: "Code by Day",
  taglinePart2: "Film by Night",
  landingBg: "#A63A3A",
  darkBg: "#09090b",
  skills: [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "Building real products end-to-end, from scalable backend logic to pixel-perfect, responsive UI.",
      badge: "Software Engineering",
      color: "bg-blue-600/10 border-blue-500/30 text-blue-400",
      accent: "#3b82f6",
      icon: Code2,
    },
    {
      id: "cinematography",
      title: "Cinematography",
      description: "Telling stories through the lens — crafting cinematic visuals, lighting design, and narrative color grades.",
      badge: "Visual Storytelling",
      color: "bg-rose-600/10 border-rose-500/30 text-rose-400",
      accent: "#f43f5e",
      icon: Film,
    },
    {
      id: "opensource",
      title: "Open Source",
      description: "Contributing to real-world developer tools and open-source ecosystems, including Google Summer of Code.",
      badge: "Community & GSoC",
      color: "bg-emerald-600/10 border-emerald-500/30 text-emerald-400",
      accent: "#10b981",
      icon: HeartHandshake,
    },
  ],
};

import LogoCarousel from './ui/logo-carousel';

export default function CameraRevealHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const darkLayerRef = useRef<HTMLDivElement>(null);
  const aboutSectionContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cameraBodyGroupRef = useRef<SVGGElement>(null);
  const lensRingRef = useRef<SVGCircleElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  
  const aboutTextRef = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx: gsap.Context | null = null;
    let resizeTimeout: number;

    const initGSAP = () => {
      // Clean up previous context if it exists
      if (ctx) ctx.revert();

      if (!containerRef.current || !darkLayerRef.current || !svgRef.current) return;

      // 1. Calculate the center coordinates and initial radius
      const svgRect = svgRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const lensXPx = svgRect.left - containerRect.left + (330 / 600) * svgRect.width;
      const lensYPx = svgRect.top - containerRect.top + (305 / 600) * svgRect.height;
      
      const xPct = (lensXPx / containerRect.width) * 100;
      const yPct = (lensYPx / containerRect.height) * 100;
      const initialR = (48 / 600) * svgRect.width;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxRadius = Math.sqrt(w * w + h * h) * 1.2;

      ctx = gsap.context(() => {
        const clipState = { radius: initialR || 60 };

        // Set initial states
        gsap.set(darkLayerRef.current, {
          clipPath: `circle(${clipState.radius}px at ${xPct}% ${yPct}%)`,
          opacity: 1,
        });

        gsap.set(aboutSectionContentRef.current, {
          autoAlpha: 0,
          pointerEvents: "none"
        });
        
        const words = aboutTextRef.current?.querySelectorAll('.word-chunk');
        if (words) {
          gsap.set(words, { opacity: 0.15, y: 15 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Hide scroll indicator immediately
        tl.to(scrollIndicatorRef.current, { autoAlpha: 0, duration: 0.05 }, 0);

        // Mask Expands
        tl.to(
          clipState,
          {
            radius: maxRadius,
            duration: 0.45,
            ease: "power2.inOut",
            onUpdate: () => {
              if (darkLayerRef.current) {
                darkLayerRef.current.style.clipPath = `circle(${clipState.radius}px at ${xPct}% ${yPct}%)`;
              }
            },
          },
          0
        );

        const targetLensScale = maxRadius / Math.max(initialR, 10);
        tl.to(
          lensRingRef.current,
          {
            scale: targetLensScale,
            svgOrigin: "330 305",
            duration: 0.45,
            ease: "power2.inOut",
          },
          0
        );

        // Fade out outer elements quickly
        tl.to(
          [cameraBodyGroupRef.current, brandRef.current, taglineRef.current],
          {
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.2,
            ease: "power2.out",
          },
          0.05
        );

        // Make inner content visible
        tl.set(aboutSectionContentRef.current, { autoAlpha: 1, pointerEvents: "auto" }, 0.18);

        // Word-by-word reveal
        if (words) {
          tl.to(
            words,
            {
              opacity: 1,
              y: 0,
              stagger: 0.02,
              duration: 0.25,
              ease: "power2.out",
            },
            0.18
          );
        }

        // Smooth blooming zoom effect on text + logos (zooms in smoothly as you scroll down, zooms out as you scroll up)
        tl.fromTo(
          aboutSectionContentRef.current,
          { scale: 0.98 },
          { scale: 1.12, ease: "power2.inOut", duration: 0.8 },
          0.18
        );
      }, containerRef);
    };

    // Run initially
    initGSAP();

    // Re-run 150ms after mount to ensure layout is final
    const mountTimeout = setTimeout(() => {
      initGSAP();
      ScrollTrigger.refresh();
    }, 150);

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        initGSAP();
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (ctx) ctx.revert();
      clearTimeout(mountTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden select-none bg-[#A63A3A]">

      <div
        ref={landingRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 z-10 bg-[#A63A3A]"
      >
        <div ref={brandRef} className="z-20 pt-2 sm:pt-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {HERO_CONFIG.branding}
          </h1>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <svg
            ref={svgRef}
            viewBox="0 0 600 600"
            className="w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] md:w-[760px] md:h-[760px] drop-shadow-2xl overflow-visible"
          >
            <g ref={cameraBodyGroupRef}>
              <path id="viewfinderHump" d="M 230 182 L 275 182 L 285 205 L 220 205 Z" fill="#16191E" stroke="#090A0C" strokeWidth="2" />
              <rect x="238" y="188" width="28" height="6" rx="2" fill="#2E3440" />
              <ellipse id="topDial" cx="375" cy="195" rx="16" ry="7" fill="#1E2229" stroke="#090A0C" strokeWidth="2" />
              <rect x="365" y="190" width="20" height="4" fill="#3A404D" rx="1" />
              <rect id="shutterButton" x="425" y="190" width="24" height="15" rx="3" fill="#2E343F" stroke="#090A0C" strokeWidth="2" />
              <rect x="429" y="186" width="16" height="5" rx="1" fill="#A63A3A" />
              <path id="grip" d="M 455 215 C 470 235, 470 375, 455 395 Z" fill="#0D0F12" />
              <rect id="cameraBody" x="140" y="205" width="320" height="195" rx="24" fill="#16191E" stroke="#090A0C" strokeWidth="3" />
              <rect x="140" y="225" width="320" height="3" fill="#282D37" />
              <rect x="132" y="270" width="8" height="24" rx="2" fill="#2E343F" />
            </g>
            <circle ref={lensRingRef} cx="330" cy="305" r="92" fill="none" stroke="#A63A3A" strokeWidth="9" className="origin-[330px_305px]" />
          </svg>
        </div>

        <div ref={taglineRef} className="z-20 text-right pb-2 sm:pb-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic tracking-tight">
            <span className="text-white drop-shadow-sm">{HERO_CONFIG.taglinePart1}</span>
            <span className="text-white/60 mx-3">•</span>
            <span className="text-amber-200 font-semibold drop-shadow-sm">{HERO_CONFIG.taglinePart2}</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-white/80 pointer-events-none">
          <Mouse className="w-6 h-6 animate-bounce" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        </div>
      </div>

      <div
        ref={darkLayerRef}
        className="absolute inset-0 w-full h-full z-30 flex flex-col justify-center items-center px-6 md:px-16 pt-16 pb-10 bg-[#09090b] text-white overflow-y-auto"
      >
        <div ref={aboutSectionContentRef} className="max-w-5xl w-full mx-auto space-y-12 my-auto flex flex-col items-center">
          <div className="text-center space-y-8 w-full">
            <h2 ref={aboutTextRef} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.25] max-w-4xl mx-auto text-white">
              <span className="word-chunk inline-block">A&nbsp;</span>
              <span className="word-chunk inline-block text-[#A63A3A]">developer&nbsp;</span>
              <span className="word-chunk inline-block">and&nbsp;</span>
              <span className="word-chunk inline-block text-[#F43F5E] italic font-serif">cinematographer&nbsp;</span>
              <span className="word-chunk inline-block text-[#3B82F6]">building software&nbsp;</span>
              <span className="word-chunk inline-block">by&nbsp;</span>
              <span className="word-chunk inline-block">day,&nbsp;</span>
              <span className="word-chunk inline-block text-[#10B981]">shooting frames&nbsp;</span>
              <span className="word-chunk inline-block">by&nbsp;</span>
              <span className="word-chunk inline-block">night.</span>
            </h2>
            <LogoCarousel columnCount={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
