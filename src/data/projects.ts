export interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Elite Basement Solutions",
    category: "Frontend",
    status: "Production",
    description:
      "A full-service home improvement company specializing in basement waterproofing, mold remediation, and renovations across Pennsylvania, New Jersey, and Delaware.",
    highlights: [
      "React Router 7 SPA with dark/light theme toggle",
      "SEO-optimized with structured data and meta tags",
      "Responsive service pages with lead generation forms",
      "Deployed to edge with sub-second load times"
    ],
    tech: ["React", "React Router 7", "Tailwind CSS", "Vite"],
    liveUrl: "https://elitebasementsolutions.com",
    color: "indigo"
  },
  {
    title: "Kitchen Gurus",
    category: "Frontend",
    status: "Production",
    description:
      "Kitchen remodeling company serving the greater Philadelphia area, featuring a multi-step estimate flow and social proof from 10+ review platforms.",
    highlights: [
      "Material-based UI with green brand identity",
      "Multi-step consultation and estimate request flow",
      "Local SEO optimized for Philadelphia metro area",
      "Integrated review badges from Google, Yelp, Angi, BBB"
    ],
    tech: ["React", "React Router 7", "Material UI", "Vite"],
    liveUrl: "https://kitchengurus.net",
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
      "Custom dark theme with Outfit + Space Grotesk typography",
      "Custom repair tracking system with status updates and notes"
    ],
    tech: ["React", "Vite", "TypeScript", "REST API"],
    liveUrl: "https://robkashop.com",
    color: "amber"
  }
];
