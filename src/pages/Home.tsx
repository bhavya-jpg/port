import Nav from '../components/Nav';
import CameraRevealHero from '../components/CameraRevealHero';
import CategoryStack from '../components/home/CategoryStack';
import About from '../components/About';
import CharacterSection from '../components/home/CharacterSection';
import HowIWork from '../components/home/HowIWork';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav hideOnTop />
      <CameraRevealHero />
      <main>
        <CategoryStack />
        <About />
        <CharacterSection />
        <HowIWork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
