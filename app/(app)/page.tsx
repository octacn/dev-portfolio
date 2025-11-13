import HeroSection from "@/components/_components/hero-section";
import ProjectSection from "@/components/_components/project-section";
import Container from "@/components/container";
import GithubActivity from "@/components/github-activity";
import SpotifyActivity from "@/components/spotify-activity";

export default function Home() {
  return (
    <>
      <HeroSection />

      <GithubActivity />

      <ProjectSection />

      <Container>
        <SpotifyActivity />
      </Container>
    </>
  );
}
