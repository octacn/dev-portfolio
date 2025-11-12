import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  ProjectCardDisplay,
  ProjectDisplay,
} from "@/components/project-display";
import ProjectCopyButton from "@/components/project-copy-button";
import { absoluteUrl } from "@/lib/utils";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const slug = (await params).slug;

  const page = source.getPage(slug);
  const name = slug?.join("/") || "";

  const pages = source.getPageTree().children;
  const names = pages.map((doc) => doc.name as string);

  const getRandomNames = (nameArray: string[], count: number = 2): string[] => {
    if (nameArray.length <= count) return nameArray;

    const shuffled = [...nameArray].sort(() => Math.random() - 0.5);
    const removeCurrentPage = shuffled.filter((name) => name !== name);

    return removeCurrentPage.slice(0, count);
  };

  const randomNames = getRandomNames(names, 2);

  // const randomPages = randomNames
  //   .map((name) => pages.find((page) => page.name === name))
  //   .filter(Boolean);

  console.log("random name: ", randomNames);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <section>
      {/* <div>{randomizeName}</div> */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/projects">
          <Button variant="secondary" size="sm">
            <Icons.arrowLeft />
            Back to Projects
          </Button>
        </Link>

        <div className="flex items-center gap-3">
          <ProjectCopyButton
            page={"await replaceComponentSource(await doc.getText())"}
            url={absoluteUrl(page.url)}
          />
          <div className="space-x-2">
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="icon-sm"
                className="ml-auto"
                asChild
              >
                <Link href={neighbours.previous.url}>
                  <Icons.arrowLeft />
                  <span className="sr-only">Previous</span>
                </Link>
              </Button>
            )}
            {neighbours.next && (
              <Button variant="secondary" size="icon-sm" asChild>
                <Link href={neighbours.next.url}>
                  <span className="sr-only">Next</span>
                  <Icons.arrowRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {name ? (
        <ProjectDisplay name={name} />
      ) : (
        <div className="inline-flex cursor-default items-center justify-center w-full font-inter text-muted-foreground/30 h-48 bg-surface/10 rounded-2xl mb-8">
          <svg
            className="animate-spin mr-2 size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
            <path d="M17 12a5 5 0 1 0 -5 5" className="opacity-75" />
          </svg>
          Loading...
        </div>
      )}

      <div>
        <MDX components={mdxComponents} />
      </div>
      <div className="flex justify-between mt-8">
        {neighbours.previous && (
          <Button variant="outline" asChild>
            <Link href={neighbours.previous.url}>
              <Icons.arrowLeft />
              {neighbours.previous.name}
            </Link>
          </Button>
        )}
        {neighbours.next && (
          <Button variant="outline" asChild>
            <Link href={neighbours.next.url}>
              {neighbours.next.name}
              <Icons.arrowRight />
            </Link>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-8 my-8">
        ello
        {randomNames.map((projectName) => (
          <ProjectCardDisplay key={projectName} name={projectName} />
        ))}
      </div>
    </section>
  );
}
