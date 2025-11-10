import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

function HighlightBox({
  children,
  className,
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "highlight-inner-shadow",
        "py-1 px-2 skill-inner-shadow self-end font-mono",
        "inline-flex items-center justify-center gap-1.5",
        "bg-foreground/10 text-sm text-foreground font-bold",
        "border-2 border-dashed border-foreground/20 rounded-md",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

function HighlightSocialBox({
  children,
  className,
  href,
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "border bg-code p-1.5 rounded-md btn-inner-shadow",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export { HighlightBox, HighlightSocialBox };
