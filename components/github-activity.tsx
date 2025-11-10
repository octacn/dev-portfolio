"use client";

import { githubConfigMode } from "@/lib/config";
import { useTheme } from "next-themes";
import ActivityCalendar from "react-activity-calendar";
import { useGithubData } from "@/hooks/github-data";
import { Loader } from "@/components/loading";
import { cn } from "@/lib/utils";
// import IDETracker from "@/hooks/ide-tracker";

export default function GithubActivity() {
  const { totalContributions } = useGithubData();

  return (
    <div>
      <section className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Github Contributions
          </h2>
          <p className="text-sm text-muted-foreground">
            <b>Total</b> {totalContributions} Contributions
          </p>
        </div>

        {/* <IDETracker /> */}

        <h2>Ide Tracker</h2>
      </section>

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
