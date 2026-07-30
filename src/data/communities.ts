export interface CommunityData {
  organization: string;
  role: string;
  duration: string;
  description: string;
  link?: string;
}

export const communitiesData: CommunityData[] = [
  {
    organization: "Google Developer Groups (GDG)",
    role: "Core Team Member",
    duration: "Aug 2024 - Present",
    description: "Organized technical workshops on Google Cloud and Android development for 500+ students. Facilitated study jams and hackathons.",
    link: "https://gdg.community.dev"
  },
  {
    organization: "Open Source Club",
    role: "President",
    duration: "Jan 2024 - Present",
    description: "Lead a community of 200+ student developers. Initiated the 'First Pull Request' campaign which helped 50+ students merge their first open-source contributions."
  },
  {
    organization: "Film & Media Society",
    role: "Head of Cinematography",
    duration: "Sep 2023 - May 2024",
    description: "Directed cinematography for 3 award-winning short films. Taught weekly workshops on lighting theory and color grading."
  },
  {
    organization: "Google Student Ambassador",
    role: "Campus Ambassador",
    duration: "Aug 2023 - Present",
    description: "Represented Google on campus, hosting technical sessions on Web Dev and Cloud, acting as a liaison between Google programs and the student body."
  }
];
