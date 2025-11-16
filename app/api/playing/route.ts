import { NextResponse } from "next/server";
import type { SpotifyApiResponse, SpotifyCurrentlyPlaying } from "@/spotify";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

async function getAccessToken(): Promise<{
  access_token: string | null;
  error?: string;
}> {
  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    return await res.json();
  } catch {
    return {
      access_token: null,
      error: "token_error",
    };
  }
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    if (!access_token) {
      return NextResponse.json(
        { isPlaying: false, error: "invalid_token" },
        { status: 401 }
      );
    }

    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (res.status === 204) {
      return NextResponse.json(
        {
          isPlaying: false,
        },
        { status: 200 }
      );
    }

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

    const track = (await res.json()) as SpotifyCurrentlyPlaying;

    const response: SpotifyApiResponse = {
      track,
      is_playing: track.is_playing,
    };

    return NextResponse.json(response, { status: 200 });
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
