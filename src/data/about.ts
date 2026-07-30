export interface AboutData {
  heading: {
    line1: string;
    line2: string;
  };
  paragraphs: string[];
  stats: {
    label: string;
    value: number;
    suffix: string;
  }[];
  portraitUrl: string;
}

export const aboutData: AboutData = {
  heading: {
    line1: "Code tells a machine what to do.",
    line2: "Cinematography tells a human what to feel."
  },
  paragraphs: [
    "As an Electrical Engineering student, I am deeply focused on building scalable software architectures, mastering algorithms, and contributing to impactful open-source ecosystems. I thrive on rigorous technical problem-solving and developing high-performance applications.",
    "Alongside this engineering drive, I actively pursue cinematography and visual storytelling. Through directing projects like my short film 'Sanak' and commercial color grading work, I've learned how to craft compelling narratives—a skill that heavily influences how I design intuitive and engaging user experiences."
  ],
  stats: [
    { label: 'Lines of Code', value: 100000, suffix: '+' },
    { label: 'Projects Built', value: 40, suffix: '+' },
    { label: 'Hackathons Won', value: 3, suffix: '+' },
    { label: 'Films Shot', value: 15, suffix: '+' },
  ],
  portraitUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop"
};
