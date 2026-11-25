import Contact from "@/components/Contact";
import TracingBeam from "@/components/TracingBeam";

const principles = [
  {
    title: "The smallest diff wins",
    description:
      "An agent left alone will refactor your file, add three helpers, and wrap everything in error handling nobody asked for. Mine is told that the failure to avoid is not a missing feature. It's a diff bigger than the task.",
    rule: "The deliverable is the smallest change that does exactly what was asked and is verified."
  },
  {
    title: "Plan before code",
    description:
      "Anything that spans several files starts as a written plan: every file it will touch, every new file with the reason it has to exist, and an explicit list of what is out of scope. I approve it, change it, or throw it out before a line is written.",
    rule: "Plan first (plan mode) when the change spans several files or the approach is uncertain."
  },
  {
    title: "Nothing is assumed",
    description:
      "Models are confident about APIs that don't exist. So the agent has to find the method in the repo or in the package's own type definitions before it calls it, and it stops and asks when a schema or contract is missing.",
    rule: "Required context missing (schema, API shape, component contract): stop and ask. Never invent it."
  },
  {
    title: "Checks are enforced, not requested",
    description:
      "Hooks run the formatter, the linter, and the typechecker on whatever a turn changed, and the turn can't end until they pass. Asking an agent to be careful is a suggestion. A hook that blocks it is a guarantee.",
    rule: "Hooks format, lint, and typecheck what the turn changed when it ends. Fix what they report before replying."
  },
  {
    title: "Specialists over one generalist",
    description:
      "Narrow subagents do narrow jobs. One reads other repos and returns contracts. One fetches facts from documentation and has to cite the source. One runs the tests. One reviews the finished diff cold, with no idea what I was hoping to see.",
    rule: "Subagents: `explorer` reads other repos and returns locations and contracts; `runner` runs a command with long output and returns the outcome; `researcher` fetches facts that are not in the repo."
  },
  {
    title: "I make every commit",
    description:
      "The agent never stages, commits, or pushes. It hands me a diff, the results of the checks, and a one-line commit message. I read all of it, and my name goes on the commit because the decision was mine.",
    rule: "Never stage, commit, or push."
  }
];

const steps = [
  {
    step: "01",
    title: "Scope",
    description:
      "I write down what done looks like and what is out of scope before any code exists. Open questions get asked once, in one batch, here and not in review."
  },
  {
    step: "02",
    title: "Plan",
    description:
      "The agent proposes the work as vertical slices, naming the files and lines it expects to change. This is where most of my time goes, because a wrong plan is cheap to fix and wrong code is not."
  },
  {
    step: "03",
    title: "Build",
    description:
      "One slice at a time, written the way the repo already does that kind of thing. When the answer isn't in the code, a research subagent brings back the documented fact with its source."
  },
  {
    step: "04",
    title: "Verify",
    description:
      "Format, lint, and typecheck run automatically. The existing tests run for the code that was touched. Failures come back with their output, and nothing gets labeled as someone else's problem."
  },
  {
    step: "05",
    title: "Review and commit",
    description:
      "I read the full diff, cut anything the task did not need, and commit it myself. Then the next slice starts from a green build."
  }
];

const ruleChanges = [
  {
    title: "Every rule has a failure behind it",
    description:
      "Nothing is in the agreement because it sounds like good practice. A rule goes in when an agent does something wrong that one line could have stopped, and it gets worded against that exact failure. Vague rules get vague compliance.",
    rule: '"Best practice", "clean", "robust", "production-ready", "maintainable", "future-proof", "scalable", "flexible", and "extensible" are not reasons.'
  },
  {
    title: "Everything has to earn its place",
    description:
      "Every line an agent reads costs it attention, so the setup is held to the standard it enforces. Thirteen skills that came bundled with the tooling are switched off. The agent that runs the tests reports in 25 lines. The reviewer gets ten findings and drops any it can't prove.",
    rule: "A new file, export, type, hook, helper, option, or layer exists only when the task cannot be done without it."
  },
  {
    title: "A budget, not a request",
    description:
      "The agreement asks for a small diff. A hook makes it non-negotiable: a turn that adds more than 150 lines, or a third new file, can't end. The agent gets sent back to read its own diff, delete what the task didn't need, and name the requirement behind everything it keeps.",
    rule: "The Stop hook demands this pass when a turn changes more than its budget."
  }
];

