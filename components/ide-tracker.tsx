// "use client";
// import * as React from "react";

// export default function IdeTracker() {
//   const [stats, setStats] = React.useState<any>(null);

//   React.useEffect(() => {
//     fetch("/api/tracker")
//       .then((res) => res.json())
//       .then((data) => setStats(data.data));
//   }, []);

//   if (!stats) return <p>Loading...</p>;

//   return (
//     <div className="p-4 rounded-xl bg-gray-900 text-white">
//       <h2 className="text-xl font-bold mb-2">Weekly Coding Stats</h2>

//       <p>🕒 Last 7 Days: {stats.total_seconds / 3600} hours</p>
//       <p>📅 Today: {stats.daily_average / 60} minutes</p>
//       {/* <p>⚡ Most Used Language: {stats.languages[0].name}</p> */}
//       {/* <p>📁 Top Project: {stats.projects[0].name}</p> */}
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";

type TopItem = {
  name?: string;
  total_seconds?: number;
  text?: string;
};

export default function IdeTracker() {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    fetch("/api/wakatime")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div>Loading coding stats…</div>;

  const today = data.today;
  const yesterday = data.yesterday;

  return (
    <div className="p-4 rounded shadow-sm bg-white dark:bg-gray-900 text-black dark:text-white">
      <h3 className="text-lg font-semibold">Coding Activity</h3>

      <div className="mt-3">
        <strong>Today:</strong> {today.human_readable}
      </div>

      <div className="mt-1">
        <strong>Yesterday:</strong> {yesterday.human_readable}
      </div>

      <div className="mt-2">
        <strong>Top Project:</strong>{" "}
        {today.top_project ? `${today.top_project.name} (${today.top_project.text ?? ""})` : "—"}
      </div>

      <div className="mt-1">
        <strong>Top Language:</strong>{" "}
        {today.top_language ? `${today.top_language.name} (${today.top_language.text ?? ""})` : "—"}
      </div>

      <div className="mt-1">
        <strong>Editor:</strong> {today.editors?.[0]?.name ?? "—"}
      </div>

      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Data from WakaTime (may be delayed / synced if offline).
      </div>
    </div>
  );
}
