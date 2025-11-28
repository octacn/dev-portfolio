import * as React from "react";
import { Button } from "@/components/ui/button";
import { BotOff, Cat } from "lucide-react";

export default function CatHideButton() {
  const [isCatHidden, setIsCatHidden] = React.useState(false);

  React.useEffect(() => {
    const storedPreference = localStorage.getItem("isCatHidden");
    if (storedPreference) {
      setIsCatHidden(storedPreference === "true");
    }
  }, []);

  const toggleCatVisibility = () => {
    const newValue = !isCatHidden;
    setIsCatHidden(newValue);
    localStorage.setItem("isCatHidden", newValue.toString());

    window.dispatchEvent(
      new CustomEvent("catVisibilityChange", {
        detail: { hidden: newValue },
      })
    );
  };

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleCatVisibility}
      title={isCatHidden ? "Show Cat" : "Hide Cat"}
    >
      {isCatHidden ? <BotOff className="size-4" /> : <Cat className="size-4" />}
      <span className="sr-only">{isCatHidden ? "Show Cat" : "Hide Cat"}</span>
    </Button>
  );
}
