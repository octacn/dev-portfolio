import ModeToggler from "@/components/mode-toggler";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-center text-2xl capitalize">
        portfolio initializes or started
      </h1>

      <br />
      <ModeToggler />
    </div>
  );
}
