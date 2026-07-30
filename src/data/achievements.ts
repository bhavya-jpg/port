export interface AchievementData {
  eventName: string;
  result: string;
  year: string;
  linkTo: string; // e.g. '/work' or '/open-source'
}

export const achievementsData: AchievementData[] = [
  {
    eventName: "Global AI Hackathon",
    result: "1st Place",
    year: "2025",
    linkTo: "/work"
  },
  {
    eventName: "Social Winter of Code",
    result: "Top Contributor",
    year: "2024",
    linkTo: "/open-source"
  },
  {
    eventName: "Web3 Buildathon",
    result: "Top 10 Finalist",
    year: "2024",
    linkTo: "/work"
  }
];
