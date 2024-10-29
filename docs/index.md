---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
sidebar: false

hero:
  name: "Vue Patterns"
  text: "A Reference for Common Patterns in Vue"
  tagline: Collection of Essential Vue Patterns

  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/jimoh-sodiq/VuePatterns

features:
  - title: Components
    details: A collection of common reusable component
    icon: 🧩
  - title: Composables
    details: A collection of useful composables
    icon: 🔁
  - title: Global Project Patterns
    details: Instructions on how to organize a vue/nuxt codebase
    icon: 🎪
  - title: Package Suggestions
    details: A collection of useful packages for simplifying things
    icon: 📦️
---


<script setup>
import Home from '../src/components/Home.vue'

</script>

<Home />
