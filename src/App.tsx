import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import OpenSource from './pages/OpenSource';

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
              Bhavya<span className="text-[#BA3E2B]">.</span>
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
