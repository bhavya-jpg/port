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

    const onMove = (e: MouseEvent) => { xTo(e.clientX); yTo(e.clientY); };
    const onEnter = () => el.classList.add('big');
    const onLeave = () => el.classList.remove('big');

    window.addEventListener('mousemove', onMove);

    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach((t) => {
      t.addEventListener('mouseenter', onEnter);
      t.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach((t) => {
        t.removeEventListener('mouseenter', onEnter);
        t.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={ref} className="cursor" />;
}
