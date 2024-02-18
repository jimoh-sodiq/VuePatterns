---
outline: deep
---

<script setup>
import Pagination1 from '../../src/demos/Pagination1.vue'

</script>

# Pagination Component

This page Show an Example of a Reusable Pagination Component.

## First Pattern

This is the wrapper for the Pagination component functionality.

### Demo

<Pagination1 />

### Dependencies

```
{
    "tailwindcss": "^3.3.2", // for styling
}
```

### Code

::: code-group

<<< ./src/components/Pagination/Pagination1.vue
<<< ./src/demos/Pagination1.vue [Demo1.vue]
<<< ./src/composables/usePagination.ts
:::
