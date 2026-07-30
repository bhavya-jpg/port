import Nav from '../components/Nav';
import GitHubShowcase from '../components/GitHubShowcase';
import OpenSourcePrograms from '../components/OpenSourcePrograms';
import Achievements from '../components/Achievements';
import Communities from '../components/Communities';
import ContactCTA from '../components/ContactCTA';

export default function OpenSource() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />
      {/* We add pt-24 md:pt-32 to account for the fixed Nav height on this page */}
      <main className="pt-24 md:pt-32 space-y-16">
        <GitHubShowcase />
        <OpenSourcePrograms />
        <Achievements />
        <Communities />
        <ContactCTA />
      </main>
    </div>
  );
}
