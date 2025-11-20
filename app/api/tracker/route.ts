import { NextResponse } from "next/server";

const TRACKER_ENDPOINT =
  "https://api.wakatime.com/api/v1/users/current/durations";

function trackerHeaders() {
  return {
    Authorization:
      "Basic " +
      Buffer.from(process.env.TRACKER_API_KEY + ":").toString("base64"),
  };
}

function formatDate(d: Date) {
  return d.toISOString().split("T")[0];
}

export async function GET() {
  try {
    const today = formatDate(new Date());

    const editorRes = await fetch(
      `${TRACKER_ENDPOINT}?date=${today}&slice_by=editor`,
      { headers: trackerHeaders() }
    );

    const editorData = await editorRes.json();

    const vsCode = editorData?.data?.find((e: { editor?: string }) =>
      e.editor?.toLowerCase().includes("code")
    );

    return NextResponse.json({
      success: true,

      today: {
        date: today,
        vsCodeTimeSeconds: vsCode?.duration ?? 0,
        vsCodeTimeReadable: vsCode?.text ?? "0 hrs",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}
