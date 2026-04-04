import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section className="relative py-20 sm:py-24" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
          <span className="text-indigo-400">{`//`}</span> Get In Touch
        </h2>

        <div className="border-dark-700 bg-dark-900/50 rounded-2xl border p-8">
          <p className="mb-6 text-gray-400">
            I&apos;m always open to discussing new opportunities and interesting projects. Feel free
            to reach out.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="border-dark-700 bg-dark-800 hover:border-accent-500/50 flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium text-gray-300 transition-all hover:text-white"
              href={`mailto:${profile.email}`}
            >
              <span className="text-accent-400">@</span>
              {profile.email}
            </a>
            <a
              className="border-dark-700 bg-dark-800 hover:border-accent-500/50 flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium text-gray-300 transition-all hover:text-white"
              href="https://github.com/lsleutsky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-accent-400">~</span>
              GitHub
            </a>
            <a
              className="border-dark-700 bg-dark-800 hover:border-accent-500/50 flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium text-gray-300 transition-all hover:text-white"
              href="https://linkedin.com/in/lushsleutsky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-accent-400">&gt;</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
