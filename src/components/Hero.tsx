import { Link } from "react-router";

import Terminal from "@/components/Terminal";

import { profile } from "@/data/resume";
import useClock from "@/hooks/useClock";

export default function Hero() {
  const clock = useClock();

  return (
    <section className="bg-dark-950 relative min-h-screen overflow-hidden font-mono">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36">
        {/* Status bar */}
        <div className="relative mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/20 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-emerald-400">SYSTEM ACTIVE</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-gray-600">LOCAL:</span>
            <span className="font-bold tracking-wider text-emerald-400">{clock}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="hidden sm:inline">
              LOCATION: <span className="text-cyan-400">{profile.location}</span>
            </span>
          </div>
        </div>
        {/* Hero heading */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block rounded-full border border-indigo-500/30 px-6 py-2">
            <span className="text-sm tracking-widest text-indigo-400 sm:text-base">
              SENIOR SOFTWARE ENGINEER
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            15+ years building web, mobile, and cross-platform apps for startups and enterprise
          </p>
        </div>
        {/* CTA buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
            href="#projects"
          >
            View Projects
          </a>
          <Link
            className="rounded-lg border border-indigo-500/30 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/60 hover:text-white"
            to="/work"
          >
            Experience
          </Link>
          <a
            className="rounded-lg border border-emerald-500/30 px-6 py-3 text-sm font-medium text-emerald-300 transition-all hover:border-emerald-500/60 hover:text-white"
            href="#contact"
          >
            Get In Touch
          </a>
          <a
            className="rounded-lg border border-cyan-500/30 px-6 py-3 text-sm font-medium text-cyan-300 transition-all hover:border-cyan-500/60 hover:text-white"
            href="https://github.com/lsleutsky"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="rounded-lg border border-purple-500/30 px-6 py-3 text-sm font-medium text-purple-300 transition-all hover:border-purple-500/60 hover:text-white"
            href="https://linkedin.com/in/lushsleutsky"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        {/* Terminal */}
        <Terminal />
      </div>
    </section>
  );
}
