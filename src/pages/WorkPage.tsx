import Contact from "@/components/Contact";
import TimelineEntry from "@/components/TimelineEntry";
import TracingBeam from "@/components/TracingBeam";

import { experience } from "@/data/resume";

const title = "Experience | Lush Sleutsky";
const description =
  "Work history of Lush Sleutsky: 15+ years shipping web, mobile, and cross-platform software for startups and enterprise.";

export function meta() {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description }
  ];
}

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-8 flex items-center justify-between border-b border-indigo-500/20 pb-4 text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap text-gray-400">
            <span>
              MODE: <span className="text-emerald-400">EXPERIENCE</span>
            </span>
          </div>
        </div>
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Background
          </h1>
          <div className="mb-6 inline-block rounded-full border border-indigo-500/30 px-4 py-1">
            <span className="text-sm tracking-wider text-indigo-400">15+ years of experience</span>
          </div>
        </div>
        {/* Experience timeline */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Work History
          </h2>
          <TracingBeam>
            {experience.map((job, index) => (
              <TimelineEntry key={index} job={job} />
            ))}
          </TracingBeam>
        </div>
        {/* Additional */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Additional
          </h2>
          <ul className="space-y-3">
            {[
              "I set technical direction by writing it down first: the plan, what it touches, and what is out of scope, agreed before any code exists.",
              "I would rather make the right way the easy way than police it. Shared design systems, written standards, and automated checks are how my decisions have reached other teams.",
              "I use code review to raise the bar for the team, not just the diff. When something is hard to follow I say so, explain why, and offer a cleaner path forward.",
              "I favor composable, testable modules over monoliths, and I judge an architecture by how safely the next engineer can change it.",
              "I run coding agents like Claude Code and Codex under a written working agreement with enforced checks, and I read and commit every diff myself.",
              "Self-taught from the start, which is why I go wherever the problem is: firmware packet protocols, native Kotlin services, and Rust tooling when the product needed them."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Contact
          message="Have an idea but need help bringing it to life? Let's talk about what I can build for you."
          showHeading={false}
        />
      </div>
    </div>
  );
}
