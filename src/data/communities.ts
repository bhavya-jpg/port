export interface CommunityData {
  organization: string;
  role: string;
  duration: string;
  description: string;
  link?: string;
}

export const communitiesData: CommunityData[] = [
  {
    organization: "Google Developer Groups (GDG), NIT Hamirpur",
    role: "Executive",
    duration: "Aug 2025 - Present",
    description: "Led the Genesis onboarding event for 500+ first-year students and delivered AI tool workshops to 500+ participants.",
    link: "https://gdg.community.dev"
  },
  {
    organization: "Google Student Ambassador",
    role: "Campus Ambassador",
    duration: "May 2026 - Present",
    description: "Onboarded 300+ students to Google developer tools, collected feedback from 1,000+ peers, and created cross-platform content reaching 15,000+ impressions."
  },
  {
    organization: "Open Source Global Connect",
    role: "Campus Lead",
    duration: "Feb 2026 - Present",
    description: "Championed open-source awareness and community-building. Integrated 100+ students into contribution pipelines and ran onboarding workshops."
  }
];
