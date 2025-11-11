"use client";

import * as React from "react";
import { ProjectItemSchema } from "@/schema/item";
import { Button } from "./ui/button";
import { Link } from "next-view-transitions";
import { Icons } from "./icons";
import { Separator } from "./ui/separator";
import Image from "next/image";

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

  return (
    <article className="mx-auto max-w-4xl">
      <header>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={"/notesbuddy.webp"}
            alt={"Project Image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm">React js</span>
        <span className="text-xs">Nextjs</span>
        <span className="text-xs">+ 3 more</span>
      </div>
      <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
        {item.name}
      </h1>
      <p className="text-xl text-muted-foreground">{item.content}</p>

      <div className="grid gap-4 rounded-lg border bg-muted/20 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h5 className="text-sm font-semibold text-muted-foreground">
            Timeline
          </h5>
          <p className="text-sm">1 month</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-muted-foreground">Role</h5>
          <p className="text-sm">Fullstack</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-muted-foreground">Team</h5>
          <p className="text-sm">Solo</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-muted-foreground">
            Status
          </h5>
          <span className="text-xs">Ongoing</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link
            href={"live"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icons.preview />
            Live Demo
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link
            href={"github"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icons.github className="size-4" />
            Source Code
          </Link>
        </Button>
      </div>

      <Separator />

      <div className="mb-8">
        <div className="rounded-lg border bg-muted/20 p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-sm font-medium">
              <span>nextjs, react js, tailwindcss</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950/20">
          <h3 className="mb-3 text-lg font-semibold text-yellow-800 dark:text-yellow-200">
            Key Challenges
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-yellow-700 dark:text-yellow-300">
              <span className="mt-1 block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
              hello kon hai bhai jesa hai koi nai aaya
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
          <h3 className="mb-3 text-lg font-semibold text-green-800 dark:text-green-200">
            Key Learnings
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
              <span className="mt-1 block size-1.5 rounded-full bg-green-500 dark:bg-green-400" />
              hello kon hai bhai jesa hai koi nai aaya
            </li>
          </ul>
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

export { ProjectViewer };
