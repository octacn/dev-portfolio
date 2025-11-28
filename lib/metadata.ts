import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.developer} - Full Stack Developer Portfolio`,
    template: `%s | ${siteConfig.developer}`,
  },
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web development. Explore my projects, skills, and experience in building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Sahil Kumar Dev",
    "Frontend Development",
    "Backend Development",
    "UI/UX",
    "MongoDB",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: siteConfig.developer,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.developer,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.developer} - Full Stack Developer Portfolio`,
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web development.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.developer} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.developer} - Full Stack Developer Portfolio`,
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web development.",
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@sahilkumardev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export function generatePageMetadata({
  title,
  description,
  image,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-image.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@sahilkumardev",
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
