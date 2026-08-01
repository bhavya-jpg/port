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
    duration: "Jan 2026 - Present",
    role: "Open Source Contributor",
    description: "Contributed to open-source projects across varied tech stacks, resolving issues with production-ready implementations.",
    links: {}
  },
  {
    id: "osgc",
    name: "Open Source Global Connect",
    organization: "OSGC",
    duration: "Feb 2026 - Present",
    role: "Campus Lead",
    description: "Championed open-source awareness and community-building. Integrated 100+ students into contribution pipelines and ran onboarding workshops.",
    links: {}
  },
  {
    id: "openmrs",
    name: "OpenMRS",
    organization: "OpenMRS",
    duration: "Nov 2025 - Present",
    role: "Open Source Contributor, Top Contributor",
    description: "Ranked among top contributors to the global OpenMRS open-source healthcare platform with 12+ merged PRs. Collaborated globally on performance optimization and documentation.",
    links: {}
  }
];
