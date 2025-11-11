import * as React from "react";
import { ProjectViewer } from "./project-viewer";
import { getProjectItem } from "@/lib/content";
// import rehypeHighlight from "@shikijs/rehype";
// import { MDXRemote as MdxComponent } from "next-mdx-remote/rsc";
// import { MdxComponents } from "@/mdx-components";

export default async function ProjectDisplay({ name }: { name: string }) {
  const item = await getCachedProjectItem(name);

  if (!item?.content) {
    return null;
  }

  return <ProjectViewer item={item} />;
}

const getCachedProjectItem = React.cache(async (name: string) => {
  return await getProjectItem(name);
});
