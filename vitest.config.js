import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    projects: [
      {
        extends: "./vite.config.js",
        test: {
          include: ["**/*.node.test.{js,jsx}"],
          name: "happy-dom",
          environment: "happy-dom",
        },
      },
      {
        extends: "./vite.config.js",
        optimizeDeps: {
          include: [
            "react-dom/client",
            "@tanstack/react-query",
            "@tanstack/react-query-devtools",
            "@tanstack/react-router",
            "@tanstack/router-devtools",
          ],
        },
        test: {
          setupFiles: ["vitest-browser-react"],
          include: ["**/*.browser.test.{js,jsx}"],
          name: "browser",
          browser: {
            provider: playwright(),
            enabled: true,
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
