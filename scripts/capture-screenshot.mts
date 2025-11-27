import { existsSync } from "fs";
import path from "path";
import puppeteer from "puppeteer";

import { websiteIds } from "../lib/website";

const SCREENSHOT_PATH = path.join(process.cwd(), "public/project");

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  const websitesIds = await websiteIds();
  const websites = websitesIds.filter((web) => {
    const lightPath = path.join(SCREENSHOT_PATH, `${web.id}-light.png`);
    const darkPath = path.join(SCREENSHOT_PATH, `${web.id}-dark.png`);
    return !existsSync(lightPath) || !existsSync(darkPath);
  });

  if (websites.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture");
    return;
  }

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  });

  for (const website of websites) {
    try {
      const pageUrl = website.website;
      const page = await browser.newPage();

      await page.goto(pageUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      console.log(`- Capturing ${website.id}...`);

      for (const theme of ["light", "dark"]) {
        const screenshotPath = path.join(
          SCREENSHOT_PATH,
          `${website.id}${theme === "dark" ? "-dark" : "-light"}.png`
        );

        if (existsSync(screenshotPath)) continue;

        await page.evaluate((currentTheme) => {
          localStorage.setItem("theme", currentTheme);
        }, theme);

        await page.reload({
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        console.log(`⏳ Waiting 60s for ${website.id} (${theme})`);
        await new Promise((resolve) => setTimeout(resolve, 60000)); // ✅ REPLACEMENT

        await page.screenshot({ path: screenshotPath as `${string}.png` });
      }

      await page.close();
    } catch {
      console.log(`❌ Failed: ${website.id}`);
    }
  }

  await browser.close();
}

try {
  console.log("🔍 Capturing screenshots...");

  await captureScreenshots();

  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
