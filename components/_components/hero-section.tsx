import * as React from "react";
import Box from "@/components/box";
import { HighlightBox } from "@/components/highlight-box";
import { parse } from "@/lib/parse";
import { Icons } from "../icons";

export default function HeroSection() {
  const description = `I design and build responsive, accessible web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}`;

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
        <div className="flex items-center-safe gap-4">
          <div className="border rounded-full relative w-fit p-3 [&_svg:not([class*='size-'])]:size-24 bg-surface btn-inner-shadow">
            <Icons.logo />
            <Status />
          </div>
          <div className="font-cursive">
            <h1 className="text-5xl tracking-wider underline underline-offset-6 decoration-2">
              hi, i&apos;m Sahilkumardev
            </h1>
            <p className="text-2xl text-muted-foreground mt-3">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-6 text-base md:text-lg text-muted-foreground whitespace-pre-wrap font-mono ">
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
      </section>
    </Box>
  );
}

function Status() {
  return (
    <div className="absolute bottom-1 left-22 border group flex items-center justify-center transition-all duration-300 ease-in-out rounded-full bg-background p-1 hover:shadow-lg cursor-default select-none skill-inner-shadow">
      <span>🫡</span>
      <span className="flex overflow-hidden max-w-0 group-hover:max-w-96 transition-[max-width] duration-300 ease-in-out font-mono mt-0.5">
        <span className="w-max h-fit text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-75 transform translate-x-2 group-hover:translate-x-0 text-sm font-medium pr-1">
          Building components library
        </span>
      </span>
    </div>
  );
}
