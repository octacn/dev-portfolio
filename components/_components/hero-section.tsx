import Box from "@/components/box";
import { HighlightBox, HighlightSocialBox } from "@/components/highlight-box";
import React from "react";
import { socialItems } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { parse } from "@/lib/parse";

const description = `I design and build responsive, accessible web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}`;

const buttonIcons = {
  CV: Icons.resume,
  Chat: Icons.chat,
};

export default function HeroSection() {
  const renderDescription = () => {
    const parts = parse(description);
    return parts.map((part) => {
      if (part.type === "skill") {
        const SkillComponent = part.skill!.component as React.ComponentType<
          Record<string, unknown>
        >;
        return (
          <HighlightBox key={part.key} href={part.skill!.href}>
            <SkillComponent />
            {part.skill!.name}
          </HighlightBox>
        );
      }
      return (
        <span key={part.key} className="whitespace-pre-wrap">
          {part.text}
        </span>
      );
    });
  };

  return (
    <Box className="mb-10">
      <section>
        <h1>
          <span className="text-4xl tracking-wider font-cursive underline underline-offset-6 decoration-2">
            hi, i&apos;m Sahilkumardev
          </span>
          <span className="text-xl font-cursive text-muted-foreground ml-2">
            Full Stack Developer
          </span>
        </h1>
        <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground whitespace-pre-wrap font-mono ">
          <p className="flex flex-wrap gap-y-2 gap-x-1.5">
            {renderDescription()}
          </p>
          <p className="flex flex-wrap gap-y-2 gap-x-1.5">
            I focus on design, performance, and developer experience. Passionate
            about
            <span className="italic font-medium bg-emerald-300 text-black px-1">
              3d Designing
            </span>
            and creating immersive interfaces driven by a strong eye for detail.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
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
        <div className="flex my-6 gap-x-3">
          {socialItems.map((Item) => {
            return (
              <HighlightSocialBox key={Item.label} href={Item.href}>
                <Item.icon />
              </HighlightSocialBox>
            );
          })}
        </div>
      </section>
    </Box>
  );
}
