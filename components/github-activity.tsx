"use client";

import { githubConfigMode } from "@/lib/config";
import { useTheme } from "next-themes";
import ActivityCalendar from "react-activity-calendar";
import { useGithubData } from "@/hooks/github-data";
import { Loader } from "@/components/loading";
import { cn } from "@/lib/utils";
import IDETracker from "@/hooks/ide-tracker";

export default function GithubActivity() {
  const { totalContributions } = useGithubData();

  return (
    <div>
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Github Contributions
          </h2>
          <p className="text-sm text-muted-foreground">
            <b>Total</b> {totalContributions} Contributions
          </p>
        </div>

{/* Add a feature that show that the real time tracking of ide (vs code) of my work and working page name and how much time spent and if vs code is close then show offline status if offline show how much time spend yestarday */}



      </section>

      {/* IDE / session tracker (local browser-based fallback). See hook for notes. */}
      <IDETracker />

      <GithubGraph />
    </div>
  );
}

function GithubGraph() {
  const { theme } = useTheme();
  const { contributions, isLoading } = useGithubData();

  return (
    <section
      className={cn(
        "rounded-lg border border-dashed overflow-hidden flex items-center justify-center",
        isLoading ? "h-44" : "p-5"
      )}
    >
      {isLoading ? (
        <Loader className="py-16" />
      ) : (
        <ActivityCalendar
          data={contributions}
          blockMargin={3}
          blockSize={10}
          fontSize={10}
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={githubConfigMode}
          hideTotalCount
        />
      )}
    </section>
  );
}
