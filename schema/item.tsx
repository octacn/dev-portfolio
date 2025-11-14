import z from "zod";

export const projectItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  challenge: z.array(z.string()),
  learning: z.array(z.string()),
  techstack: z.array(z.string()),
  preview: z.string(),
  source: z.string(),
  timeline: z.string(),
  teamsize: z.string(),
  status: z.string(),
});

export const projectSchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(projectItemSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectItemSchema = z.infer<typeof projectItemSchema>;
