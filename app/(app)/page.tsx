import HeroSection from "@/components/_components/hero-section";
import ProjectSection from "@/components/_components/project-section";
import CallToAction from "@/components/call-to-action";
import Container from "@/components/container";
import GithubActivity from "@/components/github-activity";
import SocialMedia from "@/components/social-media";
import SpotifyActivity from "@/components/spotify-activity";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Container className="grid grid-cols-2 gap-x-6">
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
