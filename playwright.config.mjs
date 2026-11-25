import { defineConfig } from "@playwright/test";

const port = 4173;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${port}/genai-presentation/`,
    browserName: "chromium",
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: `PORT=${port} node tests/serve.mjs`,
    port,
    reuseExistingServer: !process.env.CI,
  },
});
