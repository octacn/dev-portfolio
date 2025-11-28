export default function PageHeader({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <section className="mb-8 grid place-items-center place-content-center gap-1">
      <h1 className="text-3xl font-mono text-foreground/90">{heading}</h1>
      <p className="text-muted-foreground text-base sm:text-lg text-center">
        {description}
      </p>
    </section>
  );
}
