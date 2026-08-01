export interface AchievementData {
  eventName: string;
  result: string;
  year: string;
  linkTo: string; // e.g. '/work' or '/open-source'
}

export const achievementsData: AchievementData[] = [
  {
    eventName: "Google Solution Challenge",
    result: "Top 50 Team",
    year: "2026",
    linkTo: "/work"
  },
  {
    eventName: "Electrothon 8.0",
    result: "Winner, Best Use of Gemini & 3rd Place IQ AI Track",
    year: "2025",
    linkTo: "/work"
  },
  {
    eventName: "Hack On Hills 7.0 / NIMBUS",
    result: "Winner, Best Web3 Project",
    year: "2026",
    linkTo: "/work"
  },
  {
    eventName: "Smart India Hackathon (SIH) Offline Round",
    result: "Top 20 Finalist",
    year: "2025",
    linkTo: "/work"
  },
  {
    eventName: "Prodygiki",
    result: "Winner, Breach-o-Breach & Runner-up, OHM Alone",
    year: "2025",
    linkTo: "/work"
  },
  {
    eventName: "AI Impact Summit — Youth Program (YUVAi Global Youth Challenge)",
    result: "Top 200 (Selected from 2,400+ nationwide for [project name])",
    year: "2026",
    linkTo: "/work"
  }
];
