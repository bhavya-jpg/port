export interface TechCategory {
  category: string;
  skills: string[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "C++", "Java"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Vercel"]
  },
  {
    category: "AI & ML",
    skills: ["PyTorch", "TensorFlow", "LangChain", "OpenAI API", "Hugging Face"]
  },
  {
    category: "Dev Tools",
    skills: ["Git", "Linux", "Bash", "Postman", "Figma", "Neovim"]
  },
  {
    category: "Creative",
    skills: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Photoshop", "Lightroom"]
  }
];

export const techMarqueeLogos = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Figma",
  "Google Gemini/ADK",
  "GitHub",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "DaVinci Resolve"
];
