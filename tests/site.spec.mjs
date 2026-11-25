import { test, expect } from "@playwright/test";
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

const site = join(import.meta.dirname, "..", "site");

test("slide 17 links to the handout, and the handout links back, under the sub-path", async ({ page, baseURL }) => {
  await page.goto("./#17");
  const link = page.locator("[data-slide]:visible a[data-handout-link]");
  await expect(link).toHaveText("trungnguyenv.github.io/genai-presentation/handout/");
  await link.click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Let the AI grill you: handout");
  expect(page.url().startsWith(new URL("handout/", baseURL).href)).toBe(true);
  await page.locator("[data-slides-link]").click();
  await expect(page.locator("[data-slide]")).toHaveCount(17);
  expect(page.url().startsWith(baseURL)).toBe(true);
});

test("both pages work from file://", async ({ page }) => {
  await page.goto(pathToFileURL(join(site, "index.html")).href + "#16");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("[data-slide]:visible [data-slide-point]")).toHaveText(
    "The ideas outlast the tools: take them wherever you explore next.",
  );
  await page.locator("[data-slide]:visible a[data-handout-link]").click();
  await expect(page.locator("[data-skill]")).toHaveCount(3);
  await expect(page.locator("[data-skill-length]").first()).not.toBeEmpty();
  await page.locator("[data-slides-link]").click();
  await expect(page.locator("[data-slide]")).toHaveCount(17);
});

test("the site folder holds only the published pages and .nojekyll", () => {
  const files = readdirSync(site, { recursive: true, withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => relative(site, join(d.parentPath, d.name)))
    .sort();
  expect(files).toEqual([".nojekyll", "handout/index.html", "index.html"]);
});
