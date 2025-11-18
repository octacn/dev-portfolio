import { NextRequest, NextResponse } from "next/server";
import sendToTelegram from "@/lib/send-to-telegram";
import {
  getClientIP,
  checkRateLimit,
  RATE_LIMIT_WINDOW,
  RATE_LIMIT_MAX_REQUESTS,
} from "@/lib/check-rate-limit";
import { contactSchema } from "@/schema/contact-schema";

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": rateLimit.remaining.toString(),
            "X-RateLimit-Reset": (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        }
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const telegramSent = await sendToTelegram(validatedData);

    if (!telegramSent) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Message sent successfully!",
        success: true,
      },
      {
        headers: {
          "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
