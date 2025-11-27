import { type Project } from "@/schema/item";

export const projects: Project["items"] = [
  /**
   * @project 1. authentication
   */
  {
    name: "authentication",
    description:
      "A full-featured user authentication system that enables secure signup, login, and user management. Built with Next.js, MongoDB, and modern security practices, this project focuses on scalable identity management, session handling, and user access control. It provides a centralized authentication solution that can be reused across multiple applications.",
    challenge: [
      "Implementing secure password hashing and validation.",
      "Managing user sessions and authentication state across refreshes.",
      "Integrating third-party login providers (such as Google OAuth).",
      "Handling protected routes and unauthorized access.",
      "Deploying securely with environment-specific configurations.",
    ],
    learning: [
      "Built end-to-end authentication flows using NextAuth/Auth.js.",
      "Learned secure credential handling and password encryption techniques.",
      "Implemented session-based authentication and cookie security.",
      "Integrated OAuth providers with custom credential authentication.",
      "Understood real-world authentication architecture in production systems.",
    ],
    role: "full stack",
    preview: "https://auth.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/user-authentication",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: [
      "nextjs",
      "react",
      "mongodb",
      "typescript",
      "nextauth",
      "tailwind",
    ],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 2. axis-buddy
   */
  {
    name: "axis-buddy",
    description:
      "Axis Buddy is a digital agency website built to showcase professional services such as UI/UX design, web development, branding, and video editing. The platform focuses on clean visuals, clarity of services, and lead generation with a strong call-to-action flow for client inquiries. It is optimized for speed, responsiveness, and modern user experience across devices.",
    challenge: [
      "Designing a professional agency layout that builds trust and authority.",
      "Creating a responsive UI that works seamlessly across mobile, tablet, and desktop.",
      "Implementing effective call-to-action sections to improve client conversions.",
      "Optimizing page performance for fast loading and smooth transitions.",
      "Maintaining consistent branding and visual identity across all sections.",
    ],
    learning: [
      "Learned how to structure a service-based agency website for better user flow.",
      "Improved understanding of responsive UI design using Tailwind CSS.",
      "Gained experience in SEO-friendly website structure for business platforms.",
      "Enhanced skills in performance optimization in Next.js.",
      "Practiced applying real-world design principles for client-focused layouts.",
    ],
    role: "full stack",
    preview: "https://axisbuddy.com",
    github: "https://github.com/sahilkumardev/axis-buddy",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "vercel",
      "mongodb",
    ],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 3. bento-portfolio
   */
  {
    name: "bento-portfolio",
    description:
      "A modern bento-style developer portfolio built to showcase projects, skills, and professional presence with a clean, minimal and interactive layout. Designed to present work, tools, and contact information in a visually structured grid format for better usability and first impressions.",
    challenge: [
      "Designing a grid-based bento layout that stays responsive across all screen sizes.",
      "Maintaining visual balance between content blocks without overwhelming the UI.",
      "Improving loading speed while handling heavy UI components and animations.",
      "Ensuring consistent design system across cards and sections.",
      "Structuring project data for scalability and easy future updates.",
    ],
    learning: [
      "Learned how to build bento-style UI with CSS grid and flexible layouts.",
      "Improved project structuring for scalable portfolio management.",
      "Strengthened performance optimization techniques in Next.js.",
      "Gained confidence in UI hierarchy and visual storytelling.",
      "Deepened understanding of responsive design principles.",
    ],
    role: "full stack",
    preview: "https://bento.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/bento-portfolio",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "typescript", "tailwind", "vercel"],
    category: "web",
    tech: "frontend",
  },
  /**
   * @project 4. brain-wave
   */
  {
    name: "brain-wave",
    description:
      "BrainWave is a modern AI-themed frontend web application focused on delivering a clean, interactive and visually appealing user experience inspired by AI platforms. The project demonstrates strong UI design principles, responsive layout techniques, and frontend performance optimization using Next.js and Tailwind CSS.",
    challenge: [
      "Creating a modern UI that visually represents an AI-powered product.",
      "Maintaining responsiveness across different screen sizes.",
      "Implementing animated elements without harming performance.",
      "Building reusable UI components for scalability.",
      "Ensuring cross-browser compatibility.",
    ],
    learning: [
      "Strengthened frontend development skills with Next.js.",
      "Learned advanced Tailwind CSS layout techniques.",
      "Improved understanding of responsive UI systems.",
      "Gained experience in component-driven UI architecture.",
      "Built better visual hierarchy and design consistency.",
    ],
    role: "frontend",
    preview: "https://brainwave.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/brain-wave-landing-page",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["react", "javascript", "tailwind"],
    category: "web",
    tech: "frontend",
  },
  /**
   * @project 5. case-cobra
   */
  {
    name: "case-cobra",
    description:
      "CaseCobra is a modern custom phone case e-commerce website where users can upload their own designs and order personalized mobile covers. It provides a smooth design experience, real-time previews, and a clean checkout flow with responsive UI and performance-focused architecture.",
    challenge: [
      "Implementing image upload and preview functionality with performance optimization.",
      "Handling responsive layout for multiple device sizes and screen resolutions.",
      "Managing component reusability and UI consistency across pages.",
      "Optimizing page load speed for image-heavy pages.",
      "Creating a smooth user flow from customization to checkout.",
    ],
    learning: [
      "Learned how to manage complex UI states in React and Next.js.",
      "Improved understanding of image optimization and lazy loading techniques.",
      "Strengthened frontend architecture using reusable components.",
      "Gained experience in building real-world e-commerce flows.",
      "Learned how to structure scalable frontend projects.",
    ],
    role: "full stack",
    preview: "https://case-cobra.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/case-cobra",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "prisma",
      "stripe",
      "zod",
      "shadcn",
    ],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 6. chrome-page
   */
  {
    name: "chrome-page",
    description:
      "A custom Chrome new tab landing page designed for productivity and minimalism. This project replaces the default new tab with a clean, fast, and visually pleasing dashboard featuring quick access links, time/date display, and a modern UI. Built as a frontend-focused project with performance and simplicity in mind.",
    challenge: [
      "Designing a clean interface that feels lightweight and modern.",
      "Making the UI responsive across all screen sizes.",
      "Optimizing performance for instant load on every new tab.",
      "Maintaining aesthetic balance between design and usability.",
      "Handling asset optimization and UI animations smoothly.",
    ],
    learning: [
      "Improved understanding of modern UI layout systems using Tailwind CSS.",
      "Learned how to structure a frontend project for scalability in Next.js.",
      "Gained experience in creating Chrome-optimized UIs.",
      "Learned performance optimization techniques for static pages.",
      "Improved typography and color system design skills.",
    ],
    role: "frontend",
    preview: "https://chromepage.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/chrome-landing-page",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["react", "tailwind", "typescript"],
    category: "web",
    tech: "frontend",
  },

  /**
   * @project 7. classic-portfolio
   */
  {
    name: "classic-portfolio",
    description:
      "A classic-style personal portfolio website designed to showcase my skills, services, and contact details with a clean and professional layout. The website focuses on simplicity, smooth navigation, and a strong personal brand presence using a minimal UI design.",
    challenge: [
      "Designing a clean layout while keeping the UI minimal and attractive.",
      "Maintaining consistent spacing, fonts, and color usage across pages.",
      "Optimizing responsive behavior for mobile and tablet devices.",
      "Structuring content for clarity and easy navigation.",
    ],
    learning: [
      "Learned how to structure a personal portfolio for better user experience.",
      "Improved responsive design techniques using CSS media queries and utilities.",
      "Gained better understanding of layout composition and typography hierarchy.",
      "Improved frontend debugging and browser testing skills.",
    ],
    role: "frontend",
    preview: "https://classic.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/classic-portfolio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["react", "tailwind", "javascript"],
    category: "web",
    tech: "frontend",
  },
  /**
   * @project 8. essence-portfolio
   */
  {
    name: "essence-portfolio",
    description:
      "A modern personal developer portfolio website designed to present projects, skills, and professional experience in a clean and visually appealing layout. Built with Next.js, TypeScript, and Tailwind CSS, the site focuses on performance, accessibility, and smooth user interaction with a strong emphasis on UI/UX design and responsiveness.",
    challenge: [
      "Creating a minimal yet visually engaging layout that represents a strong personal brand.",
      "Making the design fully responsive across mobile, tablet, and desktop screens.",
      "Organizing content in a way that keeps the portfolio both professional and easy to navigate.",
      "Optimizing animations and visual effects without hurting performance.",
      "Maintaining consistency in design system and component styling.",
    ],
    learning: [
      "Improved understanding of Next.js routing and component structuring.",
      "Learned how to use Tailwind CSS for scalable and maintainable UI design.",
      "Gained experience in building accessible user interfaces.",
      "Strengthened skills in responsive layout design using Flex box and Grid.",
      "Improved code organization for reusable UI components.",
    ],
    role: "frontend",
    preview: "https://essence.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/essence-portfolio",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "typescript", "tailwind"],
    category: "web",
    tech: "frontend",
  },
  /**
   * @project 10. feedbackify
   */
  {
    name: "feedbackify",
    description:
      "A lightweight frontend web app that collects and displays user feedback through a clean and interactive interface. Built to deliver a smooth user experience with modern UI patterns and responsive design.",
    challenge: [
      "Designing a simple yet engaging feedback submission interface.",
      "Handling client-side form validation without backend support.",
      "Building a responsive layout for all screen sizes.",
      "Creating reusable UI components for consistency.",
      "Managing user interactions efficiently with React state.",
    ],
    learning: [
      "Learned how to build user-focused interfaces with React and Next.js.",
      "Improved skills in Tailwind CSS for layout and component styling.",
      "Practiced accessibility and form UX best practices.",
      "Enhanced understanding of component-based architecture.",
      "Improved frontend performance and code organization.",
    ],
    role: "frontend",
    preview: "https://feedbackify.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/feedbackify",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: [
      "nextjs",
      "react",
      "tailwind",
      "typescript",
      "mongodb",
      "nextauth",
    ],
    category: "web",
    tech: "frontend",
  },
  /**
   * @project 11. my-admit
   */
  {
    name: "my-admit",
    description:
      "A modern, AI-focused admissions platform UI designed for building, reviewing, and managing university application essays. The project emphasizes a clean user journey for writing assistance, application tracking, and dashboard-based workflows. Built as a frontend showcase of a real-world SaaS interface with interactive sections and conversion-focused design.",
    challenge: [
      "Designing a product-style interface instead of a traditional portfolio layout.",
      "Creating UX flows for dashboards, forms, and writing tools without backend logic.",
      "Maintaining visual consistency across multiple sections and pages.",
      "Implementing responsive layouts for complex UI components on smaller screens.",
      "Optimizing animations and UI performance for smooth browsing experience.",
    ],
    learning: [
      "Learned how to structure SaaS-style layouts using Next.js routing.",
      "Improved frontend architecture using reusable components.",
      "Practiced creating dashboard-style UI and data presentation components.",
      "Gained experience in building clean UX for form-based applications.",
      "Improved performance optimization using lazy loading and component splitting.",
    ],
    role: "full stack",
    preview: "https://myadmit.ai",
    github: "",
    timeline: "2024",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "mongodb",
      "shadcn",
      "nextauth",
      "stripe",
    ],
    category: "web",
    tech: "full stack",
  },

  
  /**
   * @project 12. shadwui-v1
   */
  {
    name: "shadwui-v1",
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
    github: "https://github.com/sahilkumardev/dev-portfolio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 13. shadwui-v2
   */
  {
    name: "shadwui-v2",
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
    github: "https://github.com/sahilkumardev/dev-portfolio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 14. shadwui-v3
   */
  {
    name: "shadwui-v3",
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
    github: "https://github.com/sahilkumardev/dev-portfolio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 15. tempratureio
   */
  {
    name: "tempratureio",
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
    preview: "https://temperatureio.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/temperatureio",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  },
  /**
   * @project 16. zee-movie-hub
   */
  {
    name: "zee-movie-hub",
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
    preview: "https://zeemoviehub.sahilkumardev.com",
    github: "https://github.com/sahilkumardev/zeemovieshub",
    timeline: "2023",
    teamsize: "1",
    functionality: "All Systems Operational",
    status: "completed",
    techstack: ["nextjs", "react", "mongodb", "typescript", "claude"],
    category: "web",
    tech: "full stack",
  },
];
