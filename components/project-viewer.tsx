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
  ];

  return (
    <article className="mx-auto max-w-4xl">
      <section className="relative aspect-video overflow-hidden rounded-xl border border-app/60">
        <Image
          src={`/project/${item.name}-light.png`}
          alt={item.name.replace(/-/g, " ")}
          fill
          className="object-cover dark:hidden object-top"
          priority
        />
        <Image
          src={`/project/${item.name}-dark.png`}
          alt={item.name.replace(/-/g, " ")}
          fill
          className="object-cover hidden dark:block object-top"
          priority
        />
      </section>

      <div className="flex items-center-safe justify-between my-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant={"secondary"}
            hideSelection
            className="flex items-center gap-2 border-green-500/30 border bg-green-500/20 text-green-400 capitalize"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {item.functionality}
          </Badge>
          {techsToShow.map((tech, index) => (
            <Badge
              key={index}
              hideSelection
              variant={"secondary"}
              className="capitalize tracking-wider"
            >
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

      <div className="grid gap-3 sm:gap-10 rounded-lg border bg-surface p-4 grid-cols-2 place-content-center sm:place-content-start place-items-center sm:place-items-start lg:grid-cols-4 my-8 relative">
        <div className="absolute inset-0 translate-x-1/2 sm:hidden">
          <div className="border-l h-full" />
        </div>
        <div className="absolute inset-0 translate-y-1/2 sm:hidden">
          <div className="border-t" />
        </div>
        {statsItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center flex-col sm:items-start"
          >
            <h5 className="font-semibold font-mono tracking-wider mb-1 text-muted-foreground">
              {item.label}
            </h5>
            <p className="text-foreground/90 tracking-wider font-mono capitalize font-semibold">
              {item.value}
            </p>
          </div>
        ))}
        <div className="flex items-center justify-center flex-col sm:items-start">
          <h5 className="font-semibold font-mono tracking-wider mb-1 text-muted-foreground ">
            Status
          </h5>
          <Badge
            hideSelection
            variant={"secondary"}
            className="capitalize tracking-wider"
          >
            {item.status}
          </Badge>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-warning/20 bg-warning-muted p-4 font-mono">
          <h3 className="text-warning-foreground font-semibold mb-2 text-xl">
            Key Challenges
          </h3>
          <ul className="space-y-1">
            {item.challenge.map((item) => (
              <li key={item} className="flex text-warning-foreground/90">
                <span className="h-6 min-w-3 max-w-3 flex items-center  ">
                  <span className="block size-1.5 rounded-full bg-warning" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-success/20 bg-success-muted p-4 font-mono">
          <h3 className="text-success-foreground font-semibold mb-2 text-xl">
            Key Learning
          </h3>
          <ul className="space-y-0.5">
            {item.learning.map((item) => (
              <li key={item} className="flex text-success-foreground/90">
                <span className="h-6 min-w-3 max-w-3 flex items-center">
                  <span className="block size-1.5 rounded-full bg-success" />
                </span>
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
          <Link href={`/projects/${item.name}`}>
            <Image
              src={`/project/${item.name}-light.png`}
              alt={item.name.replace(/-/g, " ")}
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out dark:hidden"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <Image
              src={`/project/${item.name}-dark.png`}
              alt={item.name.replace(/-/g, " ")}
              className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out hidden dark:block"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </Link>
        </div>
      </React.Activity>

      <div className="p-4 sm:p-6 pt-5">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl tracking-wide font-medium line-clamp-1 truncate capitalize font-mono">
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

        <div className="flex justify-between items-center mt-4 text-green-400 gap-x-2">
          <div className="flex items-center gap-2 rounded-md px-2 py-1 text-xs border-green-500/30 border bg-green-500/20 truncate">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {item.functionality}
          </div>
          <HighlightSocialBox
            icon
            href={`/projects/${item.name}`}
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
