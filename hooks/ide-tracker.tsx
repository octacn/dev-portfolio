"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "ide-tracker:sessions";

function getDayKey(date = new Date()) {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function loadSessions(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSessions(sessions: Record<string, number>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  } catch {
    // ignore
  }
}

function formatDuration(seconds: number) {
  if (!seconds || seconds <= 0) return "0m";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export function useIdeTracker() {
  const pathname = usePathname();
  // current page is derived from document.title or pathname - derived value (no state)
  const currentPage = typeof document !== "undefined" ? document.title || pathname || "/" : "/";
  const [online, setOnline] = useState<boolean>(true);
  const [todaysSeconds, setTodaysSeconds] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const sessions = loadSessions();
    return sessions[getDayKey()] || 0;
  });
  const [yesterdaysSeconds] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const sessions = loadSessions();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    return sessions[getDayKey(yesterdayDate)] || 0;
  });

  const tickRef = useRef<number | null>(null);
  const activeRef = useRef<boolean>(false);
  const sessionsRef = useRef<Record<string, number>>({});

  useEffect(() => {
    // initialize
    if (typeof window === "undefined") return;
  sessionsRef.current = loadSessions();

    const updateActive = () => {
      const isActive = document.visibilityState === "visible" && document.hasFocus();
      activeRef.current = isActive;
      setOnline(isActive);
    };

    updateActive();

    const onVisibility = () => updateActive();
    const onFocus = () => updateActive();
    const onBlur = () => updateActive();
    const onBeforeUnload = () => {
      // persist immediately
      saveSessions(sessionsRef.current);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    window.addEventListener("beforeunload", onBeforeUnload);

    // tick every second while active
    tickRef.current = window.setInterval(() => {
      const now = new Date();
      const dayKey = getDayKey(now);
      // if active, count
      if (activeRef.current) {
        sessionsRef.current[dayKey] = (sessionsRef.current[dayKey] || 0) + 1;
        // update state occasionally (every second is OK)
        setTodaysSeconds(sessionsRef.current[dayKey]);
      }
      // persist occasionally
      if (now.getSeconds() % 15 === 0) saveSessions(sessionsRef.current);
    }, 1000) as unknown as number;

    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("beforeunload", onBeforeUnload);
      saveSessions(sessionsRef.current);
    };
  }, []);

  // currentPage is derived from document.title and pathname (no effect needed)

  // helper to get a formatted result
  return {
    online,
    currentPage,
    todaysSeconds,
    yesterdaysSeconds,
    todays: formatDuration(todaysSeconds),
    yesterdays: formatDuration(yesterdaysSeconds),
  } as const;
}

export default function IDETracker() {
  const { online, currentPage, todays, yesterdays, todaysSeconds } = useIdeTracker();

  return (
    <aside className="mt-6 w-full max-w-md rounded-lg border p-4 bg-background">
      <h3 className="text-lg font-medium text-foreground">IDE / Session Tracker</h3>
      <p className="text-sm text-muted-foreground mt-1">Tracks time while this page is active in your browser</p>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">Status</div>
          <div className={`text-sm font-semibold ${online ? "text-green-500" : "text-amber-500"}`}>
            {online ? "Online (active)" : "Offline / idle"}
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-muted-foreground">Current page</div>
          <div className="text-sm">{currentPage}</div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-md border p-2">
          <div className="text-xs text-muted-foreground">Today</div>
          <div className="text-sm font-semibold">{todays}</div>
          <div className="text-xs text-muted-foreground">({todaysSeconds}s)</div>
        </div>

        <div className="rounded-md border p-2">
          <div className="text-xs text-muted-foreground">Yesterday</div>
          <div className="text-sm font-semibold">{yesterdays}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Note: This tracker records time while this browser tab is visible and focused. To track your
        actual VS Code activity across the editor you would need a small VS Code extension that
        forwards activity to this site or an API. This local tracker is a fallback for showing
        session totals and offline/yesterday information.
      </p>
    </aside>
  );
}
