import { useState } from "react";

import { experience, ExperienceItem } from "@/data/resume";

const TimelineEntry = ({ job }: { job: ExperienceItem }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative cursor-pointer border-l-2 border-indigo-500/30 pb-8 pl-8 last:border-l-transparent last:pb-0"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Timeline dot */}
      <div className="border-dark-950 absolute top-0 left-0 h-4 w-4 -translate-x-2.25 rounded-full border-4 bg-indigo-500" />
      {/* Header */}
      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-indigo-400">
        {job.title}
      </h3>
      <div className="mb-1 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-500">@ {job.company}</span>
        <span className="text-sm text-indigo-400">{job.dates}</span>
      </div>
      <span className="mb-3 inline-block text-xs text-gray-600">
        {expanded ? "▼ collapse" : "▶ expand"}
      </span>
      <p className="mb-3 text-gray-400">{job.description}</p>
      {/* Expandable highlights */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2 pt-2">
          {job.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Page header */}
        <div className="mb-8 flex items-center justify-between border-b border-indigo-500/20 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-400 sm:text-sm">WORK HISTORY</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Work History
          </h1>
          <div className="mb-6 inline-block rounded-full border border-indigo-500/30 px-4 py-1">
            <span className="text-sm tracking-wider text-indigo-400">15+ years of experience</span>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Experience
          </h2>

          <div>
            {experience.map((job, i) => (
              <TimelineEntry key={i} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
