export const profile = {
  name: "Lush Sleutsky",
  tagline: "Senior Software Engineer",
  location: "Philadelphia, PA",
  email: "lush.sleutsky@gmail.com",
  social: [
    { title: "GitHub", url: "https://github.com/lsleutsky" },
    { title: "LinkedIn", url: "https://linkedin.com/in/lushsleutsky" }
  ]
};

export interface ExperienceItem {
  title: string;
  dates: string;
  company: string;
  description: string;
  items: string[];
  color: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Developer",
    dates: "2025 - Present",
    company: "LifeLens Technologies, Inc.",
    description:
      "Wearable health-tech startup where I ship the software headed for FDA submission: React Native apps that talk to medical devices over BLE, a clinician web portal for sleep and cardiac data, and a Tauri provisioning suite in Rust deployed with U.S. military units.",
    items: [
      "Took a greenfield React Native clinician app from empty repo to 4 FDA pilot sites in 10 weeks, covering TAVR, sleep, cardiac rehab, and cath lab workflows through Python edge APIs running on Raspberry Pi gateways at each site.",
      "Wrote a native Kotlin foreground service that refuses to die, keeping Android from killing continuous BLE sessions through 16 days of at-home TAVR patient self-monitoring.",
      "Tracked down a silently failing SpO2 disable flag at patient discharge by reverse-engineering the peripheral firmware's 8-packet sensor config protocol, byte by byte.",
      "Built the sleep study analytics platform for FDA submission: 8 stacked real-time physiological lanes in SciChart, custom hover sampling across 1Hz and 30-second epoch signals, and automated SVG-based PDF reports.",
      "Cut the clinician web portal's initial bundle 80% (422KB to 84KB) with manual vendor chunking, lazy SciChart loading, parallel WASM preload, edge Brotli, and server-side rendering above the fold.",
      "Overhauled the Tauri desktop tool that manages U.S. military hardware fleets, adding a Rust feature flag system so each deployment gets its own custom build.",
      "Created the WCAG-compliant Storybook design system that ships LifeLens web and React Native UI from one package."
    ],
    color: "indigo"
  },
  {
    title: "Senior Web Engineer",
    dates: "2023 - Present",
    company: "Freelance / Contract",
    description:
      "Running my own book of clients for local businesses, SaaS products, and eCommerce shops, handling everything from first wireframe to production deploy and the infrastructure in between.",
    items: [
      "Cut 7+ seconds off the heaviest screens by moving client-rendered React, Next.js, and TanStack apps to SSR/SSG.",
      "Lifted user retention 35% by rewriting session flows and building the Express backends behind eCommerce, auth, and real-time features.",
      "Rebuilt image pipelines with responsive source sets, WebP, and lazy loading, taking LCP from over 5s to under 2s and Lighthouse performance to 95+.",
      "Pushed organic search rankings up with structured data and on-page SEO, contributing to 12% client revenue growth.",
      "Built AI-powered interfaces on top of LLM APIs that replaced hours of manual workflow for clients.",
      "Containerized every client project with repeatable Docker builds and automated deploys, handing over the keys so they can scale without calling me."
    ],
    color: "emerald"
  },
  {
    title: "Senior Software Engineer",
    dates: "2023",
    company: "Hovr, Inc.",
    description:
      "Content overlay platform that injects interactive video layers onto third-party websites using Shadow DOM, with no host-site code changes required. Think browser extension meets CMS.",
    items: [
      "Engineered the drag-and-drop composition editor in React, Redux Toolkit, and Firebase, with Shadow DOM isolation so complex layouts never leak styles into the host site.",
      'Built the analytics layer — real-time engagement charts, conversion funnels, ROI dashboards — that turned "cool demo" into measurable business value for sales.',
      "Shipped tiered feature gating across 4 paid levels, unlocking usage-based billing and the enterprise deals that were previously blocked on access control.",
      "Audited and fixed 50+ Figma flows for performance and accessibility, clearing the way for enterprise contracts.",
      "Trimmed CI build time 15% with Webpack 5 optimizations and GitHub Actions caching."
    ],
    color: "cyan"
  },
  {
    title: "Staff Software Engineer",
    dates: "2021 - 2023",
    company: "ASAP, Inc.",
    description:
      "National-scale food delivery across Waitr, Bite Squad, and Delivery Dudes — three brands, 1,000+ markets, millions of orders. I led the frontend effort to unify them into one platform.",
    items: [
      "Made the call to fold three separately maintained brand frontends into one Next.js + TypeScript monorepo and led the consolidation, retiring years of duplicated code so a change ships once for all 175K+ users.",
      "Treated page speed as a revenue problem: refactored the core React/Redux app and cleared 45+ performance bottlenecks, contributing to 19% revenue growth in one year.",
      "Cut the JS bundle 30% with Webpack tree shaking, dead CSS pruning, and CDN-delivered image pipelines.",
      "Stood up a venue-based mobile ordering flow on event-driven React 18 and EKS, opening a revenue channel the platform didn't have before.",
      "Added Stripe-powered subscription management that created a recurring revenue line item from scratch."
    ],
    color: "amber"
  },
  {
    title: "Senior User Interface Developer",
    dates: "2018 - 2021",
    company: "Comcast Business",
    description:
      "Enterprise portal for Comcast's business customers, covering account management, service configuration, and billing. Fast sprint cycles, high stakes, millions of end users.",
    items: [
      "Built the React/Redux self-serve diagnostics and configuration portals used by millions of B2B customers, cutting support ticket volume.",
      "Pushed for one shared design system instead of per-team UI across the React microfrontends, then shipped 40+ Storybook components into it. 200+ developers adopted it, so one component change reached dozens of apps at once.",
      "Launched QuickPay and live chat, raising user retention 20%.",
      "Drove the org's move from Enzyme to React Testing Library so tests assert what users see instead of component internals, bringing test reliability up to match the product's scale.",
      "Wrote the frontend standards multiple squads adopted (style guides, review checklists, architectural patterns), giving code review one shared bar across teams.",
      "Earned a senior promotion in under a year."
    ],
    color: "purple"
  },
  {
    title: "Full Stack Developer",
    dates: "2017 - 2018",
    company: "Angus Energy",
    description:
      "SaaS analytics platform for fuel delivery operators — think customizable dashboard with live fleet data, IoT sensor feeds, and delivery KPIs that actually mean something to the people using them.",
    items: [
      "Built a drag-and-resize widget dashboard with infinite scroll and lazy-loaded data allowing operators to assemble their own command center from a menu of KPI modules.",
      "Translated raw hex telemetry from field sensors into D3.js visualizations that caught equipment failures before they turned into emergency service calls, automating reporting steps that used to be manual.",
      "Architected the greenfield real-time IoT sensor monitoring platform in Angular 6, TypeScript, and KendoUI, setting the technical foundation for the product's next several years.",
      "Tuned Mongoose query logic for hierarchical data, speeding up MongoDB execution and eliminating 17% of stale data."
    ],
    color: "red"
  },
  {
    title: "Web Engineer",
    dates: "2012 - 2017",
    company: "Three Brothers, Inc.",
    description:
      "Took a word-of-mouth construction company digital from scratch — built every website, ran every ad campaign, and watched the pipeline grow year over year because of it.",
    items: [
      "Launched 22+ production landing pages for the parent company and its subsidiaries as the sole front-end engineer, owning the stack from design through deployment.",
      "Ran the Google AdWords and SEO playbook that turned a zero-web-presence business into one with a steady stream of inbound leads.",
      "Migrated a 4-year-old jQuery codebase to ES6 and AngularJS, setting the foundation for the next two years of feature work."
    ],
    color: "cyan"
  },
  {
    title: "Frontend Web Developer",
    dates: "2009 - 2012",
    company: "Shycon Design",
    description:
      "Agency life — client briefs on Monday, pixel-perfect deliveries by Friday. This is where I learned to ship fast, communicate clearly, and care about the details that clients notice.",
    items: [
      "Handled the full frontend cycle from wireframe-to-code through cross-browser QA and UAT, on timelines that didn't leave room for second guesses.",
      "Picked up Backbone.js and AngularJS early, and the architectural instincts I built here never left."
    ],
    color: "amber"
  }
];

