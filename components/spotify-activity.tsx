"use client";

import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loading";
import { useSpotify } from "@/hooks/use-spotify";

export default function SpotifyActivity() {
  const {
    trackData,
    isLoading,
    isPlaying,
    currentTrack,
    getProgressPercentage,
    getCurrentProgressMs,
    formatTime,
    isOffline,
    lastPlayed,
  } = useSpotify();

  if (isOffline) {
    return (
      <section className="bg-surface w-full rounded-2xl border p-4 flex gap-x-4">
        <h1 className="text-app text-2xl font-cursive">Whoops !!</h1>
        <p className="font-mono text-lg capitalize font-light tracking-wider">
          slow or no internet Connection
        </p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="bg-surface w-full rounded-2xl border flex relative h-28">
        <Loader />
      </section>
    );
  }

  if (!trackData && !lastPlayed) {
    return (
      <section className="bg-surface w-full rounded-2xl border p-4 flex gap-x-4">
        <div className="h-20 min-w-20 rounded-lg overflow-hidden bg-muted border border-surface-foreground/20 btn-inner-shadow flex items-center justify-center text-4xl">
          🎵
        </div>
        <div className="w-full flex flex-col justify-center">
          <p className="text-foreground/70 text-sm">No recent activity</p>
          <p className="text-xs text-muted-foreground">
            Connect Spotify to see your music
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-surface w-full rounded-2xl border p-4 flex gap-x-4">
      <div className="h-20 min-w-20 rounded-lg overflow-hidden bg-muted border border-surface-foreground/20 btn-inner-shadow flex items-center justify-center">
        {(() => {
          const albumImageUrl =
            (isPlaying && currentTrack?.item?.album.images[0]?.url) ||
            lastPlayed?.item?.album.images[0]?.url ||
            lastPlayed?.track?.item?.album.images[0]?.url;

          return albumImageUrl ? (
            <Image
              src={albumImageUrl}
              alt="Album Art"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl">🎵</span>
          );
        })()}
      </div>

      <div className="w-full flex flex-col justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-foreground/90 text-sm line-clamp-1">
            {isPlaying && currentTrack?.item?.name
              ? currentTrack.item.name
              : lastPlayed?.item?.name ||
                lastPlayed?.track?.item?.name ||
                "No track"}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {isPlaying && currentTrack?.item?.artists?.[0]?.name
              ? currentTrack.item.artists[0].name
              : lastPlayed?.item?.artists?.[0]?.name ||
                lastPlayed?.track?.item?.artists?.[0]?.name ||
                "Unknown artist"}
          </p>
          <div className="text-xs mt-0.5 flex items-center gap-1.5">
            <span className="relative inline-flex h-2 w-2">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  isPlaying ? "bg-green-500/70" : "bg-gray-500/70"
                )}
              />
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-full",
                  isPlaying ? "bg-green-500" : "bg-gray-500"
                )}
              />
            </span>
            <span
              className={cn(isPlaying ? "text-green-500" : "text-gray-500")}
            >
              {isPlaying
                ? "Currently listening on Spotify"
                : "Last played on Spotify"}
            </span>
          </div>
        </div>

        {isPlaying && currentTrack?.item ? (
          <div className="flex items-center text-muted-foreground gap-2 text-xs">
            <span>{formatTime(getCurrentProgressMs())}</span>
            <Progress value={getProgressPercentage()} className="flex-1" />
            <span>{formatTime(currentTrack.item.duration_ms)}</span>
          </div>
        ) : (
          <div className="flex items-center text-muted-foreground text-xs">
            Not currently playing
          </div>
        )}
      </div>
    </div>
  );
}
