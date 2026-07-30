import { MagneticSpotlightMarquee } from './ui/magnetic-spotlight-marquee';
import { aboutMarqueeImages, aboutContent } from '../data/aboutMarquee';

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#09090b]">
      <MagneticSpotlightMarquee
        images={aboutMarqueeImages}
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
        paragraphs={aboutContent.paragraphs}
      />
    </section>
  );
}
