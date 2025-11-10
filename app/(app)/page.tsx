import HeroSection from "@/components/_components/hero-section";
import Container from "@/components/container";
import GithubActivity from "@/components/github-activity";
import SpotifyActivity from "@/components/spotify-activity";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GithubActivity />

      <Container>
        <SpotifyActivity />
      </Container>
    </>
  );
}
