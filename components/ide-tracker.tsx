"use client";

import * as React from "react";

interface TodayData {
  vsCodeTimeSeconds: number;
  vsCodeTimeReadable: string;
}

export default function IdeTrackerPage() {
  const [loading, setLoading] = React.useState(true);
  const [today, setToday] = React.useState<TodayData | null>(null);

  function humanTime(seconds: number) {
    if (!seconds || seconds <= 0) return "0 sec";

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }

  React.useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/tracker");
        const data = await res.json();

        if (!data.success) {
          setLoading(false);
          return;
        }

        setToday({
          vsCodeTimeSeconds: data.today.vsCodeTimeSeconds,
          vsCodeTimeReadable: humanTime(data.today.vsCodeTimeSeconds),
        });
      } catch (err) {
        console.log("message", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center font-semibold text-lg">
        Loading IDE Tracker...
      </div>
    );

  return (
    <div>
      <h1 className="text-lg text-foreground/90 font-mono tracking-wide font-medium">
        {" "}
        Up Time: {today?.vsCodeTimeReadable}
      </h1>
      <p className="font-mono tracking-wide text-muted-foreground">
        Editor : vscode
      </p>
    </div>
  );
}
