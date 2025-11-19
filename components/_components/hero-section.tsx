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
      </section>
    </Box>
  );
}

function Status() {
  return (
    // <div className="absolute bg-background border flex items-center justify-center .5 rounded-full transition-all duration-300 ease-out pointer-events-none group hover:pointer-events-auto cursor-pointer overflow-hidden hover:pr-3 hover:pl-2 hover:rounded-2xl">
    //   <span className="relative inline-flex h-2 w-2 shrink-0">
    //     <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-green-500/70" />
    //     <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
    //   </span>
    //   <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out ml-0 group-hover:ml-2 whitespace-nowrap text-xs font-medium">Hello sir</span>
    // </div>
    <div className="absolute bottom-1 left-22 border group flex items-center justify-center transition-colors duration-200 rounded-full bg-background px-2">
      <span className="relative inline-flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-green-500/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="inline-flex overflow-hidden max-w-0 group-hover:max-w-96 transition-[max-width] duration-200 ease-out  data-[active=true]:group-hover:max-w-0">
        <h1 className="text-orange-400/90 w-max h-fit text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          Building own components library
        </h1>
      </span>
    </div>
  );
}
