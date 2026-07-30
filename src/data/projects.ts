export interface ProjectData {
  id: string;
  title: string;
  category: 'engineering' | 'cinematography';
  yearAccomplished: string;
  role: string;
  projectType: string;
  recognition: string;
  publicationLink: string;
  githubLink: string;
  tagline: string;
  story: string[];
  image: string;
  tags: string[];
  bgColorClass: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "01",
    title: "KinetixVerse",
    category: "engineering",
    yearAccomplished: "2025 Onward",
    role: "Co-founder, Product Design & Research Lead",
    projectType: "Self-initiated startup",
    recognition: "kinetixverse.dev, YC S26 Application",
    publicationLink: "https://kinetixverse.dev",
    githubLink: "",
    tagline: "An AI pipeline that converts ordinary videos into interactive 3D simulation environments for robot training, turning hours of manual simulation work into minutes.",
    story: [
      "The bottleneck in robotics isn't hardware. It's training data. Building a simulation environment for a task as simple as 'open a door' can take engineers days of manual work including modelling, physics setup, joint definitions, and environment scripting.",
      "KinetixVerse eliminates that bottleneck. Upload a phone video. The system reconstructs the 3D scene using Gaussian Splatting, segments objects with SAM, detects articulation, generates physics assets, and exports a robot-ready simulation in URDF or USD format for NVIDIA Isaac Sim. What took days takes minutes.",
      "I co-founded this with a technical co-founder who handles the reconstruction and robotics stack. My role covers everything on the product side from system architecture, research, pipeline design, to UI/UX and strategy.",
      "The opportunity is real. Humanoid robotics companies like Tesla Optimus, Figure AI, and Agility Robotics need massive volumes of simulation environments. Millions of useful videos already exist from YouTube tutorials to security footage and industrial recordings. KinetixVerse turns that archive into training data.",
      "What I learned is how to think in systems at a startup level and how to translate a research-heavy vision into a buildable roadmap. The hardest part of an ambitious idea isn't the technology, it's staying precise about which problem you're actually solving, for whom, and why now."
    ],
    image: "/kinetixVerse.png",
    tags: ["AI", "Robotics", "3D Simulation"],
    bgColorClass: "bg-[#13111a]"
  },
  {
    id: "02",
    title: "Proofora",
    category: "engineering",
    yearAccomplished: "2025",
    role: "Full-Stack Developer, AI & Blockchain Lead",
    projectType: "Hackathon Project",
    recognition: "Winner of Best Web3 Project",
    publicationLink: "",
    githubLink: "https://github.com/bhavya-jpg/Prooforaa",
    tagline: "An AI-powered design ownership and plagiarism detection platform that uses Aptos blockchain to give creators cryptographic proof of when their work was made.",
    story: [
      "Designers get ripped off constantly. Their work gets lifted, reposted, and resold. They have no verifiable proof of when they created it. Proofora is built to fix that.",
      "Creators upload their design files. An OpenCV-based scanning engine runs pixel-level plagiarism detection with high accuracy. Then the Aptos blockchain timestamps ownership immutably. If your work gets stolen, you have cryptographic proof it was yours first. It provides an on-chain record rather than just a screenshot.",
      "My role was designing the full RESTful API using MERN and FastAPI. I built the OpenCV scanning engine and integrated the Aptos blockchain ownership module.",
      "We won Best Web3 Project at Hack On Hills 7.0, outperforming over 150 teams at North India's largest tech fest. But the win wasn't the point. Proof of creation is a fundamentally unsolved issue for digital creators, and the solution doesn't need to be complex to be meaningful.",
      "What I learned is that blockchain stops being hype the moment it's solving a real human problem. Provenance is one of those problems. I also learned that building under a 24-hour hackathon deadline forces you to cut everything non-essential and ship the core idea."
    ],
    image: "/Proofora.png",
    tags: ["Blockchain", "OpenCV", "FastAPI"],
    bgColorClass: "bg-[#111a18]"
  },
  {
    id: "03",
    title: "MedLink",
    category: "engineering",
    yearAccomplished: "2025",
    role: "Full-Stack Developer, System Architecture",
    projectType: "Smart India Hackathon 2025",
    recognition: "Top 20 Finalist in SIH 2025 Offline Round",
    publicationLink: "https://namaste-icd-mapper.vercel.app/",
    githubLink: "https://github.com/bhavya-jpg/NAMASTE_ICD_mapper",
    tagline: "A FHIR-compliant interoperability platform that bridges AYUSH traditional medicine diagnoses with ICD-11 global standards, connecting two healthcare worlds that currently cannot speak to each other.",
    story: [
      "India has hundreds of thousands of registered AYUSH practitioners whose diagnostic records exist in a completely different coding system from mainstream healthcare. Their patient data can't integrate with hospitals, insurance networks, or global health databases. Patients fall through the gaps.",
      "MedLink is a dual-coding system. It maps AYUSH diagnoses to ICD-11 in real time through a FHIR-compliant REST API. Doctors get an autocomplete-powered interface that reduces diagnosis entry time by 40 percent. ABHA-based OAuth keeps it within India's digital health identity framework.",
      "My role was architecting the backend API, designing the dual-mapping logic, and co-building the React interface with intelligent autocomplete.",
      "We were selected as Top 20 nationally at the SIH 2025 Offline Round. This is a problem affecting how millions of Indians access and record healthcare across systems.",
      "What I learned is that technical excellence matters less than solving the right problem at the right scale. Spending time understanding the actual workflow of an AYUSH practitioner before writing a single line of code was the most important thing we did."
    ],
    image: "/Medlink.png",
    tags: ["HealthTech", "FHIR", "React"],
    bgColorClass: "bg-[#111a15]"
  },
  {
    id: "04",
    title: "PRISM.ai",
    category: "engineering",
    yearAccomplished: "2025 Onward",
    role: "Product Designer, Full-Stack Developer",
    projectType: "Google Solution Challenge 2025",
    recognition: "Top 100 out of 85,000+ participants. Winner of Google DeepMind track at Electrothon 8.0.",
    publicationLink: "https://prism-ai-rho-one.vercel.app/",
    githubLink: "https://github.com/bhavya-jpg/prismAI",
    tagline: "An AI-powered supply chain intelligence platform with a multi-agent architecture and a real-time digital twin so operators can see disruptions before they happen.",
    story: [
      "Global supply chains fail because decision-makers lack real-time intelligence. A factory in Gujarat doesn't know a port in Rotterdam is congested until their shipment is already stuck. By then, it's too late to reroute. PRISM is built to change that.",
      "The platform combines multi-agent AI for demand forecasting, risk assessment, and logistics routing with a digital twin which is a live 3D simulation of your supply chain. Operators can see disruptions before they happen and model solutions before committing to them.",
      "I designed the full system including product architecture, API design, agent orchestration layer, and a GSAP-animated frontend with an editorial minimalism inspired by modern design trends. This has been my most long-running project with over a year of continuous iteration.",
      "What I learned is that multi-agent AI systems are only as good as how precisely you define each agent's boundaries. For an intelligence product, UI clarity isn't decoration, it is the product. Deciding what to surface and what to hide is the hardest design problem I've worked on."
    ],
    image: "/Prism.png",
    tags: ["AI Agents", "Supply Chain", "Digital Twin"],
    bgColorClass: "bg-[#11141a]"
  },
  {
    id: "05",
    title: "TaskPulse",
    category: "engineering",
    yearAccomplished: "2025",
    role: "Full-Stack Developer, Architect",
    projectType: "Independent SaaS Application",
    recognition: "AI Task Orchestration Platform",
    publicationLink: "https://taskpulse-ruddy.vercel.app/",
    githubLink: "https://github.com/bhavya-jpg/taskpulse",
    tagline: "An AI task capture layer for agencies that turns messages from Gmail, Slack, WhatsApp, and meeting transcripts into structured and tracked tasks.",
    story: [
      "TaskPulse is an AI task capture layer designed specifically for agencies. It plugs into the places where client work actually gets requested like Gmail, Slack, WhatsApp groups, and meeting transcripts. It reads those messages using Google Gemini and turns them into structured tasks with assignees and deadlines inside a central dashboard.",
      "The problem it targets is simple. In a small agency, requests live in WhatsApp groups, email threads, and Zoom calls. Nobody enters these into a task tool so things slip. TaskPulse makes capture automatic and provides the founder's view of client health in real time.",
      "The system features a multi tenant architecture with a Founder Control Center for an overview of all clients and employees, alongside an Employee console for individual task tracking. It seamlessly integrates four major pipelines into a unified client memory.",
      "I designed the full architecture using Next.js, Supabase, and Tailwind. I built a robust two tier AI extraction pipeline using Gemini 2.0 Flash to balance cost and accuracy. I also implemented an anti ban WhatsApp integration and a sophisticated real time event stream using Server Sent Events.",
      "What I learned is that building a unified client memory requires handling messy and unstructured human communication. Dealing with Hinglish processing, multi source ingestion, and real time streaming taught me how to architect resilient systems that gracefully handle the unpredictability of daily agency operations."
    ],
    image: "/taskPulse.png",
    tags: ["SaaS", "Next.js", "Supabase", "Gemini AI"],
    bgColorClass: "bg-[#181313]"
  },
  {
    id: "06",
    title: "GDG NIT Hamirpur Website",
    category: "engineering",
    yearAccomplished: "2025",
    role: "Core Contributor, Developer",
    projectType: "Organizational Community Project",
    recognition: "Official live site for GDG NIT Hamirpur",
    publicationLink: "https://gdg.nith.eu.org/",
    githubLink: "https://github.com/bhavya-jpg/gdg-website-reborn/tree/main",
    tagline: "The official website for Google Developer Groups at NIT Hamirpur, built to feel immersive and unmistakably Google while representing the chapter's community to students and recruiters alike.",
    story: [
      "A student tech community needs a digital home that does two things well. It must reflect the polish and design language of the global brand it represents, and it must actually get people to show up to events.",
      "We rebuilt the GDG NIT Hamirpur website from the ground up. I focused on structuring the core architecture and implementing fluid, high-performance interactions that guide users through past events, active initiatives, and community highlights.",
      "My specific role involved translating Google's material design principles into a dynamic web experience, optimizing asset delivery, and building reusable components that other contributors could easily expand upon.",
      "What I learned is that building for an organization is entirely different from a solo hackathon project. It requires writing code that other people can read, maintain, and contribute to. I learned how to balance creative frontend polish with the pragmatic needs of a community platform."
    ],
    image: "/gdgWebsite.png",
    tags: ["Community", "Frontend", "UI/UX"],
    bgColorClass: "bg-[#11151a]"
  },
  {
    id: "07",
    title: "frames_by_bhavya",
    category: "cinematography",
    yearAccomplished: "2024 Onward",
    role: "Director, Writer, Cinematographer, Editor",
    projectType: "Self-initiated Individual",
    recognition: "instagram.com/frames_by_bhavya",
    publicationLink: "https://instagram.com/frames_by_bhavya",
    githubLink: "",
    tagline: "A body of cinematic work including the short film Sanak built around one idea: that a frame can make a stranger feel something they haven't said aloud.",
    story: [
      "Most people who know me know I build things with code. What they don't always know is that I also make films.",
      "frames_by_bhavya is my ongoing project in cinematography focusing on dark, moody, narrative-driven work with voiceovers, sound design, and deliberate colour grading. I shoot portraits and landscapes, but my real interest is storytelling. Most of my videos follow a storyline where I write, direct, shoot, edit, and perform in them myself.",
      "Sanak is my short film. Sanak means obsession. The story follows Kabir, a man who can't escape the memory of Maya. She lingers in his mind like a haunting ghost. A love that has become a prison. As days pass, his grip on reality weakens. The line between love and madness begins to vanish. His friend Neil tries to pull him back. But Kabir spirals deeper. The question Sanak asks is whether you can ever truly break free from obsession, or if it swallows you whole.",
      "I made every creative decision in that film myself. That's not a boast, it's just how I work. I needed to understand every element of the craft, so I did all of it.",
      "What I learned is that constraint is a design tool and that sound is half of what an image feels like. That the best shot is usually the one you planned, then threw away for the one you felt in the moment. Being a solo filmmaker taught me more about product thinking than almost anything else because when you are the writer, director, camera, editor, and audience all at once, you learn to make decisions with incomplete information fast."
    ],
    image: "/sanak.png",
    tags: ["Cinematography", "Directing", "Color Grading"],
    bgColorClass: "bg-[#1a1515]"
  }
];
