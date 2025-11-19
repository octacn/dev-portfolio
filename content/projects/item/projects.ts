import { type Project } from "@/schema/item";

export const projects: Project["items"] = [
  {
    name: "case-cobra",
    description:
      "My personal developer portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS. Technologies Used: Next.js React Tailwind CSS TypeScript Features: Responsive design for optimal viewing on all devices Interactive project showcase with links to GitHub repositories",
    challenge: [
      "Designing a responsive layout that looks great on all devices.",
      "Implementing interactive elements to showcase projects effectively.",
      "Optimizing performance for fast load times.",
    ],
    learning: [
      "Gained experience with Next.js and its features for building static and dynamic web applications.",
      "Improved skills in Tailwind CSS for rapid UI development.",
      "Learned best practices for portfolio website design and user experience.",
    ],
    role: "full stack",
    preview: "https://case-cobra.sahilkumardev.com",
    img: "",
    github: "https://github.com/sahilkumardev/dev-portfolio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  }, 
];
