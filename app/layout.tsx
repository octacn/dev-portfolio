import "@/styles/globals.css";

import type { Metadata } from "next";
import { Fugaz_One as Cursive, Hanken_Grotesk, Inter } from "next/font/google";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

import { cn } from "@/lib/utils";
import { META_THEME_COLORS } from "@/hooks/meta-colors";
import {
  MaxWidthWrapper,
  MaxWidthWrapperContainer,
} from "@/components/max-width-wrapper";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import CatCursor from "@/components/cat-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Hanken_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

const cursive = Cursive({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "dev portfolio",
  description:
    "This is portfolio website for a developer. It is clean and modern design.",
};

// export const metadata = getMetadata("/");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
            }}
          />

          <meta name="theme-color" content={META_THEME_COLORS.light} />
        </head>
        <body
          className={cn(
            "text-foreground overscroll-none antialiased",
            "font-inter tracking-wide font-normal",
            mono.variable,
            inter.variable,
            cursive.variable,
          )}
          cz-shortcut-listen="true"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <CatCursor />
              <MaxWidthWrapper>
                <SiteHeader />
                <MaxWidthWrapperContainer>{children}</MaxWidthWrapperContainer>
                <SiteFooter />
              </MaxWidthWrapper>
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
