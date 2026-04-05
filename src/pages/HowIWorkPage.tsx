const tools = [
  {
    name: "Claude Code",
    description:
      "Primary development partner for architecture decisions, complex implementations, and iterative problem-solving across entire codebases."
  },
  {
    name: "GitHub Copilot",
    description:
      "Inline completions and quick pattern matching during active coding sessions, which is very useful for boilerplate and repetitive patterns."
  },
  {
    name: "Codex",
    description:
      "Targeted code generation and transformation tasks, especially when working across multiple files or translating between frameworks."
  },
  {
    name: "Ollama",
    description:
      "Local model inference for offline development, sensitive codebases, and rapid prototyping without external API dependencies."
  }
];

const methodology = [
  {
    title: "Architectural Scaffolding",
    description:
      "I describe the system I want — the constraints, the data flow, the boundaries — and use AI to generate the initial structure. Every file, every interface, every route gets reviewed and reshaped before anything else builds on top of it.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Research & Validation",
    description:
      "When I hit an unfamiliar API, a platform constraint, or a design pattern I haven't used before, I use LLMs to explore options, surface trade-offs, and stress-test my assumptions before writing production code.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Iterative Refinement",
    description:
      "First pass gets the logic right. Second pass cleans the abstractions. Third pass hardens the edge cases. AI accelerates each cycle, but the judgment calls like what to keep, what to cut, and what to rethink, are all me.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Rubber Duck at Scale",
    description:
      "Explaining a problem to an LLM forces clarity the same way explaining it to a colleague does, except I can do it at 2 AM without waking anyone up, and the feedback loop is instant.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

const workflow = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description:
      "Understand the problem before touching code. I map out requirements, identify constraints, and define what 'done' looks like, then use AI to rapidly research unfamiliar domains, surface edge cases I might miss, and validate that the scope makes sense before committing to an approach."
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Define the system boundaries, data flow, and component contracts. AI helps me evaluate patterns I'm considering, prototype interfaces quickly, and pressure-test decisions against real-world scenarios. bThe architecture, though, is mine, and I can defend every choice in it."
  },
  {
    step: "03",
    title: "Accelerated Development",
    description:
      "This is where AI earns its keep. Scaffolding, boilerplate, test harnesses, migration scripts, and anything that follows a known pattern, gets generated and reviewed rather than typed line by line. The time I save goes straight into the work that actually requires judgment and brain power."
  },
  {
    step: "04",
    title: "Ship & Iterate",
    description:
      "Containerized builds, automated pipelines, production deploys. AI helps me write deployment configs, catch issues in CI output, and draft documentation, but I'm the one watching the logs, triaging the alerts, and deciding what ships next."
  }
];

export default function HowIWorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-8 border-b border-indigo-500/20 pb-4 text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
            <span>
              MODE: <span className="text-cyan-400">AI-AUGMENTED</span>
            </span>
          </div>
        </div>

        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My Neural Network
          </h1>
          <p className="max-w-3xl text-lg text-gray-400">
            {`Let's be real — AI is everywhere, and yes, I make use of it. I think any valuable and intellectually honest engineer these days that claims otherwise is either lying, or in denial. But... AI doesn't write my code; it accelerates the process of turning my decisions into
            working software. Here's how that looks in practice.`}
          </p>
        </div>

        {/* Tools I Use */}
        <section className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Tools in My Workflow
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="border-dark-700 bg-dark-900/50 hover:border-dark-600 rounded-xl border p-5 transition-colors"
              >
                <h4 className="mb-2 text-sm font-semibold text-white">{tool.name}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> How I Use Them
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {methodology.map((card) => (
              <div
                key={card.title}
                className="border-dark-700 bg-dark-900/50 hover:border-dark-600 rounded-xl border p-5 transition-colors"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white">{card.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Workflow Timeline */}
        <section className="mb-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              From Concept to Production
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              How AI tools integrate into my development process at every stage. From the first
              conversation to production deployments.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="from-accent-500/50 via-dark-700 absolute top-0 left-8 hidden h-full w-px bg-linear-to-b to-transparent lg:left-1/2 lg:block" />

            <div className="space-y-12">
              {workflow.map((item, i) => (
                <div
                  key={item.step}
                  className={`relative flex flex-col items-start lg:items-center ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step circle */}
                  <div className="border-dark-700 bg-dark-900 text-accent-400 absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border text-xl font-bold lg:left-1/2 lg:-translate-x-1/2">
                    {item.step}
                  </div>

                  {/* Card */}
                  <div
                    className={`border-dark-700 bg-dark-900/50 ml-24 rounded-xl border p-6 lg:ml-0 lg:w-5/12 ${
                      i % 2 === 0 ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <section className="border-t border-indigo-500/20 py-12 text-center">
          <blockquote className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 italic">
            {`"I don't use AI to think for me. I use it to keep up with the pace of what
            I'm already thinking. Every architectural decision, every trade-off, every line
            that ships... that's my judgment. The tools just make sure the gap between my mental
            model and working software is as short as possible."`}
          </blockquote>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
              href="mailto:lush.sleutsky@gmail.com"
            >
              Email Me
            </a>
            <a
              className="rounded-lg border border-indigo-500/30 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/60 hover:text-white"
              href="https://github.com/lsleutsky"
              rel="noopener noreferrer"
              target="_blank"
            >
              View GitHub Profile
            </a>
            <a
              className="rounded-lg border border-indigo-500/30 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/60 hover:text-white"
              href="https://linkedin.com/in/lushsleutsky"
              rel="noopener noreferrer"
              target="_blank"
            >
              View LinkedIn Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
