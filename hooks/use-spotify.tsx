"use client";

import * as React from "react";
import type { SpotifyApiResponse } from "@/spotify";

interface UseSpotifyReturn {
  trackData: SpotifyApiResponse | null;
  isLoading: boolean;
  currentProgress: number;
  isPlaying: boolean;
  currentTrack: SpotifyApiResponse["track"] | null;
  getProgressPercentage: () => number;
  getCurrentProgressMs: () => number;
  formatTime: (ms: number) => string;
  refetch: () => Promise<void>;
}

interface UseSpotifyOptions {
  refetchInterval?: number;
  autoProgress?: boolean;
  enabled?: boolean;
}

export function useSpotify(options: UseSpotifyOptions = {}): UseSpotifyReturn {
  const {
    refetchInterval = 30000, // changed from 10sec to 30sec
    autoProgress = true,
    enabled = true,
  } = options;

  const [trackData, setTrackData] = React.useState<SpotifyApiResponse | null>(
    null
  );
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const formatTime = React.useCallback((ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  const getProgressPercentage = React.useCallback((): number => {
    if (!trackData?.track?.item) return 0;
    const progress = trackData.track.progress_ms + currentProgress;
    const duration = trackData.track.item.duration_ms;
    return Math.min((progress / duration) * 100, 100);
  }, [trackData, currentProgress]);

  const getCurrentProgressMs = React.useCallback((): number => {
    if (!trackData?.track) return 0;
    return trackData.track.progress_ms + currentProgress;
  }, [trackData, currentProgress]);

  const fetchTrack = React.useCallback(async () => {
    if (!enabled) return;

    try {
      setIsLoading(true);

      const res = await fetch("/api/playing", {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.error) {
        console.log("Error fetching track data:", data.error);
        return;
      }

      setTrackData(data);
      setCurrentProgress(0);
    } catch (err) {
      console.error("Error fetching track:", err);
    } finally {
      setIsLoading(false);
    }
  }, [enabled]);

  React.useEffect(() => {
    if (!enabled) return;

    fetchTrack();

    const currentInterval = trackData?.track?.is_playing
      ? refetchInterval
      : 1800000;

    const interval = setInterval(() => {
      fetchTrack();
    }, currentInterval);

    return () => clearInterval(interval);
  }, [fetchTrack, refetchInterval, enabled, trackData?.track?.is_playing]);

  React.useEffect(() => {
    if (!autoProgress || !trackData?.track?.is_playing) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentProgress((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [trackData?.track?.is_playing, autoProgress]);

  React.useEffect(() => {
    setCurrentProgress(0);
  }, [trackData?.track?.item?.id]);

  return {
    trackData,
    isLoading,
    currentProgress,
    isPlaying: trackData?.track?.is_playing ?? false,
    currentTrack: trackData?.track ?? null,
    getProgressPercentage,
    getCurrentProgressMs,
    formatTime,
    refetch: fetchTrack,
  };
}

export default useSpotify;
