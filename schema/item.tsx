import z from "zod";

export const statusStack = z.enum(["completed", "planned", "building"]);

export const functionalityStack = z.enum(["All Systems Operational"]);

export const categoryStack = z.enum(["web", "mobile"]);

export const techCategory = z.enum(["frontend", "backend", "full stack"]);

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
  "plus",
]);

export const projectItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  challenge: z.array(z.string()),
  learning: z.array(z.string()),
  techstack: z.array(iconStack),
  preview: z.string().optional(),
  github: z.string(),
  timeline: z.string(),
  teamsize: z.string(),
  role: z.string(),
  category: categoryStack,
  tech: techCategory,
  functionality: functionalityStack,
  status: statusStack,
});

export const projectSchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(projectItemSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectItemSchema = z.infer<typeof projectItemSchema>;
export type IconStack = z.infer<typeof iconStack>;
export type CategoryStack = z.infer<typeof categoryStack>;
export type TechCategory = z.infer<typeof techCategory>;
