import { ProjectCardDisplay } from "@/components/project-display";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";

export default function ProjectPage({ names }: { names: string[] }) {
  return (
    <section className="mb-8">
      <PageHeader
        heading="Projects"
        description="A showcase of my work and accomplishments."
      />

      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {names.map((name) => (
          <ProjectCardDisplay key={name} name={name} />
        ))}
      </Container>
    </section>
  );
}
