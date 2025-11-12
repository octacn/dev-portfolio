import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ProjectDisplay from "@/components/project-display";
import ProjectCopyButton from "@/components/project-copy-button";
import { absoluteUrl } from "@/lib/utils";
import { ProjectCard } from "@/components/card";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // const name = (await params).slug?.join("/") || "";
  const page = source.getPage((await params).slug);

  // console.log("====================================");
  // console.log(name);
  // console.log("====================================");

  if (!page) {
    notFound();
  }

  const doc = page.data;

  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <div className="">
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

      <ProjectDisplay name="dev-portfolio" />

      <MDX components={mdxComponents} />

      <div className="flex justify-between mt-96">
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

      <div className="grid grid-cols-2 gap-8 my-10">
        <ProjectCard hideImage />
        <ProjectCard hideImage />
      </div>
    </div>
  );
}
