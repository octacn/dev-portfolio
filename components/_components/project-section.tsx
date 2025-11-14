import Container from "../container";
import { SectionHeader } from "../section-header";
import { ProjectCardDisplay } from "../project-display";

export default function ProjectSection() {
  return (
    <section className="mt-6">
      <SectionHeader
        title="Projects"
        description="A selection of my recent work"
        href="#"
      />
      <Container className="grid grid-cols-2 gap-6">
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
      </Container>
    </section>
  );
}
