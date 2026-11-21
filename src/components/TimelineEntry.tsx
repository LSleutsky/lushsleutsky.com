import { useState } from "react";

import { ExperienceItem } from "@/data/resume";

export default function TimelineEntry({ job }: { job: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pb-8 pl-8 last:pb-0">
      {/* Timeline dot */}
      <div className="border-dark-950 absolute top-0 left-0 h-4 w-4 -translate-x-2.25 rounded-full border-4 bg-indigo-500" />
      {/* Header */}
      <h3>
        <button
          aria-expanded={expanded}
          className="group block w-full cursor-pointer text-left"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="block text-xl font-semibold text-white transition-colors group-hover:text-indigo-400">
            {job.title}
          </span>
          <span className="mb-1 flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-400">@ {job.company}</span>
            <span className="text-sm text-indigo-400">{job.dates}</span>
          </span>
          <span aria-hidden="true" className="mb-3 inline-block text-xs text-gray-400">
            {expanded ? "▼ collapse" : "▶ expand"}
          </span>
        </button>
      </h3>
      <p className="mb-3 text-gray-400">{job.description}</p>
      {/* Expandable highlights */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!expanded}>
          <ul className="space-y-2 pt-2">
            {job.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
