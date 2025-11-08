import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dev portfolio",
  description:
    "This is portfolio website for a developer. It is clean and modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", inter.variable, spaceGrotesk.variable)}
      >
        {children}
      </body>
    </html>
  );
}
