import * as React from "react";
import { ProjectViewer, ProjectCardViewer } from "./project-viewer";
import { getProjectItem } from "@/lib/content";

export async function ProjectDisplay({ name }: { name: string }) {
  const item = await getCachedProjectItem(name);

  if (!item?.name) {
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
    return (
      <div className="text-muted-foreground px-4 py-2 rounded-2xl text-sm font-inter border bg-surface w-fit h-fit">
        No item found {name}.
      </div>
    );
  }

  return <ProjectCardViewer item={item} hideImage={hideImage} />;
}

const getCachedProjectItem = React.cache(async (name: string) => {
  return await getProjectItem(name);
});
