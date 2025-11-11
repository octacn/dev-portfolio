import z from "zod";

export const projectItemSchema = z.object({
  name: z.string(),
  content: z.string().optional(),
});

export const projectSchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(projectItemSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectItemSchema = z.infer<typeof projectItemSchema>;
