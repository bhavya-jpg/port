import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';
import { contactData } from '../data/contact';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Half Camera & Contacts Section with Red Background */}
      <div className="bg-[#BA3E2B] text-white pt-16 md:pt-20 pb-12 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-serif italic font-medium text-4xl md:text-6xl mb-8 leading-tight">
              Let's create something extraordinary.
            </h2>
            <div className="flex flex-col gap-6">
              <a href={contactData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity">
                <Linkedin size={28} />
                <span className="font-medium tracking-wide">LinkedIn</span>
              </a>
              <a href={contactData.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity">
                <Github size={28} />
                <span className="font-medium tracking-wide">GitHub</span>
              </a>
              <a href={contactData.instagram || "https://instagram.com"} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity">
                <Instagram size={28} />
                <span className="font-medium tracking-wide">Creative Instagram</span>
              </a>
              <a href={"https://instagram.com"} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity">
                <Instagram size={28} />
                <span className="font-medium tracking-wide">Personal Instagram</span>
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-4 text-xl hover:opacity-70 transition-opacity">
                <Mail size={28} />
                <span className="font-medium tracking-wide">{contactData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Half Camera SVG Peeking from Right/Bottom */}
        <div className="absolute right-[-100px] md:right-[5%] -bottom-[200px] w-[400px] md:w-[600px] opacity-20 pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-full drop-shadow-2xl overflow-visible"
          >
            <g>
              <path d="M 230 182 L 275 182 L 285 205 L 220 205 Z" fill="#16191E" stroke="#090A0C" strokeWidth="2" />
              <rect x="238" y="188" width="28" height="6" rx="2" fill="#2E3440" />
              <ellipse cx="375" cy="195" rx="16" ry="7" fill="#1E2229" stroke="#090A0C" strokeWidth="2" />
              <rect x="365" y="190" width="20" height="4" fill="#3A404D" rx="1" />
              <rect x="425" y="190" width="24" height="15" rx="3" fill="#2E343F" stroke="#090A0C" strokeWidth="2" />
              <rect x="429" y="186" width="16" height="5" rx="1" fill="#FFFFFF" />
              <path d="M 455 215 C 470 235, 470 375, 455 395 Z" fill="#0D0F12" />
              <rect x="140" y="205" width="320" height="195" rx="24" fill="#16191E" stroke="#090A0C" strokeWidth="3" />
              <rect x="140" y="225" width="320" height="3" fill="#282D37" />
              <rect x="132" y="270" width="8" height="24" rx="2" fill="#2E343F" />
            </g>
            <circle cx="330" cy="305" r="92" fill="none" stroke="#FFFFFF" strokeWidth="9" />
          </svg>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10 px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <motion.img
              src="https://framerusercontent.com/images/oT5qz4Jw0jJ4uwB3OUGcB3pYOY.svg?width=653&height=692"
              alt="Bhavya Aggarwal logo"
              className="w-16 h-16 mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
            <p className="font-serif italic font-medium text-2xl">Bhavya Aggarwal™</p>
            <p className="text-sm text-white/40 mt-1">Creative Studio</p>
          </div>

          {/* Menu */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">Menu</p>
            <ul className="space-y-3">
              {['Work', 'About', 'Services', 'Founder'].map((l) => (
                <li key={l}>
                  <a href={`/${l.toLowerCase() === 'about' ? '' : l.toLowerCase()}`} className="nav-link font-serif text-lg italic hover:text-[#BA3E2B] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">Social</p>
            <ul className="space-y-3">
              {[
                { name: 'LinkedIn', link: contactData.linkedin },
                { name: 'GitHub', link: contactData.github },
                { name: 'Creative Instagram', link: contactData.instagram || 'https://instagram.com' },
                { name: 'Personal Instagram', link: 'https://instagram.com' },
                { name: 'Email', link: `mailto:${contactData.email}` }
              ].map((s) => (
                <li key={s.name}>
                  <a href={s.link} target="_blank" rel="noreferrer" className="nav-link font-serif text-lg italic hover:text-[#BA3E2B] transition-colors">{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive BHAVYA Text */}
        <div className="w-full mt-24 md:mt-32 overflow-hidden flex justify-center items-center select-none pointer-events-none">
          <h1 className="font-sans font-black text-[22vw] leading-[0.75] tracking-tighter text-white w-full text-center">
            BHAVYA
          </h1>
        </div>

        <div className="max-w-[1400px] mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Bhavya Aggarwal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <p>English</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
