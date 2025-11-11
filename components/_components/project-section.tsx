import Container from "../container";
import { ProjectCard } from "../card";
import { SectionHeader } from "../section-header";

export default function ProjectSection() {
  return (
    <section className="mt-6">
      <SectionHeader
        title="Projects"
        description="A selection of my recent work"
        href="#"
      />
      <Container className="grid grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Container>
    </section>
  );
}
