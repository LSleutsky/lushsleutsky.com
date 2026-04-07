import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  type: "input" | "output" | "success" | "info" | "error";
  text: string;
  delay: number;
}

const script: TerminalLine[] = [
  { type: "input", text: "$ whoami", delay: 0 },
  { type: "output", text: "lush", delay: 600 },
  { type: "input", text: "$ cat stack.txt", delay: 1400 },
  {
    type: "info",
    text: "TypeScript · React · React Native · Next.js · Node.js · Python",
    delay: 2000
  },
  { type: "input", text: "$ uptime --career", delay: 3000 },
  { type: "output", text: "15+ years | no signs of stopping", delay: 3600 },
  { type: "input", text: "$ git log --oneline -5", delay: 4600 },
  { type: "success", text: "a1b2c3d  feat: ship medical device BLE streaming app", delay: 5100 },
  {
    type: "success",
    text: "e4f5g6h  feat: consolidate 3 brands into unified platform",
    delay: 5400
  },
  { type: "success", text: "i7j8k9l  feat: build tauri desktop provisioning tool", delay: 5700 },
  { type: "success", text: "m0n1o2p  feat: launch ai-powered SaaS interfaces", delay: 6000 },
  { type: "success", text: "q3r4s5t  feat: stand up ecommerce pipeline end-to-end", delay: 6300 },
  { type: "input", text: "$ systemctl status engineer", delay: 7300 },
  { type: "success", text: "● [running] open to freelance opportunities", delay: 7900 },
  { type: "input", text: "$ _", delay: 8800 }
];

const lineColor: Record<TerminalLine["type"], string> = {
  input: "text-white",
  output: "text-gray-400",
  success: "text-emerald-400",
  info: "text-indigo-400",
  error: "text-red-400"
};

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const schedule = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];

      setVisibleCount(0);

      script.forEach((line, i) => {
        timersRef.current.push(setTimeout(() => setVisibleCount(i + 1), line.delay));
      });

      const restartDelay = script[script.length - 1].delay + 4000;

      timersRef.current.push(setTimeout(schedule, restartDelay));
    };

    const kickoff = setTimeout(schedule, 0);

    return () => {
      clearTimeout(kickoff);
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div className="bg-dark-950 mx-auto max-w-4xl overflow-hidden rounded-lg border border-indigo-500/30">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-indigo-500/20 bg-indigo-500/5 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-xs text-gray-500">lush@dev ~ </span>
        </div>
        <span className="text-[10px] text-emerald-400">● zsh</span>
      </div>
      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="h-80 overflow-y-auto p-4 text-xs leading-relaxed sm:h-96 sm:text-sm"
        style={{ scrollbarWidth: "none" }}
      >
        {script.slice(0, visibleCount).map((line, index) => (
          <div
            key={`${index}-${visibleCount > script.length - 1 ? "r" : "f"}`}
            className={`${lineColor[line.type]} transition-opacity duration-300`}
          >
            {line.text}
            {line.type === "input" && index === visibleCount - 1 && line.text.endsWith("_") && (
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-white/70" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
