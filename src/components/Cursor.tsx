import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        el.classList.add('big');
      } else {
        el.classList.remove('big');
      }
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <div ref={ref} className="cursor" />;
}
