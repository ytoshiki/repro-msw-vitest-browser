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
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },

    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      // https://playwright.dev
      providerOptions: {},
    },
  },
});

const workspaces = [];

const config = defineProject({
  test: {
    name: "abcdefg",
  },
});

workspaces.push(mergeConfig(sharedConfig, config));

export default defineWorkspace(workspaces);
