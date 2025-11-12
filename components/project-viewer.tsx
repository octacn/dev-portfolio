"use client";

import * as React from "react";
import { ProjectItemSchema } from "@/schema/item";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  HighlightSocialBox,
  IconHighlightBox,
  IconBox,
} from "@/components/highlight-box";

type ProjectViewerContext = {
  item: ProjectItemSchema;
};

const ProjectViewerContext = React.createContext<ProjectViewerContext | null>(
  null
);

function useProjectViewer() {
  const context = React.useContext(ProjectViewerContext);
  if (!context) {
    throw new Error(
      "useProjectViewer must be used within a ProjectViewerProvider."
    );
  }
  return context;
}

function ProjectViewerProvider({
  item,
  children,
}: Pick<ProjectViewerContext, "item"> & {
  children: React.ReactNode;
}) {
  return (
    <ProjectViewerContext.Provider
      value={{
        item,
      }}
    >
      <div
        id={item.name}
        className="flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-3 overflow-hidden md:flex-col"
      >
        {children}
      </div>
    </ProjectViewerContext.Provider>
  );
}

function ProjectContent() {
  const { item } = useProjectViewer();

  const socialLinks = [
    { href: "#", aria: "live-preview", icon: <Icons.preview /> },
    { href: "#", aria: "view-github", icon: <Icons.github /> },
  ];

  return (
    <article className="mx-auto max-w-4xl">
      <section className="relative aspect-video overflow-hidden rounded-xl border border-border/30">
        <Image
          src={"/notesbuddy.webp"}
          alt={"Project Image"}
          fill
          className="object-cover"
          priority
        />
      </section>

      <div className="flex items-center-safe justify-between my-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant={"secondary"}
            hideSelection
            className="flex items-center gap-2 border-green-500/30 border bg-green-500/20 text-green-400"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            In Building
          </Badge>
          {Array.from({ length: 5 }).map((_, index) => (
            <Badge key={index} hideSelection variant={"secondary"}>
              React js {index + 1}
            </Badge>
          ))}
          <Badge hideSelection variant={"secondary"}>
            3+ More
          </Badge>
        </div>
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

      <h1 className="text-4xl font-semibold tracking-wider capitalize font-mono">
        {item.name.replace(/-/g, " ")}
      </h1>

      <p className="text-muted-foreground mt-2 tracking-wider leading-relaxed">
        {item.content}
      </p>

      <div className="grid gap-4 rounded-lg border bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4 my-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <h5 className="font-semibold font-mono tracking-wider mb-0.5 text-foreground/90 ">
              Heading
            </h5>
            <p className="text-muted-foreground  tracking-wider text-sm">
              Content hai bhai
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-app/50 bg-app/30 p-4 font-mono"
          >
            <h3 className="text-yellow-500 font-semibold mb-2 text-xl">
              Key Challenges/Learning
            </h3>
            <ul className="space-y-0.5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-x-2 text-yellow-500"
                >
                  <span className="block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                  Hello kon hai bhai jesa hai koi nai aaya
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-surface p-4 my-8">
        <h4 className="font-mono text-lg font-medium tracking-wide mb-2.5">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <IconHighlightBox key={index}>
              <Icons.react />
              React js
            </IconHighlightBox>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCardViewer({
  item,
  hideImage,
  ...props
}: Pick<ProjectViewerContext, "item"> & { hideImage?: boolean }) {
  const socialLinks = [
    { href: "#", aria: "live-preview", icon: <Icons.preview /> },
    { href: "#", aria: "view-github", icon: <Icons.github /> },
  ];

  const techs = [Icons.react, Icons.nextjs, Icons.mongodb];

  return (
    <ProjectViewerProvider item={item} {...props}>
      <section className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10 p-0 border shadow-none rounded-2xl bg-surface group">
        <React.Activity mode={hideImage ? "hidden" : "visible"}>
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
        </React.Activity>

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
            organizing them with tags and folders, and quickly finding content
            via fast full-text search and Markdown support.
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
    </ProjectViewerProvider>
  );
}

function ProjectViewer({ item, ...props }: Pick<ProjectViewerContext, "item">) {
  return (
    <ProjectViewerProvider item={item} {...props}>
      <ProjectContent />
    </ProjectViewerProvider>
  );
}

export { ProjectViewer, ProjectCardViewer };
