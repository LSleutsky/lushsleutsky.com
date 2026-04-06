import GithubIcon from "@/components/svg/GitHubIcon";
import LinkedinIcon from "@/components/svg/LinkedInIcon";
import MailIcon from "@/components/svg/MailIcon";

import { profile } from "@/data/resume";

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <a
        className="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
        href={`mailto:${profile.email}`}
      >
        <MailIcon />
        Email Me
      </a>
      <a
        className="flex items-center justify-center gap-2 rounded-lg border border-indigo-500/30 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/60 hover:text-white"
        href="https://github.com/lsleutsky"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon />
        GitHub
      </a>
      <a
        className="flex items-center justify-center gap-2 rounded-lg border border-indigo-500/30 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/60 hover:text-white"
        href="https://linkedin.com/in/lushsleutsky"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedinIcon />
        LinkedIn
      </a>
    </div>
  );
}
