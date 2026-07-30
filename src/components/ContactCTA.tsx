import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative w-full py-20 px-6 md:px-10 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto rounded-xl bg-[#0d0e12] p-8 md:p-14 border-2 border-[#BA3E2B] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        
        <div className="space-y-4 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#BA3E2B] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm select-none">
            <Sparkles size={14} />
            <span>Have a project in mind?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight">
            Let's build something extraordinary together.
          </h2>
          <p className="text-base md:text-lg text-white/80 font-sans leading-relaxed">
            Whether you need full-stack SaaS engineering, custom website development, or an AI prototype, I'm ready to turn your vision into reality.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 relative z-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#BA3E2B] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#d94832] transition-all shadow-lg group"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <a
            href="mailto:bhavya120906@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
          >
            <Mail size={16} className="text-[#FF6F59]" />
            <span>Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
}
