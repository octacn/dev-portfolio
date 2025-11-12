"use client";

import { Check, ChevronDown, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Icons } from "@/components/icons";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I’m looking at this dev/portfolio documentation: ${url}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.
  `
  )}`;
}

export default function ProjectCopyButton({
  page,
  url,
}: {
  page: string;
  url: string;
}) {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const appItems = [
    { label: "Markdown", icon: Icons.markdown, href: `${url}.md` },
    {
      label: "v0",
      icon: Icons.v0,
      href: getPromptUrl("https://v0.dev", url),
    },
    {
      label: "ChatGPT",
      icon: Icons.chatgpt,
      href: getPromptUrl("https://chatgpt.com", url),
    },
    {
      label: "Claude",
      icon: Icons.claude,
      href: getPromptUrl("https://claude.ai/new", url),
    },
  ];

  return (
    <DropdownMenu>
      <ButtonGroup>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => copyToClipboard(page)}
        >
          {isCopied ? <Check /> : <Copy />}
          Copy Page
        </Button>

        <ButtonGroupSeparator />

        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} size={"icon-sm"}>
            <ChevronDown className="rotate-180 sm:rotate-0" />
          </Button>
        </DropdownMenuTrigger>
      </ButtonGroup>

      <DropdownMenuContent className="bg-secondary grid p-0" align="end">
        {appItems.map((Item) => {
          return (
            <Link
              href={Item.href}
              key={Item.label}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2 text-sm font-medium",
                "inline-flex items-center gap-2 justify-between",
                "border-b border-b-muted-foreground/20 last:border-0",
                "hover:bg-background/30 transition-colors duration-300",
                "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0"
              )}
            >
              {Item.label}
              <Item.icon />
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
