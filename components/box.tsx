import * as React from "react";

import { cn } from "@/lib/utils";

export default function Box({
  children,
  className,
}: React.ComponentProps<"section">) {
  return <section className={cn("", className)}>{children}</section>;
}
