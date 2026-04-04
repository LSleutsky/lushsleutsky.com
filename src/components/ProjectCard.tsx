import { useState, useEffect, useRef } from "react";

import { Project } from "@/data/projects";

const colorMap: Record<
  string,
  { border: string; hoverBorder: string; dot: string; text: string; tag: string }
> = {
  indigo: {
    border: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/40",
    dot: "bg-indigo-500",
    text: "text-indigo-400",
    tag: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
  },
  emerald: {
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
  },
  amber: {
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    dot: "bg-amber-500",
    text: "text-amber-400",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-300"
  }
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const colors = colorMap[project.color] || colorMap.indigo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className={`group bg-dark-900/50 relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 ${
        colors.border
      } ${colors.hoverBorder} hover:bg-dark-800/50 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex flex-1 flex-col p-6">
        {/* Category + status */}
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-xs font-medium tracking-wider uppercase ${colors.text}`}>
            {project.category}
          </span>
          <span className="bg-dark-700 rounded-full px-3 py-1 text-xs text-gray-400">
            {project.status}
          </span>
        </div>
        {/* Title */}
        <h3 className="group-hover:text-accent-400 mb-2 text-xl font-semibold text-white transition-colors">
          {project.title}
        </h3>
        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>
        {/* Highlights */}
        <ul className="mb-5 space-y-2">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
              {highlight}
            </li>
          ))}
        </ul>
        {/* Tech tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-dark-700/50 rounded-md px-2.5 py-1 text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="border-dark-700 mt-auto flex gap-3 border-t pt-4">
          <a
            className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
            href={project.liveUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Live Site
          </a>
        </div>
      </div>
      {/* Bottom glow line on hover */}
      <div className="via-accent-500/50 absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </article>
  );
}
