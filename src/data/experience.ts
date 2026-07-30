export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
}

export const experienceData: ExperienceData[] = [
  {
    id: "01",
    role: "Software Engineering Intern",
    company: "Google",
    duration: "May 2025 — Aug 2025",
    description: "Developed and optimized microservices for Google Cloud Platform. Improved API response latency by 20% through aggressive caching and payload optimization.",
    highlights: ["Go", "gRPC", "Kubernetes", "GCP"]
  },
  {
    id: "02",
    role: "Backend Engineering Intern",
    company: "Stripe",
    duration: "Jan 2025 — Apr 2025",
    description: "Built scalable internal tooling for the fraud detection team, migrating legacy Ruby code to a modernized TypeScript and Node.js stack.",
    highlights: ["TypeScript", "Node.js", "Ruby", "PostgreSQL"]
  },
  {
    id: "03",
    role: "Research Assistant",
    company: "University AI Lab",
    duration: "Sep 2024 — Dec 2024",
    description: "Conducted research on parameter-efficient fine-tuning (PEFT) methods for Large Language Models. Co-authored a paper accepted at an international ML conference.",
    highlights: ["Python", "PyTorch", "HuggingFace"]
  }
];
