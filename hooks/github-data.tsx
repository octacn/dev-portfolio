"use client";

import * as React from "react";
import { siteConfig } from "@/lib/config";

export type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

export function useGithubData(username?: string) {
  const [contributions, setContributions] = React.useState<ContributionItem[]>(
    [],
  );
  const [totalContributions, setTotalContributions] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const user = username ?? siteConfig.githubUsername;
        const response = await fetch(
          `https://github-contributions-api.deno.dev/${user}.json`,
        );
        const data: { contributions?: unknown[] } = await response.json();

        if (!mounted) return;

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattenedContributions = (
            data.contributions as unknown[]
          ).flat();

          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          } as const;

          const validContributions = (flattenedContributions as unknown[])
            .filter(
              (item: unknown): item is GitHubContributionResponse =>
                typeof item === "object" &&
                item !== null &&
                "date" in item &&
                "contributionCount" in item &&
                "contributionLevel" in item,
            )
            .map((item: GitHubContributionResponse) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (contributionLevelMap[
                item.contributionLevel as keyof typeof contributionLevelMap
              ] || 0) as ContributionItem["level"],
            }));

          const now = new Date();
          const latestContributionDate = validContributions.length
            ? new Date(
                Math.max(
                  ...validContributions.map((c) => new Date(c.date).getTime()),
                ),
              )
            : now;

          const startOfYear = new Date(now.getFullYear(), 0, 1);

          const earliestByWeeks = new Date(latestContributionDate);
          earliestByWeeks.setDate(earliestByWeeks.getDate() - 7 * 52);

          const earliestAllowed =
            earliestByWeeks > startOfYear ? earliestByWeeks : startOfYear;

          const filteredContributions = validContributions.filter((item) => {
            const itemDate = new Date(item.date);
            return (
              itemDate >= earliestAllowed && itemDate <= latestContributionDate
            );
          });

          const total = filteredContributions.reduce(
            (sum, item) => sum + item.count,
            0,
          );
          setTotalContributions(total);

          setContributions(filteredContributions);
        } else {
          setContributions([]);
          setTotalContributions(0);
        }
      } catch (err: unknown) {
        console.error("Failed to fetch GitHub contributions:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [username]);

  return { contributions, totalContributions, isLoading, error };
}
