import { socialItems } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function SocialMedia() {
  const buttonIcons = {
    CV: Icons.resume,
    Chat: Icons.chat,
  };

  return (
    <section className="bg-surface w-full rounded-2xl border p-4 flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            variant: "outline",
            text: "Resume / CV",
            href: "/resume",
            icon: "CV",
          },
          {
            variant: "default",
            text: "Get in touch",
            href: "/contact",
            icon: "Chat",
          },
        ].map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      <div className="flex gap-x-3">
        {socialItems.map((Item) => {
          return (
            <Link
              key={Item.label}
              href={Item.href}
              className={cn(
                "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none",
                "transition-colors inline-flex items-center justify-center",
                "border bg-code p-1 rounded-md btn-inner-shadow cursor-default"
              )}
            >
              <Item.icon />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
