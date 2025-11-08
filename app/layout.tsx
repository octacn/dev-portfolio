import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { Space_Grotesk, Inter } from "next/font/google";
import { META_THEME_COLORS } from "@/hooks/meta-colors";
import { ThemeProvider } from "@/components/theme-provider";
// import { Fugaz_One } from "next/font/google"


// const font = Fugaz_One({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// })

// import { Toaster } from "@/registry/ui/sonner";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Space_Grotesk({
  variable: "--font-mono",
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
          inter.variable
        )}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* 
          <MaxWidthWrapper> */}
          {children}
          {/* 
        </MaxWidthWrapper>
          <Toaster />
          */}
        </ThemeProvider>
      </body>
    </html>
  );
}
