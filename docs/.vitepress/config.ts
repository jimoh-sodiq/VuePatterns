import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Patterns",
  description: "A Collection of useful and vue patterns",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Guide",
        items: [
          {
            text: "Guide",
            items: [
              { text: "Get Started", link: "/guide/" },
              { text: "Components", link: "/guide/components" },
              { text: "Composables", link: "/guide/composables" },
              { text: "Global Setups", link: "/guide/global-setups" },
              { text: "Packages", link: "/guide/packages" },
              { text: "Examples", link: "/guide/examples" },
              { text: "Contributing", link: "/guide/contributing" },
            ],
          },
        ],
      },
      {
        text: "Components",
        items: [
          {
            text: "Form",
            items: [
              { text: "Input", link: "..." },
              { text: "Textarea", link: "..." },
            ],
          },
          {
            text: "Layout",
            items: [
              { text: "Input", link: "..." },
              { text: "Textarea", link: "..." },
            ],
          },
          {
            text: "General",
            items: [
              { text: "Accordion One", link: "/components/accordion-one" },
              { text: "Textarea", link: "..." },
            ],
          },
        ],
      },
      {
        text: "Composables",
        items: [
          {
            text: "useTableSelection",
            link: "...",
          },
        ],
      },
      {
        text: "Global Setups",
        items: [
          {
            text: "Modal System",
            link: "...",
          },
          {
            text: "Toast System",
            link: "...",
          },
          {
            text: "Localization (translation)",
            link: "...",
          },
          {
            text: "Api System",
            link: "...",
          },
          {
            text: "Cookie Consent",
            link: "...",
          },
          {
            text: "Icon Management",
            link: "...",
          },
          {
            text: "Page Transitions",
            link: "...",
          },
          {
            text: "Live Theming",
            link: "...",
          },
        ],
      },
      { text: "Packages", link: "..." },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Get Started", link: "/guide/" },
          { text: "Components", link: "/guide/components" },
          { text: "Composables", link: "/guide/composables" },
          { text: "Global Setups", link: "/guide/global-setups" },
          { text: "Packages", link: "/guide/packages" },
          { text: "Examples", link: "/guide/examples" },
          { text: "Contributing", link: "/guide/contributing" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Get Started", link: "/guide/" },
          { text: "Components", link: "/guide/components" },
          { text: "Composables", link: "/guide/composables" },
          { text: "Global Setups", link: "/guide/global-setups" },
          { text: "Packages", link: "/guide/packages" },
          { text: "Examples", link: "/guide/examples" },
          { text: "Contributing", link: "/guide/contributing" },
        ],
      },
      {
        text: "Composables",
        items: [
          { text: "Get Started", link: "/guide/" },
          { text: "Components", link: "/guide/components" },
          { text: "Composables", link: "/guide/composables" },
          { text: "Global Setups", link: "/guide/global-setups" },
          { text: "Packages", link: "/guide/packages" },
          { text: "Examples", link: "/guide/examples" },
          { text: "Contributing", link: "/guide/contributing" },
        ],
      },
      {
        text: "Global Setups",
        items: [
          { text: "Get Started", link: "/guide/" },
          { text: "Components", link: "/guide/components" },
          { text: "Composables", link: "/guide/composables" },
          { text: "Global Setups", link: "/guide/global-setups" },
          { text: "Packages", link: "/guide/packages" },
          { text: "Examples", link: "/guide/examples" },
          { text: "Contributing", link: "/guide/contributing" },
        ],
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
