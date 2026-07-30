export interface GitHubData {
  username: string;
  stats: {
    label: string;
    value: string;
  }[];
  pinnedRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
  mergedPRs: {
    repo: string;
    title: string;
    url: string;
    date: string;
  }[];
}

export const githubData: GitHubData = {
  username: "bhavya-jpg", // Placeholder, user will replace
  stats: [
    { label: "Total Contributions (Year)", value: "1,204" },
    { label: "Pull Requests Merged", value: "42" },
    { label: "Open Source Orgs", value: "3" },
    { label: "Repositories", value: "28" },
  ],
  pinnedRepos: [
    {
      name: "nexus-ai",
      description: "A high-performance LLM orchestration backend built to route and optimize prompts.",
      language: "TypeScript",
      stars: 124,
      forks: 12,
      url: "https://github.com/bhavya-jpg/nexus-ai"
    },
    {
      name: "quantum-ui",
      description: "An open-source React component library heavily focused on accessibility.",
      language: "TypeScript",
      stars: 89,
      forks: 5,
      url: "https://github.com/bhavya-jpg/quantum-ui"
    }
  ],
  mergedPRs: [
    {
      repo: "vercel/next.js",
      title: "fix(router): resolve race condition in prefetch",
      url: "https://github.com/vercel/next.js/pull/1",
      date: "Oct 2025"
    },
    {
      repo: "tailwindlabs/tailwindcss",
      title: "feat(core): add container query support",
      url: "https://github.com/tailwindlabs/tailwindcss/pull/1",
      date: "Aug 2025"
    },
    {
      repo: "shadcn/ui",
      title: "fix(accordion): keyboard navigation edge case",
      url: "https://github.com/shadcn-ui/ui/pull/1",
      date: "Jun 2025"
    }
  ]
};
