import { Link } from "next-view-transitions"

import { Button } from "@/components/ui/button"
import ModeToggler from "@/components/mode-toggler"

export default function Home() {
  return (
    <div className="flex min-h-[1000px] items-center justify-center">
      <h1 className="text-center text-2xl capitalize font-cursive">
        portfolio initializes or started
      </h1>
      <ModeToggler />

      <Button className="mt-10 font-mono">
        <Link href={"/projects"}>Projects</Link>
      </Button>
    </div>
  )
}
