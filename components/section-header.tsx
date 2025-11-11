import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Link } from "next-view-transitions";

const SectionHeader = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <div className="flex items-center-safe justify-between">
      <div>
        <h2 className="text-2xl font-medium font-mono">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Link href={href}>
        <Button variant={"outline"}>
          Show all
          <Icons.arrowRight />
        </Button>
      </Link>
    </div>
  );
};

export { SectionHeader };
