import { defineConfig } from "vitepress";
import {
  vuePatternComponents,
  vuePatternComposables,
  vuePatternGlobalSetups,
  guideList,
} from "./utils";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Patterns",
  description: "A Collection of useful and vue patterns",
  themeConfig: {
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/jimoh-sodiq/VuePatterns/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdatedText: "Last updated",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Guide",
        items: [
          {
            text: "Guide",
            items: guideList,
          },
        ],
      },
      {
        text: "Components",
        items: vuePatternComponents,
      },
      {
        text: "Composables",
        items: vuePatternComposables,
      },
      {
        text: "Global Setups",
        items: vuePatternGlobalSetups,
      },
      { text: "Packages", link: "..." },
    ],

    sidebar: [
      {
        text: "Guide",
        items: guideList,
      },
      {
        text: "Components",
        items: vuePatternComponents,
      },
      {
        text: "Composables",
        items: vuePatternComposables,
      },
      {
        text: "Global Setups",
        items: vuePatternGlobalSetups,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2023-PRESENT Jimoh Sodiq and VuePattern contributors",
    },
  },
});
