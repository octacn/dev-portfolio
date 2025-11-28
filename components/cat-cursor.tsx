"use client";

import Script from "next/script";
import * as React from "react";

export default function CatCursor() {
  const [isCatHidden, setIsCatHidden] = React.useState(false);

  React.useEffect(() => {
    const storedPreference = localStorage.getItem("isCatHidden");
    if (storedPreference) {
      setIsCatHidden(storedPreference === "true");
    }
  }, []);

  React.useEffect(() => {
    const catElement = document.getElementById("ocat");
    if (catElement) {
      catElement.style.display = isCatHidden ? "none" : "block";
    }
  }, [isCatHidden]);

  React.useEffect(() => {
    const handleVisibilityChange = (event: CustomEvent) => {
      setIsCatHidden(event.detail.hidden);
    };

    window.addEventListener(
      "catVisibilityChange",
      handleVisibilityChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "catVisibilityChange",
        handleVisibilityChange as EventListener
      );
    };
  }, []);

  if (!catConfig.enabled) {
    return null;
  }

  return (
    <React.Activity mode={isCatHidden ? "hidden" : "visible"}>
      <Script
        src="/cat/cat.js"
        data-cat="/cat/cat.gif"
        strategy="afterInteractive"
      />
    </React.Activity>
  );
}

const catConfig = {
  enabled: true,
};
