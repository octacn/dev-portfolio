import Script from "next/script";

export default function CatCursor() {
  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="/cat/cat.js" data-cat="/cat/cat.gif" />;
}

const catConfig = {
  enabled: true,
};
