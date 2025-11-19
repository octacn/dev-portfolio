import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/get-access-token";
import { SpotifyApiResponse } from "@/spotify";

const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    if (!access_token) {
      return NextResponse.json(
        { isPlaying: false, error: "invalid_token" },
        { status: 401 }
      );
    }

    const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          isPlaying: false,
          error: "spotify_error",
          status: res.status,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    const lastPlayedItem = data.items?.[0];

    if (!lastPlayedItem) {
      return NextResponse.json(
        { isPlaying: false, track: null },
        { status: 200 }
      );
    }

    const lastPlayed: SpotifyApiResponse = {
      track: {
        is_playing: false,
        progress_ms: 0,
        item: lastPlayedItem.track,
      },
      is_playing: false,
      item: lastPlayedItem.track,
      played_at: lastPlayedItem.played_at,
    };

    return NextResponse.json(lastPlayed, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        isPlaying: false,
        error: "server_crash",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
