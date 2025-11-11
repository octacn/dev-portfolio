import ProjectDisplay from "@/components/project-display";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div>
      <h1>{name}</h1>
      <ProjectDisplay name={"dev-portfolio"} />;
    </div>
  );
}