export const technicalSkills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Node.js", "Python", "Rust", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "TanStack Start",
      "React Router",
      "React Native",
      "Expo",
      "Express.js"
    ]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS-in-JS", "SCSS / Sass", "Bootstrap", "Material UI", "shadcn/ui"]
  },
  {
    category: "State & Data",
    items: [
      "Context API",
      "TanStack Query",
      "Zustand",
      "Redux",
      "Firestore",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    category: "Infrastructure",
    items: ["Docker", "CI/CD", "Firebase", "Kubernetes", "Vercel"]
  },
  {
    category: "Tooling",
    items: ["Git", "Vite", "Webpack", "Rollup", "Storybook"]
  },
  {
    category: "Testing",
    items: ["Vitest", "Jest", "React Testing Library"]
  }
];

export const professionalSkills = [
  "Effective Communication",
  "Aggressive Organization",
  "Systematic Problem Solving",
  "Obsessive Documentation",
  "Cross-Team Collaboration",
  "Process Improvement",
  "Stakeholder Engagement",
  "Debugging & Testing",
  "Multitasking",
  "Time & Project Management"
];

export const languages = [
  { name: "English", level: "Native" },
  { name: "Russian", level: "Native" }
];

export const interests = [
  "Contact Sports",
  "Cosmology",
  "Norse Mythology",
  "History",
  "Psychology"
];
