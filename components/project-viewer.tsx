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

function ProjectContent({ children }: { children: React.ReactNode }) {
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

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <div>{children}</div>
      </div>
    </article>
  );
}

function RelatedProject() {
  const { item } = useProjectViewer();
  return (
    <div>
      {/* <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Related Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedProjects.map((project) => (
                ))}
              </div>
            </div>
          </div> */}

      <div className="group rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50">
        <Link href={`/projects/`}>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold group-hover:text-primary">
                {item.name}
              </h3>
              <div className="text-xs">
                <div
                // className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                //   project.frontmatter.status === "completed"
                //     ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                //     : project.frontmatter.status === "in-progress"
                //     ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                //     : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                // }`}
                >
                  {/* {project.frontmatter.status.charAt(0).toUpperCase() +
                    project.frontmatter.status.slice(1)} */}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {/* {project.frontmatter.description} */}
            </p>
            <div className="flex flex-wrap gap-1">
              {/* {project.frontmatter.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="rounded bg-muted px-2 py-1 text-xs">
                  {tech}
                </span>
              ))} */}
              {/* {project.frontmatter.technologies.length > 3 && (
                <span className="rounded bg-muted px-2 py-1 text-xs">
                  +{project.frontmatter.technologies.length - 3}
                </span>
              )} */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function ProjectNavigation() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Button
        variant="outline"
        asChild
        className="group h-auto w-full justify-start p-4 text-left"
      >
        <Link href={`/projects`}>
          <div className="flex items-center gap-3">
            <Icons.arrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-xs text-muted-foreground">
                Previous Project
              </div>
              <div className="font-medium">app To name</div>
            </div>
          </div>
        </Link>
      </Button>

      <Button
        variant="outline"
        asChild
        className="group h-auto w-full justify-end p-4 text-right"
      >
        <Link href={`/projects/`}>
          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs text-muted-foreground">Next Project</div>
              <div className="font-medium">case cobra case</div>
            </div>
            <Icons.arrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </Button>
    </div>
  );
}

function ProjectBackButton() {
  return (
    <div className="flex items-center-safe justify-center-safe">
      <Button variant="outline">
        <Link href="/projects" className="flex items-center space-x-2">
          <Icons.arrowLeft className="size-4" />
          <span>Back to Projects</span>
        </Link>
      </Button>
    </div>
  );
}

function ProjectViewer({
  item,
  children,
  ...props
}: Pick<ProjectViewerContext, "item"> & {
  children: React.ReactNode;
}) {
  return (
    <ProjectViewerProvider item={item} {...props}>
      <ProjectContent>{children}</ProjectContent>
      <Separator />

      <ProjectNavigation />
      <Separator />
      <div className="grid grid-cols-2 gap-2">
        <RelatedProject />
        <RelatedProject />
      </div>
      <ProjectBackButton />
    </ProjectViewerProvider>
  );
}

export { ProjectViewer };
