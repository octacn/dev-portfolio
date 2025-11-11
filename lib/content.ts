import { projectItemSchema } from "@/schema/item";

import { Index } from "@/content/projects/__index__";

export async function getProjectItem(name: string) {
  const item = Index[name];

  if (!item) {
    return null;
  }

  const result = projectItemSchema.safeParse(item);

  if (!result.success) {
    return null;
  }

  const parsed = projectItemSchema.safeParse({
    ...result.data,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}
