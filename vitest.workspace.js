import {
  defineConfig,
  defineProject,
  defineWorkspace,
  mergeConfig,
} from "vitest/config";
import Vue from "@vitejs/plugin-vue";

const sharedConfig = defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    exclude: ["**/node_modules/**"],
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
    },
  },
});

const workspaces = [];

const config = defineProject({
  test: {
    name: "projectA",
  },
});

workspaces.push(mergeConfig(sharedConfig, config));

export default defineWorkspace(workspaces);