const teamHabits = [
  {
    title: "Decisions get written down",
    description:
      "Before a change of any size, I write a short proposal: the problem, the options I weighed, and what I am choosing not to do. It can be challenged before code exists, and found again a year later."
  },
  {
    title: "Standards live in tooling",
    description:
      "If a rule matters, it goes into the linter, the type system, or a shared component. A convention that depends on everyone remembering a wiki page is not a standard yet."
  },
  {
    title: "Review is for the next engineer",
    description:
      "I review for whether someone new could change this code safely. When something is hard to follow I say so, explain why, and offer a cleaner path."
  },
  {
    title: "Small slices, always shippable",
    description:
      "Work lands as vertical slices that each leave the main branch green with one behavior complete. Big-bang merges hide risk until the worst possible moment."
  }
];

const title = "How I Work With AI | Lush Sleutsky";
const description =
  "How I run coding agents: written rules, automated checks, and nothing merged that I haven't read.";

export function meta() {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description }
  ];
}

export default function HowIWorkPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-8 border-b border-indigo-500/20 pb-4 text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap text-gray-400">
            <span>
              MODE: <span className="text-cyan-400">AI-AUGMENTED</span>
            </span>
          </div>
        </div>
        <div className="mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How I Work With AI
          </h1>
          <p className="text-lg text-gray-400">
            {`I run coding agents the way I'd run a team: written rules, automated checks, and nothing merged that I haven't read. The agents do the typing. The decisions, the diff, and the commit are mine.`}
          </p>
        </div>
        {/* Principles */}
        <section className="mb-20">
          <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> The System
          </h2>
          <p className="mb-8 text-gray-400">
            Every agent I work with reads the same working agreement before it touches a file. The
            green lines are quoted straight from it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="border-dark-700 bg-dark-900/50 hover:border-dark-600 flex flex-col rounded-xl border p-5 transition-colors"
              >
                <h3 className="mb-2 font-semibold text-white">{principle.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {principle.description}
                </p>
                <p className="mt-auto border-l-2 border-emerald-500/50 pl-3 text-xs leading-relaxed text-emerald-400">
                  {principle.rule}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Task timeline */}
        <section className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> One Task, Start to Finish
          </h2>
          <TracingBeam>
            {steps.map((item) => (
              <div key={item.step} className="relative pb-8 pl-8 last:pb-0">
                <div className="border-dark-950 absolute top-0 left-0 h-4 w-4 -translate-x-2.25 rounded-full border-4 bg-indigo-500" />
                <h3 className="mb-2 text-xl font-semibold text-white">
                  <span className="mr-3 text-sm text-indigo-400">{item.step}</span>
                  {item.title}
                </h3>
                <p className="max-w-3xl text-gray-400">{item.description}</p>
              </div>
            ))}
          </TracingBeam>
        </section>
        {/* Rule changes */}
        <section className="mb-20">
          <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> How the Rules Change
          </h2>
          <p className="mb-8 text-gray-400">
            {`The system is never finished. I audit all of it the way I'd audit a codebase: the rules, the skills, the stack files, the hooks, the agents. Anything that isn't making the output better comes out.`}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {ruleChanges.map((change) => (
              <div
                key={change.title}
                className="border-dark-700 bg-dark-900/50 hover:border-dark-600 flex flex-col rounded-xl border p-5 transition-colors"
              >
                <h3 className="mb-2 font-semibold text-white">{change.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{change.description}</p>
                <p className="mt-auto border-l-2 border-emerald-500/50 pl-3 text-xs leading-relaxed text-emerald-400">
                  {change.rule}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Team habits */}
        <section className="mb-20">
          <h2 className="mb-3 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> The Same Rules, With People
          </h2>
          <p className="mb-8 text-gray-400">
            None of this started with agents. The working agreement is how I already worked with
            engineers, written down strictly enough for a machine to follow.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {teamHabits.map((habit) => (
              <div
                key={habit.title}
                className="border-dark-700 bg-dark-900/50 hover:border-dark-600 rounded-xl border p-5 transition-colors"
              >
                <h3 className="mb-2 font-semibold text-white">{habit.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{habit.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Closing */}
        <section className="border-t border-indigo-500/20 py-12">
          <p className="mb-4 text-lg leading-relaxed text-gray-400">
            {`The tools change every few months, the system doesn't: clear scope, small diffs, enforced checks, and a human who reads everything.`}
          </p>
          <p className="mb-12 text-sm text-gray-400">
            Currently in the rotation: Claude Code and Codex, extended with MCP servers, custom
            subagents, skills, and hooks.
          </p>
          <Contact
            message="Want to see this workflow in action on your next project? Let's build something great together!"
            showHeading={false}
          />
        </section>
      </div>
    </div>
  );
}
