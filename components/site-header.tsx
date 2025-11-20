"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import ModeToggler from "@/components/mode-toggler";

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header className="sticky w-full z-50 left-0 right-0 top-5">
      <div
        className={cn(
          "bg-surface z-50 rounded-full border border-surface-foreground/10",
          "transition-all duration-700 ease-in-out",
          "flex items-center justify-between px-4 sm:px-8 py-2 md:py-3 mx-4 sm:mx-auto",
          "relative",
          scrolled ? "max-w-2xl" : "max-w-3xl"
        )}
      >
        <span className="absolute bottom-0 left-5 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />

        <Link href="/" className="hover:cursor-default select-none">
          <Icons.logo className="size-7.5" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <MainNav items={siteConfig.navItems} />

        <div className="">
          <Separator orientation="vertical" />
          <ModeToggler />
        </div>
      </div>
    </header>
  );
}

function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center flex gap-3", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "hover:cursor-default hover:text-app text-sm",
            pathname === item.href && "text-app-secondary"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
