export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate realistic placeholder contribution data for a year
const generateCalendarData = (seedOffset: number) => {
  const days: ContributionDay[] = [];
  const today = new Date();
  for (let i = 180; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const pseudoRandom = Math.sin(i * 999 + seedOffset) * 10000;
    const val = Math.floor((pseudoRandom - Math.floor(pseudoRandom)) * 5);
    const level = val as 0 | 1 | 2 | 3 | 4;
    days.push({
      date: dateStr,
      count: level * 3,
      level
    });
  }
  return days;
};

export const codeContributions = generateCalendarData(101);
export const filmContributions = generateCalendarData(202);
