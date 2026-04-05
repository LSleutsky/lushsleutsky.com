import compression from "compression";
import express from "express";
import path from "path";

try {
  process.loadEnvFile();
} catch {
  // no-op: `.env` not present (production uses docker-compose env vars)
}

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3000");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

app.use(compression());
app.disable("x-powered-by");

// GitHub contributions proxy
app.get("/api/contributions", async (_, res) => {
  if (!GITHUB_TOKEN) {
    res.status(500).json({ error: "GITHUB_TOKEN not configured" });

    return;
  }

  try {
    const from = `${new Date().getFullYear()}-01-01T00:00:00Z`;
    const to = new Date().toISOString();

    const query = `
      query {
        user(login: "lsleutsky") {
          contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      const text = await response.text();

      console.error(`GitHub API error: ${text}`);

      res.status(response.status).json({ error: "GitHub API request failed" });

      return;
    }

    const data = (await response.json()) as Record<string, Record<string, unknown>>;
    const user = data.data?.user as Record<string, Record<string, unknown>> | undefined;
    const collection = user?.contributionsCollection as Record<string, unknown> | undefined;
    const calendar = collection?.contributionCalendar;

    if (!calendar) {
      res.status(500).json({ error: "Unexpected response structure" });

      return;
    }

    const contributionsCalendar = calendar as {
      totalContributions: number;
      weeks: { contributionDays: { contributionCount: number; date: string; color: string }[] }[];
    };

    const yearStart = `${new Date().getFullYear()}-01-01`;

    const filteredWeeks = contributionsCalendar.weeks
      .map((week) => ({
        contributionDays: week.contributionDays.filter((day) => day.date >= yearStart)
      }))
      .filter((week) => week.contributionDays.length > 0);

    const totalContributions = filteredWeeks.reduce(
      (sum, week) => sum + week.contributionDays.reduce((s, d) => s + d.contributionCount, 0),
      0
    );

    res.json({ totalContributions, weeks: filteredWeeks });
  } catch (error) {
    console.error("Contributions fetch error:", error);

    res.status(500).json({ error: "Failed to fetch contributions" });
  }
});

app.use("/assets", express.static("dist/assets", { immutable: true, maxAge: "1y" }));
app.use(express.static("dist", { maxAge: "1h" }));
// SPA fallback
app.use((_, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
