import Contact from "@/components/Contact";
import TimelineEntry from "@/components/TimelineEntry";

import { experience } from "@/data/resume";

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-8 flex items-center justify-between border-b border-indigo-500/20 pb-4 text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
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
          <div>
            {experience.map((job, i) => (
              <TimelineEntry key={i} job={job} />
            ))}
          </div>
        </div>
        {/* Additional */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Additional
          </h2>
          <ul className="space-y-3">
            {[
              "Self-taught foundation with 15+ years of building things with code, starting long before it was a career.",
              "I write code that other people can actually read, maintain, and build on. Clean file structure, consistent naming, small focused modules, no clever tricks that only make sense to the person who wrote them.",
              "Proficient with AI-assisted development tools like Claude Code, GitHub Copilot, Codex, and Ollama, integrated into daily workflows to move faster without giving up control.",
              "I treat code review the same way I treat my own code. If something is hard to follow or unnecessarily complex, I say so and offer a cleaner path forward.",
              "Strong preference for composable, testable, modular architecture over monolithic patterns. If I can't explain a component's job in one sentence, it's doing too much."
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
