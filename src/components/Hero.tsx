import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-28 md:top-32 left-6 md:left-10 text-xs uppercase tracking-[0.3em] text-white/40"
      >
        Creative Studio
      </motion.div>

      {/* Mascot image — right side */}
      <motion.img
        initial={{ opacity: 0, x: 60, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        src="https://framerusercontent.com/images/K5dcAtPFRZvYkHUaCwPbsnpSUjI.png?width=1533&height=1767"
        alt="Bhavya mascot"
        className="absolute right-0 bottom-0 h-[80vh] md:h-[95vh] object-contain z-0 pointer-events-none select-none"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)' }}
      />

      {/* Headline */}
      <div className="relative z-10 px-6 md:px-10 max-w-[1600px]">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-serif italic font-medium text-[20vw] md:text-[16vw] lg:text-[15rem] leading-[0.85] tracking-[-0.04em]"
          >
            Bhavya
          </motion.h1>
        </div>
        <div className="overflow-hidden flex items-end gap-4 md:gap-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="font-serif italic font-medium text-[20vw] md:text-[16vw] lg:text-[15rem] leading-[0.85] tracking-[-0.04em]"
          >
            Creates
          </motion.h1>
          <motion.span
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden md:inline-block w-7 h-7 md:w-10 md:h-10 rounded-full bg-red mb-6 md:mb-12"
          />
        </div>
      </div>

      {/* Bottom row — CTA + scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 mt-10 md:mt-16 px-6 md:px-10 flex items-end justify-between"
      >
        <a
          href="#works"
          className="group inline-flex items-center gap-3 bg-red text-white pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          <span className="text-sm font-medium uppercase tracking-wider">View Work</span>
          <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={18} />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-3 text-white/50">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
