---
outline: deep
---

<script setup>
import Skeleton1 from '../../src/demos/Skeleton1.vue'

</script>

# Skeleton Component

## First Pattern

this is the most basic skeleton. it just requires adding the `animate-pulse` tailwind class to the element you want to make a skeleton.
Customise it to your need to accept colors or border-radius as props as you require. Just arrange the skeleton to look like the loaded markup

### Features

- Unstyled

### Dependencies

- "tailwindcss" - for styling

### Demo

<Skeleton1 />

### Code

::: code-group

<<< ./src/components/Skeleton/Skeleton1.vue
<<< ./src/demos/Skeleton1.vue [Demo.vue]

:::
