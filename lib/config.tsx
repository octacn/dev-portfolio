import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "sahilkumardev",
  url: "https://sahilkumardev.com",
  developer: "Sahil Kumar Dev",
  githubUsername: "sahilkumardev",
  social: {
    twitter: "https://twitter.com/sahilkumardev",
    github: "https://github.com/sahilkumardev",
    linkedin: "https://linkedin.com/in/sahil-kumar-dev",
    discord: "https://discord.gg/X5TSMHqc",
    instagram: "https://instagram.com/sahilkumardev",
  },
  navItems: [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ],
};

export const githubConfigMode = {
  dark: [
    "rgb(22, 27, 34)", // Very dark for no contributions
    "rgb(14, 68, 41)", // Dark green
    "rgb(0, 109, 50)", // Medium green
    "rgb(38, 166, 65)", // Bright green
    "rgb(57, 211, 83)", // Very bright green
  ],
  light: [
    "rgb(235, 237, 240)", // Light gray
    "rgb(155, 233, 168)", // Light green
    "rgb(64, 196, 99)", // Medium green
    "rgb(48, 161, 78)", // Dark green
    "rgb(33, 110, 57)", // Very dark green
  ],
};

export const skills = [
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    component: Icons.typescript,
  },
  {
    name: "React",
    href: "https://react.dev/",
    component: Icons.react,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    component: Icons.nextjs,
  },
  {
    name: "Pnpm",
    href: "https://pnpm.io/",
    component: Icons.pnpm,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    component: Icons.mongodb,
  },
];

export const skillComponents = {
  TypeScript: Icons.typescript,
  ReactIcon: Icons.react,
  MongoDB: Icons.mongodb,
  NextJs: Icons.nextjs,
  Pnpm: Icons.pnpm,
};

export const socialItems = [
  {
    href: siteConfig.social.twitter,
    label: "twitter",
    icon: Icons.nextjs,
  },
  {
    href: siteConfig.social.github,
    label: "github",
    icon: Icons.typescript,
  },
];
