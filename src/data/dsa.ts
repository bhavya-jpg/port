export interface DsaProfile {
  platform: string;
  username: string;
  rating: number;
  maxRating: number;
  globalRank?: string;
  problemsSolved: number;
  badge?: string;
  url: string;
}

export const dsaData: DsaProfile[] = [
  {
    platform: "LeetCode",
    username: "bhavya",
    rating: 2150,
    maxRating: 2200,
    globalRank: "Top 2%",
    problemsSolved: 850,
    badge: "Guardian",
    url: "https://leetcode.com/"
  },
  {
    platform: "Codeforces",
    username: "bhavya_c",
    rating: 1850,
    maxRating: 1910,
    problemsSolved: 420,
    badge: "Candidate Master",
    url: "https://codeforces.com/"
  }
];
