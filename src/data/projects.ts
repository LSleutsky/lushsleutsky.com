export interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  liveLinks?: { label: string; url: string }[];
  githubUrl: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Elite Interior Solutions",
    category: "Frontend",
    status: "Production",
    description:
      "A pnpm monorepo powering two home improvement brands, Elite Basement Solutions and Elite Kitchens & Bathrooms, built on a shared UI component library and server-rendered",
    highlights: [
      "pnpm monorepo: two brand sites sharing one UI component library",
      "Server-side rendered via React Router 7 on an Express backend",
      "Lead-capture contact forms with transactional email delivery",
      "Containerized with Docker for reproducible deploys"
    ],
    tech: ["React", "React Router 7", "Tailwind CSS", "Express"],
    liveLinks: [
      { label: "Basements", url: "https://elitebasementsolutions.com" },
      { label: "Kitchens", url: "https://elitekitchensbathrooms.com" }
    ],
    githubUrl: "https://github.com/LSleutsky/elite-interior-solutions",
    color: "indigo"
  },
  {
    title: "Kitchen Gurus",
    category: "Frontend",
    status: "Production",
    description:
      "Kitchen remodeling company serving the greater Philadelphia area, featuring a multi-step estimate flow and social proof from 10+ review platforms.",
    highlights: [
      "Material-based UI with brand identity",
      "Multi-step consultation and estimate request flow",
      "Local SEO optimized for Philadelphia metro area",
      "Geolocation-based service area pages with dynamic content"
    ],
    tech: ["React", "React Router 7", "Material UI", "Vite"],
    liveUrl: "https://kitchengurus.net",
    githubUrl: "https://github.com/LSleutsky/kitchen-gurus",
    color: "emerald"
  },
  {
    title: "Robka Shop",
    category: "Full Stack",
    status: "Production",
    description:
      "Internal jewelry repair shop management app with ticket tracking, live metal pricing feeds, and spreadsheet export for daily operations.",
    highlights: [
      "Full CRUD repair ticket management system",
      "Live gold, silver, and platinum pricing dashboard",
      "Spreadsheet export for bookkeeping and reporting",
      "Custom dark theme with Outfit + Space Grotesk typography"
    ],
    tech: ["React", "Vite", "TypeScript", "REST API"],
    liveUrl: "https://robkashop.com",
    githubUrl: "https://github.com/LSleutsky/robka-shop",
    color: "amber"
  }
];
