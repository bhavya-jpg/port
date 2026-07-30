export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  details: string[];
}

export const processQuote = "I keep my execution disciplined and transparent: understand the core problem first, then build with relentless craft.";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understanding the Problem",
    subtitle: "Deep investigation before a single line of code or camera setup",
    details: [
      "Deconstruct user pain points, system constraints, or narrative core.",
      "Filter noise to isolate the exact 20% of features or scenes that drive 80% of impact."
    ]
  },
  {
    number: "02",
    title: "Defining Direction",
    subtitle: "Turning abstract requirements into a concrete, executable roadmap",
    details: [
      "Establish architectural blueprints or moodboards & storyboard sequences.",
      "Align on clear technical benchmarks, deadlines, and visual aesthetics."
    ]
  },
  {
    number: "03",
    title: "Designing the Solution",
    subtitle: "Component architecture & visual framing design",
    details: [
      "Draft modular component trees, state flows, API contracts, or shot lists.",
      "Iterate on dynamic micro-interactions, dark-mode color palettes, and lighting design."
    ]
  },
  {
    number: "04",
    title: "Building & Refining",
    subtitle: "Focused technical execution and iterative polish",
    details: [
      "Write clean, type-safe code or execute precision camera operations and color passes.",
      "Benchmark runtime performance, audit accessibility, and polish motion kinetics."
    ]
  },
  {
    number: "05",
    title: "Delivery & Support",
    subtitle: "Shipping to production & ongoing system health",
    details: [
      "Deploy with CI/CD pipelines, optimize Core Web Vitals, and monitor analytics.",
      "Maintain active documentation, deliver final 4K masters, and support iterations."
    ]
  }
];
