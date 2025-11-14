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
import { Link } from "next-view-transitions";

type ProjectViewerContext = {
  item: ProjectItemSchema;
  hideImage?: boolean;
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
  hideImage,
}: Pick<ProjectViewerContext, "item" | "hideImage"> & {
  children: React.ReactNode;
}) {
  return (
    <ProjectViewerContext.Provider
      value={{
        item,
        hideImage,
      }}
    >
      <div id={item.name}>{children}</div>
    </ProjectViewerContext.Provider>
  );
}

function ProjectContent() {
  const { item } = useProjectViewer();

  const DISPLAY_TECH_COUNT = 6;

  const techsToShow = item.techstack.slice(0, DISPLAY_TECH_COUNT);

  const remainingCount = Math.max(
    0,
    item.techstack.length - DISPLAY_TECH_COUNT
  );

  const statsItems = [
    { label: "Timeline", value: item.timeline },
    { label: "Team Size", value: item.teamsize },
    { label: "role", value: item.role },
    { label: "Status", value: item.status },
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
            {item.status}
          </Badge>
          {techsToShow.map((tech, index) => (
            <Badge key={index} hideSelection variant={"secondary"}>
              {tech}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <Badge hideSelection variant={"secondary"}>
              +{remainingCount} More
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <HighlightSocialBox
            icon
            href={item.preview}
            target="_blank"
            aria-label="live-preview"
            className="text-muted-foreground hover:text-app"
          >
            <Icons.preview />
          </HighlightSocialBox>

          {item.github && (
            <HighlightSocialBox
              icon
              href={item.github}
              target="_blank"
              aria-label="view-github"
              className="text-muted-foreground hover:text-app"
            >
              <Icons.github />
            </HighlightSocialBox>
          )}
        </div>
      </div>

      <h1 className="text-4xl font-semibold tracking-wider capitalize font-mono">
        {item.name.replace(/-/g, " ")}
      </h1>

      <p className="text-muted-foreground mt-2 tracking-wider leading-relaxed">
        {item.description}
      </p>

      <div className="grid gap-4 rounded-lg border bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4 my-8">
        {statsItems.map((item) => (
          <div key={item.label}>
            <h5 className="font-semibold font-mono tracking-wider mb-0.5 text-foreground/90 ">
              {item.label}
            </h5>
            <p className="text-muted-foreground  tracking-wider text-sm">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-app/50 bg-app/30 p-4 font-mono">
          <h3 className="text-yellow-500 font-semibold mb-2 text-xl">
            Key Challenges
          </h3>
          <ul className="space-y-0.5">
            {item.challenge.map((item) => (
              <li
                key={item}
                className="flex items-center gap-x-2 text-yellow-500"
              >
                <span className="block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-app/50 bg-app/30 p-4 font-mono">
          <h3 className="text-yellow-500 font-semibold mb-2 text-xl">
            Key Learning
          </h3>
          <ul className="space-y-0.5">
            {item.learning.map((item) => (
              <li
                key={item}
                className="flex items-center gap-x-2 text-yellow-500"
              >
                <span className="block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border bg-surface p-4 my-8">
        <h4 className="font-mono text-lg font-medium tracking-wide mb-2.5">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-4">
          {item.techstack.map((tech) => {
            const IconComponent = Icons[tech as keyof typeof Icons];

            return (
              <IconHighlightBox key={tech} className="capitalize">
                <IconComponent />
                {tech}
              </IconHighlightBox>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function ProjectViewer({ item, ...props }: Pick<ProjectViewerContext, "item">) {
  return (
    <ProjectViewerProvider item={item} {...props}>
      <ProjectContent />
    </ProjectViewerProvider>
  );
}

function ProjectCard() {
  const { item, hideImage } = useProjectViewer();

  return (
    <section className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10 p-0 border shadow-none rounded-2xl bg-surface group">
      <React.Activity mode={hideImage ? "hidden" : "visible"}>
        <div className="p-0 border-b overflow-hidden">
          <Link href={`projects/${item.name}`}>
            <Image
              className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              src={"/notesbuddy.webp"}
              alt={"Notes Buddy"}
              loading="lazy"
              width={1920}
              height={1080}
            />
          </Link>
        </div>
      </React.Activity>

      <div className="p-6 pt-5">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-medium line-clamp-1 truncate">
            {item.name.replace(/-/g, " ")}
          </h1>
          <div className="flex items-center gap-2">
            <HighlightSocialBox
              icon
              href={item.preview}
              target="_blank"
              aria-label="live-preview"
              className="text-muted-foreground hover:text-app"
            >
              <Icons.preview />
            </HighlightSocialBox>

            {item.github && (
              <HighlightSocialBox
                icon
                href={item.github}
                target="_blank"
                aria-label="view-github"
                className="text-muted-foreground hover:text-app"
              >
                <Icons.github />
              </HighlightSocialBox>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 mt-2">
          {item.description}
        </p>
        <h4 className="font-medium text-foreground/80 font-mono mt-2 mb-0.5 text-sm">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {item.techstack.map((tech) => {
            const IconComponent = Icons[tech as keyof typeof Icons];

            return (
              <IconBox key={tech}>
                <IconComponent />
              </IconBox>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-4 text-green-400">
          <div className="flex items-center gap-2 rounded-md px-2 py-1 text-xs border-green-500/30 border bg-green-500/20">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {item.status}
          </div>
          <HighlightSocialBox
            icon
            href={`projects/${item.name}`}
            className="text-sm hover:underline underline-offset-4 [&_svg:not([class*='size-'])]:size-4 text-foreground/80 hover:text-foreground"
          >
            View Details <Icons.arrowRight />
          </HighlightSocialBox>
        </div>
      </div>
    </section>
  );
}

function ProjectCardViewer({
  item,
  hideImage,
  ...props
}: Pick<ProjectViewerContext, "item"> & { hideImage?: boolean }) {
  return (
    <ProjectViewerProvider item={item} hideImage={hideImage} {...props}>
      <ProjectCard />
    </ProjectViewerProvider>
  );
}

export { ProjectViewer, ProjectCardViewer };
