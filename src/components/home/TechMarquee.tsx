import { techMarqueeLogos } from '../../data/techStack';

export default function TechMarquee() {
  return (
    <div className="w-full py-8 overflow-hidden pointer-events-none mt-8">
      <div className="relative flex w-full">
        <div className="marquee-track flex whitespace-nowrap animate-marquee motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:whitespace-nowrap">
          {/* We duplicate the array to allow for a seamless infinite scroll */}
          {[...techMarqueeLogos, ...techMarqueeLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16 font-sans font-extrabold text-2xl md:text-4xl uppercase tracking-widest text-white/5 transition-colors duration-300 select-none"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to fade out the edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
