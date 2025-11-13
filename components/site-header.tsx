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
          "bg-foreground/3 backdrop-blur-lg z-50 rounded-full border",
          "transition-all duration-500 ease-in-out",
          "flex items-center justify-between px-4 sm:px-8 py-2 md:py-3 mx-4 sm:mx-auto",
          scrolled ? "max-w-2xl" : "max-w-3xl"
        )}
      >
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
