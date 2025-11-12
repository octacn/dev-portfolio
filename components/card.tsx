import Image from "next/image";
import { Icons } from "@/components/icons";
import { HighlightSocialBox, IconBox } from "@/components/highlight-box";
import { Activity } from "react";

function ProjectCard({ hideImage = false }: { hideImage?: boolean }) {
  const socialLinks = [
    { href: "#", aria: "live-preview", icon: <Icons.preview /> },
    { href: "#", aria: "view-github", icon: <Icons.github /> },
  ];

  const techs = [Icons.react, Icons.nextjs, Icons.mongodb];

  return (
    <section className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10 p-0 border shadow-none rounded-2xl bg-surface group">
      <Activity mode={hideImage ? "hidden" : "visible"}>
        <div className="p-0 border-b overflow-hidden">
          <Image
            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            src={"/notesbuddy.webp"}
            alt={"Notes Buddy"}
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </Activity>

      <div className="p-6 pt-5">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-medium line-clamp-1 truncate">
            Notes Buddy project hai bhai
          </h1>
          <div className="flex items-center gap-2">
            {socialLinks.map((s, i) => (
              <HighlightSocialBox
                icon
                key={i}
                href={s.href}
                target="_blank"
                aria-label={s.aria}
                className="text-muted-foreground hover:text-app"
              >
                {s.icon}
              </HighlightSocialBox>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mt-2">
          Notes Buddy is a lightweight note-taking app for capturing ideas,
          organizing them with tags and folders, and quickly finding content via
          fast full-text search and Markdown support.
        </p>
        <h4 className="font-medium text-foreground/80 font-mono mt-2 mb-0.5 text-sm">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {techs.map((TechIcon, i) => (
            <IconBox key={i}>
              <TechIcon />
            </IconBox>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4 text-green-400">
          <div className="flex items-center gap-2 rounded-md px-2 py-1 text-xs border-green-500/30 border bg-green-500/20">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            All Systems Operational
          </div>
          <HighlightSocialBox
            icon
            href={"#"}
            className="text-sm hover:underline underline-offset-4 [&_svg:not([class*='size-'])]:size-4 text-foreground/80 hover:text-foreground"
          >
            View Details <Icons.arrowRight />
          </HighlightSocialBox>
        </div>
      </div>
    </section>
  );
}

export { ProjectCard };
