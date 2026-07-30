export interface OpenSourceProgram {
  id: string;
  name: string;
  organization: string;
  duration: string;
  role: string;
  description: string;
  links: {
    prs?: string;
    repo?: string;
    certificate?: string;
  };
}

export const openSourcePrograms: OpenSourceProgram[] = [
  {
    id: "swoc",
    name: "Social Winter of Code",
    organization: "Script Foundation",
    duration: "Jan 2024 - Mar 2024",
    role: "Open Source Contributor",
    description: "Contributed to multiple projects by fixing critical bugs, improving documentation, and adding new features. Mentored newcomers in the open-source community.",
    links: {
      prs: "https://github.com/placeholder-swoc-prs",
      repo: "https://github.com/placeholder-swoc-repo",
      certificate: "https://placeholder-swoc-cert.com"
    }
  },
  {
    id: "osgc",
    name: "Open Source Global Connect",
    organization: "OSGC",
    duration: "Jun 2023 - Aug 2023",
    role: "Core Contributor",
    description: "Collaborated with international developers to build tools for the open-source ecosystem. Achieved top contributor status during the program.",
    links: {
      prs: "https://github.com/placeholder-osgc-prs",
      repo: "https://github.com/placeholder-osgc-repo"
    }
  },
  {
    id: "gsoc-org",
    name: "Major Open Source Project",
    organization: "[GSoC-affiliated Org Name]",
    duration: "Sep 2023 - Dec 2023",
    role: "Top Contributor",
    description: "Consistently delivered high-quality pull requests, optimizing database queries and resolving complex UI state issues. Recognized as a top contributor for outstanding impact.",
    links: {
      prs: "https://github.com/placeholder-gsoc-prs",
      repo: "https://github.com/placeholder-gsoc-repo"
    }
  }
];
