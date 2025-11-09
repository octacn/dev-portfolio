import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export default function HighlightBox({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "py-1 px-2 skill-inner-shadow self-end",
        "bg-foreground/5 text-sm text-foreground",
        "inline-flex items-center justify-center gap-1",
        "border-2 border-dashed border-foreground/20 rounded-md",
        "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
