import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.TRACKER_API_KEY!;

  // Get today's date in YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10);

  const res = await fetch(
    `https://wakatime.com/api/v1/users/current/summaries?start=${today}&end=${today}&api_key=${key}`,
    { next: { revalidate: 600 } }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
