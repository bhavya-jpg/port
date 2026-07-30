export interface HackathonEntry {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  bgColorClass: string;
  result: string;
}

export const hackathonsData: HackathonEntry[] = [
  {
    id: "01",
    title: "Global AI Hackathon",
    description: "Built an intelligent agent system that parses complex documentation and assists users through a voice interface. Integrated Google Gemini ADK and WebRTC for real-time streaming.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Python", "Google Gemini"],
    links: {
      github: "https://github.com/placeholder",
      demo: "https://demo.com"
    },
    bgColorClass: "bg-[#111111]",
    result: "1st Place Winner"
  },
  {
    id: "02",
    title: "Web3 Buildathon",
    description: "Developed a decentralized voting mechanism for community DAOs using smart contracts on Ethereum, featuring a zero-knowledge proof verification flow.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Solidity", "Next.js", "Tailwind"],
    links: {
      github: "https://github.com/placeholder"
    },
    bgColorClass: "bg-[#1a1a1a]",
    result: "Top 10 Finalist"
  }
];
