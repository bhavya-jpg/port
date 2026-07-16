import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    n: '01',
    title: 'Brand Identity',
    desc: 'Building brands with personality.',
    img: 'https://framerusercontent.com/images/vbOVbH0AutRuE2RfJydieAnPU0A.png?width=583&height=526',
    card: 'bg-[#f7b3c2]',
  },
  {
    n: '02',
    title: 'Video Editing',
    desc: "Keeping viewers hooked, whether it's a 30-second clip or a 30-minute video.",
    img: 'https://framerusercontent.com/images/m4pGM7b3lhA7pBJVaKaCD4YNIx4.png?width=625&height=765',
    card: 'bg-[#6ac4ed]',
  },
  {
    n: '03',
    title: 'Website Design',
    desc: "Well if you're enjoying the website you're on now, you're going to love yours even more.",
    img: 'https://framerusercontent.com/images/HWhLHPgg82tK2HsRD3dshkWsQ.png?width=655&height=638',
    card: 'bg-[#f03e2f]',
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section id="services" ref={ref} className="relative bg-black text-white py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">What we do</p>
            <h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]">
              Services that<br />make brands<br /><span className="text-red">unforgettable.</span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${s.card} rounded-[2rem] overflow-hidden cursor-pointer`}
              data-cursor
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <motion.img
                  style={i === 1 ? { y } : undefined}
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover ${i === 1 ? 'h-[120%]' : ''} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Number */}
                <span className="absolute top-6 left-6 text-sm font-medium text-black/50">{s.n}</span>

                {/* VIEW WORK badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider">
                    View Work <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-serif italic font-medium text-3xl md:text-4xl text-black mb-2">{s.title}</h3>
                <p className="text-black/70 text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
