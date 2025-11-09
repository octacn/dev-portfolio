import Box from "@/components/box";
import HighlightBox from "@/components/highlight-box";
import { Icons } from "@/components/icons";

export default function HeroSection() {
  return (
    <Box>
      <h1 className="">
        <span className="text-4xl tracking-wider font-cursive underline underline-offset-6 decoration-2">
          hi, i&apos;m Sahilkumardev
        </span>
        <span className="text-2xl font-cursive text-muted-foreground ml-2">
          Full Stack Developer
        </span>
      </h1>

      <div className="mt-10">
        <HighlightBox href="https://nextjs.org/">
          <Icons.nextjs />
          Nextjs
        </HighlightBox>
      </div>
    </Box>
  );
}
