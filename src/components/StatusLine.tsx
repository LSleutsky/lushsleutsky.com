import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function StatusLine() {
  const { pathname } = useLocation();
  const [position, setPosition] = useState("Top");
  const [sectionFile, setSectionFile] = useState<string>();

  useEffect(() => {
    const update = () => {
      const sections = [...document.querySelectorAll<HTMLElement>("[data-file]")];
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      const percent =
        scrollableHeight > 0 ? Math.round((window.scrollY / scrollableHeight) * 100) : 0;

      let currentSection = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.4) {
          currentSection = section;
        }
      }

      if (percent >= 100) {
        currentSection = sections[sections.length - 1];
      }

      setPosition(percent <= 0 ? "Top" : percent >= 100 ? "Bot" : `${percent}%`);
      setSectionFile(currentSection?.dataset.file);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const file = sectionFile ?? (pathname === "/" ? "index.md" : `${pathname.slice(1)}.md`);

  return (
    <div
      aria-hidden="true"
      className="bg-dark-900 fixed inset-x-0 bottom-0 z-40 hidden h-[22px] border-t border-indigo-500/20 font-mono text-[11px] leading-[22px] whitespace-nowrap text-gray-400 sm:flex"
    >
      <span className="bg-accent-500 px-2.5 font-bold text-white">NORMAL</span>
      <span className="bg-dark-800 px-2.5 text-white">~/{file}</span>
      <span className="flex-1" />
      <span className="border-dark-700 border-l px-2.5">utf-8</span>
      <span className="bg-dark-800 px-2.5 text-white">{position}</span>
    </div>
  );
}
