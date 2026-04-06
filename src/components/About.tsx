import { technicalSkills, professionalSkills, languages, interests } from "@/data/resume";

export default function About() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Technical Skills
          </h2>
          <div className="space-y-8">
            {technicalSkills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-300 transition-all duration-300 hover:border-indigo-500/60 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Professional Skills */}
        <div className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> Professional Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {professionalSkills.map((skill) => (
              <span
                key={skill}
                className="inline-block rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300 transition-all duration-300 hover:border-emerald-500/60 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Languages & Interests */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-indigo-500/30 bg-black/20 p-6">
            <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
              <span className="text-indigo-400">{`//`}</span> Human Languages
            </h3>
            <div className="space-y-2">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{language.name}</span>
                  <span className="text-indigo-400">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-indigo-500/30 bg-black/20 p-6">
            <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
              <span className="text-indigo-400">{`//`}</span> Non-Programming Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-dark-700/50 rounded-md px-2.5 py-1 text-xs font-medium text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
