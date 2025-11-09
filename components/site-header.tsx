"use client";

import * as React from "react";
// import ThemeToggle from "./ThemeToggle"
// import { useVisible } from "@/context/VisibleContext"
// import { motion } from "motion/react";
import Link from "next/link";
// import { Eye, EyeOff } from "lucide-react";
import ModeToggler from "@/components/mode-toggler";
import { Separator } from "./ui/separator";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { MobileNav } from "./mobile-nav";

export default function SiteHeader() {
  const navItems = siteConfig.navItems;

  return (
    <header
      className={cn(
        "bg-foreground/3 backdrop-blur-lg sticky top-0 z-50 w-full py-1.5 border-b"
      )}
    >
      <div className="container-wrapper 3xl:fixed:px-0 pl-3 pr-5 md:px-7">
        <div className="3xl:fixed:container flex items-center gap-1.5">
          <Link href="/" className="hover:cursor-default select-none">
            <Icons.logo className="size-6" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <MainNav items={navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <Separator
              orientation="vertical"
              className="ml-1 hidden lg:block"
            />
            <Separator orientation="vertical" />
            <ModeToggler />
          </div>
          <Separator orientation="vertical" className="lg:hidden block mr-2" />
          <MobileNav items={navItems} className="flex lg:hidden" />
        </div>
      </div>
    </header>
  );
}

// function Navigation() {
//   const [visitorCount, setVisitorCount] = React.useState<number | null>(null);
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   // const { visible, setVisible } = useVisible()

//   React.useEffect(() => {
//     const fetchVisitorCount = async () => {
//       try {
//         const res = await fetch("/api/visitors");
//         const data = await res.json();
//         setVisitorCount(data.count);
//       } catch (error) {
//         console.error("Failed to fetch visitor count:", error);
//       }
//     };

//     let timeoutId: ReturnType<typeof setTimeout> | number | undefined;

//     if (typeof window !== "undefined" && "requestIdleCallback" in window) {
//       timeoutId = requestIdleCallback(fetchVisitorCount, { timeout: 2000 });
//     } else {
//       timeoutId = setTimeout(fetchVisitorCount, 0);
//     }

//     const interval = setInterval(fetchVisitorCount, 30000);
//     return () => {
//       if (
//         typeof window !== "undefined" &&
//         "requestIdleCallback" in window &&
//         typeof timeoutId === "number"
//       ) {
//         cancelIdleCallback(timeoutId);
//       } else if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <nav className=" border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
//       <MainNav />

//       {mobileOpen && <MobileHeader />}
//     </nav>
//   );
// }

// function MobileNav({ className }: React.ComponentProps<"div">) {
//   return (
//     <div className={cn(className)}>
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.2, ease: "easeInOut" }}
//         exit={{ opacity: 0, y: -10 }}
//         className="md:hidden px-6 pb-4 z-50 fixed top-20 left-0 w-full h-full bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//           exit={{ opacity: 0, y: -10 }}
//           className="flex flex-col gap-3 text-sm border border-border rounded-lg p-3 bg-background"
//         >
//           {/* <a
//             href="#about"
//             onClick={() => setMobileOpen(false)}
//             className="hover:text-muted-foreground transition"
//           >
//             about
//           </a>
//           <a
//             href="#experience"
//             onClick={() => setMobileOpen(false)}
//             className="hover:text-muted-foreground transition"
//           >
//             experience
//           </a>
//           <a
//             href="#projects"
//             onClick={() => setMobileOpen(false)}
//             className="hover:text-muted-foreground transition"
//           >
//             projects
//           </a>
//           <a
//             href="#open-source"
//             onClick={() => setMobileOpen(false)}
//             className="hover:text-muted-foreground transition"
//           >
//             open source
//           </a>
//           <a
//             href="#contact"
//             onClick={() => setMobileOpen(false)}
//             className="hover:text-muted-foreground transition"
//           >
//             contact
//           </a>
//           <button
//             onClick={() => {
//               setVisible(!visible);
//               setMobileOpen(false);
//             }}
//             className="flex items-center gap-2 hover:text-muted-foreground transition text-left"
//           >
//             {visible ? (
//               <>
//                 <EyeOff className="w-4 h-4" />
//                 <span>Hide visitors</span>
//               </>
//             ) : (
//               <>
//                 <Eye className="w-4 h-4" />
//                 <span>Show visitors</span>
//               </>
//             )}
//           </button> */}

//           <a
//             href="/blog"
//             onClick={() => setMobileOpen(false)}
//             className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-sm text-center mt-2"
//           >
//             blogs
//           </a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      {items.map((item) => (
        <Button
          className="font-inter font-medium tracking-wider hover:cursor-default hover:text-orange-400"
          key={item.href}
          variant="ghost"
          asChild
          size="sm"
        >
          <Link
            href={item.href}
            className={cn(pathname === item.href && "text-primary")}
          >
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
