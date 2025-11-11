import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/projects",
  source: docs.toFumadocsSource(),
});
