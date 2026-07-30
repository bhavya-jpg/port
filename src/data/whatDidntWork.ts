export interface SetbackItem {
  id: string;
  title: string;
  context: string;
  takeaway: string;
}

export const setbacksList: SetbackItem[] = [
  {
    id: "s1",
    title: "Open Source Fellowship Rejection (Round 3)",
    context: "Spent 4 weeks preparing a heavy PR and proposal for a high-profile open-source fellowship, only to get cut in the final interview stage.",
    takeaway: "Lesson: The depth of code contributed wasn't lost—those PRs became my strongest public portfolio proof."
  },
  {
    id: "s2",
    title: "First Hackathon Build Over-Engineering",
    context: "Attempted a complex multi-agent AI architecture in 24 hours. The backend worked locally, but presentation demo crashed 5 minutes before judging.",
    takeaway: "Lesson: A flawless simple demo beats an unfinished complex architecture every single time."
  },
  {
    id: "s3",
    title: "Early Short Film Lighting Failure",
    context: "Shot a night scene on location without proper key lights, relying on ambient streetlamps. The raw footage was unusable due to sensor noise.",
    takeaway: "Lesson: Pre-visualization and light tests are non-negotiable before rolling camera."
  }
];
