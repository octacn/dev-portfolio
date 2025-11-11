import * as React from "react";

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: React.ComponentProps<"div">) {
  return <div className={cn("my-4", className)}>{children}</div>;
}
