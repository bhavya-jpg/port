import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
