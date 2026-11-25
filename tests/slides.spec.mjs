import { test, expect } from "@playwright/test";
import { recordOutsideRequests } from "./helpers.mjs";

// A copy of the Slide point table in issue #11. The Slides must match it.
const SLIDE_POINTS = [
  "This talk was planned by letting an AI interview me, not by writing prompts.",
  "The AI knows everything except what you expect, so it guesses.",
  "Grilling means the AI interviews you until you both understand the task.",
  "In the IDE, grilling stops the agent from confidently changing the wrong thing.",
  "The questions bring out what you forgot, and ideas you never had.",
  "Stop when you and the AI would write the same spec.",
  "This talk was made by letting the AI grill me.",
  "Agree on words once, and every later chat starts from them.",
  "Show the AI the real thing, not your description of it.",
  "React to something rough before you decide.",
  "Decide first, build second.",
  "Start a fresh chat for each task to keep the AI at its sharpest.",
  "Write down how you want the AI to work once, then reuse it.",
  "Understanding first, output second.",
  "Start with one grilling round on your next task.",
  "Learn it even if you never use it at work.",
  "The ideas outlast the tools: take them wherever you explore next.",
];

const visibleSlide = (page) => page.locator("[data-slide]:visible");
const caption = (page) => visibleSlide(page).locator("[data-slide-point]");
const frame = (page) => page.locator("[data-frame]");

async function expectInside(inner, outer) {
  const innerBox = await inner.boundingBox();
  const outerBox = await outer.boundingBox();
  expect(innerBox, "inner element is rendered").not.toBeNull();
  const tolerance = 1; // px, for sub-pixel rounding after scaling
  expect(innerBox.x).toBeGreaterThanOrEqual(outerBox.x - tolerance);
  expect(innerBox.y).toBeGreaterThanOrEqual(outerBox.y - tolerance);
  expect(innerBox.x + innerBox.width).toBeLessThanOrEqual(outerBox.x + outerBox.width + tolerance);
  expect(innerBox.y + innerBox.height).toBeLessThanOrEqual(outerBox.y + outerBox.height + tolerance);
}

test("there are 17 slides, each with its Slide point as a visible caption, in order", async ({ page }) => {
  await page.goto("./");
  await expect(page.locator("[data-slide]")).toHaveCount(SLIDE_POINTS.length);
  for (const [i, point] of SLIDE_POINTS.entries()) {
    await page.goto(`./#${i + 1}`);
    await expect(visibleSlide(page)).toHaveCount(1);
    await expect(caption(page)).toHaveText(point);
    await expect(caption(page)).not.toBeEmpty();
    await expectInside(caption(page), frame(page));
  }
});

const currentNumber = async (page) => {
  const slides = page.locator("[data-slide]");
  const n = await slides.count();
  for (let i = 0; i < n; i++) if (await slides.nth(i).isVisible()) return i + 1;
  return null;
};

async function expectOnSlide(page, n) {
  await expect.poll(() => currentNumber(page)).toBe(n);
  expect(new URL(page.url()).hash).toBe(`#${n}`);
}

test("pressing → on slide 3 shows slide 4, space goes on, ← goes back, and the hash follows", async ({ page }) => {
  await page.goto("./#3");
  await page.keyboard.press("ArrowRight");
  await expectOnSlide(page, 4);
  await page.keyboard.press(" ");
  await expectOnSlide(page, 5);
  await page.keyboard.press("ArrowLeft");
  await expectOnSlide(page, 4);
});

test("the keys don't go past the first or last slide", async ({ page }) => {
  await page.goto("./#1");
  await page.keyboard.press("ArrowLeft");
  await expectOnSlide(page, 1);
  await page.goto("./#17");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press(" ");
  await expectOnSlide(page, 17);
});

test("opening with #N shows slide N, and a reload stays on it", async ({ page }) => {
  await page.goto("./#9");
  await expectOnSlide(page, 9);
  await page.keyboard.press("ArrowRight");
  await page.reload();
  await expectOnSlide(page, 10);
});

for (const hash of ["", "#0", "#18", "#abc", "#3.5"]) {
  test(`a missing or bad hash (${hash || "none"}) shows slide 1`, async ({ page }) => {
    await page.goto(`./${hash}`);
    await expectOnSlide(page, 1);
  });
}

for (const [width, height] of [[1280, 720], [1920, 1080], [1000, 900], [1600, 600]]) {
  test(`at ${width}×${height} the frame keeps 16:9 and stays inside the window`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto("./#14");
    const box = await frame(page).boundingBox();
    expect(box.width / box.height).toBeCloseTo(16 / 9, 2);
    expect(box.x).toBeGreaterThanOrEqual(-1);
    expect(box.y).toBeGreaterThanOrEqual(-1);
    expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
    expect(box.y + box.height).toBeLessThanOrEqual(height + 1);
    // It fills the window in one direction.
    expect(Math.max(box.width / width, box.height / height)).toBeCloseTo(1, 2);
  });
}

test("slide 16 shows the quote credited exactly '— a wise man'", async ({ page }) => {
  await page.goto("./#16");
  const slide = visibleSlide(page);
  await expect(slide).toContainText(
    "Don't be afraid to learn something just because you may not end up doing it. Learning is about developing your ability to learn independently, so you can quickly adapt, acquire new skills, and explore different fields in a world that is constantly changing and full of uncertainty!",
  );
  await expect(slide.locator("strong")).toHaveText(
    "Don't be afraid to learn something just because you may not end up doing it.",
  );
  await expect(slide.locator("[data-quote-credit]")).toHaveText("— a wise man");
});

test("the Slides load nothing from another origin", async ({ page, baseURL }) => {
  const outside = recordOutsideRequests(page, baseURL);
  await page.goto("./");
  for (let i = 0; i < 16; i++) await page.keyboard.press("ArrowRight");
  await expectOnSlide(page, 17);
  expect(outside).toEqual([]);
});
