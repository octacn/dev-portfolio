"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { Icons } from "@/components/icons";
import { ButtonGroup } from "@/components/ui/button-group";

export default function SpotifyActivity() {
  const [track, setTrack] = React.useState<Spotify.PlayingResponse | null>(
    null
  );
  const [progress, setProgress] = React.useState(20);

  React.useEffect(() => {
    fetch("/api/playing")
      .then((res) => res.json())
      .then((data) => setTrack(data));
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="bg-surface w-full rounded-2xl border p-4 flex gap-x-4">
      <div className="h-20 min-w-20 rounded-lg overflow-hidden bg-muted border border-surface-foreground/20 btn-inner-shadow flex items-center-safe justify-center-safe">
        {track?.item?.album?.images?.[0]?.url ? (
          <img
            src={track.item.album.images[0].url}
            alt="Album Art"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">🎵</span>
        )}
      </div>

      <div className="w-full flex flex-col justify-between ">
        <div className="flex justify-between">
          <div>
            <p className="text-foreground/90 text-sm line-clamp-1">
              Soch Na Sake na koi hai
            </p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              by Amaal Mallik and Raghav
            </p>
          </div>

          <ButtonGroup>
            <Button variant={"outline"} size={"icon"}>
              <Icons.arrowLeft />
            </Button>
            <Button variant={"outline"} size={"icon"}>
              {track?.actions?.resuming ? <Pause /> : <Play />}
            </Button>

            <Button variant={"outline"} size={"icon"}>
              <Icons.arrowRight />
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex items-center text-muted-foreground gap-2 text-xs">
          <span>00:00</span>
          <Progress value={progress} />
          <span>04:00</span>
        </div>
      </div>
    </section>
  );
}
