import {  projectItemSchema } from "@/schema/item";
import { z } from "zod"
import { projects } from "@/content/projects/item/projects";
import { type Project } from "@/schema/item";

export const project = {
  name: "dev-portfolio",
  homepage: "https://dev.sahilkumardev.com",
  items: z
    .array(projectItemSchema)
    .parse([
      ...projects,
    ]),
} satisfies Project
