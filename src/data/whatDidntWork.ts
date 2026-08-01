export interface SetbackItem {
  id: string;
  title: string;
  context: string;
  takeaway: string;
}

export const setbacksList: SetbackItem[] = [
  {
    id: "s1",
    title: "Not Selected for GSoC",
    context: "Applied through OpenMRS and was recognized as a top contributor to the organization, but wasn't officially selected for Google Summer of Code.",
    takeaway: "Lesson: Contribution quality outlasts selection outcomes — those merged PRs became real, lasting proof of work regardless of the GSoC decision."
  },
  {
    id: "s2",
    title: "Y Combinator — Not Selected",
    context: "Applied with KinetixVerse, wasn't selected.",
    takeaway: "Lesson: The application process forced sharper thinking on market sizing, distribution, and why now — useful even without acceptance."
  },
  {
    id: "s3",
    title: "Early Hackathon Losses",
    context: "Didn't advance past the first round in several early hackathons before finding traction.",
    takeaway: "Lesson: Losing early forced faster iteration on scoping and pitching — the wins that came later built directly on those repeated early losses."
  }
];
