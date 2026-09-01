import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Founder', href: '/founder' },
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Open Source & Recognition', href: '/open-source' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav({ hideOnTop = false }: { hideOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(!hideOnTop);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (hideOnTop) {
        // Show navbar as soon as user scrolls into the black screen cinematography text
        setVisible(y >= window.innerHeight * 3.5);
      } else {
        setVisible(true);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideOnTop]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${scrolled ? 'py-3.5 bg-black/85 backdrop-blur-lg border-b border-white/10' : 'py-6'}`}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Circular logo */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className={`relative flex items-center justify-center rounded-full bg-white text-black font-serif italic font-bold tracking-tighter ${
              scrolled ? 'w-12 h-12 md:w-14 md:h-14' : 'w-16 h-16 md:w-20 md:h-20'
            } transition-all duration-300 shadow-xl`}
          >
            <Link to="/" className="w-full h-full flex items-center justify-center rounded-full">
              <span className={`absolute leading-none ${
                scrolled ? 'text-xl md:text-2xl top-[14px] md:top-[16px]' : 'text-3xl md:text-4xl top-[18px] md:top-[22px]'
              }`}>
                B
              </span>
            </Link>
          </motion.div>

          {/* Desktop links with Spotlight Glow & Larger Typography */}
          <nav
            onMouseMove={handleMouseMove}
            className="hidden md:flex items-center gap-2 lg:gap-3 bg-white/5 p-2 rounded-full border border-white/15 backdrop-blur-md relative group/nav overflow-hidden"
          >
            {/* Mouse Spotlight Element */}
            <div
              className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100"
              style={{
                background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(186, 62, 43, 0.35), transparent 80%)`,
              }}
            />

            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                className="relative z-10"
              >
                <Link
                  to={l.href}
                  className="px-4 py-2 rounded-full text-xs lg:text-sm font-sans font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 block select-none"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-12 h-12 rounded-full bg-white flex items-center justify-center relative z-50 shadow-md"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-0.5 bg-black" />
              <span className="block w-5 h-0.5 bg-black" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay — portaled to <body>: GSAP's ScrollTrigger pin reparents
          sibling sections into pin-spacers, so inserting the overlay as a React
          sibling of the pinned hero crashes with insertBefore/NotFoundError. */}
      {createPortal(
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-7 px-6 overflow-y-auto"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black"
            >
              ✕
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <Link
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl sm:text-5xl italic font-medium text-white text-center block leading-tight"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}
