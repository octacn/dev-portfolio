import * as React from "react";

import { cn } from "@/lib/utils";

export default function Box({
  children,
  className,
}: React.ComponentProps<"div">) {
  return <div className={cn("mt-16", className)}>{children}</div>;
}
