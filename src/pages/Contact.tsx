import Nav from '../components/Nav';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex flex-col">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
