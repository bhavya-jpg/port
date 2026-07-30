import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { howIWorkData } from '../../data/home';

function FaqItem({ item, i }: { item: (typeof howIWorkData)[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <motion.button
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.08 }}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-7 md:py-9 text-left group"
      >
        <span className="flex items-baseline gap-5">
          <span className="text-xs text-[#BA3E2B] tracking-[0.2em] font-medium">0{i + 1}</span>
          <span className="font-serif italic font-medium text-2xl md:text-3xl lg:text-4xl text-white group-hover:text-[#BA3E2B] transition-colors duration-300">
            {item.question}
          </span>
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
          <Plus size={18} />
        </motion.span>
      </motion.button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div>
          <p className="pb-8 pr-12 md:pr-24 text-white/50 text-base md:text-lg leading-relaxed max-w-3xl pl-9">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  return (
    <section ref={ref} className="relative bg-[#0a0a0a] text-white py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#BA3E2B] font-bold mb-4">How I Work</p>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-medium text-4xl md:text-6xl tracking-[-0.03em]"
          >
            Frequent Questions
          </motion.h2>
        </div>

        <div>
          {howIWorkData.map((f, i) => <FaqItem key={f.question} item={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}
