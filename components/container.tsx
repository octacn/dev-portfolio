import * as React from "react";

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: React.ComponentProps<"div">) {
  return <div className={cn("my-6 sm:my-8", className)}>{children}</div>;
}
