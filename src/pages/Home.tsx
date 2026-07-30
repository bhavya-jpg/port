import Nav from '../components/Nav';
import CameraRevealHero from '../components/CameraRevealHero';
import CategoryStack from '../components/home/CategoryStack';
import About from '../components/About';
import Recognition from '../components/home/Recognition';
import HowIWork from '../components/home/HowIWork';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Nav hideOnTop />
      <CameraRevealHero />
      <main>
        <CategoryStack />
        <About />
        <Recognition />
        <HowIWork />
        <ContactCTA />
      </main>
    </>
  );
}
