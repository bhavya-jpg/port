import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We specialize in brand identity, website design, and video editing & motion design. You can work with us on a single service or combine them for a more cohesive result.',
  },
  {
    q: 'How long does a project usually take?',
    a: "Timelines vary depending on scope, but most projects take between 2-6 weeks. We'll always confirm timing before we start so expectations are clear from day one.",
  },
  {
    q: 'What do you need from me to get started?',
    a: "Once we agree to work together, you'll receive a simple onboarding form to help us understand your goals, brand, and vision. From there, we guide you through the rest.",
  },
  {
    q: 'How do pricing and payments work?',
    a: 'Pricing depends on the scope of the project. We offer clear packages and custom quotes, with a deposit required to secure your spot before work begins.',
  },
  {
    q: 'Do you offer ongoing support or retainers?',
    a: "Yes. We offer ongoing support and retainer options for clients who need continuous design, editing, or website updates. Retainers are flexible and tailored to your needs, and we'll always recommend them only if they genuinely make sense for your project.",
  },
];

function FaqItem({ item, i }: { item: (typeof faqs)[0]; i: number }) {
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
          <span className="text-xs text-red tracking-[0.2em] font-medium">0{i + 1}</span>
          <span className="font-serif italic font-medium text-2xl md:text-4xl text-white group-hover:text-red transition-colors duration-300">
            {item.q}
          </span>
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
          <Plus size={18} />
        </motion.span>
      </motion.button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div>
          <p className="pb-8 pr-12 md:pr-24 text-white/50 text-base md:text-lg leading-relaxed max-w-3xl pl-9">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  return (
    <section ref={ref} className="relative bg-black text-white py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">FAQ</p>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-medium text-5xl md:text-7xl tracking-[-0.03em]"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div>
          {faqs.map((f, i) => <FaqItem key={f.q} item={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}
