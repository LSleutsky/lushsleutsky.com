import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/data/projects";

export default function Showcase() {
  return (
    <section className="py-24" id="projects">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
            <span className="text-indigo-400">{`//`}</span> Projects
          </h2>
          <p className="text-gray-400">Client projects built and shipped to production.</p>
        </div>
        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
