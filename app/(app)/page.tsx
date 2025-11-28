import HeroSection from "@/components/_components/hero-section";
import ProjectSection from "@/components/_components/project-section";
import CallToAction from "@/components/call-to-action";
import Container from "@/components/container";
import GithubActivity from "@/components/github-activity";
import SocialMedia from "@/components/social-media";
import SpotifyActivity from "@/components/spotify-activity";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Home",
  description: "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web development. Explore my portfolio, projects, and professional experience.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />

      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <SocialMedia />
        <SpotifyActivity />
      </Container>

      <GithubActivity />
      <ProjectSection />
      <Container>
        <CallToAction />
      </Container>
    </>
  );
}
