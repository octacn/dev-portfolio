import * as React from "react";
import { ProjectViewer, ProjectCardViewer } from "./project-viewer";
import { getProjectItem } from "@/lib/content";

export async function ProjectDisplay({ name }: { name: string }) {
  const item = await getCachedProjectItem(name);

  if (!item?.content) {
    return null;
  }

  return <ProjectViewer item={item} />;
}

export async function ProjectCardDisplay({
  name,
  hideImage,
}: {
  name: string;
  hideImage?: boolean;
}) {
  const item = await getCachedProjectItem(name);

  if (!item?.name) {
    return <div>Name Not Available {name}</div>;
  }

  return <ProjectCardViewer item={item} hideImage={hideImage} />;
}

const getCachedProjectItem = React.cache(async (name: string) => {
  return await getProjectItem(name);
});
