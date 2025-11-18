import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-muted-foreground bg-surface border-input",
        "w-full min-w-0 rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline outline-app",
        className
      )}
      {...props}
    />
  );
}

export { Input };
