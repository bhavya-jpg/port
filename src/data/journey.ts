export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  category: 'engineering' | 'film' | 'leadership';
  description: string;
  tag: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "m1",
    year: "Jun 2024",
    title: "The Dual Beginning",
    category: "engineering",
    description: "Wrote my first lines of code and shot my first film the same month.",
    tag: "Origin"
  },
  {
    id: "m2",
    year: "Aug 2024",
    title: "Started B.Tech at NIT Hamirpur",
    category: "engineering",
    description: "Began journey pursuing a B.Tech in Electrical Engineering. Currently building a strong foundation in core engineering principles.",
    tag: "Education"
  },
  {
    id: "m3",
    year: "Jan–Mar 2025",
    title: "Video Editor Internship & First Short Film",
    category: "film",
    description: "Interned with Team Vibhav and directed my first short film, 'Sanak.' Gained foundational experience in narrative pacing and post-production.",
    tag: "Cinematography"
  },
  {
    id: "m4",
    year: "May–Jul 2025",
    title: "Full Immersion in Full-Stack Development",
    category: "engineering",
    description: "Dove deep into modern web architectures, mastering React, Node.js, and building robust backend services.",
    tag: "Development"
  },
  {
    id: "m5",
    year: "Jun 2025",
    title: "Built Cloudinary AI-Powered SaaS Platform",
    category: "engineering",
    description: "Engineered a scalable SaaS product leveraging AI for image processing, demonstrating advanced full-stack capabilities.",
    tag: "Projects"
  },
  {
    id: "m6",
    year: "Aug 2025",
    title: "Became GDG Executive, NIT Hamirpur",
    category: "leadership",
    description: "Joined Google Developer Groups as an executive, taking an active role in mentoring and expanding the campus tech community.",
    tag: "Community"
  },
  {
    id: "m7",
    year: "Sep–Oct 2025",
    title: "Built Proofora & MedLink; Won First Hackathon",
    category: "engineering",
    description: "Won Best Use of Gemini and 3rd Place IQ AI Track at Electrothon 8.0 with AI-driven health tech solutions.",
    tag: "Hackathons"
  },
  {
    id: "m8",
    year: "Nov–Dec 2025",
    title: "First Open Source Contribution (OpenMRS) & Founded KinetixVerse",
    category: "engineering",
    description: "Contributed to global healthcare software via OpenMRS and founded KinetixVerse, blending software engineering with digital media production.",
    tag: "Open Source"
  },
  {
    id: "m9",
    year: "Jan–Feb 2026",
    title: "Social Winter of Code & Campus Lead, Open Source Global Connect",
    category: "leadership",
    description: "Expanded open-source leadership by leading campus initiatives and contributing actively during Social Winter of Code.",
    tag: "Leadership"
  },
  {
    id: "m10",
    year: "May 2026",
    title: "Became Google Student Ambassador",
    category: "leadership",
    description: "Selected as a Google Student Ambassador to champion developer technologies and drive innovation at the university level.",
    tag: "Recognition"
  },
  {
    id: "m11",
    year: "2026–Present",
    title: "Deepening DSA, Agentic AI & Advancing Cinematic Color Grading",
    category: "engineering",
    description: "Technical growth alongside continued craft in post-production.",
    tag: "AI & Systems"
  }
];
