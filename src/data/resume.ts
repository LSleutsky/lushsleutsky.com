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
      "Wearable health-tech startup where I own the entire mobile and desktop toolchain — React Native apps that talk to medical devices over BLE, a Tauri-based provisioning suite in Rust, and the shared component system that ties it all together.",
    items: [
      "Took an Android app from empty repo to signed APK, streaming live ECG data from wearable hubs over encrypted BLE with sub-100ms latency and a foreground service that refuses to die.",
      "Wrote native Kotlin bridge modules for BLE and NFC so the React Native layer could read, write, and provision medical hardware without fighting the platform.",
      "Shipped a Tauri desktop app backed by Rust that provisions, configures, and OTA-updates an entire fleet of IoT devices with live progress per unit.",
      "Created the cross-platform Storybook design system — one binary, web and mobile, WCAG-compliant, Atomic Design — now the single source of truth for every UI surface.",
      "Rebuilt the CI pipeline around Yarn 4 PnP and 250+ tests; builds run 40% faster and regressions get caught before anyone opens a PR."
    ],
    color: "indigo"
  },
  {
    title: "Senior Web Engineer",
    dates: "2023 - Present",
    company: "Freelance / Contract",
    description:
      "Running my own book of clients — local businesses, SaaS products, eCommerce shops — handling everything from first wireframe to production deploy and the infrastructure in between.",
    items: [
      "Ship SPAs, SSR sites, and hybrid apps across React, Next.js, React Router 7, and React Native depending on what the project actually needs — not what's trendy.",
      "Wired up full eCommerce pipelines end-to-end: payment processing, transactional email, inventory hooks, and the Express backends that glue them together.",
      "Built AI-powered interfaces on top of LLM APIs that replaced hours of manual workflow for clients who didn't even know that was possible when they hired me.",
      "Containerized every client project with repeatable Docker builds and automated deploys — hand them the keys and they can scale without calling me."
    ],
    color: "emerald"
  },
  {
    title: "Senior Software Engineer",
    dates: "2023",
    company: "Hovr, Inc.",
    description:
      "Content overlay platform that injects interactive video layers onto third-party websites using Shadow DOM — no host-site code changes required. Think browser extension meets CMS.",
    items: [
      "Owned the Shadow DOM rendering pipeline that lets brands drop rich media onto any page without breaking the host site's styles or scripts.",
      'Built the analytics layer — real-time engagement charts, conversion funnels, ROI dashboards — that turned "cool demo" into measurable business value for sales.',
      "Shipped the feature-gating system that unlocked tiered pricing, directly enabling enterprise deals that were previously blocked on access control."
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
      "Ran a performance blitz that put our web vitals ahead of DoorDash and GrubHub — measurable improvement in conversion and order volume across the network.",
      "Architected and led the three-brand consolidation into a single Next.js + TypeScript codebase using npm workspaces, retiring years of duplicated frontend code.",
      "Stood up a venue-based mobile ordering flow on React 18 concurrent mode and EKS, opening a revenue channel the platform didn't have before.",
      "Added Stripe-powered subscription management that created a recurring revenue line item from scratch."
    ],
    color: "amber"
  },
  {
    title: "Senior User Interface Developer",
    dates: "2018 - 2021",
    company: "Comcast Business",
    description:
      "Enterprise portal for Comcast's business customers — account management, service configuration, billing. Fast sprint cycles, high stakes, millions of end users.",
    items: [
      "Ran the shared Storybook component library that every team consumed — when I changed a component, it shipped to dozens of apps simultaneously.",
      "Replaced Enzyme with React Testing Library across the org's test suites before most teams even knew RTL existed, bringing test reliability up to match the product's scale.",
      "Set the frontend coding standards that stuck — style guides, review checklists, architectural patterns — adopted across multiple squads.",
      "Earned a senior promotion in under a year, which doesn't happen often in an org that size."
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
      "Built a drag-and-resize widget dashboard with infinite scroll and lazy-loaded data — operators assembled their own command center from a menu of KPI modules.",
      "Translated raw hex telemetry from field sensors into human-readable dashboards that caught equipment failures before they turned into emergency service calls.",
      "Led the greenfield rewrite from AngularJS to Angular 6 with D3.js visualizations, setting the technical foundation for the product's next five years."
    ],
    color: "red"
  },
  {
    title: "Solutions Developer",
    dates: "2014 - 2015",
    company: "Kids Live Safe",
    description:
      "Child safety platform with a massive records database and real-time alert system — my job was making the frontend fast, compliant, and conversion-friendly.",
    items: [
      "Tightened the frontend for W3C compliance and cross-browser parity across a subscription product serving millions of lookups.",
      "Built the email template engine — adaptive HTML that looked right in 30+ mail clients and drove the re-engagement and alert notification flows."
    ],
    color: "emerald"
  },
  {
    title: "Web Engineer",
    dates: "2012 - 2017",
    company: "Three Brothers, Inc.",
    description:
      "Took a word-of-mouth construction company digital from scratch — built every website, ran every ad campaign, and watched the pipeline grow year over year because of it.",
    items: [
      "Created and maintained web properties for the parent company and its subsidiaries, handling design, development, and hosting across the board.",
      "Ran the Google AdWords and SEO playbook that turned a zero-web-presence business into one with a steady stream of inbound leads.",
      "Grew the stack from static pages to jQuery to AngularJS over five years as the business outgrew what came before."
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
      "Handled the full frontend cycle from PSD-to-code through cross-browser QA and UAT, on timelines that didn't leave room for second guesses.",
      "Picked up Backbone.js and AngularJS before most developers had heard of them — the architectural instincts I built here never left."
    ],
    color: "amber"
  }
];

export const technicalSkills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["React", "React Native", "Next.js", "TanStack Start", "Expo", "Express.js"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS-in-JS", "SCSS / Sass", "Material UI", "shadcn/ui"]
  },
  {
    category: "State & Data",
    items: ["Context API", "TanStack Query", "Zustand", "Redux", "Firestore"]
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
  "Problem Solving",
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
  "Technology",
  "Artificial Intelligence",
  "Contact Sports",
  "Cosmology",
  "Norse Mythology"
];
