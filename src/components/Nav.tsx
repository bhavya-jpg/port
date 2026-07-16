import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Founder', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Circular logo */}
          <motion.a
            href="#home"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${
              scrolled ? 'w-14 h-14' : 'w-16 h-16 md:w-20 md:h-20'
            } bg-white`}
          >
            <span className="font-serif italic font-medium text-black text-sm md:text-base">
              SC
            </span>
          </motion.a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="nav-link text-sm font-medium text-white mix-blend-difference"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-12 h-12 rounded-full bg-white flex items-center justify-center"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-0.5 bg-black" />
              <span className="block w-5 h-0.5 bg-black" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black"
            >
              ✕
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="font-serif text-5xl italic font-medium text-white"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
