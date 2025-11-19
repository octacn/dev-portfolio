import { projects } from "@/content/projects/item/projects";

export async function websiteIds() {
  const websiteId = projects.map((project) => ({
    id: project.name,
    website: project.preview,
  }));

  return websiteId;
}
