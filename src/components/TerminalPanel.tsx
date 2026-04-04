import { useEffect, useState } from "react";

interface TerminalPanepProps {
  terminal: {
    name: string;
    status: string;
    statusColor: string;
    activeColor: string;
    interval: number;
    lines: string[];
  };
}

export default function TerminalPanel({ terminal }: TerminalPanepProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % terminal.lines.length);
    }, terminal.interval);

    return () => clearInterval(id);
  }, [terminal.interval, terminal.lines.length]);

  return (
    <div className="overflow-hidden rounded-lg border border-indigo-500/30 bg-black/40">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-indigo-500/20 bg-indigo-500/5 px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-red-500/60" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-xs text-gray-400">{terminal.name}</span>
        </div>
        <span className={`text-[10px] ${terminal.statusColor}`}>● {terminal.status}</span>
      </div>
      {/* Log lines */}
      <div className="h-32 space-y-1.5 p-3 text-xs">
        {terminal.lines.slice(0, 5).map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeIndex % 5 ? `${terminal.activeColor} translate-x-1` : "text-gray-600"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
