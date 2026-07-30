import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { recognitionData } from '../../data/home';

export default function Recognition() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 border-y border-white/10 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/4"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
              Recognition &<br /> Milestones
            </h3>
          </motion.div>
          
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 w-full">
            {recognitionData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="pl-6 border-l border-[#BA3E2B]/30"
              >
                <div className="text-[#BA3E2B] font-mono text-xs mb-3">{item.year}</div>
                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
