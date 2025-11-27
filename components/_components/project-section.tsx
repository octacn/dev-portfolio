import Container from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { ProjectCardDisplay } from "@/components/project-display";
import { getAllRandomizer } from "@/lib/randomizer";

export default async function ProjectSection() {
  const randomProjects = await getAllRandomizer();

  return (
    <section className="mt-6">
      <SectionHeader
        title="Projects"
        description="A selection of my recent work"
        href="/projects"
      />
      <Container className="grid grid-cols-2 gap-6">
        {randomProjects.map((name) => (
          <ProjectCardDisplay key={name} name={name} />
        ))}
      </Container>
    </section>
  );
}
