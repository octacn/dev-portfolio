import z from "zod";

export const techStackStatus = z.enum([
  "All Systems Operational",
  "completed",
  "planned",
  "building",
]);

export const iconStack = z.enum([
  "logo",
  "nextjs",
  "typescript",
  "mongodb",
  "react",
  "pnpm",
  "resume",
  "chat",
  "preview",
  "github",
  "arrowRight",
  "arrowLeft",
  "claude",
  "chatgpt",
  "markdown",
  "v0",
]);

export const projectItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  challenge: z.array(z.string()),
  learning: z.array(z.string()),
  techstack: z.array(iconStack),
  preview: z.string(),
  github: z.string(),
  timeline: z.string(),
  teamsize: z.string(),
  role: z.string(),
  status: techStackStatus,
});

export const projectSchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(projectItemSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectItemSchema = z.infer<typeof projectItemSchema>;
export type IconStack = z.infer<typeof iconStack>;
