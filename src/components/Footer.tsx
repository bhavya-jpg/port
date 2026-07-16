import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      {/* CTA */}
      <div className="pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Got questions?</p>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-medium text-[16vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] tracking-[-0.04em]"
          >
            Let's create
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif italic font-medium text-[16vw] md:text-[12vw] lg:text-[10rem] leading-[0.85] tracking-[-0.04em] text-red"
          >
            something.
          </motion.h2>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="mailto:studio@sandracreates.com"
          className="group inline-flex items-center gap-3 mt-10 md:mt-14 bg-red text-white pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          <span className="text-sm font-medium uppercase tracking-wider">studio@sandracreates.com</span>
          <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={18} />
          </span>
        </motion.a>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10 px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <motion.img
              src="https://framerusercontent.com/images/oT5qz4Jw0jJ4uwB3OUGcB3pYOY.svg?width=653&height=692"
              alt="Sandra Creates logo"
              className="w-20 h-20 mb-6"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
            <p className="font-serif italic font-medium text-2xl">Sandra Creates™</p>
            <p className="text-sm text-white/40 mt-1">Creative Studio</p>
          </div>

          {/* Menu */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">Menu</p>
            <ul className="space-y-3">
              {['Work', 'About', 'Services', 'Founder'].map((l) => (
                <li key={l}>
                  <a href="#" className="nav-link font-serif text-lg italic">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">Social</p>
            <ul className="space-y-3">
              {['LinkedIn', 'Instagram', 'TikTok', 'YouTube'].map((l) => (
                <li key={l}>
                  <a href="#" className="nav-link font-serif text-lg italic">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">Contact</p>
            <a href="mailto:studio@sandracreates.com" className="nav-link font-serif text-lg italic block mb-4">
              studio@sandracreates.com
            </a>
            <p className="text-sm text-white/40">Available for freelance projects worldwide.</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Sandra Creates™ — Creative Studio. All rights reserved.</p>
          <p>Designed & built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
