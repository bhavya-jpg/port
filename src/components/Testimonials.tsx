import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Working with Sandra has been an absolute pleasure. Her creativity, distinctive style, and attention to detail consistently result in high-quality outputs that exceed expectations.',
    name: 'Michelle Castro',
    role: 'Communication and Content Specialist at Envato',
    avatar: 'https://framerusercontent.com/images/LE1KWilZxIZQiAqo0gvGNVJcFk.jpeg?width=170&height=162',
    color: '#d9ce80',
  },
  {
    quote: 'She brings an infectious positivity and energy to any team she works with, making collaboration both productive and enjoyable.',
    name: 'Perla Moubayed',
    role: 'Co-Founder of NexGen MENA',
    avatar: 'https://framerusercontent.com/images/kjGrGm3dIfgGSES9OI3vjO1YurY.jpeg?width=450&height=458',
    color: '#cc7a97',
  },
  {
    quote: 'Sandra, A brilliant creative but more importantly, a wonderful human being. Expected exquisiteness, experienced and received better.',
    name: 'Charbel Maalouf',
    role: 'Founder',
    avatar: 'https://framerusercontent.com/images/MQjCZAIr53tBxZmlqa6rtZEMGS0.jpeg?width=510&height=559',
    color: '#47a4d6',
  },
  {
    quote: 'The padel court is well-maintained and the lighting feels perfect for evening games. Great bounce, clean space, and a comfortable place to practice.',
    name: 'Orion Farag',
    role: 'Framer Expert',
    avatar: 'https://framerusercontent.com/images/OjKyuw3GhqntBnqh62ywVwaYiQ.jpeg?width=3120&height=4160',
    color: '#a30300',
  },
];

const marqueeWords = [
  'Brand Identity', 'Video Editing', 'Website Design', 'Motion',
  'Creative Direction', 'Social Media', 'Storytelling', 'Design',
];

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg width="46" height="39" viewBox="0 0 46 39" fill="none" style={{ color }}>
      <path d="M25.454 0L36.364 0C38.364 0 40 1.636 40 3.636L40 14.545C40 16.545 38.364 18.182 36.364 18.182L25.454 18.182C23.454 18.182 21.818 16.545 21.818 14.545L21.818 3.636C21.818 1.636 23.454 0 25.454 0ZM3.636 0L14.546 0C16.546 0 18.182 1.636 18.182 3.636L18.182 14.545C18.182 16.545 16.546 18.182 14.546 18.182L3.636 18.182C1.636 18.182 0 16.545 0 14.545L0 3.636C0 1.636 1.636 0 3.636 0Z" fill="currentColor" transform="translate(4 18.359)"/>
      <path d="M27.273 0C23.636 3.636 21.818 9.091 21.818 14.545L21.818 21.818M5.455 0C1.818 3.636 0 9.091 0 14.545L0 21.818" stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="transparent" transform="translate(7.637 3.815)"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Marquee */}
      <div className="border-y border-white/10 py-6 md:py-8 mb-20 md:mb-28 overflow-hidden">
        <div className="marquee-track animate-marquee">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-6 mx-6 font-serif italic font-medium text-4xl md:text-6xl text-white/80">
              {w}
              <span className="text-red not-italic font-sans text-xl md:text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Kind words</p>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em]"
          >
            What clients say.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-12 ${i % 2 === 1 ? 'md:mt-20' : ''}`}
            >
              <div className="absolute top-8 right-8 opacity-90" style={{ color: t.color }}>
                <QuoteIcon color={t.color} />
              </div>
              <p className="font-serif italic font-medium text-2xl md:text-3xl leading-relaxed text-white mb-10 pr-12">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2" style={{ borderColor: t.color }}>
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
