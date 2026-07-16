import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

const stats = [
  { label: 'Social Views', value: 12000000, suffix: '+' },
  { label: 'Followers', value: 500000, suffix: '+' },
  { label: 'Happy Clients', value: 200, suffix: '+' },
  { label: 'Years Experience', value: 9, suffix: '+' },
];

function Stat({ stat, i }: { stat: (typeof stats)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, stat.value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => {
        const n = Math.floor(v);
        setDisplay(n >= 1000 ? n.toLocaleString() : String(n));
      },
      onComplete: () => setDisplay(stat.value.toLocaleString() + stat.suffix),
    });
    return () => controls.stop();
  }, [inView, stat.value, stat.suffix, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: i * 0.1 }}
      className="border-t border-white/15 pt-6 pb-8"
    >
      <div className="font-serif italic font-medium text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
        {display}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={ref} className="relative bg-black text-white py-24 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-10">A little about me</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] rounded-[2rem] overflow-hidden order-2 lg:order-1"
          >
            <img
              src="https://framerusercontent.com/images/6esRpKsL3GY1zraVfq1bKwxi9hQ.png?width=1987&height=1789"
              alt="Sandra — Founder"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text + stats */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em]"
              >
                Most brands don't lack talent… they lack personality.
              </motion.h2>
            </div>
            <div className="space-y-5 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                After 9+ years in graphic design and video editing, one thing I can tell you for sure:
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                And that's exactly what this studio was built to create.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 mt-12 md:mt-16">
              {stats.map((s, i) => <Stat key={s.label} stat={s} i={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
