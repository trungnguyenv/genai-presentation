import { test, expect } from "@playwright/test";
import { recordOutsideRequests } from "./helpers.mjs";

test("the handout has its five sections in the decided order", async ({ page }) => {
  await page.goto("./handout/");
  await expect(page.locator("main h2")).toHaveText([
    "Try it this week",
    "Skills for Copilot Chat",
    "Who to follow",
    "Sources for each idea",
    "Licence",
  ]);
});

const cards = (page) => page.locator("[data-skill]");

test("there are three skill cards, grill-me, prototype, wait-what, each with Copy and a collapsed text panel, and no Download", async ({ page }) => {
  await page.goto("./handout/");
  await expect(cards(page).locator("h3")).toHaveText(["grill-me", "prototype", "wait-what"]);
  for (const card of await cards(page).all()) {
    await expect(card.getByRole("button", { name: "Copy" })).toBeVisible();
    await expect(card.locator("details")).toHaveCount(1);
    await expect(card.locator("details")).not.toHaveAttribute("open");
    await expect(card.locator("summary")).toHaveText("Show the text");
    await expect(card.locator("[data-skill-text]")).toBeHidden();
    await expect(card).toContainText("Use it when");
  }
  await expect(page.getByText(/download/i)).toHaveCount(0);
});

test("clicking Copy puts exactly the panel's text on the clipboard and shows Copied", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("./handout/");
  for (const card of await cards(page).all()) {
    const name = await card.getAttribute("data-skill");
    await card.locator("summary").click();
    const shown = await card.locator("[data-skill-text]").innerText();
    await card.getByRole("button", { name: "Copy" }).click();
    await expect(card.getByRole("button", { name: "Copied" })).toBeVisible();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toBe(shown);
    expect(copied.startsWith(`<skill name="${name}">`)).toBe(true);
    expect(copied.endsWith("</skill>")).toBe(true);
    expect(copied).toMatch(/<!-- Adapted from mattpocock\/skills \(.*commit 5863806\)\. MIT, Copyright \(c\) 2026 Matt Pocock\. -->/);
    expect(copied).not.toContain("PROTOTYPE");
  }
});

test("each card's character count equals the length of its skill text", async ({ page }) => {
  await page.goto("./handout/");
  for (const card of await cards(page).all()) {
    const text = await card.locator("[data-skill-text]").textContent();
    const label = await card.locator("[data-skill-length]").textContent();
    expect(Number(label.replace(/[^0-9]/g, ""))).toBe(text.length);
    expect(text.length).toBeGreaterThan(300);
  }
});

test("the paste skills open by telling the chat to follow them, and grill-me waits for confirmation", async ({ page }) => {
  await page.goto("./handout/");
  for (const name of ["grill-me", "prototype"]) {
    const text = await page.locator(`[data-skill="${name}"] [data-skill-text]`).textContent();
    // Line 1 is the <skill> tag, line 2 the attribution comment, then a blank line.
    expect(text.split("\n")[3]).toMatch(/^Follow this skill for the rest of this chat\. The .* comes after the skill, or in my next message\.$/);
  }
  await expect(page.locator('[data-skill="grill-me"] [data-skill-text]')).toContainText("Do not produce the output until I confirm.");
});

const MIT = `MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

test("the licence section has the adaptation note and the full MIT text, word for word", async ({ page }) => {
  await page.goto("./handout/");
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Licence" }) });
  await expect(section).toContainText("Adapted from mattpocock/skills, commit 5863806. Changed for our team.");
  expect(await section.locator("[data-licence]").textContent()).toBe(MIT);
});

test("Who to follow lists Matt Pocock, Jeff Su and Kun Chen in order, with the links to start with", async ({ page }) => {
  await page.goto("./handout/");
  const people = page.locator("[data-person]");
  await expect(people.locator("b")).toHaveText(["Matt Pocock", "Jeff Su", "Kun Chen"]);
  const links = async (i) => people.nth(i).locator("a").evaluateAll((as) => as.map((a) => a.href));
  expect(await links(0)).toEqual([
    "https://github.com/mattpocock/skills/tree/5863806dd4e15c63174bee4e7515a4256792ecfa",
    "https://www.aihero.dev/ai-coding-dictionary",
  ]);
  expect(await links(1)).toEqual([
    "https://www.youtube.com/@jeffsu",
    "https://www.youtube.com/watch?v=FwOTs4UxQS4",
  ]);
  expect(await links(2)).toEqual([
    "https://www.youtube.com/@kunchenguid",
    "https://blog.kunchenguid.com/",
    "https://creatoreconomy.so/p/how-this-ex-meta-l8-engineer-ships-40-prs-a-day-with-ai-kun-chen",
  ]);
  const section = page.locator("section", { has: page.getByRole("heading", { name: "Who to follow" }) });
  await expect(section.locator('a[href="https://code.claude.com/docs/en/best-practices"]')).toHaveCount(1);
});

test("the sources table lists each idea in Talk order with a primary and a second source", async ({ page }) => {
  await page.goto("./handout/");
  const rows = page.locator("table tbody tr");
  await expect(rows.locator("td:first-child")).toHaveText([
    "Grilling", "Shared vocabulary", "Environment inspection", "Prototype", "Plan, then build", "Smart zone", "Skills",
  ]);
  for (const row of await rows.all()) {
    await expect(row.locator("td:nth-child(2) a")).toHaveCount(1);
    await expect(row.locator("td:nth-child(3) a")).toHaveCount(1);
  }
  for (const href of await page.locator('a[href*="github.com/mattpocock/skills"]').evaluateAll((as) => as.map((a) => a.href))) {
    expect(href).toContain("5863806dd4e15c63174bee4e7515a4256792ecfa");
  }
});

test("the handout loads nothing from another origin", async ({ page, baseURL }) => {
  const outside = recordOutsideRequests(page, baseURL);
  await page.goto("./handout/");
  for (const s of await page.locator("summary").all()) await s.click();
  expect(outside).toEqual([]);
});

test("when the Clipboard API isn't available (as from file://), Copy still copies the text", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.addInitScript(() => {
    navigator.clipboard.writeText = () => Promise.reject(new Error("not allowed"));
  });
  await page.goto("./handout/");
  const card = cards(page).filter({ has: page.locator("h3", { hasText: "wait-what" }) });
  await card.getByRole("button", { name: "Copy" }).click();
  await expect(card.getByRole("button", { name: "Copied" })).toBeVisible();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toBe(await card.locator("[data-skill-text]").textContent());
});

test("Copy says so when the text could not be copied", async ({ page }) => {
  await page.addInitScript(() => {
    navigator.clipboard.writeText = () => Promise.reject(new Error("not allowed"));
    document.execCommand = () => false;
  });
  await page.goto("./handout/");
  await cards(page).first().getByRole("button", { name: "Copy" }).click();
  await expect(cards(page).first().getByRole("button", { name: "Copy failed" })).toBeVisible();
});
