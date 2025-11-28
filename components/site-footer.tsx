import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="text-sm text-center mb-8 mx-5 sm:mx-0">
      <div className="bg-surface rounded-xl border p-6">
        <div className="text-app mb-2">$ start thoughts.md</div>
        <div className="space-y-4">
          <blockquote className="text-foreground/90 italic text-sm sm:text-base font-medium leading-relaxed border-l-2 border-app-secondary pl-4 font-mono">
            &#34;After Web Developer & UI/UX Designer from Kanpur, blending
            function with aesthetics. I craft clean, intuitive websites that
            tell your brand’s story, solve real problems, and leave lasting
            impressions.&#34;
          </blockquote>
        </div>
      </div>
      <p className="text-muted-foreground mt-6 text-base font-mono">
        Design & Developed by
        <Link
          href={siteConfig.social.linkedin}
          className="whitespace-nowrap transition-colors duration-300 ml-1 hover:text-app text-app/70 cursor-default font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.developer}
        </Link>
        <br /> &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
