import { useEffect, useRef, useState, type ReactNode } from "react";

interface TracingBeamProps {
  children: ReactNode;
}

export default function TracingBeam({ children }: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);
  const [beamY, setBeamY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    if (!container || !inner) {
      return;
    }

    const measure = () => {
      setHeight(container.offsetHeight);

      const entries = Array.from(inner.children) as HTMLElement[];

      if (entries.length === 0) {
        return;
      }

      const first = entries[0];
      const last = entries[entries.length - 1];

      setStartY(first.offsetTop + 8);
      setEndY(last.offsetTop + 8);
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleScroll = () => {
      setHasScrolled(true);

      const rect = container.getBoundingClientRect();
      const readLine = window.innerHeight * 0.5;

      setBeamY(readLine - rect.top);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleEnd = Math.max(startY, Math.min(endY, beamY));
  const showBeam = hasScrolled && visibleEnd > startY + 1;

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="pointer-events-none absolute top-0 z-0"
        height={height}
        style={{ left: "-2px" }}
        width="2"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="beam-gradient"
            x1="0"
            x2="0"
            y1={startY}
            y2={visibleEnd}
          >
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
            <stop offset="25%" stopColor="rgba(99, 102, 241, 0.7)" />
            <stop offset="80%" stopColor="rgba(34, 211, 238, 1)" />
            <stop offset="100%" stopColor="rgba(196, 181, 253, 1)" />
          </linearGradient>
        </defs>
        <line
          stroke="rgba(99, 102, 241, 0.3)"
          strokeWidth="2"
          x1="1"
          x2="1"
          y1={startY}
          y2={endY}
        />
        {/* Lit beam */}
        {showBeam && (
          <line
            stroke="url(#beam-gradient)"
            strokeLinecap="round"
            strokeWidth="2"
            x1="1"
            x2="1"
            y1={startY}
            y2={visibleEnd}
          />
        )}
      </svg>
      <div ref={innerRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
}
