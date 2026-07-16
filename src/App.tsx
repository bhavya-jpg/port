import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function Preloader({ done }: { done: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-serif italic font-medium text-6xl md:text-8xl text-white"
            >
              Sandra<span className="text-red">.</span>
            </motion.div>
            <div className="mt-4 text-sm uppercase tracking-[0.4em] text-white/40">
              {count}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader done={loaded} />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
