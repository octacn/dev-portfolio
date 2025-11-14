import { ProjectCardDisplay } from "@/components/project-display";
import Container from "@/components/container";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function ProjectPage({ names }: { names?: string[] }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between">
        <Link href="/projects">
          <Button variant="secondary" size="sm">
            <Icons.arrowLeft />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-xl font-medium tracking-wide">Projects</h1>
      </div>

      <div>
        {names?.map((name, idx) => (
          <div key={idx}>hello {name}</div>
        ))}
      </div>
      <Container className="grid grid-cols-2 gap-6">
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
        <ProjectCardDisplay name="case-cobra" />
      </Container>
    </section>
  );
}
