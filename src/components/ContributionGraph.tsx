import { useState, useEffect } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface CalendarData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const intensityClass = (count: number) => {
  if (count === 0) return "bg-dark-800";
  if (count <= 3) return "bg-emerald-900/60";
  if (count <= 6) return "bg-emerald-700/70";
  if (count <= 9) return "bg-emerald-500/80";
  return "bg-emerald-400";
};

export default function ContributionGraph() {
  const [data, setData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch("/api/contributions");

        if (!res.ok) {
          setError(true);
          return;
        }

        const json = await res.json();

        setData(json);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (error) return null;

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-indigo-400">{`//`}</span> GitHub Activity {new Date().getFullYear()}
          </h2>
          {data && (
            <span className="text-sm text-gray-500">
              {data.totalContributions.toLocaleString()} contributions this year
            </span>
          )}
        </div>

        <div className="overflow-x-auto rounded-lg border border-indigo-500/20 bg-black/20 p-4">
          {loading ? (
            <div className="flex h-28 items-center justify-center">
              <span className="animate-pulse text-sm text-gray-600">Loading contributions...</span>
            </div>
          ) : data ? (
            <div className="flex gap-[3px]">
              {data.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      className={`h-[11px] w-[11px] rounded-sm ${intensityClass(day.contributionCount)} transition-colors hover:ring-1 hover:ring-emerald-400/50`}
                      title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Legend */}
        <div className="mt-3 flex items-center justify-end gap-2 text-xs text-gray-600">
          <span>Less</span>
          <div className="bg-dark-800 h-[11px] w-[11px] rounded-sm" />
          <div className="h-[11px] w-[11px] rounded-sm bg-emerald-900/60" />
          <div className="h-[11px] w-[11px] rounded-sm bg-emerald-700/70" />
          <div className="h-[11px] w-[11px] rounded-sm bg-emerald-500/80" />
          <div className="h-[11px] w-[11px] rounded-sm bg-emerald-400" />
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
